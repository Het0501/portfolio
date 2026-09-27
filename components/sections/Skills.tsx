"use client"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Tag } from "@/components/ui/Tag"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "Kotlin", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "App Development",
    skills: [
      "Android Development",
      "Jetpack Compose",
      "CameraX",
      "ML Kit",
      "Mobile Application Development",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "CNN-LSTM",
      "Computer Vision",
      "AI Agents",
      "RAG",
      "Federated Learning",
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      "Network Intrusion Detection",
      "Phishing Detection",
      "Threat Detection & Response",
      "Browser Security",
    ],
  },
  {
    title: "Frameworks / Web",
    skills: ["React", "Next.js", "Three.js", "FastAPI", "Flask", "Spring Boot", "REST APIs"],
  },
  {
    title: "Databases / Cloud",
    skills: ["MySQL", "SQLite", "LanceDB", "AWS"],
  },
  {
    title: "Tools / Platforms",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Hilt",
      "Room",
      "Retrofit",
      "OkHttp",
      "WorkManager",
      "Flower",
      "Ollama",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Technical Skills"
          title="Technical Capabilities"
          description="Domain expertise across AI/ML, cybersecurity, software engineering, mobile, and cloud systems."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-5 rounded-lg bg-zinc-900/50 border border-zinc-800/60 hover:border-zinc-700/60 transition-colors"
            >
              <h3 className="mb-3 text-xs font-mono font-semibold text-cyan-400 tracking-widest uppercase">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
