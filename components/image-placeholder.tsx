import { ImageIcon } from "lucide-react"

interface ImagePlaceholderProps {
  title?: string
  aspectRatio?: "square" | "video" | "portrait"
  className?: string
}

export function ImagePlaceholder({ 
  title = "Image", 
  aspectRatio = "video",
  className = "" 
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  }

  return (
    <div 
      className={`
        ${aspectClasses[aspectRatio]} 
        bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] 
        rounded-xl 
        flex flex-col items-center justify-center 
        border border-[#E5E7EB]
        ${className}
      `}
    >
      <ImageIcon className="h-8 w-8 text-[#94A3B8] mb-2" />
      <span className="text-xs text-[#94A3B8] font-medium">{title}</span>
    </div>
  )
}
