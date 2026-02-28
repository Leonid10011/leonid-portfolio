import { Project } from "@/src/lib/wp/mapper";
import styles from "./ProjectDetails.module.css";
import ProjectMeta from "./ProjectMeta";
import Link from "next/link";
import ImplementationItems from "./Implementationtems";

export default function ProjectDetails ({project} : {project: Project}) {
    return (
        <div className={styles.inner}>
            <h1 className={styles.title}>{project.title}</h1>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <p className={styles.heroSubline}>{project.summary}</p>
                    <ProjectMeta project={project} />
                    <div className={styles.ctas}>
                        <Link className="btn btnPrimary" href={`/projects/${project.slug}`}>{"Website"}</Link>
                        <Link className="btn btnSecondary" href={`/projects/${project.slug}`}>{"Github"}</Link>
                    </div>
                </div>
                <div className={styles.heroMedia}>
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
                <div className={styles.architectureMedia}>
                
                </div>
            </section>

            <section className={`${styles.section}`}>
                <h2>Frontend Implementation</h2>
                <ImplementationItems items={project.implementationItems}/>
            </section>

            <section className={`${styles.section}`}>
                <h2>Learnings</h2>
                <p>{project.learnings}</p>  
            </section>
        </div>
    )
}