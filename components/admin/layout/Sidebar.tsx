"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import type { NavItem } from "@/lib/admin/nav";
import { siteConfig } from "@/lib/siteConfig";

function NavList({ navItems, pathname, onNavigate }: { navItems: NavItem[]; pathname: string; onNavigate?: () => void }) {
  return (
    <nav className="flex-1 overflow-y-auto py-4">
      <ul className="space-y-0.5 px-3">
        {navItems.map((item) => {
          const active = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={`flex items-center gap-3 rounded-sm px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-white/10 text-gold-light font-medium"
                    : "text-ivory/70 hover:bg-white/5 hover:text-ivory"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function Sidebar({
  navItems,
  mobileOpen,
  onClose,
}: {
  navItems: NavItem[];
  mobileOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      <aside className="hidden md:flex md:flex-col w-60 shrink-0 bg-navy text-ivory">
        <div className="h-16 flex items-center px-5 border-b border-white/10">
          <span className="font-display text-lg truncate">{siteConfig.name}</span>
        </div>
        <NavList navItems={navItems} pathname={pathname} />
      </aside>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />
          <aside className="absolute inset-y-0 left-0 w-64 bg-navy text-ivory flex flex-col">
            <div className="h-16 flex items-center justify-between px-5 border-b border-white/10">
              <span className="font-display text-lg truncate">{siteConfig.name}</span>
              <button onClick={onClose} aria-label="Close menu" className="p-1">
                <X className="h-5 w-5" />
              </button>
            </div>
            <NavList navItems={navItems} pathname={pathname} onNavigate={onClose} />
          </aside>
        </div>
      ) : null}
    </>
  );
}
