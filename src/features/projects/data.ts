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
    name: "More to come",
    summary: "Placeholder while site is under construction",
    tech: [
      "C#",
      ".NET",
      "React",
      "Ruby on Rails",
      "PostgreSQL",
      "Docker",
      "Vercel",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "Selenium",
      "Playwright",
      "Git",
      "Azure DevOps",
      "React Testing Library",
      "Postman",
    ],
    role: "Solo dev",
    links: {
      demo: "https://your-rails-demo.com",
      repo: "https://github.com/you/rails-react-saas",
    },
  },
];
