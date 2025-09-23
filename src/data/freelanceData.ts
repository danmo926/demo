import type { FreelanceContent } from './types'

// 多语言内容数据
export const freelanceContent: FreelanceContent = {
  header: {
    badge: {
      zh: 'Hi，我是Web3D开发者',
      en: 'Hi, I am a Web3D Developer'
    },
    title: {
      zh: '专注3D模型到Web渲染的工作流程',
      en: 'Focused on 3D Model to Web Rendering Workflow'
    },
    subtitle: {
      zh: '根据项目特点选择最适合的技术栈',
      en: 'Choose the most suitable tech stack based on project characteristics'
    },
    description: {
      zh: '在多个大型项目中负责3D模块的设计开发交付，擅长从各种建模软件(Revit、3dsMax、SketchUp等)输出的模型进行优化处理，建立高效的渲染管线，最终在Web端实现流畅的3D展示。每个项目都会根据模型复杂度、性能要求、交互需求来选择Three.js、Babylon.js或Cesium方案',
      en: 'Responsible for design, development and delivery of 3D modules in multiple large-scale projects. Specializing in optimizing models exported from various modeling software (Revit, 3dsMax, SketchUp, etc.), establishing efficient rendering pipelines, and ultimately achieving smooth 3D presentation on the web. For each project, I choose Three.js, Babylon.js or Cesium solutions based on model complexity, performance requirements, and interaction needs.'
    },
    stats: {
      experience: {
        zh: '年经验',
        en: 'Years Experience'
      },
      projects: {
        zh: 'Web3D作品',
        en: 'Web3D Projects'
      },
      plugins: {
        zh: 'Revit插件',
        en: 'Revit Plugins'
      },
      awards: {
        zh: '获得奖项',
        en: 'Awards Won'
      }
    }
  },
  services: {
    title: {
      zh: '核心能力',
      en: 'Core Capabilities'
    },
    items: {
      webRenderer: {
        name: {
          zh: 'Web3D渲染引擎',
          en: 'Web3D Rendering Engine'
        },
        brief: {
          zh: 'Three.js、Babylon.js深度应用开发',
          en: 'Deep application development with Three.js and Babylon.js'
        },
        content: {
          zh: '在Web端实现复杂3D场景的流畅渲染，根据项目需求选择合适的技术栈。Three.js适合快速原型和中等复杂度场景，Babylon.js用于需要高级渲染效果的项目。掌握阴影、光照、后处理等高级渲染技术。',
          en: 'Achieve smooth rendering of complex 3D scenes on the web, selecting appropriate tech stacks based on project requirements. Three.js is suitable for rapid prototyping and medium complexity scenes, while Babylon.js is used for projects requiring advanced rendering effects. Proficient in advanced rendering techniques including shadows, lighting, and post-processing.'
        }
      },
      bimSmart: {
        name: {
          zh: 'BIM+智慧应用',
          en: 'BIM + Smart Applications'
        },
        brief: {
          zh: '数字孪生系统、进度管控、质量安全管理',
          en: 'Digital twin systems, progress control, quality and safety management'
        },
        content: {
          zh: '将BIM模型与IoT数据结合，开发智慧工地、智慧工厂等数字孪生应用。实现施工进度的可视化管控，质量问题的3D定位标注，安全区域的动态监控。通过实时数据驱动模型状态变化，让静态的BIM模型变成动态的管理工具。',
          en: 'Combine BIM models with IoT data to develop digital twin applications such as smart construction sites and smart factories. Implement visual control of construction progress, 3D positioning annotation of quality issues, and dynamic monitoring of safety zones. Drive model state changes through real-time data, transforming static BIM models into dynamic management tools.'
        }
      },
      optimization: {
        name: {
          zh: '模型优化处理',
          en: 'Model Optimization Processing'
        },
        brief: {
          zh: '轻量化算法、LOD分级、格式转换',
          en: 'Lightweight algorithms, LOD grading, format conversion'
        },
        content: {
          zh: '专注于模型的轻量化处理，运用Mesh简化、纹理压缩、几何合并、实例化等技术。建立了完整的LOD(Level of Detail)分级体系，根据视距和重要性自动调整模型精度。熟练处理IFC、FBX、OBJ、glTF等格式转换和材质转换，确保模型在Web端的最佳表现。',
          en: 'Focus on model lightweight processing using techniques such as mesh simplification, texture compression, geometry merging, and instancing. Established a complete LOD (Level of Detail) grading system that automatically adjusts model precision based on viewing distance and importance. Proficient in handling IFC, FBX, OBJ, glTF format conversions and material conversions to ensure optimal model performance on the web.'
        }
      },
      webgis: {
        name: {
          zh: 'WebGIS',
          en: 'WebGIS'
        },
        brief: {
          zh: '空间分析、专题图开发、二三维联动、地理数据可视化',
          en: 'Spatial analysis, thematic map development, 2D-3D linkage, geographic data visualization'
        },
        content: {
          zh: '熟悉空间数据处理和分析算法，包括缓冲区分析、叠加分析、网络分析等。实现OpenLayers和Cesium的深度整合，做到二维地图与三维场景的无缝切换。处理过大规模地理数据的可视化，包括风场图、热力图、等值线图、流场图等多种专题图表现形式。',
          en: 'Familiar with spatial data processing and analysis algorithms, including buffer analysis, overlay analysis, network analysis, etc. Achieve deep integration of OpenLayers and Cesium for seamless switching between 2D maps and 3D scenes. Handled visualization of large-scale geographic data, including various thematic map representations such as wind field maps, heat maps, contour maps, and flow field maps.'
        }
      },
      revit: {
        name: {
          zh: 'Revit二次开发',
          en: 'Revit Secondary Development'
        },
        brief: {
          zh: 'API插件开发、族库管理、工作流程自动化',
          en: 'API plugin development, family library management, workflow automation'
        },
        content: {
          zh: '基于Revit API开发了60+个功能模块，包括模型检查、数据提取、批量处理等工具。熟悉族(Family)系统开发，能够创建参数化构件库，建立企业级的BIM数据标准。开发过自动化建模工具，大幅提升设计师的工作效率。',
          en: 'Developed 60+ functional modules based on Revit API, including model checking, data extraction, batch processing tools. Familiar with Family system development, capable of creating parametric component libraries and establishing enterprise-level BIM data standards. Developed automated modeling tools that significantly improve designer work efficiency.'
        }
      }
    }
  },
  projects: {
    title: {
      zh: '项目案例',
      en: 'Project Cases'
    }
  },
  techStack: {
    title: {
      zh: '技术栈',
      en: 'Tech Stack'
    },
    categories: {
      web3d: {
        zh: 'Web3D',
        en: 'Web3D'
      },
      gis: {
        zh: 'GIS',
        en: 'GIS'
      },
      frontend: {
        zh: '前端',
        en: 'Frontend'
      },
      desktop: {
        zh: 'C端开发',
        en: 'Desktop Development'
      }
    }
  },
  achievements: {
    title: {
      zh: '一些荣誉和成果',
      en: 'Honors and Achievements'
    },
    items: {
      provincialTitles: {
        name: {
          zh: '省级称号 × 3',
          en: 'Provincial Titles × 3'
        },
        descriptions: [
          {
            zh: '江苏省技术能手',
            en: 'Jiangsu Province Technical Expert'
          },
          {
            zh: '江苏省青年岗位能手',
            en: 'Jiangsu Province Outstanding Young Worker'
          },
          {
            zh: '江苏省五一创新能手',
            en: 'Jiangsu Province May 1st Innovation Expert'
          }
        ]
      },
      awards: {
        name: {
          zh: '省部级以上奖项 20+',
          en: 'Provincial and Ministerial Awards 20+'
        },
        descriptions: [
          {
            zh: '第三届智能建造技术创新大赛一等奖',
            en: '1st Prize in the 3rd Intelligent Construction Technology Innovation Competition'
          },
          {
            zh: '2020年全国安装人五小成果短视频大赛二等奖...',
            en: '2nd Prize in 2020 National Installation Workers Short Video Competition...'
          }
        ]
      },
      software: {
        name: {
          zh: '软件著作权 × 2',
          en: 'Software Copyrights × 2'
        },
        descriptions: [
          {
            zh: '基于Three.js开发的多业态参数化模型动态展示系统',
            en: 'Multi-format Parametric Model Dynamic Display System Based on Three.js'
          },
          {
            zh: '智慧工地BIM模型优化与交互展示系统',
            en: 'Smart Construction Site BIM Model Optimization and Interactive Display System'
          }
        ]
      },
      patents: {
        name: {
          zh: '发明专利 × 2',
          en: 'Invention Patents × 2'
        },
        descriptions: [
          {
            zh: '一种基于物联网的工程建设数据管理系统及方法',
            en: 'An IoT-based Engineering Construction Data Management System and Method'
          },
          {
            zh: '工程技术资料信息化管理系统及方法',
            en: 'Engineering Technical Documentation Information Management System and Method'
          }
        ]
      },
      papers: {
        name: {
          zh: '国家级协会期刊论文',
          en: 'National Association Journal Paper'
        },
        descriptions: [
          {
            zh: '机电装配化施工技术在金融城项目的应用',
            en: 'Application of Mechanical and Electrical Assembly Construction Technology in Financial City Project'
          }
        ]
      }
    }
  },
  contact: {
    title: {
      zh: '联系我',
      en: 'Contact Me'
    },
    intro: {
      zh: '如果你有项目需求，欢迎联系我聊聊',
      en: 'If you have project requirements, feel free to contact me for a chat'
    },
    email: {
      zh: '邮箱',
      en: 'Email'
    },
    wechat: {
      zh: '微信',
      en: 'WeChat'
    },
    qrTitle: {
      zh: '微信扫码',
      en: 'WeChat QR Code'
    },
    qrDescription: {
      zh: '扫码添加微信好友',
      en: 'Scan to add WeChat friend'
    },
    location: {
      zh: '📍 江苏南京 | 支持远程',
      en: '📍 Nanjing, Jiangsu | Remote Support'
    },
    response: {
      zh: '⚡ 24小时内回复',
      en: '⚡ Reply within 24 hours'
    },
    copyMessage: {
      email: {
        zh: '邮箱',
        en: 'Email'
      },
      wechat: {
        zh: '微信号',
        en: 'WeChat ID'
      }
    }
  }
}
