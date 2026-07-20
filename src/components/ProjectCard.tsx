import type { Project } from "../types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Image or placeholder */}
      {project.image ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background to-accent" />
      )}

      {/* Content */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          {project.name}
        </h2>

        <p className="text-lg leading-relaxed text-secondary">
          {project.summary}
        </p>

        {/* Tech stack */}
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

        {/* Links */}
        <div className="flex gap-4">
          {project.links.demo && (
            <a
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
            </a>
          )}
          {project.links.repo && (
            <a
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
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
