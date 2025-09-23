export interface MediaItem {
  type: 'image' | 'video'
  url: string
  alt?: string
}

export interface ProjectData {
  id: string
  title: string
  description: string
  media: MediaItem[]
  tech: string[]
  category: string
}

export const projectsData: ProjectData[] = [
  {
    id: 'by-project',
    title: '某医院冷源管理系统',
    description: '基于Babylon.js构建的三维可视化医院冷源管理系统，融合BIM建筑信息模型与IoT物联网技术，实现与西门子PLC设备的实时数据交互。通过WebSocket协议获取冷机运行状态、温度压力等关键参数，在3D场景中动态展示设备运行状态，支持设备定位、参数监控、故障预警等功能，为医院制冷系统的智能化运维提供直观的可视化管理平台。',
    media: [
      { type: 'image', url: new URL('@/assets/img/by.png', import.meta.url).href, alt: '医院冷源管理系统主界面' },
      { type: 'image', url: new URL('@/assets/img/by2.png', import.meta.url).href, alt: '设备监控界面' },
      { type: 'image', url: new URL('@/assets/img/by3.png', import.meta.url).href, alt: '三维场景展示' },
      { type: 'video', url: new URL('@/assets/img/demo3.mp4', import.meta.url).href, alt: '视频演示' }
    ],
    tech: ['Babylon.js', 'Vue.js', 'WebSocket', 'BIM'],
    category: 'smart'
  },
  {
    id: 'database-project',
    title: '某长输管线监控预警平台',
    description: '基于Cesium三维地球引擎开发的长距离输油输气管线智能监控预警平台。集成PostGIS空间数据库处理海量地理数据，通过QGIS进行数据预处理，利用GeoServer发布空间服务。系统支持多源异构数据融合，包括管线走向、地质数据、气象信息等，实现管线沿线的三维可视化展示。具备实时监控、风险评估、应急预案、巡检管理等功能，为管线安全运营提供全方位的数字化解决方案。',
    media: [
      { type: 'image', url: new URL('@/assets/img/db1.png', import.meta.url).href, alt: '管线监控主界面' },
      { type: 'image', url: new URL('@/assets/img/db2.png', import.meta.url).href, alt: '三维地球展示' }
    ],
    tech: ['Cesium', 'PostGIS', 'QGIS', 'GeoServer'],
    category: 'gis'
  },
  {
    id: 'dnpt-project',
    title: '某项目施工用电智能管理平台',
    description: '采用Three.js和TypeScript构建的施工现场临时用电智能化管理平台。通过WebGL技术渲染三维施工场景，结合IoT智能电力监测设备，实现对施工现场所有用电设备的自动识别、实时监控和智能管理。系统具备用电负荷分析、安全隐患预警、用电成本统计、设备生命周期管理等功能，支持移动端应急响应，有效降低施工用电安全风险，提高电力资源使用效率。',
    media: [
      { type: 'image', url: new URL('@/assets/img/dnpt.png', import.meta.url).href, alt: '施工用电管理界面' },
      { type: 'image', url: new URL('@/assets/img/dnpt2.png', import.meta.url).href, alt: '三维场景监控' },
      { type: 'video', url: new URL('@/assets/img/demo2.mp4', import.meta.url).href, alt: '视频演示' }
    ],
    tech: ['Three.js', 'TypeScript', 'WebGL', 'IoT'],
    category: 'smart'
  },
  {
    id: 'openlayers-project',
    title: 'WebGIS双图联动Demo',
    description: '基于OpenLayers和Cesium技术栈开发的WebGIS双图联动演示系统。系统实现二维地图与三维地球的无缝切换和联动操作，集成风场数据可视化和热力图分析功能。通过QGIS进行数据处理，使用GeoServer发布地图服务，支持多种数据格式的加载和展示。具备图层管理、空间查询、测量工具、专题分析等GIS基础功能，为地理信息系统的二三维一体化展示提供技术方案参考。',
    media: [
      { type: 'image', url: new URL('@/assets/img/ol.png', import.meta.url).href, alt: 'WebGIS双图联动演示' }
    ],
    tech: ['OpenLayers', 'Cesium','QGIS','GeoServer'],
    category: 'gis'
  },
  {
    id: 'scly-project',
    title: '施工履约管理系统',
    description: '基于Three.js和BIM技术构建的施工履约管理数字化平台。通过导入Revit模型，结合WebSocket实时数据传输，实现施工进度的可视化管控和质量安全管理。系统支持4D施工模拟、进度计划对比、质量检查记录、安全隐患排查等功能，通过三维场景直观展示施工状态，提供进度偏差预警、质量问题追溯、安全风险评估等智能化管理工具，全面提升项目履约管理水平。',
    media: [
      { type: 'image', url: new URL('@/assets/img/scly.png', import.meta.url).href, alt: '施工履约管理系统界面' }
    ],
    tech: ['Three.js', 'Vue.js', 'BIM', 'WebSocket'],
    category: 'bim'
  },
  {
    id: 'zs-project',
    title: '某学校用电管理平台',
    description: '采用Three.js技术开发的校园智能用电管理可视化平台。通过WebGL渲染引擎构建三维校园场景，结合Vue.js实现响应式用户界面。系统实时监控各教学楼、教室的用电设备状态，支持空调、照明、多媒体设备等的远程控制和能耗分析。具备用电峰谷统计、异常用电预警、节能优化建议等功能，通过直观的3D可视化界面提升校园能源管理效率，助力绿色校园建设。',
    media: [
      { type: 'image', url: new URL('@/assets/img/zs1.png', import.meta.url).href, alt: '校园用电管理主界面' },
      { type: 'image', url: new URL('@/assets/img/zs2.png', import.meta.url).href, alt: '三维校园场景' },
      { type: 'image', url: new URL('@/assets/img/zs3.png', import.meta.url).href, alt: '能耗统计分析' }
    ],
    tech: ['Three.js', 'GLSL', 'Vue.js', 'WebGL'],
    category: 'web3d'
  },
  {
    id: 'zt-project',
    title: '三维展厅项目',
    description: 'Babylon.js三维引擎开发的虚拟展厅解决方案。系统支持高精度3D模型加载、第三人称视角漫游、虚拟导览、多媒体展示等功能。具备展品信息查询、语音解说、路径规划、访客统计等智能化服务，为博物馆、科技馆、企业展厅等场所提供沉浸式的数字化参观体验。',
    media: [
      { type: 'image', url: new URL('@/assets/img/zt1.png', import.meta.url).href, alt: '三维展厅主场景' },
      { type: 'image', url: new URL('@/assets/img/zt2.png', import.meta.url).href, alt: '展品展示区域' }
    ],
    tech: ['Babylon.js', 'Vue.js'],
    category: 'smart'
  },
  {
    id: 'zlpt-project',
    title: '某资料管理平台',
    description: '基于Three.js三维渲染引擎开发的智能资料管理平台。系统根据不同建筑业态（办公、路桥、石化等）动态生成和加载相应的3D建筑模型。平台集成施工资料管理、进度可视化、质量检查记录等功能，支持图纸文档关联、施工节点追踪、进度对比分析等，为建设项目提供数字化资料管理和可视化进度展示的一体化解决方案。',
    media: [
      { type: 'image', url: new URL('@/assets/img/zlpt.png', import.meta.url).href, alt: '资料管理平台界面' }
    ],
    tech: ['Three.js', 'Vue.js'],
    category: 'smart'
  },
  {
    id: 'revit-project',
    title: 'Revit二次开发插件',
    description: '基于C# .NET框架和Revit API开发的Revit插件。采用WPF技术构建用户界面，实现钢结构网架的参数化快速生成、标准构件库管理、构件参数自动绑定等功能。插件支持多种网架形式（平面桁架、空间网架、球面网架等）的智能化设计，具备构件优化、材料统计、施工图纸自动生成等高级功能，显著提升钢结构BIM设计效率，为结构工程师提供专业的数字化设计工具。',
    media: [
      { type: 'image', url: new URL('@/assets/img/rvt.png', import.meta.url).href, alt: 'Revit插件界面' },
      { type: 'image', url: new URL('@/assets/img/rvt2.png', import.meta.url).href, alt: '钢结构网架生成' },
      { type: 'video', url: new URL('@/assets/img/净高分析(填充).mp4', import.meta.url).href, alt: '净高分析' },
      { type: 'video', url: new URL('@/assets/img/钢结构网架-操作演示.mp4', import.meta.url).href, alt: '钢结构网架-操作演示' }
    ],
    tech: ['C# .NET', 'Revit API', 'WPF', 'BIM'],
    category: 'bim'
  },
]
