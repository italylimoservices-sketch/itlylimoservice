// Italian translations for the short/summary fields used across the homepage
// and section teasers. Keyed by the same slugs as the English data files in
// lib/data/, so lookups stay a simple slug match regardless of locale.

// distanceApprox/durationApprox in lib/data/routes.ts always follow the
// pattern "Approximately N km" / "Around N hour(s)" — translate those
// generically rather than duplicating every value per route.
export function distance_it(s: string): string {
  return s.replace(/^Approximately/, "Circa");
}

export function duration_it(s: string): string {
  const oneHour = s.match(/^Around\s+1\s+hour$/);
  if (oneHour) return "Circa 1 ora";
  const hours = s.match(/^Around\s+([\d.]+)\s+hours$/);
  if (hours) return `Circa ${hours[1].replace(".", ",")} ore`;
  return s;
}

export const destinationNames_it: Record<string, { name: string; region: string }> = {
  rome: { name: "Roma", region: "Lazio" },
  milan: { name: "Milano", region: "Lombardia" },
  florence: { name: "Firenze", region: "Toscana" },
  venice: { name: "Venezia", region: "Veneto" },
  naples: { name: "Napoli", region: "Campania" },
  bologna: { name: "Bologna", region: "Emilia-Romagna" },
  turin: { name: "Torino", region: "Piemonte" },
  verona: { name: "Verona", region: "Veneto" },
  "lake-como": { name: "Lago di Como", region: "Lombardia" },
  "amalfi-coast": { name: "Costiera Amalfitana", region: "Campania" },
  sorrento: { name: "Sorrento", region: "Campania" },
  tuscany: { name: "Toscana", region: "Toscana" },
  "cinque-terre": { name: "Cinque Terre", region: "Liguria" },
  portofino: { name: "Portofino", region: "Liguria" },
  siena: { name: "Siena", region: "Toscana" },
  pisa: { name: "Pisa", region: "Toscana" },
  sicily: { name: "Sicilia", region: "Sicilia" },
  sardinia: { name: "Sardegna", region: "Sardegna" },
  bari: { name: "Bari", region: "Puglia" },
  genoa: { name: "Genova", region: "Liguria" },
};

export const airportNames_it: Record<string, { name: string; city: string }> = {
  "rome-fiumicino": { name: "Aeroporto di Roma Fiumicino", city: "Roma" },
  "rome-ciampino": { name: "Aeroporto di Roma Ciampino", city: "Roma" },
  "milan-malpensa": { name: "Aeroporto di Milano Malpensa", city: "Milano" },
  "milan-linate": { name: "Aeroporto di Milano Linate", city: "Milano" },
  "venice-marco-polo": { name: "Aeroporto di Venezia Marco Polo", city: "Venezia" },
  florence: { name: "Aeroporto di Firenze", city: "Firenze" },
  bologna: { name: "Aeroporto di Bologna", city: "Bologna" },
  naples: { name: "Aeroporto di Napoli", city: "Napoli" },
  pisa: { name: "Aeroporto di Pisa", city: "Pisa" },
  palermo: { name: "Aeroporto di Palermo", city: "Palermo" },
  catania: { name: "Aeroporto di Catania", city: "Catania" },
  bergamo: { name: "Aeroporto di Bergamo", city: "Bergamo" },
};

export const cityNames_it: Record<string, string> = {
  Rome: "Roma",
  Milan: "Milano",
  Florence: "Firenze",
  Venice: "Venezia",
  Naples: "Napoli",
  Sorrento: "Sorrento",
  Pisa: "Pisa",
  "Lake Como": "Lago di Como",
  "Amalfi Coast": "Costiera Amalfitana",
  Siena: "Siena",
};

export const services_it: Record<string, { name: string; shortDescription: string }> = {
  "airport-transfers": {
    name: "Transfer Aeroportuali",
    shortDescription: "Transfer aeroportuali con accoglienza personalizzata e monitoraggio dei voli in tutta Italia.",
  },
  "chauffeur-service": {
    name: "Servizio Auto con Autista",
    shortDescription: "Autisti privati dedicati per trasporti in città, gite giornaliere e itinerari personalizzati.",
  },
  "city-to-city-transfers": {
    name: "Transfer tra Città",
    shortDescription: "Transfer privati diretti e confortevoli tra le principali città italiane.",
  },
  "hourly-chauffeur": {
    name: "Autista a Ore",
    shortDescription: "Noleggio auto con autista a ore per riunioni, shopping o eventi, con flessibilità totale.",
  },
  "italy-private-tours": {
    name: "Tour Privati in Italia",
    shortDescription: "Itinerari di viaggio personalizzati e flessibili nelle regioni italiane con autista privato.",
  },
  "corporate-chauffeur": {
    name: "Servizio Auto Aziendale",
    shortDescription: "Trasporto affidabile e professionale per viaggi di lavoro ed eventi aziendali.",
  },
  "event-transportation": {
    name: "Trasporto per Eventi",
    shortDescription: "Trasporto privato coordinato per matrimoni, celebrazioni ed eventi speciali.",
  },
  "cruise-port-transfers": {
    name: "Transfer per Porti Crociera",
    shortDescription: "Transfer privati tra i porti crociera italiani, hotel, aeroporti e città.",
  },
  "international-border-crossing-transfers": {
    name: "Trasferimenti Internazionali",
    shortDescription: "Transfer privati con autista tra l'Italia e Svizzera, Francia, Austria e Slovenia.",
  },
};

