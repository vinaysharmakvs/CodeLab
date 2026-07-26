import { applyApiSecurityHeaders, fetchPublicHtml, normalizePublicWebsiteUrl, rateLimit } from "./security.js";

function clean(value) {
  return String(value || "").trim();
}

function clamp(score, max = 100) {
  return Math.max(0, Math.min(max, Math.round(Number(score) || 0)));
}

function normalizeWebsiteUrl(value) {
  return normalizePublicWebsiteUrl(value);
}

function words(value, keepGeneric = false) {
  const generic = ["the", "and", "for", "with", "school", "clinic", "store", "business", "services", "academy", "international"];
  return clean(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && (keepGeneric || !generic.includes(word)));
}

function tagContent(html, regex) {
  const match = html.match(regex);
  return match ? (match[1] || match[2] || "").trim() : "";
}

function countMatches(html, regex) {
  return (html.match(regex) || []).length;
}

function countWordHits(text, tokens) {
  const lower = text.toLowerCase();
  return tokens.filter((token) => lower.includes(token)).length;
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function tokenAppears(text, token) {
  if (!token) return false;
  return new RegExp(`(^|[^a-z0-9])${escapeRegExp(token)}([^a-z0-9]|$)`, "i").test(text);
}

function countExactTokenHits(text, tokens) {
  return tokens.filter((token) => tokenAppears(text, token)).length;
}

function htmlToPlainText(html) {
  return String(html || "")
    .toLowerCase()
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ");
}

function locationWords(value) {
  const weak = ["pradesh", "district", "tehsil", "city", "state", "india", "near"];
  return words(value, true).filter((word) => !weak.includes(word));
}

function compactName(value) {
  return words(value).join("");
}

function makeCandidateDomains(businessName) {
  const all = words(businessName, true);
  const core = words(businessName);
  const variants = new Set();
  const add = (parts) => {
    const compact = parts.join("");
    const hyphen = parts.join("-");
    if (compact.length >= 4) variants.add(compact);
    if (hyphen.length >= 4) variants.add(hyphen);
  };
  add(all);
  add(core);

  const tlds = ["com", "in", "co.in", "org"];
  return [...variants].flatMap((name) => tlds.map((tld) => `${name}.${tld}`)).slice(0, 12);
}

function websiteCandidates({ businessName }) {
  const candidates = [];
  makeCandidateDomains(businessName).forEach((domain) => {
    candidates.push(normalizeWebsiteUrl(`https://${domain}/`));
    candidates.push(normalizeWebsiteUrl(`https://www.${domain}/`));
  });
  return candidates;
}

function extractInternalSupportPages(html, baseUrl) {
  const supportPatterns = /(contact|about|location|reach|visit|address|admission|campus|directions)/i;
  const links = [];
  const seen = new Set();
  const anchorRegex = /<a\b[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = anchorRegex.exec(html))) {
    const href = clean(match[1]);
    const label = htmlToPlainText(match[2]);
    if (!href || href.startsWith("#") || /^mailto:|^tel:|^javascript:/i.test(href)) continue;
    if (!supportPatterns.test(`${href} ${label}`)) continue;
    try {
      const url = new URL(href, baseUrl);
      const base = new URL(baseUrl);
      if (url.hostname.replace(/^www\./, "") !== base.hostname.replace(/^www\./, "")) continue;
      url.hash = "";
      const normalized = url.href;
      if (seen.has(normalized)) continue;
      seen.add(normalized);
      links.push(url);
    } catch (error) {
      // Ignore malformed links and continue scanning.
    }
  }
  return links.slice(0, 4);
}

function evaluateMatch(site, input) {
  const coreTokens = words(input.businessName);
  const allNameTokens = words(input.businessName, true);
  const cityTokens = locationWords(input.city);
  const stateTokens = locationWords(input.state);
  const requiredLocationTokens = [...cityTokens, ...stateTokens];
  const domain = site.domain.toLowerCase();
  const compactBusiness = compactName(input.businessName);
  const domainLooksLikeBrand = compactBusiness.length >= 5 && domain.replace(/[^a-z0-9]/g, "").includes(compactBusiness);
  const strongNameMatch =
    site.coreHits >= Math.min(coreTokens.length, 2) ||
    (domainLooksLikeBrand && site.nameHits >= Math.min(allNameTokens.length, 2));
  const localMatchRequired = requiredLocationTokens.length > 0;
  const hasCityMatch = cityTokens.length ? cityTokens.some((token) => tokenAppears(site.signalText, token)) : false;
  const hasStateMatch = stateTokens.length ? stateTokens.some((token) => tokenAppears(site.signalText, token)) : false;
  const hasLocalMatch = cityTokens.length ? hasCityMatch : hasStateMatch;
  const verified = strongNameMatch && (!localMatchRequired || hasLocalMatch);
  let confidence = 28;
  if (strongNameMatch) confidence += 32;
  if (domainLooksLikeBrand) confidence += 16;
  if (hasLocalMatch) confidence += 24;
  return {
    verified,
    confidence: clamp(confidence),
    domainLooksLikeBrand,
    strongNameMatch,
    hasLocalMatch,
    hasCityMatch,
    hasStateMatch,
    matchedLocationTokens: requiredLocationTokens.filter((token) => tokenAppears(site.signalText, token)),
    requiredLocationTokens,
    reason: !strongNameMatch
      ? "The discovered website did not strongly match the entered business name."
      : localMatchRequired && !hasLocalMatch
        ? cityTokens.length
          ? "The discovered website matched the name but the entered city/locality was not found on the homepage/contact/about pages."
          : "The discovered website matched the name but the entered state/location was not found on the homepage/contact/about pages."
        : "The discovered website matched the entered business name and local address signals.",
  };
}

