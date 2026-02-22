import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";
import Container from "@/src/components/layout/Container";
import ProjectDetails from "@/src/components/projects/ProjectDetails";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}


export default async function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <Container>
      <main className={styles.main}>
        <ProjectDetails project={project}/>
      </main>
    </Container>
  );
}
