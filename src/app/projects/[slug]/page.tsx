import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";
import Container from "@/src/components/layout/Container";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <Container>

      <main>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>

        <section>
          <h2>Problem & Goal</h2>
          <p>{project.problem}</p>
        </section>

        <section>
          <h2>Solution</h2>
          <p>{project.solution}</p>
        </section>

        <section>
          <h2>Architecture</h2>
          <p>{project.architecture}</p>
        </section>

        <section>
          <h2>Frontend Implementation</h2>
          <p>{project.frontend}</p>
        </section>

        <section>
          <h2>Learnings</h2>
          <p>{project.learnings}</p>
        </section>
      </main>
    </Container>
  );
}
