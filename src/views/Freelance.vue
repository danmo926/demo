<template>
  <div class="freelance-container">
    <div class="main-content">
      <!-- Header Card -->
      <div class="header-card glass-card">
        <div class="profile-section">
          <div class="profile-info">
            <div class="profile-badge">
              <span class="badge-icon">👋</span>
              <span class="badge-text">{{ getText(freelanceContent.header.badge) }}</span>
            </div>
            <h1 class="profile-title">{{ getText(freelanceContent.header.title) }}</h1>
            <p class="profile-subtitle">{{ getText(freelanceContent.header.subtitle) }}</p>
            <p class="profile-description">
              {{ getText(freelanceContent.header.description) }}
            </p>
          </div>

          <div class="profile-stats">
            <div class="stat-item">
              <div class="stat-number">9+</div>
              <div class="stat-label">{{ getText(freelanceContent.header.stats.experience) }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">{{ getText(freelanceContent.header.stats.projects) }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">60+</div>
              <div class="stat-label">{{ getText(freelanceContent.header.stats.plugins) }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">20+</div>
              <div class="stat-label">{{ getText(freelanceContent.header.stats.awards) }}</div>
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
            <h2 class="card-title">{{ getText(freelanceContent.services.title) }}</h2>
            <div class="services-list">
              <div class="service-item">
                <div class="service-header">
                  <span class="service-icon">🎮</span>
                  <div>
                    <h3 class="service-name">{{ getText(freelanceContent.services.items.webRenderer.name) }}</h3>
                    <p class="service-brief">{{ getText(freelanceContent.services.items.webRenderer.brief) }}</p>
                  </div>
                </div>
                <div class="service-content">
                  <p>
                    {{ getText(freelanceContent.services.items.webRenderer.content) }}
                  </p>
                </div>
              </div>

              <div class="service-item">
                <div class="service-header">
                  <span class="service-icon">🏗️</span>
                  <div>
                    <h3 class="service-name">{{ getText(freelanceContent.services.items.bimSmart.name) }}</h3>
                    <p class="service-brief">{{ getText(freelanceContent.services.items.bimSmart.brief) }}</p>
                  </div>
                </div>
                <div class="service-content">
                  <p>
                    {{ getText(freelanceContent.services.items.bimSmart.content) }}
                  </p>
                </div>
              </div>

              <div class="service-item">
                <div class="service-header">
                  <span class="service-icon">⚡</span>
                  <div>
                    <h3 class="service-name">{{ getText(freelanceContent.services.items.optimization.name) }}</h3>
                    <p class="service-brief">{{ getText(freelanceContent.services.items.optimization.brief) }}</p>
                  </div>
                </div>
                <div class="service-content">
                  <p>
                    {{ getText(freelanceContent.services.items.optimization.content) }}
                  </p>
                </div>
              </div>

              <div class="service-item">
                <div class="service-header">
                  <span class="service-icon">🗺️</span>
                  <div>
                    <h3 class="service-name">{{ getText(freelanceContent.services.items.webgis.name) }}</h3>
                    <p class="service-brief">{{ getText(freelanceContent.services.items.webgis.brief) }}</p>
                  </div>
                </div>
                <div class="service-content">
                  <p>
                    {{ getText(freelanceContent.services.items.webgis.content) }}
                  </p>
                </div>
              </div>

              <div class="service-item">
                <div class="service-header">
                  <span class="service-icon">🔧</span>
                  <div>
                    <h3 class="service-name">{{ getText(freelanceContent.services.items.revit.name) }}</h3>
                    <p class="service-brief">{{ getText(freelanceContent.services.items.revit.brief) }}</p>
                  </div>
                </div>
                <div class="service-content">
                  <p>
                    {{ getText(freelanceContent.services.items.revit.content) }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Projects Card -->
          <div class="projects-card glass-card">
            <h2 class="card-title">{{ getText(freelanceContent.projects.title) }}</h2>
            <div class="projects-grid">
              <div v-for="project in projectsData" :key="project.id" class="project-item" @click="openProjectDetail(project)">
                <div class="project-cover">
                  <img :src="project.media[0]?.url" :alt="project.media[0]?.alt || getText(project.title)" />
                  <div class="project-overlay">
                    <div class="project-type-icon">
                      {{ project.media.some((m) => m.type === 'video') ? '▶️' : '🖼️' }}
                    </div>
                    <div class="images-count" v-if="project.media.length > 1">📸 {{ project.media.length }}</div>
                  </div>
                </div>
                <div class="project-info">
                  <h3 class="project-title">{{ getText(project.title) }}</h3>
                  <p class="project-desc">{{ getText(project.description) }}</p>
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
            <h2 class="card-title">{{ getText(freelanceContent.techStack.title) }}</h2>
            <div class="tech-categories">
              <div class="tech-category">
                <div class="tech-header">
                  <span class="tech-icon">🎮</span>
                  <span class="tech-name">{{ getText(freelanceContent.techStack.categories.web3d) }}</span>
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
                  <span class="tech-name">{{ getText(freelanceContent.techStack.categories.gis) }}</span>
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
                  <span class="tech-name">{{ getText(freelanceContent.techStack.categories.frontend) }}</span>
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
                  <span class="tech-name">{{ getText(freelanceContent.techStack.categories.desktop) }}</span>
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
            <h2 class="card-title">{{ getText(freelanceContent.achievements.title) }}</h2>
            <div class="achievements-list">
              <div class="achievement-item">
                <span class="achievement-icon">🏆</span>
                <div class="achievement-info">
                  <div class="achievement-name">{{ getText(freelanceContent.achievements.items.provincialTitles.name) }}</div>
                  <div v-for="desc in freelanceContent.achievements.items.provincialTitles.descriptions" :key="desc.zh" class="achievement-desc">{{ getText(desc) }}</div>
                </div>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">🎖️</span>
                <div class="achievement-info">
                  <div class="achievement-name">{{ getText(freelanceContent.achievements.items.awards.name) }}</div>
                  <div v-for="desc in freelanceContent.achievements.items.awards.descriptions" :key="desc.zh" class="achievement-desc">{{ getText(desc) }}</div>
                </div>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">💻</span>
                <div class="achievement-info">
                  <div class="achievement-name">{{ getText(freelanceContent.achievements.items.software.name) }}</div>
                  <div v-for="desc in freelanceContent.achievements.items.software.descriptions" :key="desc.zh" class="achievement-desc">{{ getText(desc) }}</div>
                </div>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">⚡</span>
                <div class="achievement-info">
                  <div class="achievement-name">{{ getText(freelanceContent.achievements.items.patents.name) }}</div>
                  <div v-for="desc in freelanceContent.achievements.items.patents.descriptions" :key="desc.zh" class="achievement-desc">{{ getText(desc) }}</div>
                </div>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">📄</span>
                <div class="achievement-info">
                  <div class="achievement-name">{{ getText(freelanceContent.achievements.items.papers.name) }}</div>
                  <div v-for="desc in freelanceContent.achievements.items.papers.descriptions" :key="desc.zh" class="achievement-desc">{{ getText(desc) }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Card -->
          <div class="contact-card glass-card">
            <h2 class="card-title">{{ getText(freelanceContent.contact.title) }}</h2>
            <p class="contact-intro">{{ getText(freelanceContent.contact.intro) }}</p>

            <div class="contact-methods">
              <div class="contact-item" @click="copyWechat('email', '937636001@qq.com')">
                <span class="contact-icon">📧</span>
                <div class="contact-info">
                  <div class="contact-label">{{ getText(freelanceContent.contact.email) }}</div>
                  <div class="contact-value">937636001@qq.com</div>
                </div>
              </div>

              <div class="contact-item" @click="copyWechat('wechat', 'tonggq0926')">
                <span class="contact-icon">💬</span>
                <div class="contact-info">
                  <div class="contact-label">{{ getText(freelanceContent.contact.wechat) }}</div>
                  <div class="contact-value">tonggq0926</div>
                </div>
              </div>
            </div>

            <div class="wechat-qr">
              <h3 class="qr-title">{{ getText(freelanceContent.contact.qrTitle) }}</h3>
              <div class="qr-placeholder">
                <img src="@/assets/img/wxid.jpg" />
                <small>{{ getText(freelanceContent.contact.qrDescription) }}</small>
              </div>
            </div>

            <div class="contact-footer">
              <div class="footer-item">
                <span>{{ getText(freelanceContent.contact.location) }}</span>
              </div>
              <div class="footer-item">
                <span>{{ getText(freelanceContent.contact.response) }}</span>
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
        <h2>{{ selectedProject ? getText(selectedProject.title) : '' }}</h2>
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
                <span class="media-type-label">{{ currentLanguage === 'zh' ? '视频' : 'Video' }}</span>
              </div>
              <img v-else :src="media.url" :alt="media.alt || `${selectedProject ? getText(selectedProject.title) : ''} ${index + 1}`" />
            </div>
          </div>
        </div>

        <!-- 项目信息 -->
        <div class="project-details">
          <p class="project-description">{{ selectedProject ? getText(selectedProject.description) : '' }}</p>
          
          <!-- 演示链接按钮 -->
          <div v-if="selectedProject?.demoUrl" class="demo-link">
            <button @click="openDemo(selectedProject.demoUrl)" class="demo-btn">
              <span class="demo-icon">🚀</span>
              <span>{{ currentLanguage === 'zh' ? '查看在线演示' : 'View Live Demo' }}</span>
            </button>
          </div>

          <div class="tech-stack">
            <h4>{{ currentLanguage === 'zh' ? '技术栈：' : 'Tech Stack:' }}</h4>
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
import { useRoute } from 'vue-router'
import { projectsData, type ProjectData, type MediaItem } from '@/data/projectsData'
import { freelanceContent } from '@/data/freelanceData'
import type { LanguageContent } from '@/data/types'

// 路由和语言相关
const route = useRoute()

// 语言检测 - 从query参数获取，默认为中文
const currentLanguage = computed(() => {
  const lang = route.query.lang as string
  return lang === 'en' ? 'en' : 'zh'
})

// 获取当前语言的文本
const getText = (content: LanguageContent): string => {
  return content[currentLanguage.value]
}

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

const copyWechat = async (type: 'email' | 'wechat', cont: string) => {
  try {
    await navigator.clipboard.writeText(cont)
    const msg = getText(freelanceContent.contact.copyMessage[type])
    alert(msg + (currentLanguage.value === 'zh' ? '已复制到剪贴板' : ' copied to clipboard'))
  } catch (err) {
    const msg = getText(freelanceContent.contact.copyMessage[type])
    alert(msg + ': ' + cont)
  }
}

// 打开演示链接
const openDemo = (url: string) => {
  window.open(url, '_blank')
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
    gap: 1.5rem;
    display: grid;
  }

  .stat-item {
    text-align: center;
    padding: 0.5rem;

    @media (max-width: 768px) {
      padding: 0.75rem;
    }

    .stat-number {
      font-size: 1.8rem;
      font-weight: 700;
      color: #3b82f6;
      line-height: 1;
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }

      @media (max-width: 480px) {
        font-size: 1.6rem;
      }
    }

    .stat-label {
      font-size: 0.85rem;
      color: #64748b;
      margin-top: 0.25rem;
      
      @media (max-width: 768px) {
        font-size: 0.9rem;
        margin-top: 0.4rem;
        line-height: 1.3;
      }

      @media (max-width: 480px) {
        font-size: 0.8rem;
        margin-top: 0.3rem;
      }
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

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

  .service-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      gap: 0.75rem;
    }

    .service-icon {
      font-size: 2rem;
      flex-shrink: 0;
      margin-top: 0.25rem;

      @media (max-width: 768px) {
        font-size: 1.8rem;
      }
    }

    .service-name {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.25rem;

      @media (max-width: 768px) {
        font-size: 1.05rem;
        margin-bottom: 0.4rem;
      }
    }

    .service-brief {
      font-size: 0.9rem;
      color: #64748b;
      margin: 0;
      line-height: 1.4;

      @media (max-width: 768px) {
        font-size: 0.85rem;
        line-height: 1.5;
      }
    }
  }

  .service-content {
    margin-top: 1rem;

    @media (max-width: 768px) {
      margin-top: 0.75rem;
    }

    p {
      color: #475569;
      font-size: 0.9rem;
      line-height: 1.6;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 0.85rem;
        line-height: 1.65;
      }
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

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
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

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

// 移动端禁用 hover 效果，但保持点击反馈
    @media (hover: none) {
      &:hover img {
        transform: none;
      }
      
      // 添加点击反馈
      &:active {
        transform: scale(0.98);
      }
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

  @media (max-width: 768px) {
    padding: 1rem;
  }

  .project-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.3rem;
    line-height: 1.3;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
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

    @media (max-width: 768px) {
      font-size: 0.85rem;
      line-height: 1.4;
      -webkit-line-clamp: 3;
      margin-bottom: 0.75rem;
    }
  }

  .project-tech {
    display: flex;
    gap: 0.2rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      gap: 0.3rem;
    }

    .tech-badge {
      background: rgba(59, 130, 246, 0.1);
      color: #3b82f6;
      padding: 0.1rem 0.3rem;
      border-radius: 6px;
      font-size: 0.6rem;
      font-weight: 500;
      border: 1px solid rgba(59, 130, 246, 0.2);

      @media (max-width: 768px) {
        padding: 0.2rem 0.4rem;
        font-size: 0.7rem;
      }
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

    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }

    .tech-icon {
      font-size: 1.5rem;
      
      @media (max-width: 768px) {
        font-size: 1.4rem;
      }
    }

    .tech-name {
      font-size: 1rem;
      font-weight: 600;
      color: #1e293b;
      
      @media (max-width: 768px) {
        font-size: 1.05rem;
      }
    }
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    @media (max-width: 768px) {
      gap: 0.6rem;
    }

    @media (max-width: 480px) {
      gap: 0.4rem;
    }

    .tech-tag {
      background: rgba(59, 130, 246, 0.1);
      color: #3b82f6;
      padding: 0.3rem 0.75rem;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid rgba(59, 130, 246, 0.2);
      
      @media (max-width: 768px) {
        padding: 0.4rem 0.85rem;
        font-size: 0.85rem;
        border-radius: 10px;
      }

      @media (max-width: 480px) {
        padding: 0.35rem 0.7rem;
        font-size: 0.8rem;
      }
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

  @media (max-width: 768px) {
    padding: 1.25rem;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.75rem;
  }

  .achievement-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: 0.25rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  .achievement-info {
    .achievement-name {
      font-size: 0.95rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.25rem;

      @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 0.4rem;
      }
    }

    .achievement-desc {
      font-size: 0.85rem;
      color: #64748b;
      line-height: 1.4;

      @media (max-width: 768px) {
        font-size: 0.9rem;
        line-height: 1.5;
      }

      @media (max-width: 480px) {
        font-size: 0.85rem;
      }
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
  min-height: 44px; // 触摸友好的最小点击区域

  @media (max-width: 768px) {
    padding: 1.25rem;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.6);
    transform: translateX(2px);
  }

  // 移动端禁用 hover 效果
  @media (hover: none) {
    &:hover {
      background: rgba(255, 255, 255, 0.4);
      transform: none;
    }
    
    &:active {
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0.98);
    }
  }

  .contact-icon {
    font-size: 1.5rem;
    flex-shrink: 0;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  .contact-info {
    flex: 1;

    .contact-label {
      font-size: 0.8rem;
      color: #64748b;
      margin-bottom: 0.2rem;

      @media (max-width: 768px) {
        font-size: 0.85rem;
        margin-bottom: 0.3rem;
      }
    }

    .contact-value {
      font-size: 0.9rem;
      font-weight: 600;
      color: #1e293b;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
}

.wechat-qr {
  margin: 1.5rem 0;
  text-align: center;

  @media (max-width: 768px) {
    margin: 1.25rem 0;
  }

  .qr-title {
    font-size: 1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 1.05rem;
      margin-bottom: 0.75rem;
    }
  }

  .qr-placeholder {
    background: rgba(255, 255, 255, 0.4);
    border: 2px dashed rgba(59, 130, 246, 0.3);
    border-radius: 12px;
    padding: 1.5rem;
    color: #64748b;
    
    @media (max-width: 768px) {
      padding: 1.25rem;
      border-radius: 10px;
    }

    @media (max-width: 480px) {
      padding: 1rem;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      
      @media (max-width: 768px) {
        max-width: 200px;
      }

      @media (max-width: 480px) {
        max-width: 160px;
      }
    }

    .qr-icon {
      font-size: 2.5rem;
      display: block;
      margin-bottom: 0.75rem;
      
      @media (max-width: 768px) {
        font-size: 2.2rem;
      }
    }

    p {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      
      @media (max-width: 768px) {
        font-size: 0.95rem;
      }
    }

    small {
      font-size: 0.85rem;
      opacity: 0.8;
      
      @media (max-width: 768px) {
        font-size: 0.8rem;
        line-height: 1.4;
      }
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
    margin-bottom: 1.5rem;
  }

  .service-item,
  .achievement-item,
  .contact-item {
    padding: 1rem;
  }
  
  // 保证在小屏幕上也有足够的点击区域
  .project-item {
    min-height: 200px;
  }
  
  // 优化小屏幕上的滚动条
  .media-thumbnails {
    -webkit-overflow-scrolling: touch;
    
    &::-webkit-scrollbar {
      height: 6px;
    }
  }
}

// 项目详情模态框
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  animation: modal-fade-in 0.3s ease;

  @media (max-width: 768px) {
    padding: 0;
    align-items: flex-start;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95));
  }
}

@keyframes modal-fade-in {
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(10px);
  }
}

.modal-content {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95));
  backdrop-filter: blur(25px);
  border-radius: 20px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 
    0 25px 60px rgba(0, 0, 0, 0.25),
    0 8px 25px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  animation: modal-scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  
  // 添加微妙的光泽效果
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    z-index: 1;
  }

  @media (max-width: 768px) {
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 0;
    width: 100%;
    height: 100%;
    animation: modal-slide-up 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    &::before {
      display: none;
    }
  }
}

