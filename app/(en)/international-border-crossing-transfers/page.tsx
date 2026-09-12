import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import { siteConfig } from "@/lib/siteConfig";
import InternationalTransfersPageTemplate from "@/components/templates/InternationalTransfersPageTemplate";

const service = getServiceBySlug("international-border-crossing-transfers")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: `${service.metaTitle} | ${siteConfig.name}`,
    description: service.metaDescription,
  },
  alternates: {
    canonical: "/international-border-crossing-transfers",
    languages: {
      en: "/international-border-crossing-transfers",
      it: "/it/international-border-crossing-transfers",
      "x-default": "/international-border-crossing-transfers",
    },
  },
};

export default function InternationalBorderCrossingTransfersPage() {
  return <InternationalTransfersPageTemplate service={service} />;
}
