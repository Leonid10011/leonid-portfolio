
import { Project } from "@/src/lib/wp/mapper";
import styles from "./ProjectMeta.module.css";

export default function ProjectMeta ({project} : {project: Project}) {

    return (
        <div className={styles.meta}>
            <div className={styles.metaRow}>
            <span className={styles.label}>Role:</span>
            <span className={styles.value}>{project.role}</span>
            </div>
            <div className={styles.metaRow}>
            <span className={styles.label}>Stack:</span>
            <span className={styles.value}>{Array.isArray(project.stack) ? project.stack.join(", ") : project.stack}</span>
            </div>
            <div className={styles.metaRow}>
            <span className={styles.label}>Year:</span>
            <span className={styles.value}>{project.year}</span>
            </div>
        </div>
    )
}