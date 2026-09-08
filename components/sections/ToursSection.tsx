import Link from "next/link";
import { tours } from "@/lib/data/tours";
import SectionHeading from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/dictionary";
import { localePath, type Locale } from "@/lib/i18n/locales";
import { tours_it } from "@/lib/i18n/data.it";

export default function ToursSection({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).home.tours;
  const isIt = locale === "it";

  return (
    <section className="py-16 md:py-24 bg-ivory-deep/40">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
          <Link
            href={localePath(locale, "/italy-private-tours")}
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"
          >
            {t.viewAll}
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tours.map((tour) => {
            const it = tours_it[tour.slug];
            const name = isIt && it ? it.name : tour.name;
            const region = isIt && it ? it.region : tour.region;
            const description = isIt && it ? it.description : tour.description;
            return (
              <Link
                key={tour.slug}
                href={localePath(locale, `/destinations/${tour.destinationSlug}`)}
                className="block rounded-md border border-line bg-white p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/5 transition-all"
              >
                <p className="eyebrow mb-2 text-[0.65rem]">{region}</p>
                <h3 className="font-display text-lg text-navy">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-gold hover:text-gold-light">
                  {t.explore} {region} →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
