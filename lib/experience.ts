export interface MetricItem {
  value: string
  label: string
}

export interface GallerySection {
  title: string
  items: {
    id: string
    placeholder: string
    link?: string
    image?: string
  }[]
}

export interface OperationExperience {
  id: string
  type: "operation"
  position: string
  organization: string
  time: string
  tags: string[]
  summary: string
  details: {
    overview: string
    whatIDid: string[]
    gallery: GallerySection[]
    metrics: MetricItem[]
  }
}

export interface CampusExperience {
  id: string
  type: "campus"
  position: string
  organization: string
  time: string
  tags: string[]
  summary: string
  details: {
    overview: string
    whatIDid: string[]
    images: { id: string; title: string; image?: string }[]
    articles?: { id: string; title: string; link: string }[]
    videos?: { id: string; title: string; src: string }[]
  }
}

export type Experience = OperationExperience | CampusExperience

// 运营经验
export const operationExperiences: OperationExperience[] = [
  {
    id: "vesync",
    type: "operation",
    position: "招聘运营实习生",
    organization: "veSync",
    time: "2025.08 — 2026.01",
    tags: ["Recruiting", "Content", "Growth"],
    summary: "参与校招项目从 0 到 1 的传播与执行，负责宣传内容、渠道发布与招聘流程协同。",
    details: {
      overview: "参与校招项目从 0 到 1 的传播与执行，负责宣传内容、渠道发布、官网内容更新、内推支持及招聘流程协同。",
      whatIDid: [
        "统筹秋招宣传方案、内容排期与渠道执行",
        "对接广告方推进主视觉设计及宣传物料制作",
        "联动小红书、公众号、招聘官网、目标高校就业网等渠道完成信息发布",
        "负责校招纪念品设计、选品、对接与邮寄执行",
        "冷启动并运营官方小红书账号，2 月累计发布 12 篇内容，总浏览量超 2 万",
        "完成公众号更新、校招简章制作与投放、官网 Banner 更新",
        "利用个人小红书协助内推 800+ 份优质校招简历",
        "参与公司内推制度迭代，完成内推海报、官网页面与宣传流程图内容制作",
        "支持岗位发布、简历筛选、面试安排、录用沟通及跟进，累计处理 3000+ 简历",
      ],
      gallery: [
        {
          title: "小红书作品集（点击链接可跳转）",
          items: [
            {
              id: "xhs-1",
              placeholder: "小v被公司养的很好：360度看我的办公生活",
              link: "http://xhslink.com/o/AZlwWOarrsO",
              image: "/image/vesync/xhs-1.png",
            },
            {
              id: "xhs-2",
              placeholder: "毕业必去公司❗️VeSync校招岗位合集来了",
              link: "http://xhslink.com/o/5c6O7LbSgux",
              image: "/image/vesync/xhs-2.png",
            },
            {
              id: "xhs-3",
              placeholder: "🎁挑战全网首开“veSync校招礼盒”",
              link: "http://xhslink.com/o/6jhcX9QsUix",
              image: "/image/vesync/xhs-3.png",
            },
            {
              id: "xhs-4",
              placeholder: "🥘在veSync上个班怎么连锅都支起来了",
              link: "http://xhslink.com/o/77l1CcRgLFM",
              image: "/image/vesync/xhs-4.png",
            },
            {
              id: "xhs-5",
              placeholder: "❤️‍🔥26届校招｜大家快来做小v的同事",
              link: "http://xhslink.com/o/7xmnZL7mHUU",
              image: "/image/vesync/xhs-5.png",
            },
            {
              id: "xhs-6",
              placeholder: "📢这家外企在招实习生啦｜好多专业都能投",
              link: "http://xhslink.com/o/4np9FODK1r6",
              image: "/image/vesync/xhs-6.png",
            },
            {
              id: "xhs-7",
              placeholder: "【Q&A篇】秋招有疑问❓今天小v都为你解答",
              link: "http://xhslink.com/o/6EpAN69JPcm",
              image: "/image/vesync/xhs-7.png",
            },
            {
              id: "xhs-8",
              placeholder: "📣veSync研发平台招募技术共创者",
              link: "http://xhslink.com/o/9Oe6KpziXnQ",
              image: "/image/vesync/xhs-8.png",
            },
            {
              id: "xhs-9",
              placeholder: "🎉一起庆祝 veSync 14th Anniversary",
              link: "http://xhslink.com/o/1DqWKOn1ysD",
              image: "/image/vesync/xhs-9.png",
            },
            {
              id: "xhs-10",
              placeholder: "VeSync的中秋快乐晒一晒🌕",
              link: "http://xhslink.com/o/7NeJhwyO7v7",
              image: "/image/vesync/xhs-10.png",
            },
            {
              id: "xhs-11",
              placeholder: "好急❗VeSync到底什么来头",
              link: "http://xhslink.com/o/9FPvMGX7XIE",
              image: "/image/vesync/xhs-11.png",
            },
            {
              id: "xhs-12",
              placeholder: "Hi，这里是 VeSync～✨（视频）",
              link: "https://www.xiaohongshu.com/discovery/item/68dba615000000000700d172?app_platform=ios&app_version=9.25&share_from_user_hidden=true&xsec_source=app_share&type=video&xsec_token=CBt-qBg6ztZJysmuCmKKGBNo8Mh5Ago14xPIvlonAU6eM=&author_share=1&xhsshare=CopyLink&shareRedId=OD85QUlGOUI2NzUyOTgwNjg0OTk7OjY6&apptime=1776152436&share_id=f6b9590664574bfb82da3f37dea39297",
              image: "/image/vesync/xhs-12.png",
            },
          ],
        },
        {
          title: "公众号作品集（点击链接可跳转）",
          items: [
            {
              id: "wechat-1",
              placeholder: "veSync新产品研发平台｜正在寻找“硬核”队友",
              link: "https://mp.weixin.qq.com/s/HSXp0uhJ7D_L6c1tUJL4Jg",
            },
            {
              id: "wechat-2",
              placeholder: "veSync校招礼盒开箱｜我们把“欢迎你”装进了这份心意",
              link: "https://mp.weixin.qq.com/s/Cs_IIQsI5Lh3QFDm4TB7Sw",
            },
          ],
        },
        {
          title: "Posters",
          items: [
            {
              id: "poster-1",
              placeholder: "内推海报 01",
              image: "/image/vesync/poster-1.png",
            },
            {
              id: "poster-2",
              placeholder: "内推海报 02",
              image: "/image/vesync/poster-2.png",
            },
            {
              id: "poster-3",
              placeholder: "内推海报 03",
              image: "/image/vesync/poster-3.png",
            },
            {
              id: "poster-4",
              placeholder: "内推海报 04",
              image: "/image/vesync/poster-4.png",
            },
            {
              id: "poster-5",
              placeholder: "内推海报 05",
              image: "/image/vesync/poster-5.png",
            },
            {
              id: "poster-6",
              placeholder: "内推海报 06",
              image: "/image/vesync/poster-6.png",
            },
            {
              id: "poster-7",
              placeholder: "内推海报 07",
              image: "/image/vesync/poster-7.png",
            },
          ],
        },
        {
          title: "Banner",
          items: [
            {
              id: "banner-1",
              placeholder: "官网 Banner 01",
              image: "/image/vesync/banner-1.png",
            },
            {
              id: "banner-2",
              placeholder: "官网 Banner 02",
              image: "/image/vesync/banner-2.png",
            },
          ],
        },
      ],
      metrics: [
        { value: "12", label: "篇小红书内容" },
        { value: "2万+", label: "总浏览量" },
        { value: "800+", label: "内推简历" },
        { value: "3000+", label: "处理简历" },
      ],
    },
  },
  {
    id: "tietou",
    type: "operation",
    position: "用户及新媒体运营负责人",
    organization: "广州铁头巧研信息咨询有限公司",
    time: "2024.11 — 至今",
    tags: ["Content", "User Insight", "Social Media"],
    summary: "独立负责公众号、小红书、抖音内容策划与日常运营，形成「内容—反馈—优化」的闭环。",
    details: {
      overview: "围绕考研用户需求独立负责公众号、小红书、抖音内容策划与日常运营，同时承担学员社群运营、用户反馈收集与课程优化支持工作，形成「内容—反馈—优化」的闭环。",
      whatIDid: [
        "独立负责公众号、小红书、抖音账号的内容策划与日常运营",
        "围绕考研用户需求进行选题、撰写与传播",
        "每月产出约 10 篇公众号文章",
        "截止25年底，公众号年累计阅读量 138,873 次",
        "单平台年新增粉丝 1 万+",
        "结合实时热点、用户关注点与竞品策略优化内容方向",
        "自主设计课程反馈问卷，结合社群观察与学员私聊收集用户声音",
        "识别课程难点、服务痛点及高频需求",
        "区分个体问题与群体问题，并进一步用问卷验证",
        "独立运营约 400 人已报名学员社群",
        "推动高难度课程模块重录与调整，优化后相关问题未再重复出现",
      ],
      gallery: [
        {
          title: "部分小红书展示（点击跳转链接）",
          items: [
            {
              id: "xhs-1",
              placeholder: "小红书封面 01",
              link: "http://xhslink.com/o/7yLpxpyX19c",
              image: "/image/tietou/xhs-1.jpg",
            },
            {
              id: "xhs-2",
              placeholder: "小红书封面 02",
              link: "http://xhslink.com/o/6K1bCEOdObI",
              image: "/image/tietou/xhs-2.jpg",
            },
            {
              id: "xhs-3",
              placeholder: "小红书封面 03",
              link: "http://xhslink.com/o/ApVcELC1yZ6",
              image: "/image/tietou/xhs-3.jpg",
            },
            {
              id: "xhs-4",
              placeholder: "小红书封面 04",
              link: "http://xhslink.com/o/63vgnPN4ppG",
              image: "/image/tietou/xhs-4.jpg",
            },
            {
              id: "xhs-5",
              placeholder: "小红书封面 05",
              link: "http://xhslink.com/o/5gCXJmqUC9o",
              image: "/image/tietou/xhs-5.jpg",
            },
            {
              id: "xhs-6",
              placeholder: "小红书封面 06",
              link: "http://xhslink.com/o/XOmha7aKey",
              image: "/image/tietou/xhs-6.jpg",
            },
            {
              id: "xhs-7",
              placeholder: "小红书封面 07",
              link: "http://xhslink.com/o/5F2X4NIHalA",
              image: "/image/tietou/xhs-7.jpg",
            },
          ],
        },
        {
          title: "部分公众号作品展示（点击链接可跳转）",
          items: [
            {
              id: "wechat-1",
              placeholder: "深大347初试成绩结构分析：哪一科最拉分？谁最需要重视复试？",
              link: "https://mp.weixin.qq.com/s/721EpppnINuGB0u59RpmjA",
            },
            {
              id: "wechat-2",
              placeholder: "非全别迷茫｜最后60+天复习重点方向在这里！",
              link: "https://mp.weixin.qq.com/s/gs5ceZeGQWp0l5kp2w5aHw",
            },
            {
              id: "wechat-3",
              placeholder: "深大心理学学生看过来：如何利用深圳地域优势，轻松拿下高含金量实习？",
              link: "https://mp.weixin.qq.com/s/WQiCf188WQSQdnoq3Jrp9Q",
            },
            {
              id: "wechat-4",
              placeholder: "透视深大347考纲“变脸”：你以为变的只有书本数量吗？",
              link: "https://mp.weixin.qq.com/s/uE3U5TRu3BpqrYZent4y0w",
            },
            {
              id: "wechat-5",
              placeholder: "好奇心警告！深大心理学院近一年科研成果“大揭秘”！",
              link: "https://mp.weixin.qq.com/s/pey1YgyGaTQcrGJhf4iYpQ",
            },
            {
              id: "wechat-6",
              placeholder: "【心理学考研-背书阶段】怎么高效背进去？怎么扎实写出来？",
              link: "https://mp.weixin.qq.com/s/Am7hT1apC3N-MmiI2895vQ",
            },
            {
              id: "wechat-7",
              placeholder: "听说人工智能+心理学=王炸！？",
              link: "https://mp.weixin.qq.com/s/YNc-s_zCmIT9oCBsJOB1qg",
            },
            {
              id: "wechat-8",
              placeholder: "美国心理学行业是什么情况？都能赚大钱吗？",
              link: "https://mp.weixin.qq.com/s/2ftYxw_KqT4hi3_LPGQnpg",
            },
            {
              id: "wechat-9",
              placeholder: "用读文献的方式揭秘【深圳大学347培养方案】：2万+字的论文和6个月实习的硬核修炼之路",
              link: "https://mp.weixin.qq.com/s/uyhuYIrfkZDOqSFzRAVc6g",
            },
            {
              id: "wechat-10",
              placeholder: "用葫芦丝吹着背完10本书？我居然真的做到了！",
              link: "https://mp.weixin.qq.com/s/j0LL4wifQafLAKztKe5QBQ",
            },
            {
              id: "wechat-11",
              placeholder: "心理学毕业生的【考公】图鉴",
              link: "https://mp.weixin.qq.com/s/G3jJxNiSubiohQGHErN8cw",
            },
          
          ],
        },
      ],
      metrics: [
        { value: "~10", label: "篇/月内容产出" },
        { value: "138,873", label: "截止25年底公众号年累计阅读量" },
        { value: "1万+", label: "单平台年新增粉丝" },
        { value: "400", label: "人社群规模" },
      ],
    },
  },
]

