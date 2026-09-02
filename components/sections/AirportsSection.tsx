import Link from "next/link";
import { airports } from "@/lib/data/airports";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

export default function AirportsSection() {
  return (
    <section className="py-16 md:py-24 bg-navy-deep text-ivory">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Airport Transfers"
            title="Meet & Greet at Italy's Major Airports"
            subtitle="Real-time flight monitoring, a driver waiting at arrivals, and help with luggage from terminal to vehicle — at every major airport we serve."
            light
          />
          <Link
            href="/airport-transfers"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-gold"
          >
            All airport transfers →
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {airports.map((a) => (
            <Link
              key={a.slug}
              href={`/airport-transfers/${a.slug}`}
              className="group flex items-center justify-between gap-3 rounded-sm border border-ivory/10 px-5 py-4 hover:border-gold/50 hover:bg-white/[0.03] transition-colors"
            >
              <div>
                <p className="text-sm font-semibold text-ivory">{a.name}</p>
                <p className="text-xs text-ivory-deep/60 mt-0.5">{a.code} · {a.city}</p>
              </div>
              <Icon name="plane" className="h-4 w-4 text-gold-light shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
