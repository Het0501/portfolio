"use client"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Experience"
          title="Professional Experience"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="relative pl-6 border-l border-zinc-800">
            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-cyan-400/80 border-2 border-zinc-950" />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
              <h3 className="text-base font-semibold text-zinc-100">
                Cyber Security Intern
              </h3>
              <span className="text-zinc-600 font-mono text-sm">—</span>
              <span className="text-sm font-medium text-cyan-400/90 font-mono">InTrainz</span>
            </div>
            <div className="flex items-center gap-2 mb-3 text-xs text-zinc-500 font-mono">
              <Calendar size={12} />
              Jun 2025 – Aug 2025
              <span className="ml-2 px-2 py-0.5 bg-emerald-950/50 text-emerald-400 border border-emerald-900/60 rounded text-[10px] font-medium tracking-wide">
                PAID
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Completed a paid Cyber Security internship with an integrated industry training phase, gaining structured exposure to cybersecurity concepts and practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
