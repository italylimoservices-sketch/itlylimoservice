import { FleetCategory } from "@/lib/types";

export const fleet: FleetCategory[] = [
  {
    slug: "executive-sedan",
    name: "Executive Sedan",
    metaTitle: "Executive Sedan Chauffeur Service",
    metaDescription:
      "Book an Executive Sedan with a professional chauffeur in Italy — ideal for airport transfers, business travel and city transportation for up to 3 passengers.",
    passengers: "Up to 3 passengers",
    luggage: "Up to 2 suitcases",
    description:
      "A comfortable, professional sedan suited to airport transfers, business travel and city transportation for individuals or small groups.",
    amenities: ["Air conditioning", "Bottled water", "Professional chauffeur", "Phone charging"],
    idealFor: "Airport transfers, business meetings and city travel",
    image: "/images/fleet/executive-sedan.webp",
  },
  {
    slug: "luxury-sedan",
    name: "Luxury Sedan",
    metaTitle: "Luxury Sedan Chauffeur Service",
    metaDescription:
      "Book a Luxury Sedan with a professional chauffeur in Italy — premium comfort and presentation for executive travel, special occasions and VIP transfers.",
    passengers: "Up to 3 passengers",
    luggage: "Up to 2 suitcases",
    description:
      "A premium sedan with additional comfort and presentation, well suited to executive travel, special occasions and clients who expect an elevated experience.",
    amenities: ["Premium interior", "Air conditioning", "Bottled water", "Professional chauffeur"],
    idealFor: "Executive travel, special occasions and VIP transfers",
    image: "/images/fleet/luxury-sedan.webp",
  },
  {
    slug: "luxury-suv",
    name: "Luxury SUV",
    metaTitle: "Luxury SUV Chauffeur Service",
    metaDescription:
      "Book a Luxury SUV with a professional chauffeur in Italy — extra space and comfort for families, small groups and travellers with additional luggage.",
    passengers: "Up to 5 passengers",
    luggage: "Up to 4 suitcases",
    description:
      "Extra space and a higher ride height make this a popular choice for families, small groups and travellers with additional luggage.",
    amenities: ["Extra luggage capacity", "Air conditioning", "Bottled water", "Professional chauffeur"],
    idealFor: "Families, small groups and additional luggage",
    image: "/images/fleet/luxury-suv.webp",
  },
  {
    slug: "executive-van",
    name: "Executive Van",
    metaTitle: "Executive Van Chauffeur Service",
    metaDescription:
      "Book an Executive Van with a professional chauffeur in Italy — spacious group transportation for family travel and small corporate delegations.",
    passengers: "Up to 7 passengers",
    luggage: "Up to 6 suitcases",
    description:
      "A spacious, comfortable van for group transfers, family travel and small corporate delegations that need to travel together.",
    amenities: ["Group seating", "Extra luggage space", "Air conditioning", "Professional chauffeur"],
    idealFor: "Groups, families and corporate delegations",
    image: "/images/fleet/executive-van.webp",
  },
  {
    slug: "luxury-van",
    name: "Luxury Van",
    metaTitle: "Luxury Van Chauffeur Service",
    metaDescription:
      "Book a Luxury Van with a professional chauffeur in Italy — premium group transportation for executive groups, events and special occasions.",
    passengers: "Up to 7 passengers",
    luggage: "Up to 6 suitcases",
    description:
      "A premium group vehicle combining generous space with an elevated interior finish, suited to executive groups and special event transportation.",
    amenities: ["Premium interior", "Group seating", "Extra luggage space", "Professional chauffeur"],
    idealFor: "Executive groups, events and premium group travel",
    image: "/images/fleet/luxury-van.webp",
  },
];

export function getFleetBySlug(slug: string) {
  return fleet.find((f) => f.slug === slug);
}
