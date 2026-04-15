import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "简历｜冯安琪",
  description: "应用心理学硕士在读，具备用户研究、数据分析、内容运营与项目推进的复合背景。",
}

const education = [
  {
    school: "深圳大学",
    degree: "硕士｜应用心理学｜心理学院",
    time: "2024.09 — 2027.06",
    description:
      "主修课程：心理统计学、Matlab 编程、磁共振图像分析、ERP 原理与技术、社会心理学、心理测量等",
  },
  {
    school: "西南医科大学",
    degree: "本科｜健康服务与管理｜临床医学院",
    time: "2018.09 — 2022.06",
    description:
      "主修课程：生理学、临床营养理论与实践、中医学基础、医学统计学与流行病学、康复医学、系统解剖学、健康服务与营销学等",
  },
  {
    school: "西南医科大学",
    degree: "双学位｜应用心理学｜人文与管理学院",
    time: "2019.09 — 2022.06",
    description: "补充心理学理论与研究方法训练，强化对行为与决策的理解",
  },
]

const projects = [
  {
    name: "成都市非酒精性脂肪性肝病患者知信行调查及影响因素分析",
    time: "2021.03 — 2022.04",
    highlights: [
      "问卷调研：基于 KAP（知信行）模型设计结构化问卷，覆盖基本特征、疾病知识、态度认同及健康行为模块，获得 224 份有效样本",
      "访谈设计：围绕慢性病患者疾病认知、健康态度与行为习惯，采用半结构化访谈梳理研究维度，聚焦认知障碍、行为阻力与服务需求",
      "分析转化：负责数据清洗与统计分析，完成问卷信效度检验；结合访谈与问卷结果输出用户洞察，沉淀为健康宣教与服务优化建议",
    ],
  },
  {
    name: "积极心理学视角下医学院校新兴专业学生就业焦虑与心理韧性关系",
    time: "（本科阶段研究）",
    highlights: [
      "问卷研究：对三所医学院校毕业生开展问卷调研，结合就业焦虑问卷与心理韧性量表完成数据收集",
      "访谈设计：围绕就业焦虑、专业认同与支持资源进行半结构化访谈，比较新兴/非新兴专业学生差异",
      "分析转化：对两类样本进行对比分析与关键变量识别，向职业规划老师输出支持与就业服务优化建议",
    ],
  },
  {
    name: "比例推理过度使用的决策机制及个体差异研究——基于 HDDM 的分析",
    time: "2025.09 — 2027.04",
    highlights: [
      "研究设计：围绕比例推理中的策略偏差设计实验范式，将行为研究从静态结果比较拓展到动态决策过程分析",
      "数据分析：使用 SPSS、Python、Mplus 开展数据处理、分层贝叶斯建模与潜在分类分析",
      "效率提升：优化 prompt，使用 AI 辅助编程支持数据清洗、建模调试与结果可视化，提升复现效率",
    ],
  },
  {
    name: "Colorwear-泸州地方传统扎染技艺传承推广及中药染料研发",
    time: "2019.07 — 2020.11",
    highlights: [
      "项目策划：协助 0-1 设计非遗扎染产品化方案，撰写申报书核心内容，输出市场分析、产品路径、商业模式与风险评估方案",
      "行业分析：基于 PEST 模型梳理政策、经济、社会文化与技术环境，为项目可行性论证提供依据",
      "调研论证：结合实地调研提炼文化基础、落地条件与实施路径；通过 SWOT 与风险评估完善“种植—研发—制作—推广”链路",
      "项目获奖：第六届“互联网+”大学生创新创业大赛校级银奖；2020 年“挑战杯”大学生创业计划竞赛校级铜奖",
    ],
  },
]

