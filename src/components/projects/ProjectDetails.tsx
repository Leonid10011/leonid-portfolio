import { Project } from "@/src/lib/wp/mapper";
import styles from "./ProjectDetails.module.css";
import ProjectMeta from "./ProjectMeta";
import Image from "next/image";
import Button from "../ui/Button";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className={styles.inner}>
      <h1 className={styles.title}>{project.title}</h1>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubline}>{project.summary}</p>
          <ProjectMeta project={project} />
          <div className={styles.ctas}>
            <Button
              href={project.liveUrl || "#"}
              text="Website"
              variant="primary"
            />
            <Button
              href={project.githubUrl || "#"}
              text="Github"
              variant="secondary"
            />
          </div>
        </div>
        <div className={styles.heroMedia}>
          <Image
            src={project.featured_image_url || "/placeholder.png"}
            alt={
              project.featured_image_url
                ? `Featured image for ${project.title}`
                : "Placeholder image"
            }
            fill
          />
        </div>
      </div>

      <section className={`${styles.section}`}>
        <h2>Problem & Goal</h2>
        <p>{project.problem}</p>
      </section>

      <section className={`${styles.section}`}>
        <h2>Solution Apporoach</h2>
        <p>{project.solution}</p>
      </section>

      <section className={`${styles.section}`}>
        <h2>Architecture & Structure</h2>
        <div className={styles.architectureMedia}></div>
      </section>

      <section className={`${styles.section}`}>
        <h2>Frontend Implementation</h2>
        {project.implementation}
      </section>

      <section className={`${styles.section}`}>
        <h2>Learnings</h2>
        <p>{project.learnings}</p>
      </section>
    </div>
  );
}
