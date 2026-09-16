import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { localePath, type Locale } from "@/lib/i18n/locales";

interface ShowcaseLink {
  label: string;
  href: string;
}

interface ShowcaseBlock {
  icon: string;
  pill: string;
  heading: string;
  description: string;
  links: ShowcaseLink[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

function getBlocks(locale: Locale): ShowcaseBlock[] {
  const it = locale === "it";

  return [
    {
      icon: "plane",
      pill: it ? "Transfer Aeroportuali" : "Airport Transfers",
      heading: it ? "Ad Attenderti in Sala Arrivi, Ogni Volta" : "Met at Arrivals, Every Time",
      description: it
        ? "Monitoraggio del volo in tempo reale e un autista che ti aspetta in sala arrivi con il tuo nome su un cartello, in ogni aeroporto principale che serviamo."
        : "Real-time flight monitoring and a chauffeur waiting in the arrivals hall with your name on a board, at every major airport we serve.",
      links: [
        { label: it ? "Roma Fiumicino" : "Rome Fiumicino", href: "/airport-transfers/rome-fiumicino" },
        { label: it ? "Milano Malpensa" : "Milan Malpensa", href: "/airport-transfers/milan-malpensa" },
        { label: it ? "Venezia Marco Polo" : "Venice Marco Polo", href: "/airport-transfers/venice-marco-polo" },
        { label: it ? "Milano Linate" : "Milan Linate", href: "/airport-transfers/milan-linate" },
      ],
      ctaLabel: it ? "Vedi Tutti i Transfer Aeroportuali" : "See All Airport Transfers",
      ctaHref: "/airport-transfers",
      image: "/images/fleet/executive-sedan.webp",
      imageAlt: it ? "Berlina executive pronta per il transfer aeroportuale" : "Executive sedan ready for an airport transfer",
    },
    {
      icon: "steering-wheel",
      pill: it ? "Autista Privato" : "Private Chauffeur",
      heading: it ? "Un Autista, Ovunque Tu Vada" : "One Driver, Wherever You Go",
      description: it
        ? "Un unico autista dedicato per tutto il tuo soggiorno, che si adatta ai tuoi programmi in una città o in più città, invece del contrario."
        : "A single dedicated chauffeur for your entire stay, adapting to your schedule across one city or several, rather than the other way around.",
      links: [
        { label: it ? "Autista a Roma" : "Chauffeur in Rome", href: "/destinations/rome" },
        { label: it ? "Autista a Milano" : "Chauffeur in Milan", href: "/destinations/milan" },
        { label: it ? "Autista a Firenze" : "Chauffeur in Florence", href: "/destinations/florence" },
        { label: it ? "Autista a Venezia" : "Chauffeur in Venice", href: "/destinations/venice" },
      ],
      ctaLabel: it ? "Scopri il Servizio Autista" : "See Chauffeur Service",
      ctaHref: "/chauffeur-service",
      image: "/images/destinations/rome.webp",
      imageAlt: it ? "Il Colosseo di Roma al tramonto" : "The Colosseum in Rome at dusk",
    },
    {
      icon: "sparkles",
      pill: it ? "Tour Privati" : "Private Tours",
      heading: it ? "Costruiti Su Ciò Che Vuoi Vedere" : "Built Around What You Want to See",
      description: it
        ? "Non un itinerario di gruppo a orari fissi, ma un autista privato e un ritmo che si adatta a ciò che vuoi vedere."
        : "Not a fixed group schedule, a private driver and a pace that adapts to what you want to see.",
      links: [
        { label: it ? "Tour del Vino in Toscana" : "Tuscany Wine Tours", href: "/destinations/tuscany" },
        { label: it ? "Tour della Costiera Amalfitana" : "Amalfi Coast Tours", href: "/destinations/amalfi-coast" },
        { label: it ? "Tour del Lago di Como" : "Lake Como Tours", href: "/destinations/lake-como" },
        { label: it ? "Tour delle Cinque Terre" : "Cinque Terre Tours", href: "/destinations/cinque-terre" },
      ],
      ctaLabel: it ? "Vedi Tutti i Tour Privati" : "See All Private Tours",
      ctaHref: "/italy-private-tours",
      image: "/images/destinations/lake-como.webp",
      imageAlt: it ? "Il Lago di Como, tappa dei tour privati" : "Lake Como, a private touring destination",
    },
  ];
}

export default function ServiceShowcase({ locale = "en" }: { locale?: Locale }) {
  const blocks = getBlocks(locale);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-luxe space-y-16 md:space-y-24">
        {blocks.map((block, i) => {
          const imageOnRight = i % 2 === 1;
          return (
            <div key={block.pill} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className={imageOnRight ? "lg:order-2" : ""}>
                <div className="relative max-w-[520px] mx-auto lg:mx-0">
                  <div
                    className={`absolute -z-10 hidden md:block h-full w-full rounded-md border border-gold/30 ${
                      imageOnRight ? "-bottom-4 -right-4" : "-bottom-4 -left-4"
                    }`}
                    aria-hidden
                  />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                    <Image
                      src={block.image}
                      alt={block.imageAlt}
                      fill
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 560px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className={imageOnRight ? "lg:order-1" : ""}>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.06] px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold">
                  <Icon name={block.icon} className="h-3.5 w-3.5" />
                  {block.pill}
                </span>
                <h2 className="mt-5 font-display text-3xl md:text-[2.15rem] leading-tight text-navy">
                  {block.heading}
                </h2>
                <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-stone">{block.description}</p>

                <div className="mt-7 grid grid-cols-2 gap-3 max-w-lg">
                  {block.links.map((link) => (
                    <Link
                      key={link.href}
                      href={localePath(locale, link.href)}
                      className="group flex items-center justify-between gap-2 rounded-sm border border-line px-4 py-3 text-sm font-medium text-navy hover:border-gold/50 transition-colors"
                    >
                      {link.label}
                      <Icon
                        name="chevron-right"
                        className="h-3.5 w-3.5 text-gold shrink-0 group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>
                  ))}
                </div>

                <Link
                  href={localePath(locale, block.ctaHref)}
                  className="mt-7 inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep hover:bg-gold-light transition-colors"
                >
                  {block.ctaLabel}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
