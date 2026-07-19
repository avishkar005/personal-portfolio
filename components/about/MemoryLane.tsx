"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MemoryLane() {
  const items = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-3 text-xs uppercase tracking-widest text-text-secondary"
      >
        Memory Lane
      </motion.p>
      <p className="mb-10 max-w-prose text-base text-text-secondary">
        A few moments along the way.
      </p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {items.map((n, i) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-card"
          >
            <Image
              src={`/images/memory-${n}.jpg`}
              alt={`Memory ${n}`}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}