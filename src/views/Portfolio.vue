<template>
  <div class="portfolio-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-grid"></div>
        <div class="hero-particles"></div>
      </div>
      
      <div class="hero-content">
        <div class="hero-avatar" ref="heroAvatar">
          <img :src="personalInfo.avatar" :alt="personalInfo.name" />
          <div class="avatar-ring"></div>
        </div>
        
        <div class="hero-text" ref="heroText">
          <h1 class="hero-title">{{ personalInfo.name }}</h1>
          <h2 class="hero-subtitle">{{ personalInfo.title }}</h2>
          <p class="hero-description">{{ personalInfo.subtitle }}</p>
          
          <div class="hero-stats">
            <div class="stat-item" v-for="(stat, index) in heroStats" :key="index" ref="heroStatsRefs">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
          
          <div class="hero-actions" ref="heroActions">
            <button class="btn-primary" @click="scrollToPortfolio">
              <span>View My Work</span>
              <i class="icon-arrow">↓</i>
            </button>
            <a :href="personalInfo.upworkProfile" target="_blank" class="btn-secondary">
              <span>Hire Me on Upwork</span>
              <i class="icon-external">↗</i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator" ref="scrollIndicator">
        <div class="scroll-line"></div>
        <div class="scroll-text">Scroll</div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section" ref="skillsSection">
      <div class="container">
        <h2 class="section-title" ref="skillsTitle">Technical Expertise</h2>
        
        <div class="skills-grid">
          <div 
            v-for="(skill, index) in Object.entries(skillCategories)" 
            :key="skill[0]"
            class="skill-card"
            ref="skillCards"
            :style="{ '--skill-color': skill[1].color }"
          >
            <div class="skill-icon">{{ skill[1].icon }}</div>
            <div class="skill-name">{{ skill[1].name }}</div>
            <div class="skill-projects">{{ getSkillProjectCount(skill[0]) }} Projects</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio-section" ref="portfolioSection">
      <div class="container">
        <div class="portfolio-header">
          <h2 class="section-title" ref="portfolioTitle">Featured Projects</h2>
          <div class="portfolio-filters" ref="portfolioFilters">
            <button 
              v-for="filter in filters" 
              :key="filter.key"
              class="filter-btn"
              :class="{ active: activeFilter === filter.key }"
              @click="setActiveFilter(filter.key)"
            >
              {{ filter.label }}
            </button>
          </div>
        </div>
        
        <div class="portfolio-grid" ref="portfolioGrid">
          <div 
            v-for="item in filteredPortfolio" 
            :key="item.id"
            class="portfolio-item"
            :class="[`type-${item.type}`, { featured: item.featured }]"
            ref="portfolioItemRefs"
            @click="openPortfolioModal(item)"
          >
            <div class="item-thumbnail">
              <img :src="item.thumbnail" :alt="item.title" loading="lazy" />
              <div class="item-overlay">
                <div class="item-type-icon">
                  {{ getTypeIcon(item.type) }}
                </div>
                <div class="item-actions">
                  <button class="action-btn" v-if="item.demoUrl" @click.stop="openDemo(item.demoUrl)">
                    <i class="icon-play">▶</i>
                  </button>
                  <button class="action-btn" v-if="item.githubUrl" @click.stop="openGithub(item.githubUrl)">
                    <i class="icon-github">⚡</i>
                  </button>
                </div>
              </div>
            </div>
            
            <div class="item-content">
              <div class="item-category" :style="{ color: skillCategories[item.category].color }">
                {{ skillCategories[item.category].name }}
              </div>
              <h3 class="item-title">{{ item.title }}</h3>
              <p class="item-description">{{ item.description }}</p>
              
              <div class="item-technologies">
                <span v-for="tech in item.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
              
              <div class="item-meta">
                <span class="item-year">{{ item.year }}</span>
                <span class="item-featured" v-if="item.featured">⭐ Featured</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="portfolio-cta" ref="portfolioCta">
          <button class="btn-outline" @click="loadMore" v-if="hasMore">
            Load More Projects
          </button>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section" ref="servicesSection">
      <div class="container">
        <h2 class="section-title" ref="servicesTitle">What I Can Do For You</h2>
        
        <div class="services-grid">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="service-card"
            ref="serviceCards"
          >
            <div class="service-icon">{{ service.icon }}</div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section" ref="testimonialsSection">
      <div class="container">
        <h2 class="section-title" ref="testimonialsTitle">Client Testimonials</h2>
        
        <div class="testimonials-grid">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="testimonial-card"
            ref="testimonialCards"
          >
            <div class="testimonial-content">
              <div class="testimonial-stars">
                <span v-for="star in testimonial.rating" :key="star" class="star">⭐</span>
              </div>
              <p class="testimonial-text">"{{ testimonial.content }}"</p>
            </div>
            <div class="testimonial-author">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="author-avatar" />
              <div class="author-info">
                <div class="author-name">{{ testimonial.name }}</div>
                <div class="author-role">{{ testimonial.role }}, {{ testimonial.company }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" ref="contactSection">
      <div class="container">
        <div class="contact-content">
          <div class="contact-text" ref="contactText">
            <h2 class="section-title">Ready to Start Your Project?</h2>
            <p class="contact-description">
              Let's discuss how I can help bring your 3D vision to life. 
              I'm available for both short-term projects and long-term collaborations.
            </p>
            
            <div class="contact-info">
              <div class="contact-item">
                <i class="icon-email">✉</i>
                <a :href="`mailto:${personalInfo.email}`">{{ personalInfo.email }}</a>
              </div>
              <div class="contact-item">
                <i class="icon-location">📍</i>
                <span>{{ personalInfo.location }}</span>
              </div>
              <div class="contact-item">
                <i class="icon-experience">⏱</i>
                <span>{{ personalInfo.experience }}</span>
              </div>
            </div>
          </div>
          
          <div class="contact-actions" ref="contactActions">
            <a :href="personalInfo.upworkProfile" target="_blank" class="btn-primary large">
              <span>Hire Me on Upwork</span>
              <i class="icon-external">↗</i>
            </a>
            <a :href="`mailto:${personalInfo.email}`" class="btn-secondary large">
              <span>Send Email</span>
              <i class="icon-email">✉</i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Modal -->
    <div v-if="selectedItem" class="portfolio-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">×</button>
        
        <div class="modal-media">
          <img v-if="selectedItem.type === 'image'" :src="selectedItem.media || selectedItem.thumbnail" :alt="selectedItem.title" />
          <video v-else-if="selectedItem.type === 'video'" :src="selectedItem.media" controls autoplay muted loop></video>
          <iframe v-else-if="selectedItem.type === 'demo' && selectedItem.demoUrl" :src="selectedItem.demoUrl" frameborder="0"></iframe>
          <div v-else class="modal-placeholder">
            <img :src="selectedItem.thumbnail" :alt="selectedItem.title" />
          </div>
        </div>
        
        <div class="modal-info">
          <div class="modal-category" :style="{ color: skillCategories[selectedItem.category].color }">
            {{ skillCategories[selectedItem.category].name }}
          </div>
          <h2 class="modal-title">{{ selectedItem.title }}</h2>
          <p class="modal-description">{{ selectedItem.description }}</p>
          
          <div class="modal-technologies">
            <span v-for="tech in selectedItem.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
          
          <div class="modal-actions">
            <a v-if="selectedItem.demoUrl" :href="selectedItem.demoUrl" target="_blank" class="btn-primary">
              View Demo
            </a>
            <a v-if="selectedItem.githubUrl" :href="selectedItem.githubUrl" target="_blank" class="btn-secondary">
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  personalInfo, 
  portfolioItems, 
  skillCategories, 
  services, 
  testimonials,
  type PortfolioItem 
} from '@/data/portfolioData'