@keyframes modal-scale-in {
  from {
    opacity: 0;
    transform: scale(0.8) rotateX(15deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotateX(0deg);
  }
}

@keyframes modal-slide-up {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem 1.5rem;
  border-bottom: 1px solid rgba(226, 232, 240, 0.6);
  flex-shrink: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.8));
  backdrop-filter: blur(20px);
  position: relative;
  
  // 添加微妙的阴影分割线
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 2.5rem;
    right: 2.5rem;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
  }

  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.95));
    backdrop-filter: blur(25px);
    position: sticky;
    top: 0;
    z-index: 10;
    
    &::after {
      left: 1.5rem;
      right: 1.5rem;
    }
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    background: linear-gradient(135deg, #1e293b, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    line-height: 1.3;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
      font-size: 1.3rem;
      line-height: 1.4;
    }
  }

  .close-btn {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(248, 250, 252, 0.6));
    border: 1px solid rgba(226, 232, 240, 0.5);
    font-size: 1.25rem;
    color: #64748b;
    cursor: pointer;
    padding: 0.75rem;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    min-width: 44px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    
    &:hover {
      background: linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(241, 245, 249, 0.8));
      color: #1e293b;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
      padding: 0.875rem;
      border-radius: 14px;
    }
    
    // 移动端优化触摸反馈
    @media (hover: none) {
      &:hover {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(248, 250, 252, 0.6));
        transform: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      }
      
      &:active {
        background: linear-gradient(135deg, rgba(241, 245, 249, 0.9), rgba(226, 232, 240, 0.8));
        transform: scale(0.95);
      }
    }
  }
}

