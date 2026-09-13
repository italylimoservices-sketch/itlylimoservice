import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/lib/data/destinations";
import { getMacroRegion, macroRegionLabels, macroRegionOrder } from "@/lib/data/destinationRegions";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageBlock from "@/components/ui/ImageBlock";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Italy Destinations",
  description:
    "Explore private chauffeur service across Italy's top destinations, from Rome, Milan and Florence to Lake Como, the Amalfi Coast and Sicily.",
  alternates: { canonical: "/destinations", languages: { en: "/destinations", it: "/it/destinations", "x-default": "/destinations" } },
};

const variants = ["gold", "navy", "ivory"] as const;

const regionIntro: Record<string, string> = {
  north: "From Milan's business districts to Lake Como's lakefront villages and the Ligurian coast — high-speed rail hubs and lake resorts.",
  central: "Rome, Florence and the Tuscan countryside in between — the classic first-time itinerary, and the region with the most day-trip requests.",
  south: "Naples as the gateway to the Amalfi Coast, Sorrento and the Bay of Naples — coastal roads best covered by a driver who knows them.",
  islands: "Sicily and Sardinia, best explored with a private driver over several days rather than a single transfer.",
};

const variantBySlug = new Map(
  macroRegionOrder
    .flatMap((macro) => destinations.filter((d) => getMacroRegion(d.region) === macro))
    .map((d, i) => [d.slug, variants[i % variants.length]] as const)
);

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

      {macroRegionOrder.map((macro, sectionIndex) => {
        const group = destinations.filter((d) => getMacroRegion(d.region) === macro);
        if (group.length === 0) return null;
        return (
          <section key={macro} className={`py-16 md:py-20 ${sectionIndex % 2 === 0 ? "bg-ivory" : "bg-ivory-deep/40"}`}>
            <div className="container-luxe">
              <SectionHeading title={macroRegionLabels[macro].en} subtitle={regionIntro[macro]} />
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {group.map((d) => (
                  <Link key={d.slug} href={`/destinations/${d.slug}`} className="group block">
                    <ImageBlock label={d.name} variant={variantBySlug.get(d.slug)!} src={d.image || undefined} />
                    <p className="mt-3 text-sm font-semibold text-navy">{d.name}</p>
                    <p className="text-xs text-stone">{d.region}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <FinalCTA />
    </>
  );
}