// GSAP插件注册 (ScrollTrigger暂时注释)
// gsap.registerPlugin(ScrollTrigger)

// Refs
const heroAvatar = ref<HTMLElement>()
const heroText = ref<HTMLElement>()
const heroStatsRefs = ref<HTMLElement[]>()
const heroActions = ref<HTMLElement>()
const scrollIndicator = ref<HTMLElement>()
const skillsSection = ref<HTMLElement>()
const skillsTitle = ref<HTMLElement>()
const skillCards = ref<HTMLElement[]>()
const portfolioSection = ref<HTMLElement>()
const portfolioTitle = ref<HTMLElement>()
const portfolioFilters = ref<HTMLElement>()
const portfolioGrid = ref<HTMLElement>()
const portfolioItemRefs = ref<HTMLElement[]>()
const portfolioCta = ref<HTMLElement>()
const servicesSection = ref<HTMLElement>()
const servicesTitle = ref<HTMLElement>()
const serviceCards = ref<HTMLElement[]>()
const testimonialsSection = ref<HTMLElement>()
const testimonialsTitle = ref<HTMLElement>()
const testimonialCards = ref<HTMLElement[]>()
const contactSection = ref<HTMLElement>()
const contactText = ref<HTMLElement>()
const contactActions = ref<HTMLElement>()

