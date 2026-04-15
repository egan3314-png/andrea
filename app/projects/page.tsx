import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/section-title"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Research & Projects | 冯安琪",
  description: "按时间顺序展示科研与大创项目与实践内容",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle title="Research & Projects" align="left" />

            <div className="relative mt-12 space-y-10 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-border">
              {projects.map((project) => (
                <div key={project.id} className="relative pl-12">
                  <div className="absolute left-[9px] top-2 h-3 w-3 rounded-full bg-primary" />

                  <div className="rounded-2xl border border-border/60 bg-white/70 p-6 shadow-sm">
                    <p className="text-sm text-muted-foreground">{project.time}</p>

                    <h2 className="mt-2 text-xl font-semibold text-foreground">
                      {project.title}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-4 text-base leading-7 text-foreground/80">
                      {project.summary}
                    </p>

                    <div className="mt-5">
                      <h3 className="text-sm font-medium text-foreground">项目内容</h3>
                      <ul className="mt-3 ml-5 list-disc space-y-2 text-sm leading-6 text-foreground/80">
                        {project.details.whatIDid.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5">
                      <h3 className="text-sm font-medium text-foreground">方法与工具</h3>
                      <p className="mt-2 text-sm leading-6 text-foreground/80">
                        {project.details.methods.join(" / ")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}