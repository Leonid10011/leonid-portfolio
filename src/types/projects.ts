export type WpAcfProject = {
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

export type WpProject = {
    id: number,
    slug: string,
    title: { rendered: string},
    acf : WpAcfProject,
}

export type ImplementationItem = {
    description: string;
    image?: string;
}