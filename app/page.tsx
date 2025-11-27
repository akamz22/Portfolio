"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About id="about" />
        <Experience id="experience" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>
      <Footer />
    </main>
  )
}
