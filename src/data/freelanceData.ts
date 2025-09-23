// 接单页面专用数据管理
export interface ServiceCategory {
  id: string
  name: string
  icon: string
  color: string
  description: string
  technologies: string[]
  services: string[]
  priceRange: string
  deliveryTime: string
  examples: string[]
}

export interface Achievement {
  id: string
  type: 'honor' | 'award' | 'patent' | 'software' | 'paper'
  title: string
  organization: string
  year: number
  level: 'provincial' | 'national' | 'international'
  description?: string
}

export interface ProjectExperience {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  role: string
  duration: string
  highlights: string[]
  thumbnail: string
}

// 个人专业信息
export const professionalProfile = {
  name: "Web3D & GIS 专家",
  title: "BIM/3D模型优化 | 智慧应用开发 | GIS空间分析",
  slogan: "让数据可视化，让模型更高效，让空间更智慧",
  experience: "8+ 年专业经验",
  specialties: [
    "BIM模型优化与渲染",
    "智慧工地/工厂/交通解决方案", 
    "GIS数据处理与空间分析",
    "二三维地图联动开发",
    "Revit插件定制开发"
  ],
  availability: "立即可接单",
  response: "24小时内回复",
  location: "江苏 | 远程服务全国",
  email: "your.email@example.com",
  wechat: "your_wechat_id",
  qq: "12345678",
  phone: "138****8888"
}

// 服务分类
export const serviceCategories: ServiceCategory[] = [
  {
    id: "bim-3d",
    name: "BIM/3D模型优化",
    icon: "🏗️",
    color: "#2563eb",
    description: "专业的BIM模型处理、3D模型优化压缩、渲染应用开发服务",
    technologies: ["Revit", "3ds Max", "Three.js", "Babylon.js", "WebGL"],
    services: [
      "BIM模型轻量化处理",
      "3D模型格式转换与优化",
      "Web端3D渲染引擎开发", 
      "模型压缩与LOD处理",
      "Revit插件定制开发",
      "建筑漫游与VR展示"
    ],
    priceRange: "¥2,000 - ¥15,000",
    deliveryTime: "3-15天",
    examples: [
      "某大型建筑项目BIM模型Web端展示系统",
      "工业设备3D模型轻量化处理(文件大小减少80%)",
      "Revit自动化建模插件开发"
    ]
  },
  {
    id: "smart-city",
    name: "智慧应用开发",
    icon: "🏙️", 
    color: "#059669",
    description: "智慧工地、智慧工厂、智慧交通等行业应用系统开发",
    technologies: ["Vue.js", "C#", "WebGL", "IoT", "大数据可视化"],
    services: [
      "智慧工地监控系统",
      "智慧工厂数字孪生",
      "智慧交通可视化平台",
      "设备运维管理系统",
      "实时数据监控大屏",
      "移动端巡检应用"
    ],
    priceRange: "¥10,000 - ¥80,000", 
    deliveryTime: "15-60天",
    examples: [
      "某建筑集团智慧工地管理平台(覆盖50+工地)",
      "制造企业数字化工厂系统", 
      "城市交通态势感知平台"
    ]
  },
  {
    id: "gis-analysis",
    name: "GIS数据处理",
    icon: "🗺️",
    color: "#dc2626", 
    description: "GIS数据坐标转换、多源整合、空间分析、专题图制作",
    technologies: ["OpenLayers", "PostGIS", "QGIS", "ArcGIS", "Python"],
    services: [
      "坐标系转换与数据纠偏",
      "多源数据整合与清洗", 
      "缓冲区分析与叠加分析",
      "分级符号图制作",
      "热力图与密度分析",
      "OGC标准服务搭建"
    ],
    priceRange: "¥1,500 - ¥12,000",
    deliveryTime: "2-10天", 
    examples: [
      "全市土地利用数据整合与分析",
      "环境监测站点缓冲区影响分析",
      "人口分布热力图可视化"
    ]
  },
  {
    id: "map-dev",
    name: "地图应用开发",
    icon: "🌍",
    color: "#7c3aed",
    description: "OpenLayers+Cesium二三维地图联动，定制化地图应用开发",
    technologies: ["OpenLayers", "Cesium", "Vue.js", "WebGL", "Turf.js"],
    services: [
      "二三维地图联动开发",
      "自定义地图控件",
      "空间量测与标绘",
      "地形分析与可视化", 
      "卫星影像处理展示",
      "移动端地图应用"
    ],
    priceRange: "¥5,000 - ¥25,000",
    deliveryTime: "7-30天",
    examples: [
      "国土资源管理二三维一体化平台",
      "应急指挥地图系统",
      "旅游景区导览地图应用"
    ]
  },
  {
    id: "custom-dev",
    name: "定制开发",
    icon: "⚙️",
    color: "#ea580c",
    description: "基于客户需求的定制化Web3D和GIS解决方案",
    technologies: ["Full Stack", "微服务", "云部署", "AI/ML"],
    services: [
      "需求分析与方案设计",
      "原型开发与演示",
      "完整系统架构设计",
      "前后端全栈开发",
      "系统集成与部署",
      "技术培训与支持"
    ],
    priceRange: "¥15,000 - ¥100,000+",
    deliveryTime: "30-120天",
    examples: [
      "大型企业数字化转型平台",
      "政府智慧城市综合管理系统", 
      "科研院所专业分析工具"
    ]
  }
]