export const routes_it: { fromEn: string; toEn: string; from: string; to: string; durationApprox: string }[] = [
  { fromEn: "Rome", toEn: "Florence", from: "Roma", to: "Firenze", durationApprox: "Circa 3 ore" },
  { fromEn: "Florence", toEn: "Rome", from: "Firenze", to: "Roma", durationApprox: "Circa 3 ore" },
  { fromEn: "Florence", toEn: "Venice", from: "Firenze", to: "Venezia", durationApprox: "Circa 3 ore" },
  { fromEn: "Venice", toEn: "Florence", from: "Venezia", to: "Firenze", durationApprox: "Circa 3 ore" },
  { fromEn: "Rome", toEn: "Naples", from: "Roma", to: "Napoli", durationApprox: "Circa 2,5 ore" },
  { fromEn: "Naples", toEn: "Rome", from: "Napoli", to: "Roma", durationApprox: "Circa 2,5 ore" },
  { fromEn: "Rome", toEn: "Sorrento", from: "Roma", to: "Sorrento", durationApprox: "Circa 3 ore" },
  { fromEn: "Sorrento", toEn: "Rome", from: "Sorrento", to: "Roma", durationApprox: "Circa 3 ore" },
  { fromEn: "Rome", toEn: "Amalfi Coast", from: "Roma", to: "Costiera Amalfitana", durationApprox: "Circa 3,5 ore" },
  { fromEn: "Florence", toEn: "Pisa", from: "Firenze", to: "Pisa", durationApprox: "Circa 1 ora" },
  { fromEn: "Pisa", toEn: "Florence", from: "Pisa", to: "Firenze", durationApprox: "Circa 1 ora" },
  { fromEn: "Milan", toEn: "Lake Como", from: "Milano", to: "Lago di Como", durationApprox: "Circa 1 ora" },
  { fromEn: "Milan", toEn: "Venice", from: "Milano", to: "Venezia", durationApprox: "Circa 3 ore" },
  { fromEn: "Venice", toEn: "Milan", from: "Venezia", to: "Milano", durationApprox: "Circa 3 ore" },
  { fromEn: "Florence", toEn: "Siena", from: "Firenze", to: "Siena", durationApprox: "Circa 1 ora" },
];

export const fleet_it: Record<
  string,
  { name: string; passengers: string; luggage: string; idealFor: string; description: string; amenities: string[] }
> = {
  "executive-sedan": {
    name: "Berlina Executive",
    passengers: "Fino a 3 passeggeri",
    luggage: "Fino a 2 valigie",
    idealFor: "Transfer aeroportuali, riunioni di lavoro e spostamenti in città",
    description:
      "Una berlina confortevole e professionale, adatta a transfer aeroportuali, viaggi di lavoro e spostamenti in città per singoli passeggeri o piccoli gruppi.",
    amenities: ["Aria condizionata", "Acqua in bottiglia", "Autista professionista", "Ricarica per telefono"],
  },
  "luxury-sedan": {
    name: "Berlina di Lusso",
    passengers: "Fino a 3 passeggeri",
    luggage: "Fino a 2 valigie",
    idealFor: "Viaggi executive, occasioni speciali e transfer VIP",
    description:
      "Una berlina premium con comfort e presentazione superiori, ideale per viaggi executive, occasioni speciali e un'esperienza di livello superiore.",
    amenities: ["Interni premium", "Aria condizionata", "Acqua in bottiglia", "Autista professionista"],
  },
  "luxury-suv": {
    name: "SUV di Lusso",
    passengers: "Fino a 5 passeggeri",
    luggage: "Fino a 4 valigie",
    idealFor: "Famiglie, piccoli gruppi e bagagli aggiuntivi",
    description:
      "Spazio extra e un'altezza da terra maggiore lo rendono una scelta apprezzata da famiglie, piccoli gruppi e viaggiatori con bagagli aggiuntivi.",
    amenities: ["Capacità bagagli extra", "Aria condizionata", "Acqua in bottiglia", "Autista professionista"],
  },
  "executive-van": {
    name: "Van Executive",
    passengers: "Fino a 7 passeggeri",
    luggage: "Fino a 6 valigie",
    idealFor: "Gruppi, famiglie e delegazioni aziendali",
    description:
      "Un van spazioso e confortevole per transfer di gruppo, viaggi in famiglia e piccole delegazioni aziendali che devono spostarsi insieme.",
    amenities: ["Posti a sedere di gruppo", "Spazio bagagli extra", "Aria condizionata", "Autista professionista"],
  },
  "luxury-van": {
    name: "Van di Lusso",
    passengers: "Fino a 7 passeggeri",
    luggage: "Fino a 6 valigie",
    idealFor: "Gruppi executive, eventi e viaggi di gruppo premium",
    description:
      "Un veicolo di gruppo premium che unisce ampio spazio a finiture interne curate, adatto a gruppi executive e trasporti per eventi speciali.",
    amenities: ["Interni premium", "Posti a sedere di gruppo", "Spazio bagagli extra", "Autista professionista"],
  },
};

