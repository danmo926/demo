// 页面内容统一配置管理
// 所有文案、图片URL、链接等静态资源的集中管理

export interface PageContent {
  // 页面基本信息
  meta: {
    title: string
    description: string
  }
  
  // Hero区域文案
  hero: {
    sections: {
      skills: {
        title: string
        subtitle: string
      }
      works: {
        title: string
        subtitle: string
      }
      services: {
        title: string
        subtitle: string
      }
      testimonials: {
        title: string
        subtitle: string
      }
      cta: {
        title: string
        description: string
      }
    }
    scrollIndicator: {
      text: string
    }
  }
  
  // 按钮文案
  buttons: {
    hireMe: string
    getQuote: string
    startProject: string
    scheduleConsultation: string
    viewDemo: string
    viewCode: string
    getQuoteService: string
    viewLiveDemo: string
    viewSourceCode: string
  }
  
  // 图标文案
  icons: {
    rocket: string
    chat: string
    eye: string
    laptop: string
    calendar: string
    email: string
    lightning: string
    globe: string
  }
  
  // 模态框文案
  modal: {
    close: string
  }
  
  // 统计标签
  stats: {
    proficiency: string
    projects: string
    rating: string
    projectValue: string
    completionTime: string
    responseWithin: string
  }
  
  // 服务相关文案
  service: {
    whatYouGet: string
    timeline: string
  }
  
  // 联系信息标签
  contact: {
    email: string
    responseTime: string
    location: string
  }
}

// 页面内容配置
export const pageContent: PageContent = {
  meta: {
    title: "Professional WEB3D Developer & GIS Specialist",
    description: "Expert 3D web development and geospatial solutions"
  },
  
  hero: {
    sections: {
      skills: {
        title: "Master of WEB3D Technologies",
        subtitle: "Specialized expertise across the complete 3D and GIS technology stack"
      },
      works: {
        title: "Featured Success Stories", 
        subtitle: "Real projects that delivered exceptional value for clients"
      },
      services: {
        title: "What I Can Build for You",
        subtitle: "Transparent pricing for professional 3D and GIS solutions"
      },
      testimonials: {
        title: "Client Success Stories",
        subtitle: "Real feedback from satisfied clients on Upwork"
      },
      cta: {
        title: "Ready to Transform Your Ideas into Reality?",
        description: "Let's discuss your 3D project and create something extraordinary together. I'm available for both short-term projects and long-term collaborations."
      }
    },
    scrollIndicator: {
      text: "Scroll to explore"
    }
  },
  
  buttons: {
    hireMe: "Hire Me on Upwork",
    getQuote: "Get a Quote", 
    startProject: "Start Your Project",
    scheduleConsultation: "Schedule Consultation",
    viewDemo: "View Demo",
    viewCode: "Code",
    getQuoteService: "Get Quote",
    viewLiveDemo: "View Live Demo",
    viewSourceCode: "View Source Code"
  },
  
  icons: {
    rocket: "🚀",
    chat: "💬", 
    eye: "👁️",
    laptop: "💻",
    calendar: "📅",
    email: "📧",
    lightning: "⚡",
    globe: "🌍"
  },
  
  modal: {
    close: "✕"
  },
  
  stats: {
    proficiency: "Proficiency",
    projects: "Projects",
    rating: "/5.0 •",
    projectValue: "💰",
    completionTime: "⏱️",
    responseWithin: "Response within"
  },
  
  service: {
    whatYouGet: "What you get:",
    timeline: "⏱️"
  },
  
  contact: {
    email: "📧",
    responseTime: "⚡",
    location: "🌍"
  }
}

// 资源URL配置
export interface ResourceUrls {
  // 占位图片基础URL
  placeholder: {
    base: string
    defaultSize: string
  }
  
  // 外部链接
  external: {
    upwork: string
    github: string
    demo: string
  }
}

export const resourceUrls: ResourceUrls = {
  placeholder: {
    base: "https://via.placeholder.com",
    defaultSize: "400x400"
  },
  
  external: {
    upwork: "https://upwork.com/freelancers/yourprofile",
    github: "https://github.com/yourname",
    demo: "https://demo-link.com"
  }
}

// 工具函数：生成占位图片URL
export const generatePlaceholderUrl = (
  width: number, 
  height: number, 
  backgroundColor: string = "4F46E5",
  textColor: string = "FFFFFF", 
  text: string = "Image"
): string => {
  return `${resourceUrls.placeholder.base}/${width}x${height}/${backgroundColor}/${textColor}?text=${encodeURIComponent(text)}`
}

// 预定义的占位图片
export const placeholderImages = {
  avatar: generatePlaceholderUrl(400, 400, "4F46E5", "FFFFFF", "Your+Photo"),
  hero: {
    smartCity: generatePlaceholderUrl(600, 400, "049EF4", "FFFFFF", "3D+Smart+City"),
    vrTraining: generatePlaceholderUrl(600, 400, "BB464B", "FFFFFF", "VR+Training"),
    flightOps: generatePlaceholderUrl(600, 400, "48B884", "FFFFFF", "Flight+Operations"),
    emergencyGis: generatePlaceholderUrl(600, 400, "1F6B75", "FFFFFF", "Emergency+GIS"),
    miningAnalysis: generatePlaceholderUrl(600, 400, "589632", "FFFFFF", "Mining+Analysis"),
    productConfig: generatePlaceholderUrl(600, 400, "049EF4", "FFFFFF", "Product+Config")
  },
  testimonials: {
    jm: generatePlaceholderUrl(100, 100, "4F46E5", "FFFFFF", "JM"),
    sc: generatePlaceholderUrl(100, 100, "10B981", "FFFFFF", "SC"), 
    mr: generatePlaceholderUrl(100, 100, "F59E0B", "FFFFFF", "MR")
  }
}
