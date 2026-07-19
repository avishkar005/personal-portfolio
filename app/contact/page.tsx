import Container from "@/components/ui/Container";
import { links } from "@/lib/data";

export const metadata = {
  title: "Contact — Avishkar Choundkar",
};

export default function ContactPage() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24 md:py-32">
      <p className="mb-4 text-sm uppercase tracking-widest text-text-secondary">
        Contact
      </p>
      <h1 className="max-w-2xl text-balance font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-text-primary md:text-6xl">
        Let&apos;s talk about what you&apos;re building.
      </h1>

      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href={`mailto:${links.email}`}
          className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
        >
          {links.email}
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-black/20"
        >
          GitHub
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-black/20"
        >
          LinkedIn
        </a>
        <a
          href={links.x}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-black/20"
        >
          X
        </a>
      </div>
    </Container>
  );
}
