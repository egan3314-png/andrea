"use client"

import { cn } from "@/lib/utils"
import type { SkillModule } from "@/lib/skills"
import { Search, BarChart3, TrendingUp, CheckSquare } from "lucide-react"

const iconMap = {
  search: Search,
  chart: BarChart3,
  growth: TrendingUp,
  tasks: CheckSquare,
}

interface SkillCardProps {
  skill: SkillModule
  className?: string
}

export function SkillCard({ skill, className }: SkillCardProps) {
  const Icon = iconMap[skill.icon as keyof typeof iconMap] || Search

  return (
    <div
      className={cn(
        "group relative p-6 bg-card rounded-2xl border border-border/60",
        "transition-all duration-300 ease-out",
        "hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5",
        "hover:border-primary/30",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-200">
          <Icon className="w-6 h-6 text-[#6B8A9F]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {skill.title}
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            {skill.titleEn}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skill.skills.map((item) => (
          <span
            key={item}
            className="inline-flex px-2.5 py-1 text-xs font-medium rounded-full bg-[#EDF2F7] text-[#475569]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
