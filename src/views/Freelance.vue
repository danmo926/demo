<template>
  <div class="freelance-container">
    <div class="main-content">
      <!-- Header Card -->
      <div class="header-card glass-card">
        <div class="profile-section">
          <div class="profile-info">
            <div class="profile-badge">
              <span class="badge-icon">👋</span>
              <span class="badge-text">Hi，我是Web3D开发者</span>
            </div>
            <h1 class="profile-title">专注3D模型到Web渲染的工作流程</h1>
            <p class="profile-subtitle">根据项目特点选择最适合的技术栈</p>
            <p class="profile-description">
              在多个大型项目中负责3D模块的设计开发交付，擅长从各种建模软件(Revit、3dsMax、SketchUp等)输出的模型进行优化处理，建立高效的渲染管线，最终在Web端实现流畅的3D展示。每个项目都会根据模型复杂度、性能要求、交互需求来选择Three.js、Babylon.js或Cesium方案
            </p>
          </div>

          <div class="profile-stats">
            <div class="stat-item">
              <div class="stat-number">9+</div>
              <div class="stat-label">年经验</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">Web3D作品</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">60+</div>
              <div class="stat-label">Revit插件</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">20+</div>
              <div class="stat-label">获得奖项</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Grid -->
      <div class="content-grid">
        <!-- Left Column -->
        <div class="left-column">
          <!-- Services Card -->
          <div class="services-card glass-card">
            <h2 class="card-title">核心能力</h2>
            <div class="services-list">
              <div class="service-item">
                <div class="service-header">
                  <span class="service-icon">🎮</span>
                  <div>
                    <h3 class="service-name">Web3D渲染引擎</h3>
                    <p class="service-brief">Three.js、Babylon.js深度应用开发</p>
                  </div>
                </div>
                <div class="service-content">
                  <p>
                    在Web端实现复杂3D场景的流畅渲染，根据项目需求选择合适的技术栈。Three.js适合快速原型和中等复杂度场景，Babylon.js用于需要高级渲染效果的项目。掌握阴影、光照、后处理等高级渲染技术。
                  </p>
                </div>
              </div>

              <div class="service-item">
                <div class="service-header">
                  <span class="service-icon">🏗️</span>
                  <div>
                    <h3 class="service-name">BIM+智慧应用</h3>
                    <p class="service-brief">数字孪生系统、进度管控、质量安全管理</p>
                  </div>
                </div>
                <div class="service-content">
                  <p>
                    将BIM模型与IoT数据结合，开发智慧工地、智慧工厂等数字孪生应用。实现施工进度的可视化管控，质量问题的3D定位标注，安全区域的动态监控。通过实时数据驱动模型状态变化，让静态的BIM模型变成动态的管理工具。
                  </p>
                </div>
              </div>

              <div class="service-item">
                <div class="service-header">
                  <span class="service-icon">⚡</span>
                  <div>
                    <h3 class="service-name">模型优化处理</h3>
                    <p class="service-brief">轻量化算法、LOD分级、格式转换</p>
                  </div>
                </div>
                <div class="service-content">
                  <p>
                    专注于模型的轻量化处理，运用Mesh简化、纹理压缩、几何合并、实例化等技术。建立了完整的LOD(Level of
                    Detail)分级体系，根据视距和重要性自动调整模型精度。熟练处理IFC、FBX、OBJ、glTF等格式转换和材质转换，确保模型在Web端的最佳表现。
                  </p>
                </div>
              </div>

              <div class="service-item">
                <div class="service-header">
                  <span class="service-icon">🗺️</span>
                  <div>
                    <h3 class="service-name">WebGIS</h3>
                    <p class="service-brief">空间分析、专题图开发、二三维联动、地理数据可视化</p>
                  </div>
                </div>
                <div class="service-content">
                  <p>
                    熟悉空间数据处理和分析算法，包括缓冲区分析、叠加分析、网络分析等。实现OpenLayers和Cesium的深度整合，做到二维地图与三维场景的无缝切换。处理过大规模地理数据的可视化，包括风场图、热力图、等值线图、流场图等多种专题图表现形式。
                  </p>
                </div>
              </div>

              <div class="service-item">
                <div class="service-header">
                  <span class="service-icon">🔧</span>
                  <div>
                    <h3 class="service-name">Revit二次开发</h3>
                    <p class="service-brief">API插件开发、族库管理、工作流程自动化</p>
                  </div>
                </div>
                <div class="service-content">
                  <p>
                    基于Revit
                    API开发了60+个功能模块，包括模型检查、数据提取、批量处理等工具。熟悉族(Family)系统开发，能够创建参数化构件库，建立企业级的BIM数据标准。开发过自动化建模工具，大幅提升设计师的工作效率。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Projects Card -->
          <div class="projects-card glass-card">
            <h2 class="card-title">项目案例</h2>
            <div class="projects-grid">
              <div v-for="project in projectsData" :key="project.id" class="project-item" @click="openProjectDetail(project)">
                <div class="project-cover">
                  <img :src="project.media[0]?.url" :alt="project.media[0]?.alt || project.title" />
                  <div class="project-overlay">
                    <div class="project-type-icon">
                      {{ project.media.some((m) => m.type === 'video') ? '▶️' : '🖼️' }}
                    </div>
                    <div class="images-count" v-if="project.media.length > 1">📸 {{ project.media.length }}</div>
                  </div>
                </div>
                <div class="project-info">
                  <h3 class="project-title">{{ project.title }}</h3>
                  <p class="project-desc">{{ project.description }}</p>
                  <div class="project-tech">
                    <span v-for="tech in project.tech.slice(0, 5)" :key="tech" class="tech-badge">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="right-column">
          <!-- Tech Stack Card -->
          <div class="tech-card glass-card">
            <h2 class="card-title">技术栈</h2>
            <div class="tech-categories">
              <div class="tech-category">
                <div class="tech-header">
                  <span class="tech-icon">🎮</span>
                  <span class="tech-name">Web3D</span>
                </div>
                <div class="tech-list">
                  <span class="tech-tag">Three.js</span>
                  <span class="tech-tag">Babylon.js</span>
                  <span class="tech-tag">WebGL</span>
                  <span class="tech-tag">GLSL</span>
                </div>
              </div>

              <div class="tech-category">
                <div class="tech-header">
                  <span class="tech-icon">🗺️</span>
                  <span class="tech-name">GIS</span>
                </div>
                <div class="tech-list">
                  <span class="tech-tag">QGIS</span>
                  <span class="tech-tag">OpenLayers</span>
                  <span class="tech-tag">Cesium</span>
                  <span class="tech-tag">PostGIS</span>
                  <span class="tech-tag">GeoServer</span>
                </div>
              </div>

              <div class="tech-category">
                <div class="tech-header">
                  <span class="tech-icon">💻</span>
                  <span class="tech-name">前端</span>
                </div>
                <div class="tech-list">
                  <span class="tech-tag">JavaScript</span>
                  <span class="tech-tag">Vue.js</span>
                  <span class="tech-tag">TypeScript</span>
                  <span class="tech-tag">Node.js</span>
                </div>
              </div>

              <div class="tech-category">
                <div class="tech-header">
                  <span class="tech-icon">⚙️</span>
                  <span class="tech-name">C端开发</span>
                </div>
                <div class="tech-list">
                  <span class="tech-tag">C# .NET WPF</span>
                  <span class="tech-tag">Revit API</span>
                  <span class="tech-tag">Python</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Achievements Card -->
          <div class="achievements-card glass-card">
            <h2 class="card-title">一些荣誉和成果</h2>
            <div class="achievements-list">
              <div class="achievement-item">
                <span class="achievement-icon">🏆</span>
                <div class="achievement-info">
                  <div class="achievement-name">省级称号 × 3</div>
                  <div class="achievement-desc">江苏省技术能手</div>
                  <div class="achievement-desc">江苏省青年岗位能手</div>
                  <div class="achievement-desc">江苏省五一创新能手</div>
                </div>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">🎖️</span>
                <div class="achievement-info">
                  <div class="achievement-name">省部级以上奖项 20+</div>
                  <div class="achievement-desc">第三届智能建造技术创新大赛一等奖</div>
                  <div class="achievement-desc">2020年全国安装人五小成果短视频大赛二等奖...</div>
                </div>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">💻</span>
                <div class="achievement-info">
                  <div class="achievement-name">软件著作权 × 2</div>
                  <div class="achievement-desc">基于Three.js开发的多业态参数化模型动态展示系统</div>
                  <div class="achievement-desc">智慧工地BIM模型优化与交互展示系统</div>
                </div>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">⚡</span>
                <div class="achievement-info">
                  <div class="achievement-name">发明专利 × 2</div>
                  <div class="achievement-desc">一种基于物联网的工程建设数据管理系统及方法</div>
                  <div class="achievement-desc">工程技术资料信息化管理系统及方法</div>
                </div>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">📄</span>
                <div class="achievement-info">
                  <div class="achievement-name">国家级协会期刊论文</div>
                  <div class="achievement-desc">机电装配化施工技术在金融城项目的应用</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Card -->
          <div class="contact-card glass-card">
            <h2 class="card-title">联系我</h2>
            <p class="contact-intro">如果你有项目需求，欢迎联系我聊聊</p>

            <div class="contact-methods">
              <div class="contact-item" @click="copyWechat('邮箱', '937636001@qq.com')">
                <span class="contact-icon">📧</span>
                <div class="contact-info">
                  <div class="contact-label">邮箱</div>
                  <div class="contact-value">937636001@qq.com</div>
                </div>
              </div>

              <div class="contact-item" @click="copyWechat('微信号', 'tonggq0926')">
                <span class="contact-icon">💬</span>
                <div class="contact-info">
                  <div class="contact-label">微信</div>
                  <div class="contact-value">tonggq0926</div>
                </div>
              </div>
            </div>

            <div class="wechat-qr">
              <h3 class="qr-title">微信扫码</h3>
              <div class="qr-placeholder">
                <img src="@/assets/img/wxid.jpg" />
                <small>扫码添加微信好友</small>
              </div>
            </div>

            <div class="contact-footer">
              <div class="footer-item">
                <span>📍 江苏南京 | 支持远程</span>
              </div>
              <div class="footer-item">
                <span>⚡ 24小时内回复</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 项目详情模态框 -->
  <div v-if="showProjectModal" class="project-modal" @click="closeProjectModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h2>{{ selectedProject?.title }}</h2>
        <button class="close-btn" @click="closeProjectModal">✕</button>
      </div>

      <div class="modal-body">
        <!-- 图片/视频展示区域 -->
        <div class="media-viewer">
          <!-- 当前媒体展示 -->
          <div class="current-media">
            <!-- 视频播放 -->
            <div v-if="currentMedia?.type === 'video'" class="video-container">
              <video v-if="currentMedia.url" :src="currentMedia.url" controls autoplay class="project-video" />
              <div v-else class="video-placeholder">
                <span class="video-icon">🎬</span>
                <p>视频演示</p>
                <small>{{ selectedProject?.description }}</small>
              </div>
            </div>

            <!-- 图片展示 -->
            <div v-else class="image-container">
              <div class="main-image">
                <img :src="currentMedia?.url" :alt="currentMedia?.alt || selectedProject?.title" />
              </div>
            </div>
          </div>

          <!-- 媒体缩略图导航 -->
          <div v-if="selectedProject && selectedProject.media.length > 1" class="media-thumbnails">
            <div
              v-for="(media, index) in selectedProject.media"
              :key="index"
              :class="['thumbnail', { active: currentMediaIndex === index }]"
              @click="currentMediaIndex = index"
            >
              <div v-if="media.type === 'video'" class="video-thumbnail">
                <div class="video-icon-small">▶️</div>
                <span class="media-type-label">视频</span>
              </div>
              <img v-else :src="media.url" :alt="media.alt || `${selectedProject.title} ${index + 1}`" />
            </div>
          </div>
        </div>

        <!-- 项目信息 -->
        <div class="project-details">
          <p class="project-description">{{ selectedProject?.description }}</p>
          <div class="tech-stack">
            <h4>技术栈：</h4>
            <div class="tech-tags">
              <span v-for="tech in selectedProject?.tech" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { projectsData, type ProjectData, type MediaItem } from '@/data/projectsData'

