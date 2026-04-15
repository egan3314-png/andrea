import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExperiencePageClient } from "@/components/experience-page-client"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <Suspense
            fallback={
              <div className="container mx-auto px-4 md:px-8">
                <div className="h-24" />
              </div>
            }
          >
            <ExperiencePageClient />
          </Suspense>
        </section>
      </main>

      <Footer />
    </div>
  )
}
