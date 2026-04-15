export interface TimelineItem {
  id: string
  time: string
  title: string
  description: string
  tag: "Research" | "Operations" | "Content" | "Healthcare" | "Psychology" | "Education"
}

export const timeline: TimelineItem[] = [
  {
    id: "szu-master",
    time: "2024.09 — 至今",
    title: "深圳大学｜应用心理学硕士",
    description: "系统学习统计、心理测量与计算分析方法，研究兴趣聚焦于决策机制与个体差异。",
    tag: "Psychology",
  },
  {
    id: "decision-research",
    time: "2025.09 — 2027.04",
    title: "比例推理过度使用的决策机制研究",
    description: "使用 Python、SPSS、Mplus、HDDM 分析决策过程与个体差异。",
    tag: "Research",
  },
  {
    id: "vesync",
    time: "2025.08 — 2026.01",
    title: "veSync｜招聘运营实习生",
    description: "参与校招项目从 0 到 1 的宣传、执行、简历筛选与招聘支持。",
    tag: "Operations",
  },
  {
    id: "tietouqiaoyan",
    time: "2024.11 — 至今",
    title: "广州铁头巧研｜用户及新媒体运营负责人",
    description: "独立负责内容策划、社群运营、用户反馈收集与产品优化闭环。",
    tag: "Content",
  },
  {
    id: "research-assistant",
    time: "2022.06 — 2023.06",
    title: "西南医科大学｜科研助理",
    description: "参与科研平台管理、技术服务结算与流程支持。",
    tag: "Research",
  },
  {
    id: "hospital-intern",
    time: "2021.06 — 2022.05",
    title: "多附属医院实习｜实习医生 / 健康管理支持",
    description: "参与体检、报告解读、体重管理门诊与健康服务流程支持。",
    tag: "Healthcare",
  },
  {
    id: "nafld-research",
    time: "2021.03 — 2022.04",
    title: "非酒精性脂肪肝患者知信行研究",
    description: "完成问卷、访谈、数据分析与用户洞察输出。",
    tag: "Research",
  },
  {
    id: "colorwear",
    time: "2019.07 — 2020.11",
    title: "Colorwear 非遗扎染项目",
    description: "参与从 0 到 1 的项目策划，完成市场分析、商业模式与风险评估。",
    tag: "Operations",
  },
  {
    id: "student-union-life",
    time: "2019.09 — 2020.09",
    title: "校学生会生活权益部部长",
    description: "策划并落地校园活动，累计覆盖 4000+ 人，提升项目统筹与运营能力。",
    tag: "Operations",
  },
  {
    id: "mental-health",
    time: "2018.09 — 2020.09",
    title: "院系学生会心理健康委员会部长",
    description: "设计心理状态追踪量表，面向 300+ 学生做持续数据收集与支持。",
    tag: "Psychology",
  },
  {
    id: "swmu-bachelor",
    time: "2018.09 — 2022.06",
    title: "西南医科大学｜健康服务与管理本科 + 应用心理学双学位",
    description: "建立对健康、行为与人的基础理解，形成医学与心理学双重视角。",
    tag: "Education",
  },
]

// Sort by time (most recent first), using start (and then end) year-month.
export const sortedTimeline = [...timeline].sort((a, b) => {
  const parseStartYM = (time: string) => {
    const m = time.match(/(\d{4})\.(\d{2})/)
    if (!m) return Number.NEGATIVE_INFINITY
    return Number(m[1]) * 100 + Number(m[2])
  }

  const parseEndYM = (time: string) => {
    if (time.includes("至今")) return 9999_12
    const matches = [...time.matchAll(/(\d{4})\.(\d{2})/g)]
    const last = matches.at(-1)
    if (!last) return Number.NEGATIVE_INFINITY
    return Number(last[1]) * 100 + Number(last[2])
  }

  const startDiff = parseStartYM(b.time) - parseStartYM(a.time)
  if (startDiff !== 0) return startDiff
  return parseEndYM(b.time) - parseEndYM(a.time)
})