// 成就与资质
export const achievements: Achievement[] = [
  {
    id: "tech-expert-js",
    type: "honor",
    title: "江苏省技术能手",
    organization: "江苏省人力资源和社会保障厅",
    year: 2023,
    level: "provincial",
    description: "Web前端开发技术领域"
  },
  {
    id: "tech-expert-gis", 
    type: "honor",
    title: "江苏省技术能手",
    organization: "江苏省人力资源和社会保障厅", 
    year: 2022,
    level: "provincial",
    description: "GIS应用开发技术领域"
  },
  {
    id: "innovation-award",
    type: "honor", 
    title: "江苏省青年岗位能手",
    organization: "共青团江苏省委",
    year: 2023,
    level: "provincial",
    description: "技术创新与项目贡献"
  },
  {
    id: "software-1",
    type: "software",
    title: "智慧工地管理系统V1.0",
    organization: "国家版权局",
    year: 2023,
    level: "national",
    description: "软件著作权登记证书"
  },
  {
    id: "software-2", 
    type: "software",
    title: "BIM模型轻量化处理工具V2.0",
    organization: "国家版权局",
    year: 2022,
    level: "national", 
    description: "软件著作权登记证书"
  },
  {
    id: "software-3",
    type: "software", 
    title: "GIS空间分析平台V1.5",
    organization: "国家版权局",
    year: 2022,
    level: "national",
    description: "软件著作权登记证书"
  },
  {
    id: "patent-1",
    type: "patent",
    title: "基于WebGL的大规模BIM模型渲染方法",
    organization: "国家知识产权局",
    year: 2023,
    level: "national",
    description: "发明专利"
  },
  {
    id: "patent-2",
    type: "patent", 
    title: "多源GIS数据融合处理系统",
    organization: "国家知识产权局",
    year: 2022,
    level: "national",
    description: "实用新型专利"
  },
  {
    id: "paper-1",
    type: "paper",
    title: "基于Web3D的智慧工地可视化关键技术研究",
    organization: "《计算机应用研究》", 
    year: 2023,
    level: "national",
    description: "核心期刊论文发表"
  }
]

