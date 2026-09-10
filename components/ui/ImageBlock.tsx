import Image from "next/image";

const variants = {
  gold: "from-[#1c2438] via-[#2a3350] to-[#a9803f]",
  navy: "from-[#0d1526] via-[#161f36] to-[#2a3350]",
  ivory: "from-[#e9dcbf] via-[#f2ede2] to-[#cba565]",
};

export default function ImageBlock({
  label,
  variant = "gold",
  className = "",
  aspect = "aspect-[4/3]",
  src,
}: {
  label: string;
  variant?: keyof typeof variants;
  className?: string;
  aspect?: string;
  src?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-md ${aspect} ${className}`}>
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{ background: "linear-gradient(to top, rgba(13,21,38,0.75), transparent)" }}
          aria-hidden
        />
        <span className="absolute bottom-3 left-3 right-3 font-display text-sm text-white drop-shadow">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-md bg-gradient-to-br ${variants[variant]} ${aspect} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden
      />
      <span className="absolute bottom-3 left-3 right-3 font-display text-sm text-white/85 drop-shadow">
        {label}
      </span>
    </div>
  );
}