// 响应式数据
const activeFilter = ref('all')
const selectedItem = ref<PortfolioItem | null>(null)
const displayCount = ref(6)

// 计算属性
const heroStats = computed(() => [
  { number: personalInfo.experience, label: 'Experience' },
  { number: portfolioItems.length + '+', label: 'Projects' },
  { number: Object.keys(skillCategories).length, label: 'Technologies' },
  { number: '100%', label: 'Success Rate' }
])

const filters = computed(() => [
  { key: 'all', label: 'All Projects' },
  { key: 'featured', label: 'Featured' },
  ...Object.entries(skillCategories).map(([key, value]) => ({
    key,
    label: value.name
  }))
])

const filteredPortfolio = computed(() => {
  let items = portfolioItems
  
  if (activeFilter.value === 'featured') {
    items = items.filter(item => item.featured)
  } else if (activeFilter.value !== 'all') {
    items = items.filter(item => item.category === activeFilter.value)
  }
  
  return items.slice(0, displayCount.value)
})

const hasMore = computed(() => {
  const totalItems = activeFilter.value === 'all' 
    ? portfolioItems.length 
    : activeFilter.value === 'featured'
    ? portfolioItems.filter(item => item.featured).length
    : portfolioItems.filter(item => item.category === activeFilter.value).length
  
  return displayCount.value < totalItems
})

// 方法
const getSkillProjectCount = (skill: string) => {
  return portfolioItems.filter(item => item.category === skill).length
}

const getTypeIcon = (type: string) => {
  const icons = {
    image: '🖼️',
    video: '🎥',
    demo: '🚀',
    interactive: '⚡'
  }
  return icons[type as keyof typeof icons] || '📱'
}

const setActiveFilter = (filter: string) => {
  activeFilter.value = filter
  displayCount.value = 6
  
  // 重新触发网格动画
  gsap.fromTo(portfolioItemRefs.value, 
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
  )
}

const loadMore = () => {
  displayCount.value += 6
}

const openPortfolioModal = (item: PortfolioItem) => {
  selectedItem.value = item
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedItem.value = null
  document.body.style.overflow = 'auto'
}

const openDemo = (url: string) => {
  window.open(url, '_blank')
}

const openGithub = (url: string) => {
  window.open(url, '_blank')
}

const scrollToPortfolio = () => {
  portfolioSection.value?.scrollIntoView({ behavior: 'smooth' })
}

