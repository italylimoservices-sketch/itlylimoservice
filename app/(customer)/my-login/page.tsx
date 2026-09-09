import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentCustomer } from "@/lib/auth/customer-dal";
import { LoginForm } from "@/components/customer/LoginForm";

export const metadata: Metadata = { title: "Sign in — My account" };

export default async function CustomerLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const session = await getCurrentCustomer();
  if (session) redirect("/my-bookings");

  const { error } = await searchParams;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-sm shadow p-8">
      <h1 className="font-display text-xl text-ink mb-1">My account</h1>
      <p className="text-sm text-stone mb-6">Sign in to view your bookings and invoices.</p>
      {error === "invalid-link" ? (
        <p className="mb-4 text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-sm px-3 py-2">
          That link has expired or was already used. Request a new one below.
        </p>
      ) : null}
      <LoginForm />
    </div>
  );
}