// 项目相关状态
const showProjectModal = ref(false)
const selectedProject = ref<ProjectData | null>(null)
const currentMediaIndex = ref(0)

// 计算当前选中的媒体项
const currentMedia = computed<MediaItem | null>(() => {
  if (!selectedProject.value || !selectedProject.value.media.length) return null
  return selectedProject.value.media[currentMediaIndex.value] || null
})

// 打开项目详情
const openProjectDetail = (project: ProjectData) => {
  selectedProject.value = project
  currentMediaIndex.value = 0
  showProjectModal.value = true
  // 防止页面滚动
  document.body.style.overflow = 'hidden'
}

// 关闭项目详情
const closeProjectModal = () => {
  showProjectModal.value = false
  selectedProject.value = null
  currentMediaIndex.value = 0
  // 恢复页面滚动
  document.body.style.overflow = 'auto'
}

// 键盘事件处理
const handleKeyPress = (event: KeyboardEvent) => {
  if (!showProjectModal.value || !selectedProject.value) return

  if (event.key === 'Escape') {
    closeProjectModal()
  } else if (event.key === 'ArrowLeft' && currentMediaIndex.value > 0) {
    currentMediaIndex.value--
  } else if (event.key === 'ArrowRight' && currentMediaIndex.value < selectedProject.value.media.length - 1) {
    currentMediaIndex.value++
  }
}

