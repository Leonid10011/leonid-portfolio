import Link from "next/link";
import styles from "./ProjectCard.module.css";
import ProjectMeta from "./ProjectMeta";

import Image from "next/image";
import { Project } from "@/src/domain/project";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.projectCard}>
      <Link
        className={styles.mediaLink}
        href={`/projects/${project.slug}`}
        aria-label="View project case study."
      >
        <div className={styles.media} aria-hidden="true">
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
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link href={`/projects/${project.slug}`} className={styles.titleLink}>
            {project.title}
          </Link>
        </h3>
        <ProjectMeta project={project} />
        <div className={styles.links}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className={styles.cardLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <ExternalLink />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className={styles.cardLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <Github />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
