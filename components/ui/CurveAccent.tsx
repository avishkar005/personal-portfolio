"use client";

import { motion } from "framer-motion";

export default function CurveAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 220"
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M10 30 C 150 30, 250 200, 590 195"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
