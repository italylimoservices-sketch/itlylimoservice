import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${siteConfig.name} uses cookies and similar technologies on this website.`,
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Cookie Policy" }]} />
      <section className="py-14 md:py-20 bg-ivory">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl text-navy">Cookie Policy</h1>
          <p className="mt-4 text-sm text-stone">
            Last updated: [Date to be confirmed]. This describes the cookies and similar
            technologies actually used on this website today; it should be reviewed alongside our{" "}
            <a href="/privacy-policy" className="text-gold hover:underline">
              Privacy Policy
            </a>{" "}
            and kept in sync whenever a new script or tracking tool is added.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-soft">
            <div>
              <h2 className="font-display text-xl text-navy mb-2">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device when you visit a website. We
                also use similar technologies, such as local storage in your browser, to remember
                simple preferences. This policy covers both.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">2. Cookies We Use Directly</h2>
              <p>We store the following ourselves, using your browser’s local storage rather than a traditional cookie:</p>
              <ul className="mt-2 space-y-1.5 list-disc list-inside">
                <li>
                  <strong>Language preference</strong> — remembers whether you chose English or
                  Italian, so we don’t ask again on your next visit.
                </li>
                <li>
                  <strong>Cookie notice dismissed</strong> — remembers that you’ve seen and closed
                  the cookie banner.
                </li>
              </ul>
              <p className="mt-2">These are strictly necessary for the site to work as intended and can’t be switched off individually, though you can clear them at any time via your browser settings.</p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">3. Third-Party Analytics &amp; Security Cookies</h2>
              <p>
                We use a small number of third-party services that may set their own cookies or
                use similar tracking technologies to help us understand site traffic and protect
                the booking form from abuse:
              </p>
              <ul className="mt-3 space-y-3">
                <li>
                  <strong>Google Analytics</strong> — measures site traffic and how visitors use
                  the site. See{" "}
                  <a
                    href="https://policies.google.com/technologies/cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    Google’s cookie policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Microsoft Clarity</strong> — records anonymized usage patterns (such as
                  scrolling and clicks) to help us improve the site. See{" "}
                  <a
                    href="https://privacy.microsoft.com/privacystatement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    Microsoft’s privacy statement
                  </a>
                  .
                </li>
                <li>
                  <strong>Ahrefs Analytics</strong> — measures site traffic. See{" "}
                  <a
                    href="https://ahrefs.com/analytics/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    Ahrefs’ privacy policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Cloudflare Web Analytics</strong> — our hosting provider’s own
                  privacy-focused traffic measurement. See{" "}
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    Cloudflare’s privacy policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Google reCAPTCHA</strong> — protects the booking form from spam and
                  automated submissions by analyzing browser signals; this is a security measure
                  rather than an advertising or analytics cookie. See{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    Google’s privacy policy
                  </a>
                  .
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">4. Cookies We Don’t Use</h2>
              <p>
                We don’t use advertising or retargeting cookies, and we don’t sell or share data
                with data brokers.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">5. Managing Cookies</h2>
              <p>
                Most browsers let you view, delete and block cookies through their settings. Doing
                so may affect analytics accuracy but won’t prevent you from booking or requesting a
                quote. You can also opt out of Google Analytics specifically using Google’s{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  browser add-on
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">6. Changes to This Policy</h2>
              <p>
                If we add or remove a tracking or analytics tool, we’ll update this page to reflect
                what’s actually running on the site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">7. Contact</h2>
              <p>
                {siteConfig.name}
                <br />
                {siteConfig.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
