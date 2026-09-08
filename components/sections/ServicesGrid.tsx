import Link from "next/link";
import { services } from "@/lib/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { getDictionary } from "@/lib/i18n/dictionary";
import { localePath, type Locale } from "@/lib/i18n/locales";
import { services_it } from "@/lib/i18n/data.it";

export default function ServicesGrid({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).home.services;
  const isIt = locale === "it";

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="container-luxe">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const name = isIt ? services_it[s.slug]?.name ?? s.name : s.name;
            const desc = isIt ? services_it[s.slug]?.shortDescription ?? s.shortDescription : s.shortDescription;
            return (
              <Link
                key={s.slug}
                href={localePath(locale, `/${s.slug}`)}
                className="group flex flex-col rounded-md border border-line bg-white p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/5 transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-navy/5 text-gold">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg text-navy">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone flex-1">{desc}</p>
                <span className="mt-4 text-sm font-semibold text-gold group-hover:text-gold-light">
                  {t.learnMore}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
