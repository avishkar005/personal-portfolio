import Container from "@/components/ui/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Work — Avishkar Choundkar",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-ink py-24 text-text-onDark md:py-32">
        <Container>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-text-onDark md:text-6xl">
            My most recent work
          </h1>
          <p className="mt-6 max-w-prose text-lg text-text-onDarkSecondary">
            No fluff — backend systems, APIs, and a few frontend experiments
            I&apos;ve actually built.
          </p>
        </Container>
      </section>

      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </>
  );
}
