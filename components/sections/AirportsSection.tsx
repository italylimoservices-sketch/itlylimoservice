import Link from "next/link";
import { airports } from "@/lib/data/airports";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { getDictionary } from "@/lib/i18n/dictionary";
import { localePath, type Locale } from "@/lib/i18n/locales";
import { airportNames_it } from "@/lib/i18n/data.it";

export default function AirportsSection({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).home.airports;
  const isIt = locale === "it";

  return (
    <section className="py-16 md:py-24 bg-navy-deep text-ivory">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} light />
          <Link
            href={localePath(locale, "/airport-transfers")}
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-gold"
          >
            {t.viewAll}
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {airports.map((a) => {
            const it = airportNames_it[a.slug];
            const name = isIt && it ? it.name : a.name;
            const city = isIt && it ? it.city : a.city;
            return (
              <Link
                key={a.slug}
                href={localePath(locale, `/airport-transfers/${a.slug}`)}
                className="group flex items-center justify-between gap-3 rounded-sm border border-ivory/10 px-5 py-4 hover:border-gold/50 hover:bg-white/[0.03] transition-colors"
              >
                <div>
                  <p className="text-sm font-semibold text-ivory">{name}</p>
                  <p className="text-xs text-ivory-deep/60 mt-0.5">{a.code} · {city}</p>
                </div>
                <Icon name="plane" className="h-4 w-4 text-gold-light shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