// 项目经验
export const projectExperiences: ProjectExperience[] = [
  {
    id: "smart-construction-1",
    title: "大型建筑集团智慧工地管理平台",
    category: "smart-city",
    description: "为某知名建筑集团开发的智慧工地综合管理平台，覆盖全国50+工地项目，实现施工进度、人员设备、安全质量的全方位监控。",
    technologies: ["Vue 3", "Three.js", "C#", "WebAPI", "SQL Server", "IoT"],
    role: "技术负责人",
    duration: "6个月",
    highlights: [
      "3D工地场景建模与实时渲染",
      "IoT设备数据实时采集与展示", 
      "移动端巡检APP开发",
      "大数据分析与智能预警",
      "项目获得客户高度认可，续签二期开发"
    ],
    thumbnail: "https://via.placeholder.com/400x300/2563eb/FFFFFF?text=Smart+Construction"
  },
  {
    id: "bim-platform-1",
    title: "建筑设计院BIM协同平台",
    category: "bim-3d", 
    description: "为甲级建筑设计院开发的BIM模型协同设计平台，支持多专业协同设计、模型版本管理、冲突检测等功能。",
    technologies: ["Revit API", "C#", "React", "Three.js", "MongoDB"],
    role: "主要开发者",
    duration: "4个月",
    highlights: [
      "开发Revit插件60+个功能模块",
      "实现Web端BIM模型轻量化展示",
      "多专业模型冲突自动检测",
      "模型版本管理与对比功能",
      "提升设计效率40%以上"
    ],
    thumbnail: "https://via.placeholder.com/400x300/059669/FFFFFF?text=BIM+Platform"
  },
  {
    id: "gis-analysis-1", 
    title: "国土资源管理空间分析系统",
    category: "gis-analysis",
    description: "为某市国土资源局开发的土地利用现状分析系统，实现土地数据的多维度分析和可视化展示。",
    technologies: ["OpenLayers", "PostGIS", "Python", "Django", "PostgreSQL"],
    role: "GIS开发工程师", 
    duration: "3个月",
    highlights: [
      "整合多源土地利用数据10TB+",
      "实现复杂空间分析算法",
      "生成专题图表100+种类型",
      "支持实时查询与统计分析",
      "为政府决策提供科学依据"
    ],
    thumbnail: "https://via.placeholder.com/400x300/dc2626/FFFFFF?text=GIS+Analysis"
  },
  {
    id: "map-3d-1",
    title: "智慧园区二三维一体化管理系统", 
    category: "map-dev",
    description: "为某科技园区开发的二三维联动管理系统，实现园区设施管理、安防监控、环境监测的可视化管理。",
    technologies: ["OpenLayers", "Cesium", "Vue 3", "WebGL", "Node.js"],
    role: "前端技术负责人",
    duration: "5个月", 
    highlights: [
      "二三维地图无缝切换联动",
      "园区建筑精细化三维建模",
      "实时监控数据可视化",
      "移动端园区导览应用",
      "系统运行稳定，用户体验优秀"
    ],
    thumbnail: "https://via.placeholder.com/400x300/7c3aed/FFFFFF?text=3D+Map"
  },
  {
    id: "factory-digital-1",
    title: "制造企业数字化工厂系统",
    category: "smart-city",
    description: "为大型制造企业开发的数字孪生工厂系统，实现生产过程可视化、设备状态监控、产能分析等功能。",
    technologies: ["Babylon.js", "C#", "SignalR", "时序数据库", "边缘计算"], 
    role: "3D可视化开发工程师",
    duration: "8个月",
    highlights: [
      "工厂车间三维场景1:1还原",
      "设备运行状态实时同步",
      "生产流程动态仿真", 
      "故障预警与维护提醒",
      "助力企业实现数字化转型"
    ],
    thumbnail: "https://via.placeholder.com/400x300/ea580c/FFFFFF?text=Digital+Factory"
  }
]

