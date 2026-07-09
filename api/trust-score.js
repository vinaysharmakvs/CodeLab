function clean(value) {
  return String(value || "").trim();
}

function clamp(score, max = 100) {
  return Math.max(0, Math.min(max, Math.round(Number(score) || 0)));
}

function normalizeWebsiteUrl(value) {
  const trimmed = clean(value);
  if (!trimmed || /\s/.test(trimmed) || /@/.test(trimmed)) throw new Error("invalid-url");

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  const url = new URL(withProtocol);
  const hostname = url.hostname.toLowerCase().replace(/^www\./, "");
  const labels = hostname.split(".");
  const tld = labels[labels.length - 1] || "";
  const hasValidLabels = labels.length >= 2 && labels.every((label) => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(label));
  const hasValidTld = /^[a-z]{2,24}$/i.test(tld);
  if (!hasValidLabels || !hasValidTld) throw new Error("invalid-url");
  return url;
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

async function fetchWebsite(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8500);
  const started = Date.now();
  try {
    const response = await fetch(url.href, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": "Tivoro-TrustScore/1.0",
        accept: "text/html,application/xhtml+xml",
      },
    });
    const contentType = response.headers.get("content-type") || "";
    if (!response.ok) throw new Error("website-not-reachable");
    if (!contentType.includes("text/html") && !contentType.includes("application/xhtml")) throw new Error("not-html");
    const html = await response.text();
    return {
      requestedUrl: url.href,
      finalUrl: response.url || url.href,
      responseMs: Date.now() - started,
      html,
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function findBusinessWebsite(input) {
  const candidates = websiteCandidates(input);
  let lastError;
  for (const candidate of candidates) {
    try {
      const result = await fetchWebsite(candidate);
      const analysis = analyzeWebsite(result, input);
      if (analysis.matchStrength >= 1) return analysis;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("website-not-found");
}

function analyzeWebsite(fetchResult, { businessName, city, state }) {
  const html = fetchResult.html;
  const lower = html.toLowerCase();
  const plainText = lower.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
  const title = tagContent(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = tagContent(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>|<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["'][^>]*>/i);
  const canonical = tagContent(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["'][^>]*>|<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["'][^>]*>/i);
  const hasLang = /<html[^>]+\slang=["'][^"']+["']/i.test(html);
  const hasViewport = /<meta[^>]+name=["']viewport["']/i.test(html);
  const hasContact = /wa\.me|api\.whatsapp\.com|whatsapp|tel:|mailto:|<form\b/i.test(lower);
  const hasWhatsapp = /wa\.me|api\.whatsapp\.com|whatsapp/i.test(lower);
  const hasPhone = /tel:|\+91|phone|call us|contact/i.test(lower);
  const hasEmail = /mailto:|email/i.test(lower);
  const hasMap = /google\.com\/maps|maps\.app\.goo\.gl|goo\.gl\/maps|map/i.test(lower);
  const hasSocial = /instagram\.com|facebook\.com|linkedin\.com|youtube\.com/i.test(lower);
  const hasSchema = /application\/ld\+json/i.test(lower);
  const hasOpenGraph = /<meta[^>]+property=["']og:/i.test(lower);
  const hasAbout = /about|founder|team|staff|doctor|principal|owner|history/i.test(lower);
  const hasService = /service|admission|course|product|menu|pricing|facility|appointment|booking|program/i.test(lower);
  const hasProof = /testimonial|review|success|gallery|portfolio|case study|parents|clients|results|award/i.test(lower);
  const hasVideo = /youtube\.com|youtu\.be|video|reel/i.test(lower);
  const imageTags = html.match(/<img\b[^>]*>/gi) || [];
  const missingAlt = imageTags.filter((tag) => !/\salt=["'][^"']+["']/i.test(tag)).length;
  const nameTokens = words(businessName, true);
  const coreNameTokens = words(businessName);
  const locationTokens = words(`${city} ${state}`, true);
  const signalText = `${title} ${description} ${plainText.slice(0, 9000)}`;
  const nameHits = countWordHits(signalText, nameTokens);
  const coreHits = countWordHits(signalText, coreNameTokens);
  const locationHits = countWordHits(signalText, locationTokens);
  const matchStrength = Math.max(nameHits, coreHits);

  return {
    businessName,
    city,
    state,
    requestedUrl: fetchResult.requestedUrl,
    finalUrl: fetchResult.finalUrl,
    responseMs: fetchResult.responseMs,
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
    hasSocial,
    hasSchema,
    hasOpenGraph,
    hasAbout,
    hasService,
    hasProof,
    hasVideo,
    imageCount: imageTags.length,
    missingAlt,
    nameHits,
    coreHits,
    locationHits,
    matchStrength,
  };
}

function factor(label, weight, score, observation) {
  return { label, weight, score: clamp(score, weight), observation };
}

function buildTrustScore(site) {
  const websitePresence = factor(
    "Website Presence",
    20,
    10 + (site.title ? 3 : 0) + (site.description ? 3 : 0) + (site.hasService ? 2 : 0) + (site.hasViewport ? 2 : 0),
    `Website was discovered from the business name and inspected: ${site.domain}.`
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
    site.locationHits || site.hasMap ? "Location or map-related signals were found on the website." : "Location signals are weak. Add city, address and map clearly."
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
    (site.hasSocial ? 5 : 0) + (site.hasVideo ? 2 : 0) + (site.hasProof ? 3 : 0),
    site.hasSocial || site.hasProof ? "Social links, proof, gallery, testimonials or video signals were detected." : "Social proof appears limited on the website."
  );
  const brandConsistency = factor(
    "Brand Consistency",
    10,
    Math.min(6, site.matchStrength * 2) + Math.min(2, site.locationHits) + (site.description ? 2 : 0),
    site.matchStrength ? "Business name signals appear on the website." : "Business name match is weak. The website should clearly mention the brand."
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
      discoveredAutomatically: !site.websiteEntered,
    },
  };
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "GET") {
    res.status(405).json({ error: "method-not-allowed" });
    return;
  }

  const businessName = clean(req.query.businessName);
  const city = clean(req.query.city);
  const state = clean(req.query.state);
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
      message: "Tivoro could not automatically find matching live website signals from this business name and location.",
    });
  }
}
