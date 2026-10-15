"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import type { User } from "firebase/auth";
import { onAuthChange, signOut } from "@/lib/auth";
import { getAdminCounts, type AdminCounts } from "@/lib/adminCounts";

type NavItem = {
  href: string;
  label: string;
  badge?: keyof AdminCounts;
};

const nav: NavItem[] = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/posts", label: "Blog Posts" },
  { href: "/admin/videos", label: "Videos" },
  { href: "/admin/shop", label: "Shop Items" },
  { href: "/admin/shop-orders", label: "Shop Orders", badge: "shopOrders" },
  { href: "/admin/jobs", label: "Jobs" },
  { href: "/admin/comments", label: "Comments", badge: "comments" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/conditions", label: "Conditions" },
  { href: "/admin/bookings", label: "Bookings", badge: "bookings" },
  { href: "/admin/messages", label: "Messages", badge: "messages" },
  { href: "/admin/leads", label: "Leads", badge: "leads" },
  { href: "/admin/subscribers", label: "Newsletter", badge: "subscribers" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [counts, setCounts] = useState<AdminCounts>({
    bookings: 0,
    messages: 0,
    comments: 0,
    leads: 0,
    subscribers: 0,
    shopOrders: 0,
  });

  useEffect(() => {
    const unsub = onAuthChange((u) => setUser(u));
    return () => unsub();
  }, []);

  useEffect(() => {
    if (user === null) router.replace("/admin/login");
  }, [user, router]);

  // Fetch counts while signed in; refresh every 60s and on route change
  useEffect(() => {
    if (!user) return;
    let cancelled = false;

    const load = async () => {
      const fresh = await getAdminCounts();
      if (!cancelled) setCounts(fresh);
    };

    load();
    const interval = setInterval(load, 60_000);

    const onVisibility = () => {
      if (document.visibilityState === "visible") load();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [user, pathname]);

  if (user === undefined || user === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-sm">
          {user === undefined ? "Loading…" : "Redirecting…"}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-gray-200">
          <Link href="/admin" className="text-lg font-bold text-purple">
            Stellar Admin
          </Link>
          <p className="text-[10px] text-gray-400 uppercase tracking-wide mt-0.5">
            Content Management
          </p>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {nav.map((item) => {
            const active =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            const count = item.badge ? counts[item.badge] : 0;
            const showBadge = item.badge !== undefined && count > 0;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition ${
                  active
                    ? "bg-purple text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>{item.label}</span>
                {showBadge && (
                  <span
                    className={`ml-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold ${
                      active
                        ? "bg-white text-purple"
                        : "bg-purple text-white"
                    }`}
                  >
                    {count > 99 ? "99+" : count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-1 truncate" title={user.email ?? ""}>
            {user.email}
          </p>
          <button
            onClick={() => signOut()}
            className="text-xs font-semibold text-red-600 hover:text-red-700"
          >
            Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 max-w-full overflow-x-hidden">{children}</main>
    </div>
  );
}