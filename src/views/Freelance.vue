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
                <img :src="getWeChatQRUrl()" alt="微信二维码" />
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
import { getIPFSUrlFromPath } from '@/utils/ipfsMapper'

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

// 获取微信二维码URL
const getWeChatQRUrl = () => {
  // 尝试从IPFS获取，如果没有则使用本地路径
  const ipfsUrl = getIPFSUrlFromPath('@/assets/img/wxid.jpg')
  // 如果IPFS映射返回的是原始路径，说明没有IPFS版本，使用import.meta.url
  if (ipfsUrl === 'wxid.jpg' || ipfsUrl === '@/assets/img/wxid.jpg') {
    return new URL('@/assets/img/wxid.jpg', import.meta.url).href
  }
  return ipfsUrl
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

// 演示链接按钮样式
.demo-link {
  margin: 1.5rem 0;
  text-align: center;

  .demo-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(45deg, #3b82f6, #1d4ed8);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);

    &:hover {
      background: linear-gradient(45deg, #1d4ed8, #1e40af);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
    }

    &:active {
      transform: translateY(0);
    }

    .demo-icon {
      font-size: 1.1rem;
    }
  }
}
</style>
