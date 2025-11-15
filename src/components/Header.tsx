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
        <nav className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.href} className="flex items-center">
                {index > 0 && (
                  <div className="mx-2 h-6 w-px bg-zinc-200 dark:bg-zinc-800" />
                )}
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
          <div className="mx-2 h-6 w-px bg-zinc-200 dark:bg-zinc-800" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
