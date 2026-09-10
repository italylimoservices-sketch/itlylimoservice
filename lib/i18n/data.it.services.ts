// Italian translations for the detailed service-page fields (meta tags, hero
// heading, intro copy, benefits, who-for, included and FAQs). Keyed by the
// same slugs used in lib/data/services.ts. The shorter fields (name,
// shortDescription) are translated separately in services_it (data.it.ts) —
// this file covers everything else on the service detail pages.

export const serviceDetails_it: Record<
  string,
  {
    metaTitle: string;
    metaDescription: string;
    heroHeading: string;
    intro: string[];
    benefits: string[];
    whoFor: string[];
    included: string[];
    faqs: { question: string; answer: string }[];
  }
> = {
  "airport-transfers": {
    metaTitle: "Transfer Aeroportuali in Italia",
    metaDescription:
      "Transfer aeroportuali privati in tutta Italia con monitoraggio dei voli, accoglienza personalizzata e assistenza bagagli. Roma, Milano, Venezia, Firenze, Napoli e altre città.",
    heroHeading: "Transfer Aeroportuali in Tutta Italia",
    intro: [
      "Arrivare in un nuovo paese dopo un volo lungo è tutta un'altra cosa quando trovi già qualcuno ad aspettarti. I nostri autisti monitorano il tuo volo in tempo reale, si adattano a eventuali ritardi e ti accolgono in sala arrivi con un cartello con il tuo nome e una mano per i bagagli.",
      "Copriamo i principali aeroporti internazionali e regionali italiani, con transfer diretti verso la città più vicina e collegamenti successivi verso il resto del paese.",
    ],
    benefits: [
      "Monitoraggio del volo in tempo reale, inclusi ritardi e arrivi anticipati",
      "Accoglienza in sala arrivi con cartello personalizzato",
      "Assistenza bagagli dal terminal al veicolo",
      "Trasporto diretto e non condiviso",
      "Prezzo fisso concordato prima della partenza",
    ],
    whoFor: [
      "Viaggiatori d'affari con orari serrati",
      "Famiglie in arrivo con bagagli e bambini",
      "Viaggiatori in coincidenza verso altre destinazioni",
      "Chiunque preferisca evitare la fila per un taxi dopo un volo",
    ],
    included: [
      "Monitoraggio del volo e orario di ritiro adattato",
      "Accoglienza con cartello personalizzato",
      "Gestione dei bagagli",
      "Acqua in bottiglia a bordo",
      "Consegna porta a porta",
    ],
    faqs: [
      {
        question: "Monitorate il mio volo in caso di ritardi?",
        answer:
          "Sì. Monitoriamo il tuo volo in tempo reale e adattiamo automaticamente l'orario di ritiro in caso di arrivi anticipati o ritardati.",
      },
      {
        question: "Cosa succede se non trovo il mio autista in sala arrivi?",
        answer:
          "Il tuo autista ti aspetta in sala arrivi con un cartello ben visibile e può essere contattato direttamente tramite i recapiti indicati nella conferma di prenotazione.",
      },
      {
        question: "Posso prenotare anche il transfer di ritorno in aeroporto?",
        answer:
          "Sì, i transfer aeroportuali andata e ritorno possono essere prenotati insieme, oppure separatamente più vicino alla data del rientro.",
      },
    ],
  },
  "chauffeur-service": {
    metaTitle: "Servizio Auto con Autista Privato in Italia",
    metaDescription:
      "Servizio auto con autista privato in tutta Italia per spostamenti in città, gite giornaliere e itinerari personalizzati, con autisti di lingua inglese.",
    heroHeading: "Servizio Auto con Autista Privato in Italia",
    intro: [
      "Un autista privato ti offre un unico punto di riferimento per tutti i tuoi spostamenti durante il soggiorno, invece di dover organizzare taxi o transfer separati per ogni tappa del viaggio.",
      "Che tu abbia bisogno di un trasporto per una singola serata o di un itinerario completo tra più città, il tuo autista si adatta ai tuoi programmi, non il contrario.",
    ],
    benefits: [
      "Un unico autista dedicato per tutto il soggiorno o l'itinerario",
      "Conoscenza locale di percorsi, tempistiche e zone a traffico limitato",
      "Programmazione flessibile che si adatta a eventuali cambi di piano",
      "Veicoli confortevoli e ben curati",
      "Autisti professionali di lingua inglese",
    ],
    whoFor: [
      "Viaggiatori che apprezzano continuità e servizio personalizzato",
      "Itinerari tra più città",
      "Occasioni speciali e celebrazioni",
      "Chiunque preferisca non guidare autonomamente in Italia",
    ],
    included: [
      "Autista dedicato per il periodo prenotato",
      "Pianificazione del percorso e indicazioni locali",
      "Tempo di attesa concordato in anticipo",
      "Acqua in bottiglia a bordo",
    ],
    faqs: [
      {
        question: "Posso avere lo stesso autista per più giorni?",
        answer:
          "Sì, possiamo organizzare un autista dedicato per tutta la durata del tuo soggiorno, compatibilmente con la disponibilità.",
      },
      {
        question: "Il mio itinerario può cambiare durante la giornata?",
        answer:
          "Sì. Il tuo autista può adattarsi a ragionevoli cambi di programma; eventuali attese prolungate o soste aggiuntive possono influire sul prezzo finale.",
      },
      {
        question: "È richiesta una durata minima di prenotazione?",
        answer:
          "Può variare in base al servizio e al tipo di veicolo: comunicaci i tuoi piani al momento della richiesta di preventivo e ti confermeremo le condizioni applicabili.",
      },
    ],
  },
  "city-to-city-transfers": {
    metaTitle: "Transfer Privati tra Città in Italia",
    metaDescription:
      "Transfer privati porta a porta tra le città italiane, tra cui Roma, Firenze, Venezia, Napoli e Milano, con prezzo fisso e autisti professionali.",
    heroHeading: "Transfer Privati tra Città",
    intro: [
      "I treni in Italia sono efficienti, ma non arrivano porta a porta e richiedono di gestire i bagagli tra stazioni e binari. Un transfer privato ti porta direttamente dal tuo hotel in una città all'hotel nella città successiva.",
      "Operiamo su percorsi fissi tra le principali città, oltre a transfer su lunga distanza personalizzati verso destinazioni meno comuni.",
    ],
    benefits: [
      "Servizio porta a porta, senza cambi in stazione",
      "Prezzo fisso concordato in anticipo",
      "Orari di partenza flessibili",
      "Possibilità di aggiungere soste panoramiche lungo il percorso",
      "Comodo per famiglie e piccoli gruppi",
    ],
    whoFor: [
      "Viaggiatori con bagagli voluminosi",
      "Gruppi e famiglie in viaggio insieme",
      "Chiunque debba prendere un volo o una crociera all'arrivo",
      "Viaggiatori che preferiscono un tragitto privato e diretto",
    ],
    included: [
      "Trasporto diretto da punto a punto",
      "Soste facoltative lungo il percorso",
      "Assistenza bagagli",
      "Prezzo fisso concordato",
    ],
    faqs: [
      {
        question: "Il prezzo dei transfer tra città è fisso in anticipo?",
        answer:
          "Sì, ricevi un prezzo fisso per l'intero tragitto prima di partire, indipendentemente dalle condizioni del traffico.",
      },
      {
        question: "Possiamo fare soste lungo il tragitto?",
        answer:
          "Sì, soste panoramiche o pratiche possono generalmente essere organizzate: basta segnalarle al momento della richiesta di preventivo.",
      },
      {
        question: "Quanti bagagli potete trasportare?",
        answer:
          "La capacità bagagli dipende dal veicolo prenotato; comunicaci il volume dei tuoi bagagli così possiamo consigliarti il veicolo più adatto.",
      },
    ],
  },
  "hourly-chauffeur": {
    metaTitle: "Autista a Ore in Italia",
    metaDescription:
      "Prenota un autista privato a ore in Italia per riunioni, shopping, visite turistiche o eventi, con autista e veicolo dedicati a tua disposizione.",
    heroHeading: "Servizio di Autista a Ore",
    intro: [
      "Certe giornate richiedono un trasporto flessibile più che un ritiro e una consegna a orari fissi. Il nostro servizio di autista a ore mette a tua disposizione un autista e un veicolo dedicati per un blocco di tempo, così puoi spostarti tra le tappe man mano che i tuoi piani si sviluppano.",
      "Questo servizio è molto richiesto per giornate di shopping, riunioni di lavoro in più punti della città e itinerari turistici con diverse tappe.",
    ],
    benefits: [
      "Autista e veicolo dedicati per le ore prenotate",
      "Flessibilità per cambiare i piani nel corso della giornata",
      "Nessuna necessità di organizzare transfer separati tra le tappe",
      "Tempo di attesa incluso nelle ore prenotate",
    ],
    whoFor: [
      "Viaggiatori d'affari con più riunioni",
      "Giornate di shopping e tempo libero con diverse tappe",
      "Itinerari turistici al proprio ritmo",
      "Occasioni speciali che richiedono un autista a disposizione",
    ],
    included: [
      "Autista e veicolo per le ore concordate",
      "Tempo di attesa tra le tappe",
      "Flessibilità di percorso durante la prenotazione",
    ],
    faqs: [
      {
        question: "Qual è la prenotazione minima per il noleggio a ore?",
        answer:
          "Le prenotazioni a ore prevedono in genere una durata minima: indica quante ore ti servono al momento della richiesta di preventivo e ti confermeremo la disponibilità.",
      },
      {
        question: "Il tempo di attesa rientra nelle ore prenotate?",
        answer:
          "Sì, qualsiasi tempo di attesa durante il quale il tuo autista è a disposizione rientra nelle ore prenotate.",
      },
      {
        question: "Posso prolungare la prenotazione durante la giornata?",
        answer:
          "Le proroghe sono spesso possibili in base alla disponibilità del tuo autista; basta chiedere direttamente all'autista o al nostro team nel corso della giornata.",
      },
    ],
  },
  "italy-private-tours": {
    metaTitle: "Tour Privati in Italia con Autista",
    metaDescription:
      "Itinerari di viaggio privati e flessibili in Italia con autista, alla scoperta di Toscana, Costiera Amalfitana, Roma, Venezia, Lago di Como, Cinque Terre e Sicilia.",
    heroHeading: "Tour Privati in Italia",
    intro: [
      "I tour di gruppo seguono orari fissi e tappe fisse. Un tour privato con il tuo autista segue invece i tuoi tempi, con la libertà di soffermarti in un luogo che ami e saltare ciò che non ti interessa.",
      "Progettiamo itinerari flessibili di uno o più giorni nelle regioni italiane più richieste, costruiti attorno ai tuoi interessi e al tuo ritmo.",
    ],
    benefits: [
      "Completamente privato, non condiviso con altri viaggiatori",
      "Ritmo e soste flessibili",
      "Conoscenza locale del territorio da parte dell'autista",
      "Itinerari disponibili di uno o più giorni",
    ],
    whoFor: [
      "Viaggiatori che preferiscono la privacy ai tour di gruppo",
      "Coppie e famiglie che desiderano un ritmo personalizzato",
      "Appassionati di vino, cibo e campagna",
      "Esplorazioni regionali di più giorni",
    ],
    included: [
      "Veicolo e autista privati per il tour",
      "Pianificazione flessibile dell'itinerario",
      "Conoscenza dei percorsi locali e suggerimenti",
    ],
    faqs: [
      {
        question: "In cosa si differenzia un tour privato da un tour di gruppo?",
        answer:
          "Un tour privato utilizza solo il tuo veicolo e il tuo autista, con un itinerario calibrato sui tuoi interessi anziché su un programma di gruppo fisso.",
      },
      {
        question: "Potete progettare un itinerario personalizzato di più giorni?",
        answer:
          "Sì, costruiamo regolarmente itinerari di più giorni tra diverse regioni: raccontaci i tuoi interessi e ti proporremo un percorso.",
      },
      {
        question: "I tour includono un commento guidato?",
        answer:
          "I nostri autisti condividono conoscenze locali lungo il percorso; una guida locale autorizzata può essere organizzata separatamente dove richiesto: chiedici informazioni in fase di pianificazione dell'itinerario.",
      },
    ],
  },
  "corporate-chauffeur": {
    metaTitle: "Servizio Auto Aziendale con Autista in Italia",
    metaDescription:
      "Servizio auto aziendale con autista in Italia per viaggi executive, transfer aeroportuali, roadshow e conferenze, con autisti affidabili e professionali.",
    heroHeading: "Servizio Auto Aziendale con Autista",
    intro: [
      "I viaggi di lavoro si basano sull'affidabilità, e il nostro servizio auto aziendale è costruito attorno a puntualità, discrezione e professionalità in ogni fase.",
      "Dal singolo transfer executive al trasporto coordinato per una conferenza o un roadshow, ci adattiamo alle esigenze della tua organizzazione.",
    ],
    benefits: [
      "Programmazione puntuale e affidabile per agende serrate",
      "Autisti discreti e professionali",
      "Trasporto coordinato per gruppi ed eventi",
      "Possibilità di accordi di fatturazione aziendale",
    ],
    whoFor: [
      "Dirigenti e viaggiatori d'affari",
      "Aziende che organizzano conferenze o roadshow",
      "Itinerari di lavoro di più giorni",
      "Organizzatori di eventi aziendali",
    ],
    included: [
      "Veicoli professionali adatti al contesto business",
      "Programmazione puntuale e conferme",
      "Logistica coordinata multi-veicolo dove necessario",
    ],
    faqs: [
      {
        question: "Offrite conti di fatturazione aziendale?",
        answer:
          "Possiamo attivare accordi di fatturazione aziendale per le aziende con esigenze di viaggio regolari: contattaci per discutere l'apertura di un account.",
      },
      {
        question: "Potete coordinare il trasporto per un'intera delegazione?",
        answer:
          "Sì, possiamo coordinare più veicoli e autisti per delegazioni, conferenze e roadshow.",
      },
      {
        question: "I vostri veicoli sono adatti a incontrare i clienti?",
        answer:
          "Sì, le nostre categorie di veicoli executive e di lusso sono perfettamente adatte a incontri con i clienti e viaggi di lavoro formali.",
      },
    ],
  },
  "event-transportation": {
    metaTitle: "Trasporto per Eventi in Italia",
    metaDescription:
      "Trasporto privato con autista per matrimoni, celebrazioni ed eventi speciali in Italia, con programmazione coordinata per ospiti e gruppi.",
    heroHeading: "Trasporto per Eventi",
    intro: [
      "Matrimoni e celebrazioni richiedono di spostare più ospiti rispettando orari precisi, e il nostro servizio di trasporto per eventi è pensato esattamente per questo tipo di coordinamento.",
      "Pianifichiamo gli orari di ritiro in anticipo e restiamo flessibili il giorno dell'evento, così tutto procede senza intoppi, che tu debba trasportare una coppia o un'intera lista di ospiti.",
    ],
    benefits: [
      "Programmazione coordinata per più ritiri",
      "Orari flessibili in linea con il programma dell'evento",
      "Veicoli confortevoli adatti alle celebrazioni",
      "Un unico punto di riferimento per la logistica del giorno dell'evento",
    ],
    whoFor: [
      "Matrimoni e ricevimenti",
      "Anniversari e celebrazioni importanti",
      "Feste private e ritrovi",
      "Organizzatori di eventi che coordinano il trasporto degli ospiti",
    ],
    included: [
      "Programma di ritiro pianificato in anticipo",
      "Coordinamento flessibile il giorno stesso",
      "Veicoli adatti a occasioni formali",
    ],
    faqs: [
      {
        question: "Potete coordinare i ritiri per una lista ospiti numerosa?",
        answer:
          "Sì, pianifichiamo un programma di ritiro in anticipo e coordiniamo più veicoli per un numero maggiore di ospiti.",
      },
      {
        question: "I veicoli possono essere decorati per un matrimonio?",
        answer:
          "Semplici richieste di decorazione possono spesso essere accolte: indica le tue preferenze al momento della prenotazione e ti faremo sapere cosa è possibile.",
      },
      {
        question: "Con quanto anticipo bisogna prenotare il trasporto per un evento?",
        answer:
          "Consigliamo di prenotare il prima possibile, in particolare durante l'alta stagione di matrimoni ed eventi, per assicurarti i veicoli che preferisci.",
      },
    ],
  },
  "cruise-port-transfers": {
    metaTitle: "Transfer per Porti Crociera in Italia",
    metaDescription:
      "Transfer privati con autista da e per i porti crociera italiani, tra cui Civitavecchia, Napoli, Livorno, Genova e Venezia, con orari flessibili.",
    heroHeading: "Transfer per Porti Crociera",
    intro: [
      "I giorni di imbarco e sbarco delle crociere seguono orari serrati, e un transfer privato elimina l'incertezza delle navette condivise e delle code per un taxi al porto.",
      "Colleghiamo i principali porti crociera italiani con le città vicine, gli aeroporti e gli hotel, calibrando i ritiri sugli orari della tua nave.",
    ],
    benefits: [
      "Orari calibrati sul programma di imbarco o sbarco della tua nave",
      "Collegamenti diretti verso aeroporti e hotel",
      "Assistenza bagagli al porto",
      "Nessuna navetta condivisa né fila di attesa",
    ],
    whoFor: [
      "Passeggeri di crociera in arrivo o in partenza",
      "Viaggiatori che abbinano una crociera a un soggiorno in città",
      "Gruppi e famiglie con bagagli",
    ],
    included: [
      "Coordinamento del ritiro o della consegna al porto",
      "Assistenza bagagli",
      "Trasporto diretto verso la tua destinazione successiva",
    ],
    faqs: [
      {
        question: "Come gestite i ritardi nello sbarco?",
        answer:
          "Inseriamo un margine di sicurezza nei ritiri al porto e monitoriamo i ritardi noti quando possibile, così il tuo autista si adatta di conseguenza.",
      },
      {
        question: "Potete portarci direttamente dal porto all'aeroporto?",
        answer:
          "Sì, i transfer diretti dal porto all'aeroporto sono tra i percorsi di crociera più richiesti dai nostri clienti.",
      },
      {
        question: "Offrite un'escursione dal porto alla città prima del reimbarco?",
        answer:
          "Sì, per i giorni di scalo possiamo organizzare una gita privata in giornata che ti riporta alla nave in tempo per la partenza.",
      },
    ],
  },
};
