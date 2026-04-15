"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ImageLightboxProps {
  src: string
  alt: string
  /** Trigger wrapper classes */
  className?: string
  /** Image classes inside trigger */
  imgClassName?: string
  /** Title shown to screen readers */
  title?: string
}

export function ImageLightbox({
  src,
  alt,
  title,
  className,
  imgClassName,
}: ImageLightboxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={className}
          aria-label={title ?? `查看大图：${alt}`}
        >
          <img src={src} alt={alt} className={imgClassName} loading="lazy" />
        </button>
      </DialogTrigger>

      <DialogContent
        className="!fixed !inset-0 !left-0 !top-0 !translate-x-0 !translate-y-0 !w-screen !h-screen !max-w-none rounded-none p-0 border-0 bg-transparent shadow-none"
        showCloseButton
      >
        <DialogTitle className="sr-only">{title ?? alt}</DialogTitle>
        <div className="flex h-full w-full items-center justify-center p-2 md:p-4">
          <img
            src={src}
            alt={alt}
            className="max-h-[calc(100vh-1rem)] max-w-[calc(100vw-1rem)] md:max-h-[calc(100vh-2rem)] md:max-w-[calc(100vw-2rem)] h-auto w-auto object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

