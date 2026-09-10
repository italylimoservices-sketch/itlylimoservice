import type { Metadata } from "next";
import { fleet } from "@/lib/data/fleet";
import { fleet_it } from "@/lib/i18n/data.it";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageBlock from "@/components/ui/ImageBlock";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "La Nostra Flotta",
  description:
    "Scopri la nostra flotta con autista in tutta Italia — Berlina Executive, Berlina di Lusso, SUV di Lusso, Van Executive e Van di Lusso.",
  alternates: { canonical: "/it/fleet", languages: { en: "/fleet", it: "/it/fleet" } },
};

export default function FleetPageIt() {
  return (
    <>
      <Breadcrumbs locale="it" items={[{ label: "Flotta" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">La Nostra Flotta</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Un Veicolo per Ogni Viaggio
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Ogni veicolo della nostra flotta è selezionato e mantenuto per garantire comfort,
            sicurezza e uno standard di presentazione costante. Le categorie qui sotto riflettono
            la capacità di passeggeri e bagagli; il modello specifico del veicolo viene confermato
            al momento della prenotazione in base alla disponibilità.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((f, i) => {
            const it = fleet_it[f.slug];
            return (
              <div key={f.slug} className="rounded-md border border-line bg-white overflow-hidden">
                <ImageBlock label={it?.name ?? f.name} variant={i % 2 === 0 ? "navy" : "gold"} aspect="aspect-[16/10]" src={f.image} />
                <div className="p-6">
                  <h2 className="font-display text-xl text-navy">{it?.name ?? f.name}</h2>
                  <p className="mt-1 text-sm text-gold font-medium">
                    {it?.passengers ?? f.passengers} · {it?.luggage ?? f.luggage}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{it?.description ?? f.description}</p>
                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wide text-stone mb-2">Servizi Inclusi</p>
                    <ul className="space-y-1.5">
                      {(it?.amenities ?? f.amenities).map((a) => (
                        <li key={a} className="text-sm text-ink-soft flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 text-xs text-stone italic">Ideale per: {it?.idealFor ?? f.idealFor}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory-deep/40">
        <div className="container-luxe max-w-2xl">
          <SectionHeading eyebrow="Nota sulla Flotta" title="Veicoli Confermati alla Prenotazione" />
          <p className="mt-4 text-sm leading-relaxed text-stone">
            Non garantiamo una marca o un modello specifico per nessuna categoria di prenotazione:
            le categorie di veicoli descrivono la capacità di passeggeri, la capacità bagagli e lo
            standard generale di presentazione. I veicoli esatti vengono assegnati in base alla
            disponibilità al momento del tuo viaggio.
          </p>
        </div>
      </section>

      <FinalCTA locale="it" />
    </>
  );
}
