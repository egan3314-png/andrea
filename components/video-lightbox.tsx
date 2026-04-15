"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Play } from "lucide-react"

interface VideoLightboxProps {
  src: string
  title: string
  className?: string
}

export function VideoLightbox({ src, title, className }: VideoLightboxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={className}
          aria-label={`播放视频：${title}`}
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border/60 bg-black/5">
            <video
              src={src}
              className="h-full w-full object-cover"
              muted
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 grid place-items-center bg-black/10">
              <div className="h-12 w-12 rounded-full bg-black/60 grid place-items-center">
                <Play className="h-5 w-5 text-white ml-0.5" />
              </div>
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2 text-left">
            {title}
          </p>
        </button>
      </DialogTrigger>

      <DialogContent
        className="!fixed !inset-0 !left-0 !top-0 !translate-x-0 !translate-y-0 !w-screen !h-screen !max-w-none rounded-none p-0 border-0 bg-transparent shadow-none"
        showCloseButton
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="flex h-full w-full items-center justify-center p-2 md:p-4">
          <video
            src={src}
            className="max-h-[calc(100vh-1rem)] max-w-[calc(100vw-1rem)] md:max-h-[calc(100vh-2rem)] md:max-w-[calc(100vw-2rem)] h-auto w-auto"
            controls
            autoPlay
            playsInline
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

