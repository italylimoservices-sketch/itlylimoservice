import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/lib/data/destinations";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const suggestions = destinations.slice(0, 4);

export default function NotFound() {
  return (
    <section className="bg-ivory">
      <div className="container-luxe py-24 md:py-32 text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-display text-4xl md:text-5xl text-navy">This Route Isn&apos;t Mapped</h1>
        <p className="mt-5 max-w-md mx-auto text-[0.98rem] leading-relaxed text-stone">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Here are a few places to
          continue from.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-gold-light hover:text-navy-deep transition-colors"
          >
            Back to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm border border-navy/20 px-6 py-3 text-sm font-semibold text-navy hover:border-gold hover:text-gold transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        <div className="mt-14">
          <p className="text-xs uppercase tracking-wide text-stone mb-4">Popular Destinations</p>
          <div className="flex flex-wrap justify-center gap-3">
            {suggestions.map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-soft hover:border-gold hover:text-gold transition-colors"
              >
                Chauffeur in {d.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
