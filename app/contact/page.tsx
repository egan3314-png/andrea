import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "联系我｜冯安琪",
  description: "欢迎交流研究、用户、内容与职业机会",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                  联系我
                </h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  欢迎交流研究、用户、内容与职业机会
                </p>
              </div>

              <div className="grid gap-6">
                {/* Email Card */}
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#6B8A9F]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-semibold text-foreground mb-2">
                        邮箱联系
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        这是与我取得联系的最佳方式，我会尽快回复。
                      </p>
                      <Button asChild className="rounded-full bg-primary text-[#1E2A38] hover:bg-[#9FB8C8] hover:shadow-md transition-all duration-200">
                        <a href={`mailto:${siteConfig.email}`}>
                          {siteConfig.email}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Message Card */}
                <div className="p-8 rounded-2xl bg-[#F1F5F9]/50 border border-border/40">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E2E8F0] flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-semibold text-foreground mb-2">
                        留言功能
                      </h2>
                      <p className="text-muted-foreground">
                        在线留言表单即将上线，届时你可以直接在这里给我留言。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Closing */}
              <div className="mt-12 text-center">
                <p className="text-muted-foreground text-pretty">
                  期待与更多关注用户、内容与增长的人交流。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
