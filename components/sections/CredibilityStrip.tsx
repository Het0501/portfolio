"use client"
import { motion } from "framer-motion"

const stats = [
  { value: "8.9/10", label: "CGPA" },
  { value: "6", label: "Projects Built" },
  { value: "AI/ML", label: "Deep Learning · Agents · RAG" },
  { value: "Cybersecurity", label: "Intrusion Detection · Phishing" },
  { value: "Full-Stack", label: "React · Next.js · Spring Boot" },
  { value: "Android", label: "Kotlin · Jetpack Compose" },
]

export function CredibilityStrip() {
  return (
    <section aria-label="Key credentials" className="border-y border-zinc-800/60 bg-zinc-950/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-0 lg:divide-x lg:divide-zinc-800"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="lg:px-6 first:pl-0 last:pr-0"
            >
              <p className="text-sm font-semibold text-zinc-100 font-mono tracking-tight">
                {s.value}
              </p>
              <p className="mt-0.5 text-xs text-zinc-500 leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
