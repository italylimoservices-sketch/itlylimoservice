import Link from "next/link";
import { tours } from "@/lib/data/tours";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ToursSection() {
  return (
    <section className="py-16 md:py-24 bg-ivory-deep/40">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Private Italy Tours"
            title="Flexible, Personalised Touring Itineraries"
            subtitle="Not a fixed group schedule — a private driver and a pace that adapts to what you want to see."
          />
          <Link
            href="/italy-private-tours"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"
          >
            Explore private tours →
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tours.map((t) => (
            <Link
              key={t.slug}
              href={`/destinations/${t.destinationSlug}`}
              className="block rounded-md border border-line bg-white p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/5 transition-all"
            >
              <p className="eyebrow mb-2 text-[0.65rem]">{t.region}</p>
              <h3 className="font-display text-lg text-navy">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{t.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-gold hover:text-gold-light">
                Explore {t.region} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
