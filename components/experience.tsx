"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Accenture",
    period: "Feb 2025 - Present",
    description: "Working with AWS services and test automation to improve system reliability.",
    achievements: [
      "Raised AI agents accuracy by 18% through focused test suites",
      "Trimmed false bug reports by 25% after debugging",
      "Completed AWS training (Glue, S3)",
    ],
    tags: ["AWS", "Python", "Test Automation", "API Testing"],
  },
  {
    title: "Fullstack Developer",
    company: "Samvit",
    period: "June 2024 - Feb 2025",
    description: "Developed secure platforms and comprehensive learning management systems.",
    achievements: [
      "Built Psychometric Testing Platform with real-time result processing",
      "Developed LMS with instructor and student separate authentication",
      "Integrated payment gateway (Razorpay) and Microsoft Teams",
    ],
    tags: ["React", "Next.js", "Node.js", "MongoDB", "JWT"],
  },
]

export default function Experience({ id }: { id: string }) {
  return (
    <section id={id} className="py-20 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-12">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <Card
            key={idx}
            className="border border-border hover:border-primary/50 transition-colors hover:shadow-lg hover:shadow-primary/10"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">{exp.company}</CardDescription>
                </div>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4">
                {exp.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
