import { Hero } from "@/components/sections/Hero"
import { CredibilityStrip } from "@/components/sections/CredibilityStrip"
import { Projects } from "@/components/sections/Projects"
import { Experience } from "@/components/sections/Experience"
import { Skills } from "@/components/sections/Skills"
import { Education } from "@/components/sections/Education"
import { About } from "@/components/sections/About"
import { Certifications } from "@/components/sections/Certifications"
import { Contact } from "@/components/sections/Contact"

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <About />
      <Certifications />
      <Contact />
    </>
  )
}
