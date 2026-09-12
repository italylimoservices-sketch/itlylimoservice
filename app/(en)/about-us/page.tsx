import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { destinations } from "@/lib/data/destinations";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Italy Limo Service, a premium private chauffeur service operating across Italy, built around professionalism, safety and local expertise.",
  alternates: { canonical: "/about-us" },
};

const values = [
  { icon: "shield", title: "Safety First", desc: "Passenger comfort and safe, considered driving on every journey." },
  { icon: "clock", title: "Punctuality", desc: "Flight and schedule monitoring so your chauffeur is ready on time." },
  { icon: "check", title: "Transparency", desc: "Fixed pricing agreed before you travel, with no hidden costs." },
  { icon: "map", title: "Local Expertise", desc: "Drivers who know Italy's roads, restricted zones and regions well." },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">About {siteConfig.name}</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Premium Private Chauffeur Service, Built Around Italy
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            {siteConfig.name} provides private chauffeur transportation across Italy, from airport
            meet & greet to{" "}
            <Link href="/city-to-city-transfers" className="text-gold-light underline underline-offset-2 hover:text-gold">
              city-to-city transfers
            </Link>
            , hourly hire and personalised private tours —
            built for travellers who want a private, professional alternative to public transport
            or ride-hailing apps, with a driver who knows where they&apos;re going.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Our Approach" title="Professionalism, Without the Formality" />
            <p className="mt-4 text-sm leading-relaxed text-stone">
              We believe premium transportation should feel effortless rather than showy. That
              means punctual, well-presented chauffeurs, clean and comfortable vehicles, and
              pricing you can rely on before you ever get in the car — not unnecessary flourish.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone">
              Whether you&apos;re arriving for a single airport transfer or planning a multi-day
              itinerary across several regions, our approach stays the same: clear communication,
              reliable timing, and drivers who know the route.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="What We Stand For" title="Our Values" />
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="rounded-md border border-line bg-white p-5">
                  <Icon name={v.icon} className="h-5 w-5 text-gold" />
                  <p className="mt-3 font-display text-base text-navy">{v.title}</p>
                  <p className="mt-1.5 text-sm text-stone leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory-deep/40">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Where We Operate"
            title="Chauffeur Coverage Across Italy"
            subtitle="We arrange private chauffeur transportation nationwide, with the most frequently requested destinations below."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {destinations.map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-soft hover:border-gold hover:text-gold transition-colors"
              >
                {d.name}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-stone leading-relaxed">
            Don’t see your destination listed? Most journeys across Italy can still be arranged —{" "}
            <Link href="/contact" className="text-gold hover:underline">
              get in touch
            </Link>{" "}
            with your route and we’ll confirm availability.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe max-w-2xl">
          <SectionHeading eyebrow="Company Information" title="Details" />
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex gap-2">
              <dt className="font-semibold text-navy w-32 shrink-0">Coverage</dt>
              <dd className="text-stone">Nationwide chauffeur service across Italy</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-navy w-32 shrink-0">Contact</dt>
              <dd className="text-stone">{siteConfig.email}</dd>
            </div>
          </dl>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
