import { Tour } from "@/lib/types";

export const tours: Tour[] = [
  {
    slug: "tuscany-wine-tours",
    name: "Tuscany Wine Tours",
    region: "Tuscany",
    description:
      "A private drive through Chianti and the Tuscan hills, with flexible stops at vineyards and hill towns chosen around your interests.",
    highlights: ["Chianti countryside", "Vineyard visits", "Hill town stops", "Flexible pacing"],
    destinationSlug: "tuscany",
  },
  {
    slug: "amalfi-coast-tours",
    name: "Amalfi Coast Tours",
    region: "Campania",
    description:
      "A private touring itinerary along the Amalfi Coast's cliffside roads, with time in Positano, Amalfi and Ravello.",
    highlights: ["Positano", "Amalfi town", "Ravello viewpoints", "Experienced coastal drivers"],
    destinationSlug: "amalfi-coast",
  },
  {
    slug: "rome-private-tours",
    name: "Rome Private Tours",
    region: "Lazio",
    description:
      "A flexible private itinerary through Rome's historic centre, Vatican area and beyond, paced around your interests rather than a fixed group schedule.",
    highlights: ["Historic centre", "Vatican area", "Flexible half or full day", "Comfortable waiting during stops"],
    destinationSlug: "rome",
  },
  {
    slug: "florence-private-tours",
    name: "Florence Private Tours",
    region: "Tuscany",
    description:
      "A private touring day through Florence and, if you choose, out into the surrounding Tuscan countryside for a broader regional itinerary.",
    highlights: ["Florence historic centre", "Optional Tuscan countryside extension", "Flexible timing"],
    destinationSlug: "florence",
  },
  {
    slug: "venice-private-tours",
    name: "Venice Private Tours",
    region: "Veneto",
    description:
      "A private touring itinerary combining the Veneto mainland with Venice, ideal for travellers who want to see the wider region alongside the city.",
    highlights: ["Veneto countryside", "Verona and Padua options", "Private mainland transportation"],
    destinationSlug: "venice",
  },
  {
    slug: "lake-como-tours",
    name: "Lake Como Tours",
    region: "Lombardy",
    description:
      "A full-day private itinerary around Lake Como's towns and villages, with time to explore Bellagio, Como and Varenna at your own pace.",
    highlights: ["Bellagio", "Como town", "Varenna", "Flexible lakeside stops"],
    destinationSlug: "lake-como",
  },
  {
    slug: "cinque-terre-tours",
    name: "Cinque Terre Tours",
    region: "Liguria",
    description:
      "A private day trip to the Cinque Terre's gateway towns, combined with time along the Ligurian coast.",
    highlights: ["Cinque Terre gateway towns", "Ligurian coastline", "Flexible departure points"],
    destinationSlug: "cinque-terre",
  },
  {
    slug: "sicily-tours",
    name: "Sicily Tours",
    region: "Sicily",
    description:
      "A multi-day private touring itinerary across Sicily, tailored to your own pace rather than a fixed group schedule.",
    highlights: ["Multi-day flexibility", "Coastal and inland routes", "Local driver knowledge"],
    destinationSlug: "sicily",
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug);
}
