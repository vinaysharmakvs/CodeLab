function normalizeWebsiteUrl(value) {
  const trimmed = String(value || "").trim();
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

function clamp(score) {
  return Math.max(0, Math.min(100, Math.round(score)));
}

function tagContent(html, regex) {
  const match = html.match(regex);
  return match ? (match[1] || match[2] || "").trim() : "";
}

function countMatches(html, regex) {
  return (html.match(regex) || []).length;
}

function getHeadings(html) {
  return [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((match) => ({
    level: Number(match[1]),
    text: match[2].replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
  }));
}

function headingIssues(headings) {
  const issues = [];
  const h1Count = headings.filter((heading) => heading.level === 1).length;
  if (!h1Count) issues.push("Missing H1 heading.");
  if (h1Count > 1) issues.push(`Multiple H1 headings found (${h1Count} instances).`);
  headings.forEach((heading, index) => {
    const previous = headings[index - 1];
    if (previous && heading.level > previous.level + 1) {
      issues.push(`Heading hierarchy issue detected near "${heading.text || `H${heading.level}`}".`);
    }
  });
  return issues;
}

function scoreMeta({ title, description, robots, canonical }) {
  let score = 100;
  if (!title) score -= 35;
  if (title && title.length > 70) score -= 12;
  if (title && title.length < 25) score -= 8;
  if (!description) score -= 25;
  if (description && description.length > 165) score -= 8;
  if (description && description.length < 70) score -= 8;
  if (!robots) score -= 8;
  if (!canonical) score -= 8;
  return clamp(score);
}

function scoreStructuredData(jsonLdCount, openGraphCount) {
  let score = 30;
  if (jsonLdCount > 0) score += 45;
  if (jsonLdCount > 1) score += 10;
  if (openGraphCount >= 3) score += 15;
  return clamp(score);
}

function scoreHeadings(headings, issues) {
  let score = 100;
  if (!headings.length) score -= 40;
  score -= Math.min(45, issues.length * 12);
  if (headings.length < 3) score -= 8;
  return clamp(score);
}

function scoreImages(imageCount, missingAltCount) {
  if (!imageCount) return 88;
  const missingRatio = missingAltCount / imageCount;
  return clamp(100 - missingRatio * 70 - Math.min(10, imageCount / 35));
}

function priorityLabel(overall) {
  if (overall >= 86) return "Strong website foundation";
  if (overall >= 70) return "Good base, needs focused upgrades";
  return "High improvement opportunity";
}

function leadPotential(overall) {
  if (overall >= 86) return "The website has a strong foundation. Next focus should be conversion paths, local proof and campaign tracking.";
  if (overall >= 70) return "The website is workable, but focused improvements can make it clearer, more searchable and more enquiry-ready.";
  return "The website has important gaps that may reduce trust, search visibility and customer enquiries.";
}

function analyzeHtml(url, html, responseMs, finalUrl) {
  const title = tagContent(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = tagContent(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>|<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["'][^>]*>/i);
  const robots = tagContent(html, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)["'][^>]*>|<meta[^>]+content=["']([^"']*)["'][^>]+name=["']robots["'][^>]*>/i);
  const canonical = tagContent(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["'][^>]*>|<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["'][^>]*>/i);
  const hasLang = /<html[^>]+\slang=["'][^"']+["']/i.test(html);
  const hasViewport = /<meta[^>]+name=["']viewport["']/i.test(html);
  const jsonLdCount = countMatches(html, /<script[^>]+type=["']application\/ld\+json["']/gi);
  const openGraphCount = countMatches(html, /<meta[^>]+property=["']og:/gi);
  const imageTags = html.match(/<img\b[^>]*>/gi) || [];
  const missingAltCount = imageTags.filter((tag) => !/\salt=["'][^"']+["']/i.test(tag)).length;
  const headings = getHeadings(html);
  const hIssues = headingIssues(headings);
  const hasWhatsapp = /wa\.me|api\.whatsapp\.com|whatsapp/i.test(html);
  const hasPhone = /tel:/i.test(html);
  const hasEmail = /mailto:/i.test(html);
  const hasMap = /google\.com\/maps|maps\.app\.goo\.gl|goo\.gl\/maps/i.test(html);
  const hasForm = /<form\b/i.test(html);
  const hasSocial = /instagram\.com|facebook\.com|linkedin\.com|youtube\.com/i.test(html);

  const metaScore = scoreMeta({ title, description, robots, canonical });
  const structuredScore = scoreStructuredData(jsonLdCount, openGraphCount);
  const headingScore = scoreHeadings(headings, hIssues);
  const imageScore = scoreImages(imageTags.length, missingAltCount);
  const mobileScore = clamp((hasViewport ? 75 : 35) + (hasLang ? 10 : 0) + (imageScore > 70 ? 8 : 0) + (responseMs < 1500 ? 7 : 0));
  const trustScore = clamp(45 + (url.protocol === "https:" ? 15 : 0) + (hasWhatsapp ? 10 : 0) + (hasPhone ? 8 : 0) + (hasEmail ? 6 : 0) + (hasMap ? 8 : 0) + (hasForm ? 8 : 0));
  const seo = clamp(metaScore * 0.3 + structuredScore * 0.2 + headingScore * 0.25 + imageScore * 0.15 + (hasLang ? 10 : 0));
  const speed = clamp(100 - Math.min(45, responseMs / 120) - Math.min(25, html.length / 90000));
  const overall = clamp(metaScore * 0.18 + structuredScore * 0.14 + headingScore * 0.16 + imageScore * 0.14 + mobileScore * 0.16 + trustScore * 0.14 + speed * 0.08);

  const issues = [];
  const recommendations = [];
  if (!title) {
    issues.push("Missing page title.");
    recommendations.push("Add a clear title tag for the main page.");
  } else if (title.length > 70) {
    issues.push("Title is too long.");
    recommendations.push("Keep the title under 70 characters.");
  }
  if (!description) {
    issues.push("Missing meta description.");
    recommendations.push("Add a helpful meta description between 70 and 165 characters.");
  }
  if (!robots) {
    issues.push("Missing robots meta tag.");
    recommendations.push("Add a <meta name=\"robots\"> tag to control indexing.");
  }
  if (!canonical) {
    issues.push("Missing canonical URL.");
    recommendations.push("Add a canonical link to avoid duplicate URL confusion.");
  }
  if (hIssues.length) {
    issues.push(`Heading hierarchy issues detected (${hIssues.length} instance${hIssues.length > 1 ? "s" : ""}).`);
    recommendations.push("Ensure heading levels follow a logical order (H1 -> H2 -> H3) without skipping levels.");
  }
  if (missingAltCount) {
    issues.push(`${missingAltCount} image(s) missing alt attribute.`);
    recommendations.push("Add descriptive alt attributes to all images.");
  }
  if (!hasLang) {
    issues.push("Missing HTML lang attribute.");
    recommendations.push("Add a lang attribute to the <html> tag.");
  }
  if (!hasViewport) {
    issues.push("Missing mobile viewport tag.");
    recommendations.push("Add a viewport meta tag for mobile responsiveness.");
  }
  if (!jsonLdCount) {
    issues.push("Structured data is missing.");
    recommendations.push("Add JSON-LD schema for Organization, LocalBusiness or relevant services.");
  }
  if (!hasWhatsapp && !hasPhone && !hasForm) {
    issues.push("No clear contact or enquiry action detected.");
    recommendations.push("Add WhatsApp, phone, form or booking actions above the fold.");
  }
  if (!hasMap) {
    issues.push("Google Maps/location signal not detected.");
    recommendations.push("Add a map or location link for local customer trust.");
  }

  return {
    source: "Tivoro Website Readiness Checker",
    requestedUrl: url.href,
    finalUrl,
    domain: url.hostname.replace(/^www\./, ""),
    mobile: mobileScore,
    speed,
    seo,
    security: trustScore,
    accessibility: imageScore,
    overall,
    priority: priorityLabel(overall),
    leadPotential: leadPotential(overall),
    googleStatus: hasMap ? "Location signal found, Google Business still needs manual verification" : "Manual Google Business Profile check required",
    seoHealth: {
      metaTags: metaScore,
      structuredData: structuredScore,
      headings: headingScore,
      images: imageScore,
      overall: seo,
    },
    facts: {
      titleLength: title.length,
      responseMs,
      htmlSizeKb: Math.round(html.length / 1024),
      images: imageTags.length,
      missingAlt: missingAltCount,
      headings: headings.length,
      jsonLd: jsonLdCount,
      openGraph: openGraphCount,
      hasViewport,
      hasLang,
      hasWhatsapp,
      hasPhone,
      hasEmail,
      hasMap,
      hasForm,
      hasSocial,
    },
    missing: issues.slice(0, 8),
    recommendations: recommendations.slice(0, 8),
  };
}

async function fetchWebsite(url) {
  const started = Date.now();
  const response = await fetch(url.href, {
    redirect: "follow",
    headers: {
      "user-agent": "Tivoro-WebsiteChecker/1.0",
      accept: "text/html,application/xhtml+xml",
    },
  });
  const contentType = response.headers.get("content-type") || "";
  if (!response.ok) throw new Error("website-not-reachable");
  if (!contentType.includes("text/html") && !contentType.includes("application/xhtml")) throw new Error("not-html");
  const html = await response.text();
  return {
    html,
    responseMs: Date.now() - started,
    finalUrl: response.url || url.href,
  };
}

async function fetchWithFallback(url) {
  const candidates = [url, new URL(`https://www.${url.hostname.replace(/^www\./, "")}/`)];
  let lastError;
  for (const candidate of candidates) {
    try {
      return await fetchWebsite(candidate);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("website-not-reachable");
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

  let url;
  try {
    url = normalizeWebsiteUrl(req.query.url);
  } catch {
    res.status(400).json({ error: "invalid-url", message: "Please enter a valid website URL." });
    return;
  }

  try {
    const result = await fetchWithFallback(url);
    res.status(200).json(analyzeHtml(url, result.html, result.responseMs, result.finalUrl));
  } catch (error) {
    const message = error instanceof Error ? error.message : "website-not-reachable";
    res.status(502).json({
      error: message,
      message: message === "not-html" ? "This URL does not appear to return a normal HTML website." : "The website could not be reached or inspected.",
    });
  }
}
