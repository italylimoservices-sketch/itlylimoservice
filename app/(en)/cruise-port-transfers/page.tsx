import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import CruisePortsList from "@/components/sections/CruisePortsList";

const service = getServiceBySlug("cruise-port-transfers")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/cruise-port-transfers", languages: { en: "/cruise-port-transfers", it: "/it/cruise-port-transfers", "x-default": "/cruise-port-transfers" } },
};

export default function CruisePortTransfersPage() {
  return (
    <ServicePageTemplate
      service={service}
      extra={<CruisePortsList />}
      destinationSlugs={["rome", "naples", "venice", "florence", "genoa", "sorrento"]}
    />
  );
}
