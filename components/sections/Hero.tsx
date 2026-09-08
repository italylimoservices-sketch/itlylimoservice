import QuoteForm from "@/components/ui/QuoteForm";
import { getDictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";

export default function Hero({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).home;

  return (
    <section className="relative overflow-hidden bg-navy-deep text-ivory">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 18px)",
        }}
        aria-hidden
      />
      <div className="container-luxe relative py-14 md:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
        <div>
          <p className="eyebrow eyebrow-invert mb-4">{t.heroEyebrow}</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] max-w-xl">
            {t.heroTitle}
          </h1>
          <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-ivory-deep/80">
            {t.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {t.heroTrust.map((signal) => (
              <div key={signal} className="flex items-center gap-2 text-sm text-ivory-deep/85">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gold shrink-0">
                  <path
                    d="M3 8.5l3 3 7-7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <QuoteForm locale={locale} />
        </div>
      </div>
    </section>
  );
}