const copyWechat = async (msg: string, cont: string) => {
  try {
    await navigator.clipboard.writeText(cont)
    alert(msg + '已复制到剪贴板')
  } catch (err) {
    alert(msg + cont)
  }
}

onMounted(() => {
  // 简单的渐入动画
  const cards = document.querySelectorAll('.glass-card')
  cards.forEach((card, index) => {
    ;(card as HTMLElement).style.opacity = '0'
    ;(card as HTMLElement).style.transform = 'translateY(20px)'

    setTimeout(() => {
      ;(card as HTMLElement).style.transition = 'all 0.6s ease'
      ;(card as HTMLElement).style.opacity = '1'
      ;(card as HTMLElement).style.transform = 'translateY(0)'
    }, index * 200)
  })

  // 添加键盘事件监听
  document.addEventListener('keydown', handleKeyPress)
})

// 组件卸载时清理事件监听
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyPress)
  document.body.style.overflow = 'auto'
})
</script>

<style scoped lang="scss">
.freelance-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e7f3ff 50%, #f0f8ff 100%);
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  padding: 2rem;
}

// 毛玻璃卡片基础样式
.glass-card {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.35);
    transform: translateY(-1px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
}

.main-content {
  max-width: 1400px;
  margin: 0 auto;
}

// Header Card
.header-card {
  margin-bottom: 2rem;
  padding: 2rem;
}

