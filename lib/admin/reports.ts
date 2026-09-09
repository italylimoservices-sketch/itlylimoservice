import "server-only";

import { createClient } from "@/lib/supabase/server";
import { resolveDateRange, isoDate, type DateRangeKey } from "@/lib/admin/date-range";

export type ReportKey =
  | "bookings"
  | "revenue"
  | "quotations"
  | "customers"
  | "drivers"
  | "vehicles"
  | "payments"
  | "outstanding_invoices"
  | "overdue_invoices"
  | "cancelled_bookings"
  | "expenses";

export const REPORT_LABELS: Record<ReportKey, string> = {
  bookings: "Bookings",
  revenue: "Revenue",
  quotations: "Quotations & conversion",
  customers: "Customers",
  drivers: "Driver activity",
  vehicles: "Vehicle activity",
  payments: "Payments",
  outstanding_invoices: "Outstanding invoices",
  overdue_invoices: "Overdue invoices",
  cancelled_bookings: "Cancelled bookings",
  expenses: "Expenses",
};

export type ReportResult = { columns: string[]; rows: (string | number)[][] };

const money = (n: unknown) => Number(n ?? 0).toFixed(2);

export async function runReport(key: ReportKey, range: DateRangeKey): Promise<ReportResult> {
  const supabase = await createClient();
  const { from, to } = resolveDateRange(range);
  const fromDate = from ? isoDate(from) : "1970-01-01";
  const toDate = isoDate(to);

  switch (key) {
    case "bookings": {
      const { data } = await supabase
        .from("bookings")
        .select("booking_reference, trip_date, status, payment_status, total, currency, customers(full_name)")
        .gte("trip_date", fromDate)
        .lte("trip_date", toDate)
        .is("deleted_at", null)
        .order("trip_date", { ascending: false });
      return {
        columns: ["Reference", "Date", "Customer", "Status", "Payment", "Total"],
        rows: (data ?? []).map((b: any) => [b.booking_reference, b.trip_date, b.customers?.full_name ?? "", b.status, b.payment_status, money(b.total)]),
      };
    }
    case "cancelled_bookings": {
      const { data } = await supabase
        .from("bookings")
        .select("booking_reference, trip_date, total, currency, customers(full_name)")
        .eq("status", "CANCELLED")
        .gte("trip_date", fromDate)
        .lte("trip_date", toDate)
        .order("trip_date", { ascending: false });
      return {
        columns: ["Reference", "Date", "Customer", "Total"],
        rows: (data ?? []).map((b: any) => [b.booking_reference, b.trip_date, b.customers?.full_name ?? "", money(b.total)]),
      };
    }
    case "revenue": {
      const { data } = await supabase
        .from("bookings")
        .select("trip_date, total")
        .neq("status", "CANCELLED")
        .gte("trip_date", fromDate)
        .lte("trip_date", toDate)
        .is("deleted_at", null);
      const byDate = new Map<string, number>();
      for (const b of data ?? []) byDate.set(b.trip_date as string, (byDate.get(b.trip_date as string) ?? 0) + Number(b.total));
      return {
        columns: ["Date", "Revenue"],
        rows: [...byDate.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([date, total]) => [date, money(total)]),
      };
    }
    case "quotations": {
      const { data } = await supabase
        .from("quotations")
        .select("quotation_number, created_at, status, total, currency, customers(full_name)")
        .gte("created_at", fromDate)
        .lte("created_at", toDate)
        .is("deleted_at", null)
        .order("created_at", { ascending: false });
      return {
        columns: ["Number", "Date", "Customer", "Status", "Total"],
        rows: (data ?? []).map((q: any) => [q.quotation_number, q.created_at?.slice(0, 10), q.customers?.full_name ?? "", q.status, money(q.total)]),
      };
    }
    case "customers": {
      const { data } = await supabase
        .from("customers")
        .select("full_name, email, phone, company_name, created_at")
        .gte("created_at", fromDate)
        .lte("created_at", toDate)
        .is("deleted_at", null)
        .order("created_at", { ascending: false });
      return {
        columns: ["Name", "Email", "Phone", "Company", "Added"],
        rows: (data ?? []).map((c: any) => [c.full_name, c.email ?? "", c.phone ?? "", c.company_name ?? "", c.created_at?.slice(0, 10)]),
      };
    }
    case "drivers": {
      const { data } = await supabase.from("drivers").select("full_name, phone, active, availability").order("full_name");
      return {
        columns: ["Name", "Phone", "Active", "Availability"],
        rows: (data ?? []).map((d: any) => [d.full_name, d.phone ?? "", d.active ? "Yes" : "No", d.availability]),
      };
    }
    case "vehicles": {
      const { data } = await supabase.from("vehicles").select("name, category, registration_number, status").order("name");
      return {
        columns: ["Name", "Category", "Registration", "Status"],
        rows: (data ?? []).map((v: any) => [v.name, v.category, v.registration_number ?? "", v.status]),
      };
    }
    case "payments": {
      const { data } = await supabase
        .from("payments")
        .select("payment_date, amount, currency, method, invoices(invoice_number), customers(full_name)")
        .gte("payment_date", fromDate)
        .lte("payment_date", toDate)
        .is("deleted_at", null)
        .order("payment_date", { ascending: false });
      return {
        columns: ["Date", "Customer", "Invoice", "Method", "Amount"],
        rows: (data ?? []).map((p: any) => [p.payment_date, p.customers?.full_name ?? "", p.invoices?.invoice_number ?? "", p.method, money(p.amount)]),
      };
    }
    case "outstanding_invoices": {
      const { data } = await supabase
        .from("invoices")
        .select("invoice_number, due_date, total, balance_due, currency, customers(full_name)")
        .in("status", ["SENT", "PARTIALLY_PAID", "OVERDUE"])
        .is("deleted_at", null)
        .order("due_date", { ascending: true });
      return {
        columns: ["Number", "Customer", "Due date", "Total", "Balance due"],
        rows: (data ?? []).map((i: any) => [i.invoice_number, i.customers?.full_name ?? "", i.due_date, money(i.total), money(i.balance_due)]),
      };
    }
    case "overdue_invoices": {
      const { data } = await supabase
        .from("invoices")
        .select("invoice_number, due_date, balance_due, currency, customers(full_name)")
        .eq("status", "OVERDUE")
        .is("deleted_at", null)
        .order("due_date", { ascending: true });
      return {
        columns: ["Number", "Customer", "Due date", "Balance due"],
        rows: (data ?? []).map((i: any) => [i.invoice_number, i.customers?.full_name ?? "", i.due_date, money(i.balance_due)]),
      };
    }
    case "expenses": {
      const { data } = await supabase
        .from("expenses")
        .select("expense_date, category, amount, currency, description, bookings(booking_reference)")
        .gte("expense_date", fromDate)
        .lte("expense_date", toDate)
        .is("deleted_at", null)
        .order("expense_date", { ascending: false });
      return {
        columns: ["Date", "Category", "Trip", "Amount", "Description"],
        rows: (data ?? []).map((e: any) => [e.expense_date, e.category, e.bookings?.booking_reference ?? "", money(e.amount), e.description ?? ""]),
      };
    }
    default:
      return { columns: [], rows: [] };
  }
}

export function toCsv(result: ReportResult): string {
  const escape = (value: string | number) => {
    const s = String(value ?? "");
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const lines = [result.columns.map(escape).join(","), ...result.rows.map((row) => row.map(escape).join(","))];
  return lines.join("\n");
}