.modal-body {
  padding: 2rem 2.5rem 2.5rem;
  overflow-y: auto;
  display: flex;
  gap: 2.5rem;
  flex: 1;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(248, 250, 252, 0.05));
  
  // 美化滚动条
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(241, 245, 249, 0.3);
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(99, 102, 241, 0.4));
    border-radius: 6px;
    
    &:hover {
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.6), rgba(99, 102, 241, 0.6));
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
    gap: 2rem;
    
    &::-webkit-scrollbar {
      width: 4px;
    }
  }

  @media (max-width: 480px) {
    padding: 1.25rem 1rem;
    gap: 1.5rem;
  }
}

.media-viewer {
  flex: 2;
  min-width: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(248, 250, 252, 0.6));
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(226, 232, 240, 0.4);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    flex: 1;
    order: 1;
    padding: 1.25rem;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(248, 250, 252, 0.8));
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 10px;
  }
  
  // 当前媒体展示区域
  .current-media {
    margin-bottom: 1rem;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    
    @media (max-width: 768px) {
      margin-bottom: 0.75rem;
      border-radius: 10px;
    }
  }
}

// 视频容器
.video-container {
  position: relative;
  
  .project-video {
    width: 100%;
    max-height: 60vh;
    border-radius: 12px;
    background: #000;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    outline: none;
    
    // 添加精致的边框
    border: 2px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 768px) {
      max-height: 40vh;
      border-radius: 10px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 480px) {
      max-height: 30vh;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    }
  }

  .video-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    background: linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(241, 245, 249, 0.7));
    border-radius: 16px;
    border: 2px dashed rgba(59, 130, 246, 0.3);
    color: #64748b;
    position: relative;
    overflow: hidden;
    
    // 添加微妙的背景装饰
    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
      animation: float 6s ease-in-out infinite;
    }

    @media (max-width: 768px) {
      min-height: 200px;
      border-radius: 12px;
    }

    @media (max-width: 480px) {
      min-height: 150px;
      border-radius: 10px;
    }

    .video-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      @media (max-width: 768px) {
        font-size: 3rem;
      }

      @media (max-width: 480px) {
        font-size: 2.5rem;
      }
    }

    p {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      position: relative;
      z-index: 1;
      background: linear-gradient(135deg, #1e293b, #3b82f6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      @media (max-width: 768px) {
        font-size: 1rem;
      }

      @media (max-width: 480px) {
        font-size: 0.9rem;
      }
    }

    small {
      font-size: 0.9rem;
      opacity: 0.8;
      text-align: center;
      max-width: 300px;
      line-height: 1.5;
      position: relative;
      z-index: 1;

      @media (max-width: 768px) {
        font-size: 0.85rem;
        max-width: 250px;
      }

      @media (max-width: 480px) {
        font-size: 0.8rem;
        max-width: 200px;
      }
    }
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-10px, -10px) rotate(5deg);
  }
}