.profile-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
}

.profile-info {
  flex: 1;

  .profile-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(59, 130, 246, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    border: 1px solid rgba(59, 130, 246, 0.2);
    margin-bottom: 1rem;
    font-size: 0.9rem;

    .badge-icon {
      font-size: 1.1rem;
    }

    .badge-text {
      font-weight: 600;
      color: #1e293b;
    }
  }

  .profile-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0.75rem;
    background: linear-gradient(45deg, #1e293b, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .profile-subtitle {
    font-size: 1.1rem;
    color: #64748b;
    margin-bottom: 0.75rem;
    font-weight: 500;
    line-height: 1.4;
  }

  .profile-description {
    font-size: 1rem;
    color: #475569;
    line-height: 1.6;
    margin: 0;
  }
}

.profile-stats {
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    display: grid;
  }

  .stat-item {
    text-align: center;

    .stat-number {
      font-size: 1.8rem;
      font-weight: 700;
      color: #3b82f6;
      line-height: 1;
    }

    .stat-label {
      font-size: 0.85rem;
      color: #64748b;
      margin-top: 0.25rem;
    }
  }
}

// Content Grid
.content-grid {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #1e293b, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

// Left Column
.left-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

// Services Card
.services-card {
  padding: 2rem;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.service-item {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.4);

  .service-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;

    .service-icon {
      font-size: 2rem;
      flex-shrink: 0;
      margin-top: 0.25rem;
    }

    .service-name {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.25rem;
    }

    .service-brief {
      font-size: 0.9rem;
      color: #64748b;
      margin: 0;
      line-height: 1.4;
    }
  }

  .service-content {
    margin-top: 1rem;

    p {
      color: #475569;
      font-size: 0.9rem;
      line-height: 1.6;
      margin: 0;
    }
  }
}

// Projects Card
.projects-card {
  padding: 2rem;
}

// 项目网格
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.project-item {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.4);

  &:hover {
    background: rgba(255, 255, 255, 0.6);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
}

.project-cover {
  position: relative;
  width: 100%;
  height: 120px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.project-overlay {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.3rem;
}

.project-type-icon,
.images-count {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.2rem 0.4rem;
  border-radius: 8px;
  font-size: 0.7rem;
  backdrop-filter: blur(10px);
}

.project-info {
  padding: 0.75rem;

  .project-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.3rem;
    line-height: 1.3;
  }

  .project-desc {
    font-size: 0.75rem;
    color: #64748b;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .project-tech {
    display: flex;
    gap: 0.2rem;
    flex-wrap: wrap;

    .tech-badge {
      background: rgba(59, 130, 246, 0.1);
      color: #3b82f6;
      padding: 0.1rem 0.3rem;
      border-radius: 6px;
      font-size: 0.6rem;
      font-weight: 500;
      border: 1px solid rgba(59, 130, 246, 0.2);
    }
  }
}

// Right Column
.right-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

// Tech Card
.tech-card {
  padding: 2rem;
}

