import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { destinations } from "@/lib/data/destinations";
import { airports } from "@/lib/data/airports";
import { routes } from "@/lib/data/routes";
import { services } from "@/lib/data/services";
import { blogPosts } from "@/lib/data/blog";
import { fleet } from "@/lib/data/fleet";

const staticPaths = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about-us", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/fleet", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/destinations", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/airport-transfers", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/routes", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/book", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/reviews", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/terms-conditions", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/refund-policy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/cookie-policy", priority: 0.2, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;
  const now = new Date();

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  for (const s of services) {
    entries.push({
      url: `${base}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const d of destinations) {
    entries.push({
      url: `${base}/destinations/${d.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const a of airports) {
    entries.push({
      url: `${base}/airport-transfers/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const r of routes) {
    entries.push({
      url: `${base}/routes/${r.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  for (const f of fleet) {
    entries.push({
      url: `${base}/fleet/${f.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const post of blogPosts) {
    entries.push({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // airport-transfers (and any other future overlap between a service slug and
  // a hand-listed staticPaths entry) would otherwise appear twice — keep the
  // first occurrence, which is the more specific staticPaths entry.
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
