import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Dalton Dayton
        </Link>
      </div>
    </header>
  );
}
