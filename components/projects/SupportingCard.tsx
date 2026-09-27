"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowRight, Construction, ShieldCheck, Database, Building2 } from "lucide-react"
import { Tag } from "@/components/ui/Tag"
import type { Project } from "@/data/projects"

type SupportingCardProps = {
  project: Project
  index?: number
}

export function SupportingCard({ project, index = 0 }: SupportingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative rounded-xl border border-zinc-800/80 bg-zinc-950/70 hover:border-zinc-700 transition-all duration-300 p-6 flex flex-col justify-between shadow-md"
    >
      <div>
        {/* Visual Identity Motif Header */}
        <div className="mb-4 pb-3 border-b border-zinc-800/80 flex items-center justify-between">
          {project.slug === "phishing-site-detection" && (
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <ShieldCheck size={14} className="text-cyan-400" />
              <span className="text-[11px] text-zinc-300">BROWSER_SECURITY_EXT</span>
            </div>
          )}
          {project.slug === "smartshop" && (
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Database size={14} className="text-cyan-400" />
              <span className="text-[11px] text-zinc-300">ADMIN_INVENTORY_OS</span>
            </div>
          )}
          {project.slug === "apartment-management-os" && (
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Building2 size={14} className="text-amber-400" />
              <span className="text-[11px] text-zinc-300">COMMUNITY_PLATFORM</span>
            </div>
          )}

          {/* Status Badge */}
          {project.status === "in-development" ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-semibold bg-amber-950/60 text-amber-400 border border-amber-800/60 rounded tracking-wider uppercase">
              <Construction size={10} />
              IN DEVELOPMENT
            </span>
          ) : (
            <span className="px-2 py-0.5 text-[10px] font-mono text-zinc-400 border border-zinc-800 bg-zinc-900/60 rounded tracking-wider uppercase">
              COMPLETED
            </span>
          )}
        </div>

        {/* Project Title and Subtitle */}
        <h3 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-cyan-400 transition-colors">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-1 text-xs font-mono text-cyan-400/80">{project.subtitle}</p>

        <p className="mt-3 text-xs text-zinc-300 leading-relaxed">
          {project.description}
        </p>

        {/* Key Metrics / Highlights Mini-Strip */}
        {project.metrics && (
          <div className="mt-4 grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label}>
                <p className="text-xs font-mono font-bold text-zinc-200">{m.value}</p>
                <p className="text-[9px] font-mono text-zinc-500">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1" aria-label="Technologies used">
          {project.technologies.slice(0, 5).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          {project.technologies.length > 5 && (
            <span className="inline-block px-2 py-0.5 text-xs font-mono text-zinc-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Action Links */}
      <div className="mt-6 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
        >
          Case Study <ArrowRight size={11} />
        </Link>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} GitHub repository`}
              className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
            >
              <Github size={12} /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} demo`}
              className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
            >
              <ExternalLink size={11} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}