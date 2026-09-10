import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { destinations } from "@/lib/data/destinations";
import { airports } from "@/lib/data/airports";
import { services } from "@/lib/data/services";
import { LogoFull } from "@/components/ui/Logo";
import SocialIcon, { hasSocialIcon } from "@/components/ui/SocialIcon";
import { getDictionary } from "@/lib/i18n/dictionary";
import { localePath, type Locale } from "@/lib/i18n/locales";
import { destinationNames_it, airportNames_it, services_it } from "@/lib/i18n/data.it";

const featuredDestinations = destinations.slice(0, 8);
const featuredAirports = airports.slice(0, 8);

export default function Footer({ locale = "en" }: { locale?: Locale }) {
  const year = new Date().getFullYear();
  const t = getDictionary(locale);
  const p = (path: string) => localePath(locale, path);
  const isIt = locale === "it";

  return (
    <footer className="bg-navy-deep text-ivory-deep">
      <div className="container-luxe py-14 md:py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <LogoFull theme="onDark" />
            <p className="mt-3 text-sm leading-relaxed text-ivory-deep/70">{t.footer.tagline}</p>
            <div className="mt-5 space-y-1 text-sm text-ivory-deep/80">
              <a href={`mailto:${siteConfig.email}`} className="block font-semibold hover:text-gold-light">
                {siteConfig.email}
              </a>
            </div>
            <div className="mt-4 flex gap-3">
              {Object.entries(siteConfig.socials)
                .filter(([key, href]) => href !== "#" && hasSocialIcon(key))
                .map(([key, href]) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="text-ivory-deep/70 hover:text-gold-light transition-colors"
                  >
                    {hasSocialIcon(key) ? <SocialIcon name={key} className="h-5 w-5" /> : null}
                  </a>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">{t.footer.services}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={p(`/${s.slug}`)} className="text-ivory-deep/75 hover:text-ivory">
                    {isIt ? services_it[s.slug]?.name ?? s.name : s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">{t.footer.destinations}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {featuredDestinations.map((d) => {
                const name = isIt ? destinationNames_it[d.slug]?.name ?? d.name : d.name;
                return (
                  <li key={d.slug}>
                    <Link href={p(`/destinations/${d.slug}`)} className="text-ivory-deep/75 hover:text-ivory">
                      {isIt ? name : `Chauffeur in ${name}`}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href={p("/destinations")} className="text-gold-light hover:text-gold">
                  {t.footer.allDestinations}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">{t.footer.airportTransfers}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {featuredAirports.map((a) => (
                <li key={a.slug}>
                  <Link href={p(`/airport-transfers/${a.slug}`)} className="text-ivory-deep/75 hover:text-ivory">
                    {isIt ? airportNames_it[a.slug]?.name ?? a.name : a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={p("/airport-transfers")} className="text-gold-light hover:text-gold">
                  {t.footer.allAirports}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">{t.footer.company}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href={p("/about-us")} className="text-ivory-deep/75 hover:text-ivory">{t.footer.aboutUs}</Link></li>
              {!isIt && <li><Link href="/blog" className="text-ivory-deep/75 hover:text-ivory">Blog</Link></li>}
              <li><Link href={p("/fleet")} className="text-ivory-deep/75 hover:text-ivory">{t.footer.ourFleet}</Link></li>
              <li><Link href={p("/routes")} className="text-ivory-deep/75 hover:text-ivory">{t.footer.popularRoutes}</Link></li>
              <li><Link href={p("/faq")} className="text-ivory-deep/75 hover:text-ivory">{t.footer.faq}</Link></li>
              <li><Link href={p("/contact")} className="text-ivory-deep/75 hover:text-ivory">{t.footer.contact}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ivory-deep/10 pt-8 text-xs text-ivory-deep/55 md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.name}. {t.footer.rightsReserved}</p>
          <div className="flex gap-5">
            <Link href={p("/privacy-policy")} className="hover:text-ivory">{t.footer.privacyPolicy}</Link>
            <Link href={p("/terms-conditions")} className="hover:text-ivory">{t.footer.termsConditions}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
