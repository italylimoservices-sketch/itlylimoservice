import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { airports, getAirportBySlug } from "@/lib/data/airports";
import AirportPageTemplate from "@/components/templates/AirportPageTemplate";

export function generateStaticParams() {
  return airports.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const airport = getAirportBySlug(slug);
  if (!airport) return {};
  return {
    title: airport.metaTitle,
    description: airport.metaDescription,
    alternates: { canonical: `/airport-transfers/${airport.slug}`, languages: { en: `/airport-transfers/${airport.slug}`, it: `/it/airport-transfers/${airport.slug}`, "x-default": `/airport-transfers/${airport.slug}` } },
  };
}

export default async function AirportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const airport = getAirportBySlug(slug);
  if (!airport) notFound();

  return <AirportPageTemplate airport={airport} />;
}
