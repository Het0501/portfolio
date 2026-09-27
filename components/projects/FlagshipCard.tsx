"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowRight, Activity, ShieldAlert, Cpu, ArrowUpRight } from "lucide-react"
import { Tag } from "@/components/ui/Tag"
import type { Project } from "@/data/projects"

type FlagshipCardProps = {
  project: Project
  layout?: "wide" | "half"
  index?: number
}

export function FlagshipCard({ project, layout = "half", index = 0 }: FlagshipCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`group relative rounded-xl border border-zinc-800 bg-zinc-950/80 hover:border-zinc-700 transition-all duration-300 overflow-hidden shadow-lg ${
        layout === "wide" ? "col-span-full" : ""
      }`}
    >
      {/* Top restrained cyan highlight line */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        aria-hidden="true"
      />

      <div className={`p-7 md:p-9 ${layout === "wide" ? "grid lg:grid-cols-12 gap-8 lg:gap-10 items-start" : ""}`}>
        {/* Main Content Area */}
        <div className={layout === "wide" ? "lg:col-span-7" : ""}>
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 text-[10px] font-mono font-semibold bg-cyan-950/50 text-cyan-400 border border-cyan-800/60 rounded tracking-wider uppercase">
              {project.status === "completed" ? "Completed" : "In Development"}
            </span>
            <span className="px-2.5 py-0.5 text-[10px] font-mono text-zinc-400 border border-zinc-800 bg-zinc-900/60 rounded tracking-wider uppercase">
              Flagship System
            </span>
          </div>

          {/* Title and Subtitle */}
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-cyan-400/95 transition-colors">
            <Link
              href={`/projects/${project.slug}`}
              className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
            >
              {project.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm font-mono text-cyan-400/80">{project.subtitle}</p>

          <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
            {project.description}
          </p>

          {/* Metric Highlights Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/70">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-xs md:text-sm font-bold font-mono text-cyan-400">{m.value}</p>
                  <p className="text-[10px] font-mono text-zinc-400 leading-tight mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Pipeline sequence ribbon */}
          {project.pipeline && project.pipeline.length > 0 && (
            <div className="mt-4 pt-3 border-t border-zinc-800/60">
              <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider mb-2">
                Execution Pipeline:
              </p>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-zinc-400">
                {project.pipeline.map((stage, sIdx) => (
                  <span key={stage} className="inline-flex items-center gap-1">
                    <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                      {stage}
                    </span>
                    {sIdx < (project.pipeline?.length ?? 0) - 1 && (
                      <span className="text-zinc-600 text-[10px]">&rarr;</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tech tags */}
          <div className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {project.technologies.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 text-xs font-semibold rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              Technical Case Study <ArrowRight size={13} />
            </Link>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} GitHub repository`}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-zinc-700 bg-zinc-900/60 hover:border-zinc-500 text-zinc-200 hover:text-white text-xs font-medium rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <Github size={13} /> GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} demo`}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-zinc-700 bg-zinc-900/60 hover:border-zinc-500 text-zinc-200 hover:text-white text-xs font-medium rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <ExternalLink size={13} /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Visual Architecture Schematic Preview for Wide Flagship Card */}
        {layout === "wide" && (
          <div className="lg:col-span-5 hidden lg:flex flex-col justify-between h-full p-6 rounded-xl border border-dashed border-zinc-700/80 bg-zinc-900/30">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-cyan-400" />
                <span className="text-[11px] font-mono uppercase text-zinc-300 font-semibold tracking-wider">
                  FEDERATED TOPOLOGY
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">SCHEMATIC</span>
            </div>

            {/* SVG Mini Topology */}
            <div className="py-6 flex items-center justify-center">
              <svg viewBox="0 0 300 160" className="w-full h-auto max-w-[280px]">
                {/* Hub Node */}
                <circle cx="150" cy="40" r="20" fill="#09090b" stroke="#22d3ee" strokeWidth="1.5" />
                <text x="150" y="38" textAnchor="middle" fill="#22d3ee" fontSize="8" fontWeight="bold" fontFamily="monospace">
                  CENTRAL
                </text>
                <text x="150" y="48" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="monospace">
                  FedAvg Hub
                </text>

                {/* Edge Nodes */}
                {[
                  { cx: 50, cy: 125, label: "Edge Node 1", tag: "DDoS/Scan" },
                  { cx: 150, cy: 125, label: "Edge Node 2", tag: "BruteForce" },
                  { cx: 250, cy: 125, label: "Edge Node 3", tag: "Web Attacks" },
                ].map((node, i) => (
                  <g key={i}>
                    <line x1="150" y1="60" x2={node.cx} y2="105" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
                    <rect x={node.cx - 38} y="105" width="76" height="38" rx="5" fill="#09090b" stroke="#3f3f46" strokeWidth="1" />
                    <text x={node.cx} y="120" textAnchor="middle" fill="#fafafa" fontSize="8" fontWeight="600" fontFamily="monospace">
                      {node.label}
                    </text>
                    <text x={node.cx} y="132" textAnchor="middle" fill="#22d3ee" fontSize="7" fontFamily="monospace">
                      {node.tag}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span>RAW DATA: LOCAL ONLY</span>
              <span className="text-cyan-400">&epsilon; = 1.0 PRIVACY</span>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  )
}