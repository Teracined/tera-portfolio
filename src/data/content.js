// Single source of truth for site content — pulled from 梁杰华's resume.

export const profile = {
  penName: '梁杰华',
  realName: '梁杰华',
  role: '内容创作者',
  roleEn: 'Content Creator',
  tagline: '用 AI 重塑视觉叙事',
  heroLead:
    '内容创作者 · 视频剪辑与 AI 视觉创作。从脚本创意、分镜设计到剪辑包装，独立打造现象级爆款内容。',
  intro:
    '广播电视学本科在读，深耕短视频内容创作与 AI 视觉工作流。擅长捕捉热点、设计分镜，并将 Image2、Nano Banana、Seedance 等 AI 工具融入创作，突破传统剪辑的素材限制，让创意真正落地为高传播力的画面。',
  location: '广东 · 东莞',
  phone: '15220429089',
  email: '2389088187@qq.com',
  platforms: ['哔哩哔哩', '抖音'],
  // 学校信息
  school: '东莞理工学院',
  major: '广播电视学',
  degree: '本科在读',
  eduPeriod: '2023 – 2027',
  gpa: '绩点 3.57 · 专业前 24%',
}

// Hero 底部信息条（参照旅行网站的筛选条样式）
export const heroFacts = [
  { label: '学校 · School', value: '东莞理工学院', sub: '广播电视学 · 本科在读' },
  { label: '方向 · Focus', value: '视频剪辑', sub: 'AI 视觉创作 / 内容创作' },
  { label: '全网播放 · Reach', value: '85 万+', sub: '现象级爆款作品' },
  { label: '所在地 · Based in', value: '广东 · 东莞', sub: '可面试 / 远程合作' },
]

export const stats = [
  { value: '85', suffix: '万+', label: '全网累计播放' },
  { value: '43', suffix: '万+', label: '哔哩哔哩单作品' },
  { value: '42', suffix: '万+', label: '抖音单作品' },
  { value: '10', suffix: '人', label: '剧组统筹规模' },
]

export const projects = [
  {
    id: 'anime',
    title: 'AI 动漫二创爆款',
    role: '独立主创 · 脚本 / 分镜 / AI 视觉',
    period: '哔哩哔哩 · 抖音',
    metric: '双端 85 万+ 播放',
    desc: '敏锐捕捉现象级动漫最新话热点，整合 Image2 与 Nano Banana 精准生成高质量角色关键帧，再以 Seedance 产出连贯视觉动效，攻克传统剪辑的素材限制。',
    tags: ['Image2', 'Nano Banana', 'Seedance', '爆款选题'],
    accent: 'linear-gradient(135deg,#5b8def,#8b5cf6)',
    href: 'https://www.bilibili.com/video/BV1yaFXz3EDK',
  },
  {
    id: 'meme',
    title: '影视热梗跨界二创',
    role: '独立主创 · 创意混剪 / 特效包装',
    period: '哔哩哔哩',
    metric: '4 万+ 播放',
    desc: '紧跟美剧最新剧集动态，跨界融合《我的世界》流行 Meme 文化进行创意混剪与特效包装，单支视频迅速破圈。',
    tags: ['创意混剪', 'Meme 文化', '特效包装'],
    accent: 'linear-gradient(135deg,#22d3ee,#5b8def)',
    href: 'https://www.bilibili.com/video/BV11bLs6WE8V',
  },
  {
    id: 'ad',
    title: '《我"钙"有 D 健康》',
    role: '分镜设计 · 摄影',
    period: '2025.11 – 2025.12 · 汉维药业',
    metric: '大湾区广告节参赛短片',
    desc: '深度拆解品牌诉求，主导绘制商业广告分镜脚本，将抽象的营销卖点精准转化为高传播力的镜头语言。',
    tags: ['商业广告', '分镜脚本', '摄影'],
    accent: 'linear-gradient(135deg,#ff7a59,#8b5cf6)',
  },
  {
    id: 'film',
    title: '《流年有迹》微电影',
    role: '编剧 · 副导演',
    period: '2025.11 – 2025.12 · 15 分钟剧情短片',
    metric: '统筹 10 人制剧组',
    desc: '独立构建故事框架与分镜设计，运用 AI 大语言模型润色台词、优化场景结构；作为核心主创统筹现场摄制调度，保障拍摄契合通告单进度。',
    tags: ['编剧', '副导演', 'AI 辅助创作', '现场统筹'],
    accent: 'linear-gradient(135deg,#8b5cf6,#22d3ee)',
    cover: '/work-film.jpg',
    href: 'https://www.xinpianchang.com/a13739804',
    platform: '新片场',
  },
  {
    id: 'carve',
    title: '《刻刀》',
    role: '导演 · 后期剪辑',
    period: '2025 – 2026 · NCDA 参赛',
    metric: 'NCDA 未来设计师参赛作品',
    desc: '紧扣"科技赋能匠心，爱使传承不息"主题，主导完成该短片的剧本构思、画面生成与后期制作。深入应用 AI 视频生成技术，突破传统实拍限制，将传统木雕工艺场景与未来机甲元素进行电影级的高质感视觉融合；利用非线性编辑软件进行精细化剪辑与沉浸式音效设计，通过细腻的镜头语言与节奏把控，精准刻画父子情感羁绊与技艺传承，全面展现了前沿 AI 工具在影视工业流中的实战转化能力。',
    tags: ['AIGC', 'AI 视频生成', '微电影', '影视叙事'],
    accent: 'linear-gradient(135deg,#f59e0b,#ef4444)',
    cover: '/work-carve.jpg',
    href: 'https://www.xinpianchang.com/a13739974',
    platform: '新片场',
  },
]

export const strengths = [
  {
    icon: 'spark',
    title: 'AI 内容生成',
    desc: '熟练运用 Image2、Nano Banana、Seedance 等 AI 工具生成关键帧与视觉动效，构建高效的 AI 创作工作流。',
  },
  {
    icon: 'scissors',
    title: '剪辑与包装',
    desc: '精通 PR、AE、剪映，从节奏剪辑到特效包装，把素材打磨成具备传播力的成片。',
  },
  {
    icon: 'storyboard',
    title: '分镜与脚本创意',
    desc: '具备扎实的脚本创意与分镜设计能力，能把抽象诉求转化为清晰、有张力的镜头语言。',
  },
  {
    icon: 'trend',
    title: '热点选题嗅觉',
    desc: '敏锐捕捉动漫、影视与 Meme 热点，快速产出契合平台传播逻辑的爆款选题。',
  },
  {
    icon: 'team',
    title: '项目统筹策划',
    desc: '统筹 10 人制剧组现场调度，协调演员走位与各部门沟通，保障项目按通告单推进。',
  },
  {
    icon: 'cap',
    title: '专业理论功底',
    desc: '广播电视学科班出身，平均绩点 3.57、专业排名前 24%，传播学与节目策划基础扎实。',
  },
]

export const nav = [
  { id: 'hero', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'projects', label: '作品' },
  { id: 'strengths', label: '优势' },
  { id: 'contact', label: '联系' },
]
