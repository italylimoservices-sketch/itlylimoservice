import { RouteInfo } from "@/lib/types";

function makeRoute(
  fromName: string,
  fromSlug: string,
  toName: string,
  toSlug: string,
  distance: string,
  duration: string,
  highlights: string[],
  intro: string[]
): RouteInfo {
  return {
    slug: `${fromSlug}-to-${toSlug}`,
    from: fromName,
    to: toName,
    fromSlug,
    toSlug,
    metaTitle: `Transfer ${fromName} to ${toName}`,
    metaDescription: `Book a private chauffeur transfer from ${fromName} to ${toName}. Direct, comfortable travel with a professional driver, door to door, no changes required.`,
    summary: `Private door-to-door chauffeur transfer between ${fromName} and ${toName}.`,
    intro,
    distanceApprox: distance,
    durationApprox: duration,
    highlights,
    relatedDestinations: [fromSlug, toSlug],
    image: `/images/routes/${fromSlug}-${toSlug}.jpg`,
  };
}

export const routes: RouteInfo[] = [
  makeRoute(
    "Rome",
    "rome",
    "Florence",
    "florence",
    "Approximately 280 km",
    "Around 3 hours",
    ["Direct motorway route with optional scenic stops", "Door-to-door service, no station changes", "Flexible departure times"],
    [
      "The drive from [Rome](/destinations/rome) to [Florence](/destinations/florence) is one of the most requested private transfers in Italy, connecting two of the country's most visited cities without the fixed schedule of a train.",
      "A private transfer is especially useful with luggage, an early flight connection, or when you'd like to break the journey with a stop in Orvieto or the [Tuscan countryside](/destinations/tuscany) along the way.",
    ]
  ),
  makeRoute(
    "Florence",
    "florence",
    "Rome",
    "rome",
    "Approximately 280 km",
    "Around 3 hours",
    ["Direct motorway route with optional scenic stops", "Ideal for onward flight or cruise connections", "Flexible departure times"],
    [
      "Travelling from [Florence](/destinations/florence) to [Rome](/destinations/rome) by private chauffeur is a comfortable alternative to the train, particularly when heading to [Fiumicino Airport](/airport-transfers/rome-fiumicino) or [Civitavecchia](/cruise-port-transfers) for a cruise departure.",
      "Your chauffeur times the journey around your flight or embarkation, building in a buffer for traffic rather than leaving you to manage a fixed train schedule.",
    ]
  ),
  makeRoute(
    "Florence",
    "florence",
    "Venice",
    "venice",
    "Approximately 260 km",
    "Around 3 hours",
    ["Direct route through northern [Tuscany](/destinations/tuscany) and the Veneto", "Comfortable alternative to train transfers with luggage", "Optional stop in [Bologna](/destinations/bologna)"],
    [
      "The transfer from [Florence](/destinations/florence) to [Venice](/destinations/venice) crosses some of Italy's most varied countryside, and a private chauffeur makes it easy to break the journey for a coffee stop or a detour through [Bologna](/destinations/bologna).",
      "This route is popular with travellers combining [Tuscany](/destinations/tuscany) and Venice on a single itinerary who prefer not to manage train changes with luggage.",
    ]
  ),
  makeRoute(
    "Venice",
    "venice",
    "Florence",
    "florence",
    "Approximately 260 km",
    "Around 3 hours",
    ["Direct route via the Veneto and northern [Tuscany](/destinations/tuscany)", "Comfortable for early departures", "Optional stop in [Bologna](/destinations/bologna)"],
    [
      "Heading south from [Venice](/destinations/venice) to [Florence](/destinations/florence), a private transfer avoids the need to first reach the mainland station before boarding a train, picking you up directly from your hotel instead.",
      "This is a popular choice for travellers continuing on to explore [Tuscany](/destinations/tuscany) after their time in Venice.",
    ]
  ),
  makeRoute(
    "Rome",
    "rome",
    "Naples",
    "naples",
    "Approximately 225 km",
    "Around 2.5 hours",
    ["Direct motorway connection", "Ideal continuation to Pompeii or the [Amalfi Coast](/destinations/amalfi-coast)", "Flexible luggage capacity"],
    [
      "The [Rome](/destinations/rome) to [Naples](/destinations/naples) transfer is a practical option for travellers heading south toward Pompeii, [Sorrento](/destinations/sorrento) or the [Amalfi Coast](/destinations/amalfi-coast), avoiding a station transfer in central Naples with luggage.",
      "We can also route this journey with a stop at Pompeii or Herculaneum along the way, turning the transfer into a private day of sightseeing. Families or groups travelling with extra luggage often choose a [Luxury SUV](/fleet/luxury-suv) for this route.",
    ]
  ),
  makeRoute(
    "Naples",
    "naples",
    "Rome",
    "rome",
    "Approximately 225 km",
    "Around 2.5 hours",
    ["Direct motorway connection", "Convenient for [Fiumicino](/airport-transfers/rome-fiumicino) flight connections", "Optional Pompeii stop"],
    [
      "Returning north from [Naples](/destinations/naples) to [Rome](/destinations/rome) by private chauffeur is a comfortable way to reach [Fiumicino Airport](/airport-transfers/rome-fiumicino) or central Rome without navigating Naples' train station with luggage.",
      "This route can also be arranged with a stop at Pompeii for travellers who want to see the site en route.",
    ]
  ),
  makeRoute(
    "Rome",
    "rome",
    "Sorrento",
    "sorrento",
    "Approximately 260 km",
    "Around 3 hours",
    ["Direct transfer avoiding multiple train changes", "Optional Pompeii stop en route", "Comfortable for families and groups"],
    [
      "[Sorrento](/destinations/sorrento) is not directly served by fast trains, which makes a private transfer from [Rome](/destinations/rome) a considerably more comfortable option than a multi-leg train and local connection.",
      "We regularly build in a stop at Pompeii for travellers who want to combine the transfer with a guided or self-guided visit to the ruins. For a family with luggage, a [Luxury SUV](/fleet/luxury-suv) offers more comfortable space than a standard sedan.",
    ]
  ),
  makeRoute(
    "Sorrento",
    "sorrento",
    "Rome",
    "rome",
    "Approximately 260 km",
    "Around 3 hours",
    ["Direct transfer to central Rome or [Fiumicino Airport](/airport-transfers/rome-fiumicino)", "Optional Pompeii stop en route", "Comfortable for families and groups"],
    [
      "Leaving [Sorrento](/destinations/sorrento) for [Rome](/destinations/rome), a private chauffeur removes the need to first reach [Naples](/destinations/naples) by local train before catching a connection north, picking you up directly from your hotel instead.",
      "This transfer is timed around your onward flight or hotel check-in, with an optional stop at Pompeii along the way.",
    ]
  ),
  makeRoute(
    "Rome",
    "rome",
    "Amalfi Coast",
    "amalfi-coast",
    "Approximately 280 km",
    "Around 3.5 hours",
    ["Experienced drivers on the coast's narrow roads", "Direct service to Positano, Amalfi or Ravello", "Optional Pompeii stop en route"],
    [
      "The drive from [Rome](/destinations/rome) to the [Amalfi Coast](/destinations/amalfi-coast) ends on some of Italy's narrowest and most scenic roads, where a driver with local experience makes a real difference to comfort and safety.",
      "We take you directly to your hotel in Positano, Amalfi or Ravello, with the option to stop at Pompeii along the way. For a family travelling with luggage, a [Luxury SUV](/fleet/luxury-suv) offers additional space; for larger groups, an [Executive Van](/fleet/executive-van) or [Luxury Van](/fleet/luxury-van) may be more suitable.",
    ]
  ),
  makeRoute(
    "Florence",
    "florence",
    "Pisa",
    "pisa",
    "Approximately 85 km",
    "Around 1 hour",
    ["Short, direct transfer ideal for flight connections", "Convenient for [Pisa Airport](/airport-transfers/pisa) departures", "Optional Leaning Tower stop"],
    [
      "The [Florence](/destinations/florence) to [Pisa](/destinations/pisa) transfer is most often booked around a flight at [Pisa Airport](/airport-transfers/pisa), and a private chauffeur ensures you arrive with a comfortable buffer rather than relying on train timetables.",
      "Many travellers also use this route to fit in a stop at the Leaning Tower and Piazza dei Miracoli en route to the airport.",
    ]
  ),
  makeRoute(
    "Pisa",
    "pisa",
    "Florence",
    "florence",
    "Approximately 85 km",
    "Around 1 hour",
    ["Short, direct transfer from the airport", "Ideal first leg of a [Tuscany](/destinations/tuscany) itinerary", "Luggage assistance included"],
    [
      "Arriving into [Pisa Airport](/airport-transfers/pisa) and heading to [Florence](/destinations/florence), a private transfer is a fast and simple way to begin a [Tuscany](/destinations/tuscany) itinerary without navigating train stations after a flight.",
      "Your chauffeur can also route via the Leaning Tower for a brief stop if your schedule allows.",
    ]
  ),
  makeRoute(
    "Milan",
    "milan",
    "Lake Como",
    "lake-como",
    "Approximately 50 km",
    "Around 1 hour",
    ["Direct transfer or full-day touring option", "Access to Bellagio, Como and Varenna", "Flexible return timing"],
    [
      "[Lake Como](/destinations/lake-como) is an easy private day trip from [Milan](/destinations/milan), and this route is available either as a simple point-to-point transfer or as a full-day touring itinerary around the lake's towns.",
      "We can build in stops at Bellagio, Varenna and Como town depending on how much time you'd like to spend at each. Small groups touring for the day often choose a [Luxury SUV](/fleet/luxury-suv) for the extra comfort.",
    ]
  ),
  makeRoute(
    "Milan",
    "milan",
    "Venice",
    "venice",
    "Approximately 270 km",
    "Around 3 hours",
    ["Direct motorway connection across northern Italy", "Comfortable alternative to train travel with luggage", "Optional stop in [Verona](/destinations/verona)"],
    [
      "The [Milan](/destinations/milan) to [Venice](/destinations/venice) transfer crosses Lombardy and the Veneto directly, and is a popular choice for travellers moving between Italy's business capital and its most iconic canal city.",
      "This journey can include a stop in [Verona](/destinations/verona) for travellers who want to see the city en route.",
    ]
  ),
  makeRoute(
    "Venice",
    "venice",
    "Milan",
    "milan",
    "Approximately 270 km",
    "Around 3 hours",
    ["Direct motorway connection", "Ideal for [Malpensa](/airport-transfers/milan-malpensa) or [Linate](/airport-transfers/milan-linate) flight connections", "Optional stop in [Verona](/destinations/verona)"],
    [
      "Heading west from [Venice](/destinations/venice) to [Milan](/destinations/milan), a private transfer is timed around your onward flight from [Malpensa](/airport-transfers/milan-malpensa) or [Linate](/airport-transfers/milan-linate), with the flexibility to stop in [Verona](/destinations/verona) along the way.",
      "This route is popular with business travellers moving between Italy's two major commercial hubs.",
    ]
  ),
  makeRoute(
    "Florence",
    "florence",
    "Siena",
    "siena",
    "Approximately 70 km",
    "Around 1 hour",
    ["Short transfer through the Chianti countryside", "Easily extended into a wine region day trip", "Flexible departure and return"],
    [
      "The drive from [Florence](/destinations/florence) to [Siena](/destinations/siena) passes directly through Chianti, and many travellers extend this short transfer into a half-day or full-day countryside itinerary with vineyard stops.",
      "This route works equally well as a simple point-to-point transfer for travellers with limited time. A group travelling together for the day may prefer a [Luxury SUV](/fleet/luxury-suv) or [Executive Van](/fleet/executive-van), depending on numbers.",
    ]
  ),
];

export function getRouteBySlug(slug: string) {
  return routes.find((r) => r.slug === slug);
}
