"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

const primaryLinks = [
  { href: "/chauffeur-service", label: "Chauffeur Service" },
  { href: "/airport-transfers", label: "Airport Transfers" },
  { href: "/destinations", label: "Destinations" },
  { href: "/routes", label: "Routes" },
  { href: "/italy-private-tours", label: "Private Tours" },
  { href: "/corporate-chauffeur", label: "Corporate" },
  { href: "/fleet", label: "Fleet" },
  { href: "/about-us", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/85">
      <div className="container-luxe flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1.5" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl md:text-[1.7rem] tracking-wide text-navy">
            {siteConfig.name}
          </span>
          <span className="hidden sm:inline text-[0.65rem] uppercase tracking-[0.2em] text-gold font-semibold">
            Italy
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-5">
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

        <div className="hidden xl:flex items-center gap-4">
          <a href={siteConfig.phoneHref} className="text-sm font-semibold text-ink-soft hover:text-gold transition-colors">
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm bg-navy px-5 py-2.5 text-sm font-semibold text-ivory hover:bg-gold hover:text-navy-deep transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
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
              href="/faq"
              onClick={() => setOpen(false)}
              className="py-2.5 text-[0.95rem] font-medium text-ink-soft border-b border-line/60"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-ivory"
            >
              Request a Quote
            </Link>
            <a href={siteConfig.phoneHref} className="mt-3 text-center text-sm font-semibold text-ink-soft">
              {siteConfig.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
