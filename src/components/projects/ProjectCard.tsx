import { Project } from "@/src/types/projects";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";
import ProjectMeta from "./ProjectMeta";

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
        <div className={styles.media} aria-hidden="true" />
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link
            href={`/projects/${project.slug}`}
            className={styles.titleLink}
          >
            {project.title}
          </Link>
        </h3>
        <ProjectMeta project={project} />
        <div className={styles.links}>
          {project.liveUrl && (
            <a
              className={styles.link}
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              {new URL(project.liveUrl).host}
            </a>
          )}

          {project.githubUrl && (
            <a
              className={styles.link}
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              {new URL(project.githubUrl).host}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
