"use client"

import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Coursery - Learning Management System",
    description:
      "A comprehensive LMS web application with course management, student enrollment, and progress tracking.",
    image: "/images/coursery.png",
    tags: ["Next.js", "React.js", "Hygraph", "Tailwind CSS", "Clerk Auth"],
    achievements: [
      // "95% user satisfaction rate",
      "Secure payment system integration",
      "Live location tracking for logged-in devices",
    ],
    link: "https://coursery-ashwini.vercel.app/courses",
    github: "https://github.com/akamz22/online-course-portal",
  },

  {
    title: "Zwigato",
    description:
      "A high-performance food delivery web application built using the Swiggy API, optimized with Parcel, Babel, Redux Toolkit, and Tailwind CSS for fast, seamless user experiences.",
    image: "/zwigato.png", // update with your screenshot path
    tags: ["React", "Redux Toolkit", "Tailwind CSS", "Firebase", "Stripe", "Node.js", "Express"],
    achievements: [
      "Implemented secure Firebase authentication for enhanced user security.",
      "Developed an efficient and responsive cart system using Redux Toolkit.",
      "Integrated dynamic restaurant search functionality for seamless discovery.",
      "Added Stripe payment integration for smooth and secure transactions."
    ],
    link: "#", // live link
    github: "https://github.com/akamz22/Zwigato", // GitHub link
  },
  {
    title: "Cryptoverse",
    description:
      "A real-time cryptocurrency dashboard that displays live market data, detailed coin statistics, price charts, and the latest crypto news, all powered by Rapid API.",
    image: "/crypto.png", // update with your actual screenshot path
    tags: ["React", "RapidAPI", "ChartJs", "Ant Design"],
    achievements: [
      "Implemented detailed coin pages with full stats, historical data, and graphical price analysis.",
      "Integrated live cryptocurrency data and updates using Rapid API for near real-time tracking.",
      "Added a dedicated news section to display the latest cryptoverse updates and trends.",
    ],
    link: "#",   // live demo link
    github: "https://github.com/akamz22/project_cryptoverse", // GitHub repo link
  },

  {
    title: "Psychometric Testing Platform",
    description:
      "Secure platform for conducting psychometric assessments with real-time result processing and dynamic reports.",
    image: "/assessment-platform-analytics-charts.jpg",
    tags: ["React", "Next.js", "Node.js", "JWT", "MongoDB", "PDF Generation"],
    achievements: ["Real-time result processing", "Dynamic graph report generation", "Secure authentication"],
    link: "#",
    github: "https://github.com/akamz22/QuizApp",
  },
  {
    title: "Interactive LMS Dashboard",
    description:
      "Fullstack LMS with separate instructor and student views, course filtering, and advanced search capabilities.",
    image: "/education-dashboard-interface.jpg",
    tags: ["React.js", "Node.js", "MongoDB", "Microsoft Teams", "Razorpay", "Tailwind CSS"],
    achievements: ["Bulk course upload feature", "Live session integration", "Modern progress tracking"],
    link: "#",
    github: "https://github.com/akamz22/LMS-Learn",
  },
]

export default function Projects({ id }: { id: string }) {
  return (
    <section id={id} className="py-20 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className="group border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="relative overflow-hidden h-48 bg-muted">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 pt-4">
                {/* <a
                  href={project.link}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium text-primary"
                  target="_blank"

                >
                  <ExternalLink size={16} />
                  View
                </a> */}
                <a
                  href={project.github}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/50 transition-colors text-sm font-medium"
                  target="_blank"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
