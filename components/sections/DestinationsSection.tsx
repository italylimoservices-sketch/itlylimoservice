import Link from "next/link";
import { destinations } from "@/lib/data/destinations";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageBlock from "@/components/ui/ImageBlock";
import { getDictionary } from "@/lib/i18n/dictionary";
import { localePath, type Locale } from "@/lib/i18n/locales";
import { destinationNames_it } from "@/lib/i18n/data.it";

const variants = ["gold", "navy", "ivory"] as const;

export default function DestinationsSection({ locale = "en" }: { locale?: Locale }) {
  const featured = destinations.slice(0, 12);
  const t = getDictionary(locale).home.destinations;
  const isIt = locale === "it";

  return (
    <section className="py-16 md:py-24 bg-ivory-deep/40">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
          <Link
            href={localePath(locale, "/destinations")}
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"
          >
            {t.viewAll}
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((d, i) => {
            const it = destinationNames_it[d.slug];
            const name = isIt && it ? it.name : d.name;
            const region = isIt && it ? it.region : d.region;
            return (
              <Link key={d.slug} href={localePath(locale, `/destinations/${d.slug}`)} className="group block">
                <ImageBlock
                  label={name}
                  variant={variants[i % variants.length]}
                  className="group-hover:opacity-90 transition-opacity"
                />
                <p className="mt-3 text-sm font-semibold text-navy">{name}</p>
                <p className="text-xs text-stone">{region}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
