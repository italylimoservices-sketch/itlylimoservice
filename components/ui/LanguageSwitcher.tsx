"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import { hasTranslation } from "@/lib/i18n/locales";

function stripLocale(pathname: string): string {
  if (pathname === "/it" || pathname.startsWith("/it/")) {
    const rest = pathname.slice(3);
    return rest || "/";
  }
  return pathname;
}

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const base = stripLocale(pathname);
  const enHref = base;
  const itHref = hasTranslation(base) ? (base === "/" ? "/it" : `/it${base}`) : "/it";

  return (
    <div className="inline-flex items-center rounded-full border border-line overflow-hidden text-xs font-semibold">
      <Link
        href={enHref}
        className={`px-2.5 py-1 transition-colors ${
          locale === "en" ? "bg-navy text-ivory" : "text-ink-soft hover:bg-ivory-deep/60"
        }`}
      >
        EN
      </Link>
      <Link
        href={itHref}
        className={`px-2.5 py-1 transition-colors ${
          locale === "it" ? "bg-navy text-ivory" : "text-ink-soft hover:bg-ivory-deep/60"
        }`}
      >
        IT
      </Link>
    </div>
  );
}
