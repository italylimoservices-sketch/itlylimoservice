import SectionHeading from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";

interface Step {
  n: string;
  title: string;
  desc: string;
}

export default function HowItWorks({
  locale = "en",
  eyebrow,
  title,
  steps,
}: {
  locale?: Locale;
  /** Overrides the default booking-process copy — used by pages describing a
   * different process (e.g. the international-transfers border-crossing flow). */
  eyebrow?: string;
  title?: string;
  steps?: Step[];
}) {
  const t = getDictionary(locale).howItWorks;
  const finalSteps = steps ?? t.steps;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-luxe">
        <SectionHeading eyebrow={eyebrow ?? t.eyebrow} title={title ?? t.title} align="center" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {finalSteps.map((s, i) => (
            <div key={s.n} className="relative text-center">
              <span className="font-display text-5xl text-gold">{s.n}</span>
              <h3 className="mt-2 font-display text-lg text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{s.desc}</p>
              {i < finalSteps.length - 1 && (
                <span className="hidden lg:block absolute top-6 -right-4 text-gold">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
