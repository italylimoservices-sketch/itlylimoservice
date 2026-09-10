import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// No external scripts/styles/images/fonts/frames are used anywhere in this
// site (next/font self-hosts fonts, JSON-LD is the only inline script), so
// the policy can stay tight without per-request nonces — which would force
// every statically generated page into dynamic rendering. Cloudflare
// auto-injects its Web Analytics beacon into the HTML at the edge, so its
// domains need an explicit allowance regardless of what the app itself uses.
// Google Analytics (gtag.js, loaded in app/layout.tsx) needs the same
// treatment: googletagmanager.com to load the script, google-analytics.com
// (plus the region-sharded *.google-analytics.com) to send hits. Ahrefs
// Analytics (analytics.ahrefs.com) is the same story: one domain for both
// the script and the beacon it sends. Microsoft Clarity (clarity.ms)
// self-injects its script tag from an inline snippet and reports back to
// the same host plus its region-sharded *.clarity.ms endpoints.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://www.googletagmanager.com https://analytics.ahrefs.com https://www.clarity.ms${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  connect-src 'self' https://cloudflareinsights.com https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://analytics.ahrefs.com https://www.clarity.ms https://*.clarity.ms;
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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
