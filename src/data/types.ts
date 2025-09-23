// 多语言数据类型定义
export interface LanguageContent {
  zh: string
  en: string
}

export interface FreelanceContent {
  header: {
    badge: LanguageContent
    title: LanguageContent
    subtitle: LanguageContent
    description: LanguageContent
    stats: {
      experience: LanguageContent
      projects: LanguageContent
      plugins: LanguageContent
      awards: LanguageContent
    }
  }
  services: {
    title: LanguageContent
    items: {
      webRenderer: {
        name: LanguageContent
        brief: LanguageContent
        content: LanguageContent
      }
      bimSmart: {
        name: LanguageContent
        brief: LanguageContent
        content: LanguageContent
      }
      optimization: {
        name: LanguageContent
        brief: LanguageContent
        content: LanguageContent
      }
      webgis: {
        name: LanguageContent
        brief: LanguageContent
        content: LanguageContent
      }
      revit: {
        name: LanguageContent
        brief: LanguageContent
        content: LanguageContent
      }
    }
  }
  projects: {
    title: LanguageContent
  }
  techStack: {
    title: LanguageContent
    categories: {
      web3d: LanguageContent
      gis: LanguageContent
      frontend: LanguageContent
      desktop: LanguageContent
    }
  }
  achievements: {
    title: LanguageContent
    items: {
      provincialTitles: {
        name: LanguageContent
        descriptions: LanguageContent[]
      }
      awards: {
        name: LanguageContent
        descriptions: LanguageContent[]
      }
      software: {
        name: LanguageContent
        descriptions: LanguageContent[]
      }
      patents: {
        name: LanguageContent
        descriptions: LanguageContent[]
      }
      papers: {
        name: LanguageContent
        descriptions: LanguageContent[]
      }
    }
  }
  contact: {
    title: LanguageContent
    intro: LanguageContent
    email: LanguageContent
    wechat: LanguageContent
    qrTitle: LanguageContent
    qrDescription: LanguageContent
    location: LanguageContent
    response: LanguageContent
    copyMessage: {
      email: LanguageContent
      wechat: LanguageContent
    }
  }
}
