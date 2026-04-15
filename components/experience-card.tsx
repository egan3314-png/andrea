"use client"

import Link from "next/link"
import type { Experience } from "@/lib/experience"
import { ArrowRight } from "lucide-react"

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Link
      href={`/experience/${experience.id}?tab=${experience.type === "campus" ? "campus" : "operation"}`}
      className="group block p-6 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-md transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#EDF2F7] text-[#475569]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Position & Organization */}
        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-[#1E2A38] transition-colors duration-200">
          {experience.position}
        </h3>
        <p className="text-sm text-primary font-medium mb-2">
          {experience.organization}
        </p>

        {/* Time */}
        <p className="text-sm text-muted-foreground mb-3">
          {experience.time}
        </p>

        {/* Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-2">
          {experience.summary}
        </p>

        {/* View Details */}
        <div className="flex items-center gap-1 text-sm font-medium text-[#1E2A38] group-hover:text-primary transition-colors duration-200">
          <span>查看详情</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  )
}