.tech-categories {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tech-category {
  .tech-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;

    .tech-icon {
      font-size: 1.5rem;
    }

    .tech-name {
      font-size: 1rem;
      font-weight: 600;
      color: #1e293b;
    }
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    .tech-tag {
      background: rgba(59, 130, 246, 0.1);
      color: #3b82f6;
      padding: 0.3rem 0.75rem;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid rgba(59, 130, 246, 0.2);
    }
  }
}

// Achievements Card
.achievements-card {
  padding: 2rem;
}

.achievements-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 12px;

  .achievement-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }

  .achievement-info {
    .achievement-name {
      font-size: 0.95rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.25rem;
    }

    .achievement-desc {
      font-size: 0.85rem;
      color: #64748b;
      line-height: 1.4;
    }
  }
}

// Contact Card
.contact-card {
  padding: 2rem;
}

.contact-intro {
  color: #64748b;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
    transform: translateX(2px);
  }

  .contact-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .contact-info {
    flex: 1;

    .contact-label {
      font-size: 0.8rem;
      color: #64748b;
      margin-bottom: 0.2rem;
    }

    .contact-value {
      font-size: 0.9rem;
      font-weight: 600;
      color: #1e293b;
    }
  }
}

.wechat-qr {
  margin: 1.5rem 0;
  text-align: center;

  .qr-title {
    font-size: 1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1rem;
  }

  .qr-placeholder {
    background: rgba(255, 255, 255, 0.4);
    border: 2px dashed rgba(59, 130, 246, 0.3);
    border-radius: 12px;
    padding: 1.5rem;
    color: #64748b;

    .qr-icon {
      font-size: 2.5rem;
      display: block;
      margin-bottom: 0.75rem;
    }

    p {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    small {
      font-size: 0.85rem;
      opacity: 0.8;
    }
  }
}

.contact-footer {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .footer-item {
    color: #64748b;
    font-size: 0.85rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
}

// Responsive Design
@media (max-width: 1024px) {
  .content-grid {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .freelance-container {
    padding: 1rem;
  }

  .main-content {
    max-width: 100%;
  }

  .header-card,
  .services-card,
  .projects-card,
  .tech-card,
  .achievements-card,
  .contact-card {
    padding: 1.5rem;
  }

  .left-column,
  .right-column {
    gap: 1.5rem;
  }

  .card-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .freelance-container {
    padding: 0.5rem;
  }

  .header-card,
  .services-card,
  .projects-card,
  .tech-card,
  .achievements-card,
  .contact-card {
    padding: 1rem;
  }

  .service-item,
  .achievement-item,
  .contact-item {
    padding: 0.75rem;
  }
}

// 项目详情模态框
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #64748b;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
      color: #1e293b;
    }
  }
}

.modal-body {
  padding: 2rem;
  overflow-y: auto;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
}

.media-viewer {
  flex: 2;
  min-width: 0;
}

// 视频容器
.video-container {
  .project-video {
    width: 100%;
    max-height: 60vh;
    border-radius: 12px;
    background: #000;
  }

  .video-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 12px;
    border: 2px dashed rgba(59, 130, 246, 0.3);
    color: #64748b;

    .video-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    small {
      font-size: 0.9rem;
      opacity: 0.8;
      text-align: center;
      max-width: 300px;
      line-height: 1.4;
    }
  }
}

// 图片容器
.image-container {
  .main-image {
    width: 100%;
    margin-bottom: 1rem;

    img {
      width: 100%;
      max-height: 60vh;
      object-fit: contain;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.4);
    }
  }
}

// 媒体缩略图导航
.media-thumbnails {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem 0.5rem;
  margin-top: 1rem;

  .thumbnail {
    flex-shrink: 0;
    width: 80px;
    height: 60px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    position: relative;

    &.active {
      border-color: #3b82f6;
      transform: scale(1.05);
    }

    &:hover {
      transform: scale(1.05);
      border-color: rgba(59, 130, 246, 0.5);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .video-thumbnail {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #1e293b, #3b82f6);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;

      .video-icon-small {
        font-size: 1.2rem;
        margin-bottom: 0.25rem;
      }

      .media-type-label {
        font-size: 0.7rem;
        font-weight: 500;
      }
    }
  }
}

.project-details {
  flex: 1;
  min-width: 300px;

  .project-description {
    font-size: 1rem;
    color: #475569;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .tech-stack {
    h4 {
      font-size: 1rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.75rem;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .tech-tag {
        background: rgba(59, 130, 246, 0.1);
        color: #3b82f6;
        padding: 0.5rem 0.75rem;
        border-radius: 12px;
        font-size: 0.85rem;
        font-weight: 500;
        border: 1px solid rgba(59, 130, 246, 0.2);
      }
    }
  }
}
</style>
