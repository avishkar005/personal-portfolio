import Container from "@/components/ui/Container";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";

export const metadata = {
  title: "Experience — Avishkar Choundkar",
};

export default function ExperiencePage() {
  return (
    <>
      <section className="bg-ink pb-24 pt-40 text-text-onDark md:pb-32 md:pt-48">
        <Container>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-text-onDark md:text-6xl">
            Experience
          </h1>
          <p className="mt-6 max-w-prose text-lg text-text-onDarkSecondary">
            Where I've worked, and what I've built along the way.
          </p>
        </Container>
      </section>

      <Container className="py-24 md:py-32">
        <ExperienceTimeline />
      </Container>
    </>
  );
}