const experience = [
  {
    company: "veSync",
    role: "招聘运营实习生",
    time: "2025.08 — 2026.01",
    highlights: [
      "协助秋招项目 0-1 推进：统筹宣传方案、内容排期与渠道落地，对接主视觉与宣传物料",
      "宣传运营：冷启动运营官方小红书，2 月发布 12 篇，总浏览量超 2 万；同步完成公众号更新与官网 Banner 更新",
      "内推优化：参与内推项目迭代，独立完成内推海报、官网内推页面、宣传流程图等内容制作",
      "招聘支持：发布职位、简历筛选、面试安排与录用跟进，累计处理 3000+ 简历；个人小红书协助内推 800+ 优质简历",
    ],
  },
  {
    company: "广州铁头巧研信息咨询有限公司",
    role: "用户及新媒体运营负责人",
    time: "2024.11 — 至今",
    highlights: [
      "内容与增长：独立负责公众号、小红书、抖音内容策划与日常运营；公众号年累计阅读量 128,873 次，年新增粉丝 1 万+",
      "用户研究：自主设计课程反馈问卷，结合社群观察与私聊收集用户声音，分类整理并进一步问卷验证提升结论准确性",
      "学员运营与产品优化：独立运营约 400 人学员社群，推动高难度课程模块重录与调整，优化后相关问题未再重复出现",
    ],
  },
  {
    company: "西南医科大学",
    role: "科研助理",
    time: "2022.06 — 2023.06",
    highlights: [
      "负责试剂耗材管理、技术服务结算、课题审核及科研管理系统维护，支持科研项目与实验平台日常运行",
      "协助公共实验技术中心、病原生物学平台实验室日常管理与运营支持，保障流程规范推进",
    ],
  },
  {
    company: "多附属医院实习",
    role: "实习医生",
    time: "2021.06 — 2022.05",
    highlights: [
      "健康体检：为个体/团体推荐并设计体检套餐方案，参与报告解读，累计为 100+ 人解读体检报告",
      "健康管理实施：参与体重管理门诊运营，协助搭建“筛查—解读—干预—随访”服务链路与社群运营",
      "心理服务支持：参与来访接待、基础访谈与记录整理，理解需求识别与服务配合流程",
    ],
  },
]

const campus = [
  {
    org: "西南医科大学校学生会",
    role: "生活权益部 部长",
    time: "2019.09 — 2020.09",
    highlights: [
      "项目统筹：负责部门管理与项目推进，主导“饮食文化节”“班长联席会”“食堂开放日”等活动，累计覆盖 4000+ 人",
      "策划协同：负责需求梳理、方案策划、宣传执行与现场统筹，对接多部门落实资源与分工，积累跨团队沟通与排期管理经验",
      "运营优化：线上推文/社群传播扩大触达，线下互动设计与流程优化提升参与体验；结合打卡活动与反馈收集增强传播效果",
    ],
  },
  {
    org: "西南医科大学院系学生会",
    role: "心理健康委员会 部长",
    time: "2018.09 — 2020.09",
    highlights: [
      "数据洞察：设计并持续优化每周心理状态追踪量表，面向 300+ 学生收集、整理与分析数据，结合结果访谈识别重点对象",
      "流程管理：梳理心理危机干预流程图，完善识别—上报—转介—跟进机制；负责任务拆解与执行推进，目标完成率 100%",
      "活动成果：策划并执行心理健康主题活动；带领团队获评“心理健康教育先进集体”，并在省级朋辈心理技能辅导大赛获奖",
    ],
  },
]

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

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
                <div>
                  <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">
                    简历
                  </h1>
                  <p className="text-muted-foreground">
                    应用心理学硕士在读｜用户研究 × 数据分析 × 内容增长
                  </p>
                </div>
                <Button
                  asChild
                  className="rounded-full w-fit bg-primary text-[#1E2A38] hover:bg-[#9FB8C8] transition-all duration-200"
                >
                  <a href="/resume/冯安琪简历2026.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    下载 PDF
                  </a>
                </Button>
              </div>

              {/* Education */}
              <section className="mb-12">
                <h2 className="text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border">
                  教育背景
                </h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                        <h3 className="font-semibold text-foreground">
                          {edu.school}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {edu.time}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-[#6B8A9F] mb-1">
                        {edu.degree}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects */}
              <section className="mb-12">
                <h2 className="text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border">
                  项目经历
                </h2>
                <div className="space-y-8">
                  {projects.map((p, index) => (
                    <div key={index}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                        <h3 className="font-semibold text-foreground">
                          {p.name}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {p.time}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {p.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Experience */}
              <section className="mb-12">
                <h2 className="text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border">
                  实践经历
                </h2>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                        <h3 className="font-semibold text-foreground">
                          {exp.company}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {exp.time}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-[#6B8A9F] mb-3">
                        {exp.role}
                      </p>
                      <ul className="space-y-1.5">
                        {exp.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Campus */}
              <section className="mb-12">
                <h2 className="text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border">
                  校园经历
                </h2>
                <div className="space-y-8">
                  {campus.map((c, index) => (
                    <div key={index}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                        <h3 className="font-semibold text-foreground">
                          {c.org}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {c.time}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-[#6B8A9F] mb-3">
                        {c.role}
                      </p>
                      <ul className="space-y-1.5">
                        {c.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Honors & Skills */}
              <section className="mb-12">
                <h2 className="text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border">
                  获奖荣誉及个人技能
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">
                      荣誉证书
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {honors.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-sm rounded-full bg-[#EDF2F7] text-[#475569]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">
                      技能
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-sm rounded-full bg-[#EDF2F7] text-[#475569]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
