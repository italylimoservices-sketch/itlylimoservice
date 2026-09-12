import Link from "next/link";
import { routes } from "@/lib/data/routes";
import SectionHeading from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/dictionary";
import { localePath, type Locale } from "@/lib/i18n/locales";
import { routes_it } from "@/lib/i18n/data.it";

export default function RoutesSection({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).home.routes;
  const isIt = locale === "it";
  // International routes get their own hub at /international-border-crossing-transfers
  // and their own section on /routes — kept out of this domestic city-to-city
  // grid so the homepage and city-to-city page don't double in size. Since
  // international routes are always appended after the domestic ones, this
  // filter doesn't shift any index used by the routes_it[i] lookup below.
  const domesticRoutes = routes.filter((r) => !r.international);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
          <Link
            href={localePath(locale, "/routes")}
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"
          >
            {t.viewAll}
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {domesticRoutes.map((r, i) => {
            const it = routes_it[i];
            const from = isIt && it ? it.from : r.from;
            const to = isIt && it ? it.to : r.to;
            const duration = isIt && it ? it.durationApprox : r.durationApprox;
            return (
              <Link
                key={r.slug}
                href={localePath(locale, `/routes/${r.slug}`)}
                className="group flex items-center justify-between gap-3 rounded-sm border border-line px-5 py-4 hover:border-gold/50 hover:bg-ivory-deep/30 transition-colors"
              >
                <div>
                  <p className="text-sm font-semibold text-navy">
                    {from} <span className="text-gold">→</span> {to}
                  </p>
                  <p className="text-xs text-stone mt-0.5">{duration}</p>
                </div>
                <span className="text-gold text-sm group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
