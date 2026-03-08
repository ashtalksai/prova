"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  Car,
  Calendar,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Vehicles", href: "/dashboard/vehicles", icon: Car },
  { label: "Schedule", href: "/dashboard/schedule", icon: Calendar },
  { label: "Owners", href: "/dashboard/owners", icon: Users },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

function Sidebar({ pathname }: { pathname: string }) {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 w-64 min-h-screen bg-[#0f1626] border-r border-[#1e2d45] flex-col z-40">
      {/* Logo */}
      <div className="p-6 border-b border-[#1e2d45]">
        <Link href="/dashboard">
          <span className="font-serif italic font-bold text-[#c9a84c] tracking-widest uppercase text-xl select-none">
            Prova
          </span>
        </Link>
        <p className="text-[#5c6478] text-xs font-sans mt-1 tracking-wide">
          Storage Operations
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive =
            href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={[
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans transition-colors duration-150",
                isActive
                  ? "bg-[#162036] text-[#c9a84c] border-l-2 border-[#c9a84c] pl-[10px]"
                  : "text-[#a0a8b8] hover:bg-[#162036] hover:text-[#f0ebe0] border-l-2 border-transparent pl-[10px]",
              ].join(" ")}
            >
              <Icon
                size={16}
                className={isActive ? "text-[#c9a84c]" : "text-current"}
              />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-[#1e2d45]">
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center gap-2 px-3 py-2.5 w-full rounded-lg text-sm font-sans text-[#5c6478] hover:text-[#f0ebe0] hover:bg-[#162036] transition-colors duration-150"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}

function MobileBottomTabs({ pathname }: { pathname: string }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0f1626] border-t border-[#1e2d45] z-50">
      <div className="flex justify-around py-2">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive =
            href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-1 px-3 py-1 min-w-0"
            >
              <Icon
                size={20}
                className={
                  isActive ? "text-[#c9a84c]" : "text-[#5c6478]"
                }
              />
              <span
                className={[
                  "text-[10px] font-sans leading-none",
                  isActive ? "text-[#c9a84c]" : "text-[#5c6478]",
                ].join(" ")}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function TopHeader({ pathname }: { pathname: string }) {
  const currentPage = navItems.find(({ href }) =>
    href === "/dashboard"
      ? pathname === "/dashboard"
      : pathname.startsWith(href)
  );

  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="font-serif text-2xl text-[#f0ebe0] font-semibold">
          {currentPage?.label ?? "Dashboard"}
        </h1>
        <p className="text-[#5c6478] text-xs font-sans mt-0.5 tracking-wide uppercase">
          Prova Operations Platform
        </p>
      </div>

      {/* Avatar placeholder */}
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-[#f0ebe0] text-sm font-sans font-medium leading-none">
            Facility Manager
          </p>
          <p className="text-[#5c6478] text-xs font-sans mt-0.5">
            admin@prova.io
          </p>
        </div>
        <div className="w-9 h-9 rounded-full bg-[#162036] border border-[#1e2d45] flex items-center justify-center flex-shrink-0">
          <span className="font-serif text-[#c9a84c] text-sm font-bold">
            F
          </span>
        </div>
      </div>
    </header>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Sidebar pathname={pathname} />
      <MobileBottomTabs pathname={pathname} />

      {/* Main content */}
      <main className="ml-0 md:ml-64 min-h-screen bg-[#0a0e1a] p-6 md:p-8 pb-24 md:pb-8">
        <TopHeader pathname={pathname} />
        {children}
      </main>
    </div>
  );
}
