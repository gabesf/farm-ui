"use client";
/** @jsxRuntime automatic */

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface TabItem {
  href: string;
  label: string;
  count?: number;
}

export function Tabs({ items }: { items: TabItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="flex overflow-x-auto border-b border-borda px-5">
      {items.map((tab) => {
        // Exact match for the first tab, prefix match for others
        const isFirst = tab === items[0];
        const active = isFirst
          ? pathname === tab.href
          : pathname.startsWith(tab.href);

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`
              shrink-0 px-2 py-3 min-h-11 flex items-center
              font-titulo font-semibold text-overline uppercase tracking-[.03em]
              whitespace-nowrap transition-colors
              ${
                active
                  ? "border-b-2 border-texto text-texto"
                  : "text-texto-secundario"
              }
            `}
          >
            {tab.label}
            {tab.count != null && tab.count > 0 && (
              <span
                className="ml-1 w-1.5 h-1.5 rounded-full bg-erro inline-block"
                aria-label={`${tab.count}`}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
