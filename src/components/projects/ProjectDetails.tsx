import { Project } from "@/src/lib/wp/mapper";
import styles from "./ProjectDetails.module.css";
import ProjectMeta from "./ProjectMeta";
import Image from "next/image";
import Button from "../ui/Button";

function Section({
  index,
  title,
  html,
}: {
  index: string;
  title: string;
  html?: string;
}) {
  if (!html) return null;

  return (
    <section className={styles.section}>
      <p className={styles.kicker}>{index}</p>
      <h2>{title}</h2>
      <div
        className={styles.sectionContent}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className={styles.inner}>
      <h1 className={styles.title}>{project.title}</h1>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div
            className={styles.heroSubline}
            dangerouslySetInnerHTML={{ __html: project.summary }}
          />
          <ProjectMeta project={project} />
          <div className={styles.ctas}>
            {project.liveUrl && (
              <Button href={project.liveUrl} text="Website" variant="primary" />
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                text="Github"
                variant="secondary"
              />
            )}
          </div>
        </div>

        <div className={styles.heroMedia}>
          <Image
            src={
              project.heroImage ||
              project.featured_image_url ||
              "/placeholder.png"
            }
            alt={
              project.heroImage || project.featured_image_url
                ? `Featured image for ${project.title}`
                : "Placeholder image"
            }
            fill
          />
        </div>
      </div>

      <Section index="01" title="Problem" html={project.problem} />
      <Section index="02" title="Solution" html={project.solution} />
      <Section
        index="03"
        title="Architecture & Technical Decisions"
        html={project.architecture}
      />
      <Section index="04" title="Challenges" html={project.challenges} />
      <Section
        index="05"
        title="Quality & Validation"
        html={project.testingQuality}
      />
      <Section index="06" title="Results" html={project.results} />
      <Section index="07" title="Learnings" html={project.learnings} />
      <Section index="08" title="Next Steps" html={project.nextSteps} />
    </div>
  );
}
