import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`bg-white border border-line rounded-sm ${className}`}>{children}</div>;
}

export function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: ReactNode;
  hint?: string;
}) {
  return (
    <Card className="p-4">
      <p className="text-xs uppercase tracking-wide text-stone">{label}</p>
      <p className="font-display text-2xl text-ink mt-1">{value}</p>
      {hint ? <p className="text-xs text-stone mt-1">{hint}</p> : null}
    </Card>
  );
}
