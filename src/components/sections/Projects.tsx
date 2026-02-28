import { getProjectsSafe } from "@/src/lib/wp/project";
import Container from "../layout/Container";
import ProjectsGrid from "../projects/ProjectsGrid";
import styles from "./Projects.module.css"
import { mapWpProject } from "@/src/lib/wp/mapper";

export default async function Projects() {

    const wpProjects = await getProjectsSafe();
    const projects = wpProjects.map(mapWpProject);

    console.log("[DEBUG] Projects: ", projects);

    return (
        <section id="projects" className={styles.projects} aria-labelledby="projects-heading">
            <Container>
                <div className={styles.projectsInner}>
                    <h2 id="projects-heading" className={styles.projectsHeadline} >Projects</h2>
                    {projects.length > 0 ? <ProjectsGrid projects={projects}/> : <p className={styles.empty}>No projects found.</p>}
                </div>
            </Container>
        </section>
    )
}