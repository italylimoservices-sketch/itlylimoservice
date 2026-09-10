import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import CookieNotice from "@/components/layout/CookieNotice";
import LanguageWelcomeModal from "@/components/layout/LanguageWelcomeModal";
import SetHtmlLang from "@/components/layout/SetHtmlLang";

export default function ItalianLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SetHtmlLang lang="it" />
      <Header locale="it" />
      <main id="main-content" className="flex-1 pb-16 xl:pb-0">
        {children}
      </main>
      <Footer locale="it" />
      <StickyMobileCTA locale="it" />
      <CookieNotice locale="it" />
      <LanguageWelcomeModal locale="it" />
    </>
  );
}
