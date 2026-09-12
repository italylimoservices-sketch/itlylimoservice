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
  const bookHref = locale === "en" ? "/book" : localePath(locale, "/contact");

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
              <div key={d.slug} className="group">
                <div className="[perspective:1200px]">
                  <div
                    className="relative aspect-[4/3] transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                  >
                    {/* Front — the destination photo, click-through as before */}
                    <Link
                      href={localePath(locale, `/destinations/${d.slug}`)}
                      className="absolute inset-0 block [backface-visibility:hidden]"
                    >
                      <ImageBlock
                        label={name}
                        variant={variants[i % variants.length]}
                        aspect=""
                        className="h-full"
                        src={d.image || undefined}
                      />
                    </Link>

                    {/* Back — revealed on hover (pointer devices only) */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-md bg-navy-deep flex flex-col items-center justify-center gap-3 p-4 text-center">
                      <p className="font-display text-base text-ivory">{name}</p>
                      <Link
                        href={bookHref}
                        className="w-full max-w-[10rem] rounded-sm bg-gold-light px-4 py-2 text-xs font-semibold uppercase tracking-wide text-navy-deep hover:bg-gold-pale transition-colors"
                      >
                        {t.bookNow}
                      </Link>
                      <Link
                        href={localePath(locale, "/contact")}
                        className="w-full max-w-[10rem] rounded-sm border border-ivory/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ivory hover:border-gold transition-colors"
                      >
                        {t.customizeTrip}
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-navy">{name}</p>
                <p className="text-xs text-stone">{region}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
