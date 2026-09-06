import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { destinations } from "@/lib/data/destinations";
import { airports } from "@/lib/data/airports";
import { services } from "@/lib/data/services";
import { LogoFull } from "@/components/ui/Logo";

const featuredDestinations = destinations.slice(0, 8);
const featuredAirports = airports.slice(0, 8);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-ivory-deep">
      <div className="container-luxe py-14 md:py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <LogoFull theme="onDark" />
            <p className="mt-3 text-sm leading-relaxed text-ivory-deep/70">
              {siteConfig.tagline}. Premium private chauffeur transportation across Italy.
            </p>
            <div className="mt-5 space-y-1 text-sm text-ivory-deep/80">
              <a href={siteConfig.phoneHref} className="block hover:text-gold-light">
                {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-gold-light">
                {siteConfig.email}
              </a>
              <p className="text-ivory-deep/60">{siteConfig.addressLine}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-ivory-deep/75 hover:text-ivory">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">Destinations</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {featuredDestinations.map((d) => (
                <li key={d.slug}>
                  <Link href={`/destinations/${d.slug}`} className="text-ivory-deep/75 hover:text-ivory">
                    Chauffeur in {d.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/destinations" className="text-gold-light hover:text-gold">
                  All destinations →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">Airport Transfers</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {featuredAirports.map((a) => (
                <li key={a.slug}>
                  <Link href={`/airport-transfers/${a.slug}`} className="text-ivory-deep/75 hover:text-ivory">
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/airport-transfers" className="text-gold-light hover:text-gold">
                  All airports →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about-us" className="text-ivory-deep/75 hover:text-ivory">About Us</Link></li>
              <li><Link href="/fleet" className="text-ivory-deep/75 hover:text-ivory">Our Fleet</Link></li>
              <li><Link href="/routes" className="text-ivory-deep/75 hover:text-ivory">Popular Routes</Link></li>
              <li><Link href="/faq" className="text-ivory-deep/75 hover:text-ivory">FAQ</Link></li>
              <li><Link href="/contact" className="text-ivory-deep/75 hover:text-ivory">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ivory-deep/10 pt-8 text-xs text-ivory-deep/55 md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-ivory">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-ivory">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
