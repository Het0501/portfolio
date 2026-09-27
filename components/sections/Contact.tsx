"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-28 bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase">Contact</p>
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight leading-tight">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-5 text-zinc-400 text-sm md:text-base leading-relaxed">
            If you&apos;re working on something interesting — an AI system, a security challenge, a product from scratch — I&apos;d like to hear about it.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href="mailto:hetprajapati983@gmail.com"
              className="group inline-flex items-center gap-3 text-sm text-zinc-300 hover:text-cyan-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 rounded w-fit"
              aria-label="Send email to hetprajapati983@gmail.com"
            >
              <span className="p-2 rounded border border-zinc-800 group-hover:border-cyan-400/30 transition-colors">
                <Mail size={15} />
              </span>
              hetprajapati983@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/het-prajapati-36228a266/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm text-zinc-300 hover:text-cyan-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 rounded w-fit"
              aria-label="LinkedIn profile"
            >
              <span className="p-2 rounded border border-zinc-800 group-hover:border-cyan-400/30 transition-colors">
                <Linkedin size={15} />
              </span>
              LinkedIn
            </a>
            <a
              href="https://github.com/Het0501"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm text-zinc-300 hover:text-cyan-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 rounded w-fit"
              aria-label="GitHub profile"
            >
              <span className="p-2 rounded border border-zinc-800 group-hover:border-cyan-400/30 transition-colors">
                <Github size={15} />
              </span>
              github.com/Het0501
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm text-zinc-300 hover:text-cyan-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 rounded w-fit"
              aria-label="Download resume PDF"
            >
              <span className="p-2 rounded border border-zinc-800 group-hover:border-cyan-400/30 transition-colors">
                <FileText size={15} />
              </span>
              Resume (PDF)
            </a>
            <div className="pt-4 mt-2 border-t border-zinc-800/60 flex items-center gap-2.5 text-xs text-zinc-500 font-mono">
              <Phone size={13} className="text-zinc-600" />
              <span>Direct Phone: 9824603829</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