// 图片容器
.image-container {
  .main-image {
    width: 100%;
    position: relative;
    background: linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(241, 245, 249, 0.7));
    border-radius: 12px;
    overflow: hidden;
    
    // 添加微妙的高光效果
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
      pointer-events: none;
      z-index: 1;
    }

    @media (max-width: 768px) {
      border-radius: 10px;
    }

    @media (max-width: 480px) {
      border-radius: 8px;
    }

    img {
      width: 100%;
      max-height: 60vh;
      object-fit: contain;
      display: block;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      z-index: 0;

      &:hover {
        transform: scale(1.02);
      }

      @media (max-width: 768px) {
        max-height: 40vh;
        
        &:hover {
          transform: none;
        }
      }

      @media (max-width: 480px) {
        max-height: 30vh;
      }
      
      // 移动端优化
      @media (hover: none) {
        &:hover {
          transform: none;
        }
      }
    }
  }
}

// 媒体缩略图导航
.media-thumbnails {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem;
  margin-top: 1rem;
  -webkit-overflow-scrolling: touch; // 移动端平滑滚动
  scrollbar-width: thin;

  @media (max-width: 768px) {
    gap: 0.75rem;
    padding: 0.75rem;
    margin-top: 1.5rem;
    
    // 隐藏滚动条但保持功能
    &::-webkit-scrollbar {
      height: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(59, 130, 246, 0.3);
      border-radius: 4px;
    }
  }

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

    @media (max-width: 768px) {
      width: 90px;
      height: 68px;
      border-radius: 10px;
    }

    @media (max-width: 480px) {
      width: 100px;
      height: 75px;
    }

    &.active {
      border-color: #3b82f6;
      transform: scale(1.05);
      
      @media (max-width: 768px) {
        transform: scale(1.1);
        border-width: 3px;
      }
    }

    &:hover {
      transform: scale(1.05);
      border-color: rgba(59, 130, 246, 0.5);
    }

    // 移动端禁用 hover 效果
    @media (hover: none) {
      &:hover {
        transform: none;
        border-color: transparent;
      }
      
      // 只在点击时显示反馈
      &:active {
        transform: scale(0.95);
      }
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
        
        @media (max-width: 768px) {
          font-size: 1.4rem;
        }
      }

      .media-type-label {
        font-size: 0.7rem;
        font-weight: 500;
        
        @media (max-width: 768px) {
          font-size: 0.75rem;
        }
      }
    }
  }
}

