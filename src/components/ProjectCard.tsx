"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/features/projects/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Image or placeholder */}
      {project.image ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-stone-200 dark:border-stone-800">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900" />
      )}

      {/* Content */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          {project.name}
        </h2>

        <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-400">
          {project.summary}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-stone-100 px-3 py-1 text-sm font-medium text-stone-700 dark:bg-stone-800 dark:text-stone-300"
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
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--color-accent)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-accent-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-accent)";
              }}
            >
              View Demo →
            </Link>
          )}
          {project.links.repo && (
            <Link
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--color-accent)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-accent-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-accent)";
              }}
            >
              View Code ↗
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
