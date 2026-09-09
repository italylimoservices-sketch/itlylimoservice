"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { requireCustomer } from "@/lib/auth/customer-dal";

export type ReviewFormState = { error?: string; success?: boolean } | undefined;

export async function submitMyReview(reference: string, _prevState: ReviewFormState, formData: FormData): Promise<ReviewFormState> {
  await requireCustomer();
  const rating = Number(formData.get("rating"));
  const comment = formData.get("comment")?.toString() ?? "";

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return { error: "Pick a rating from 1 to 5." };

  const supabase = await createClient();
  const { error } = await supabase.rpc("submit_my_review", { p_reference: reference, p_rating: rating, p_comment: comment });
  if (error) return { error: error.message };

  revalidatePath(`/my-bookings/${reference}`);
  return { success: true };
}
