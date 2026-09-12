import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "Italy Limo Service: un servizio di autista privato di alta gamma in tutta Italia, costruito su professionalità, sicurezza e conoscenza del territorio.",
  alternates: { canonical: "/it/about-us", languages: { en: "/about-us", it: "/it/about-us", "x-default": "/about-us" } },
};

const values = [
  { icon: "shield", title: "Sicurezza al Primo Posto", desc: "Comfort dei passeggeri e guida sicura e attenta in ogni viaggio." },
  { icon: "clock", title: "Puntualità", desc: "Monitoraggio di voli e orari così il tuo autista è sempre pronto in tempo." },
  { icon: "check", title: "Trasparenza", desc: "Prezzi fissi concordati prima del viaggio, senza costi nascosti." },
  { icon: "map", title: "Conoscenza del Territorio", desc: "Autisti che conoscono bene le strade, le zone a traffico limitato e le regioni d'Italia." },
];

export default function AboutPageIt() {
  return (
    <>
      <Breadcrumbs locale="it" items={[{ label: "Chi Siamo" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Chi è {siteConfig.name}</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Servizio di Autista Privato di Alta Gamma, Pensato per l&apos;Italia
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            {siteConfig.name} offre trasporto privato con autista in tutta Italia, dall&apos;accoglienza
            in aeroporto ai transfer città-città, dal noleggio a ore ai tour privati personalizzati —
            pensato per chi cerca un&apos;alternativa privata e professionale ai mezzi pubblici o alle
            app di ride-hailing, con un autista che sa sempre dove andare.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Il Nostro Approccio" title="Professionalità, Senza Formalità" />
            <p className="mt-4 text-sm leading-relaxed text-stone">
              Crediamo che un trasporto di alta gamma debba risultare naturale, non ostentato. Questo
              significa autisti puntuali e curati nella presentazione, veicoli puliti e confortevoli,
              e prezzi su cui puoi contare prima ancora di salire in auto — senza inutili eccessi.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone">
              Che tu stia arrivando per un semplice transfer aeroportuale o stia pianificando un
              itinerario di più giorni in diverse regioni, il nostro approccio resta lo stesso:
              comunicazione chiara, orari affidabili e autisti che conoscono il percorso.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Cosa Ci Rappresenta" title="I Nostri Valori" />
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
        <div className="container-luxe max-w-2xl">
          <SectionHeading eyebrow="Informazioni Aziendali" title="Dettagli" />
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex gap-2">
              <dt className="font-semibold text-navy w-32 shrink-0">Copertura</dt>
              <dd className="text-stone">Servizio di autista privato su tutto il territorio italiano</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-navy w-32 shrink-0">Contatti</dt>
              <dd className="text-stone">{siteConfig.email}</dd>
            </div>
          </dl>
        </div>
      </section>

      <FinalCTA locale="it" />
    </>
  );
}
