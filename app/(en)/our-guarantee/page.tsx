import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Our Guarantee",
  description:
    "What Italy Limo Service commits to on every booking — fixed pricing agreed before you travel, vetted professional chauffeurs, flight monitoring and a private vehicle for your group only.",
  alternates: {
    canonical: "/our-guarantee",
    languages: { en: "/our-guarantee", "x-default": "/our-guarantee" },
  },
};

const commitments = [
  {
    icon: "check",
    title: "A Fixed Price, Agreed Before You Travel",
    desc: "You receive a fixed quote before you book, based on your route, vehicle and journey details. That's the price you pay — no surprise charges added on the day.",
  },
  {
    icon: "shield",
    title: "Professional, Vetted Chauffeurs",
    desc: "Every journey is driven by a professional, English-speaking chauffeur, not a rideshare contractor. See our values on the About Us page.",
  },
  {
    icon: "plane",
    title: "Flight and Schedule Monitoring",
    desc: "For airport transfers, we track your flight in real time and adjust pickup timing automatically for early or delayed arrivals — you don't need to notify us yourself.",
  },
  {
    icon: "map",
    title: "A Private Vehicle, Every Time",
    desc: "Your vehicle and chauffeur are dedicated to your party for the full journey. We don't share your booking with other passengers.",
  },
  {
    icon: "chat",
    title: "Clear Communication If Plans Change",
    desc: "Reasonable changes to date, time or pickup details are usually possible — contact us as early as you can and we'll confirm what we can arrange against driver and vehicle availability.",
  },
];

export default function OurGuaranteePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Our Guarantee" }]} />

      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Our Guarantee</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            What We Commit to on Every Booking
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Private chauffeur travel should feel dependable from the moment you request a quote to
            the moment you&apos;re dropped off. These are the commitments that stand behind every
            booking with {siteConfig.name}.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe max-w-3xl">
          <div className="space-y-6">
            {commitments.map((c) => (
              <div key={c.title} className="flex gap-4 rounded-md border border-line bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/5 text-gold">
                  <Icon name={c.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-lg text-navy">{c.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxe max-w-2xl">
          <SectionHeading eyebrow="If Something Falls Short" title="Tell Us Directly" />
          <p className="mt-4 text-sm leading-relaxed text-stone">
            If any part of your journey doesn&apos;t match what was agreed, contact us directly at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
              {siteConfig.email}
            </a>{" "}
            and our team will look into it. For cancellation windows and refund eligibility, see our{" "}
            <Link href="/refund-policy" className="text-gold hover:underline">
              Refund Policy
            </Link>
            .
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
