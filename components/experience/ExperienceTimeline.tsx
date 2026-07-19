"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experience, achievements } from "@/lib/data";

export default function ExperienceTimeline() {
  return (
    <div>
      <p className="mb-12 text-xs uppercase tracking-widest text-text-secondary">
        Experience
      </p>

      <div className="relative">
        <div className="absolute left-10 top-0 h-full w-px bg-border md:left-12" />

        <div className="flex flex-col gap-14">
          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-start gap-6 md:gap-10"
            >
              <div className="relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border border-border bg-white shadow-sm md:h-24 md:w-24">
                <div className="relative h-14 w-14 md:h-16 md:w-16">
                  <Image
                    src={item.logo}
                    alt={item.org + " logo"}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
              </div>

              <div className="flex-1 pt-1">
                <div className="inline-block rounded-lg border border-border bg-card px-5 py-3">
                  <p className="font-display text-lg font-extrabold uppercase tracking-tight text-text-primary">
                    {item.role}
                  </p>
                  {item.period && (
                    <p className="mt-1 text-xs text-text-secondary">{item.period}</p>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">{item.org}</h3>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <p className="mb-8 text-xs uppercase tracking-widest text-text-secondary">
          Achievements
        </p>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <motion.li
              key={a}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-border bg-card px-5 py-4 text-sm text-text-primary"
            >
              {a}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}