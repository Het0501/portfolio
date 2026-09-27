import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Construction,
  Layers,
  CheckCircle2,
  Shield,
  Cpu,
  Database,
  Activity,
  Workflow,
  Sparkles,
} from "lucide-react";
import { getProjectBySlug, projectSlugs } from "@/data/projects";
import { Tag } from "@/components/ui/Tag";
import { ProcessPipeline } from "@/components/projects/ProcessPipeline";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({
    slug: slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.name} | Het Prajapati`,
    description: project.description,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const isInDev = project.status === "in-development";

  return (
    <article className="min-h-screen pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
          >
            <ArrowLeft size={13} /> Back to Selected Projects
          </Link>
        </nav>

        {/* Case Study Header */}
        <header className="mb-10 pb-8 border-b border-zinc-800/80">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {isInDev ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-semibold bg-amber-950/60 text-amber-400 border border-amber-800/60 rounded tracking-wider uppercase">
                <Construction size={12} />
                IN DEVELOPMENT
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 rounded tracking-wider uppercase">
                <CheckCircle2 size={12} />
                COMPLETED
              </span>
            )}
            {project.featured && (
              <span className="px-2.5 py-1 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 rounded tracking-wider uppercase">
                FLAGSHIP SYSTEM
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            {project.name}
          </h1>
          <p className="mt-2 text-lg md:text-xl font-mono text-cyan-400">
            {project.subtitle}
          </p>

          <p className="mt-6 text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Metric Callouts Cards */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/70 shadow-sm"
                >
                  <p className="text-xl md:text-2xl font-bold font-mono text-cyan-400">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs font-mono text-zinc-400">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Technology Group Tags */}
          <div className="mt-7">
            <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2.5">
              Verified Technical Stack:
            </p>
            <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
              {project.technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-zinc-800/80">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 bg-zinc-900/80 text-zinc-200 hover:border-cyan-500 hover:text-white text-sm font-medium rounded transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <Github size={16} /> View Source on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-400 text-zinc-950 hover:bg-cyan-300 text-sm font-semibold rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </header>

        {/* Process Pipeline Flow Visualizer */}
        {project.pipeline && project.pipeline.length > 0 && (
          <ProcessPipeline steps={project.pipeline} />
        )}

        {/* Verified Facts & Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <section aria-label="Key highlights" className="my-12 p-6 md:p-8 rounded-xl border border-zinc-800 bg-zinc-950/50">
            <h2 className="text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <Sparkles size={14} /> Verified Technical Highlights
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" aria-hidden="true" />
                  <span className="text-xs md:text-sm text-zinc-300 font-mono">{h}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technical Case Study Sections */}
        <div className="space-y-10">
          {project.sections.map((section, idx) => (
            <section
              key={section.title}
              aria-labelledby={`sec-${idx}`}
              className="p-6 md:p-8 rounded-xl border border-zinc-800/80 bg-zinc-950/60"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  SECTION 0{idx + 1}
                </span>
                <span className="text-zinc-700">|</span>
                <h2
                  id={`sec-${idx}`}
                  className="text-xl md:text-2xl font-bold text-white tracking-tight"
                >
                  {section.title}
                </h2>
              </div>

              <div className="text-sm md:text-base text-zinc-300 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>

              {/* Technical Schematic Placeholder with engineered layout */}
              {project.featured &&
                (section.title.includes("Architecture") ||
                  section.title.includes("Pipeline") ||
                  section.title.includes("Workflow") ||
                  section.title.includes("Digital Twin")) && (
                  <div
                    className="mt-6 p-6 rounded-lg border border-dashed border-zinc-700/80 bg-zinc-900/40 text-center"
                    aria-label={`Technical Schematic: ${section.title}`}
                  >
                    <div className="flex justify-center mb-2 text-cyan-400">
                      <Workflow size={24} />
                    </div>
                    <p className="text-xs font-mono text-zinc-300 font-semibold tracking-wider">
                      [TECHNICAL SCHEMATIC PLACEHOLDER: {section.title.toUpperCase()}]
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-1 font-mono">
                      System architecture layout reserved for public asset deployment.
                    </p>
                  </div>
                )}
            </section>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white text-sm font-mono rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            <ArrowLeft size={14} /> Back to all projects
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
            >
              <Github size={15} /> Source Code on GitHub &rarr;
            </a>
          )}
        </div>
      </div>
    </article>
  );
}