// 校园经验
export const campusExperiences: CampusExperience[] = [
  {
    id: "student-union-life",
    type: "campus",
    position: "生活权益部部长",
    organization: "西南医科大学校学生会",
    time: "2019.09 — 2020.09",
    tags: ["Leadership", "Event Planning", "Operations"],
    summary: "负责部门管理与校园活动策划执行，累计覆盖活动参与人数 4000+。",
    details: {
      overview: "负责部门管理与校园活动策划执行，在活动组织、跨部门协同和线上线下传播中积累了较强的项目推进经验。",
      whatIDid: [
        "统筹部门日常管理与项目推进",
        "撰写策划书并主导饮食文化节、班长联席会、食堂开放日等活动",
        "累计覆盖活动参与人数 4000+",
        "负责活动从需求梳理到宣传执行、现场统筹的全流程推进",
        "对接多个部门完成资源协调与分工落实",
        "线上通过推文、社群通知和活动传播扩大触达",
        "线下通过现场组织、互动设计和流程优化提升参与体验",
        "结合打卡活动和社群运营增强活动参与度与传播效果",
      ],
      images: [
        { id: "life-gallery-1", title: "饮食文化节活动", image: "/image/life/life-gallery-1.png" },
        { id: "life-gallery-2", title: "现场互动与执行", image: "/image/life/life-gallery-2.png" },
        { id: "life-gallery-3", title: "活动合影", image: "/image/life/life-gallery-3.png" },
      ],
      articles: [
        {
          id: "wechat-life-1",
          title: "521权益告白日——第三届班长联席会",
          link: "https://mp.weixin.qq.com/s/9ucfEhJTSONmEMlihzyeQw",
        },
        {
          id: "wechat-life-2",
          title: "品食饮芳鲜，普九州同庆——第四届饮食文化节",
          link: "https://mp.weixin.qq.com/s/yFQc8hfIiHbMDFKge0Sh4Q",
        },
        {
          id: "wechat-life-3",
          title: "小提案也有大力量——第一届提案大赛",
          link: "https://mp.weixin.qq.com/s/f7NkMLSDKzEVFn5xabme5w",
        },
      ],
    },
  },
  {
    id: "student-union-psychology",
    type: "campus",
    position: "心理健康委员会部长",
    organization: "西南医科大学院系学生会",
    time: "2018.09 — 2020.09",
    tags: ["Psychology", "Data Collection", "Leadership"],
    summary: "围绕学生心理状态追踪、风险识别、活动组织和流程建设开展工作。",
    details: {
      overview: "围绕学生心理状态追踪、风险识别、活动组织和流程建设开展工作，是我最早接触「数据收集 + 需求识别 + 支持服务」的经历之一。",
      whatIDid: [
        "独立设计并持续优化每周心理状态追踪量表",
        "面向 300+ 学生开展数据收集、整理与分析",
        "定时访谈异常或潜在风险学生，为重点对象识别与后续支持提供依据",
        "梳理并制作心理危机干预流程图",
        "作为项目第二负责人协助心理健康视频从 0 到 1 落地",
        "负责部门任务拆解、成员分工与执行推进",
        "每学期举办 2 场以上全员参与的心理健康主题活动",
        "带领团队获评心理健康教育先进集体",
        "代表学校参加四川省大学生朋辈心理技能辅导大赛并获奖",
      ],
      images: [
        { id: "psych-gallery-1", title: "心理活动海报 01", image: "/image/psychology/psych-gallery-1.png" },
        { id: "psych-gallery-2", title: "心理活动海报 02", image: "/image/psychology/psych-gallery-2.png" },
        { id: "psych-gallery-3", title: "心理活动海报 03", image: "/image/psychology/psych-gallery-3.png" },
        { id: "psych-gallery-4", title: "心理活动海报 04", image: "/image/psychology/psych-gallery-4.png" },
        { id: "psych-gallery-5", title: "朋辈心理辅导技能大赛", image: "/image/psychology/psych-gallery-5.png" },
      ],
      videos: [
        {
          id: "mind-2",
          title: "你好，缘分",
          src: "/video/psychology/mind-2.mp4",
        },
        {
          id: "mind-3",
          title: "再来一次我也愿意",
          src: "/video/psychology/mind-3.mp4",
        },
      ],
    },
  },
  {
    id: "research-assistant",
    type: "campus",
    position: "科研助理",
    organization: "西南医科大学",
    time: "2022.06 — 2023.06",
    tags: ["Research Support", "Administration", "Operations"],
    summary: "参与科研项目与实验平台的日常运行支持，熟悉科研管理、平台协同与流程规范。",
    details: {
      overview: "参与科研项目与实验平台的日常运行支持，熟悉科研管理、平台协同与流程规范。",
      whatIDid: [
        "负责试剂耗材管理",
        "协助技术服务结算",
        "支持校内外课题审核",
        "维护科研管理系统",
        "协助公共实验技术中心与病原生物学平台日常管理与运营支持",
        "设计公共实验技术中心六部门文化墙",
        "保障相关流程规范推进",
      ],
      images: [],
    },
  },
  {
    id: "medical-intern",
    type: "campus",
    position: "实习医生",
    organization: "多附属医院实习",
    time: "2021.06 — 2022.05",
    tags: ["Healthcare", "User Service", "Operations"],
    summary: "在多个医疗相关场景中参与体检、健康管理、心理服务支持和临床轮转。",
    details: {
      overview: "在多个医疗相关场景中参与体检、健康管理、心理服务支持和临床轮转，形成了对医疗服务链路与用户需求的真实理解。",
      whatIDid: [
        "面向个体及团体用户推荐并设计体检套餐方案",
        "结合差异化健康需求提供筛查建议",
        "完成眼科基础检查、静态/动态心电图、动态血压监测、睡眠监测、中医经络仪、四诊仪等技术学习与设备操作训练",
        "参与报告解读，累计为 100+ 人解读体检报告",
        "参与体重管理门诊运营，围绕筛查、解读、干预、随访构建服务链路",
        "协助完成运动饮食指导及社群运营",
        "联合多科室推进异常指标用户的转诊衔接与后续管理",
        "在心理健康相关机构参与来访接待、基础访谈与记录整理",
        "协助开展个案跟进与沟通支持",
      ],
      images: [
        { id: "intern-1", title: "临床见习 01", image: "/image/intern/intern-1.png" },
        { id: "intern-2", title: "临床见习 02", image: "/image/intern/intern-2.png" },
        { id: "intern-3", title: "临床见习 03", image: "/image/intern/intern-3.png" },
      ],
    },
  },
]

export const allExperiences: Experience[] = [
  ...operationExperiences,
  ...campusExperiences,
]
