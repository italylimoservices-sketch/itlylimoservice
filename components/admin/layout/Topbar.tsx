"use client";

import { Menu, Bell, Search } from "lucide-react";
import { logout } from "@/lib/auth/actions";
import { ROLE_LABELS, type UserRole } from "@/lib/auth/roles";

export function Topbar({
  profile,
  onMenuClick,
}: {
  profile: { fullName: string; email: string; role: UserRole };
  onMenuClick: () => void;
}) {
  return (
    <header className="h-16 shrink-0 bg-white border-b border-line flex items-center gap-3 px-4 md:px-6">
      <button className="md:hidden -ml-1 p-1" onClick={onMenuClick} aria-label="Open menu">
        <Menu className="h-5 w-5 text-ink" />
      </button>

      <form action="/admin/search" className="hidden sm:flex flex-1 max-w-md items-center gap-2 bg-ivory-deep rounded-sm px-3 py-1.5">
        <Search className="h-4 w-4 text-stone shrink-0" />
        <input
          name="q"
          placeholder="Search bookings, customers, invoices…"
          className="bg-transparent outline-none text-sm flex-1 min-w-0"
        />
      </form>

      <div className="flex-1 sm:hidden" />

      <a href="/admin/follow-ups" className="relative p-2 text-stone hover:text-ink" aria-label="Notifications">
        <Bell className="h-5 w-5" />
      </a>

      <div className="flex items-center gap-3 pl-3 border-l border-line">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-ink leading-tight">{profile.fullName || profile.email}</p>
          <p className="text-xs text-stone leading-tight">{ROLE_LABELS[profile.role]}</p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="text-xs text-stone hover:text-gold border border-line rounded-sm px-2.5 py-1.5 transition-colors"
          >
            Sign out
          </button>
        </form>
      </div>
    </header>
  );
}
