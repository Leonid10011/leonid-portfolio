import { projects } from "@/src/data/projects";
import Container from "../layout/Container";
import ProjectsGrid from "../projects/ProjectsGrid";

export default function Projects({children} : 
    {children: React.ReactNode}
) {
    return (
        <section id="projects" className="projects" aria-labelledby="projects-heading">
            <Container>
                <div className="projects__inner">
                    <h2 id="projects-heading" className="projects__headline" >Projects</h2>
                    <ProjectsGrid projects={projects}/>
                </div>
            </Container>
        </section>
    )
}