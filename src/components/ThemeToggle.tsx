import { useTheme } from "./theme-context";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full px-2 py-2 text-sm font-medium text-secondary transition-colors hover:bg-surface-hover hover:text-primary sm:px-4"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span>{theme === "light" ? "☀️" : "🌙"}</span>
      <span className="hidden sm:inline">
        {theme === "light" ? "Light" : "Dark"}
      </span>
    </button>
  );
};

export default ThemeToggle;
