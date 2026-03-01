import { Project } from "@/src/lib/wp/mapper";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsGrid.module.css";

type ProjectsGridProps = {
    projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {

    return(
        <div className={styles.projectsGrid}>
            {projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
            ))}
        </div>
    );
}