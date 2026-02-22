import { Project } from "@/src/types/projects"
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsGrid.module.css";
import { Fragment } from "react/jsx-runtime";

type ProjectsGridProps = {
    projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {

    return(
        <div className={styles.projectsGrid}>
            {projects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} />

            ))}
        </div>
    );
}