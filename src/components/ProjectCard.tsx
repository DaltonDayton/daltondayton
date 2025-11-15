import Link from "next/link";
import { Project } from "@/features/projects/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Image placeholder */}
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900" />

      {/* Content */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {project.name}
        </h2>

        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.summary}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.links.demo && (
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-400"
            >
              View Demo →
            </Link>
          )}
          {project.links.repo && (
            <Link
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-400"
            >
              View Code ↗
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
