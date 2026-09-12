import type { Metadata } from "next";
import Link from "next/link";
import { routes } from "@/lib/data/routes";
import { destinationNames_it, distance_it, duration_it } from "@/lib/i18n/data.it";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Tratte di Transfer Privato Popolari in Italia",
  description:
    "Sfoglia le tratte di transfer privato con autista più popolari tra le principali città italiane, con prezzi fissi e servizio porta a porta.",
  alternates: { canonical: "/it/routes", languages: { en: "/routes", it: "/it/routes", "x-default": "/routes" } },
};

export default function RoutesIndexPageIt() {
  return (
    <>
      <Breadcrumbs locale="it" items={[{ label: "Tratte" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Tratte Popolari</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Tratte di Transfer Privato Città-Città
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Transfer privati diretti porta a porta tra le città più visitate d&apos;Italia. Non trovi
            la tua tratta esatta qui sotto? Richiedi un preventivo e la organizzeremo per te.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map((r) => {
            const from = destinationNames_it[r.fromSlug]?.name ?? r.from;
            const to = destinationNames_it[r.toSlug]?.name ?? r.to;
            return (
              <Link
                key={r.slug}
                href={`/it/routes/${r.slug}`}
                className="group flex flex-col justify-between gap-4 rounded-md border border-line bg-white p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/5 transition-all"
              >
                <div>
                  <p className="font-display text-lg text-navy">
                    {from} <span className="text-gold">→</span> {to}
                  </p>
                  <p className="mt-2 text-sm text-stone">{distance_it(r.distanceApprox)} · {duration_it(r.durationApprox)}</p>
                </div>
                <span className="text-sm font-semibold text-gold group-hover:text-gold-light">
                  Vedi dettagli della tratta →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <FinalCTA locale="it" />
    </>
  );
}
