import { MetadataRoute } from 'next'
import { getProjectsSafe } from "@/src/lib/wp/project";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dein-portfolio.de";

  // 1. Hol dir alle Projekte von WordPress
  const wpProjects = await getProjectsSafe();
  
  // 2. Erstelle die Einträge für deine Projekte
  const projectEntries = wpProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.modified || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 3. Statische Seiten (Home, Kontakt, etc.) hinzufügen
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectEntries,
  ];
}
