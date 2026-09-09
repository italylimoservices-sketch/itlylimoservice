import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Not authorized" };

export default function UnauthorizedPage() {
  return (
    <div className="text-center">
      <h1 className="font-display text-xl text-ink mb-2">Not authorized</h1>
      <p className="text-sm text-stone mb-6">Your role doesn&apos;t have access to that section.</p>
      <Link href="/admin" className="text-sm text-gold hover:underline">
        Back to dashboard
      </Link>
    </div>
  );
}
