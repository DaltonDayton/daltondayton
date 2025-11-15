import type { Metadata } from "next";
import { getProjects } from "@/features/projects/utils";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Dalton Dayton",
  description:
    "My software development projects showcasing React, C#, and Ruby on Rails",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-16 flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Projects
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          A collection of projects demonstrating full-stack development skills
        </p>
      </div>

      <hr
        className="mb-16"
        style={{
          border: "none",
          height: "1px",
          background: "var(--color-accent)",
        }}
      />

      <div className="flex flex-col gap-24">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
