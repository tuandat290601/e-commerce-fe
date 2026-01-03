"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminBreadcrumbs() {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = segments.map((seg, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    const title =
      seg === "admin"
        ? "Admin"
        : seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return { href, title };
  });

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      {crumbs.map((c, i) => (
        <span key={c.href} className="inline-flex items-center">
          {i > 0 && <span className="mx-2 text-muted-foreground">/</span>}
          <Link
            href={c.href}
            className={
              i === crumbs.length - 1
                ? "font-medium text-sidebar-primary"
                : "hover:underline"
            }
          >
            {c.title}
          </Link>
        </span>
      ))}
    </nav>
  );
}
