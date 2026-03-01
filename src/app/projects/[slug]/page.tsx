// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";

import Container from "@/src/components/layout/Container";
import ProjectDetails from "@/src/components/projects/ProjectDetails";
import styles from "./page.module.css";
import { getProjectBySlug, getProjectsSafe } from "@/src/lib/wp/project";
import { mapWpProject } from "@/src/lib/wp/mapper";


export async function generateStaticParams() {
  const wpProjects = await getProjectsSafe();
  const projects = wpProjects.map(mapWpProject);  
  return projects.map((project) => ({
    slug: project.slug,
  }));
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
