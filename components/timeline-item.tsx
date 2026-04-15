"use client"

import { cn } from "@/lib/utils"
import type { TimelineItem as TimelineItemType } from "@/lib/timeline"

const tagColors = {
  Research: "bg-[#E0E7ED] text-[#4B5563]",
  Operations: "bg-[#FEF3C7] text-[#92400E]",
  Content: "bg-[#D1FAE5] text-[#065F46]",
  Healthcare: "bg-[#FCE7F3] text-[#9D174D]",
  Psychology: "bg-[#EDE9FE] text-[#5B21B6]",
  Education: "bg-[#F1F5F9] text-[#475569]",
}

interface TimelineItemProps {
  item: TimelineItemType
  isLast?: boolean
}

export function TimelineItem({ item, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 pb-10 group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-px bg-[#D6E0E7]" />
      )}

      {/* Timeline dot */}
      <div className="relative flex-shrink-0">
        <div className="w-6 h-6 rounded-full border-2 border-[#D6E0E7] bg-background flex items-center justify-center group-hover:border-primary transition-colors duration-300">
          <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1] group-hover:bg-primary transition-colors duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pt-0.5 pb-2 px-4 -ml-1 rounded-xl transition-all duration-300 group-hover:bg-[#F8FAFC] group-hover:shadow-sm">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            {item.time}
          </span>
          <span
            className={cn(
              "inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full",
              tagColors[item.tag]
            )}
          >
            {item.tag}
          </span>
        </div>
        <h3 className="text-base font-semibold text-foreground mb-1.5 group-hover:text-[#4B5563] transition-colors duration-200">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  )
}
