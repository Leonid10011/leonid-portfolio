// src/domain/project.ts

export type Project = {
  id: number;
  slug: string;
  title: string;
  role: string;
  stack: string[];
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  summary: string;
  problem: string;
  goal: string;
  solution: string;
  architecture?: string;
  implementation?: string;
  challenges?: string;
  testingQuality?: string;
  results?: string;
  learnings: string;
  nextSteps?: string;
  featured: boolean;
  cardTeaser?: string;
  sortOrder: number;
  heroImage?: string;
  featured_image_url?: string;
};
