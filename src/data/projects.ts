import { Project } from "../types/projects";

export const projects: Project[] = [
  {
    slug: "aurea-gym",
    title: "Aurea Gym (Headless WP)",
    role: "Frontend / Architecture / UI",
    stack: ["Next.js, TypeScript, WordPress (Headless)"],
    year: 2026,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourname/aurea",

    summary: "Headless website for a fitness studio.",
    problem: "The existing site was slow and hard to maintain.",
    solution: "I built a headless architecture using Next.js.",
    architecture: "Next.js frontend + WordPress CMS via REST API.",
    frontend: "Component-based UI with server components.",
    learnings: "Clear data models and performance-first thinking.",
  },
];
