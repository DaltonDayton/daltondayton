"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Intentional: Prevent hydration mismatch between server and client
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-secondary">
        <span>☀️</span>
        <span className="hidden sm:inline">Light</span>
      </div>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-secondary transition-colors hover:bg-surface-hover hover:text-primary"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span>{theme === "light" ? "☀️" : "🌙"}</span>
      <span className="hidden sm:inline">
        {theme === "light" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
