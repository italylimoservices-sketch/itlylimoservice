import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import WhatsAppBubble from "@/components/layout/WhatsAppBubble";
import CookieNotice from "@/components/layout/CookieNotice";
import LanguageWelcomeModal from "@/components/layout/LanguageWelcomeModal";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header locale="en" />
      <main id="main-content" className="flex-1 pb-16 xl:pb-0">
        {children}
      </main>
      <Footer locale="en" />
      <StickyMobileCTA locale="en" />
      <WhatsAppBubble />
      <CookieNotice locale="en" />
      <LanguageWelcomeModal locale="en" />
    </>
  );
}
