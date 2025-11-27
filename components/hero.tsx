"use client"

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const handleGetInTouch = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleViewWork = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-24 pb-12">
      <div className="flex md:flex-row flex-col items-center w-full px-3 md:px-0 justify-between">

        {/* Text Content - 55% */}
        <div className="w-full md:w-[55%] space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-3 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium">
            <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
            Available for freelance work
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-balance text-foreground">
            Frontend Developer{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-primary/70 bg-clip-text">
              & Freelancer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
            I craft beautiful, interactive web experiences that users love. Specializing in React, Next.js, and modern
            frontend technologies.
          </p>

          <div className="inline-flex items-center gap-2 px-2 py-2 rounded-full bg-primary/5 border border-primary/30 text-sm font-medium">
            <span className="text-primary">₹1000</span>
            <span className="text-muted-foreground">/ hour (Negotiable)</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-8">
            <button
              onClick={handleGetInTouch}
              className="group px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 justify-center"
            >
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleViewWork}
              className="px-8 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
            >
              View My Work
            </button>
          </div>

          <div className="flex gap-6 justify-center md:justify-start pt-12">
            <a href="https://github.com/akamz22" className="p-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors">
              <Github size={24} className="text-foreground" />
            </a>
            <a href="https://www.linkedin.com/in/ashwini-kumar22/" className="p-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors">
              <Linkedin size={24} className="text-foreground" />
            </a>
          </div>
        </div>

        {/* Image - 40% */}
        <div className="hidden md:flex justify-center md:w-[40%] h-[20%]">
          <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-primary/40 bg-muted">
            <Image
              src="/images/profile.png"
              alt="Ashwini Kumar Gupta - Frontend Developer"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>

  )
}
