import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contatti | Richiedi un Preventivo",
  description:
    "Contatta Italy Limo Service per un preventivo: transfer aeroportuali, trasporto città-città, tour ed eventi aziendali in tutta Italia.",
  alternates: { canonical: "/it/contact", languages: { en: "/contact", it: "/it/contact", "x-default": "/contact" } },
};

export default function ContactPageIt() {
  return (
    <>
      <Breadcrumbs locale="it" items={[{ label: "Contatti" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Contatti</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Richiedi un Preventivo o Prenota il Tuo Autista
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Condividi i dettagli del tuo viaggio e confermeremo disponibilità e prezzo fisso. Per
            account aziendali, eventi o itinerari di più giorni, contattaci pure direttamente.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <h2 className="font-display text-2xl text-navy mb-6">Contattaci</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-md border border-line bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-gold shrink-0">
                  <Icon name="email" className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-stone">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-navy hover:text-gold">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-md border border-gold/30 bg-gold-pale/20 p-5">
              <p className="text-sm font-semibold text-navy">Richieste Aziendali e per Eventi</p>
              <p className="mt-2 text-sm text-stone leading-relaxed">
                Per account aziendali, conferenze, roadshow o trasporto per eventi, indicalo nelle
                richieste speciali e il nostro team ti ricontatterà direttamente.
              </p>
            </div>
          </div>

          <QuoteForm locale="it" />
        </div>
      </section>
    </>
  );
}
