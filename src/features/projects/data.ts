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
    slug: "rails-react-app",
    name: "Rails + React SaaS Demo",
    summary: "Multi-tenant app with auth, billing, and background jobs.",
    tech: ["Ruby on Rails", "React", "PostgreSQL", "Redis"],
    role: "Solo dev",
    links: {
      demo: "https://your-rails-demo.com",
      repo: "https://github.com/you/rails-react-saas",
    },
  },
  {
    slug: "dotnet-microservice",
    name: "C# Microservice + React Dashboard",
    summary: "Event-driven service with a small React admin UI.",
    tech: ["C#", ".NET", "React", "Docker"],
    role: "Solo dev",
    links: {
      demo: "https://your-dotnet-demo.com",
      repo: "https://github.com/you/dotnet-react-service",
    },
  },
  {
    slug: "csharp-portfolio",
    name: "C# Portfolio",
    summary: "A portfolio built with C# and .NET.",
    tech: ["C#", ".NET", "React", "Docker"],
    role: "Solo dev",
    links: {
      demo: "https://your-csharp-demo.com",
      repo: "https://github.com/you/csharp-portfolio",
    },
  },
];
