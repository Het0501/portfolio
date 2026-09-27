"use client"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Award, Cpu } from "lucide-react"

const entries = [
  {
    title: "IBM SkillsBuild — Data Fundamentals",
    type: "Certification",
    date: "Dec 2024",
    icon: "cert",
  },
  {
    title: "Adobe University Hackathon",
    type: "Hackathon Participant",
    date: "2026",
    icon: "hack",
  },
  {
    title: "Stack Fusion Fest — 24-Hour Hackathon",
    type: "Hackathon Participant",
    date: "2025",
    icon: "hack",
  },
  {
    title: "Code Quest 2.0 — Phase 1",
    type: "Competitive Programming",
    date: "2025",
    icon: "hack",
  },
]

export function Certifications() {
  return (
    <section aria-labelledby="certs-heading" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Recognition"
          title="Certifications &amp; Achievements"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
          {entries.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-4 rounded-lg border border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700/60 transition-colors"
            >
              <div className="mb-3">
                {entry.icon === "cert" ? (
                  <Cpu size={16} className="text-cyan-400/70" />
                ) : (
                  <Award size={16} className="text-zinc-500" />
                )}
              </div>
              <h3 className="text-xs font-semibold text-zinc-200 leading-snug">{entry.title}</h3>
              <p className="mt-1.5 text-xs text-zinc-600">{entry.type}</p>
              <p className="mt-2 text-xs font-mono text-zinc-500">{entry.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
