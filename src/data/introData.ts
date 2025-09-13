// Intro页面数据统一管理 - 专为Upwork接单设计
import { placeholderImages, resourceUrls } from './pageContent'

export interface IntroItem {
  id: string
  title: string
  description: string
  type: 'image' | 'video' | 'demo' | 'interactive'
  thumbnail: string
  media?: string // 视频链接或大图
  demoUrl?: string
  githubUrl?: string
  category: 'threejs' | 'babylonjs' | 'openlayers' | 'cesium' | 'qgis'
  technologies: string[]
  featured?: boolean
}

export interface PersonalProfile {
  name: string
  title: string
  tagline: string
  description: string
  avatar: string
  location: string
  experience: string
  email: string
  upworkProfile: string
  availability: string
  rating: number
  completedProjects: number
  responseTime: string
}

// 个人信息
export const personalProfile: PersonalProfile = {
  name: "Your Name",
  title: "Expert WEB3D Developer & GIS Specialist",
  tagline: "Bringing Your 3D Vision to Life with Cutting-Edge Technology",
  description: "I specialize in creating stunning 3D web applications and geospatial solutions that captivate users and drive business results. With 5+ years of experience and a 100% success rate on Upwork, I deliver high-quality projects on time and within budget.",
  avatar: placeholderImages.avatar,
  location: "Available Worldwide (Remote)",
  experience: "5+ Years",
  email: "your.email@example.com",
  upworkProfile: resourceUrls.external.upwork,
  availability: "Available for new projects",
  rating: 5.0,
  completedProjects: 150,
  responseTime: "Within 1 hour"
}

// 技能展示
export const skillShowcase = {
  threejs: {
    name: "Three.js",
    icon: "🎮",
    color: "#049EF4",
    description: "Interactive 3D scenes, games, and visualizations",
    proficiency: 95,
    projects: 45,
    features: ["WebGL Optimization", "Custom Shaders", "Animation Systems", "Physics Integration"]
  },
  babylonjs: {
    name: "Babylon.js",
    icon: "🌟", 
    color: "#BB464B",
    description: "VR/AR experiences and complex 3D applications",
    proficiency: 90,
    projects: 35,
    features: ["WebXR Support", "PBR Materials", "Advanced Lighting", "Performance Optimization"]
  },
  openlayers: {
    name: "OpenLayers",
    icon: "🗺️",
    color: "#1F6B75",
    description: "Dynamic mapping and geospatial data visualization",
    proficiency: 92,
    projects: 40,
    features: ["Real-time Data", "Custom Styling", "Vector Tiles", "Spatial Analysis"]
  },
  cesium: {
    name: "Cesium",
    icon: "🌍",
    color: "#48B884",
    description: "3D globes and geospatial 4D visualizations",
    proficiency: 88,
    projects: 30,
    features: ["3D Terrain", "Satellite Imagery", "Time-based Animation", "Flight Simulation"]
  },
  qgis: {
    name: "QGIS",
    icon: "📊",
    color: "#589632",
    description: "Advanced GIS analysis and custom plugins",
    proficiency: 85,
    projects: 25,
    features: ["Python Plugins", "Spatial Analysis", "Data Processing", "Custom Tools"]
  }
}

// 精选作品
export const featuredWorks: IntroItem[] = [
  {
    id: "hero-threejs-city",
    title: "Real-time 3D Smart City",
    description: "Interactive 3D city dashboard with live data integration, dynamic lighting, and IoT visualization. Built for a major metropolitan government.",
    type: "interactive",
    thumbnail: placeholderImages.hero.smartCity,
    media: "https://via.placeholder.com/1200x800/049EF4/FFFFFF?text=Smart+City+Demo",
    demoUrl: `${resourceUrls.external.demo}/smart-city`,
    githubUrl: `${resourceUrls.external.github}/smart-city`,
    category: "threejs",
    technologies: ["Three.js", "WebGL", "GLSL", "React", "WebSocket"],
    featured: true
  },
  {
    id: "hero-babylonjs-vr",
    title: "Enterprise VR Training Platform",
    description: "Immersive VR training environment with multi-user support, progress tracking, and realistic physics simulation for Fortune 500 company.",
    type: "video",
    thumbnail: placeholderImages.hero.vrTraining,
    media: "https://via.placeholder.com/1200x675/BB464B/FFFFFF?text=VR+Demo+Video",
    demoUrl: `${resourceUrls.external.demo}/vr-training`,
    category: "babylonjs",
    technologies: ["Babylon.js", "WebXR", "Node.js", "Socket.io", "MongoDB"],
    featured: true
  },
  {
    id: "hero-cesium-flight",
    title: "Global Flight Operations Center",
    description: "Real-time 3D flight tracking system with weather integration, route optimization, and predictive analytics for international airline.",
    type: "interactive",
    thumbnail: placeholderImages.hero.flightOps,
    media: "https://via.placeholder.com/1200x800/48B884/FFFFFF?text=Flight+Center",
    demoUrl: `${resourceUrls.external.demo}/flight-ops`,
    category: "cesium",
    technologies: ["Cesium", "PostgreSQL", "Python", "FastAPI", "Redis"],
    featured: true
  },
  {
    id: "hero-openlayers-disaster",
    title: "Emergency Response GIS Platform",
    description: "Advanced mapping platform for disaster management with real-time data feeds, predictive modeling, and multi-agency coordination tools.",
    type: "demo",
    thumbnail: placeholderImages.hero.emergencyGis,
    media: "https://via.placeholder.com/1200x800/1F6B75/FFFFFF?text=Emergency+Platform",
    demoUrl: `${resourceUrls.external.demo}/emergency-gis`,
    category: "openlayers",
    technologies: ["OpenLayers", "PostGIS", "Python", "Django", "Apache Kafka"],
    featured: true
  },
  {
    id: "recent-qgis-mining",
    title: "Mining Site Analysis Tool",
    description: "Custom QGIS plugin for automated geological analysis with ML-powered ore detection and environmental impact assessment.",
    type: "image",
    thumbnail: placeholderImages.hero.miningAnalysis,
    media: "https://via.placeholder.com/1200x800/589632/FFFFFF?text=Mining+Tool",
    githubUrl: `${resourceUrls.external.github}/mining-analysis`,
    category: "qgis",
    technologies: ["QGIS", "Python", "Scikit-learn", "GDAL", "PostgreSQL"],
    featured: true
  },
  {
    id: "recent-threejs-product",
    title: "3D Product Configurator",
    description: "High-performance 3D product customization platform with AR preview, real-time rendering, and e-commerce integration.",
    type: "interactive",
    thumbnail: placeholderImages.hero.productConfig,
    demoUrl: `${resourceUrls.external.demo}/product-config`,
    category: "threejs",
    technologies: ["Three.js", "React", "WebRTC", "Stripe API", "AWS"],
    featured: true
  }
]

