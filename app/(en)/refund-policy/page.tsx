import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Cancellation and refund policy for private chauffeur bookings with ${siteConfig.name}.`,
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Refund Policy" }]} />
      <section className="py-14 md:py-20 bg-ivory">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl text-navy">Refund Policy</h1>
          <p className="mt-4 text-sm text-stone">
            Last updated: [Date to be confirmed]. This is a template policy and must be reviewed
            by a qualified professional before publication to ensure it reflects your actual
            payment, cancellation and refund terms. It should also stay consistent with our{" "}
            <a href="/terms-conditions" className="text-gold hover:underline">
              Terms &amp; Conditions
            </a>
            .
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-soft">
            <div>
              <h2 className="font-display text-xl text-navy mb-2">1. Overview</h2>
              <p>
                This policy explains when a cancellation qualifies for a refund, how much is
                refunded, and how the refund is issued. It applies to airport transfers,
                city-to-city transfers, hourly and full-day chauffeur bookings, private tours,
                and corporate bookings made through {siteConfig.name}.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">2. Booking Confirmation &amp; Payment</h2>
              <p>
                A booking is confirmed once you receive written confirmation from our team.
                [Confirm the exact payment process here — full payment at booking, a deposit, or
                payment after the journey — before launch.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">3. Cancelling Your Booking</h2>
              <p>
                [Insert the specific cancellation windows and the refund percentage that applies
                to each — for example, a full refund if cancelled more than 48 hours before
                pickup, a partial refund inside that window, and no refund for a late
                cancellation. These figures must be confirmed by the business before this page
                goes live, since they are a binding commitment to customers.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">4. Changes to Your Booking</h2>
              <p>
                Requests to change the date, time, pickup location, or vehicle for an existing
                booking are accommodated where possible, subject to availability. [Confirm
                whether changes made close to the pickup time are treated the same as a
                cancellation for refund purposes.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">5. No-Shows</h2>
              <p>
                If a passenger is not present at the agreed pickup point after the agreed waiting
                time and cannot be reached, the booking may be treated as a no-show. [Confirm
                whether no-shows are refundable and how long a chauffeur waits before a pickup is
                considered missed.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">6. Flight Delays &amp; Airport Transfers</h2>
              <p>
                For airport transfers, we monitor your flight and adjust pickup timing for
                reasonable delays at no extra charge. [Confirm the complimentary waiting period
                for airport pickups and any charges once that period is exceeded.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">7. Cancellations or Delays Caused by Us</h2>
              <p>
                If we are unable to fulfil a confirmed booking — for example due to a vehicle or
                driver shortfall — we will offer a comparable alternative where possible or a
                full refund of amounts paid for the affected journey.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">8. Circumstances Beyond Our Control</h2>
              <p>
                Neither party is liable for a cancellation or delay caused by circumstances
                beyond reasonable control, such as severe weather, road closures, strikes, or
                other events outside our operational control. [Confirm how refunds are handled in
                these cases.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">9. How Refunds Are Issued</h2>
              <p>
                Approved refunds are issued to the original payment method. [Confirm the expected
                processing time and whether any processing or transaction fees are deducted.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">10. Contact</h2>
              <p>
                To request a cancellation or ask about a refund, contact us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                  {siteConfig.email}
                </a>
                {" "}with your booking details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
