"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, FileText, ArrowRight } from "lucide-react"

// 5 core capability nodes connected to a central System Core
const nodes = [
  { id: "ai", cx: 260, cy: 55, label: "AI / ML", sub: "Inference & Agents" },
  { id: "cyber", cx: 430, cy: 155, label: "Cybersecurity", sub: "Defense & Threat Intel" },
  { id: "mobile", cx: 370, cy: 335, label: "Mobile", sub: "Kotlin & Compose" },
  { id: "fullstack", cx: 150, cy: 335, label: "Full-Stack", sub: "Next.js & Spring Boot" },
  { id: "product", cx: 90, cy: 155, label: "Product", sub: "Startups & Architecture" },
]

const edges = [
  [260, 195, 260, 55],
  [260, 195, 430, 155],
  [260, 195, 370, 335],
  [260, 195, 150, 335],
  [260, 195, 90, 155],
  [260, 55, 430, 155],
  [430, 155, 370, 335],
  [370, 335, 150, 335],
  [150, 335, 90, 155],
  [90, 155, 260, 55],
]

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[86vh] flex items-center overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-16"
    >
      {/* Subtle technical background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#fafafa 1px, transparent 1px), linear-gradient(90deg, #fafafa 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Content Column (7 cols on desktop for better breathing room) */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="mb-4 text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase"
            >
              Computer Science &amp; Engineering · REVA University
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Het Prajapati
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.18 }}
              className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base font-mono text-zinc-300 tracking-wide"
            >
              <span>AI/ML</span>
              <span className="text-cyan-400/60" aria-hidden="true">·</span>
              <span>Cybersecurity</span>
              <span className="text-cyan-400/60" aria-hidden="true">·</span>
              <span>Software Engineering</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.25 }}
              className="mt-5 text-base sm:text-lg text-zinc-200 leading-relaxed max-w-xl font-light"
            >
              Building intelligent systems at the intersection of AI, cybersecurity, and software engineering.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.32 }}
              className="mt-3 text-sm text-zinc-400 leading-relaxed max-w-xl"
            >
              Computer Science &amp; Engineering student at REVA University, Bengaluru, building AI-powered, cybersecurity-focused, mobile, and full-stack systems that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-400 text-zinc-950 text-sm font-semibold tracking-wide hover:bg-cyan-300 transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
              >
                View Projects <ArrowRight size={14} />
              </Link>
              <a
                href="https://github.com/Het0501"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-zinc-700 bg-zinc-900/60 text-zinc-200 text-sm font-medium hover:border-zinc-500 hover:text-white transition-all rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/het-prajapati-36228a266/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-zinc-700 bg-zinc-900/60 text-zinc-200 text-sm font-medium hover:border-zinc-500 hover:text-white transition-all rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume PDF"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-zinc-700 bg-zinc-900/60 text-zinc-200 text-sm font-medium hover:border-zinc-500 hover:text-white transition-all rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
              >
                <FileText size={15} /> Resume
              </a>
            </motion.div>
          </div>

          {/* Technical Visualization Column (5 cols on desktop, clearly visible in first fold) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 hidden sm:flex flex-col items-center justify-center p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/70 shadow-2xl relative"
          >
            <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-zinc-800/80 px-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  SYSTEM_TOPOLOGY :: BUILDER_CORE
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">
                5 DOMAINS ACTIVE
              </span>
            </div>

            <svg
              viewBox="0 0 520 400"
              className="w-full max-w-sm lg:max-w-md h-auto"
              role="img"
              aria-label="Interactive capability network diagram showing AI/ML, Cybersecurity, Mobile, Full-Stack, and Product capabilities connected to Builder Core"
            >
              {/* Connected Edges */}
              {edges.map(([x1, y1, x2, y2], i) => (
                <line
                  key={i}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="#22d3ee"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                  strokeDasharray="3 3"
                />
              ))}

              {/* Central Hub Core Node */}
              <circle
                cx={260} cy={195} r={32}
                fill="#09090b"
                stroke="#22d3ee"
                strokeWidth="1"
                strokeOpacity="0.35"
              />
              <circle
                cx={260} cy={195} r={22}
                fill="rgba(34, 211, 238, 0.08)"
                stroke="#22d3ee"
                strokeWidth="1.5"
                strokeOpacity="0.7"
              />
              <circle
                cx={260} cy={195} r={6}
                fill="#22d3ee"
              />
              <text
                x={260}
                y={192}
                textAnchor="middle"
                fill="#fafafa"
                fontSize="9"
                fontWeight="bold"
                fontFamily="var(--font-geist-mono), monospace"
              >
                CORE
              </text>
              <text
                x={260}
                y={204}
                textAnchor="middle"
                fill="#a1a1aa"
                fontSize="7"
                fontFamily="var(--font-geist-mono), monospace"
              >
                SYSTEMS
              </text>

              {/* Outer Capability Nodes */}
              {nodes.map((node) => (
                <g key={node.id}>
                  {/* Node Background Disc */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={20}
                    fill="#09090b"
                    stroke="#22d3ee"
                    strokeWidth="1.2"
                    strokeOpacity="0.5"
                  />
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={4}
                    fill="#22d3ee"
                  />
                  {/* Primary Node Label */}
                  <text
                    x={node.cx}
                    y={node.cy < 195 ? node.cy - 24 : node.cy + 28}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                    fontWeight="600"
                    fontFamily="var(--font-geist-mono), monospace"
                  >
                    {node.label}
                  </text>
                  {/* Secondary Subtitle */}
                  <text
                    x={node.cx}
                    y={node.cy < 195 ? node.cy - 12 : node.cy + 40}
                    textAnchor="middle"
                    fill="#71717a"
                    fontSize="8"
                    fontFamily="var(--font-geist-mono), monospace"
                  >
                    {node.sub}
                  </text>
                </g>
              ))}
            </svg>

            {/* Bottom telemetry strip */}
            <div className="w-full flex items-center justify-between pt-3 mt-1 border-t border-zinc-800/80 px-2 text-[10px] font-mono text-zinc-400">
              <span>STATUS: BUILDING</span>
              <span className="text-cyan-400/90">FOCUS: AI × SECURITY × SOFTWARE</span>
              <span>SYSTEMS: 05 DOMAINS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}