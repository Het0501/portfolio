"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, FileText, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header
      role="banner"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800/60"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-zinc-100 tracking-tight hover:text-cyan-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
          aria-label="Het Prajapati — home"
        >
          het<span className="text-cyan-400">.</span>prajapati
        </Link>

        {/* Desktop center nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/Het0501"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-zinc-400 hover:text-zinc-100 transition-colors p-1.5 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/het-prajapati-36228a266/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-zinc-400 hover:text-zinc-100 transition-colors p-1.5 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download resume"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium border border-zinc-700 text-zinc-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            <FileText size={13} />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden text-zinc-400 hover:text-zinc-100 transition-colors p-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-b border-zinc-800 bg-zinc-950"
          >
            <ul className="px-6 py-4 flex flex-col gap-0.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3 pt-3 border-t border-zinc-800 flex items-center gap-3">
                <a
                  href="https://github.com/Het0501"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/het-prajapati-36228a266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume"
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
                >
                  <FileText size={16} /> Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
