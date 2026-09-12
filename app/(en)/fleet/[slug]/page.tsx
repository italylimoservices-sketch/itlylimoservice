import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fleet, getFleetBySlug } from "@/lib/data/fleet";
import FleetPageTemplate from "@/components/templates/FleetPageTemplate";

export function generateStaticParams() {
  return fleet.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getFleetBySlug(slug);
  if (!vehicle) return {};
  return {
    title: vehicle.metaTitle,
    description: vehicle.metaDescription,
    alternates: { canonical: `/fleet/${vehicle.slug}`, languages: { en: `/fleet/${vehicle.slug}`, it: `/it/fleet/${vehicle.slug}`, "x-default": `/fleet/${vehicle.slug}` } },
  };
}

export default async function FleetVehiclePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getFleetBySlug(slug);
  if (!vehicle) notFound();

  return <FleetPageTemplate vehicle={vehicle} />;
}
