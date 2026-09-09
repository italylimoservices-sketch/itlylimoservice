import type { ReactNode } from "react";
import { requireUser } from "@/lib/auth/dal";
import { navItemsForRole } from "@/lib/admin/nav";
import { AdminShell } from "@/components/admin/layout/AdminShell";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const profile = await requireUser();
  const navItems = navItemsForRole(profile.role);

  return (
    <AdminShell navItems={navItems} profile={profile}>
      {children}
    </AdminShell>
  );
}
