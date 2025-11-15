import { getProjects } from "@/features/projects/utils";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-sm text-slate-300">
        A selection of things I’ve built in Rails, C#, and React.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-4"
          >
            <h2 className="text-xl font-medium">
              <Link href={`/projects/${project.slug}`}>{project.name}</Link>
            </h2>
            <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
