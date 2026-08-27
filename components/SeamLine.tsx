"use client";

import { motion } from "framer-motion";

export default function SeamLine({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`pointer-events-none w-full ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 24" fill="none" preserveAspectRatio="none" className="h-4 w-full">
        <motion.line
          x1="0"
          y1="12"
          x2="1200"
          y2="12"
          stroke="#C9962E"
          strokeWidth="2"
          strokeDasharray="2 14"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}
