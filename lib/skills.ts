export interface SkillModule {
  id: string
  title: string
  titleEn: string
  icon: string
  skills: string[]
  source: string
}

export const skillModules: SkillModule[] = [
  {
    id: "research",
    title: "研究与洞察",
    titleEn: "Research & Insight",
    icon: "search",
    skills: [
      "问卷设计",
      "访谈设计",
      "用户需求提炼",
      "数据到建议的转化",
    ],
    source: "KAP 调研、就业焦虑研究、课程反馈问卷与用户研究",
  },
  {
    id: "data",
    title: "数据分析与建模",
    titleEn: "Data Analysis & Modeling",
    icon: "chart",
    skills: [
      "SPSS",
      "Python",
      "Mplus",
      "数据清洗",
      "统计分析",
      "HDDM",
      "潜在分类分析",
    ],
    source: "硕士研究项目与技能项",
  },
  {
    id: "content",
    title: "内容与增长",
    titleEn: "Content & Growth",
    icon: "growth",
    skills: [
      "公众号运营",
      "小红书内容策划",
      "社群运营",
      "传播与增长支持",
      "用户反馈闭环",
    ],
    source: "veSync 实习与广州铁头巧研经历",
  },
  {
    id: "execution",
    title: "项目协同与执行",
    titleEn: "Project Execution",
    icon: "tasks",
    skills: [
      "活动策划",
      "跨团队协同",
      "流程管理",
      "招聘支持",
      "现场执行",
    ],
    source: "学生会、科研助理、医院实习、招聘支持",
  },
]
