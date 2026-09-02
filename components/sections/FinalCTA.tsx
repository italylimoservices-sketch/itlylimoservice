import Link from "next/link";

export default function FinalCTA() {
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
      <div className="container-luxe relative py-16 md:py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl">Ready to Travel Italy in Comfort?</h2>
        <p className="mt-4 max-w-xl mx-auto text-[0.98rem] text-ivory-deep/80 leading-relaxed">
          Request a fixed quote for your airport transfer, city-to-city journey or private tour —
          our team responds promptly with availability and pricing.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm bg-gold-light px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-deep hover:bg-gold-pale transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm border border-ivory/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ivory hover:border-gold transition-colors"
          >
            Book Your Chauffeur
          </Link>
        </div>
      </div>
    </section>
  );
}
