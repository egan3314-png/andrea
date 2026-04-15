"use client"

import { cn } from "@/lib/utils"
import { Search, BarChart3, TrendingUp, CheckSquare } from "lucide-react"

const iconMap = {
  search: Search,
  chart: BarChart3,
  growth: TrendingUp,
  tasks: CheckSquare,
}

interface CapabilityCardProps {
  title: string
  titleEn: string
  description: string
  icon: string
  className?: string
}

export function CapabilityCard({
  title,
  titleEn,
  description,
  icon,
  className,
}: CapabilityCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Search

  return (
    <div
      className={cn(
        "group flex flex-col items-center text-center p-6 rounded-2xl",
        "bg-card border border-border/60",
        "transition-all duration-300 ease-out",
        "hover:shadow-md hover:shadow-primary/5 hover:border-primary/30",
        className
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors duration-200">
        <Icon className="w-7 h-7 text-[#6B8A9F]" />
      </div>
      <h3 className="text-base font-semibold text-foreground mb-1">
        {title}
      </h3>
      <p className="text-xs text-muted-foreground mb-2">
        {titleEn}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}
