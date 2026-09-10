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

export default function LanguageSwitcher({ locale, theme = "onLight" }: { locale: Locale; theme?: "onLight" | "onDark" }) {
  const pathname = usePathname();
  const base = stripLocale(pathname);
  const enHref = base;
  const itHref = hasTranslation(base) ? (base === "/" ? "/it" : `/it${base}`) : "/it";

  const containerClass =
    theme === "onDark" ? "inline-flex items-center rounded-full border border-ivory-deep/25 overflow-hidden text-xs font-semibold" : "inline-flex items-center rounded-full border border-line overflow-hidden text-xs font-semibold";
  const tabClass = (active: boolean) => {
    if (theme === "onDark") {
      return `px-2.5 py-1 transition-colors ${active ? "bg-gold-light text-navy-deep" : "text-ivory-deep/75 hover:bg-ivory-deep/10"}`;
    }
    return `px-2.5 py-1 transition-colors ${active ? "bg-navy text-ivory" : "text-ink-soft hover:bg-ivory-deep/60"}`;
  };

  return (
    <div className={containerClass}>
      <Link href={enHref} className={tabClass(locale === "en")}>
        EN
      </Link>
      <Link href={itHref} className={tabClass(locale === "it")}>
        IT
      </Link>
    </div>
  );
}
