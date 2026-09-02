import { getDestinationBySlug } from "@/lib/data/destinations";
import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  return renderOgImage(
    destination?.region ?? "Italy Destinations",
    destination ? `Chauffeur in ${destination.name}` : "Vetturino"
  );
}
