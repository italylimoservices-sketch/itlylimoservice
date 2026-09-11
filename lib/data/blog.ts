import { FaqItem } from "@/lib/types";

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  category: string;
  publishedAt: string; // ISO date
  faqs: FaqItem[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "first-time-visitors-guide-italy",
    title: "First-Time Visitor's Guide to Italy: What to Know Before You Go",
    metaTitle: "First-Time Visitor's Guide to Italy: What to Know Before You Go",
    metaDescription:
      "Planning your first trip to Italy? Discover what to know before you go, including destinations, transportation, ZTL zones, packing, food, safety, money, and travel tips.",
    summary:
      "A practical guide for first-time visitors covering Italy's destinations, transportation, food, packing, safety, money, ZTL zones, and itinerary planning.",
    category: "Italy Travel Planning & Essentials",
    publishedAt: "2026-09-11",
    faqs: [
      {
        question: "Is Italy good for first-time international travelers?",
        answer:
          "Yes. Italy offers a wide range of destinations and transportation options, making it accessible to many types of travelers. Planning ahead is especially useful if you're visiting during busy periods.",
      },
      {
        question: "How many days should I spend in Italy?",
        answer:
          "For a first visit, 7–10 days is a useful starting point. However, even three or four days can work well if you focus on one city.",
      },
      {
        question: "What are the best places to visit in Italy for the first time?",
        answer:
          "Rome, Florence, Venice, Milan, Tuscany, Lake Como, and the Amalfi Coast are among the most popular choices. The best combination depends on your interests and available time.",
      },
      {
        question: "Is Italy expensive to visit?",
        answer:
          "Travel costs vary significantly by city, season, accommodation, dining choices, and transportation. Major destinations and peak summer periods can be more expensive.",
      },
      {
        question: "Should I rent a car in Italy?",
        answer:
          "It depends on your itinerary. A rental car can be useful for countryside travel, but driving in historic city centers can be complicated because of ZTL zones, traffic, and parking limitations.",
      },
      {
        question: "Is public transportation good in Italy?",
        answer:
          "Yes. Trains and other public transportation options connect many major destinations. For city-to-city travel, high-speed trains can be particularly convenient.",
      },
      {
        question: "Do I need to know Italian?",
        answer:
          "No. You can travel through Italy without speaking fluent Italian, particularly in popular tourist destinations. However, learning a few basic Italian phrases can make everyday interactions easier.",
      },
      {
        question: "Can I use credit cards in Italy?",
        answer:
          "Cards are widely accepted in many Italian businesses, particularly in cities and tourist areas. Still, carrying some cash is sensible for smaller purchases and unexpected situations.",
      },
      {
        question: "Is Italy safe for tourists?",
        answer:
          "Millions of visitors travel to Italy each year. As with any major tourist destination, use normal precautions, particularly in crowded tourist areas and public transportation.",
      },
      {
        question: "What should I pack for Italy?",
        answer:
          "Comfortable walking shoes are one of the most important things to bring. Add weather-appropriate clothing, layers, travel documents, chargers, medication you normally need, and modest clothing for religious sites.",
      },
      {
        question: "Should I book transportation in advance?",
        answer:
          "For popular routes and busy travel periods, advance planning can be worthwhile. Airport transfers, private transportation, trains, and special tours are particularly useful to arrange ahead of time when your schedule is fixed.",
      },
      {
        question: "Can I visit multiple Italian cities in one trip?",
        answer:
          "Absolutely. Italy's major cities are connected by rail and road. Just make sure you don't pack too many destinations into a short trip.",
      },
    ],
  },
  {
    slug: "rome-travel-guide",
    title: "Rome Travel Guide: Best Things to Do, Places to Visit & Travel Tips",
    metaTitle: "Rome Travel Guide: Best Things to Do, Places to Visit & Travel Tips",
    metaDescription:
      "Plan your Rome trip with this practical travel guide covering the best attractions, neighborhoods, food, itineraries, transport, day trips and travel tips.",
    summary:
      "A practical Rome guide covering the best attractions, neighborhoods, food, itineraries, getting around, day trips, and tips for first-time visitors.",
    category: "City Guides",
    publishedAt: "2026-09-12",
    faqs: [
      {
        question: "What is Rome best known for?",
        answer:
          "Rome is best known for its ancient history, Roman monuments, Vatican City, Renaissance and Baroque architecture, art, fountains, piazzas, and traditional Italian food.",
      },
      {
        question: "How many days are enough for Rome?",
        answer:
          "Three days is a good starting point for a first visit. Two days can cover many major attractions, while four or five days allows you to explore more neighborhoods and take a day trip.",
      },
      {
        question: "What are the best places to visit in Rome?",
        answer:
          "Some of the most popular places include the Colosseum, Roman Forum, Pantheon, Trevi Fountain, Vatican Museums, St. Peter's Basilica, Piazza Navona, Villa Borghese, and Trastevere.",
      },
      {
        question: "What is the best time to visit Rome?",
        answer:
          "Rome can be visited year-round. Spring and autumn can offer comfortable sightseeing conditions, while summer is warmer and busier. Winter can be quieter.",
      },
      {
        question: "Is Rome easy to get around?",
        answer:
          "Yes, especially in the central areas. Walking is excellent for sightseeing, while buses, metro services, trains, taxis, and private transfers can help with longer distances.",
      },
      {
        question: "Should I book a Rome airport transfer?",
        answer:
          "If you have a lot of luggage, are traveling with family or a group, arrive late, have an early flight, or simply prefer a direct journey to your hotel, a private airport transfer can be a convenient choice.",
      },
      {
        question: "What food should I try in Rome?",
        answer: "Try traditional dishes such as carbonara, cacio e pepe, amatriciana, supplì, Roman-style pizza, and gelato.",
      },
      {
        question: "Is Rome suitable for a first trip to Italy?",
        answer:
          "Absolutely. Rome is one of the best places to begin exploring Italy because it combines history, culture, food, architecture, shopping, and easy access to other destinations.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
