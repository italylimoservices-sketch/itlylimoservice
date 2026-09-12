import type { Metadata } from "next";
import Link from "next/link";
import { airports } from "@/lib/data/airports";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Airport Meeting & Pickup Instructions",
  description:
    "Step-by-step guidance for meeting your private chauffeur at the airport — where to look, what to expect, and what to do if you can't find your driver.",
  alternates: {
    canonical: "/airport-meeting-instructions",
    languages: {
      en: "/airport-meeting-instructions",
      "x-default": "/airport-meeting-instructions",
    },
  },
};

const steps = [
  {
    icon: "calendar",
    title: "1. Share your flight details when booking",
    desc: "Include your flight number, arrival terminal and passenger count when you request your quote. We use this to track your flight, so your chauffeur is timed to your actual landing rather than the scheduled one.",
  },
  {
    icon: "plane",
    title: "2. We monitor your flight in real time",
    desc: "If your flight is early, delayed, or changes gate or terminal, your chauffeur adjusts automatically. You don't need to contact us to report a schedule change yourself.",
  },
  {
    icon: "map",
    title: "3. Look for your chauffeur inside the arrivals hall",
    desc: "Your chauffeur waits inside the arrivals area — not outside the terminal — holding a sign with your name. This is the main difference from a standard taxi rank pickup: no searching the curb, no queueing.",
  },
  {
    icon: "briefcase",
    title: "4. Luggage and walk to the vehicle",
    desc: "Your chauffeur helps with luggage and walks you directly to the vehicle, which is parked nearby or a short walk from the terminal depending on the airport.",
  },
  {
    icon: "chat",
    title: "5. Can't find your chauffeur?",
    desc: "If you don't see your name board within a few minutes of clearing arrivals, email us and we'll help you locate your driver or confirm their exact position.",
  },
];

export default function AirportMeetingInstructionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Airport Meeting Instructions" }]} />

      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Airport Transfers</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Airport Meeting & Pickup Instructions
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Landing in an unfamiliar airport is easier when you know exactly where to look. Here&apos;s
            what to expect when your private chauffeur meets you at arrivals, from booking to the
            moment you&apos;re in the vehicle.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe max-w-3xl">
          <SectionHeading eyebrow="How It Works" title="Meeting Your Chauffeur, Step by Step" />
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
            <SectionHeading eyebrow="Good to Know" title="Frequently Asked Practical Questions" />
            <ul className="mt-6 space-y-4 text-sm text-ink-soft">
              <li>
                <strong className="text-navy">What if my flight lands very early or very late?</strong>
                <p className="mt-1 text-stone">
                  We cover airport pickups at any hour — there&apos;s no need to worry about landing outside
                  normal daytime hours.
                </p>
              </li>
              <li>
                <strong className="text-navy">Do I need to call anyone after landing?</strong>
                <p className="mt-1 text-stone">
                  No. Your chauffeur is already tracking your flight and will be waiting when you clear
                  arrivals, even if your landing time shifted.
                </p>
              </li>
              <li>
                <strong className="text-navy">What if I&apos;m travelling with a large group or lots of luggage?</strong>
                <p className="mt-1 text-stone">
                  Mention your passenger and luggage count when requesting your quote so we can confirm
                  the right vehicle — see our <Link href="/fleet" className="text-gold hover:underline">Fleet page</Link> for capacity by category.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="Covered Airports" title="Where We Offer Meet & Greet" />
            <div className="mt-6 flex flex-wrap gap-3">
              {airports.map((a) => (
                <Link
                  key={a.slug}
                  href={`/airport-transfers/${a.slug}`}
                  className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-soft hover:border-gold hover:text-gold transition-colors"
                >
                  {a.name}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-stone leading-relaxed">
              Arriving by sea instead? See our{" "}
              <Link href="/cruise-arrival-instructions" className="text-gold hover:underline">
                cruise arrival instructions
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
