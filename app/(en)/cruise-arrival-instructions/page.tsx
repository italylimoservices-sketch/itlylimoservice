import type { Metadata } from "next";
import Link from "next/link";
import { cruisePorts } from "@/lib/data/ports";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Cruise Arrival Instructions",
  description:
    "What to expect when your private chauffeur meets you at the cruise port — where to meet, what to bring, and timing advice for port-day excursions.",
  alternates: {
    canonical: "/cruise-arrival-instructions",
    languages: {
      en: "/cruise-arrival-instructions",
      "x-default": "/cruise-arrival-instructions",
    },
  },
};

const steps = [
  {
    icon: "calendar",
    title: "1. Share your ship and port details when booking",
    desc: "Let us know your cruise line, ship name, port of call and estimated disembarkation time when you request your quote, so your chauffeur can plan around the ship's schedule.",
  },
  {
    icon: "anchor",
    title: "2. Disembark and clear the port terminal",
    desc: "Follow your ship's disembarkation process as normal. Your chauffeur waits for you outside the port terminal building, not inside the secure dock area.",
  },
  {
    icon: "map",
    title: "3. Look for your chauffeur with a name board",
    desc: "As with airport pickups, your chauffeur holds a sign with your name, making it straightforward to find each other even among a large crowd of disembarking passengers.",
  },
  {
    icon: "clock",
    title: "4. Plan your return with departure time in mind",
    desc: "If you're booking a port-day excursion rather than a one-way transfer, tell us your ship's \"all aboard\" time when requesting your quote. We build a buffer into the itinerary so you're back at the port comfortably before departure.",
  },
  {
    icon: "chat",
    title: "5. Delays or itinerary changes",
    desc: "Cruise schedules can shift. If your arrival time changes, email us as early as you can and we'll do our best to adjust — see our FAQ for how we handle on-the-day changes.",
  },
];

export default function CruiseArrivalInstructionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Cruise Arrival Instructions" }]} />

      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Cruise Port Transfers</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Cruise Arrival Instructions
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Whether you&apos;re heading straight into the city or taking a private port-day excursion,
            here&apos;s what to expect when your chauffeur meets you at the port.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe max-w-3xl">
          <SectionHeading eyebrow="How It Works" title="Meeting Your Chauffeur at the Port" />
          <div className="mt-10 space-y-6">
            {steps.map((s) => (
              <div key={s.title} className="flex gap-4 rounded-md border border-line bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/5 text-gold">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-lg text-navy">{s.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Good to Know" title="Port-Day Excursions vs One-Way Transfers" />
            <ul className="mt-6 space-y-4 text-sm text-ink-soft">
              <li>
                <strong className="text-navy">One-way transfer</strong>
                <p className="mt-1 text-stone">
                  Your chauffeur takes you directly from the port to your next destination — a hotel,
                  the airport, or onward to another city.
                </p>
              </li>
              <li>
                <strong className="text-navy">Port-day excursion</strong>
                <p className="mt-1 text-stone">
                  Your chauffeur waits with you (or returns at an agreed time) for a private day of
                  sightseeing before bringing you back to the ship ahead of departure.
                </p>
              </li>
              <li>
                <strong className="text-navy">What to bring</strong>
                <p className="mt-1 text-stone">
                  Your ship ID card for re-boarding, any documents required by the port authority, and
                  comfortable shoes if you&apos;ve booked a walking-heavy excursion.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="Ports We Serve" title="Where We Offer Cruise Transfers" />
            <div className="mt-6 flex flex-wrap gap-3">
              {cruisePorts.map((p) => (
                <span
                  key={p.slug}
                  className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-soft"
                >
                  {p.name}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-stone leading-relaxed">
              See our{" "}
              <Link href="/cruise-port-transfers" className="text-gold hover:underline">
                cruise port transfers page
              </Link>{" "}
              for what each port connects to, or our{" "}
              <Link href="/airport-meeting-instructions" className="text-gold hover:underline">
                airport meeting instructions
              </Link>{" "}
              if you&apos;re flying in instead.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
