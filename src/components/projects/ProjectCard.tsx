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
        className={styles.projectCard__mediaLink}
        href={`/projects/${project.slug}`}
      >
        <div className={styles.projectCard__media} aria-hidden="true" />
      </Link>
      <div className={styles.projectCard__body}>
        <h3 className={styles.projectCard__title}>
          <Link
            href={`/projects/${project.slug}`}
            className="projectCard__titleLink"
          >
            {project.title}
          </Link>
        </h3>

        <dl className={styles.projectCard__meta}>
          <div className={styles.projectCard__metaRow}>
            <dt className={styles.projectCard__label}>Role:</dt>
            <dd className={styles.projectCard__value}>{project.role}</dd>
          </div>
          <div className={styles.projectCard__metaRow}>
            <dt className={styles.projectCard__label}>Stack:</dt>
            <dd className={styles.projectCard__value}>{project.stack}</dd>
          </div>
          <div className={styles.projectCard__metaRow}>
            <dt className={styles.projectCard__label}>Year:</dt>
            <dd className={styles.projectCard__value}>{project.year}</dd>
          </div>
        </dl>

        <div className={styles.projectCard__links}>
          {project.liveUrl && (
            <a
              className={styles.projectCard__link}
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              {new URL(project.liveUrl).host}
            </a>
          )}

          {project.githubUrl && (
            <a
              className={styles.projectCard__link}
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
