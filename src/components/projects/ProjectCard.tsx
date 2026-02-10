import { Project } from "@/src/types/projects";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.projectCard}>
      <Link
        className={styles.mediaLink}
        href={`/projects/${project.slug}`}
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

        <div className={styles.meta}>
          <div className={styles.metaRow}>
            <span className={styles.label}>Role:</span>
            <span className={styles.value}>{project.role}</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.label}>Stack:</span>
            <span className={styles.value}>{project.stack}</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.label}>Year:</span>
            <span className={styles.value}>{project.year}</span>
          </div>
        </div>

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
