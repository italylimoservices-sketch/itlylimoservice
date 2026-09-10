import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { localePath, type Locale } from "@/lib/i18n/locales";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items, locale = "en" }: { items: Crumb[]; locale?: Locale }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.domain },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        item: item.href ? `${siteConfig.domain}${item.href}` : undefined,
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-line/70 bg-ivory-deep/40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="container-luxe flex flex-wrap items-center gap-1.5 py-3 text-xs text-stone">
        <li>
          <Link href={localePath(locale, "/")} className="hover:text-gold">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className="text-line">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-gold">{item.label}</Link>
            ) : (
              <span className="text-ink-soft">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
