// src/lib/wp/project.ts
import type { ImplementationItem, WpAcfProject, WpProject } from "@/src/types/projects";

export type Project = {
  id: number;
  slug: string;
  title: string;
  role?: string;
  stack: string[];
  year?: string;
  liveUrl?: string;
  githubUrl?: string;
  summary?: string;
  problem?: string;
    solution?: string;
    architecture?: string;
    frontend?: string;
    implementationItems: Array<{ description: string; date?: string; image?: string }>;
    learnings?: string;
    featured_image_url?: string;
};

export function mapWpProject(p: WpProject): Project {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title?.rendered || p.acf?.title || p.slug,
    role: p.acf?.role || undefined,
    stack: Array.isArray(p.acf?.stack) ? p.acf.stack : [],
    year: p.acf?.year ? String(p.acf.year) : undefined,
    liveUrl: p.acf?.liveUrl || undefined,
    githubUrl: p.acf?.githubUrl || undefined,
    summary: p.acf?.summary || undefined,
    problem: p.acf?.problem || undefined,
    solution: p.acf?.solution || undefined,
    architecture: p.acf?.architecture || undefined,
    frontend: p.acf?.frontend || undefined,
    implementationItems: Array.isArray(p.acf?.implementationItems) ? p.acf.implementationItems : [],
    learnings: p.acf?.learnings || undefined,
    featured_image_url: p.featured_image_url || undefined,
  };
}