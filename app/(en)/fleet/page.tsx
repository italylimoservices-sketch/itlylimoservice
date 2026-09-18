import type { Metadata } from "next";
import Link from "next/link";
import { fleet } from "@/lib/data/fleet";
import LinkedText from "@/components/ui/LinkedText";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageBlock from "@/components/ui/ImageBlock";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

const faqs = [
  {
    question: "How do I know which vehicle category is right for me?",
    answer:
      "Passenger and luggage count are the main factors. An [Executive Sedan](/fleet/executive-sedan) or [Luxury Sedan](/fleet/luxury-sedan) suits 1-3 people, a [Luxury SUV](/fleet/luxury-suv) suits up to 5, and an [Executive Van](/fleet/executive-van) or [Luxury Van](/fleet/luxury-van) suits up to 7. Mention your numbers when requesting a quote and we'll recommend a category.",
  },
  {
    question: "What's the difference between the Executive and Luxury versions of the same vehicle type?",
    answer:
      "Passenger and luggage capacity are identical between the Executive and Luxury version of each category — the difference is interior finish and presentation. Choose Luxury when appearance matters most, such as a special occasion or client-facing travel.",
  },
  {
    question: "Can I request a specific vehicle model?",
    answer:
      "We don't guarantee a specific make or model for any category — categories describe capacity and a general presentation standard, with the exact vehicle assigned based on availability at the time of your journey.",
  },
  {
    question: "What if my group is larger than any single vehicle can seat?",
    answer:
      "Seven passengers, in an Executive Van or Luxury Van, is our largest single vehicle. For bigger groups, we coordinate multiple vehicles travelling together — let us know your total numbers when requesting a quote.",
  },
];

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Explore our chauffeur-driven fleet across Italy — Executive Sedan, Luxury Sedan, Luxury SUV, Executive Van and Luxury Van categories.",
  alternates: { canonical: "/fleet", languages: { en: "/fleet", it: "/it/fleet", "x-default": "/fleet" } },
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
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            <LinkedText
              text="The same fleet is also used for [international border crossing transfers](/international-border-crossing-transfers), where luggage capacity and comfort matter most on longer journeys."
              linkClassName="text-gold-light underline underline-offset-2 hover:text-gold"
            />
          </p>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Capacity is the main difference between categories: an Executive Sedan or Luxury
            Sedan comfortably seats up to 3 with 2 suitcases, a Luxury SUV extends that to 5
            passengers and 4 suitcases, and an Executive Van or Luxury Van seats up to 7 with 6
            suitcases. The Luxury version of each type adds a more premium interior finish at the
            same capacity as its Executive counterpart.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((f, i) => (
            <Link
              key={f.slug}
              href={`/fleet/${f.slug}`}
              className="group rounded-md border border-line bg-white overflow-hidden block hover:border-gold/50 transition-colors"
            >
              <ImageBlock
                label={f.name}
                variant={i % 2 === 0 ? "navy" : "gold"}
                aspect="aspect-[16/10]"
                className="group-hover:opacity-90 transition-opacity"
                src={f.image}
              />
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
                <p className="mt-4 text-sm font-semibold text-gold group-hover:text-gold-light">View details →</p>
              </div>
            </Link>
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

      <FaqSection items={faqs} title="Fleet — Frequently Asked Questions" />
      <FinalCTA />
    </>
  );
}
