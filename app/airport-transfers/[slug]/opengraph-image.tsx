import { getAirportBySlug } from "@/lib/data/airports";
import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const airport = getAirportBySlug(slug);
  return renderOgImage(
    airport ? `Airport Transfers · ${airport.code}` : "Airport Transfers",
    airport?.name ?? "Vetturino"
  );
}
