"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { projects } from "@/lib/data";

const featured = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm uppercase tracking-widest text-text-secondary"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-16 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-text-primary md:text-6xl"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={"/images/" + project.slug + ".png"}
                  alt={project.name + " screenshot"}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {project.tech.join(" / ")}
                  </p>
                </div>
                <Link href="/projects" className="whitespace-nowrap text-sm font-medium text-text-primary transition-opacity hover:opacity-70">
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}