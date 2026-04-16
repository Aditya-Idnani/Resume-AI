"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FileText, LayoutDashboard, Upload, LogOut, ChevronRight } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Analyze Resume", href: "/dashboard/upload", icon: Upload },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useApp();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <aside className="w-60 min-h-screen bg-white border-r border-stone-200 flex flex-col">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-stone-100">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-amber-500 rounded-md flex items-center justify-center">
            <FileText className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-semibold text-stone-900 text-sm">ResumeAI</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        <p className="px-2 pb-2 text-xs font-medium text-stone-400 uppercase tracking-wider">Menu</p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                active
                  ? "bg-amber-50 text-amber-700"
                  : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
              )}
            >
              <Icon className={cn("w-4 h-4", active ? "text-amber-600" : "text-stone-400 group-hover:text-stone-600")} />
              {item.label}
              {active && <ChevronRight className="w-3.5 h-3.5 ml-auto text-amber-400" />}
            </Link>
          );
        })}
      </nav>

      {/* User & Logout */}
      <div className="px-3 py-4 border-t border-stone-100">
        {user && (
          <div className="px-3 py-2 mb-2">
            <p className="text-xs font-semibold text-stone-900 truncate">{user.name}</p>
            <p className="text-xs text-stone-400 truncate">{user.email}</p>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-stone-500 hover:bg-red-50 hover:text-red-600 transition-all group"
        >
          <LogOut className="w-4 h-4 text-stone-400 group-hover:text-red-500" />
          Logout
        </button>
      </div>
    </aside>
  );
}
