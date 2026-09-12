import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import { serviceDetails_it } from "@/lib/i18n/data.it.services";
import { siteConfig } from "@/lib/siteConfig";
import InternationalTransfersPageTemplate from "@/components/templates/InternationalTransfersPageTemplate";

const service = getServiceBySlug("international-border-crossing-transfers")!;
const sd = serviceDetails_it["international-border-crossing-transfers"];

export const metadata: Metadata = {
  title: sd?.metaTitle ?? service.metaTitle,
  description: sd?.metaDescription ?? service.metaDescription,
  openGraph: {
    title: `${sd?.metaTitle ?? service.metaTitle} | ${siteConfig.name}`,
    description: sd?.metaDescription ?? service.metaDescription,
  },
  alternates: {
    canonical: "/it/international-border-crossing-transfers",
    languages: {
      en: "/international-border-crossing-transfers",
      it: "/it/international-border-crossing-transfers",
      "x-default": "/international-border-crossing-transfers",
    },
  },
};

export default function InternationalBorderCrossingTransfersPageIt() {
  return <InternationalTransfersPageTemplate service={service} locale="it" />;
}
