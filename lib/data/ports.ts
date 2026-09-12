export interface CruisePort {
  slug: string;
  name: string;
  region: string;
  description: string;
}

export const cruisePorts: CruisePort[] = [
  {
    slug: "civitavecchia",
    name: "Civitavecchia",
    region: "Rome's cruise port",
    description:
      "The main gateway for [Rome](/destinations/rome), roughly an hour's drive from the city centre. We arrange direct transfers to Rome hotels, [Fiumicino Airport](/airport-transfers/rome-fiumicino), or straight into a private Rome day tour before reboarding.",
  },
  {
    slug: "naples",
    name: "Naples",
    region: "Campania",
    description:
      "A central port for reaching Pompeii, [Sorrento](/destinations/sorrento) and the [Amalfi Coast](/destinations/amalfi-coast). Popular for port-day excursions that return you to the ship before departure.",
  },
  {
    slug: "livorno",
    name: "Livorno",
    region: "Tuscany's cruise port",
    description:
      "The gateway to [Florence](/destinations/florence), [Pisa](/destinations/pisa) and the Tuscan countryside. We connect the port directly with Florence hotels or arrange a private [Tuscany](/destinations/tuscany) day trip for port-day passengers.",
  },
  {
    slug: "genoa",
    name: "Genoa",
    region: "Liguria",
    description:
      "Convenient for [Portofino](/destinations/portofino), the [Cinque Terre](/destinations/cinque-terre) and onward transfers into [Milan](/destinations/milan). Suited to both embarkation transfers and single-day excursions along the Ligurian coast.",
  },
  {
    slug: "venice",
    name: "Venice",
    region: "Veneto",
    description:
      "Road transfers to [Venice](/destinations/venice)'s mainland connection point, with onward options to [Verona](/destinations/verona) and the Veneto region for travellers extending their trip beyond the ship.",
  },
  {
    slug: "palermo",
    name: "Palermo",
    region: "Sicily",
    description:
      "A base for exploring western [Sicily](/destinations/sicily). We arrange port transfers into the city as well as private day excursions for passengers with a longer stop.",
  },
  {
    slug: "bari",
    name: "Bari",
    region: "Puglia",
    description:
      "The starting point for Puglia's trulli towns and countryside. Suited to both direct transfers and private port-day trips into the region.",
  },
  {
    slug: "catania",
    name: "Catania",
    region: "Sicily",
    description:
      "Convenient for reaching Taormina and eastern [Sicily](/destinations/sicily), with experienced local drivers for the coastal and inland roads around Mount Etna.",
  },
  {
    slug: "la-spezia",
    name: "La Spezia",
    region: "Liguria",
    description:
      "The most practical port for visiting the [Cinque Terre](/destinations/cinque-terre), with transfers arranged to the villages' gateway towns and back to the ship in time for departure.",
  },
];
