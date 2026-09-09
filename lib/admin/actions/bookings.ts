"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { requireRole } from "@/lib/auth/dal";
import { MANAGE_OPS } from "@/lib/auth/roles";
import { notifyCustomer } from "@/lib/notifications/service";
import { formatCurrency, formatDate, formatTime } from "@/lib/admin/format";

export type FormState = { error?: string } | undefined;

const BookingSchema = z.object({
  customer_id: z.string().uuid("Select a customer."),
  quotation_id: z.string().uuid().optional().or(z.literal("")),
  pickup: z.string().trim().min(1, "Pickup is required."),
  dropoff: z.string().trim().min(1, "Drop-off is required."),
  trip_date: z.string().trim().min(1, "Trip date is required."),
  trip_time: z.string().trim().min(1, "Trip time is required."),
  passengers: z.coerce.number().int().positive().optional(),
  luggage: z.coerce.number().int().nonnegative().optional(),
  vehicle_id: z.string().uuid().optional().or(z.literal("")),
  driver_id: z.string().uuid().optional().or(z.literal("")),
  flight_number: z.string().trim().optional().or(z.literal("")),
  special_requests: z.string().trim().optional().or(z.literal("")),
  price: z.coerce.number().nonnegative().default(0),
  discount: z.coerce.number().nonnegative().default(0),
  tax_amount: z.coerce.number().nonnegative().default(0),
  currency: z.string().trim().default("EUR"),
  internal_notes: z.string().trim().optional().or(z.literal("")),
  customer_notes: z.string().trim().optional().or(z.literal("")),
});

function toNullable(value: string | undefined) {
  return value && value.length > 0 ? value : null;
}

function parseBookingForm(formData: FormData) {
  const raw = Object.fromEntries(formData);
  const parsed = BookingSchema.safeParse({ ...raw, passengers: raw.passengers || undefined, luggage: raw.luggage || undefined });
  if (!parsed.success) return { success: false as const, error: parsed.error.issues[0]?.message ?? "Invalid input." };
  const total = Math.max(0, parsed.data.price - parsed.data.discount) + parsed.data.tax_amount;
  return { success: true as const, data: parsed.data, total };
}

export async function createBooking(_prevState: FormState, formData: FormData): Promise<FormState> {
  const profile = await requireRole(MANAGE_OPS);
  const parsed = parseBookingForm(formData);
  if (!parsed.success) return { error: parsed.error };

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("bookings")
    .insert({
      // Filled in by the assign_booking_reference trigger.
      booking_reference: undefined!,
      customer_id: parsed.data.customer_id,
      quotation_id: toNullable(parsed.data.quotation_id),
      pickup: parsed.data.pickup,
      dropoff: parsed.data.dropoff,
      trip_date: parsed.data.trip_date,
      trip_time: parsed.data.trip_time,
      passengers: parsed.data.passengers ?? null,
      luggage: parsed.data.luggage ?? null,
      vehicle_id: toNullable(parsed.data.vehicle_id),
      driver_id: toNullable(parsed.data.driver_id),
      flight_number: toNullable(parsed.data.flight_number),
      special_requests: toNullable(parsed.data.special_requests),
      price: parsed.data.price,
      discount: parsed.data.discount,
      tax_amount: parsed.data.tax_amount,
      total: parsed.total,
      currency: parsed.data.currency,
      internal_notes: toNullable(parsed.data.internal_notes),
      customer_notes: toNullable(parsed.data.customer_notes),
      source: "ADMIN",
      created_by: profile.id,
    })
    .select("id")
    .single();

  if (error || !data) return { error: error?.message ?? "Could not create booking." };

  await supabase.rpc("log_activity", {
    p_action: "booking.created",
    p_entity_type: "booking",
    p_entity_id: data.id,
    p_metadata: {},
  });

  revalidatePath("/admin/bookings");
  redirect(`/admin/bookings/${data.id}?success=Booking+created`);
}

export async function updateBooking(id: string, _prevState: FormState, formData: FormData): Promise<FormState> {
  await requireRole(MANAGE_OPS);
  const parsed = parseBookingForm(formData);
  if (!parsed.success) return { error: parsed.error };

  const supabase = await createClient();
  const { error } = await supabase
    .from("bookings")
    .update({
      customer_id: parsed.data.customer_id,
      pickup: parsed.data.pickup,
      dropoff: parsed.data.dropoff,
      trip_date: parsed.data.trip_date,
      trip_time: parsed.data.trip_time,
      passengers: parsed.data.passengers ?? null,
      luggage: parsed.data.luggage ?? null,
      vehicle_id: toNullable(parsed.data.vehicle_id),
      driver_id: toNullable(parsed.data.driver_id),
      flight_number: toNullable(parsed.data.flight_number),
      special_requests: toNullable(parsed.data.special_requests),
      price: parsed.data.price,
      discount: parsed.data.discount,
      tax_amount: parsed.data.tax_amount,
      total: parsed.total,
      currency: parsed.data.currency,
      internal_notes: toNullable(parsed.data.internal_notes),
      customer_notes: toNullable(parsed.data.customer_notes),
    })
    .eq("id", id);
  if (error) return { error: error.message };

  revalidatePath(`/admin/bookings/${id}`);
  redirect(`/admin/bookings/${id}?success=Changes+saved`);
}

