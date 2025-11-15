import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Dalton Dayton",
  description: "Software Test Engineer transitioning to Software Development",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-primary">
            About
          </h1>
          <p className="text-xl text-secondary">
            From testing software to building it
          </p>
        </div>

        <div className="flex flex-col gap-6 text-lg leading-relaxed text-secondary">
          <p>
            I&apos;m a Senior Software Test Engineer making the transition to
            full-stack software development. My background in quality assurance
            has given me a deep understanding of what makes software reliable,
            maintainable, and user-friendly.
          </p>
          <p>
            My testing background means I think about edge cases, write
            comprehensive tests, and build software that&apos;s designed to be
            maintained and scaled.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-primary">
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
                className="rounded-full from-surface-badge-from to-surface-badge-to bg-gradient-to-br px-4 py-2 text-sm font-medium text-text-badge"
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
