"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { requireRole } from "@/lib/auth/dal";
import { MANAGE_FINANCE, type UserRole } from "@/lib/auth/roles";

export type FormState = { error?: string } | undefined;

const EXPENSE_CREATORS: UserRole[] = ["SUPER_ADMIN", "ADMIN", "FINANCE", "OPERATIONS"];

const ExpenseSchema = z.object({
  category: z.enum(["DRIVER", "FUEL", "TOLL", "PARKING", "MAINTENANCE", "AIRPORT", "COMMISSION", "OTHER"]),
  amount: z.coerce.number().nonnegative(),
  currency: z.string().trim().default("EUR"),
  booking_id: z.string().uuid().optional().or(z.literal("")),
  driver_id: z.string().uuid().optional().or(z.literal("")),
  vehicle_id: z.string().uuid().optional().or(z.literal("")),
  description: z.string().trim().optional().or(z.literal("")),
  expense_date: z.string().trim().min(1, "Date is required."),
});

function toNullable(value: string | undefined) {
  return value && value.length > 0 ? value : null;
}

export async function createExpense(_prevState: FormState, formData: FormData): Promise<FormState> {
  const profile = await requireRole(EXPENSE_CREATORS);
  const parsed = ExpenseSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid input." };

  const supabase = await createClient();
  const { data: expense, error } = await supabase
    .from("expenses")
    .insert({
      category: parsed.data.category,
      amount: parsed.data.amount,
      currency: parsed.data.currency,
      booking_id: toNullable(parsed.data.booking_id),
      driver_id: toNullable(parsed.data.driver_id),
      vehicle_id: toNullable(parsed.data.vehicle_id),
      description: toNullable(parsed.data.description),
      expense_date: parsed.data.expense_date,
      created_by: profile.id,
    })
    .select("id")
    .single();
  if (error || !expense) return { error: error?.message ?? "Could not create expense." };

  await supabase.rpc("log_activity", {
    p_action: "expense.created",
    p_entity_type: "expense",
    p_entity_id: expense.id,
    p_metadata: { category: parsed.data.category, amount: parsed.data.amount },
  });

  revalidatePath("/admin/expenses");
  redirect("/admin/expenses?success=Expense+added");
}

export async function deleteExpense(id: string) {
  await requireRole(MANAGE_FINANCE);
  const supabase = await createClient();
  const { error } = await supabase.from("expenses").update({ deleted_at: new Date().toISOString() }).eq("id", id);
  if (error) throw new Error(error.message);

  await supabase.rpc("log_activity", { p_action: "expense.deleted", p_entity_type: "expense", p_entity_id: id, p_metadata: {} });

  revalidatePath("/admin/expenses");
}
