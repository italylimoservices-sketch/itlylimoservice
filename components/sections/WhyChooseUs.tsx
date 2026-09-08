import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { getDictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";

export default function WhyChooseUs({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).home.whyChooseUs;

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="container-luxe">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} align="center" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.points.map((p) => (
            <div key={p.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold-light">
                <Icon name={p.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
