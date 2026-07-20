import ProjectCard from "../components/ProjectCard";
import usePageTitle from "../hooks/usePageTitle";
import type { Project } from "../types";

const PROJECTS: Project[] = [
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
  {
    slug: "More-to-come",
    name: "...",
    summary:
      "Placeholder while site is under construction. Here's some stuff I know",
    tech: [
      // === Languages ===
      "C#",
      "Python",
      "TypeScript",
      "Ruby",
      // === Frontend Frameworks & Libraries ===
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "Tailwind CSS",
      // "Redux",
      "GraphQL",
      // === Backend Frameworks & Libraries ===
      ".NET",
      "Ruby on Rails",
      "Node.js",
      "Express",
      // "FastAPI",
      "Django",
      // "Flask",
      // === Mobile ===
      // "React Native",
      // "Flutter",
      // "Swift",
      // "Kotlin",
      // === Database ===
      "PostgreSQL",
      "MongoDB",
      "Redis",
      // === Cloud & Infrastructure ===
      "AWS",
      "Google Cloud",
      // "DigitalOcean",
      "Azure DevOps",
      // === DevOps & Deployment ===
      "Docker",
      "Vercel",
      "Kubernetes",
      // === CI/CD ===
      "GitHub Actions",
      // "GitLab CI",
      // "Jenkins",
      // === Version Control ===
      "Git",
      // === Testing ===
      "Selenium",
      "Playwright",
      // "React Testing Library",
      "Postman",
      // "Jest",
      // "Cypress",
      // === Monitoring & Analytics ===
      // "New Relic",
      "Splunk",
      "DataDog",
      // "Sentry",
      // === Package Managers ===
      "npm",
      "yarn",
      "pip",
      "NuGet",
      // === Build Tools ===
      "Webpack",
      "Vite",
      // "Babel",
      // === Design Tools ===
      // "Figma",
      // "Adobe XD",
      // "Sketch",
    ],
    role: "Solo dev",
    links: {
      demo: "https://www.daltondayton.com/projects",
      repo: "https://www.daltondayton.com/projects",
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
