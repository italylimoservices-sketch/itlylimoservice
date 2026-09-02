import Link from "next/link";
import { fleet } from "@/lib/data/fleet";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageBlock from "@/components/ui/ImageBlock";

export default function FleetSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Our Fleet"
            title="A Vehicle for Every Journey"
            subtitle="Every category is maintained to a consistent standard of comfort and presentation, matched to your group size and luggage."
          />
          <Link href="/fleet" className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light">
            View full fleet →
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {fleet.map((f, i) => (
            <div key={f.slug} className="flex flex-col">
              <ImageBlock label={f.name} variant={i % 2 === 0 ? "navy" : "gold"} aspect="aspect-[3/4]" />
              <h3 className="mt-3 font-display text-base text-navy">{f.name}</h3>
              <p className="text-xs text-stone mt-1">{f.passengers} · {f.luggage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
