import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Come ${siteConfig.name} raccoglie, utilizza e protegge i dati personali inviati tramite questo sito.`,
  alternates: { canonical: "/it/privacy-policy", languages: { en: "/privacy-policy", it: "/it/privacy-policy", "x-default": "/privacy-policy" } },
};

export default function PrivacyPolicyPageIt() {
  return (
    <>
      <Breadcrumbs locale="it" items={[{ label: "Privacy Policy" }]} />
      <section className="py-14 md:py-20 bg-ivory">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow mb-4">Legale</p>
          <h1 className="font-display text-4xl text-navy">Privacy Policy</h1>
          <p className="mt-4 text-sm text-stone">
            Ultimo aggiornamento: [Data da confermare]. Questo è un modello di policy e deve essere
            rivisto da un professionista qualificato prima della pubblicazione, in particolare per
            quanto riguarda gli obblighi GDPR per i visitatori e i clienti con sede nell&apos;UE.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-soft">
            <div>
              <h2 className="font-display text-xl text-navy mb-2">1. Chi Siamo</h2>
              <p>
                {siteConfig.name} gestisce questo sito web e fornisce
                servizi di trasporto con autista privato in tutta Italia. Per qualsiasi domanda
                relativa alla privacy, contattaci a{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">2. Informazioni che Raccogliamo</h2>
              <p>Quando richiedi un preventivo o ci contatti, potremmo raccogliere:</p>
              <ul className="mt-2 space-y-1.5 list-disc list-inside">
                <li>Dati di contatto (nome, indirizzo email, numero di telefono)</li>
                <li>Dettagli del viaggio (luoghi di ritiro e destinazione, date, numero di passeggeri)</li>
                <li>Qualsiasi informazione aggiuntiva che scegli di condividere nelle richieste speciali</li>
                <li>Dati tecnici di base (tipo di browser, dispositivo, pagine visitate) tramite strumenti di analisi standard del sito, se attivati</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">3. Come Utilizziamo le Tue Informazioni</h2>
              <p>
                Utilizziamo le informazioni fornite per rispondere alle richieste di preventivo,
                confermare ed evadere le prenotazioni, comunicare in merito al tuo viaggio e
                migliorare i nostri servizi. Non vendiamo dati personali a terzi. [Confermare
                eventuali usi aggiuntivi — comunicazioni di marketing, strumenti CRM, fornitori di
                analisi — prima del lancio.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">4. Cookie</h2>
              <p>
                Questo sito web può utilizzare cookie o tecnologie simili per le funzionalità
                principali e, se attivati, per l&apos;analisi. Puoi controllare i cookie tramite le
                impostazioni del tuo browser. [Un inventario completo dei cookie e un meccanismo di
                consenso dovrebbero essere aggiunti prima del lancio se vengono utilizzati cookie
                di analisi o marketing.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">5. Condivisione dei Dati</h2>
              <p>
                Potremmo condividere i dettagli di prenotazione necessari con autisti e partner
                operativi esclusivamente per evadere la tua richiesta di trasporto. [Elencare gli
                specifici responsabili del trattamento terzi — ad es. software di prenotazione,
                fornitori di pagamento — prima del lancio.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">6. Conservazione dei Dati</h2>
              <p>
                Conserviamo i dati personali solo per il tempo necessario a soddisfare le finalità
                descritte in questa policy, o come richiesto dalla legge. [Confermare i periodi di
                conservazione specifici prima del lancio.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">7. I Tuoi Diritti</h2>
              <p>
                A seconda della tua posizione, potresti avere il diritto di accedere, correggere,
                cancellare o trasferire i tuoi dati personali, e di opporti o limitare determinati
                trattamenti. Per esercitare questi diritti, contattaci a{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">8. Contatti</h2>
              <p>
                {siteConfig.name}
                <br />
                {siteConfig.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
