"use client"

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Contact({ id }: { id: string }) {
  return (
    <section id={id} className="py-10 scroll-mt-10">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 py-8">
          <a
            href="mailto:ashwini.kumar.2210@gmail.com"
            className="group p-6 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground break-all group-hover:text-foreground transition-colors">
              ashwini.kumar.2210@gmail.com
            </p>
          </a>

          <a
            href="tel:+918797083657"
            className="group p-6 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              +91-8797083657
            </p>
          </a>

          <div className="p-6 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">Pune, India</p>
          </div>
        </div>

        {/* <button className="group px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/20 transition-all inline-flex items-center gap-2">
          Send Me an Email
          <ArrowRight size={8} className="group-hover:translate-x-1 transition-transform" />
        </button> */}

        <div className="flex justify-center gap-6 pt-8">
          <a
            href="https://github.com/akamz22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ashwini-kumar22/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/akamazing412/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            LeetCode
          </a>
        </div>
      </div>
    </section>
  )
}