.project-details {
  flex: 1;
  min-width: 300px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(248, 250, 252, 0.7));
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(226, 232, 240, 0.4);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  position: relative;
  
  // 添加微妙的顶部高光
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
  }

  @media (max-width: 768px) {
    min-width: unset;
    order: 2;
    padding: 1.25rem;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(248, 250, 252, 0.9));
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 10px;
  }

  .project-description {
    font-size: 1rem;
    color: #475569;
    line-height: 1.7;
    margin-bottom: 2rem;
    font-weight: 400;
    letter-spacing: 0.01em;
    
    // 添加精致的首字母效果
    &::first-letter {
      font-size: 1.2em;
      font-weight: 600;
      color: #3b82f6;
    }

    @media (max-width: 768px) {
      font-size: 0.95rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      line-height: 1.7;
      margin-bottom: 1.25rem;
    }
  }

  .tech-stack {
    h4 {
      font-size: 1.1rem;
      font-weight: 700;
      background: linear-gradient(135deg, #1e293b, #3b82f6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
      position: relative;
      padding-bottom: 0.5rem;
      
      // 添加装饰线
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 2rem;
        height: 2px;
        background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        border-radius: 1px;
      }

      @media (max-width: 768px) {
        font-size: 1.15rem;
        margin-bottom: 1.25rem;
      }
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;

      @media (max-width: 768px) {
        gap: 0.7rem;
      }

      @media (max-width: 480px) {
        gap: 0.5rem;
      }

      .tech-tag {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(99, 102, 241, 0.05));
        color: #3b82f6;
        padding: 0.6rem 1rem;
        border-radius: 14px;
        font-size: 0.85rem;
        font-weight: 600;
        border: 1px solid rgba(59, 130, 246, 0.15);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        
        // 添加微妙的高光效果
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }
        
        &:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(99, 102, 241, 0.08));
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
          
          &::before {
            left: 100%;
          }
        }

        @media (max-width: 768px) {
          padding: 0.7rem 1.1rem;
          font-size: 0.9rem;
          border-radius: 12px;
        }

        @media (max-width: 480px) {
          padding: 0.6rem 0.9rem;
          font-size: 0.8rem;
          border-radius: 10px;
        }
        
        // 移动端优化
        @media (hover: none) {
          &:hover {
            transform: none;
            box-shadow: none;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(99, 102, 241, 0.05));
          }
        }
      }
    }
  }
}

