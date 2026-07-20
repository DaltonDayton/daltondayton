export interface Project {
  slug: string;
  name: string;
  summary: string;
  description?: string[];
  image?: string;
  tech: string[];
  role: string;
  links: {
    demo?: string;
    repo?: string;
  };
}
