import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contatti | Richiedi un Preventivo",
  description:
    "Contatta Italy Limo Service per richiedere un preventivo per il tuo servizio di autista privato in Italia — transfer aeroportuali, trasporto città-città, tour ed eventi aziendali.",
  alternates: { canonical: "/it/contact", languages: { en: "/contact", it: "/it/contact" } },
};

const contactPoints = [
  { icon: "phone", label: "Telefono", value: siteConfig.phoneDisplay, href: siteConfig.phoneHref },
  {
    icon: "chat",
    label: "WhatsApp",
    value: "Scrivici direttamente",
    href: siteConfig.whatsappHref,
    external: true,
  },
  { icon: "email", label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: "map", label: "Ufficio", value: siteConfig.addressLine },
];

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
              {contactPoints.map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-md border border-line bg-white p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-gold shrink-0">
                    <Icon name={c.icon} className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-stone">{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
                        className="text-sm font-semibold text-navy hover:text-gold"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-navy">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
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
