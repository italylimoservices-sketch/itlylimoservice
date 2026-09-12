// Italian translations for the airport detail-page fields (meta tags,
// summary, intro paragraphs and distance info). Keyed by the same slugs as
// lib/data/airports.ts. Name/city fields are translated separately in
// airportNames_it (lib/i18n/data.it.ts).

export const airportDetails_it: Record<
  string,
  {
    metaTitle: string;
    metaDescription: string;
    summary: string;
    intro: string[];
    distanceInfo: string;
  }
> = {
  "rome-fiumicino": {
    metaTitle: "Transfer Aeroporto Fiumicino (FCO)",
    metaDescription:
      "Transfer privati con autista dall'Aeroporto di Roma Fiumicino (FCO): monitoraggio del volo, accoglienza personalizzata e trasporto diretto verso Roma.",
    summary:
      "Transfer privati con accoglienza personalizzata tra l'Aeroporto di Fiumicino e Roma o altre destinazioni nell'Italia centrale.",
    intro: [
      "Fiumicino è il principale scalo internazionale d'Italia, e dopo un volo lungo l'ultima cosa che si desidera è una lunga camminata dall'arrivo al posteggio dei taxi. I nostri autisti monitorano il tuo volo in tempo reale, si adattano ad arrivi anticipati o in ritardo e ti aspettano nella sala arrivi con un cartello con il tuo nome.",
      "Da Fiumicino copriamo i transfer verso il centro di Roma, i proseguimenti verso Napoli, Firenze, la Toscana e la Costiera Amalfitana, e i collegamenti con il porto crociere di Civitavecchia.",
    ],
    distanceInfo: "Circa 35 km / 40-50 minuti dal centro di Roma, traffico permettendo.",
  },
  "rome-ciampino": {
    metaTitle: "Transfer Aeroporto Ciampino (CIA)",
    metaDescription:
      "Transfer privato con autista dall'Aeroporto di Roma Ciampino (CIA): monitoraggio del volo, accoglienza personalizzata e viaggio diretto verso Roma.",
    summary: "Transfer privati affidabili per i voli low-cost e charter in arrivo a Ciampino.",
    intro: [
      "Ciampino gestisce gran parte del traffico low-cost e charter diretto a Roma, e il suo terminal compatto permette un'uscita rapida per chi sa dove guardare. Il tuo autista ti aspetta appena fuori dall'area arrivi con il tuo nome ben visibile, pronto ad aiutarti con i bagagli non appena atterri.",
      "Da Ciampino ti portiamo direttamente nel centro di Roma oppure proseguiamo verso i Castelli Romani, Napoli e il sud Italia, senza bisogno di cambiare veicolo.",
    ],
    distanceInfo: "Circa 15 km / 25-35 minuti dal centro di Roma, traffico permettendo.",
  },
  "milan-malpensa": {
    metaTitle: "Transfer Aeroporto Malpensa (MXP)",
    metaDescription:
      "Servizio privato con autista dall'Aeroporto di Milano Malpensa (MXP) verso Milano e il Lago di Como, con monitoraggio del volo e accoglienza personalizzata.",
    summary:
      "Transfer executive tra l'Aeroporto di Malpensa e Milano, il Lago di Como e la regione Lombardia.",
    intro: [
      "Malpensa si trova piuttosto lontano dalla città, il che rende il transfer stesso parte del viaggio. Monitoriamo il tuo volo così il tuo autista è pronto in base all'orario di atterraggio reale, non a quello previsto, con un ombrello o una mano in più per i bagagli quando serve.",
      "I percorsi più richiesti da Malpensa includono il transfer diretto verso il centro di Milano, gite private al Lago di Como e al Lago Maggiore, e transfer di lavoro verso i distretti aziendali della Lombardia.",
    ],
    distanceInfo: "Circa 50 km / 45-60 minuti dal centro di Milano, traffico permettendo.",
  },
  "milan-linate": {
    metaTitle: "Transfer Aeroporto Linate (LIN)",
    metaDescription:
      "Transfer privati e rapidi con autista dall'Aeroporto di Milano Linate (LIN) verso il centro città, ideali per chi viaggia per lavoro con tempi ristretti.",
    summary: "Transfer rapidi e professionali per sfruttare la comodità di Linate, l'aeroporto cittadino.",
    intro: [
      "La vicinanza di Linate al centro di Milano lo rende l'aeroporto preferito da chi viaggia per lavoro, e i nostri autisti sono organizzati con la stessa efficienza. Un transfer breve e diretto ti permette di passare dall'atterraggio alla tua riunione con tempi morti ridotti al minimo.",
      "Organizziamo anche transfer di ritorno in giornata e itinerari con più tappe per i dirigenti che viaggiano da e per Linate con agende serrate.",
    ],
    distanceInfo: "Circa 8 km / 15-25 minuti dal centro di Milano, traffico permettendo.",
  },
  "venice-marco-polo": {
    metaTitle: "Transfer Aeroporto Marco Polo (VCE)",
    metaDescription:
      "Transfer privati con autista e collegamento via acqua dall'Aeroporto di Venezia Marco Polo (VCE) verso Venezia e la regione Veneto.",
    summary:
      "Transfer privati dall'Aeroporto Marco Polo verso il centro di Venezia, chiuso al traffico, o la terraferma veneta.",
    intro: [
      "Il centro storico di Venezia è interamente pedonale, quindi un transfer con autista dall'Aeroporto Marco Polo ti porta fin dove la città lo permette via strada, coordinandosi senza difficoltà con un taxi d'acqua o con le disposizioni del tuo hotel per l'ultimo tratto.",
      "Per chi prosegue il viaggio, organizziamo anche transfer diretti su strada dall'aeroporto verso Verona, Padova e altre destinazioni venete, senza dover mettere piede in città.",
    ],
    distanceInfo: "Circa 13 km fino al punto di collegamento con la terraferma (Piazzale Roma), 20-30 minuti su strada.",
  },
  florence: {
    metaTitle: "Transfer Aeroporto di Firenze (FLR)",
    metaDescription:
      "Transfer privati con autista dall'Aeroporto di Firenze (Peretola) verso il centro città, la Toscana e il Chianti.",
    summary: "Transfer privati diretti dall'Aeroporto di Firenze verso la città e l'intera Toscana.",
    intro: [
      "L'Aeroporto di Firenze si trova vicino alla città, il che lo rende un punto d'accesso comodo sia a Firenze sia alla campagna toscana circostante. Il tuo autista ti accoglie all'arrivo e può dirigersi direttamente verso il centro storico oppure proseguire per il Chianti, Siena o le colline toscane.",
      "Questo aeroporto è anche un punto di partenza molto richiesto per i tour enologici privati in Toscana e per gli itinerari di più giorni in campagna prenotati direttamente all'arrivo.",
    ],
    distanceInfo: "Circa 5 km / 15-20 minuti dal centro di Firenze.",
  },
  bologna: {
    metaTitle: "Transfer Aeroporto di Bologna (BLQ)",
    metaDescription:
      "Transfer privati con autista dall'Aeroporto di Bologna Guglielmo Marconi (BLQ) verso Bologna, l'Emilia-Romagna e le città collegate.",
    summary: "Transfer privati e confortevoli dall'Aeroporto di Bologna verso l'Emilia-Romagna.",
    intro: [
      "La posizione centrale di Bologna rende il suo aeroporto un hub pratico per raggiungere più regioni contemporaneamente. Offriamo transfer diretti verso la città, oltre a proseguimenti verso Firenze, Venezia e la campagna dell'Emilia-Romagna.",
      "Chi viaggia per lavoro utilizza spesso l'Aeroporto di Bologna come punto d'ingresso per fiere ed eventi aziendali in tutta la regione, e adattiamo di conseguenza gli orari di ritiro.",
    ],
    distanceInfo: "Circa 6 km / 15-20 minuti dal centro di Bologna.",
  },
  naples: {
    metaTitle: "Transfer Aeroporto di Napoli (NAP)",
    metaDescription:
      "Transfer privati con autista dall'Aeroporto di Napoli (NAP) verso Napoli, Sorrento e la Costiera Amalfitana, con accoglienza personalizzata.",
    summary:
      "Transfer privati dall'Aeroporto di Napoli verso la città, Sorrento e la Costiera Amalfitana.",
    intro: [
      "L'Aeroporto di Napoli è la porta d'accesso naturale alla costa più fotografata del sud Italia, e il tragitto verso sud lungo le strade costiere tortuose è molto più confortevole in un veicolo privato con un autista locale che conosce bene il percorso.",
      "Organizziamo transfer diretti verso Napoli, oltre a viaggi privati più lunghi verso Sorrento, Positano, Amalfi e Ravello per chi si dirige direttamente verso la costa.",
    ],
    distanceInfo: "Circa 7 km / 15-20 minuti dal centro di Napoli; 60-75 minuti per Sorrento.",
  },
  pisa: {
    metaTitle: "Transfer Aeroporto di Pisa (PSA)",
    metaDescription:
      "Transfer privati con autista dall'Aeroporto Internazionale di Pisa (PSA) verso Pisa, Firenze, la Toscana e le Cinque Terre.",
    summary: "Transfer privati dall'Aeroporto di Pisa verso la Toscana e lungo la costa ligure.",
    intro: [
      "L'Aeroporto di Pisa è un punto d'arrivo comodo per chi esplora sia la Toscana sia le Cinque Terre, e un transfer privato evita la necessità di gestire coincidenze in treno e bagagli tra più stazioni.",
      "Offriamo transfer diretti verso il centro storico di Pisa, proseguimenti verso Firenze e la Toscana, e viaggi privati più lunghi lungo la costa fino ai borghi delle Cinque Terre.",
    ],
    distanceInfo: "Circa 3 km / 10 minuti dal centro di Pisa; circa 80 minuti per Firenze.",
  },
  palermo: {
    metaTitle: "Transfer Aeroporto di Palermo (PMO)",
    metaDescription:
      "Transfer privati con autista dall'Aeroporto di Palermo Falcone-Borsellino (PMO) verso Palermo e le destinazioni della Sicilia.",
    summary: "Transfer privati e autisti per tour organizzati intorno al principale aeroporto di Palermo.",
    intro: [
      "La Sicilia premia chi la esplora su strada, e un autista privato dall'Aeroporto di Palermo è un modo comodo per iniziare. Il tuo autista ti accoglie all'arrivo e può dirigersi direttamente verso Palermo oppure partire alla scoperta della costa e della campagna dell'isola.",
      "Questo aeroporto è anche un punto di partenza comune per gli itinerari turistici privati di più giorni in Sicilia, organizzati con percorsi giornalieri flessibili anziché un programma di gruppo fisso.",
    ],
    distanceInfo: "Circa 32 km / 35-45 minuti dal centro di Palermo.",
  },
  catania: {
    metaTitle: "Transfer Aeroporto di Catania (CTA)",
    metaDescription:
      "Transfer privati con autista dall'Aeroporto di Catania Fontanarossa (CTA) verso Catania, Taormina e la Sicilia orientale.",
    summary: "Transfer privati dall'Aeroporto di Catania verso tutta la Sicilia orientale.",
    intro: [
      "L'Aeroporto di Catania serve la Sicilia orientale, inclusa Taormina e l'area dell'Etna, e un transfer privato elimina l'incertezza di autobus di collegamento e navette condivise dopo un volo.",
      "Offriamo transfer diretti verso Catania, oltre a viaggi privati verso Taormina e le cittadine costiere circostanti, con autisti che conoscono bene le strade della regione e le variazioni stagionali del traffico.",
    ],
    distanceInfo: "Circa 5 km / 10-15 minuti dal centro di Catania; circa 60 minuti per Taormina.",
  },
  bergamo: {
    metaTitle: "Transfer Aeroporto di Bergamo (BGY)",
    metaDescription:
      "Transfer privati con autista dall'Aeroporto di Bergamo Orio al Serio (BGY) verso Milano, il Lago di Como e la regione Lombardia.",
    summary: "Transfer privati dall'Aeroporto di Bergamo verso Milano e i laghi lombardi.",
    intro: [
      "Bergamo è un popolare scalo low-cost per raggiungere Milano e i laghi del nord, e la distanza tra l'aeroporto e la città rende un transfer privato prenotato in anticipo particolarmente conveniente rispetto alle alternative pubbliche.",
      "Colleghiamo l'Aeroporto di Bergamo con il centro di Milano, il Lago di Como e il Lago di Garda, con monitoraggio del volo così il tuo autista si adatta al tuo reale orario di arrivo.",
    ],
    distanceInfo: "Circa 45 km / 50-65 minuti dal centro di Milano.",
  },
};
