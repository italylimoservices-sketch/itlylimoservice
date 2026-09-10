export const siteConfig = {
  name: "Italy Limo Service",
  tagline: "Private Chauffeurs, Italy-Wide",
  domain: "https://italylimoservice.com",
  // The address staff actually monitor for booking requests (matches
  // MAIL_TO_BOOKING in .env.example) — kept as the one prominent, real
  // contact channel until a phone/WhatsApp number is confirmed.
  email: "booking@italylimoservice.com",
  trustpilotUrl: "https://www.trustpilot.com/review/italylimoservice.com",
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
  description:
    "Italy Limo Service provides premium private chauffeur services across Italy, including airport transfers, city-to-city transportation, hourly chauffeur hire, private tours and corporate travel.",
};

export type SiteConfig = typeof siteConfig;
