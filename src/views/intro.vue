<template>
  <div class="intro-container">
    <!-- Hero Section -->
    <section class="hero-section" ref="heroSection">
      <div class="hero-background">
        <div class="hero-grid"></div>
        <div class="floating-elements">
          <div class="floating-element" v-for="n in 6" :key="n" :style="{ '--delay': n * 0.5 + 's' }">
            {{ ['🎮', '🌍', '🗺️', '🚀', '📊', '⚡'][n-1] }}
          </div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="hero-profile" ref="heroProfile">
          <div class="profile-avatar" ref="avatar">
            <img :src="personalProfile.avatar" :alt="personalProfile.name" />
            <div class="avatar-rings">
              <div class="ring ring-1"></div>
              <div class="ring ring-2"></div>
              <div class="ring ring-3"></div>
            </div>
            <div class="availability-badge" ref="availabilityBadge">
              <span class="pulse-dot"></span>
              {{ personalProfile.availability }}
            </div>
          </div>
          
          <div class="profile-rating" ref="profileRating">
            <div class="stars">
              <span v-for="i in 5" :key="i" class="star">⭐</span>
            </div>
            <div class="rating-text">{{ personalProfile.rating }}/5.0 • {{ personalProfile.completedProjects }}+ projects</div>
          </div>
        </div>
        
        <div class="hero-text" ref="heroText">
          <h1 class="hero-title">{{ personalProfile.name }}</h1>
          <h2 class="hero-subtitle">{{ personalProfile.title }}</h2>
          <p class="hero-tagline">{{ personalProfile.tagline }}</p>
          <p class="hero-description">{{ personalProfile.description }}</p>
          
          <div class="hero-stats" ref="heroStats">
            <div v-for="stat in techStats.slice(0, 3)" :key="stat.label" class="stat-card">
              <div class="stat-icon">{{ stat.icon }}</div>
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
          
          <div class="hero-actions" ref="heroActions">
            <a :href="personalProfile.upworkProfile" target="_blank" class="btn-primary">
              <span>Hire Me on Upwork</span>
              <i class="icon">🚀</i>
            </a>
            <a :href="`mailto:${personalProfile.email}`" class="btn-secondary">
              <span>Get a Quote</span>
              <i class="icon">💬</i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator" ref="scrollIndicator">
        <div class="scroll-wheel"></div>
        <span>Scroll to explore</span>
      </div>
    </section>

    <!-- Skills Showcase -->
    <section class="skills-section" ref="skillsSection">
      <div class="container">
        <div class="section-header" ref="skillsHeader">
          <h2 class="section-title">Master of WEB3D Technologies</h2>
          <p class="section-subtitle">Specialized expertise across the complete 3D and GIS technology stack</p>
        </div>
        
        <div class="skills-grid">
          <div 
            v-for="(skill, key) in skillShowcase" 
            :key="key"
            class="skill-card"
            ref="skillCards"
            :style="{ '--skill-color': skill.color }"
            @mouseover="animateSkillCard"
          >
            <div class="skill-icon">{{ skill.icon }}</div>
            <div class="skill-content">
              <h3 class="skill-name">{{ skill.name }}</h3>
              <p class="skill-description">{{ skill.description }}</p>
              
              <div class="skill-stats">
                <div class="proficiency">
                  <span class="label">Proficiency</span>
                  <div class="progress-bar">
                    <div class="progress" :style="{ width: skill.proficiency + '%' }"></div>
                  </div>
                  <span class="value">{{ skill.proficiency }}%</span>
                </div>
                <div class="projects-count">{{ skill.projects }} Projects</div>
              </div>
              
              <div class="skill-features">
                <span v-for="feature in skill.features" :key="feature" class="feature-tag">
                  {{ feature }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Works -->
    <section class="works-section" ref="worksSection">
      <div class="container">
        <div class="section-header" ref="worksHeader">
          <h2 class="section-title">Featured Success Stories</h2>
          <p class="section-subtitle">Real projects that delivered exceptional value for clients</p>
        </div>
        
        <div class="works-gallery">
          <div 
            v-for="(work, index) in featuredWorks" 
            :key="work.id"
            class="work-card"
            ref="workCards"
            :class="{ 'featured': work.featured, [`work-${index}`]: true }"
            @click="openWorkModal(work)"
          >
            <div class="work-thumbnail">
              <img :src="work.thumbnail" :alt="work.title" loading="lazy" />
              <div class="work-overlay">
                <div class="work-type">
                  <span class="type-badge">{{ work.type }}</span>
                  <span class="category-badge" :style="{ backgroundColor: skillShowcase[work.category].color }">
                    {{ skillShowcase[work.category].name }}
                  </span>
                </div>
                <div class="work-actions">
                  <button v-if="work.demoUrl" class="action-btn" @click.stop="openDemo(work.demoUrl)">
                    <i class="icon">👁️</i>
                    View Demo
                  </button>
                  <button v-if="work.githubUrl" class="action-btn" @click.stop="openGithub(work.githubUrl)">
                    <i class="icon">💻</i>
                    Code
                  </button>
                </div>
              </div>
            </div>
            
            <div class="work-content">
              <h3 class="work-title">{{ work.title }}</h3>
              <p class="work-description">{{ work.description }}</p>
              <div class="work-tech">
                <span v-for="tech in work.technologies.slice(0, 3)" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
                <span v-if="work.technologies.length > 3" class="tech-more">
                  +{{ work.technologies.length - 3 }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services & Pricing -->
    <section class="services-section" ref="servicesSection">
      <div class="container">
        <div class="section-header" ref="servicesHeader">
          <h2 class="section-title">What I Can Build for You</h2>
          <p class="section-subtitle">Transparent pricing for professional 3D and GIS solutions</p>
        </div>
        
        <div class="services-grid">
          <div 
            v-for="service in serviceOfferings" 
            :key="service.title"
            class="service-card"
            ref="serviceCards"
            :style="{ '--service-color': service.color }"
          >
            <div class="service-icon">{{ service.icon }}</div>
            <div class="service-header">
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
            </div>
            
            <div class="service-pricing">
              <div class="price-range">{{ service.priceRange }}</div>
              <div class="timeline">⏱️ {{ service.timeline }}</div>
            </div>
            
            <div class="service-deliverables">
              <h4>What you get:</h4>
              <ul>
                <li v-for="item in service.deliverables" :key="item">
                  <span class="checkmark">✅</span>
                  {{ item }}
                </li>
              </ul>
            </div>
            
            <button class="service-cta" @click="contactForService(service.title)">
              Get Quote
              <i class="icon">💬</i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Testimonials -->
    <section class="testimonials-section" ref="testimonialsSection">
      <div class="container">
        <div class="section-header" ref="testimonialsHeader">
          <h2 class="section-title">Client Success Stories</h2>
          <p class="section-subtitle">Real feedback from satisfied clients on Upwork</p>
        </div>
        
        <div class="testimonials-grid">
          <div 
            v-for="testimonial in clientTestimonials" 
            :key="testimonial.name"
            class="testimonial-card"
            ref="testimonialCards"
          >
            <div class="testimonial-header">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="client-avatar" />
              <div class="client-info">
                <h4 class="client-name">{{ testimonial.name }}</h4>
                <p class="client-role">{{ testimonial.role }}</p>
                <p class="client-company">{{ testimonial.company }}</p>
              </div>
              <div class="rating">
                <span v-for="i in testimonial.rating" :key="i" class="star">⭐</span>
              </div>
            </div>
            
            <blockquote class="testimonial-content">
              "{{ testimonial.content }}"
            </blockquote>
            
            <div class="project-details">
              <span class="project-value">💰 {{ testimonial.projectValue }}</span>
              <span class="completion-time">⏱️ {{ testimonial.completionTime }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section" ref="ctaSection">
      <div class="container">
        <div class="cta-content" ref="ctaContent">
          <h2 class="cta-title">Ready to Transform Your Ideas into Reality?</h2>
          <p class="cta-description">
            Let's discuss your 3D project and create something extraordinary together. 
            I'm available for both short-term projects and long-term collaborations.
          </p>
          
          <div class="cta-stats">
            <div v-for="stat in techStats.slice(3)" :key="stat.label" class="cta-stat">
              <span class="stat-icon">{{ stat.icon }}</span>
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
          
          <div class="cta-actions">
            <a :href="personalProfile.upworkProfile" target="_blank" class="btn-primary large">
              <span>Start Your Project</span>
              <i class="icon">🚀</i>
            </a>
            <a :href="`mailto:${personalProfile.email}`" class="btn-secondary large">
              <span>Schedule Consultation</span>
              <i class="icon">📅</i>
            </a>
          </div>
          
          <div class="contact-info">
            <div class="contact-item">
              <i class="icon">📧</i>
              <span>{{ personalProfile.email }}</span>
            </div>
            <div class="contact-item">
              <i class="icon">⚡</i>
              <span>Response within {{ personalProfile.responseTime }}</span>
            </div>
            <div class="contact-item">
              <i class="icon">🌍</i>
              <span>{{ personalProfile.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Modal -->
    <div v-if="selectedWork" class="work-modal" @click="closeWorkModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeWorkModal">✕</button>
        
        <div class="modal-media">
          <img v-if="selectedWork.type === 'image'" :src="selectedWork.media || selectedWork.thumbnail" :alt="selectedWork.title" />
          <video v-else-if="selectedWork.type === 'video'" :src="selectedWork.media" controls autoplay muted loop></video>
          <iframe v-else-if="selectedWork.type === 'demo' && selectedWork.demoUrl" :src="selectedWork.demoUrl" frameborder="0"></iframe>
          <div v-else class="modal-placeholder">
            <img :src="selectedWork.thumbnail" :alt="selectedWork.title" />
          </div>
        </div>
        
        <div class="modal-info">
          <div class="modal-category" :style="{ color: skillShowcase[selectedWork.category].color }">
            {{ skillShowcase[selectedWork.category].name }}
          </div>
          <h2 class="modal-title">{{ selectedWork.title }}</h2>
          <p class="modal-description">{{ selectedWork.description }}</p>
          
          <div class="modal-technologies">
            <span v-for="tech in selectedWork.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
          
          <div class="modal-actions">
            <a v-if="selectedWork.demoUrl" :href="selectedWork.demoUrl" target="_blank" class="btn-primary">
              View Live Demo
            </a>
            <a v-if="selectedWork.githubUrl" :href="selectedWork.githubUrl" target="_blank" class="btn-secondary">
              View Source Code
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
import { 
  personalProfile, 
  skillShowcase, 
  featuredWorks, 
  serviceOfferings, 
  clientTestimonials, 
  techStats,
  type IntroItem 
} from '@/data/introData'

// Refs for animations
const heroSection = ref<HTMLElement>()
const heroProfile = ref<HTMLElement>()
const avatar = ref<HTMLElement>()
const availabilityBadge = ref<HTMLElement>()
const profileRating = ref<HTMLElement>()
const heroText = ref<HTMLElement>()
const heroStats = ref<HTMLElement>()
const heroActions = ref<HTMLElement>()
const scrollIndicator = ref<HTMLElement>()

const skillsSection = ref<HTMLElement>()
const skillsHeader = ref<HTMLElement>()
const skillCards = ref<HTMLElement[]>([])

const worksSection = ref<HTMLElement>()
const worksHeader = ref<HTMLElement>()
const workCards = ref<HTMLElement[]>([])

const servicesSection = ref<HTMLElement>()
const servicesHeader = ref<HTMLElement>()
const serviceCards = ref<HTMLElement[]>([])

const testimonialsSection = ref<HTMLElement>()
const testimonialsHeader = ref<HTMLElement>()
const testimonialCards = ref<HTMLElement[]>([])

const ctaSection = ref<HTMLElement>()
const ctaContent = ref<HTMLElement>()

// Reactive data
const selectedWork = ref<IntroItem | null>(null)

// Methods
const openWorkModal = (work: IntroItem) => {
  selectedWork.value = work
  document.body.style.overflow = 'hidden'
}

const closeWorkModal = () => {
  selectedWork.value = null
  document.body.style.overflow = 'auto'
}

const openDemo = (url: string) => {
  window.open(url, '_blank')
}

const openGithub = (url: string) => {
  window.open(url, '_blank')
}

const contactForService = (service: string) => {
  const subject = `Inquiry about ${service}`
  const body = `Hi,\n\nI'm interested in your ${service} service. Please provide more details about pricing and timeline.\n\nThanks!`
  window.open(`mailto:${personalProfile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
}

const animateSkillCard = (event: Event) => {
  const card = event.currentTarget as HTMLElement
  gsap.to(card, { 
    scale: 1.02, 
    duration: 0.3, 
    ease: "power2.out",
    onComplete: () => {
      gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" })
    }
  })
}

// Animation functions
const initHeroAnimations = () => {
  const tl = gsap.timeline({ delay: 0.5 })
  
  // Avatar entrance with rings
  tl.fromTo(avatar.value, 
    { scale: 0, rotation: -180, opacity: 0 },
    { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: "back.out(1.7)" }
  )
  .from(avatar.value?.querySelectorAll('.ring') || [], {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
  }, "-=0.8")
  
  // Profile rating
  .from(profileRating.value, {
    y: 30,
    opacity: 0,
    duration: 0.6
  }, "-=0.4")
  
  // Availability badge
  .from(availabilityBadge.value, {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)"
  }, "-=0.3")
  
  // Text content with stagger
  .from(heroText.value?.children || [], {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  }, "-=0.6")
  
  // Stats cards
  .from(heroStats.value?.children || [], {
    scale: 0,
    rotation: 180,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "back.out(1.7)"
  }, "-=0.4")
  
  // Action buttons
  .from(heroActions.value?.children || [], {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2
  }, "-=0.2")
  
  // Scroll indicator
  .from(scrollIndicator.value, {
    opacity: 0,
    y: 20,
    duration: 0.6
  }, "-=0.3")
  
  // Continuous animations
  gsap.to(avatar.value?.querySelectorAll('.ring'), {
    rotation: 360,
    duration: 10,
    repeat: -1,
    ease: "none",
    stagger: 0.5
  })
  
  gsap.to(scrollIndicator.value?.querySelector('.scroll-wheel'), {
    y: -10,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  })
}

const initScrollAnimations = () => {
  const sections = [
    { element: skillsSection.value, header: skillsHeader.value, items: skillCards.value },
    { element: worksSection.value, header: worksHeader.value, items: workCards.value },
    { element: servicesSection.value, header: servicesHeader.value, items: serviceCards.value },
    { element: testimonialsSection.value, header: testimonialsHeader.value, items: testimonialCards.value }
  ]
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = sections.find(s => s.element === entry.target)
        if (section && section.header && section.items) {
          // Reset initial state and animate
          gsap.set([section.header, ...section.items], { clearProps: "all" })
          
          // Header animation
          gsap.fromTo(section.header, 
            { y: 50, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.8, 
              ease: "power2.out",
              clearProps: "transform,opacity"
            }
          )
          
          // Items animation with stagger
          gsap.fromTo(section.items, 
            { y: 80, opacity: 0, scale: 0.8 },
            { 
              y: 0, 
              opacity: 1, 
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              delay: 0.3,
              clearProps: "transform,opacity"
            }
          )
          
          observer.unobserve(entry.target)
        }
        
        // CTA section special animation
        if (entry.target === ctaSection.value && ctaContent.value?.children) {
          gsap.set(ctaContent.value.children, { clearProps: "all" })
          gsap.fromTo(ctaContent.value.children,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out",
              clearProps: "transform,opacity"
            }
          )
          observer.unobserve(entry.target)
        }
      }
    })
  }, { threshold: 0.2 })
  
  sections.forEach(section => {
    if (section.element) observer.observe(section.element)
  })
  
  if (ctaSection.value) observer.observe(ctaSection.value)
}

onMounted(() => {
  initHeroAnimations()
  initScrollAnimations()
})

onUnmounted(() => {
  gsap.killTweensOf("*")
  document.body.style.overflow = 'auto'
})
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.intro-container {
  overflow-x: hidden;
  background: #ffffff;
  color: #1a1a1a;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

// Hero Section
.hero-section {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  opacity: 0.3;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(79, 70, 229, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79, 70, 229, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridMove 30s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(60px, 60px); }
}

.floating-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
  
  .floating-element {
    position: absolute;
    font-size: 2rem;
    opacity: 0.1;
    animation: float 20s linear infinite;
    animation-delay: var(--delay);
    
    @for $i from 1 through 6 {
      &:nth-child(#{$i}) {
        left: #{random(80) + 10}%;
        top: #{random(80) + 10}%;
      }
    }
  }
}

@keyframes float {
  0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
  10% { opacity: 0.1; }
  90% { opacity: 0.1; }
  100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
}

.hero-profile {
  text-align: center;
  
  .profile-avatar {
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
    
    img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      object-fit: cover;
      border: 6px solid rgba(79, 70, 229, 0.2);
      box-shadow: 0 10px 40px rgba(79, 70, 229, 0.15);
      position: relative;
      z-index: 2;
    }
    
    .avatar-rings {
      position: absolute;
      inset: -20px;
      
      .ring {
        position: absolute;
        inset: 0;
        border: 2px solid transparent;
        border-radius: 50%;
        
        &.ring-1 {
          border-top-color: rgba(79, 70, 229, 0.6);
          border-right-color: rgba(79, 70, 229, 0.3);
        }
        
        &.ring-2 {
          inset: -15px;
          border-top-color: rgba(16, 185, 129, 0.6);
          border-left-color: rgba(16, 185, 129, 0.3);
        }
        
        &.ring-3 {
          inset: -30px;
          border-top-color: rgba(245, 158, 11, 0.6);
          border-bottom-color: rgba(245, 158, 11, 0.3);
        }
      }
    }
    
    .availability-badge {
      position: absolute;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(45deg, #10b981, #059669);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      font-size: 0.9rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
      
      .pulse-dot {
        width: 8px;
        height: 8px;
        background: #fff;
        border-radius: 50%;
        animation: pulse 2s infinite;
      }
    }
  }
  
  .profile-rating {
    .stars {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    .rating-text {
      color: #64748b;
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
}

@keyframes pulse {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
  100% { opacity: 1; transform: scale(1); }
}

.hero-text {
  .hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    background: linear-gradient(45deg, #4f46e5, #06b6d4, #10b981);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
  }
  
  .hero-subtitle {
    font-size: 1.8rem;
    font-weight: 600;
    color: #06b6d4;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  .hero-tagline {
    font-size: 1.3rem;
    color: #fbbf24;
    margin-bottom: 2rem;
    font-weight: 500;
    line-height: 1.4;
  }
  
  .hero-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #475569;
    margin-bottom: 3rem;
  }
  
  .hero-stats {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    
    .stat-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      padding: 1.5rem;
      border-radius: 15px;
      text-align: center;
      border: 1px solid rgba(79, 70, 229, 0.1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      min-width: 120px;
      
      .stat-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }
      
      .stat-value {
        font-size: 1.8rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 0.25rem;
      }
      
      .stat-label {
        font-size: 0.9rem;
        color: #64748b;
        font-weight: 500;
      }
    }
  }
  
  .hero-actions {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    
    .btn-primary, .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1.25rem 2.5rem;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1.1rem;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
      border: none;
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
        transform: translateX(-100%);
        transition: transform 0.6s;
      }
      
      &:hover::before {
        transform: translateX(100%);
      }
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.3);
      }
    }
    
    .btn-primary {
      background: linear-gradient(45deg, #4f46e5, #7c3aed);
      color: white;
      box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3);
    }
    
    .btn-secondary {
      background: rgba(255, 255, 255, 0.9);
      color: #4f46e5;
      border: 2px solid rgba(79, 70, 229, 0.2);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
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
  gap: 1rem;
  color: #64748b;
  z-index: 2;
  
  .scroll-wheel {
    width: 30px;
    height: 50px;
    border: 2px solid rgba(100, 116, 139, 0.3);
    border-radius: 25px;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 8px;
      background: rgba(100, 116, 139, 0.6);
      border-radius: 2px;
    }
  }
  
  span {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
  }
}

// Container
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

// Section Styles
.skills-section, .works-section, .services-section, .testimonials-section, .cta-section {
  padding: 8rem 0;
  position: relative;
}

.skills-section {
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
}

.works-section {
  background: #ffffff;
}

.services-section {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.testimonials-section {
  background: #f9fafb;
}

.cta-section {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
  
  .section-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, #1e293b, #4f46e5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .section-subtitle {
    font-size: 1.3rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
  }
}

// Skills Section
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(79, 70, 229, 0.1);
  border-radius: 25px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--skill-color);
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.3);
    border-color: var(--skill-color);
  }
  
  .skill-icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
  
  .skill-name {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--skill-color);
  }
  
  .skill-description {
    color: #475569;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.5;
  }
  
  .skill-stats {
    margin-bottom: 2rem;
    
    .proficiency {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      
      .label {
        font-size: 0.9rem;
        color: #64748b;
        min-width: 80px;
      }
      
      .progress-bar {
        flex: 1;
        height: 8px;
        background: rgba(148, 163, 184, 0.2);
        border-radius: 4px;
        overflow: hidden;
        
        .progress {
          height: 100%;
          background: linear-gradient(90deg, var(--skill-color), rgba(79, 70, 229, 0.8));
          border-radius: 4px;
          transition: width 2s ease;
        }
      }
      
      .value {
        font-weight: 600;
        color: var(--skill-color);
        min-width: 40px;
      }
    }
    
    .projects-count {
      color: #64748b;
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
  
  .skill-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    
    .feature-tag {
      background: rgba(148, 163, 184, 0.1);
      color: #475569;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
      border: 1px solid rgba(148, 163, 184, 0.2);
    }
  }
}

// Works Section
.works-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
}

.work-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 25px;
  overflow: hidden;
  transition: all 0.4s ease;
  border: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 30px 60px rgba(0,0,0,0.2);
    border-color: rgba(79, 70, 229, 0.3);
  }
  
  .work-thumbnail {
    position: relative;
    height: 280px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    
    &:hover img {
      transform: scale(1.1);
    }
    
    .work-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.8));
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1.5rem;
      opacity: 0;
      transition: opacity 0.3s ease;
      
      .work-type {
        display: flex;
        gap: 0.5rem;
        align-self: flex-start;
        
        .type-badge, .category-badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        
        .type-badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .category-badge {
          color: white;
        }
      }
      
      .work-actions {
        display: flex;
        gap: 0.75rem;
        align-self: flex-end;
        
        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 25px;
          color: white;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          
          &:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.05);
          }
        }
      }
    }
    
    &:hover .work-overlay {
      opacity: 1;
    }
  }
  
  .work-content {
    padding: 2rem;
    
    .work-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #1e293b;
    }
    
    .work-description {
      color: #475569;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .work-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      
      .tech-tag {
        background: rgba(79, 70, 229, 0.2);
        color: #a5b4fc;
        padding: 0.35rem 0.75rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
      }
      
      .tech-more {
        color: #64748b;
        font-size: 0.85rem;
        font-weight: 500;
      }
    }
  }
}

// Services Section  
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.service-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 25px;
  padding: 3rem;
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--service-color);
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.3);
    border-color: var(--service-color);
  }
  
  .service-icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
  
  .service-header {
    margin-bottom: 2rem;
    
    .service-title {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--service-color);
    }
    
    .service-description {
      color: #475569;
      line-height: 1.6;
      font-size: 1.1rem;
    }
  }
  
  .service-pricing {
    background: rgba(148, 163, 184, 0.1);
    border-radius: 15px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    border: 1px solid rgba(148, 163, 184, 0.2);
    
    .price-range {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--service-color);
      margin-bottom: 0.5rem;
    }
    
    .timeline {
      color: #64748b;
      font-size: 1rem;
      font-weight: 500;
    }
  }
  
  .service-deliverables {
    text-align: left;
    margin-bottom: 2.5rem;
    
    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #1e293b;
    }
    
    ul {
      list-style: none;
      padding: 0;
      
      li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.5rem 0;
        color: #475569;
        font-size: 0.95rem;
        
        .checkmark {
          font-size: 1rem;
        }
      }
    }
  }
  
  .service-cta {
    width: 100%;
    padding: 1.25rem 2rem;
    background: linear-gradient(45deg, var(--service-color), rgba(255,255,255,0.1));
    border: none;
    border-radius: 50px;
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    }
  }
}

// Testimonials Section
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 25px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    border-color: rgba(79, 70, 229, 0.3);
  }
  
  .testimonial-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    
    .client-avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid rgba(148, 163, 184, 0.3);
    }
    
    .client-info {
      flex: 1;
      
      .client-name {
        font-size: 1.2rem;
        font-weight: 600;
        color: #1e293b;
        margin-bottom: 0.25rem;
      }
      
      .client-role, .client-company {
        color: #64748b;
        font-size: 0.95rem;
      }
    }
    
    .rating {
      font-size: 1.2rem;
    }
  }
  
  .testimonial-content {
    font-style: italic;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #475569;
    margin-bottom: 1.5rem;
    border: none;
  }
  
  .project-details {
    display: flex;
    justify-content: space-between;
    color: #64748b;
    font-size: 0.9rem;
    font-weight: 500;
    
    .project-value {
      color: #10b981;
    }
    
    .completion-time {
      color: #06b6d4;
    }
  }
}

// CTA Section
.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  
  .cta-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: white;
    line-height: 1.2;
  }
  
  .cta-description {
    font-size: 1.3rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 3rem;
  }
  
  .cta-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    
    .cta-stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .stat-icon {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }
      
      .stat-value {
        font-size: 2rem;
        font-weight: 700;
        color: white;
        margin-bottom: 0.25rem;
      }
      
      .stat-label {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
  }
  
  .cta-actions {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    
    .btn-primary, .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1.5rem 3rem;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1.2rem;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.3);
      }
    }
    
    .btn-primary {
      background: linear-gradient(45deg, #ffffff, #f0f0f0);
      color: #4f46e5;
      box-shadow: 0 10px 25px rgba(255,255,255,0.2);
    }
    
    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
    }
  }
  
  .contact-info {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: rgba(255, 255, 255, 0.9);
      font-size: 1rem;
      font-weight: 500;
      
      .icon {
        font-size: 1.2rem;
      }
    }
  }
}

// Work Modal
.work-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.modal-content {
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  border-radius: 25px;
  max-width: 1000px;
  max-height: 90vh;
  overflow: auto;
  position: relative;
  border: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 50px;
  height: 50px;
  border: none;
  background: rgba(148, 163, 184, 0.2);
  color: #1e293b;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 2;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(148, 163, 184, 0.3);
    transform: scale(1.1);
  }
}

.modal-media {
  height: 500px;
  border-radius: 25px 25px 0 0;
  overflow: hidden;
  
  img, video, iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.modal-info {
  padding: 3rem;
  
  .modal-category {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
  
  .modal-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #1e293b;
  }
  
  .modal-description {
    color: #475569;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
  
  .modal-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    
    .tech-tag {
      background: rgba(79, 70, 229, 0.2);
      color: #a5b4fc;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
      border: 1px solid rgba(79, 70, 229, 0.3);
    }
  }
  
  .modal-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    
    .btn-primary, .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      }
    }
    
    .btn-primary {
      background: linear-gradient(45deg, #4f46e5, #7c3aed);
      color: white;
    }
    
    .btn-secondary {
      background: rgba(148, 163, 184, 0.1);
      color: #4f46e5;
      border: 2px solid rgba(79, 70, 229, 0.3);
    }
  }
}

// Responsive Design
@media (max-width: 1200px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .hero-profile .profile-avatar img {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 768px) {
  .hero-text .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-text .hero-subtitle {
    font-size: 1.4rem;
  }
  
  .hero-text .hero-stats {
    justify-content: center;
    gap: 1rem;
  }
  
  .hero-text .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .section-header .section-title {
    font-size: 2.2rem;
  }
  
  .skills-grid,
  .works-gallery,
  .services-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-stats {
    gap: 2rem !important;
    
    .cta-stat {
      min-width: 120px;
    }
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-info {
    flex-direction: column;
    gap: 1rem !important;
  }
  
  .modal-content {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }
  
  .modal-info {
    padding: 2rem;
  }
}
</style>