type BookingStatus =
  | "PENDING"
  | "CONFIRMED"
  | "ASSIGNED"
  | "DRIVER_EN_ROUTE"
  | "PASSENGER_PICKED_UP"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED"
  | "NO_SHOW";

export async function setBookingStatus(id: string, status: BookingStatus) {
  await requireRole(MANAGE_OPS);
  const supabase = await createClient();
  const { error } = await supabase.from("bookings").update({ status }).eq("id", id);
  if (error) throw new Error(error.message);

  await supabase.rpc("log_activity", {
    p_action: "booking.status_changed",
    p_entity_type: "booking",
    p_entity_id: id,
    p_metadata: { status },
  });

  if (status === "CONFIRMED" || status === "COMPLETED") {
    const { data: booking } = await supabase
      .from("bookings")
      .select("booking_reference, pickup, dropoff, trip_date, trip_time, total, currency, customers(full_name, email), vehicles(name)")
      .eq("id", id)
      .maybeSingle();
    const customer = (booking as any)?.customers;
    if (booking && customer?.email) {
      await notifyCustomer({
        templateKey: status === "CONFIRMED" ? "booking_confirmation" : "trip_completed",
        to: customer.email,
        vars: {
          customer_name: customer.full_name ?? "",
          booking_reference: booking.booking_reference,
          pickup: booking.pickup,
          dropoff: booking.dropoff,
          date: formatDate(booking.trip_date),
          time: formatTime(booking.trip_time),
          vehicle: (booking as any).vehicles?.name ?? "To be confirmed",
          total: formatCurrency(booking.total, booking.currency),
        },
        relatedEntityType: "booking",
        relatedEntityId: id,
      });
    }
  }

  revalidatePath(`/admin/bookings/${id}`);
  revalidatePath("/admin/bookings");
  revalidatePath("/admin/dispatch");
}

export async function assignDriverAndVehicle(id: string, formData: FormData) {
  const profile = await requireRole(MANAGE_OPS);
  const driverId = toNullable(formData.get("driver_id")?.toString());
  const vehicleId = toNullable(formData.get("vehicle_id")?.toString());

  const supabase = await createClient();
  const { data: booking } = await supabase.from("bookings").select("status").eq("id", id).single();

  const { error } = await supabase
    .from("bookings")
    .update({
      driver_id: driverId,
      vehicle_id: vehicleId,
      assigned_by: profile.id,
      assigned_at: new Date().toISOString(),
      status: driverId && booking && ["PENDING", "CONFIRMED"].includes(booking.status) ? "ASSIGNED" : booking?.status,
    })
    .eq("id", id);
  if (error) throw new Error(error.message);

  if (driverId || vehicleId) {
    await supabase.from("driver_assignments").insert({
      booking_id: id,
      driver_id: driverId,
      vehicle_id: vehicleId,
      assigned_by: profile.id,
    });
  }

  await supabase.rpc("log_activity", {
    p_action: "booking.driver_assigned",
    p_entity_type: "booking",
    p_entity_id: id,
    p_metadata: { driver_id: driverId, vehicle_id: vehicleId },
  });

  if (driverId) {
    const { data: updated } = await supabase
      .from("bookings")
      .select("booking_reference, customers(full_name, email), vehicles(name), drivers(full_name)")
      .eq("id", id)
      .maybeSingle();
    const customer = (updated as any)?.customers;
    if (updated && customer?.email) {
      await notifyCustomer({
        templateKey: "driver_assignment",
        to: customer.email,
        vars: {
          customer_name: customer.full_name ?? "",
          booking_reference: updated.booking_reference,
          driver_name: (updated as any).drivers?.full_name ?? "",
          vehicle: (updated as any).vehicles?.name ?? "",
        },
        relatedEntityType: "booking",
        relatedEntityId: id,
      });
    }
  }

  revalidatePath(`/admin/bookings/${id}`);
  revalidatePath("/admin/dispatch");
}
