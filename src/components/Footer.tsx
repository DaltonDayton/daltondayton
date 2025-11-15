export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Dalton Dayton. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
