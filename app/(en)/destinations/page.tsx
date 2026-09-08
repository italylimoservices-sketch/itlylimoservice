import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/lib/data/destinations";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ImageBlock from "@/components/ui/ImageBlock";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Italy Destinations",
  description:
    "Explore private chauffeur service across Italy's top destinations, from Rome, Milan and Florence to Lake Como, the Amalfi Coast and Sicily.",
  alternates: { canonical: "/destinations" },
};

const variants = ["gold", "navy", "ivory"] as const;

export default function DestinationsIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Destinations" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Italy Destinations</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Private Chauffeur Coverage Across Italy
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            From the capital&apos;s ancient streets to the winding coastal roads of the south, our
            chauffeurs provide private transportation across every major Italian destination.
            Select a destination below for local routes, pickup points and travel guidance.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((d, i) => (
            <Link key={d.slug} href={`/destinations/${d.slug}`} className="group block">
              <ImageBlock label={d.name} variant={variants[i % variants.length]} />
              <p className="mt-3 text-sm font-semibold text-navy">{d.name}</p>
              <p className="text-xs text-stone">{d.region}</p>
            </Link>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
