// src/api/database.types.ts
export type WpAcfProject = {
  slug: string;
  title: string;
  project_role: string;
  project_stack: string;
  project_year: number;
  project_live_url?: string;
  project_github_url?: string;
  project_summary: string;
  cs_problem: string;
  cs_goal: string;
  cs_solution: string;
  cs_architecture?: string;
  cs_implementation?: string;
  cs_challenges?: string;
  cs_testing_quality?: string;
  cs_results?: string;
  cs_learnings: string;
  cs_next_steps?: string;
  portfolio_featured: boolean;
  portfolio_card_teaser?: string;
  portfolio_sort_order: number;
  portfolio_hero_image?: string;
};

export type WpProject = {
  id: number;
  slug: string;
  title: { rendered: string };
  acf: WpAcfProject;
  modified: string;
  featured_image_url: string;
};
