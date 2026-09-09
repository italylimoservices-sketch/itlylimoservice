"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { requireCustomer } from "@/lib/auth/customer-dal";

export type FormState = { error?: string; success?: boolean } | undefined;

export async function signOutCustomer() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/my-login");
}

const ProfileSchema = z.object({
  full_name: z.string().trim().min(1, "Name is required."),
  phone: z.string().trim().optional().or(z.literal("")),
  whatsapp: z.string().trim().optional().or(z.literal("")),
  country: z.string().trim().optional().or(z.literal("")),
  billing_address: z.string().trim().optional().or(z.literal("")),
});

export async function updateMyProfile(_prevState: FormState, formData: FormData): Promise<FormState> {
  const session = await requireCustomer();
  if (!session.customerId) return { error: "Your account isn't linked to a customer record yet — contact us to get set up." };

  const parsed = ProfileSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid input." };

  const supabase = await createClient();
  const { error } = await supabase.rpc("update_my_customer_profile", {
    p_full_name: parsed.data.full_name,
    p_phone: parsed.data.phone ?? "",
    p_whatsapp: parsed.data.whatsapp ?? "",
    p_country: parsed.data.country ?? "",
    p_billing_address: parsed.data.billing_address ?? "",
  });
  if (error) return { error: error.message };

  revalidatePath("/my-profile");
  return { success: true };
}

export async function updateMyNotificationPreferences(formData: FormData): Promise<void> {
  const session = await requireCustomer();
  if (!session.customerId) return;

  const supabase = await createClient();
  await supabase.rpc("update_my_notification_preferences", { p_opt_out_marketing: formData.get("opt_out_marketing") === "on" });

  revalidatePath("/my-profile");
}
