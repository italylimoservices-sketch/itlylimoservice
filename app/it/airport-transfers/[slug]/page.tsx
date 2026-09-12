import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { airports, getAirportBySlug } from "@/lib/data/airports";
import { airportDetails_it } from "@/lib/i18n/data.it.airports";
import AirportPageTemplate from "@/components/templates/AirportPageTemplate";
import { translatedPaths } from "@/lib/i18n/locales";

export function generateStaticParams() {
  return airports.filter((a) => translatedPaths.has(`/airport-transfers/${a.slug}`)).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const airport = getAirportBySlug(slug);
  if (!airport) return {};
  const a = airportDetails_it[slug];
  return {
    title: a?.metaTitle ?? airport.metaTitle,
    description: a?.metaDescription ?? airport.metaDescription,
    alternates: { canonical: `/it/airport-transfers/${airport.slug}`, languages: { en: `/airport-transfers/${airport.slug}`, it: `/it/airport-transfers/${airport.slug}`, "x-default": `/airport-transfers/${airport.slug}` } },
  };
}

export default async function AirportPageIt({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const airport = getAirportBySlug(slug);
  if (!airport) notFound();

  return <AirportPageTemplate airport={airport} locale="it" />;
}
