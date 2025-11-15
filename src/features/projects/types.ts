export type Project = {
  slug: string;
  name: string;
  summary: string;
  tech: string[];
  role: string;
  links: {
    demo?: string;
    repo?: string;
  };
};
