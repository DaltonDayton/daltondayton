import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Dalton Dayton
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Software Test Engineer → Developer
          </p>
        </div>

        <p className="max-w-lg text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Transitioning from test engineering to full-stack development.
          Building with React, C#, and Ruby on Rails.
        </p>

        <Link
          href="/projects"
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          View Projects
        </Link>
      </div>
    </main>
  );
}
