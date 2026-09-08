import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/dictionary";
import { localePath, type Locale } from "@/lib/i18n/locales";

export default function CruiseSection({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).home.cruise;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-luxe grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <div>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
          <Link
            href={localePath(locale, "/cruise-port-transfers")}
            className="mt-6 inline-flex items-center rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-gold-light hover:text-navy-deep transition-colors"
          >
            {t.cta}
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {t.ports.map((port) => (
            <div key={port} className="rounded-sm border border-line bg-ivory-deep/30 px-4 py-5 text-center">
              <p className="text-sm font-semibold text-navy">{port}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
