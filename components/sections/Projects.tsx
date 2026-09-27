"use client"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { FlagshipCard } from "@/components/projects/FlagshipCard"
import { SupportingCard } from "@/components/projects/SupportingCard"
import { getFeaturedProjects, getSupportingProjects } from "@/data/projects"

export function Projects() {
  const featured = getFeaturedProjects()
  const supporting = getSupportingProjects()

  const [sentinel] = featured.filter((p) => p.slug === "sentinel-grid")
  const rest = featured.filter((p) => p.slug !== "sentinel-grid")

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Selected Projects"
          title="Selected Projects"
          description="Systems I&apos;ve designed and engineered across AI, cybersecurity, software engineering, mobile development, and product building."
        />

        <div className="space-y-6">
          {/* ROW 1: SENTINEL.GRID — full-width flagship */}
          {sentinel && (
            <FlagshipCard project={sentinel} layout="wide" index={0} />
          )}

          {/* ROW 2: PROJECT 117 + ECO-GUARDIAN — side by side */}
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <FlagshipCard key={project.slug} project={project} layout="half" index={i + 1} />
            ))}
          </div>

          {/* ROW 3: Supporting projects — compact 3-column */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {supporting.map((project, i) => (
              <SupportingCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
