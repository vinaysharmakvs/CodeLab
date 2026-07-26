import dns from "node:dns/promises";
import net from "node:net";

const PRIVATE_IPV4_RANGES = [
  ["0.0.0.0", 8],
  ["10.0.0.0", 8],
  ["100.64.0.0", 10],
  ["127.0.0.0", 8],
  ["169.254.0.0", 16],
  ["172.16.0.0", 12],
  ["192.0.0.0", 24],
  ["192.0.2.0", 24],
  ["192.168.0.0", 16],
  ["198.18.0.0", 15],
  ["198.51.100.0", 24],
  ["203.0.113.0", 24],
  ["224.0.0.0", 4],
  ["240.0.0.0", 4],
];

const requestBuckets = new Map();
const MAX_HTML_BYTES = 850_000;
const MAX_REDIRECTS = 3;
const REQUEST_TIMEOUT_MS = 8500;

function ipv4ToInt(ip) {
  return ip.split(".").reduce((total, part) => (total << 8) + Number(part), 0) >>> 0;
}

function cidrContains(ip, base, bits) {
  const mask = bits === 0 ? 0 : (0xffffffff << (32 - bits)) >>> 0;
  return (ipv4ToInt(ip) & mask) === (ipv4ToInt(base) & mask);
}

function isPrivateIp(address) {
  const version = net.isIP(address);
  if (version === 4) return PRIVATE_IPV4_RANGES.some(([base, bits]) => cidrContains(address, base, bits));
  if (version === 6) {
    const value = address.toLowerCase();
    return value === "::1" || value === "::" || value.startsWith("fc") || value.startsWith("fd") || value.startsWith("fe80:");
  }
  return true;
}

export function getClientIp(req) {
  return String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown").split(",")[0].trim();
}

export function rateLimit(req, key, { limit = 24, windowMs = 60_000 } = {}) {
  const now = Date.now();
  const bucketKey = `${key}:${getClientIp(req)}`;
  const current = requestBuckets.get(bucketKey) || { count: 0, resetAt: now + windowMs };
  if (current.resetAt <= now) {
    current.count = 0;
    current.resetAt = now + windowMs;
  }
  current.count += 1;
  requestBuckets.set(bucketKey, current);
  return {
    allowed: current.count <= limit,
    retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
  };
}

export function applyApiSecurityHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "https://www.tivoro.in");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Cache-Control", "no-store");
}

export function normalizePublicWebsiteUrl(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed || trimmed.length > 220 || /\s/.test(trimmed) || /@/.test(trimmed)) throw new Error("invalid-url");
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  const url = new URL(withProtocol);
  if (!["http:", "https:"].includes(url.protocol)) throw new Error("invalid-url");
  if (url.username || url.password || url.port) throw new Error("invalid-url");
  const hostname = url.hostname.toLowerCase().replace(/\.$/, "");
  const labels = hostname.replace(/^www\./, "").split(".");
  const tld = labels[labels.length - 1] || "";
  const hasValidLabels = labels.length >= 2 && labels.every((label) => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(label));
  const hasValidTld = /^[a-z]{2,24}$/i.test(tld);
  if (!hasValidLabels || !hasValidTld) throw new Error("invalid-url");
  url.hash = "";
  return url;
}

export async function assertPublicUrl(url) {
  if (!["http:", "https:"].includes(url.protocol)) throw new Error("blocked-url");
  const host = url.hostname.toLowerCase();
  if (host === "localhost" || host.endsWith(".localhost") || host.endsWith(".local") || host.endsWith(".internal")) throw new Error("blocked-url");
  if (net.isIP(host) && isPrivateIp(host)) throw new Error("blocked-url");
  const records = await dns.lookup(host, { all: true, verbatim: true });
  if (!records.length || records.some((record) => isPrivateIp(record.address))) throw new Error("blocked-url");
}

async function readLimitedText(response) {
  const reader = response.body?.getReader?.();
  if (!reader) {
    const buffer = await response.arrayBuffer();
    if (buffer.byteLength > MAX_HTML_BYTES) throw new Error("response-too-large");
    return Buffer.from(buffer).toString("utf8");
  }
  const chunks = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_HTML_BYTES) throw new Error("response-too-large");
    chunks.push(value);
  }
  return Buffer.concat(chunks).toString("utf8");
}

export async function fetchPublicHtml(url, userAgent) {
  let current = new URL(url.href);
  const started = Date.now();
  for (let redirects = 0; redirects <= MAX_REDIRECTS; redirects += 1) {
    await assertPublicUrl(current);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      const response = await fetch(current.href, {
        redirect: "manual",
        signal: controller.signal,
        headers: {
          "user-agent": userAgent,
          accept: "text/html,application/xhtml+xml",
        },
      });
      if ([301, 302, 303, 307, 308].includes(response.status)) {
        const location = response.headers.get("location");
        if (!location || redirects === MAX_REDIRECTS) throw new Error("too-many-redirects");
        current = new URL(location, current);
        continue;
      }
      const contentType = response.headers.get("content-type") || "";
      if (!response.ok) throw new Error("website-not-reachable");
      if (!contentType.includes("text/html") && !contentType.includes("application/xhtml")) throw new Error("not-html");
      return {
        html: await readLimitedText(response),
        finalUrl: current.href,
        responseMs: Date.now() - started,
      };
    } finally {
      clearTimeout(timeout);
    }
  }
  throw new Error("too-many-redirects");
}
