"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { SectionTitle } from "@/components/section-title"
import { ExperienceCard } from "@/components/experience-card"
import { operationExperiences, campusExperiences } from "@/lib/experience"
import { cn } from "@/lib/utils"

type TabType = "operation" | "campus"

export function ExperiencePageClient() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const initialTab = useMemo<TabType>(() => {
    const t = searchParams.get("tab")
    return t === "campus" ? "campus" : "operation"
  }, [searchParams])

  const [activeTab, setActiveTab] = useState<TabType>(initialTab)

  useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab])

  const setTab = (tab: TabType) => {
    setActiveTab(tab)
    router.replace(`/experience?tab=${tab}`)
  }

  return (
    <div className="container mx-auto px-4 md:px-8">
      <SectionTitle
        title="Experience / 实践经历"
        subtitle="从运营实践到校园组织，展示我在不同场景下的成长与积累"
      />

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 mb-10 p-1 bg-[#F1F5F9] rounded-full w-fit mx-auto">
        <button
          onClick={() => setTab("operation")}
          className={cn(
            "px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
            activeTab === "operation"
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Internship Experience
        </button>
        <button
          onClick={() => setTab("campus")}
          className={cn(
            "px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
            activeTab === "campus"
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Campus Experience
        </button>
      </div>

      {/* Operation Experience */}
      {activeTab === "operation" && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Internship Experience
            </h3>
            <p className="text-sm text-muted-foreground">
              在内容运营、用户增长与招聘运营中积累的实战经验
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operationExperiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      )}

      {/* Campus Experience */}
      {activeTab === "campus" && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Campus Experience
            </h3>
            <p className="text-sm text-muted-foreground">
              在学生组织、科研支持与医疗实习中的成长路径
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campusExperiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