async function fetchWebsite(url) {
  const result = await fetchPublicHtml(url, "Tivoro-TrustScore/1.0");
  return {
    requestedUrl: url.href,
    ...result,
  };
}

async function enrichWebsiteFetch(fetchResult) {
  const supportPages = [];
  const supportLinks = extractInternalSupportPages(fetchResult.html, fetchResult.finalUrl);
  for (const link of supportLinks) {
    try {
      const page = await fetchWebsite(link);
      supportPages.push({
        url: page.finalUrl,
        html: page.html,
        responseMs: page.responseMs,
      });
    } catch (error) {
      // Contact/about pages are helpful, but homepage analysis can continue if they fail.
    }
  }
  return {
    ...fetchResult,
    supportPages,
    combinedHtml: [fetchResult.html, ...supportPages.map((page) => page.html)].join("\n"),
    combinedResponseMs: Math.round(
      [fetchResult.responseMs, ...supportPages.map((page) => page.responseMs)].reduce((sum, value) => sum + value, 0) /
        Math.max(1, supportPages.length + 1)
    ),
  };
}

async function findBusinessWebsite(input) {
  const candidates = websiteCandidates(input);
  let lastError;
  for (const candidate of candidates) {
    try {
      const result = await fetchWebsite(candidate);
      const enriched = await enrichWebsiteFetch(result);
      const analysis = analyzeWebsite(enriched, input);
      if (analysis.match.verified) return analysis;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("website-not-found");
}

function analyzeWebsite(fetchResult, { businessName, city, state }) {
  const html = fetchResult.combinedHtml || fetchResult.html;
  const lower = html.toLowerCase();
  const plainText = htmlToPlainText(html);
  const title = tagContent(fetchResult.html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = tagContent(fetchResult.html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>|<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["'][^>]*>/i);
  const canonical = tagContent(fetchResult.html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["'][^>]*>|<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["'][^>]*>/i);
  const hasLang = /<html[^>]+\slang=["'][^"']+["']/i.test(fetchResult.html);
  const hasViewport = /<meta[^>]+name=["']viewport["']/i.test(fetchResult.html);
  const hasContact = /wa\.me|api\.whatsapp\.com|whatsapp|tel:|mailto:|<form\b/i.test(lower);
  const hasWhatsapp = /wa\.me|api\.whatsapp\.com|whatsapp/i.test(lower);
  const hasPhone = /tel:|\+91|phone|call us|contact/i.test(lower);
  const hasEmail = /mailto:|email/i.test(lower);
  const hasMap = /google\.com\/maps|maps\.app\.goo\.gl|goo\.gl\/maps|map/i.test(lower);
  const hasSocialLink = /instagram\.com|facebook\.com|linkedin\.com|youtube\.com/i.test(lower);
  const hasSocialMention = /\b(instagram|facebook|youtube|follow us|social media|reels?)\b/i.test(plainText);
  const hasSchema = /application\/ld\+json/i.test(lower);
  const hasOpenGraph = /<meta[^>]+property=["']og:/i.test(lower);
  const hasAbout = /about|founder|team|staff|doctor|principal|owner|history/i.test(lower);
  const hasService = /service|admission|course|product|menu|pricing|facility|appointment|booking|program/i.test(lower);
  const hasGalleryProof = /gallery|photos|moments|activities|events|celebration|cultural|annual|classroom|sports|portfolio/i.test(lower);
  const hasParentProof = /testimonial|review|success|parents|clients|results|award|happy families|trusted|parent hub|founder story/i.test(lower);
  const hasProof = hasGalleryProof || hasParentProof;
  const hasVideo = /youtube\.com|youtu\.be|video|reel/i.test(lower);
  const imageTags = html.match(/<img\b[^>]*>/gi) || [];
  const missingAlt = imageTags.filter((tag) => !/\salt=["'][^"']+["']/i.test(tag)).length;
  const nameTokens = words(businessName, true);
  const coreNameTokens = words(businessName);
  const locationTokens = words(`${city} ${state}`, true);
  const signalText = `${title} ${description} ${plainText.slice(0, 9000)}`;
  const nameHits = countWordHits(signalText, nameTokens);
  const coreHits = countWordHits(signalText, coreNameTokens);
  const locationHits = countExactTokenHits(signalText, locationTokens);
  const matchStrength = Math.max(nameHits, coreHits);

  const site = {
    businessName,
    city,
    state,
    requestedUrl: fetchResult.requestedUrl,
    finalUrl: fetchResult.finalUrl,
    responseMs: fetchResult.combinedResponseMs || fetchResult.responseMs,
    domain: new URL(fetchResult.finalUrl).hostname.replace(/^www\./, ""),
    title,
    description,
    canonical,
    hasLang,
    hasViewport,
    hasContact,
    hasWhatsapp,
    hasPhone,
    hasEmail,
    hasMap,
    hasSocial: hasSocialLink || hasSocialMention,
    hasSocialLink,
    hasSocialMention,
    hasSchema,
    hasOpenGraph,
    hasAbout,
    hasService,
    hasProof,
    hasGalleryProof,
    hasParentProof,
    hasVideo,
    imageCount: imageTags.length,
    missingAlt,
    nameHits,
    coreHits,
    locationHits,
    matchStrength,
    supportPagesChecked: fetchResult.supportPages?.length || 0,
    supportPageUrls: (fetchResult.supportPages || []).map((page) => page.url),
    signalText: signalText.toLowerCase(),
  };

  return {
    ...site,
    match: evaluateMatch(site, { businessName, city, state }),
  };
}

function factor(label, weight, score, observation) {
  return { label, weight, score: clamp(score, weight), observation };
}

function buildTrustScore(site) {
  const websitePresence = factor(
    "Website Presence",
    20,
    Math.min(18, 6 + Math.round(site.match.confidence / 12) + (site.title ? 2 : 0) + (site.description ? 2 : 0) + (site.hasService ? 2 : 0) + (site.hasViewport ? 2 : 0)),
    `Verified local website was discovered and inspected: ${site.domain}. Match confidence: ${site.match.confidence}%.`
  );
  const enquiry = factor(
    "Contact & Enquiry Readiness",
    15,
    (site.hasWhatsapp ? 5 : 0) + (site.hasPhone ? 4 : 0) + (site.hasEmail ? 3 : 0) + (site.hasContact ? 3 : 0),
    site.hasContact ? "Contact, form, phone, email or WhatsApp signal was found." : "Clear WhatsApp, phone, email or enquiry action was not detected."
  );
  const localTrust = factor(
    "Local Trust Signals",
    15,
    (site.hasMap ? 6 : 0) + Math.min(5, site.locationHits * 2) + (site.hasAbout ? 4 : 0),
    site.locationHits || site.hasMap
      ? `Location or map-related signals were found across homepage/support pages. Support pages checked: ${site.supportPagesChecked}.`
      : `Location signals are weak even after checking homepage/support pages. Support pages checked: ${site.supportPagesChecked}.`
  );
  const seoBasics = factor(
    "SEO Basics",
    15,
    (site.title ? 3 : 0) + (site.description ? 3 : 0) + (site.canonical ? 2 : 0) + (site.hasSchema ? 4 : 0) + (site.hasOpenGraph ? 2 : 0) + (site.hasLang ? 1 : 0),
    site.hasSchema || site.hasOpenGraph ? "SEO and sharing signals are partially available." : "SEO can improve with meta tags, structured data and social sharing tags."
  );
  const socialProof = factor(
    "Social Proof",
    10,
    (site.hasSocialLink ? 3 : 0) + (site.hasSocialMention ? 1 : 0) + (site.hasGalleryProof ? 2 : 0) + (site.hasParentProof ? 2 : 0) + (site.hasVideo ? 1 : 0) + (site.imageCount >= 8 ? 1 : 0),
    site.hasSocial || site.hasProof ? "Social proof visible on the website was detected: social links, gallery, parent proof, testimonials, videos or real activity content." : "Social proof appears limited on the inspected website. Add social links, gallery, parent stories or video proof."
  );
  const brandConsistency = factor(
    "Brand Consistency",
    10,
    Math.min(5, site.matchStrength * 2) + (site.match.hasLocalMatch ? 3 : 0) + (site.description ? 2 : 0),
    site.match.verified ? "Business name and location signals appear on the website." : "Business name or location match is weak. Manual verification is needed."
  );
  const mobile = factor(
    "Mobile Readiness",
    10,
    (site.hasViewport ? 7 : 2) + (site.missingAlt < Math.max(1, site.imageCount / 2) ? 2 : 0) + (site.responseMs < 1800 ? 1 : 0),
    site.hasViewport ? "Mobile viewport signal is present." : "Mobile viewport signal was not detected."
  );
  const confidence = factor(
    "Customer Confidence Signals",
    5,
    (site.hasProof ? 2 : 0) + (site.imageCount >= 4 ? 1 : 0) + (site.hasAbout ? 1 : 0) + (site.hasVideo ? 1 : 0),
    site.hasProof || site.hasAbout ? "Some confidence-building content is visible." : "Add testimonials, gallery, founder/team story or customer proof."
  );
  const factors = [websitePresence, enquiry, localTrust, seoBasics, socialProof, brandConsistency, mobile, confidence];
  const overall = factors.reduce((total, item) => total + item.score, 0);
  const summary =
    overall >= 84
      ? "Strong digital trust foundation. The next opportunity is sharper conversion flow, stronger proof and lead tracking."
      : overall >= 66
        ? "Good starting point. Focused improvements can increase trust, visibility and enquiry conversion."
        : "Important trust gaps found. A clearer website, location proof and enquiry system can make a big difference.";
  const recommendations = factors
    .filter((item) => item.score < item.weight * 0.78)
    .map((item) => {
      if (item.label === "Website Presence") return "Improve the homepage with clear services, location, proof and enquiry actions.";
      if (item.label === "Contact & Enquiry Readiness") return "Add WhatsApp, phone, form or booking actions near the top of the page.";
      if (item.label === "Local Trust Signals") return "Add city, address, Google Map and service area details clearly.";
      if (item.label === "SEO Basics") return "Add SEO title, meta description, canonical URL, Open Graph and LocalBusiness schema.";
      if (item.label === "Social Proof") return "Add testimonials, gallery, social links, videos or customer stories.";
      if (item.label === "Brand Consistency") return "Make the brand name, location and service promise visible in title and homepage copy.";
      if (item.label === "Mobile Readiness") return "Improve mobile viewport, image accessibility and load speed.";
      return "Add founder/team story, real photos, testimonials and proof-led content.";
    })
    .slice(0, 6);

  return {
    source: "Tivoro Website-Based Trust Checker",
    generatedAt: new Date().toISOString(),
    overall,
    summary,
    business: {
      name: site.businessName,
      address: `${site.city}, ${site.state}`,
      website: site.finalUrl,
      domain: site.domain,
      rating: null,
      reviews: null,
      googleUrl: "",
    },
    factors,
    recommendations,
    services: ["Website development", "Branding", "SEO", "AI automation", "CRM", "Digital marketing"],
    facts: {
      title: site.title,
      description: site.description,
      responseMs: site.responseMs,
      images: site.imageCount,
      missingAlt: site.missingAlt,
      nameHits: site.nameHits,
      locationHits: site.locationHits,
      supportPagesChecked: site.supportPagesChecked,
      supportPageUrls: site.supportPageUrls,
      matchConfidence: site.match.confidence,
      matchReason: site.match.reason,
      discoveredAutomatically: !site.websiteEntered,
    },
    match: {
      verified: site.match.verified,
      confidence: site.match.confidence,
      reason: site.match.reason,
      matchedLocationTokens: site.match.matchedLocationTokens,
      requiredLocationTokens: site.match.requiredLocationTokens,
    },
  };
}

export default async function handler(req, res) {
  applyApiSecurityHeaders(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "GET") {
    res.status(405).json({ error: "method-not-allowed" });
    return;
  }

  const rate = rateLimit(req, "trust-score", { limit: 12, windowMs: 60_000 });
  if (!rate.allowed) {
    res.setHeader("Retry-After", String(rate.retryAfter));
    res.status(429).json({ error: "rate-limited", message: "Too many checks. Please try again shortly." });
    return;
  }

  const businessName = clean(req.query.businessName);
  const city = clean(req.query.city);
  const state = clean(req.query.state);
  if (businessName.length > 90 || city.length > 60 || state.length > 60 || /[<>]/.test(`${businessName}${city}${state}`)) {
    res.status(400).json({ error: "invalid-fields", message: "Please enter a valid business name, city and state." });
    return;
  }
  if (!businessName || !city || !state) {
    res.status(400).json({
      error: "missing-fields",
      message: "Please enter business name, city and state.",
    });
    return;
  }

  try {
    const site = await findBusinessWebsite({ businessName, city, state });
    res.status(200).json(buildTrustScore(site));
  } catch (error) {
    const code = error instanceof Error ? error.message : "website-not-found";
    if (code === "invalid-url") {
      res.status(400).json({ error: "invalid-url", message: "Please enter a valid business name, city and state." });
      return;
    }
    res.status(404).json({
      error: "website-not-found",
      message: "Tivoro could not confidently verify an official local website for this business name and location after checking the homepage and contact/about pages. A same-name website from another location is not counted as the official website.",
    });
  }
}
