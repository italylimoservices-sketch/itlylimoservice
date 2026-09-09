import Link from "next/link";
import type { Metadata } from "next";
import { Plus, Trash2 } from "lucide-react";
import { requireRole } from "@/lib/auth/dal";
import { VIEW_FINANCE, canManageFinance } from "@/lib/auth/roles";
import { createClient } from "@/lib/supabase/server";
import { PageHeader } from "@/components/admin/ui/PageHeader";
import { Card } from "@/components/admin/ui/Card";
import { Pagination } from "@/components/admin/ui/Pagination";
import { SimpleTable } from "@/components/admin/ui/SimpleTable";
import { formatCurrency, formatDate } from "@/lib/admin/format";
import { deleteExpense } from "@/lib/admin/actions/expenses";
import { ConfirmButton } from "@/components/admin/ui/ConfirmButton";

export const metadata: Metadata = { title: "Expenses" };

const PAGE_SIZE = 25;

export default async function ExpensesPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const profile = await requireRole(VIEW_FINANCE);
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);
  const from = (page - 1) * PAGE_SIZE;

  const supabase = await createClient();
  const { data: expenses, count } = await supabase
    .from("expenses")
    .select("id, category, amount, currency, expense_date, description, bookings(booking_reference), drivers(full_name), vehicles(name)", { count: "exact" })
    .is("deleted_at", null)
    .order("expense_date", { ascending: false })
    .range(from, from + PAGE_SIZE - 1);

  const canManage = canManageFinance(profile.role);

  return (
    <div>
      <PageHeader
        title="Expenses"
        actions={
          <Link href="/admin/expenses/new" className="inline-flex items-center gap-1.5 bg-navy text-ivory text-sm font-semibold px-4 py-2 rounded-sm hover:bg-navy-deep">
            <Plus className="h-4 w-4" /> New expense
          </Link>
        }
      />
      <Card>
        <SimpleTable
          rows={expenses ?? []}
          emptyTitle="No expenses recorded yet"
          columns={[
            { header: "Date", cell: (e: any) => formatDate(e.expense_date) },
            { header: "Category", cell: (e: any) => e.category },
            { header: "Amount", cell: (e: any) => formatCurrency(e.amount, e.currency) },
            { header: "Trip", cell: (e: any) => e.bookings?.booking_reference ?? "—" },
            { header: "Driver / Vehicle", cell: (e: any) => e.drivers?.full_name ?? e.vehicles?.name ?? "—" },
            { header: "Description", cell: (e: any) => e.description ?? "—" },
            ...(canManage
              ? [
                  {
                    header: "",
                    cell: (e: any) => (
                      <form action={deleteExpense.bind(null, e.id)}>
                        <ConfirmButton confirmMessage="Delete this expense?" className="text-stone hover:text-red-600" aria-label="Delete expense">
                          <Trash2 className="h-4 w-4" />
                        </ConfirmButton>
                      </form>
                    ),
                  },
                ]
              : []),
          ]}
        />
        <Pagination page={page} pageSize={PAGE_SIZE} total={count ?? 0} basePath="/admin/expenses" />
      </Card>
    </div>
  );
}
