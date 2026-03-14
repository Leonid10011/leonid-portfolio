import { mapWpProject } from "@/src/api/mapper";
import { getProjects } from "@/src/repo/projectRepository";
import Link from "next/link";

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
