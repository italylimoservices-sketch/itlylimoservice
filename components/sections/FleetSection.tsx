import Link from "next/link";
import { fleet } from "@/lib/data/fleet";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageBlock from "@/components/ui/ImageBlock";
import { getDictionary } from "@/lib/i18n/dictionary";
import { localePath, type Locale } from "@/lib/i18n/locales";
import { fleet_it } from "@/lib/i18n/data.it";

export default function FleetSection({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).home.fleet;
  const isIt = locale === "it";

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
          <Link
            href={localePath(locale, "/fleet")}
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"
          >
            {t.viewAll}
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {fleet.map((f, i) => {
            const it = fleet_it[f.slug];
            const name = isIt && it ? it.name : f.name;
            const passengers = isIt && it ? it.passengers : f.passengers;
            const luggage = isIt && it ? it.luggage : f.luggage;
            return (
              <div key={f.slug} className="flex flex-col">
                <ImageBlock label={name} variant={i % 2 === 0 ? "navy" : "gold"} aspect="aspect-[4/3]" src={f.image} />
                <h3 className="mt-3 font-display text-base text-navy">{name}</h3>
                <p className="text-xs text-stone mt-1">{passengers} · {luggage}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
