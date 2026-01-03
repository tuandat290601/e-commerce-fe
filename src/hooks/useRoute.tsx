"use client";

import { INavbarNavLink } from "@/interfaces/navbar.interface";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function useRoute(navigationLinks: INavbarNavLink[]) {
  const pathname = usePathname();

  const active = useMemo(() => {
    let activeParent = null;
    let activeChild = null;

    navigationLinks.forEach((nav) => {
      // Exact match for parent
      if (nav.href === pathname) {
        activeParent = nav.label;
      }

      // Check nested items
      if (nav.items && nav.items.length > 0) {
        nav.items.forEach((item) => {
          if (item.href === pathname) {
            activeParent = nav.label;
            activeChild = item.label;
          }
        });
      }
    });

    return {
      pathname,
      activeParent,
      activeChild,
    };
  }, [pathname, navigationLinks]);

  return { active };
}
