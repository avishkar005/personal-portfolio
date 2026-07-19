"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CurveAccent from "@/components/ui/CurveAccent";
import { links } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-text-onDark">
      <Container className="relative py-28 md:py-40">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 text-sm text-text-onDarkSecondary"
        >
          Hi, I&apos;m
        </motion.p>

        <div className="relative">
          <CurveAccent className="pointer-events-none absolute -left-4 -top-6 h-24 w-[110%] text-accent md:h-40" />
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative text-balance font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-text-onDark sm:text-6xl md:text-8xl"
          >
            Avishkar
            <br />
            <span className="text-text-onDarkSecondary">Choundkar</span>
          </motion.h1>
        </div>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 text-xl font-medium text-text-onDark md:text-2xl"
        >
          Backend Software Engineer
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 max-w-prose text-base leading-relaxed text-text-onDarkSecondary"
        >
          I build scalable backend systems, secure REST APIs and
          production-ready applications with a focus on performance, clean
          architecture and developer experience.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink transition-opacity duration-200 hover:opacity-85"
          >
            View Projects
          </Link>
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-borderDark px-6 py-3 text-sm font-medium text-text-onDark transition-colors duration-200 hover:border-white/30"
          >
            Resume
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-borderDark px-6 py-3 text-sm font-medium text-text-onDark transition-colors duration-200 hover:border-white/30"
          >
            GitHub
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
