import { Project } from "@/src/types/projects"
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
    project: Project;
}

export default function ProjectCard ({project} : ProjectCardProps) {
    return (
        <article className="projectCard">
            <Link className="projectCard__mediaLink" href={`/projects/${project.slug}`}>
                <div className="projectCard__media" aria-hidden="true"/> 
            </Link>
            <div className="projectCard__body">
                <h3 className="projectCard__title">
                    <Link href={`/projects/${project.slug}`} className="projectCard__titleLink">
                    {project.title}
                    </Link>
                </h3>

                <dl className="projectCard__meta">
                    <div className="projectCard__metaRow">
                        <dt className="projectCard__label">Role:</dt>
                        <dd className="projectCard__value">{project.role}</dd>
                    </div>
                    <div className="projectCard__metaRow">
                        <dt className="projectCard__label">Stack:</dt>
                        <dd className="projectCard__value">{project.stack}</dd>
                    </div>
                    <div className="projectCard__metaRow">
                        <dt className="projectCard__label">Year:</dt>
                        <dd className="projectCard__value">{project.year}</dd>
                    </div>
                </dl>

                <div className="projectCard__links">
                    {project.liveUrl && (
                        <a
                            className="projectCard__link"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {new URL(project.liveUrl).host}
                        </a>
                    )}

                    {project.githubUrl && (
                        <a
                            className="projectCard__link"
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
    )
}