export const tours_it: Record<string, { name: string; region: string; description: string; highlights: string[] }> = {
  "tuscany-wine-tours": {
    name: "Tour Enologici in Toscana",
    region: "Toscana",
    description: "Un percorso privato nel Chianti e sulle colline toscane, con soste flessibili tra vigneti e borghi collinari.",
    highlights: ["Campagna del Chianti", "Visite alle cantine", "Soste nei borghi collinari", "Ritmo flessibile"],
  },
  "amalfi-coast-tours": {
    name: "Tour della Costiera Amalfitana",
    region: "Campania",
    description: "Un itinerario privato lungo le strade panoramiche della Costiera Amalfitana, con tappe a Positano, Amalfi e Ravello.",
    highlights: ["Positano", "Il borgo di Amalfi", "Punti panoramici di Ravello", "Autisti esperti delle strade costiere"],
  },
  "rome-private-tours": {
    name: "Tour Privati di Roma",
    region: "Lazio",
    description: "Un itinerario privato flessibile nel centro storico di Roma, nell'area vaticana e oltre, al ritmo che preferisci.",
    highlights: ["Centro storico", "Area vaticana", "Mezza giornata o giornata intera flessibile", "Attesa comoda durante le soste"],
  },
  "florence-private-tours": {
    name: "Tour Privati di Firenze",
    region: "Toscana",
    description: "Una giornata privata a Firenze e, se lo desideri, nella campagna toscana circostante per un itinerario più ampio.",
    highlights: ["Centro storico di Firenze", "Estensione opzionale nella campagna toscana", "Orari flessibili"],
  },
  "venice-private-tours": {
    name: "Tour Privati di Venezia",
    region: "Veneto",
    description: "Un itinerario privato che unisce la terraferma veneta a Venezia, ideale per chi vuole scoprire anche i dintorni.",
    highlights: ["Campagna veneta", "Opzioni per Verona e Padova", "Trasporto privato sulla terraferma"],
  },
  "lake-como-tours": {
    name: "Tour del Lago di Como",
    region: "Lombardia",
    description: "Una giornata privata intorno al Lago di Como, con tempo per esplorare Bellagio, Como e Varenna con calma.",
    highlights: ["Bellagio", "Il centro di Como", "Varenna", "Soste flessibili sul lago"],
  },
  "cinque-terre-tours": {
    name: "Tour delle Cinque Terre",
    region: "Liguria",
    description: "Una gita privata ai borghi delle Cinque Terre, abbinata a un percorso lungo la costa ligure.",
    highlights: ["Borghi di accesso alle Cinque Terre", "Costa ligure", "Punti di partenza flessibili"],
  },
  "sicily-tours": {
    name: "Tour della Sicilia",
    region: "Sicilia",
    description: "Un itinerario privato di più giorni in Sicilia, adattato al tuo ritmo anziché a un programma di gruppo fisso.",
    highlights: ["Flessibilità su più giorni", "Percorsi costieri e nell'entroterra", "Conoscenza degli autisti locali"],
  },
};

