import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/section-title"
import { CapabilityCard } from "@/components/capability-card"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-[#6B8A9F] mb-4 tracking-wide uppercase">
                Applied Psychology · Health Management
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6 text-balance">
              I want to understand what happens — and why
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty max-w-2xl">
                应用心理学硕士在读，拥有医学与心理学交叉背景，关注行为决策、用户洞察与数据分析在真实场景中的应用。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all duration-200">
                  <Link href="/resume">
                    <Download className="mr-2 h-4 w-4" />
                    查看简历
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative gradient - softened */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
          </div>
        </section>

        {/* Core Capabilities Section */}
        <section className="py-20 bg-[#F1F5F9]/50">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle
              title="核心能力"
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.coreCapabilities.map((cap) => (
                <CapabilityCard
                  key={cap.title}
                  title={cap.title}
                  titleEn={cap.titleEn}
                  description={cap.description}
                  icon={cap.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-20 bg-[#F1F5F9]/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-6">
                关于我
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
                我目前就读于深圳大学应用心理学硕士，拥有健康服务与管理及应用心理学双学科背景。
                我的兴趣始终围绕同一个问题展开：人为什么会这样思考、这样选择、这样行动。
              </p>
              <Button asChild variant="outline" className="rounded-full border-primary text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all duration-200">
                <Link href="/about">
                  了解更多
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-4">
                期待与你交流
              </h2>
              <p className="text-muted-foreground mb-8">
                期待与更多关注用户、内容与增长的人交流
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-full bg-primary text-[#1E2A38] hover:bg-[#9FB8C8] hover:shadow-md transition-all duration-200">
                  <a href={`mailto:${siteConfig.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    发送邮件
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all duration-200">
                  <Link href="/contact">
                    联系我
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
