import { Project } from "@/src/lib/wp/mapper";
import styles from "./ProjectDetails.module.css";
import ProjectMeta from "./ProjectMeta";
import Image from "next/image";
import Button from "../ui/Button";
import ProjectSection from "./projectDetails/ProjectSection";

export default function ProjectDetails({ project }: { project: Project }) {
  const sections = [
    { title: "Problem", html: project.problem },
    { title: "Solution", html: project.solution },
    {
      title: "Architecture & Technical Decisions",
      html: project.architecture,
    },
    { title: "Challenges", html: project.challenges },
    { title: "Quality & Validation", html: project.testingQuality },
    { title: "Results", html: project.results },
    { title: "Learnings", html: project.learnings },
    { title: "Next Steps", html: project.nextSteps },
  ].filter((section) => Boolean(section.html));

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
              <Button
                href={project.liveUrl}
                text="Live Demo"
                variant="primary"
              />
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

      {sections.map((section, idx) => (
        <ProjectSection
          key={section.title}
          title={section.title}
          html={section.html}
          index={idx + 1}
        />
      ))}
    </div>
  );
}
