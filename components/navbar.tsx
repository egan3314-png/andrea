"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const isExperienceRoute = pathname === "/experience" || pathname.startsWith("/experience/")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="flex items-baseline tracking-tight text-foreground transition-colors duration-200 hover:text-[#94A3B8]"
        >
          <span className="text-lg font-medium">{siteConfig.name}</span>
          <span className="ml-2 text-sm font-normal text-muted-foreground">Andrea.Feng</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => {
            if (item.href === "/experience") {
              return (
                <div key={item.href} className="relative group">
                  <Link
                    href="/experience"
                    className={cn(
                      "relative text-sm font-medium transition-colors duration-200",
                      isExperienceRoute
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                    {isExperienceRoute && (
                      <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>

                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-full pt-4">
                    <div className="min-w-[180px] rounded-2xl border border-border/60 bg-background/95 backdrop-blur-sm shadow-lg p-2">
                      <Link
                        href="/experience?tab=operation"
                        className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        Internship
                      </Link>
                      <Link
                        href="/experience?tab=campus"
                        className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        Campus
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-200",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border/50 bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {siteConfig.nav.map((item) => {
              if (item.href === "/experience") {
                return (
                  <div key={item.href} className="flex flex-col">
                    <Link
                      href="/experience"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-sm font-medium transition-colors duration-200 py-3 px-3 rounded-lg",
                        isExperienceRoute
                          ? "text-foreground bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {item.name}
                    </Link>
                    <div className="pl-3">
                      <Link
                        href="/experience?tab=operation"
                        onClick={() => setIsOpen(false)}
                        className="block text-sm py-2 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        Internship
                      </Link>
                      <Link
                        href="/experience?tab=campus"
                        onClick={() => setIsOpen(false)}
                        className="block text-sm py-2 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        Campus
                      </Link>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 py-3 px-3 rounded-lg",
                    pathname === item.href
                      ? "text-foreground bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}