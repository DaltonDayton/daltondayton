import ProjectCard from "../components/ProjectCard";
import usePageTitle from "../hooks/usePageTitle";
import type { Project } from "../types";

const PROJECTS: Project[] = [
  {
    slug: "quill",
    name: "Quill",
    summary:
      "A declarative dotfiles and machine-setup tool written in Go. TOML modules describe packages, config symlinks, and services; host profiles apply them across Arch Linux and WSL through a Bubble Tea TUI that installs everything from a single bootstrap script.",
    image: "/images/quill.png",
    tech: ["Go", "Bubble Tea", "TOML", "Linux"],
    role: "Solo dev",
    links: {
      repo: "https://github.com/DaltonDayton/dotfiles",
    },
  },
  {
    slug: "react-portfolio",
    name: "React Portfolio",
    summary: "The portfolio you're currently viewing.",
    image: "/images/Portfolio.png",
    tech: ["React", "TypeScript", "Vite", "React Router", "Tailwind CSS"],
    role: "Solo dev",
    links: {
      demo: "https://www.daltondayton.com",
      repo: "https://github.com/daltondayton/daltondayton",
    },
  },
  {
    slug: "pomera-pomodoro-timer",
    name: "Pomera",
    summary:
      "A cross-platform Pomodoro timer built with Flutter. Configurable work and break intervals, audio and system notifications, a wakelock to keep the screen alive, and a circular countdown display.",
    image: "/images/pomera.png",
    tech: ["Flutter", "Dart", "Riverpod"],
    role: "Solo dev",
    links: {
      repo: "https://github.com/DaltonDayton/pomodorotimer",
    },
  },
  {
    slug: "asteroids",
    name: "Asteroids",
    summary:
      "A clone of the classic Asteroids arcade game written in Python with Pygame. Control a spaceship to move and shoot, destroying asteroids to survive as long as possible.",
    image: "/images/asteroids.png",
    tech: ["Python", "Pygame"],
    role: "Solo dev",
    links: {
      repo: "https://github.com/DaltonDayton/asteroids",
    },
  },
];

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
