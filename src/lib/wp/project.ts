// src/lib/wp/project.ts
import { WpAcfProject, WpProject } from "@/src/types/projects";
import { fetchJson } from "./client";

export async function getProjects(): Promise<WpProject[]> {
  return fetchJson<WpProject[]>("/project?per_page=10", {
    next: {
      revalidate: 60, // Revalidate every 60 seconds
      tags: ["projects"], // Tag for cache invalidation
    },
  });
}

export async function getProjectBySlug(
  slug: string,
): Promise<WpProject | null> {
  const items = await fetchJson<WpProject[]>(
    `/project?slug=${encodeURIComponent(slug)}`,
    {
      next: {
        revalidate: 60,
        tags: ["projects", `project:${slug}`],
      },
    },
  );

  return items[0] ?? null;
}

export async function getProjectsSafe(): Promise<WpProject[]> {
  try {
    const result = await fetchJson<WpProject[]>("/project?per_page=10", {
      next: {
        revalidate: 60, // Revalidate every 60 seconds
        tags: ["projects"], // Tag for cache invalidation
      },
    });

    console.log("[WP] Fetched projects:", result);

    return result;
  } catch (error) {
    console.error("[WP] Failed to fetch projects:", error);
    return [];
  }
}

export async function getProjectBySlugSafe(
  slug: string,
): Promise<WpProject | null> {
  try {
    const items = await fetchJson<WpProject[]>(
      `/project?slug=${encodeURIComponent(slug)}`,
      {
        next: {
          revalidate: 60,
          tags: ["projects", `project:${slug}`],
        },
      },
    );

    return items[0] ?? null;
  } catch (error) {
    console.error(`[WP] Failed to fetch project with slug "${slug}":`, error);
    return null;
  }
}