// 服务项目
export const serviceOfferings = [
  {
    icon: "🚀",
    title: "3D Web Applications",
    description: "Custom interactive 3D experiences that engage users and drive conversions",
    deliverables: ["Performance-optimized 3D scenes", "Cross-platform compatibility", "Custom shaders and effects", "Mobile-responsive design"],
    priceRange: "$2,000 - $15,000",
    timeline: "2-8 weeks",
    color: "#049EF4"
  },
  {
    icon: "🌐",
    title: "GIS & Mapping Solutions", 
    description: "Advanced geospatial platforms for data visualization and analysis",
    deliverables: ["Real-time data visualization", "Spatial analysis tools", "Custom map styling", "API integrations"],
    priceRange: "$3,000 - $20,000",
    timeline: "3-10 weeks",
    color: "#1F6B75"
  },
  {
    icon: "🥽",
    title: "VR/AR Experiences",
    description: "Immersive virtual and augmented reality solutions for training and marketing",
    deliverables: ["WebXR compatibility", "Multi-user support", "Hand tracking", "Performance optimization"],
    priceRange: "$5,000 - $25,000",
    timeline: "4-12 weeks",
    color: "#BB464B"
  },
  {
    icon: "📊",
    title: "Data Visualization",
    description: "Transform complex datasets into interactive visual stories",
    deliverables: ["Interactive dashboards", "Real-time updates", "Custom animations", "Export capabilities"],
    priceRange: "$1,500 - $10,000",
    timeline: "1-6 weeks",
    color: "#48B884"
  }
]

// 客户推荐
export const clientTestimonials = [
  {
    name: "James Mitchell",
    company: "Global Tech Solutions",
    role: "VP of Technology",
    content: "Exceptional 3D development expertise. Delivered a complex city visualization project 2 weeks ahead of schedule with outstanding performance optimization.",
    rating: 5,
    avatar: placeholderImages.testimonials.jm,
    projectValue: "$18,000",
    completionTime: "6 weeks"
  },
  {
    name: "Dr. Sarah Chen",
    company: "Environmental Research Institute",
    role: "Research Director", 
    content: "Incredible GIS and mapping skills. The emergency response platform has already helped coordinate 3 major disaster relief operations successfully.",
    rating: 5,
    avatar: placeholderImages.testimonials.sc,
    projectValue: "$22,000", 
    completionTime: "8 weeks"
  },
  {
    name: "Marcus Rodriguez",
    company: "AeroSpace Dynamics",
    role: "Lead Engineer",
    content: "Outstanding work on our flight simulation system. The 3D visualization capabilities exceeded our technical requirements and client expectations.",
    rating: 5,
    avatar: placeholderImages.testimonials.mr,
    projectValue: "$15,500",
    completionTime: "5 weeks"
  }
]

// 技术统计
export const techStats = [
  { label: "Years Experience", value: "5+", icon: "⏳" },
  { label: "Projects Completed", value: "150+", icon: "✅" },
  { label: "Client Success Rate", value: "100%", icon: "🎯" },
  { label: "Average Rating", value: "5.0★", icon: "⭐" },
  { label: "Response Time", value: "<1hr", icon: "⚡" },
  { label: "Technologies Mastered", value: "15+", icon: "🛠️" }
]

// 最新动态
export const recentUpdates = [
  {
    type: "achievement",
    title: "Top Rated Plus Freelancer",
    description: "Achieved Upwork's highest freelancer tier",
    date: "2024-01-15",
    icon: "🏆"
  },
  {
    type: "certification", 
    title: "AWS Certified Solutions Architect",
    description: "Advanced cloud architecture certification",
    date: "2024-01-10",
    icon: "🎓"
  },
  {
    type: "project",
    title: "New WebXR VR Training Platform",
    description: "Just launched immersive training solution",
    date: "2024-01-05", 
    icon: "🚀"
  }
]
