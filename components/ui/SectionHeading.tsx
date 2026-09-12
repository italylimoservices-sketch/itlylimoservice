import LinkedText from "@/components/ui/LinkedText";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && <p className={`eyebrow mb-3 ${light ? "eyebrow-invert" : ""}`}>{eyebrow}</p>}
      <h2
        className={`font-display text-3xl md:text-4xl leading-tight ${
          light ? "text-ivory" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[0.98rem] leading-relaxed ${light ? "text-ivory-deep/75" : "text-stone"}`}>
          <LinkedText text={subtitle} linkClassName={light ? "text-gold-light underline underline-offset-2 hover:text-gold" : "text-gold hover:underline"} />
        </p>
      )}
    </div>
  );
}
