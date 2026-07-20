import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6">
        <nav className="flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-2 shadow-lg">
          {links.map((link, index) => (
            <div key={link.to} className="flex items-center">
              {index > 0 && <div className="mx-2 h-6 w-px bg-border" />}
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-surface-active text-primary"
                      : "text-secondary hover:bg-surface-hover hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </div>
          ))}
          <div className="mx-2 h-6 w-px bg-border" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
