"use client"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Terminal, Shield, Cpu, Code2, Wrench } from "lucide-react"

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 bg-zinc-950/50 border-t border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7">
            <SectionHeader
              label="Engineering Profile"
              title="About Het"
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
              className="space-y-4 text-zinc-300 leading-relaxed text-sm md:text-base font-normal"
            >
              <p>
                I&apos;m a 3rd-year Computer Science &amp; Engineering student at REVA University, Bengaluru, specialising in IoT, Cybersecurity, and Blockchain Technology with an 8.9/10 CGPA.
              </p>
              <p>
                More than just studying computer science, I love <span className="text-white font-medium">building real-world systems</span> and <span className="text-white font-medium">solving messy, complex technical problems</span>. Whether that means orchestrating federated learning nodes under differential privacy, simulating a 58-asset refinery digital twin with multi-agent reasoning, or writing robust Android applications in Kotlin and Compose — I get energized by turning technical ideas into working software.
              </p>
              <p>
                My focus sits squarely across <span className="text-cyan-400 font-mono">AI/ML</span>, <span className="text-cyan-400 font-mono">Cybersecurity</span>, and <span className="text-cyan-400 font-mono">Software Engineering</span>. I believe good engineering is about verifiability, disciplined architecture, and building products that actually solve problems for people.
              </p>
            </motion.div>

            {/* Builder Focus Blocks */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: Cpu, label: "AI & Agents", desc: "PyTorch, RAG, Ollama" },
                { icon: Shield, label: "Cybersecurity", desc: "Federated, Intrusion, Auth" },
                { icon: Code2, label: "Full-Stack & Mobile", desc: "Next.js, Spring, Kotlin" },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/50 flex flex-col justify-between"
                  >
                    <Icon size={16} className="text-cyan-400 mb-2" />
                    <div>
                      <p className="text-xs font-semibold text-white">{item.label}</p>
                      <p className="text-[10px] font-mono text-zinc-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Professional Summary & Key Fact Sheet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 p-6 md:p-8 rounded-xl border border-zinc-800 bg-zinc-950/80 shadow-md"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800">
              <Terminal size={14} className="text-cyan-400" />
              <p className="text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase font-semibold">
                Technical Summary
              </p>
            </div>
            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
              Computer Science undergraduate specialising in IoT, Cybersecurity, and Blockchain Technology, with an 8.9/10 CGPA and hands-on experience building end-to-end systems across AI/ML, cybersecurity, mobile, and full-stack development. Built projects spanning federated AI cyber defence, agentic AI, computer vision, phishing detection, Android applications, and cloud-based platforms.
            </p>
            <div className="mt-6 pt-5 border-t border-zinc-800 grid grid-cols-2 gap-4">
              {[
                { label: "Degree Focus", value: "CSE (IoT & Cyber Security)" },
                { label: "University", value: "REVA University, Bengaluru" },
                { label: "Academic CGPA", value: "8.9 / 10" },
                { label: "Graduation", value: "Expected 2028 (3rd Year)" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{item.label}</p>
                  <p className="mt-1 text-xs text-zinc-200 font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}