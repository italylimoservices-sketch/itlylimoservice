import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import LinkedText from "@/components/ui/LinkedText";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Chauffeur Service Pricing Guide",
  description:
    "What affects the cost of a private chauffeur in Italy — vehicle type, distance, waiting time and passengers. Request a fixed, transparent quote.",
  alternates: { canonical: "/pricing" },
};

const factors = [
  {
    icon: "steering-wheel",
    title: "Vehicle Type",
    desc: "An executive sedan, luxury SUV or larger van each carry a different rate — see the [Fleet page](/fleet) for what fits your group.",
  },
  {
    icon: "route",
    title: "Distance & Route",
    desc: "A short airport transfer and a multi-hour [city-to-city](/city-to-city-transfers) journey are priced differently, based on the actual route requested.",
  },
  {
    icon: "clock",
    title: "Waiting Time",
    desc: "Extended waiting beyond what's agreed in advance — for a meeting, a flight delay past the included allowance, or a stop along the way — can affect the final price.",
  },
  {
    icon: "map",
    title: "Stops & Detours",
    desc: "Additional stops, a scenic detour, or a multi-point itinerary are quoted as part of the journey when you tell us about them upfront.",
  },
  {
    icon: "plane",
    title: "Airport Pickup",
    desc: "Meet & greet and flight monitoring are included in airport transfers — mentioning your flight number and terminal helps us quote accurately.",
  },
  {
    icon: "check",
    title: "Passengers & Luggage",
    desc: "Passenger and luggage count determines the vehicle category required, which in turn affects price.",
  },
  {
    icon: "sparkles",
    title: "Date & Time",
    desc: "Very early, very late, or peak-season bookings can be priced differently from standard daytime availability.",
  },
  {
    icon: "chat",
    title: "Special Requests",
    desc: "A child seat, a specific vehicle preference, or other special requirements are factored into your quote once confirmed.",
  },
  {
    icon: "shield",
    title: "One-Way vs. Round Trip",
    desc: "A return journey booked together is quoted as a single request — let us know both directions when asking for a quote.",
  },
  {
    icon: "briefcase",
    title: "Hourly vs. Point-to-Point",
    desc: "Hourly hire (where the chauffeur stays with you across several stops) is priced differently from a single fixed pickup-to-drop-off transfer.",
  },
];

const faqs = [
  {
    question: "Do you have fixed prices published for each route?",
    answer:
      "We quote each journey individually based on the factors above, rather than publishing a fixed price list, since vehicle availability and exact requirements vary. Request a quote and we’ll confirm a fixed price before you book.",
  },
  {
    question: "Will the price change after I’ve booked?",
    answer:
      "No — once your quote is confirmed and booked, that price is fixed for the journey as described. Extra costs only apply if the trip itself changes materially (for example, added stops or significant extra waiting time you request on the day).",
  },
  {
    question: "Is a deposit required?",
    answer:
      "[To be confirmed by the business — payment timing and any deposit requirement will be listed here.] Your quote confirmation will state what applies.",
  },
  {
    question: "How do I get an exact price for my trip?",
    answer:
      "Request a quote with your pickup, destination, date, time, passenger count and vehicle preference, and we’ll reply with a fixed price for that specific journey.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Pricing" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Pricing</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            What Affects the Cost of a Private Chauffeur in Italy
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            We don’t publish a fixed price list, because no two journeys are quite the same —
            route, vehicle, timing and group size all play a part. Instead, here’s exactly what we
            take into account, so you know what to expect before you request a quote.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="What We Consider"
            title="Factors That Affect Your Quote"
            subtitle="Every quote is fixed and agreed before you book — these are the details that shape the number."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {factors.map((f) => (
              <div key={f.title} className="rounded-md border border-line bg-white p-5">
                <Icon name={f.icon} className="h-5 w-5 text-gold" />
                <p className="mt-3 font-display text-base text-navy">{f.title}</p>
                <p className="mt-1.5 text-sm text-stone leading-relaxed">
                  <LinkedText text={f.desc} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="What's Covered" title="What Your Fixed Quote Includes" />
            <ul className="mt-6 space-y-3">
              {[
                "Your chauffeur and vehicle for the journey exactly as agreed",
                "Standard tolls and route costs needed to complete that specific journey",
                "Meet & greet and flight monitoring on airport transfers",
                "The amenities listed for your vehicle category on the [Fleet page](/fleet)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Icon name="check" className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                  <LinkedText text={item} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="What Can Change It" title="What's Confirmed Separately" />
            <ul className="mt-6 space-y-3">
              {[
                "Waiting time beyond what's agreed before the journey",
                "Extra stops or a longer route than originally requested",
                "Changes to date, time or vehicle made after booking",
                "Deposit or payment timing — [to be confirmed by the business]",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-stone leading-relaxed">
              None of this is billed as a surprise — if something changes, we confirm the updated
              price with you before it applies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory-deep/40">
        <div className="container-luxe max-w-2xl">
          <SectionHeading eyebrow="How Quoting Works" title="A Fixed Price, Agreed Before You Travel" />
          <p className="mt-4 text-sm leading-relaxed text-stone">
            Tell us your route, date, time, passenger and luggage details, and preferred vehicle
            when requesting a quote. We confirm a fixed price by email before your booking is
            secured — no surge pricing, and no surprises added on the day for the journey as
            described.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/book"
              className="inline-flex items-center rounded-sm bg-gold-light px-6 py-3 text-sm font-semibold uppercase tracking-wide text-navy-deep hover:bg-gold-pale transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/fleet"
              className="inline-flex items-center rounded-sm border border-line px-6 py-3 text-sm font-semibold uppercase tracking-wide text-navy hover:border-gold transition-colors"
            >
              Compare Vehicles
            </Link>
          </div>
        </div>
      </section>

      <FaqSection items={faqs} eyebrow="Pricing FAQ" title="Pricing Questions" />
      <FinalCTA />
    </>
  );
}
