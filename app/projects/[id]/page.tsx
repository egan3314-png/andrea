import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ImagePlaceholder } from "@/components/image-placeholder"
import { projects } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return { title: "项目未找到" }
  }

  return {
    title: `${project.title}｜冯安琪`,
    description: project.summary,
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                返回项目列表
              </Link>

              <div className="mb-8 rounded-2xl overflow-hidden">
                <ImagePlaceholder
                  title="Project Header"
                  aspectRatio="video"
                  className="w-full"
                />
              </div>

              <div className="mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-[#EDF2F7] text-[#475569]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
                  {project.title}
                </h1>
                <p className="text-muted-foreground">{project.time}</p>
              </div>

              <section className="mb-10">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  Project Background
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.details.background}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  What I Did
                </h2>
                <ul className="space-y-2">
                  {project.details.whatIDid.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  Methods / Tools
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.details.methods.map((method) => (
                    <span
                      key={method}
                      className="inline-flex px-3 py-1.5 text-sm font-medium rounded-full bg-[#EDF2F7] text-[#475569]"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  Outcome / Value
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.details.outcome}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  Keywords
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.details.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="inline-flex px-3 py-1 text-sm font-medium rounded-full border border-primary/30 text-[#1E2A38] bg-primary/5"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </section>

              <div className="pt-8 border-t border-border">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-primary text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all duration-200"
                >
                  <Link href="/projects">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    返回项目列表
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
