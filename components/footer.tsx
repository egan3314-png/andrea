import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1E2A38] text-[#E2E8F0]">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-medium text-white">
              {siteConfig.name}
            </span>
            <p className="text-sm text-[#94A3B8] text-center md:text-left">
              用数据理解行为，用洞察驱动用户与内容增长
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#374151] flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex items-center gap-6">
            {siteConfig.nav.slice(0, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#94A3B8] hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-[#64748B]">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
