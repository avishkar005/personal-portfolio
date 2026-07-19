"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

const items = [
  {
    title: "Backend Systems",
    body: "Scalable services designed around clean architecture, so the codebase stays easy to extend as it grows.",
  },
  {
    title: "REST APIs",
    body: "Secure, well-structured APIs built with performance and developer experience in mind.",
  },
  {
    title: "Production-Ready Apps",
    body: "Applications built to actually ship — tested, deployable, and built for real usage, not just a demo.",
  },
  {
    title: "Clean Architecture",
    body: "Code organized for maintainability, so the next feature — or the next engineer — is easy to add.",
  },
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-border bg-card py-24 md:py-32">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-text-primary md:text-6xl"
        >
          What I can build for you
        </motion.h2>

        <div className="mt-16 max-w-3xl">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.title} className="border-b border-border">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={open}
                >
                  <span className="font-display text-xl font-extrabold uppercase tracking-tight text-text-primary md:text-2xl">
                    {String(i + 1).padStart(2, "0")}. {item.title}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border text-text-secondary"
                  >
                    ↓
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-prose pb-6 text-base leading-relaxed text-text-secondary">
                        {item.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
