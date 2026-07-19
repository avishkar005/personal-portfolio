"use client";

import { motion } from "framer-motion";

type StoryCardProps = {
  label: string;
  title: string;
  body: string;
  index: number;
};

export default function StoryCard({ label, title, body, index }: StoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-border bg-card p-8 md:p-10"
    >
      <p className="mb-3 text-xs uppercase tracking-widest text-text-secondary">
        {label}
      </p>
      <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-text-primary">
        {title}
      </h3>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-text-secondary">
        {body}
      </p>
    </motion.div>
  );
}
