import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const ports = [
  "Civitavecchia",
  "Naples",
  "Livorno",
  "Genoa",
  "Venice",
  "Palermo",
  "Bari",
  "Catania",
  "La Spezia",
];

export default function CruiseSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-luxe grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <div>
          <SectionHeading
            eyebrow="Cruise & Port Transfers"
            title="Private Transfers to Italy's Cruise Ports"
            subtitle="Embarkation and disembarkation days run on a schedule. We connect Italy's major cruise ports with nearby hotels, airports and cities, timed around your ship."
          />
          <Link
            href="/cruise-port-transfers"
            className="mt-6 inline-flex items-center rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-gold hover:text-navy-deep transition-colors"
          >
            Cruise Transfer Details
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {ports.map((port) => (
            <div
              key={port}
              className="rounded-sm border border-line bg-ivory-deep/30 px-4 py-5 text-center"
            >
              <p className="text-sm font-semibold text-navy">{port}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
