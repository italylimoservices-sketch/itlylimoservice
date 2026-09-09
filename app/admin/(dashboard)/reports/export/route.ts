import { NextResponse, type NextRequest } from "next/server";
import { requireRole } from "@/lib/auth/dal";
import type { UserRole } from "@/lib/auth/roles";
import { REPORT_LABELS, runReport, toCsv, type ReportKey } from "@/lib/admin/reports";
import type { DateRangeKey } from "@/lib/admin/date-range";

const REPORT_ROLES: UserRole[] = ["SUPER_ADMIN", "ADMIN", "FINANCE", "OPERATIONS", "VIEWER"];

export async function GET(request: NextRequest) {
  await requireRole(REPORT_ROLES);
  const { searchParams } = new URL(request.url);
  const type = (searchParams.get("type") ?? "bookings") as ReportKey;
  const range = (searchParams.get("range") ?? "month") as DateRangeKey;

  if (!Object.keys(REPORT_LABELS).includes(type)) {
    return NextResponse.json({ error: "Unknown report" }, { status: 400 });
  }

  const result = await runReport(type, range);
  const csv = toCsv(result);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${type}-${range}.csv"`,
    },
  });
}
