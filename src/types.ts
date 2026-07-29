export interface Project {
  slug: string;
  name: string;
  summary: string;
  description?: string[];
  aiUsage?: 0 | 1 | 2 | 3;
  aiNote?: string;
  image?: string;
  tech: string[];
  role: string;
  links: {
    demo?: string;
    repo?: string;
  };
}
