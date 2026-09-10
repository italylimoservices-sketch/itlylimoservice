"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import Icon from "@/components/ui/Icon";
import { LogoFull } from "@/components/ui/Logo";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { getDictionary } from "@/lib/i18n/dictionary";
import { localePath, type Locale } from "@/lib/i18n/locales";

export default function Header({ locale = "en" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const t = getDictionary(locale);
  const p = (path: string) => localePath(locale, path);

  const primaryLinks = [
    { href: p("/chauffeur-service"), label: t.nav.chauffeurService },
    { href: p("/airport-transfers"), label: t.nav.airportTransfers },
    { href: p("/destinations"), label: t.nav.destinations },
    { href: p("/routes"), label: t.nav.routes },
    { href: p("/italy-private-tours"), label: t.nav.privateTours },
    { href: p("/corporate-chauffeur"), label: t.nav.corporate },
    { href: p("/fleet"), label: t.nav.fleet },
    { href: p("/about-us"), label: t.nav.about },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/85">
      <div className="container-luxe flex h-16 md:h-20 items-center justify-between">
        <Link href={p("/")} onClick={() => setOpen(false)}>
          <LogoFull />
        </Link>

        <nav className="hidden xl:flex items-center gap-3">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[0.85rem] font-medium text-ink-soft hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-2.5 shrink-0">
          <LanguageSwitcher locale={locale} />
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label={`Email ${siteConfig.email}`}
            title={siteConfig.email}
            className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-ink-soft hover:text-gold transition-colors"
          >
            <Icon name="email" className="h-5 w-5" />
            <span className="hidden 2xl:inline">{siteConfig.email}</span>
          </a>
          <Link
            href={p("/contact")}
            className="inline-flex items-center whitespace-nowrap rounded-sm bg-navy px-3.5 py-2.5 text-[0.85rem] font-semibold text-ivory hover:bg-gold-light hover:text-navy-deep transition-colors"
          >
            {t.nav.requestQuote}
          </Link>
        </div>

        <button
          type="button"
          aria-label={t.nav.toggleMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden inline-flex h-10 w-10 items-center justify-center text-navy"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-line bg-ivory">
          <nav className="container-luxe flex flex-col py-4">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[0.95rem] font-medium text-ink-soft border-b border-line/60 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={p("/faq")}
              onClick={() => setOpen(false)}
              className="py-2.5 text-[0.95rem] font-medium text-ink-soft border-b border-line/60"
            >
              {t.nav.faq}
            </Link>
            <div className="mt-4 flex justify-center">
              <LanguageSwitcher locale={locale} />
            </div>
            <Link
              href={p("/contact")}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-ivory"
            >
              {t.nav.requestQuote}
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 flex items-center justify-center gap-1.5 text-center text-sm font-semibold text-ink-soft"
            >
              <Icon name="email" className="h-4 w-4" />
              {siteConfig.email}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
