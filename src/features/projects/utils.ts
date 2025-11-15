// src/features/projects/utils.ts
import { projects } from "./data";

export const getProjects = () => projects;

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
