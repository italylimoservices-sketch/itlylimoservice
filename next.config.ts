import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const isDev = process.env.NODE_ENV === "development";

// No external scripts/styles/images/fonts/frames are used anywhere in this
// site (next/font self-hosts fonts, JSON-LD is the only inline script), so
// the policy can stay tight without per-request nonces — which would force
// every statically generated page into dynamic rendering. Cloudflare
// auto-injects its Web Analytics beacon into the HTML at the edge, so its
// domains need an explicit allowance regardless of what the app itself uses.
// Google Analytics (gtag.js, loaded via components/layout/SiteScripts.tsx) needs the same
// treatment: googletagmanager.com to load the script, google-analytics.com
// (plus the region-sharded *.google-analytics.com) to send hits. Ahrefs
// Analytics (analytics.ahrefs.com) is the same story: one domain for both
// the script and the beacon it sends. Microsoft Clarity (clarity.ms)
// self-injects its script tag from an inline snippet, but the tag actually
// loads the real script from scripts.clarity.ms (a different host than the
// www.clarity.ms/tag/<id> bootstrap URL) and reports back via a c.gif image
// beacon on c.clarity.ms, which itself redirects a sync pixel to Bing Ads
// (c.bing.com) as part of Clarity's default cross-platform sync — all of
// it, plus the region-sharded *.clarity.ms, needs an explicit allowance or
// Clarity silently fails under this CSP.
// reCAPTCHA v3 (QuoteForm) loads its script from google.com/gstatic.com and
// runs its challenge in a google.com iframe — hence the explicit frame-src,
// which nothing else on this site needs.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://www.googletagmanager.com https://analytics.ahrefs.com https://www.clarity.ms https://scripts.clarity.ms https://www.google.com https://www.gstatic.com${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://c.clarity.ms https://*.clarity.ms https://c.bing.com;
  font-src 'self';
  connect-src 'self' https://cloudflareinsights.com https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://analytics.ahrefs.com https://www.clarity.ms https://*.clarity.ms https://www.google.com;
  frame-src https://www.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspHeader },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    // (en), it, admin and (customer) are each their own root layout (so
    // /it/** can render a real server-side lang="it" instead of a
    // client-side patch) — with no single shared root layout left, Next.js
    // needs this flag + app/global-not-found.tsx for URLs that don't match
    // any of them at all.
    globalNotFound: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    // Passed by name (not imported) so Turbopack's Rust MDX pipeline can
    // resolve the plugin itself — it can't accept JS function references.
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
