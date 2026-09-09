import type { Metadata } from "next";
import { requireRole } from "@/lib/auth/dal";
import { ADMIN_ONLY } from "@/lib/auth/roles";
import { createClient } from "@/lib/supabase/server";
import { PageHeader } from "@/components/admin/ui/PageHeader";
import { Card } from "@/components/admin/ui/Card";
import { Pagination } from "@/components/admin/ui/Pagination";
import { SimpleTable } from "@/components/admin/ui/SimpleTable";
import { formatDateTime } from "@/lib/admin/format";

export const metadata: Metadata = { title: "Activity log" };

const PAGE_SIZE = 40;

export default async function ActivityPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  await requireRole(ADMIN_ONLY);
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);
  const from = (page - 1) * PAGE_SIZE;

  const supabase = await createClient();
  const { data: logs, count } = await supabase
    .from("activity_logs")
    .select("id, action, entity_type, entity_id, metadata, created_at, profiles(full_name, email)", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, from + PAGE_SIZE - 1);

  return (
    <div>
      <PageHeader title="Activity log" description="Every important create/update/status change across the system, super-admin/admin only." />
      <Card>
        <SimpleTable
          rows={logs ?? []}
          emptyTitle="No activity recorded yet"
          columns={[
            { header: "When", cell: (l: any) => formatDateTime(l.created_at) },
            { header: "Who", cell: (l: any) => l.profiles?.full_name || l.profiles?.email || "System" },
            { header: "Action", cell: (l: any) => l.action },
            { header: "Entity", cell: (l: any) => `${l.entity_type} · ${String(l.entity_id ?? "").slice(0, 8)}` },
          ]}
        />
        <Pagination page={page} pageSize={PAGE_SIZE} total={count ?? 0} basePath="/admin/activity" />
      </Card>
    </div>
  );
}
