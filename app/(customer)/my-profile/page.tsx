import type { Metadata } from "next";
import { requireCustomer } from "@/lib/auth/customer-dal";
import { createClient } from "@/lib/supabase/server";
import { Card } from "@/components/admin/ui/Card";
import { ProfileForm } from "@/components/customer/ProfileForm";

export const metadata: Metadata = { title: "My profile" };

export default async function MyProfilePage() {
  const session = await requireCustomer();
  const supabase = await createClient();
  const { data: profiles } = session.customerId ? await supabase.rpc("get_my_customer_profile") : { data: null };
  const profile = profiles?.[0];

  return (
    <div>
      <h1 className="font-display text-xl text-ink mb-6">My profile</h1>

      {!session.customerId ? (
        <Card className="p-4">
          <p className="text-sm text-stone">
            We couldn&rsquo;t find an existing customer record for <strong>{session.email}</strong>. If you&rsquo;ve booked with us
            before under a different email, or this is your first time, contact us and we&rsquo;ll get your account linked up.
          </p>
        </Card>
      ) : profile ? (
        <Card className="p-6 max-w-md">
          <ProfileForm profile={profile} />
        </Card>
      ) : null}
    </div>
  );
}
