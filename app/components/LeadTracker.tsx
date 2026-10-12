"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackLead, type LeadType } from "@/lib/leads";

export default function LeadTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;

    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href") || "";
      if (!href) return;

      let type: LeadType | null = null;
      let phone = "";
      let email = "";

      if (href.startsWith("tel:")) {
        type = "call";
        phone = href.replace(/^tel:/, "").split("?")[0].trim();
      } else if (/wa\.me|api\.whatsapp\.com|whatsapp\.com\/send/i.test(href)) {
        type = "whatsapp";
        const wa = href.match(/wa\.me\/(\d+)/);
        if (wa) {
          phone = wa[1];
        } else {
          const q = href.match(/[?&]phone=(\d+)/);
          if (q) phone = q[1];
        }
      } else if (href.startsWith("mailto:")) {
        type = "email";
        email = href.replace(/^mailto:/, "").split("?")[0].trim();
      } else if (
        /google\.com\/maps|maps\.google|goo\.gl\/maps/i.test(href)
      ) {
        type = "directions";
      }

      if (!type) return;

      const key = `lead:${type}:${pathname}`;
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");

      const label =
        (target.textContent?.trim() ||
          target.getAttribute("aria-label") ||
          target.getAttribute("title") ||
          "")
          .slice(0, 120);

      trackLead({
        type,
        source: pathname,
        phone,
        email,
        label,
      }).catch((err) => console.error("Lead track failed:", err));
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [pathname]);

  return null;
}