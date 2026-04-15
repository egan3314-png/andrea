import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center"
}

export function SectionTitle({ 
  title, 
  subtitle, 
  className,
  align = "left" 
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-12",
      align === "center" && "text-center",
      className
    )}>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground text-pretty max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
