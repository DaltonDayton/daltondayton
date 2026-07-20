import ProjectCard from "../components/ProjectCard";
import usePageTitle from "../hooks/usePageTitle";
import { PROJECTS } from "../data";

const ProjectsPage = () => {
  usePageTitle("Projects | Dalton Dayton");

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-16 flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Projects
        </h1>
        <p className="text-lg text-secondary">
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
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
