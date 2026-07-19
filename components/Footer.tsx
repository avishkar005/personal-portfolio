"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "./ui/Container";
import CurveAccent from "./ui/CurveAccent";
import { links } from "@/lib/data";

const menu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
];

const socials = [
  { href: links.github, label: "GitHub" },
  { href: links.linkedin, label: "LinkedIn" },
  { href: links.x, label: "X" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-text-onDark">
      <Container className="relative py-24 md:py-32">
        <div className="relative">
          <CurveAccent className="pointer-events-none absolute -left-4 -top-10 h-24 w-[105%] text-accent md:h-32" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative text-balance font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-text-onDark sm:text-5xl md:text-7xl"
          >
            Let&apos;s build
            <br />
            something meaningful.
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="mb-2 text-sm text-text-onDarkSecondary">Email</p>
            <a
              href={`mailto:${links.email}`}
              className="text-lg text-text-onDark transition-opacity hover:opacity-75"
            >
              {links.email}
            </a>
          </div>
          <div>
            <p className="mb-2 text-sm text-text-onDarkSecondary">Resume</p>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-text-onDark transition-opacity hover:opacity-75"
            >
              View Resume
            </a>
          </div>
          <div>
            <p className="mb-3 text-sm text-text-onDarkSecondary">Social</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-borderDark px-4 py-2 text-sm text-text-onDark transition-colors hover:border-white/30"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-borderDark pt-8 sm:flex-row sm:items-center">
          <nav className="flex flex-wrap gap-6">
            {menu.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="text-sm text-text-onDarkSecondary transition-colors hover:text-text-onDark"
              >
                {m.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-text-onDarkSecondary">
            Made by Avishkar Choundkar &middot; &copy; {year}
          </p>
        </div>
      </Container>
    </footer>
  );
}