// 演示链接按钮样式
.demo-link {
  margin: 2rem 0 1.5rem;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    margin: 1.75rem 0 1.25rem;
  }

  .demo-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 16px;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
      0 8px 25px rgba(59, 130, 246, 0.25),
      0 4px 12px rgba(59, 130, 246, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    min-height: 48px;
    position: relative;
    overflow: hidden;
    letter-spacing: 0.02em;
    
    // 添加光泽效果
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.6s ease;
    }
    
    // 添加边框高光
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 16px;
      padding: 1px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: xor;
      -webkit-mask-composite: xor;
    }

    @media (max-width: 768px) {
      padding: 1.1rem 2.5rem;
      font-size: 1rem;
      border-radius: 14px;
      width: 100%;
      max-width: 300px;
      gap: 0.9rem;
      
      &::after {
        border-radius: 14px;
      }
    }

    @media (max-width: 480px) {
      padding: 1rem 2rem;
      font-size: 0.95rem;
      max-width: 260px;
      border-radius: 12px;
      
      &::after {
        border-radius: 12px;
      }
    }

    &:hover {
      background: linear-gradient(135deg, #1d4ed8, #4f46e5, #7c3aed);
      transform: translateY(-3px) scale(1.02);
      box-shadow: 
        0 12px 35px rgba(59, 130, 246, 0.35),
        0 8px 20px rgba(59, 130, 246, 0.2);
        
      &::before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(-1px) scale(1.01);
      box-shadow: 
        0 6px 20px rgba(59, 130, 246, 0.3),
        0 3px 10px rgba(59, 130, 246, 0.2);
    }

    // 移动端优化触摸反馈
    @media (hover: none) {
      &:hover {
        transform: none;
        background: linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6);
        box-shadow: 
          0 8px 25px rgba(59, 130, 246, 0.25),
          0 4px 12px rgba(59, 130, 246, 0.15);
      }
      
      &:active {
        transform: scale(0.97);
        background: linear-gradient(135deg, #1e40af, #3730a3, #6b21a8);
      }
    }

    .demo-icon {
      font-size: 1.2rem;
      position: relative;
      z-index: 1;
      
      @media (max-width: 768px) {
        font-size: 1.3rem;
      }
    }
    
    span {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
