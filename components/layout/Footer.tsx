import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-sm font-semibold text-zinc-100">
              het<span className="text-cyan-400">.</span>prajapati
            </p>
            <p className="mt-1 text-xs text-zinc-500 max-w-xs leading-relaxed">
              Building at the intersection of AI, cybersecurity &amp; software engineering.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Het0501"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-zinc-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/het-prajapati-36228a266/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 hover:text-zinc-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="mailto:hetprajapati983@gmail.com"
              aria-label="Email"
              className="text-zinc-500 hover:text-zinc-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-zinc-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            &copy; 2026 Het Prajapati. All rights reserved.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-4" role="list">
              {[
                { label: "Projects", href: "/#projects" },
                { label: "Experience", href: "/#experience" },
                { label: "Contact", href: "/#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
