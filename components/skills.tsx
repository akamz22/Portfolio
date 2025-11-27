"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
      "Responsive Design",
      "Web Performance",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "JWT", "RESTful APIs", "Bcrypt", "Nodemailer"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "VS Code", "Postman", "AWS (S3, Glue)", "Data Structures", "Algorithms", "OOP", "Test Automation"],
  },
]

export default function Skills({ id }: { id: string }) {
  return (
    <section id={id} className="py-20 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <Card
            key={idx}
            className="border border-border hover:border-primary/50 transition-colors hover:shadow-lg hover:shadow-primary/10"
          >
            <CardHeader>
              <CardTitle className="text-xl text-primary">{cat.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
