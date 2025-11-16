import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "nextjs-portfolio",
    name: "Next.js Portfolio",
    summary: "The portfolio you're currently viewing.",
    image: "/images/Portfolio.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "Solo dev",
    links: {
      demo: "https://www.daltondayton.com",
      repo: "https://github.com/daltondayton/daltondayton",
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
      "FastAPI",
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
