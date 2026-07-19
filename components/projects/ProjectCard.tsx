"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/lib/data";

const tints = [
  "from-[#2b2f26] to-[#4a5a3a]",
  "from-[#2a2140] to-[#5a3ea8]",
  "from-[#1f2a33] to-[#3a5a70]",
  "from-[#3a2b1f] to-[#7a5a3a]",
];

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-black/20"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={"/images/" + project.slug + ".png"}
          alt={project.name + " screenshot"}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight text-text-primary">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-text-primary transition-opacity hover:opacity-70">
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent transition-opacity hover:opacity-70">
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}