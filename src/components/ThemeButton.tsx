import { Link } from "react-router-dom";

const ThemeButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={href}
      className="rounded-full px-6 py-3 text-sm font-medium text-white transition-colors"
      style={{
        backgroundColor: "var(--color-accent)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--color-accent-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "var(--color-accent)";
      }}
    >
      {children}
    </Link>
  );
};

export default ThemeButton;
