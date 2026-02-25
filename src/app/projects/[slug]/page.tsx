import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";
import Container from "@/src/components/layout/Container";
import ProjectDetails from "@/src/components/projects/ProjectDetails";
import styles from "./page.module.css";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const {slug} = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <Container>
      <main className={styles.main}>
        <ProjectDetails project={project} />
      </main>
    </Container>
  );
}
