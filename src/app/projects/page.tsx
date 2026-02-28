import Link from "next/link";
import { getProjects } from "@/src/lib/wp/project";
import { mapWpProject } from "@/src/lib/wp/mapper";

export default async function ProjectsPage() {

  const wpProjects = await getProjects();
  const projects = wpProjects.map(mapWpProject);

  return (
    <main>
      <h1>Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.slug}>
            <Link href={`/projects/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
