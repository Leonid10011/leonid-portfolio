import { Project } from "@/src/lib/wp/mapper";
import styles from "./ProjectDetails.module.css";
import ProjectMeta from "./ProjectMeta";
import Image from "next/image";
import Button from "../ui/Button";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className={styles.inner}>
      {/* Hero Section */}
      <h1 className={styles.title}>{project.title}</h1>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubline}>{project.summary}</p>
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

      {/* TL;DR Section */}
      <section className={`${styles.section}`}>
        <h2>Summary</h2>
        <div className={styles.summary}>
          <p>
            <strong>Problem:</strong> {project.problem}
          </p>
          <p>
            <strong>Lösung:</strong> {project.solution}
          </p>
          <p>
            <strong>Ergebnis:</strong>{" "}
            {project.results || "Siehe Details unten"}
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className={`${styles.section}`}>
        <h2>Problem</h2>
        <p>{project.problem}</p>
      </section>

      {/* Goal Section */}
      <section className={`${styles.section}`}>
        <h2>Ziel</h2>
        <p>{project.goal}</p>
      </section>

      {/* Role Section */}
      <section className={`${styles.section}`}>
        <h2>Meine Rolle</h2>
        <p>{project.role}</p>
      </section>

      {/* Solution Section */}
      <section className={`${styles.section}`}>
        <h2>Lösung</h2>
        <p>{project.solution}</p>
      </section>

      {/* Architecture Section */}
      {project.architecture && (
        <section className={`${styles.section}`}>
          <h2>Architektur & Technische Entscheidungen</h2>
          <p>{project.architecture}</p>
          {project.implementation && (
            <>
              <h3>Implementierung</h3>
              <p>{project.implementation}</p>
            </>
          )}
        </section>
      )}

      {/* Challenges Section */}
      {project.challenges && (
        <section className={`${styles.section}`}>
          <h2>Herausforderungen</h2>
          <p>{project.challenges}</p>
        </section>
      )}

      {/* Quality Section */}
      {project.testingQuality && (
        <section className={`${styles.section}`}>
          <h2>Qualität & Validierung</h2>
          <p>{project.testingQuality}</p>
        </section>
      )}

      {/* Results Section */}
      {project.results && (
        <section className={`${styles.section}`}>
          <h2>Ergebnis</h2>
          <p>{project.results}</p>
        </section>
      )}

      {/* Learnings Section */}
      <section className={`${styles.section}`}>
        <h2>Learnings</h2>
        <p>{project.learnings}</p>
      </section>

      {/* Next Steps Section */}
      {project.nextSteps && (
        <section className={`${styles.section}`}>
          <h2>Next Steps</h2>
          <p>{project.nextSteps}</p>
        </section>
      )}
    </div>
  );
}
