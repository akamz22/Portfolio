"use client"

export default function About({ id }: { id: string }) {
  return (
    <section id={id} className="py-20 scroll-mt-20">
      <div className="space-y-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">About Me</h2>
          <div className="space-y-4 text-muted-foreground max-w-3xl">
            <p>
              I'm a passionate frontend developer with expertise in building scalable, user-friendly web applications.
              With a strong foundation in React and Next.js, I focus on creating seamless digital experiences.
            </p>
            <p>
              Currently, I'm a Fullstack Developer at Accenture and previously worked at Samvit, where I developed
              secure platforms and learning management systems. I'm driven by clean code, performance optimization, and
              cutting-edge web technologies.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to personal projects, competing on LeetCode (520+
              problems solved), or exploring new frontend frameworks and best practices.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
          <div className="text-3xl font-bold text-primary">1.5+</div>
          <div className="text-sm text-muted-foreground">Years of Experience</div>
        </div>
        <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
          <div className="text-3xl font-bold text-primary">8+</div>
          <div className="text-sm text-muted-foreground">Projects Completed</div>
        </div>
        {/* <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
          <div className="text-3xl font-bold text-primary">520+</div>
          <div className="text-sm text-muted-foreground">LeetCode Problems</div>
        </div> */}
        <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
          <div className="text-3xl font-bold text-primary">100%</div>
          <div className="text-sm text-muted-foreground">Client Satisfaction</div>
        </div>
      </div>
    </section>
  )
}
