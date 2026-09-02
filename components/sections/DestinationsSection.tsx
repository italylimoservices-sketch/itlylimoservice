import Link from "next/link";
import { destinations } from "@/lib/data/destinations";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageBlock from "@/components/ui/ImageBlock";

const variants = ["gold", "navy", "ivory"] as const;

export default function DestinationsSection() {
  const featured = destinations.slice(0, 12);

  return (
    <section className="py-16 md:py-24 bg-ivory-deep/40">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Italy Destinations"
            title="Private Transportation Across Italy's Regions"
            subtitle="From Rome and Florence to the Amalfi Coast and Lake Como, each destination page is built with local routes, pickup points and travel tips."
          />
          <Link
            href="/destinations"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"
          >
            All destinations →
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((d, i) => (
            <Link key={d.slug} href={`/destinations/${d.slug}`} className="group block">
              <ImageBlock
                label={d.name}
                variant={variants[i % variants.length]}
                className="group-hover:opacity-90 transition-opacity"
              />
              <p className="mt-3 text-sm font-semibold text-navy">{d.name}</p>
              <p className="text-xs text-stone">{d.region}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
