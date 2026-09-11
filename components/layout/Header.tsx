"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import Icon from "@/components/ui/Icon";
import { LogoFull } from "@/components/ui/Logo";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ItalyClock from "@/components/ui/ItalyClock";
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
      <div className="bg-navy text-ivory-deep">
        <div className="container-luxe flex h-9 items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={`Email ${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide hover:text-gold-light transition-colors"
            >
              <Icon name="email" className="h-3.5 w-3.5" />
              <span className="truncate">{siteConfig.email}</span>
            </a>
          </div>
          <ItalyClock className="hidden sm:inline-flex shrink-0" />
          <div className="flex-1 flex justify-end shrink-0">
            <LanguageSwitcher locale={locale} theme="onDark" />
          </div>
        </div>
      </div>

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
            <Link
              href={p("/contact")}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-ivory"
            >
              {t.nav.requestQuote}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
