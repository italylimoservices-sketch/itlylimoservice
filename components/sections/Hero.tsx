import QuoteForm from "@/components/ui/QuoteForm";

const trustSignals = [
  "English-speaking chauffeurs",
  "Fixed, transparent pricing",
  "Italy-wide coverage",
];

export default function Hero() {
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
          <p className="eyebrow eyebrow-invert mb-4">Private Chauffeur Service in Italy</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] max-w-xl">
            Chauffeur Service in Italy, Refined for Every Journey
          </h1>
          <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-ivory-deep/80">
            Premium private chauffeur transportation across Italy — from airport meet & greet
            to city-to-city transfers, hourly hire and personalised private tours. Professional,
            English-speaking drivers and comfortable vehicles, wherever your journey takes you.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {trustSignals.map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-ivory-deep/85">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gold shrink-0">
                  <path
                    d="M3 8.5l3 3 7-7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
