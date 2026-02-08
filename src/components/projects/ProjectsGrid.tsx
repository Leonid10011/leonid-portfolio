import { Project } from "@/src/types/projects"
import ProjectCard from "./ProjectCard";

type ProjectsGridProps = {
    projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {

    return(
        <div className="projects__grid">
            {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
    );
}