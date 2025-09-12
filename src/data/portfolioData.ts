// 作品集数据统一管理
export interface PortfolioItem {
  id: string
  title: string
  description: string
  technologies: string[]
  category: 'threejs' | 'babylonjs' | 'openlayers' | 'cesium' | 'qgis' | 'web3d'
  type: 'image' | 'video' | 'demo' | 'interactive'
  thumbnail: string
  media?: string // 视频链接或大图
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  year: number
}

export interface PersonalInfo {
  name: string
  title: string
  subtitle: string
  bio: string
  avatar: string
  location: string
  experience: string
  email: string
  website: string
  upworkProfile: string
  skills: string[]
  certifications: string[]
}

// 个人信息数据
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Senior WEB3D Developer",
  subtitle: "Specialized in 3D Visualization & GIS Solutions",
  bio: "Experienced WEB3D developer with 5+ years of expertise in creating immersive 3D experiences and geospatial applications. Passionate about pushing the boundaries of web-based 3D graphics and data visualization.",
  avatar: "https://via.placeholder.com/300x300/4F46E5/FFFFFF?text=Avatar",
  location: "Remote / Global",
  experience: "5+ Years",
  email: "your.email@example.com",
  website: "https://yourwebsite.com",
  upworkProfile: "https://upwork.com/freelancers/yourprofile",
  skills: [
    "Three.js", "Babylon.js", "OpenLayers", "Cesium", "QGIS",
    "WebGL", "GLSL", "TypeScript", "Vue.js", "React",
    "Node.js", "Python", "PostgreSQL", "PostGIS"
  ],
  certifications: [
    "AWS Certified Developer",
    "Google Cloud Professional",
    "ESRI ArcGIS Certified"
  ]
}

// 作品集项目数据
export const portfolioItems: PortfolioItem[] = [
  {
    id: "threejs-city-1",
    title: "Interactive 3D City Visualization",
    description: "Real-time 3D city model with dynamic lighting, weather effects, and interactive building exploration. Built with Three.js and custom shaders.",
    technologies: ["Three.js", "WebGL", "GLSL", "TypeScript"],
    category: "threejs",
    type: "interactive",
    thumbnail: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=3D+City",
    media: "https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=3D+City+Demo",
    demoUrl: "https://demo-link.com/3d-city",
    githubUrl: "https://github.com/yourname/3d-city",
    featured: true,
    year: 2024
  },
  {
    id: "babylonjs-game-1",
    title: "Immersive VR Game Experience",
    description: "WebXR-compatible 3D game with physics simulation, particle effects, and multiplayer support using Babylon.js engine.",
    technologies: ["Babylon.js", "WebXR", "Socket.io", "Node.js"],
    category: "babylonjs",
    type: "video",
    thumbnail: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=VR+Game",
    media: "https://via.placeholder.com/800x450/10B981/FFFFFF?text=VR+Game+Video",
    demoUrl: "https://demo-link.com/vr-game",
    featured: true,
    year: 2024
  },
  {
    id: "openlayers-gis-1",
    title: "Advanced GIS Analytics Platform",
    description: "Enterprise-level GIS platform with real-time data visualization, spatial analysis tools, and custom map styling using OpenLayers.",
    technologies: ["OpenLayers", "PostGIS", "Python", "FastAPI"],
    category: "openlayers",
    type: "demo",
    thumbnail: "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=GIS+Platform",
    media: "https://via.placeholder.com/800x600/F59E0B/FFFFFF?text=GIS+Demo",
    demoUrl: "https://demo-link.com/gis-platform",
    githubUrl: "https://github.com/yourname/gis-platform",
    featured: true,
    year: 2023
  },
  {
    id: "cesium-earth-1",
    title: "Global Earth Visualization",
    description: "Interactive 3D Earth with satellite imagery, terrain data, real-time weather patterns, and flight path visualization using Cesium.",
    technologies: ["Cesium", "WebGL", "REST APIs", "Vue.js"],
    category: "cesium",
    type: "interactive",
    thumbnail: "https://via.placeholder.com/400x300/EF4444/FFFFFF?text=3D+Earth",
    media: "https://via.placeholder.com/800x600/EF4444/FFFFFF?text=Earth+Viz",
    demoUrl: "https://demo-link.com/3d-earth",
    featured: true,
    year: 2023
  },
  {
    id: "qgis-analysis-1",
    title: "Spatial Data Analysis Dashboard",
    description: "Custom QGIS plugin for automated spatial analysis with Python scripting and interactive web dashboard integration.",
    technologies: ["QGIS", "Python", "PostgreSQL", "Django"],
    category: "qgis",
    type: "image",
    thumbnail: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=QGIS+Plugin",
    media: "https://via.placeholder.com/800x600/8B5CF6/FFFFFF?text=QGIS+Dashboard",
    githubUrl: "https://github.com/yourname/qgis-plugin",
    featured: false,
    year: 2023
  },
  {
    id: "threejs-product-1",
    title: "3D Product Configurator",
    description: "Interactive 3D product customization tool with real-time material changes, lighting setup, and AR preview capabilities.",
    technologies: ["Three.js", "React", "WebRTC", "AR.js"],
    category: "threejs",
    type: "demo",
    thumbnail: "https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=Product+3D",
    demoUrl: "https://demo-link.com/product-config",
    featured: false,
    year: 2023
  },
  {
    id: "babylonjs-arch-1",
    title: "Architectural Walkthrough",
    description: "Photorealistic architectural visualization with dynamic lighting, material switching, and virtual reality support.",
    technologies: ["Babylon.js", "Blender", "WebXR", "TypeScript"],
    category: "babylonjs",
    type: "video",
    thumbnail: "https://via.placeholder.com/400x300/F97316/FFFFFF?text=Architecture",
    media: "https://via.placeholder.com/800x450/F97316/FFFFFF?text=Arch+Video",
    featured: false,
    year: 2022
  },
  {
    id: "cesium-flight-1",
    title: "Flight Simulation Dashboard",
    description: "Real-time flight tracking and simulation with 3D terrain, weather data integration, and route optimization algorithms.",
    technologies: ["Cesium", "Node.js", "WebSocket", "MongoDB"],
    category: "cesium",
    type: "interactive",
    thumbnail: "https://via.placeholder.com/400x300/84CC16/FFFFFF?text=Flight+Sim",
    demoUrl: "https://demo-link.com/flight-sim",
    featured: false,
    year: 2022
  }
]

