import { projects } from "@/src/data/projects";
import Container from "../layout/Container";
import ProjectsGrid from "../projects/ProjectsGrid";
import styles from "./Projects.module.css"

export default function Projects() {
    return (
        <section id="projects" className={styles.projects} aria-labelledby="projects-heading">
            <Container>
                <div className={styles.projectsInner}>
                    <h2 id="projects-heading" className={styles.projectsHeadline} >Projects</h2>
                    <ProjectsGrid projects={projects}/>
                </div>
            </Container>
        </section>
    )
}