function clean(value) {
  return String(value || "").trim();
}

function clamp(score, max = 100) {
  return Math.max(0, Math.min(max, Math.round(Number(score) || 0)));
}

function scoreRating(rating) {
  if (!rating) return 0;
  if (rating >= 4.8) return 20;
  if (rating >= 4.5) return 18;
  if (rating >= 4.0) return 15;
  if (rating >= 3.5) return 11;
  if (rating >= 3.0) return 8;
  return 5;
}

function scoreReviews(count) {
  if (!count) return 0;
  if (count >= 150) return 20;
  if (count >= 75) return 18;
  if (count >= 30) return 16;
  if (count >= 15) return 13;
  if (count >= 5) return 9;
  return 5;
}

function words(value) {
  return clean(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !["the", "and", "for", "with", "school", "clinic", "store"].includes(word));
}

function countMatches(html, regex) {
  return (html.match(regex) || []).length;
}

function tagContent(html, regex) {
  const match = html.match(regex);
  return match ? (match[1] || match[2] || "").trim() : "";
}

async function fetchJson(url) {
  const response = await fetch(url);
  const data = await response.json().catch(() => null);
  if (!response.ok || !data) throw new Error("live-source-unavailable");
  return data;
}

async function fetchWebsiteSummary(websiteUrl, businessName) {
  if (!websiteUrl) return null;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);
  try {
    const response = await fetch(websiteUrl, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": "Tivoro-TrustScore/1.0",
        accept: "text/html,application/xhtml+xml",
      },
    });
    const contentType = response.headers.get("content-type") || "";
    if (!response.ok || !contentType.includes("text/html")) return null;
    const html = await response.text();
    const lower = html.toLowerCase();
    const title = tagContent(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
    const description = tagContent(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>|<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["'][^>]*>/i);
    const hasViewport = /<meta[^>]+name=["']viewport["']/i.test(html);
    const hasContact = /wa\.me|api\.whatsapp\.com|whatsapp|tel:|mailto:|<form\b/i.test(lower);
    const hasMap = /google\.com\/maps|maps\.app\.goo\.gl|goo\.gl\/maps/i.test(lower);
    const hasSocial = /instagram\.com|facebook\.com|linkedin\.com|youtube\.com/i.test(lower);
    const hasSchema = /application\/ld\+json/i.test(lower);
    const hasAbout = /about|founder|team|staff|doctor|principal|owner|history/i.test(lower);
    const hasService = /service|admission|course|product|menu|pricing|facility|appointment|booking/i.test(lower);
    const hasProof = /testimonial|review|success|gallery|portfolio|case study|parents|clients|results/i.test(lower);
    const hasVideo = /youtube\.com|youtu\.be|video|reel/i.test(lower);
    const imageCount = countMatches(html, /<img\b/gi);
    const missingAlt = (html.match(/<img\b[^>]*>/gi) || []).filter((tag) => !/\salt=["'][^"']+["']/i.test(tag)).length;
    const nameSignals = words(businessName);
    const brandHits = nameSignals.filter((word) => title.toLowerCase().includes(word) || description.toLowerCase().includes(word)).length;

    return {
      url: response.url || websiteUrl,
      title,
      description,
      hasViewport,
      hasContact,
      hasMap,
      hasSocial,
      hasSchema,
      hasAbout,
      hasService,
      hasProof,
      hasVideo,
      imageCount,
      missingAlt,
      brandHits,
      brandSignals: nameSignals.length,
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

function buildWebsiteScores(website, place) {
  const hasWebsite = Boolean(place.website);
  if (!hasWebsite) {
    return {
      professionalWebsite: 0,
      transparency: place.formatted_phone_number || place.opening_hours ? 4 : 2,
      socialPresence: 0,
      brandConsistency: 3,
      confidenceSignals: 1,
    };
  }

  if (!website) {
    return {
      professionalWebsite: 7,
      transparency: 4,
      socialPresence: 0,
      brandConsistency: 5,
      confidenceSignals: 1,
    };
  }

  const professionalWebsite = clamp(
    5 +
      (website.title ? 2 : 0) +
      (website.description ? 2 : 0) +
      (website.hasViewport ? 2 : 0) +
      (website.hasContact ? 2 : 0) +
      (website.hasService ? 1 : 0) +
      (website.hasSchema ? 1 : 0),
    15
  );
  const transparency = clamp(
    2 +
      (website.hasAbout ? 3 : 0) +
      (website.hasContact ? 2 : 0) +
      (website.hasMap || place.formatted_address ? 1 : 0) +
      (place.formatted_phone_number ? 1 : 0) +
      (place.opening_hours ? 1 : 0),
    10
  );
  const socialPresence = clamp((website.hasSocial ? 7 : 0) + (website.hasVideo ? 2 : 0) + (website.hasProof ? 1 : 0), 10);
  const brandConsistency = clamp(4 + Math.min(4, website.brandHits * 2) + (website.hasSchema ? 1 : 0) + (website.hasViewport ? 1 : 0), 10);
  const confidenceSignals = clamp((website.hasProof ? 2 : 0) + (website.hasVideo ? 1 : 0) + (website.imageCount > 5 ? 1 : 0) + (place.user_ratings_total > 10 ? 1 : 0), 5);

  return {
    professionalWebsite,
    transparency,
    socialPresence,
    brandConsistency,
    confidenceSignals,
  };
}

function observation(label, score, max, context) {
  if (label === "Google Rating") {
    return context.rating ? `${context.rating.toFixed(1)} star public rating found.` : "No public rating found in the live lookup.";
  }
  if (label === "Google Reviews") {
    return context.reviews ? `${context.reviews} public review(s) found.` : "No public review volume found.";
  }
  if (label === "Professional Website") {
    if (!context.websiteUrl) return "No official website was returned by the live business profile lookup.";
    return context.websiteChecked ? "Official website found and inspected for basic trust signals." : "Website found, but it could not be inspected fully from the server.";
  }
  if (label === "Transparency") return score >= max * 0.8 ? "Address, contact, hours or public business details are visible." : "More public contact, team, service or ownership clarity can improve confidence.";
  if (label === "Social Presence") return score >= 7 ? "Social or video presence was detected from the website." : "Social proof appears limited or was not detected from the website.";
  if (label === "Google Business Profile") return score >= 8 ? "Business profile has important public details available." : "Public business profile details look incomplete or could not be confirmed.";
  if (label === "Brand Consistency") return score >= 8 ? "Business name and website signals appear reasonably aligned." : "Brand consistency can improve through clearer website title, description and structured data.";
  return score >= 3 ? "Some confidence signals are visible." : "Add testimonials, success stories, gallery, videos or client proof to improve confidence.";
}

function recommendations(factors) {
  return factors
    .filter((factor) => factor.score < factor.weight * 0.8)
    .map((factor) => {
      if (factor.key === "rating") return "Request happy customers to leave genuine Google reviews and respond professionally.";
      if (factor.key === "reviews") return "Build a steady review collection process using QR, WhatsApp and post-service messages.";
      if (factor.key === "website") return "Create or improve the official website with services, proof, location, FAQs and enquiry actions.";
      if (factor.key === "transparency") return "Add founder/team details, address, timings, services, policies and clear contact options.";
      if (factor.key === "social") return "Connect active social media, videos, reels or customer stories to the website.";
      if (factor.key === "gbp") return "Complete the public business profile with phone, timings, website, address and photos.";
      if (factor.key === "brand") return "Make the website title, description, visuals and public profile feel consistent.";
      return "Add testimonials, project proof, gallery, customer stories or short videos.";
    })
    .slice(0, 6);
}

function buildTrustScore(place, website) {
  const context = {
    rating: Number(place.rating) || 0,
    reviews: Number(place.user_ratings_total) || 0,
    websiteUrl: place.website || "",
    websiteChecked: Boolean(website),
  };
  const websiteScores = buildWebsiteScores(website, place);
  const gbpScore = clamp(
    2 +
      (place.formatted_address ? 2 : 0) +
      (place.formatted_phone_number ? 2 : 0) +
      (place.opening_hours ? 2 : 0) +
      (place.website ? 1 : 0) +
      (place.url ? 1 : 0),
    10
  );
  const factors = [
    { key: "rating", label: "Google Rating", weight: 20, score: scoreRating(context.rating) },
    { key: "reviews", label: "Google Reviews", weight: 20, score: scoreReviews(context.reviews) },
    { key: "website", label: "Professional Website", weight: 15, score: websiteScores.professionalWebsite },
    { key: "transparency", label: "Business Transparency", weight: 10, score: websiteScores.transparency },
    { key: "social", label: "Social Media Presence", weight: 10, score: websiteScores.socialPresence },
    { key: "gbp", label: "Google Business Profile", weight: 10, score: gbpScore },
    { key: "brand", label: "Brand Consistency", weight: 10, score: websiteScores.brandConsistency },
    { key: "confidence", label: "Customer Confidence Signals", weight: 5, score: websiteScores.confidenceSignals },
  ].map((factor) => ({
    ...factor,
    observation: observation(factor.label, factor.score, factor.weight, context),
  }));
  const overall = factors.reduce((total, factor) => total + factor.score, 0);
  const summary =
    overall >= 85
      ? "Strong digital trust foundation. The next opportunity is modernization, better lead flow and deeper proof."
      : overall >= 68
        ? "Good starting point. Focused improvements can increase trust, visibility and enquiry conversion."
        : "Important trust gaps found. A clearer public profile, website and proof system can make a big difference.";

  return {
    source: "Tivoro Live Trust Checker",
    generatedAt: new Date().toISOString(),
    overall,
    summary,
    business: {
      name: place.name,
      address: place.formatted_address,
      phone: place.formatted_phone_number || "",
      rating: context.rating || null,
      reviews: context.reviews,
      website: place.website || "",
      googleUrl: place.url || "",
      status: place.business_status || "",
      types: place.types || [],
    },
    factors,
    recommendations: recommendations(factors),
    services: ["Website development", "Branding", "SEO", "AI automation", "CRM", "Digital marketing"],
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

  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) {
    res.status(503).json({
      error: "missing-google-places-key",
      message: "Live business lookup is not connected on the server.",
    });
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
    const input = `${businessName}, ${city}, ${state}`;
    const findUrl = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
    findUrl.searchParams.set("input", input);
    findUrl.searchParams.set("inputtype", "textquery");
    findUrl.searchParams.set("fields", "place_id,name,formatted_address,rating,user_ratings_total,business_status,types");
    findUrl.searchParams.set("key", key);
    const findData = await fetchJson(findUrl);

    if (findData.status !== "OK" || !findData.candidates?.length) {
      res.status(404).json({
        error: "business-not-found",
        message: "No matching public business profile was found for this business and location.",
      });
      return;
    }

    const placeId = findData.candidates[0].place_id;
    const detailsUrl = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    detailsUrl.searchParams.set("place_id", placeId);
    detailsUrl.searchParams.set("fields", "name,formatted_address,formatted_phone_number,website,url,rating,user_ratings_total,opening_hours,business_status,types");
    detailsUrl.searchParams.set("key", key);
    const detailsData = await fetchJson(detailsUrl);

    if (detailsData.status !== "OK" || !detailsData.result) {
      res.status(502).json({
        error: "details-unavailable",
        message: "Business profile was found, but detailed public signals could not be read.",
      });
      return;
    }

    const place = detailsData.result;
    const website = await fetchWebsiteSummary(place.website, place.name || businessName);
    res.status(200).json(buildTrustScore(place, website));
  } catch {
    res.status(502).json({
      error: "trust-score-unavailable",
      message: "Live Trust Score could not be generated right now. Please try again later.",
    });
  }
}
