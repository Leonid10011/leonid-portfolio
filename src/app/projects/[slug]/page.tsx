import { notFound } from "next/navigation";

import Container from "@/src/components/layout/Container";
import ProjectDetails from "@/src/components/projects/ProjectDetails";
import styles from "./page.module.css";
import { getProjectBySlug } from "@/src/lib/wp/project";
import { mapWpProject } from "@/src/lib/wp/mapper";


export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const wp = await getProjectBySlug((await params).slug);
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
