import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import QuoteForm from "@/components/ui/QuoteForm";
import HowItWorks from "@/components/sections/HowItWorks";
import FaqSection from "@/components/sections/FaqSection";

const readyChecklist = [
  "Pickup address (or airport/terminal and flight number)",
  "Destination address",
  "Date and time of travel",
  "Number of passengers and luggage pieces",
  "Preferred vehicle type, if you have one",
  "One-way or round trip",
  "Any special requirements — child seat, extra stops, specific requests",
];

const afterSubmitting = [
  {
    icon: "email",
    title: "We Review Your Request",
    desc: "A member of our team checks availability for your route, date and vehicle preference.",
  },
  {
    icon: "check",
    title: "You Receive a Fixed Quote",
    desc: "We reply by email with a fixed price for your journey — usually within a few hours, sometimes sooner.",
  },
  {
    icon: "shield",
    title: "You Confirm the Booking",
    desc: "Once you confirm, your chauffeur and vehicle are reserved for your date and time.",
  },
  {
    icon: "plane",
    title: "You're Set for Your Journey",
    desc: "For airport pickups, we monitor your flight automatically — no need to update us if the schedule changes.",
  },
];

const bookingFaqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "Booking ahead gives you more vehicle choice, especially during busy periods. We also take short-notice requests where availability allows — submit the form and we'll confirm what's possible for your date.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "Our team checks availability and replies by email with a fixed quote for your journey. Nothing is booked or charged until you confirm.",
  },
  {
    question: "What if my flight is delayed?",
    answer:
      "For airport transfers, we monitor your flight in real time and adjust your chauffeur's pickup timing automatically — you don't need to contact us about a schedule change.",
  },
  {
    question: "How will I receive my booking confirmation?",
    answer:
      "By email, with your journey details confirmed. If anything looks wrong, reply to that email and we'll correct it before your travel date.",
  },
];

export const metadata: Metadata = {
  title: "Book Your Private Chauffeur",
  description: `Book a private chauffeur with ${siteConfig.name} — share your journey details and receive a fixed-price quote for transfers, tours and corporate travel.`,
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Book Now" }]} />

      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-invert mb-4">Book Now</p>
            <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-xl">
              Book Your Private Chauffeur
            </h1>
            <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
              Share your pickup, destination and travel dates below and our team will confirm
              availability and a fixed price — usually within a few hours.
            </p>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
              Prefer to talk it through first? Email us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-gold-light hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Before You Start" title="What to Have Ready" />
            <p className="mt-4 text-sm leading-relaxed text-stone">
              The form only takes a minute, but having these details ready means we can send an
              accurate quote on the first reply rather than going back and forth.
            </p>
            <ul className="mt-6 space-y-3">
              {readyChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Icon name="check" className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-stone leading-relaxed">
              Not sure about pricing yet? See what affects your quote on our{" "}
              <Link href="/pricing" className="text-gold hover:underline">
                pricing guide
              </Link>
              , or compare options on the{" "}
              <Link href="/fleet" className="text-gold hover:underline">
                Fleet page
              </Link>
              .
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="What Happens Next" title="After You Submit the Form" />
            <div className="mt-6 space-y-5">
              {afterSubmitting.map((step) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-gold shrink-0">
                    <Icon name={step.icon} className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-display text-base text-navy">{step.title}</p>
                    <p className="mt-1 text-sm text-stone leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      <FaqSection items={bookingFaqs} eyebrow="Booking" title="Booking Questions" />
    </>
  );
}