export const ports_it: Record<string, { name: string; region: string; description: string }> = {
  civitavecchia: { name: "Civitavecchia", region: "Porto crociera di Roma", description: "Il principale scalo per Roma, a circa un'ora dal centro città. Organizziamo transfer diretti verso gli hotel di Roma, l'aeroporto di Fiumicino o un tour privato prima del reimbarco." },
  naples: { name: "Napoli", region: "Campania", description: "Un porto centrale per raggiungere Pompei, Sorrento e la Costiera Amalfitana. Ideale per escursioni in giornata con rientro in tempo per la partenza." },
  livorno: { name: "Livorno", region: "Porto crociera della Toscana", description: "La porta d'accesso a Firenze, Pisa e la campagna toscana. Colleghiamo il porto direttamente agli hotel di Firenze o organizziamo un tour privato in Toscana." },
  genoa: { name: "Genova", region: "Liguria", description: "Comoda per Portofino, le Cinque Terre e i collegamenti verso Milano. Adatta sia ai transfer di imbarco sia alle escursioni di un giorno lungo la costa ligure." },
  venice: { name: "Venezia", region: "Veneto", description: "Transfer su strada fino al punto di collegamento con la terraferma veneziana, con possibilità di proseguire verso Verona e il Veneto." },
  palermo: { name: "Palermo", region: "Sicilia", description: "Una base per esplorare la Sicilia occidentale. Organizziamo transfer verso la città ed escursioni private per chi ha più tempo a disposizione." },
  bari: { name: "Bari", region: "Puglia", description: "Il punto di partenza per i trulli e la campagna pugliese. Adatta sia ai transfer diretti sia alle escursioni private nella regione." },
  catania: { name: "Catania", region: "Sicilia", description: "Comoda per raggiungere Taormina e la Sicilia orientale, con autisti locali esperti delle strade costiere e collinari intorno all'Etna." },
  "la-spezia": { name: "La Spezia", region: "Liguria", description: "Il porto più pratico per visitare le Cinque Terre, con transfer organizzati verso i borghi di accesso e rientro in tempo per la partenza." },
};

export const generalFaqs_it: { question: string; answer: string }[] = [
  {
    question: "Quanto costa un autista privato in Italia?",
    answer: "Il prezzo dipende dal percorso, dalla durata del viaggio, dal tipo di veicolo e da eventuali tempi di attesa. Offriamo un preventivo fisso e trasparente prima della prenotazione, così non ci sono sorprese il giorno del viaggio — richiedi un preventivo per il prezzo specifico del tuo percorso.",
  },
  {
    question: "Come prenoto un autista in Italia?",
    answer: "Puoi richiedere un preventivo tramite il nostro modulo di prenotazione indicando luogo di ritiro, destinazione, data e numero di passeggeri. Confermeremo disponibilità e prezzo, e la prenotazione sarà definitiva una volta confermata.",
  },
  {
    question: "Offrite transfer aeroportuali in Italia?",
    answer: "Sì. Offriamo transfer aeroportuali privati con accoglienza personalizzata nei principali aeroporti italiani, tra cui Roma, Milano, Venezia, Firenze, Napoli, Bologna, Pisa, Palermo, Catania e Bergamo, con monitoraggio del volo incluso.",
  },
  {
    question: "Posso prenotare un autista privato per più giorni?",
    answer: "Sì. Organizziamo prenotazioni di più giorni per itinerari turistici, viaggi di lavoro e soggiorni prolungati, con un autista e un veicolo dedicati per tutta la durata.",
  },
  {
    question: "Posso viaggiare tra le città italiane con un autista privato?",
    answer: "Sì. Offriamo transfer diretti porta a porta tra le principali destinazioni italiane, oltre a percorsi personalizzati su richiesta.",
  },
  {
    question: "Gli autisti parlano inglese?",
    answer: "Sì, i nostri autisti parlano inglese e sono esperti nell'assistere viaggiatori internazionali, offrendo indicazioni locali utili quando serve.",
  },
  {
    question: "Posso prenotare un autista per un tour privato in Italia?",
    answer: "Sì. Organizziamo itinerari turistici privati e flessibili nelle regioni italiane, tra cui Toscana, Costiera Amalfitana e Lago di Como, al ritmo che preferisci anziché seguire un programma di gruppo fisso.",
  },
  {
    question: "Offrite transfer per i porti delle crociere?",
    answer: "Sì. Offriamo transfer privati da e per i principali porti crociera italiani, tra cui Civitavecchia, Napoli, Livorno, Genova, Venezia, Palermo, Bari, Catania e La Spezia.",
  },
  {
    question: "Posso richiedere un seggiolino per bambini?",
    answer: "I seggiolini per bambini possono essere richiesti al momento della prenotazione. Indica l'età del bambino nel campo delle richieste speciali così possiamo confermare la disponibilità e predisporre il seggiolino adatto.",
  },
  {
    question: "Cosa succede se il mio volo è in ritardo?",
    answer: "Monitoriamo il tuo volo in tempo reale, quindi il tuo autista adatta automaticamente l'orario di ritiro in caso di ritardi o arrivi anticipati — non è necessario avvisarci di eventuali cambi di orario.",
  },
];
