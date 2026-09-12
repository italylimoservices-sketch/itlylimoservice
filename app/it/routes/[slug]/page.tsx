import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { routes, getRouteBySlug } from "@/lib/data/routes";
import { routeDetails_it } from "@/lib/i18n/data.it.routes";
import RoutePageTemplate from "@/components/templates/RoutePageTemplate";
import { translatedPaths } from "@/lib/i18n/locales";

export function generateStaticParams() {
  return routes.filter((r) => translatedPaths.has(`/routes/${r.slug}`)).map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return {};
  const r = routeDetails_it[slug];
  return {
    title: r?.metaTitle ?? route.metaTitle,
    description: r?.metaDescription ?? route.metaDescription,
    alternates: { canonical: `/it/routes/${route.slug}`, languages: { en: `/routes/${route.slug}`, it: `/it/routes/${route.slug}`, "x-default": `/routes/${route.slug}` } },
  };
}

export default async function RoutePageIt({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) notFound();

  return <RoutePageTemplate route={route} locale="it" />;
}