// 技术栈详情
export const techStack = {
  frontend: {
    name: "前端技术",
    icon: "💻",
    color: "#3b82f6",
    skills: [
      { name: "HTML5/CSS3", level: 95, experience: "8年" },
      { name: "JavaScript/ES6+", level: 95, experience: "8年" },
      { name: "Vue.js 2/3", level: 90, experience: "5年" },
      { name: "React", level: 85, experience: "3年" },
      { name: "TypeScript", level: 88, experience: "4年" }
    ]
  },
  web3d: {
    name: "Web3D技术", 
    icon: "🎮",
    color: "#8b5cf6",
    skills: [
      { name: "Three.js", level: 95, experience: "6年" },
      { name: "Babylon.js", level: 90, experience: "4年" },
      { name: "WebGL/GLSL", level: 85, experience: "5年" },
      { name: "WebXR", level: 80, experience: "2年" },
      { name: "Canvas/SVG", level: 90, experience: "6年" }
    ]
  },
  gis: {
    name: "GIS技术",
    icon: "🗺️", 
    color: "#059669",
    skills: [
      { name: "OpenLayers", level: 95, experience: "6年" },
      { name: "Cesium", level: 90, experience: "4年" },
      { name: "ArcGIS API", level: 85, experience: "5年" },
      { name: "PostGIS", level: 88, experience: "4年" },
      { name: "QGIS", level: 85, experience: "5年" }
    ]
  },
  backend: {
    name: "后端技术",
    icon: "⚙️",
    color: "#dc2626", 
    skills: [
      { name: "C# .NET", level: 90, experience: "6年" },
      { name: "Node.js", level: 85, experience: "4年" },
      { name: "Python", level: 80, experience: "3年" },
      { name: "SQL Server", level: 88, experience: "6年" },
      { name: "PostgreSQL", level: 85, experience: "4年" }
    ]
  },
  tools: {
    name: "开发工具",
    icon: "🛠️",
    color: "#ea580c",
    skills: [
      { name: "Revit API", level: 95, experience: "5年" },
      { name: "3ds Max", level: 85, experience: "4年" },
      { name: "AutoCAD", level: 88, experience: "6年" },
      { name: "Blender", level: 80, experience: "2年" },
      { name: "Git/SVN", level: 90, experience: "6年" }
    ]
  }
}

// 合作流程
export const workflowSteps = [
  {
    step: 1,
    title: "需求沟通",
    description: "详细了解项目需求，确认技术方案和预算",
    duration: "1-2天",
    deliverables: ["需求文档", "技术方案", "报价单"]
  },
  {
    step: 2, 
    title: "原型开发",
    description: "快速开发功能原型，验证技术可行性",
    duration: "3-7天", 
    deliverables: ["功能原型", "技术验证", "进度计划"]
  },
  {
    step: 3,
    title: "开发实施",
    description: "按照计划进行开发，定期汇报进度",
    duration: "根据项目规模",
    deliverables: ["阶段性成果", "测试报告", "文档资料"]
  },
  {
    step: 4,
    title: "测试交付", 
    description: "全面测试，修复问题，交付最终产品",
    duration: "2-5天",
    deliverables: ["完整产品", "使用手册", "售后支持"]
  }
]

// 价格政策
export const pricingPolicy = {
  title: "透明合理的定价策略",
  description: "根据项目复杂度和工期合理定价，支持多种合作模式",
  models: [
    {
      type: "按项目计费",
      icon: "📦",
      description: "适合需求明确的项目",
      features: ["固定价格", "明确交付", "质量保证", "售后支持"],
      suitable: "中小型项目"
    },
    {
      type: "按工时计费", 
      icon: "⏰",
      description: "适合需求变动较大的项目",
      features: ["灵活调整", "实时计费", "透明账单", "高性价比"],
      suitable: "大型项目或长期合作"
    },
    {
      type: "技术顾问",
      icon: "🎯", 
      description: "提供专业技术咨询服务",
      features: ["专业建议", "方案评估", "技术培训", "问题解答"],
      suitable: "技术咨询或培训"
    }
  ],
  rates: {
    hourly: "¥200-500/小时",
    daily: "¥1,200-3,000/天", 
    consultation: "¥500-1,000/小时"
  },
  policies: [
    "项目开始前支付30%定金",
    "重要节点验收后支付阶段费用",
    "项目完成验收后支付尾款",
    "提供3个月免费技术支持",
    "支持支付宝、微信、银行转账"
  ]
}
