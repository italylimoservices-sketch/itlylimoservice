import type { Metadata } from "next";
import Link from "next/link";
import { routes } from "@/lib/data/routes";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Popular Private Transfer Routes in Italy",
  description:
    "Browse Italy's most popular private chauffeur transfer routes between major cities, with fixed pricing and door-to-door service.",
  alternates: { canonical: "/routes", languages: { en: "/routes", it: "/it/routes", "x-default": "/routes" } },
};

export default function RoutesIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Routes" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Popular Routes</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            City-to-City Private Transfer Routes
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Direct, door-to-door private transfers between Italy&apos;s most visited cities. Don&apos;t see
            your exact route below? Request a quote and we&apos;ll arrange it.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map((r) => (
            <Link
              key={r.slug}
              href={`/routes/${r.slug}`}
              className="group flex flex-col justify-between gap-4 rounded-md border border-line bg-white p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/5 transition-all"
            >
              <div>
                <p className="font-display text-lg text-navy">
                  {r.from} <span className="text-gold">→</span> {r.to}
                </p>
                <p className="mt-2 text-sm text-stone">{r.distanceApprox} · {r.durationApprox}</p>
              </div>
              <span className="text-sm font-semibold text-gold group-hover:text-gold-light">
                View route details →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
