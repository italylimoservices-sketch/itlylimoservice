"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import Icon from "@/components/ui/Icon";
import { LogoFull } from "@/components/ui/Logo";

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
        <Link href="/" onClick={() => setOpen(false)}>
          <LogoFull />
        </Link>

        <nav className="hidden xl:flex items-center gap-4">
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

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <a
            href={siteConfig.phoneHref}
            aria-label={`Call ${siteConfig.phoneDisplay}`}
            title={siteConfig.phoneDisplay}
            className="text-ink-soft hover:text-gold transition-colors"
          >
            <Icon name="phone" className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            className="text-ink-soft hover:text-gold transition-colors"
          >
            <Icon name="chat" className="h-5 w-5" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center whitespace-nowrap rounded-sm bg-navy px-4 py-2.5 text-sm font-semibold text-ivory hover:bg-gold-light hover:text-navy-deep transition-colors"
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
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center justify-center gap-1.5 text-center text-sm font-semibold text-ink-soft"
            >
              <Icon name="chat" className="h-4 w-4" />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
