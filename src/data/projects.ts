export type Project = {
  slug: string;
  title: string;
  role: string;
  stack: string;
  year: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "aurea-gym",
    title: "Aurea Gym (Headless WP)",
    role: "Frontend / Architecture / UI",
    stack: "Next.js, TypeScript, WordPress (Headless)",
    year: "2026",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourname/aurea",
  },
];