// 动画初始化
const initAnimations = () => {
  // Hero动画时间轴
  const tl = gsap.timeline({ delay: 0.5 })
  
  // Hero入场动画
  tl.from(heroAvatar.value, { 
    scale: 0, 
    rotation: 180, 
    duration: 1, 
    ease: "back.out(1.7)" 
  })
  .from(heroText.value?.children || [], { 
    y: 50, 
    opacity: 0, 
    duration: 0.8, 
    stagger: 0.2 
  }, "-=0.5")
  .from(heroStatsRefs.value || [], { 
    y: 30, 
    opacity: 0, 
    duration: 0.6, 
    stagger: 0.1 
  }, "-=0.3")
  .from(heroActions.value?.children || [], { 
    y: 20, 
    opacity: 0, 
    duration: 0.5, 
    stagger: 0.1 
  }, "-=0.2")
  
  // 滚动指示器动画
  gsap.to(scrollIndicator.value?.querySelector('.scroll-line'), {
    scaleY: 0,
    transformOrigin: 'top',
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  })
  
  // 简化的滚动触发动画（使用Intersection Observer）
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target
        
        // 技能部分动画
        if (target === skillsSection.value) {
          gsap.from(skillsTitle.value, { y: 50, opacity: 0, duration: 0.8 })
          gsap.from(skillCards.value || [], { 
            y: 50, 
            opacity: 0, 
            duration: 0.6, 
            stagger: 0.1,
            delay: 0.2
          })
        }
        
        // 作品集部分动画
        if (target === portfolioSection.value) {
          gsap.from(portfolioTitle.value, { y: 50, opacity: 0, duration: 0.8 })
          gsap.from(portfolioFilters.value?.children || [], { 
            y: 30, 
            opacity: 0, 
            duration: 0.5, 
            stagger: 0.1,
            delay: 0.2
          })
          gsap.from(portfolioItemRefs.value || [], { 
            y: 50, 
            opacity: 0, 
            duration: 0.6, 
            stagger: 0.1,
            delay: 0.4
          })
        }
        
        // 服务部分动画
        if (target === servicesSection.value) {
          gsap.from(servicesTitle.value, { y: 50, opacity: 0, duration: 0.8 })
          gsap.from(serviceCards.value || [], { 
            y: 50, 
            opacity: 0, 
            duration: 0.6, 
            stagger: 0.2,
            delay: 0.2
          })
        }
        
        // 评价部分动画
        if (target === testimonialsSection.value) {
          gsap.from(testimonialsTitle.value, { y: 50, opacity: 0, duration: 0.8 })
          gsap.from(testimonialCards.value || [], { 
            y: 50, 
            opacity: 0, 
            duration: 0.6, 
            stagger: 0.2,
            delay: 0.2
          })
        }
        
        // 联系部分动画
        if (target === contactSection.value) {
          gsap.from(contactText.value?.children || [], { 
            y: 50, 
            opacity: 0, 
            duration: 0.8, 
            stagger: 0.2 
          })
          gsap.from(contactActions.value?.children || [], { 
            y: 30, 
            opacity: 0, 
            duration: 0.6, 
            stagger: 0.1,
            delay: 0.4
          })
        }
        
        // 观察完成后停止观察该元素
        observer.unobserve(target)
      }
    })
  }, observerOptions)
  
  // 观察各个部分
  if (skillsSection.value) observer.observe(skillsSection.value)
  if (portfolioSection.value) observer.observe(portfolioSection.value)
  if (servicesSection.value) observer.observe(servicesSection.value)
  if (testimonialsSection.value) observer.observe(testimonialsSection.value)
  if (contactSection.value) observer.observe(contactSection.value)
}

onMounted(() => {
  initAnimations()
})

onUnmounted(() => {
  // 清理动画和观察器
  gsap.killTweensOf("*")
})
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.portfolio-container {
  overflow-x: hidden;
}

// Hero Section
.hero-section {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  opacity: 0.1;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

.hero-particles {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent),
                    radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.2), transparent),
                    radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.4), transparent);
  background-repeat: repeat;
  background-size: 100px 100px;
  animation: particleFloat 25s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

@keyframes particleFloat {
  0% { transform: translate(0, 0) rotate(0deg); }
  100% { transform: translate(-100px, -100px) rotate(360deg); }
}

.hero-content {
  text-align: center;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
}

