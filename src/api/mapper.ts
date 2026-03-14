// src/api/mapper.ts
import { Project } from "../domain/project";
import { WpProject } from "./wordpressTypes";

export function mapWpProject(p: WpProject): Project {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title?.rendered || p.acf?.title || p.slug,
    role: p.acf?.project_role || "",
    stack: p.acf.project_stack.split("\n").map((s) => s.trim()) || [],
    year: p.acf?.project_year ? String(p.acf.project_year) : "",
    liveUrl: p.acf?.project_live_url || undefined,
    githubUrl: p.acf?.project_github_url || undefined,
    summary: p.acf?.project_summary || "",
    problem: p.acf?.cs_problem || "",
    goal: p.acf?.cs_goal || "",
    solution: p.acf?.cs_solution || "",
    architecture: p.acf?.cs_architecture || undefined,
    implementation: p.acf?.cs_implementation || undefined,
    challenges: p.acf?.cs_challenges || undefined,
    testingQuality: p.acf?.cs_testing_quality || undefined,
    results: p.acf?.cs_results || undefined,
    learnings: p.acf?.cs_learnings || "",
    nextSteps: p.acf?.cs_next_steps || undefined,
    featured: p.acf?.portfolio_featured || false,
    cardTeaser: p.acf?.portfolio_card_teaser || undefined,
    sortOrder: p.acf?.portfolio_sort_order || 0,
    heroImage: p.acf?.portfolio_hero_image || undefined,
    featured_image_url: p.featured_image_url || undefined,
  };
}
