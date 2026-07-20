import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../data";
import usePageTitle from "../hooks/usePageTitle";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  usePageTitle(
    project ? `${project.name} | Dalton Dayton` : "Project Not Found",
  );

  if (!project) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Project not found
        </h1>
        <p className="mt-4 text-lg text-secondary">
          No project matches this address.
        </p>
        <Link
          to="/projects"
          className="mt-8 inline-block text-sm font-medium"
          style={{ color: "var(--color-accent)" }}
        >
          ← Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <div className="flex flex-col gap-8">
        <Link
          to="/projects"
          className="text-sm font-medium"
          style={{ color: "var(--color-accent)" }}
        >
          ← Back to projects
        </Link>

        {project.image && (
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border">
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-primary">
            {project.name}
          </h1>
          <p className="text-sm text-secondary">{project.role}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full from-surface-badge-from to-surface-badge-to bg-gradient-to-br px-3 py-1 text-sm font-medium text-text-badge"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-6 text-lg leading-relaxed text-secondary">
          {(project.description ?? [project.summary]).map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <div className="flex gap-4">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--color-accent)" }}
            >
              View Demo →
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--color-accent)" }}
            >
              View Code ↗
            </a>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetailPage;
