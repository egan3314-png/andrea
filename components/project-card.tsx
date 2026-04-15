"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/projects"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={cn(
        "group block p-6 bg-card rounded-2xl border border-border",
        "transition-all duration-300 ease-out",
        "hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5",
        "hover:border-primary/40",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#EDF2F7] text-[#475569]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-[#4B5563] transition-colors duration-200 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {project.summary}
          </p>
          <p className="text-xs text-muted-foreground">
            {project.time}
          </p>
        </div>
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-[#4B5563] transition-colors duration-200" />
        </div>
      </div>
    </Link>
  )
}
