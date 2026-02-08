import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main>
      <h1>{project.title}</h1>
      <p>
        <strong>Role:</strong> {project.role}
      </p>
      <p>
        <strong>Stack:</strong> {project.stack}
      </p>
      <p>
        <strong>Year:</strong> {project.year}
      </p>
    </main>
  );
}
