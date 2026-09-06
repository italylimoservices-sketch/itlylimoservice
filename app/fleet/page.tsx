import type { Metadata } from "next";
import { fleet } from "@/lib/data/fleet";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageBlock from "@/components/ui/ImageBlock";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Explore our chauffeur-driven fleet across Italy — Executive Sedan, Luxury Sedan, Luxury SUV, Executive Van and Luxury Van categories.",
  alternates: { canonical: "/fleet" },
};

export default function FleetPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Fleet" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Our Fleet</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            A Vehicle for Every Journey
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Every vehicle in our fleet is selected and maintained for comfort, safety and a
            consistent standard of presentation. Categories shown below reflect passenger and
            luggage capacity; specific vehicle models are confirmed at the time of booking based
            on availability.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((f, i) => (
            <div key={f.slug} className="rounded-md border border-line bg-white overflow-hidden">
              <ImageBlock label={f.name} variant={i % 2 === 0 ? "navy" : "gold"} aspect="aspect-[16/10]" />
              <div className="p-6">
                <h2 className="font-display text-xl text-navy">{f.name}</h2>
                <p className="mt-1 text-sm text-gold font-medium">{f.passengers} · {f.luggage}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone">{f.description}</p>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wide text-stone mb-2">Amenities</p>
                  <ul className="space-y-1.5">
                    {f.amenities.map((a) => (
                      <li key={a} className="text-sm text-ink-soft flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 text-xs text-stone italic">Ideal for: {f.idealFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory-deep/40">
        <div className="container-luxe max-w-2xl">
          <SectionHeading eyebrow="A Note on Our Fleet" title="Vehicles Confirmed at Booking" />
          <p className="mt-4 text-sm leading-relaxed text-stone">
            We do not guarantee a specific make or model for any booking category — vehicle
            categories describe passenger capacity, luggage capacity and general presentation
            standard. Exact vehicles are assigned based on availability at the time of your
            journey.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