.hero-avatar {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
  
  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255,255,255,0.2);
    position: relative;
    z-index: 2;
  }
  
  .avatar-ring {
    position: absolute;
    inset: -10px;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    border-top-color: rgba(255,255,255,0.8);
    animation: spin 3s linear infinite;
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: rgba(255,255,255,0.9);
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: rgba(255,255,255,0.8);
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    line-height: 1;
  }
  
  .stat-label {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.7);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 0.5rem;
  }
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary, .btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  
  &.large {
    padding: 1.25rem 2.5rem;
    font-size: 1.1rem;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }
}

.btn-primary {
  background: linear-gradient(45deg, #ff6b6b, #ee5a52);
  color: white;
  
  &:hover {
    background: linear-gradient(45deg, #ff5252, #e53935);
  }
}

.btn-secondary {
  background: rgba(255,255,255,0.1);
  color: white;
  border: 2px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255,255,255,0.2);
    border-color: rgba(255,255,255,0.5);
  }
}

.btn-outline {
  background: transparent;
  color: #333;
  border: 2px solid #333;
  
  &:hover {
    background: #333;
    color: white;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255,255,255,0.7);
  
  .scroll-line {
    width: 2px;
    height: 30px;
    background: rgba(255,255,255,0.5);
  }
  
  .scroll-text {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

// Container
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

// Section Styles
.skills-section, .portfolio-section, .services-section, .testimonials-section, .contact-section {
  padding: 6rem 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
}

// Skills Section
.skills-section {
  background: #f8fafc;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border-top: 4px solid var(--skill-color);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
  
  .skill-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .skill-name {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  .skill-projects {
    color: #666;
    font-size: 0.9rem;
  }
}

// Portfolio Section
.portfolio-header {
  margin-bottom: 3rem;
}

.portfolio-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover, &.active {
    background: #4f46e5;
    color: white;
    border-color: #4f46e5;
  }
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.portfolio-item {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
  
  &.featured {
    border: 2px solid #ffd700;
    position: relative;
    
    &::before {
      content: '⭐ Featured';
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #ffd700;
      color: #333;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      z-index: 2;
    }
  }
}

.item-thumbnail {
  position: relative;
  height: 250px;
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

.item-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.7));
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  .portfolio-item:hover & {
    opacity: 1;
  }
}

.item-type-icon {
  font-size: 1.5rem;
  color: white;
}

.item-actions {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255,255,255,0.3);
    transform: scale(1.1);
  }
}

.item-content {
  padding: 1.5rem;
}

.item-category {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.item-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #333;
}

.item-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.item-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.item-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #666;
}

.item-featured {
  color: #ffd700;
  font-weight: 600;
}

.portfolio-cta {
  text-align: center;
}

// Services Section
.services-section {
  background: #f8fafc;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.service-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  
  li {
    padding: 0.5rem 0;
    color: #555;
    position: relative;
    padding-left: 1.5rem;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: 600;
    }
  }
}

// Testimonials Section
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
}

.testimonial-content {
  margin-bottom: 1.5rem;
}

.testimonial-stars {
  margin-bottom: 1rem;
  
  .star {
    color: #ffd700;
  }
}

.testimonial-text {
  font-style: italic;
  line-height: 1.6;
  color: #555;
  font-size: 1.1rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-weight: 600;
  color: #333;
}

.author-role {
  color: #666;
  font-size: 0.9rem;
}

// Contact Section
.contact-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.contact-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255,255,255,0.9);
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255,255,255,0.8);
  
  a {
    color: white;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}

.contact-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

// Modal
.portfolio-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  background: white;
  border-radius: 20px;
  max-width: 900px;
  max-height: 90vh;
  overflow: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(0,0,0,0.5);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 2;
  
  &:hover {
    background: rgba(0,0,0,0.7);
  }
}

.modal-media {
  height: 400px;
  
  img, video, iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
}

.modal-info {
  padding: 2rem;
}

.modal-category {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.modal-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
}

.modal-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.modal-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

// Responsive
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.4rem;
  }
  
  .hero-stats {
    gap: 2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  
  .services-grid, .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
