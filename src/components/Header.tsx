"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6">
        <nav className="flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-2 shadow-lg">
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.href} className="flex items-center">
                {index > 0 && (
                  <div className="mx-2 h-6 w-px bg-border" />
                )}
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-surface-active text-primary"
                      : "text-secondary hover:bg-surface-hover hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
          <div className="mx-2 h-6 w-px bg-border" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
