"use client"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Education" title="Education" />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {/* University */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/40 col-span-full"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded bg-cyan-400/10 border border-cyan-400/20 mt-0.5">
                <GraduationCap size={18} className="text-cyan-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-100">REVA University, Bengaluru</h3>
                    <p className="mt-0.5 text-sm text-zinc-400">
                      B.Tech — Computer Science &amp; Engineering
                    </p>
                    <p className="text-xs text-zinc-500 font-mono mt-0.5">
                      IoT &amp; Cyber Security including Blockchain Technology
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xl font-bold font-mono text-cyan-400">8.9<span className="text-zinc-500 text-sm">/10</span></p>
                    <p className="text-xs text-zinc-500 font-mono mt-0.5">CGPA</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="px-2.5 py-1 text-xs font-mono border border-zinc-800 text-zinc-500 rounded">Expected 2028</span>
                  <span className="px-2.5 py-1 text-xs font-mono border border-zinc-800 text-zinc-500 rounded">3rd Year</span>
                  <span className="px-2.5 py-1 text-xs font-mono border border-zinc-800 text-zinc-500 rounded">Bengaluru, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Class XII */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-5 rounded-lg border border-zinc-800/60 bg-zinc-900/30"
          >
            <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-2">Secondary Education</p>
            <h3 className="text-sm font-semibold text-zinc-200">Class XII</h3>
            <p className="mt-1 text-2xl font-bold font-mono text-zinc-100">81.89<span className="text-zinc-500 text-base">%</span></p>
          </motion.div>

          {/* Class X */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="p-5 rounded-lg border border-zinc-800/60 bg-zinc-900/30"
          >
            <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-2">Secondary Education</p>
            <h3 className="text-sm font-semibold text-zinc-200">Class X</h3>
            <p className="mt-1 text-2xl font-bold font-mono text-zinc-100">86.20<span className="text-zinc-500 text-base">%</span></p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
