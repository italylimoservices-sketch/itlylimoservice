import Link from "next/link";
import { routes } from "@/lib/data/routes";
import SectionHeading from "@/components/ui/SectionHeading";

export default function RoutesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Popular Private Transfers"
            title="High-Demand City-to-City Routes"
            subtitle="Fixed, door-to-door pricing on Italy's most requested private transfer routes — with many more available on request."
          />
          <Link
            href="/routes"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"
          >
            All routes →
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {routes.map((r) => (
            <Link
              key={r.slug}
              href={`/routes/${r.slug}`}
              className="group flex items-center justify-between gap-3 rounded-sm border border-line px-5 py-4 hover:border-gold/50 hover:bg-ivory-deep/30 transition-colors"
            >
              <div>
                <p className="text-sm font-semibold text-navy">
                  {r.from} <span className="text-gold">→</span> {r.to}
                </p>
                <p className="text-xs text-stone mt-0.5">{r.durationApprox}</p>
              </div>
              <span className="text-gold text-sm group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
