// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";

import Container from "@/src/components/layout/Container";
import ProjectDetails from "@/src/components/projects/ProjectDetails";
import styles from "./page.module.css";
import {
  getProjectBySlug,
  getProjectsSafe,
} from "@/src/repo/projectRepository";

import { Metadata } from "next";
import { mapWpProject } from "@/src/api/mapper";

export async function generateStaticParams() {
  const wpProjects = await getProjectsSafe();
  const projects = wpProjects.map(mapWpProject);
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Projekt nicht gefunden" };
  }

  // Nutze hier deine gemappten Daten oder die rohen WP-Daten
  return {
    title: `${project.title.rendered} | Dein Name Portfolio`,
    description:
      project.acf?.project_summary ||
      "Ein spannendes Projekt aus meinem Portfolio.",
    openGraph: {
      title: project.title.rendered,
      description: project.acf?.project_summary,
      images: [project.featured_image_url || "/og-image.png"],
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const wp = await getProjectBySlug(slug);
  if (!wp) return notFound();

  const project = mapWpProject(wp);

  return (
    <Container>
      <main className={styles.main}>
        <ProjectDetails project={project} />
      </main>
    </Container>
  );
}
