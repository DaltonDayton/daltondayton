export const metadata = {
  title: "About | Dalton Dayton",
  description: "Software Test Engineer transitioning to Software Development",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            About
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            From testing software to building it
          </p>
        </div>

        <div className="flex flex-col gap-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            I'm a Senior Software Test Engineer making the transition to
            full-stack software development. My background in quality assurance
            has given me a deep understanding of what makes software reliable,
            maintainable, and user-friendly.
          </p>

          <p>
            My testing background means I think about edge cases, write
            comprehensive tests, and build software that's designed to be
            maintained and scaled.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "C#",
              ".NET",
              "Ruby on Rails",
              "PostgreSQL",
              "Docker",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
