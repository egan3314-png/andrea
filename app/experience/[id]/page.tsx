import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ImagePlaceholder } from "@/components/image-placeholder"
import { ImageLightbox } from "@/components/image-lightbox"
import { VideoLightbox } from "@/components/video-lightbox"
import { MetricCard } from "@/components/metric-card"
import { allExperiences, type OperationExperience, type CampusExperience } from "@/lib/experience"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const experience = allExperiences.find((e) => e.id === id)

  if (!experience) {
    return { title: "经历未找到" }
  }

  return {
    title: `${experience.position}｜${experience.organization}｜冯安琪`,
    description: experience.summary,
  }
}

export async function generateStaticParams() {
  return allExperiences.map((exp) => ({
    id: exp.id,
  }))
}

function isOperationExperience(exp: OperationExperience | CampusExperience): exp is OperationExperience {
  return exp.type === "operation"
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { id } = await params
  const experience = allExperiences.find((e) => e.id === id)

  if (!experience) {
    notFound()
  }

  const isOperation = isOperationExperience(experience)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Back Link */}
              <Link
                href={`/experience?tab=${isOperation ? "operation" : "campus"}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                {isOperation ? "Back to Internship Experience" : "Back to Campus Experience"}
              </Link>

              {/* Header Media */}
              {isOperation ? (
                <div className="mb-8 bg-transparent overflow-hidden">
                  <div className="w-full flex items-center justify-center px-4 py-4">
                    <img
                      src={
                        experience.id === "vesync"
                          ? "/image/vesync/vesync-logo.png"
                          : experience.id === "tietou"
                            ? "/image/tietou/tietou-logo.png"
                            : "/image/vesync/vesync-logo.png"
                      }
                      alt={experience.organization}
                      className="w-full max-w-[230px] h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : experience.id === "student-union-psychology" ? (
                <div className="mb-8">
                  <div className="flex items-center justify-center gap-6">
                    <img
                      src="/image/psychology/psych-header-1.png"
                      alt="心理健康委员会"
                      className="h-20 w-auto"
                      loading="lazy"
                    />
                    <img
                      src="/image/psychology/psych-header-2.png"
                      alt="心理健康主题"
                      className="h-20 w-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : experience.id === "student-union-life" ? (
                <div className="mb-8">
                  <div className="flex items-center justify-center gap-6">
                    <img
                      src="/image/life/life-header-1.png"
                      alt="学生会徽章"
                      className="h-20 w-auto"
                      loading="lazy"
                    />
                    <img
                      src="/image/life/life-header-2.png"
                      alt="生活权益部徽章"
                      className="h-20 w-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : experience.id === "medical-intern" ? (
                <div className="mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {(experience as CampusExperience).details.images.map((image) =>
                      image.image ? (
                        <div
                          key={image.id}
                          className="rounded-2xl overflow-hidden border border-border/60 bg-white/70"
                        >
                          <img
                            src={image.image}
                            alt={image.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <ImagePlaceholder
                          key={image.id}
                          title={image.title}
                          aspectRatio="video"
                        />
                      )
                    )}
                  </div>
                </div>
              ) : null}

              {/* Header */}
              <div className="mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-[#EDF2F7] text-[#475569]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">
                  {experience.position}
                </h1>
                <p className="text-lg text-primary font-medium mb-2">
                  {experience.organization}
                </p>
                <p className="text-muted-foreground">
                  {experience.time}
                </p>
              </div>

              {/* Overview */}
              <section className="mb-10">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.details.overview}
                </p>
              </section>

              {/* What I Did */}
              <section className="mb-10">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  What I Did
                </h2>
                <ul className="space-y-2">
                  {experience.details.whatIDid.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Operation Experience: Gallery & Metrics */}
              {isOperation && (
                <>
                  {/* Output Gallery */}
                  <section className="mb-10">
                    <h2 className="text-lg font-semibold text-foreground mb-6">
                      Output Gallery
                    </h2>
                    <div className="space-y-8">
                      {experience.details.gallery.map((section) => (
                        <div key={section.title}>
                          <h3 className="text-sm font-medium text-muted-foreground mb-4">
                            {section.title}
                          </h3>
                          {section.title.includes("小红书") ? (
                            <Carousel
                              opts={{ align: "start", dragFree: true }}
                              className="px-10 sm:px-12"
                            >
                              <CarouselContent className="-ml-3">
                                {section.items.map((item) => {
                                  const CardInner = (
                                    <div className="rounded-2xl border border-border/60 bg-white/70 overflow-hidden transition hover:-translate-y-1 hover:shadow-md">
                                      <div className="aspect-[3/4] w-full bg-white">
                                        {item.image ? (
                                          <img
                                            src={item.image}
                                            alt={item.placeholder}
                                            className="h-full w-full object-contain"
                                            loading="lazy"
                                          />
                                        ) : (
                                          <ImagePlaceholder
                                            title={item.placeholder}
                                            aspectRatio="portrait"
                                          />
                                        )}
                                      </div>
                                    </div>
                                  )

                                  return (
                                    <CarouselItem
                                      key={item.id}
                                      className="basis-[140px] pl-3 sm:basis-[160px] md:basis-[180px]"
                                    >
                                      {item.link ? (
                                        <a
                                          href={item.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block"
                                          aria-label={item.placeholder}
                                        >
                                          {CardInner}
                                        </a>
                                      ) : (
                                        <div
                                          className="opacity-70 cursor-default"
                                          aria-label={item.placeholder}
                                        >
                                          {CardInner}
                                        </div>
                                      )}
                                    </CarouselItem>
                                  )
                                })}
                              </CarouselContent>
                              <CarouselPrevious className="left-0 border-border/60 bg-white/90 hover:bg-white" />
                              <CarouselNext className="right-0 border-border/60 bg-white/90 hover:bg-white" />
                            </Carousel>
                          ) : section.title.includes("公众号") ? (
                            <Carousel
                              opts={{ align: "start", dragFree: true }}
                              className="px-10 sm:px-12"
                            >
                              <CarouselContent className="-ml-4">
                                {section.items.map((item) => (
                                  <CarouselItem
                                    key={item.id}
                                    className="basis-[150px] pl-4 sm:basis-[170px] md:basis-[190px]"
                                  >
                                    <div className="aspect-[3/4] rounded-2xl border border-border/60 bg-white/70 p-4 transition hover:-translate-y-1 hover:shadow-md">
                                      <a
                                        href={item.link || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-full items-start text-sm font-medium leading-6 text-foreground hover:text-primary transition-colors"
                                      >
                                        {item.placeholder}
                                      </a>
                                    </div>
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                              <CarouselPrevious className="left-0 border-border/60 bg-white/90 hover:bg-white" />
                              <CarouselNext className="right-0 border-border/60 bg-white/90 hover:bg-white" />
                            </Carousel>
                          ) : section.title === "Posters" ? (
                            <Carousel
                              opts={{ align: "start", dragFree: true }}
                              className="px-10 sm:px-12"
                            >
                              <CarouselContent className="-ml-3">
                                {section.items.map((item) => {
                                  const CardInner = (
                                    <div className="rounded-2xl border border-border/60 bg-white/70 overflow-hidden transition hover:-translate-y-1 hover:shadow-md">
                                      <div className="aspect-[3/4] w-full bg-white/50">
                                        {item.image ? (
                                          <ImageLightbox
                                            src={item.image}
                                            alt={item.placeholder}
                                            className="h-full w-full"
                                            imgClassName="h-full w-full object-contain"
                                          />
                                        ) : (
                                          <ImagePlaceholder
                                            title={item.placeholder}
                                            aspectRatio="portrait"
                                          />
                                        )}
                                      </div>
                                    </div>
                                  )

                                  return (
                                    <CarouselItem
                                      key={item.id}
                                      className="basis-[140px] pl-3 sm:basis-[160px] md:basis-[180px]"
                                    >
                                      {item.link ? (
                                        <a
                                          href={item.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block"
                                          aria-label={item.placeholder}
                                        >
                                          {CardInner}
                                        </a>
                                      ) : (
                                        <div className="block" aria-label={item.placeholder}>
                                          {CardInner}
                                        </div>
                                      )}
                                    </CarouselItem>
                                  )
                                })}
                              </CarouselContent>
                              <CarouselPrevious className="left-0 border-border/60 bg-white/90 hover:bg-white" />
                              <CarouselNext className="right-0 border-border/60 bg-white/90 hover:bg-white" />
                            </Carousel>
                          ) : section.title === "Banner" ? (
                            <div className="grid grid-cols-1 gap-4">
                              {section.items.map((item) => {
                                const CardInner = (
                                  <div className="transition hover:-translate-y-1 hover:shadow-md rounded-2xl">
                                    {item.image ? (
                                      <ImageLightbox
                                        src={item.image}
                                        alt={item.placeholder}
                                        className="block w-full"
                                        imgClassName="h-full w-full object-contain rounded-2xl bg-white/50"
                                      />
                                    ) : (
                                      <ImagePlaceholder
                                        title={item.placeholder}
                                        aspectRatio="video"
                                      />
                                    )}
                                  </div>
                                )

                                return item.link ? (
                                  <a
                                    key={item.id}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                  >
                                    {CardInner}
                                  </a>
                                ) : (
                                  <div key={item.id} className="block">
                                    {CardInner}
                                  </div>
                                )
                              })}
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                              {section.items.map((item) => {
                                const CardInner = (
                                  <div className="transition hover:-translate-y-1 hover:shadow-md rounded-2xl">
                                    {item.image ? (
                                      <img
                                        src={item.image}
                                        alt={item.placeholder}
                                        className="h-full w-full object-cover rounded-2xl"
                                        loading="lazy"
                                      />
                                    ) : (
                                      <ImagePlaceholder
                                        title={item.placeholder}
                                        aspectRatio="square"
                                      />
                                    )}
                                  </div>
                                )

                                return item.link ? (
                                  <a
                                    key={item.id}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                  >
                                    {CardInner}
                                  </a>
                                ) : (
                                  <div
                                    key={item.id}
                                    className={item.image ? "block" : "block opacity-70"}
                                  >
                                    {CardInner}
                                  </div>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Outcome / Impact */}
                  <section className="mb-10">
                    <h2 className="text-lg font-semibold text-foreground mb-6">
                      Outcome / Impact
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {experience.details.metrics.map((metric, index) => (
                        <MetricCard
                          key={index}
                          value={metric.value}
                          label={metric.label}
                        />
                      ))}
                    </div>
                  </section>
                </>
              )}

              {/* Campus Experience: Images */}
              {!isOperation &&
                experience.id !== "medical-intern" &&
                (experience as CampusExperience).details.images.length > 0 && (
                <section className="mb-10">
                  <h2 className="text-lg font-semibold text-foreground mb-6">
                    Image Gallery
                  </h2>
                  {experience.id === "student-union-psychology" ? (
                    <Carousel
                      opts={{ align: "start", dragFree: true }}
                      className="px-10 sm:px-12"
                    >
                      <CarouselContent className="-ml-3">
                        {(experience as CampusExperience).details.images.map((image) => (
                          <CarouselItem
                            key={image.id}
                            className="basis-[160px] pl-3 sm:basis-[180px] md:basis-[200px]"
                          >
                            {image.image ? (
                              <div className="rounded-2xl overflow-hidden border border-border/60 bg-white/70">
                                <div className="aspect-[3/4] w-full bg-white">
                                  <img
                                    src={image.image}
                                    alt={image.title}
                                    className="h-full w-full object-contain"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            ) : (
                              <ImagePlaceholder
                                title={image.title}
                                aspectRatio="portrait"
                              />
                            )}
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-0 border-border/60 bg-white/90 hover:bg-white" />
                      <CarouselNext className="right-0 border-border/60 bg-white/90 hover:bg-white" />
                    </Carousel>
                  ) : (
                    <div
                      className={
                        experience.id === "student-union-life"
                          ? "grid grid-cols-1 md:grid-cols-3 gap-4"
                          : "grid grid-cols-1 md:grid-cols-2 gap-6"
                      }
                    >
                      {(experience as CampusExperience).details.images.map((image) =>
                        image.image ? (
                          <div
                            key={image.id}
                            className="rounded-2xl overflow-hidden border border-border/60 bg-white/70"
                          >
                            <img
                              src={image.image}
                              alt={image.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <ImagePlaceholder
                            key={image.id}
                            title={image.title}
                            aspectRatio="video"
                          />
                        )
                      )}
                    </div>
                  )}
                </section>
              )}

              {!isOperation &&
                experience.id === "student-union-life" &&
                (experience as CampusExperience).details.articles &&
                (experience as CampusExperience).details.articles!.length > 0 && (
                  <section className="mb-10">
                    <h2 className="text-lg font-semibold text-foreground mb-6">
                      公众号（点击链接跳转板块）
                    </h2>
                    <Carousel
                      opts={{ align: "start", dragFree: true }}
                      className="px-10 sm:px-12"
                    >
                      <CarouselContent className="-ml-4">
                        {(experience as CampusExperience).details.articles!.map((a) => (
                          <CarouselItem
                            key={a.id}
                            className="basis-[150px] pl-4 sm:basis-[170px] md:basis-[190px]"
                          >
                            <div className="aspect-[3/4] rounded-2xl border border-border/60 bg-white/70 p-4 transition hover:-translate-y-1 hover:shadow-md">
                              <a
                                href={a.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-full items-start text-sm font-medium leading-6 text-foreground hover:text-primary transition-colors"
                              >
                                {a.title}
                              </a>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-0 border-border/60 bg-white/90 hover:bg-white" />
                      <CarouselNext className="right-0 border-border/60 bg-white/90 hover:bg-white" />
                    </Carousel>
                  </section>
                )}

              {!isOperation &&
                experience.id === "student-union-psychology" &&
                (experience as CampusExperience).details.videos &&
                (experience as CampusExperience).details.videos!.length > 0 && (
                  <section className="mb-10">
                    <h2 className="text-lg font-semibold text-foreground mb-6">
                      Mind in Motion
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(experience as CampusExperience).details.videos!.map((v) => (
                        <VideoLightbox
                          key={v.id}
                          src={v.src}
                          title={v.title}
                          className="block"
                        />
                      ))}
                    </div>
                  </section>
                )}

              {/* Back Button */}
              <div className="pt-8 border-t border-border">
                <Button asChild variant="outline" className="rounded-full border-primary text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all duration-200">
                  <Link href={`/experience?tab=${isOperation ? "operation" : "campus"}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {isOperation ? "Back to Internship Experience" : "Back to Campus Experience"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