// 技能分类和颜色映射
export const skillCategories = {
  threejs: { name: "Three.js", color: "#3B82F6", icon: "🎮" },
  babylonjs: { name: "Babylon.js", color: "#10B981", icon: "🌟" },
  openlayers: { name: "OpenLayers", color: "#F59E0B", icon: "🗺️" },
  cesium: { name: "Cesium", color: "#EF4444", icon: "🌍" },
  qgis: { name: "QGIS", color: "#8B5CF6", icon: "📊" },
  web3d: { name: "WEB3D", color: "#06B6D4", icon: "🚀" }
}

// 服务项目
export const services = [
  {
    title: "3D Web Applications",
    description: "Interactive 3D experiences using Three.js and Babylon.js",
    icon: "🎯",
    features: ["WebGL Optimization", "Custom Shaders", "Performance Tuning", "Cross-platform Support"]
  },
  {
    title: "GIS Solutions",
    description: "Advanced mapping and geospatial analysis platforms",
    icon: "🌐",
    features: ["Real-time Data Viz", "Spatial Analysis", "Custom Map Styles", "API Integration"]
  },
  {
    title: "Data Visualization",
    description: "Transform complex data into interactive visual stories",
    icon: "📈",
    features: ["Interactive Charts", "Real-time Updates", "Custom Animations", "Responsive Design"]
  },
  {
    title: "VR/AR Experiences",
    description: "Immersive virtual and augmented reality solutions",
    icon: "🥽",
    features: ["WebXR Support", "Hand Tracking", "Spatial Audio", "Cross-device Compatibility"]
  }
]

// 客户评价
export const testimonials = [
  {
    name: "John Smith",
    company: "Tech Corp",
    role: "CTO",
    content: "Outstanding 3D development skills. Delivered a complex visualization project ahead of schedule with exceptional quality.",
    rating: 5,
    avatar: "https://via.placeholder.com/80x80/4F46E5/FFFFFF?text=JS"
  },
  {
    name: "Sarah Johnson",
    company: "GIS Solutions Ltd",
    role: "Project Manager",
    content: "Expert knowledge in geospatial technologies. The mapping solution exceeded our expectations and client requirements.",
    rating: 5,
    avatar: "https://via.placeholder.com/80x80/10B981/FFFFFF?text=SJ"
  },
  {
    name: "Mike Chen",
    company: "VR Innovations",
    role: "Lead Developer",
    content: "Incredible attention to detail and performance optimization. The VR experience runs smoothly across all devices.",
    rating: 5,
    avatar: "https://via.placeholder.com/80x80/F59E0B/FFFFFF?text=MC"
  }
]
