"use client";

import { motion } from "framer-motion";
import {
  Server,
  Webhook,
  Coffee,
  LayoutTemplate,
  ShieldCheck,
  Code2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { projects } from "@/lib/data";

const stack = Array.from(new Set(projects.flatMap((p) => p.tech)));

const techIcons: Record<string, typeof Server> = {
  Backend: Server,
  "REST API": Webhook,
  Java: Coffee,
  JavaFX: Coffee,
  Frontend: LayoutTemplate,
};

const capabilities = [
  { icon: Server, label: "Backend Systems" },
  { icon: Webhook, label: "REST APIs" },
  { icon: Coffee, label: "Java Applications" },
  { icon: LayoutTemplate, label: "Frontend Development" },
  { icon: ShieldCheck, label: "Production-Ready Apps" },
];

export default function TechStack() {
  return (
    <section className="border-t border-border bg-paper py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-text-primary md:text-6xl"
          >
            I build backend
            <br />
            <span className="text-text-secondary">systems that hold up.</span>
          </motion.h2>

          <p className="mt-10 mb-6 text-sm uppercase tracking-widest text-text-secondary">
            My tech stack
          </p>
          <div className="flex flex-wrap gap-3">
            {stack.map((tech, i) => {
              const Icon = techIcons[tech] ?? Code2;
              return (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-text-primary"
                >
                  <Icon size={16} strokeWidth={1.75} />
                  {tech}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-5"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ink text-text-onDark">
                <item.icon size={20} strokeWidth={1.75} />
              </span>
              <span className="font-display text-xl font-extrabold uppercase tracking-tight text-text-primary md:text-2xl">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}