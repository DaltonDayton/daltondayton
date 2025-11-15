import Link from "next/link";

export default function ThemeButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-full bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600"
    >
      {children}
    </Link>
  );
}
