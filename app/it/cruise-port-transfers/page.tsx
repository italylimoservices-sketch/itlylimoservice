import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import { serviceDetails_it } from "@/lib/i18n/data.it.services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import CruisePortsList from "@/components/sections/CruisePortsList";

const service = getServiceBySlug("cruise-port-transfers")!;
const sd = serviceDetails_it["cruise-port-transfers"];

export const metadata: Metadata = {
  title: sd?.metaTitle ?? service.metaTitle,
  description: sd?.metaDescription ?? service.metaDescription,
  alternates: { canonical: "/it/cruise-port-transfers", languages: { en: "/cruise-port-transfers", it: "/it/cruise-port-transfers" } },
};

export default function CruisePortTransfersPageIt() {
  return (
    <ServicePageTemplate
      service={service}
      extra={<CruisePortsList locale="it" />}
      destinationSlugs={["rome", "naples", "venice", "florence", "genoa", "sorrento"]}
      locale="it"
    />
  );
}
