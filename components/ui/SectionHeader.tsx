"use client"
import { motion } from "framer-motion"

type SectionHeaderProps = {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : ""
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-14 ${alignClass}`}
    >
      {label && (
        <p className="mb-3 text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase">
          {label}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-zinc-400 max-w-2xl leading-relaxed text-sm md:text-base">
          {description}
        </p>
      )}
    </motion.div>
  )
}
