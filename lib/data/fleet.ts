import { FleetCategory } from "@/lib/types";

export const fleet: FleetCategory[] = [
  {
    slug: "executive-sedan",
    name: "Executive Sedan",
    passengers: "Up to 3 passengers",
    luggage: "Up to 2 suitcases",
    description:
      "A comfortable, professional sedan suited to airport transfers, business travel and city transportation for individuals or small groups.",
    amenities: ["Air conditioning", "Bottled water", "Professional chauffeur", "Phone charging"],
    idealFor: "Airport transfers, business meetings and city travel",
  },
  {
    slug: "luxury-sedan",
    name: "Luxury Sedan",
    passengers: "Up to 3 passengers",
    luggage: "Up to 2 suitcases",
    description:
      "A premium sedan with additional comfort and presentation, well suited to executive travel, special occasions and clients who expect an elevated experience.",
    amenities: ["Premium interior", "Air conditioning", "Bottled water", "Professional chauffeur"],
    idealFor: "Executive travel, special occasions and VIP transfers",
  },
  {
    slug: "luxury-suv",
    name: "Luxury SUV",
    passengers: "Up to 5 passengers",
    luggage: "Up to 4 suitcases",
    description:
      "Extra space and a higher ride height make this a popular choice for families, small groups and travellers with additional luggage.",
    amenities: ["Extra luggage capacity", "Air conditioning", "Bottled water", "Professional chauffeur"],
    idealFor: "Families, small groups and additional luggage",
  },
  {
    slug: "executive-van",
    name: "Executive Van",
    passengers: "Up to 7 passengers",
    luggage: "Up to 6 suitcases",
    description:
      "A spacious, comfortable van for group transfers, family travel and small corporate delegations that need to travel together.",
    amenities: ["Group seating", "Extra luggage space", "Air conditioning", "Professional chauffeur"],
    idealFor: "Groups, families and corporate delegations",
  },
  {
    slug: "luxury-van",
    name: "Luxury Van",
    passengers: "Up to 7 passengers",
    luggage: "Up to 6 suitcases",
    description:
      "A premium group vehicle combining generous space with an elevated interior finish, suited to executive groups and special event transportation.",
    amenities: ["Premium interior", "Group seating", "Extra luggage space", "Professional chauffeur"],
    idealFor: "Executive groups, events and premium group travel",
  },
];

export function getFleetBySlug(slug: string) {
  return fleet.find((f) => f.slug === slug);
}
