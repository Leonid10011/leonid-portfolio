export type Project = {
    slug: string;
    title: string;
    role: string;
    stack: string[];
    year: number;
    liveUrl?: string;
    githubUrl?: string;

    summary: string;
    problem: string;
    solution: string;
    architecture: string;
    frontend: string;
    implementationItems: ImplementationItem[];
    learnings: string;
}

export type ImplementationItem = {
    desc: string;
    imgSrc: string;
}