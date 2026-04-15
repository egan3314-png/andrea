import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/section-title"
import { ImageLightbox } from "@/components/image-lightbox"
import { VideoLightbox } from "@/components/video-lightbox"
import { allExperiences, type Experience } from "@/lib/experience"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const metadata: Metadata = {
  title: "Portfolio | 冯安琪",
  description:
    "按形式整理作品集：小红书、公众号、海报、Banner、视频等。",
}

type PortfolioKind = "xiaohongshu" | "wechat" | "posters" | "banner" | "mind"

type PortfolioItem =
  | {
      kind: Exclude<PortfolioKind, "mind">
      id: string
      title: string
      roleLabel: string
      image?: string
      link?: string
    }
  | {
      kind: "mind"
      id: string
      title: string
      roleLabel: string
      src: string
    }

function roleLabel(exp: Experience) {
  return `${exp.organization}｜${exp.position}`
}

function normalizeKind(sectionTitle: string): PortfolioKind | null {
  if (sectionTitle.includes("小红书")) return "xiaohongshu"
  if (sectionTitle.includes("公众号")) return "wechat"
  if (sectionTitle === "Posters") return "posters"
  if (sectionTitle === "Banner") return "banner"
  return null
}

function collectPortfolioItems(exps: Experience[]): Record<PortfolioKind, PortfolioItem[]> {
  const buckets: Record<PortfolioKind, PortfolioItem[]> = {
    xiaohongshu: [],
    wechat: [],
    posters: [],
    banner: [],
    mind: [],
  }

  for (const exp of exps) {
    const label = roleLabel(exp)

    if (exp.type === "operation") {
      for (const section of exp.details.gallery) {
        const kind = normalizeKind(section.title)
        if (!kind) continue
        for (const item of section.items) {
          buckets[kind].push({
            kind,
            id: `${exp.id}:${section.title}:${item.id}`,
            title: item.placeholder,
            roleLabel: label,
            image: item.image,
            link: item.link,
          })
        }
      }
      continue
    }

    // campus
    if (exp.details.articles?.length) {
      for (const a of exp.details.articles) {
        buckets.wechat.push({
          kind: "wechat",
          id: `${exp.id}:wechat:${a.id}`,
          title: a.title,
          roleLabel: label,
          link: a.link,
        })
      }
    }

    if (exp.details.videos?.length) {
      for (const v of exp.details.videos) {
        buckets.mind.push({
          kind: "mind",
          id: `${exp.id}:mind:${v.id}`,
          title: v.title,
          roleLabel: label,
          src: v.src,
        })
      }
    }
  }

  return buckets
}

function SectionRow({
  title,
  items,
}: {
  title: string
  items: PortfolioItem[]
}) {
  if (items.length === 0) return null

  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between gap-4 mb-4">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        <p className="text-xs text-muted-foreground">横向滑动浏览</p>
      </div>

      <Carousel
        opts={{ align: "start", dragFree: true }}
        className="px-10 sm:px-12"
      >
        <CarouselContent className="-ml-4">
          {items.map((item) => {
            if (item.kind === "mind") {
              return (
                <CarouselItem
                  key={item.id}
                  className="basis-[260px] pl-4 sm:basis-[300px]"
                >
                  <VideoLightbox
                    src={item.src}
                    title={item.title}
                    className="block w-full"
                  />
                  <p className="mt-2 text-xs text-muted-foreground">
                    {item.roleLabel}
                  </p>
                </CarouselItem>
              )
            }

            const hasImage = Boolean(item.image)
            return (
              <CarouselItem
                key={item.id}
                className={
                  item.kind === "wechat"
                    ? "basis-[150px] pl-4 sm:basis-[170px] md:basis-[190px]"
                    : "basis-[180px] pl-4 sm:basis-[200px] md:basis-[220px]"
                }
              >
                <div className="rounded-2xl border border-border/60 bg-white/70 overflow-hidden">
                  {hasImage ? (
                    <div className="aspect-[3/4] w-full bg-white">
                      <ImageLightbox
                        src={item.image!}
                        alt={item.title}
                        title={item.title}
                        className="h-full w-full"
                        imgClassName="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[3/4] p-4">
                      <p className="text-sm font-medium leading-6 text-foreground">
                        {item.title}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-2 space-y-1">
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {item.roleLabel}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline underline-offset-4"
                    >
                      打开链接
                    </Link>
                  )}
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className="left-0 border-border/60 bg-white/90 hover:bg-white" />
        <CarouselNext className="right-0 border-border/60 bg-white/90 hover:bg-white" />
      </Carousel>
    </section>
  )
}

export default function PortfolioPage() {
  const buckets = collectPortfolioItems(allExperiences)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle
              title="Portfolio / 作品集"
              subtitle="作品集展示：小红书制作、公众号制作、海报设计、Banner设计、视频制作等"
            />

            <div className="max-w-5xl mx-auto">
              <SectionRow title="小红书" items={buckets.xiaohongshu} />
              <SectionRow title="公众号" items={buckets.wechat} />
              <SectionRow title="Posters" items={buckets.posters} />
              <SectionRow title="Banner" items={buckets.banner} />
              <SectionRow title="Mind in Motion" items={buckets.mind} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
