import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/section-title"
import { SkillCard } from "@/components/skill-card"
import { TimelineItem } from "@/components/timeline-item"
import { skillModules } from "@/lib/skills"
import { sortedTimeline } from "@/lib/timeline"
import { Award, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "关于我｜冯安琪",
  description: "应用心理学硕士在读，拥有健康服务与管理及应用心理学双学科背景。",
}

export default function AboutPage() {
  const honors = [
    "省优秀毕业生",
    "第二届“四川省大学生朋辈心理技能辅导大赛”优秀奖",
    "校优秀毕业生",
    "2021 年度“泸州老窖奖学金”",
    "本科连续三年获得校级学业奖学金",
    "研究生连续两年获得校级学业奖学金",
    "校优秀学生干部",
    "校优秀共青团干部",
    "校健康科普网络讲解大赛优秀奖",
    "第六届“互联网+”大学生创新创业大赛校级银奖",
    "2020 年“挑战杯”大学生创业计划竞赛校级铜奖",
  ]

  const skills = [
    "健康管理师三级",
    "英语 CET6",
    "SPSS",
    "Python",
    "Mplus",
    "秀米",
    "剪映",
    "可画",
    "Xmind",
    "Cursor",
    "Codex",
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
                关于我
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                我目前就读于深圳大学应用心理学硕士，拥有健康服务与管理及应用心理学双学科背景。
                我的兴趣始终围绕同一个问题展开：人为什么会这样思考、这样选择、这样行动。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                在研究中，我习惯通过问卷、访谈、数据分析与建模理解行为背后的机制；
                在实践中，我把这种能力延伸到用户研究、内容运营、招聘传播和产品优化中。
                我希望自己不仅能看见表面的结果，更能识别结果背后的原因，并进一步把洞察转化为可执行的方案。
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-[#F1F5F9]/50">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle
              title="能力模块"
              subtitle="围绕用户理解与业务落地，形成了研究、分析、内容与执行的能力体系"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillModules.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Honors & Skills */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle
              title="荣誉及技能"
              subtitle="用结果与工具沉淀能力：荣誉见证成长，技能支持落地"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative p-6 bg-card rounded-2xl border border-border/60 transition-all duration-300 ease-out hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5 hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-200">
                    <Award className="w-6 h-6 text-[#6B8A9F]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      荣誉证书
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      奖学金 / 竞赛 / 荣誉称号
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {honors.map((item) => (
                    <span
                      key={item}
                      className="inline-flex px-2.5 py-1 text-xs font-medium rounded-full bg-[#EDF2F7] text-[#475569]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="group relative p-6 bg-card rounded-2xl border border-border/60 transition-all duration-300 ease-out hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5 hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-200">
                    <Wrench className="w-6 h-6 text-[#6B8A9F]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      技能
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      证书 / 分析工具 / 内容与设计工具
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((item) => (
                    <span
                      key={item}
                      className="inline-flex px-2.5 py-1 text-xs font-medium rounded-full bg-[#EDF2F7] text-[#475569]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle
              title="成长轨迹"
              subtitle="从健康管理到用户洞察，每一段经历都在塑造今天的我"
            />
            <div className="max-w-2xl">
              {sortedTimeline.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLast={index === sortedTimeline.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-16 bg-[#F1F5F9]/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="text-xl md:text-2xl font-medium text-foreground">
                <span className="text-[#B0C4D1]">{"\""}</span>
                我希望做的，不只是完成任务，而是更深入地理解用户。
                <span className="text-[#B0C4D1]">{"\""}</span>
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
