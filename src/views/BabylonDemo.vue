<template>
  <div class="babylon-demo">
    <!-- Background Layers -->
    <div class="bg-layer-1"></div>
    <div class="bg-layer-2"></div>
    <div class="bg-layer-3"></div>
    
    <!-- Header -->
    <div class="header-container">
      <div class="header">
        <div class="header-content">
          <div class="header-left">
            <div class="logo-icon">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <div class="logo-text">
              <h1>3D Model Studio</h1>
              <p>Interactive Customization</p>
            </div>
          </div>
          
          <!-- Desktop Quick Actions -->
          <div class="desktop-actions">
            <button class="action-btn" @click="resetCamera" title="重置视角">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </button>
            <button class="action-btn" :class="{ 'active': wireframeMode }" @click="toggleWireframe">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
            <button class="action-btn" :class="{ 'active': animationPlaying }" @click="toggleAnimation">
              <svg v-if="!animationPlaying" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <svg v-else width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button class="mobile-menu-btn" @click="toggleMobilePanel">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Layout -->
    <div class="main-layout">
      <!-- Canvas Area -->
      <div class="canvas-area">
        <div class="canvas-panel">
          <canvas 
            ref="babylonCanvas"
            class="canvas"
            @mousedown="handleCanvasInteraction"
            @touchstart="handleCanvasInteraction"
          ></canvas>
          
          <!-- Loading Overlay -->
          <div v-if="loading" class="loading-overlay">
            <div class="loading-content">
              <div class="loading-spinner"></div>
              <p class="loading-text">加载模型中...</p>
              <div class="loading-bar">
                <div class="loading-progress" :style="{ width: loadingProgress + '%' }"></div>
              </div>
              <p class="loading-percent">{{ Math.round(loadingProgress) }}%</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop Sidebar -->
      <div class="desktop-sidebar">
        <div class="sidebar-panel">
          <!-- Tabs -->
          <div class="tabs">
            <button 
              v-for="tab in tabs"
              :key="tab.id"
              class="tab-btn"
              :class="{ 'active': activeTab === tab.id }"
              @click="activeTab = tab.id"
            >
              {{ tab.name }}
            </button>
          </div>

          <!-- Tab Content -->
          <div class="tab-content">
            <!-- Components Tab -->
            <div v-if="activeTab === 'components'" class="tab-panel">
              <h3 class="section-title">模型组件</h3>
              <div class="components-list">
                <div 
                  v-for="component in modelComponents"
                  :key="component.id"
                  class="component-item"
                  :class="{ 'selected': selectedComponent?.id === component.id }"
                  @click="selectComponent(component)"
                >
                  <div class="component-header">
                    <h4 class="component-name">{{ component.name }}</h4>
                    <div class="status-dot" :class="{ 'active': component.visible }"></div>
                  </div>
                  
                  <!-- Variants -->
                  <div v-if="selectedComponent?.id === component.id" class="variants">
                    <div class="variants-grid">
                      <button 
                        v-for="variant in component.variants"
                        :key="variant.id"
                        class="variant-btn"
                        :class="{ 'active': variant.active }"
                        @click.stop="selectVariant(component.id, variant.id)"
                      >
                        {{ variant.name }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Materials Tab -->
            <div v-if="activeTab === 'materials'" class="tab-panel">
              <h3 class="section-title">材质库</h3>
              <div class="materials-grid">
                <div 
                  v-for="material in materials"
                  :key="material.id"
                  class="material-item"
                  :class="{ 'selected': selectedMaterial?.id === material.id }"
                  @click="selectMaterial(material)"
                >
                  <div 
                    class="material-preview"
                    :style="{ background: `linear-gradient(135deg, ${material.preview}, ${material.preview}dd)` }"
                  ></div>
                  <h4 class="material-name">{{ material.name }}</h4>
                </div>
              </div>
              
              <button 
                class="apply-btn"
                :disabled="!selectedComponent || !selectedMaterial"
                @click="applyMaterial"
              >
                应用材质
              </button>
            </div>

            <!-- Environment Tab -->
            <div v-if="activeTab === 'environment'" class="tab-panel">
              <h3 class="section-title">环境设置</h3>
              <div class="controls">
                <div class="control-group">
                  <label class="control-label">光照强度</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="2" 
                    step="0.1" 
                    v-model="lightingIntensity"
                    class="slider"
                    @input="updateLighting"
                  >
                  <div class="control-value">{{ lightingIntensity }}</div>
                </div>

                <div class="control-group">
                  <label class="control-label">环境场景</label>
                  <select 
                    v-model="selectedEnvironment"
                    @change="changeEnvironment"
                    class="select"
                  >
                    <option v-for="env in environments" :key="env.id" :value="env.id">
                      {{ env.name }}
                    </option>
                  </select>
                </div>

                <div class="control-group">
                  <label class="control-label">相机速度</label>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="5" 
                    step="0.5" 
                    v-model="cameraSpeed"
                    class="slider"
                    @input="updateCameraSpeed"
                  >
                  <div class="control-value">{{ cameraSpeed }}x</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Bottom Sheet -->
    <div class="mobile-panel" :class="{ 'open': mobilePanelOpen }">
      <div class="mobile-sheet">
        <div class="mobile-header">
          <div class="mobile-handle"></div>
          <h3 class="mobile-title">定制您的模型</h3>
        </div>
        
        <!-- Mobile Tabs -->
        <div class="mobile-tabs">
          <button 
            v-for="tab in tabs"
            :key="tab.id"
            class="mobile-tab"
            :class="{ 'active': activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            {{ tab.name }}
          </button>
        </div>
        
        <!-- Mobile Content -->
        <div class="mobile-content">
          <!-- Components Tab -->
          <div v-if="activeTab === 'components'" class="mobile-tab-panel">
            <div class="mobile-components">
              <div 
                v-for="component in modelComponents.slice(0, 4)"
                :key="component.id"
                class="mobile-component"
                :class="{ 'selected': selectedComponent?.id === component.id }"
                @click="selectComponent(component)"
              >
                <h4 class="mobile-component-name">{{ component.name }}</h4>
                <div class="status-dot" :class="{ 'active': component.visible }"></div>
              </div>
            </div>
          </div>

          <!-- Materials Tab -->
          <div v-if="activeTab === 'materials'" class="mobile-tab-panel">
            <div class="mobile-materials">
              <div 
                v-for="material in materials.slice(0, 6)"
                :key="material.id"
                class="mobile-material"
                :class="{ 'selected': selectedMaterial?.id === material.id }"
                @click="selectMaterial(material)"
              >
                <div 
                  class="mobile-material-preview"
                  :style="{ background: `linear-gradient(135deg, ${material.preview}, ${material.preview}dd)` }"
                ></div>
                <h4 class="mobile-material-name">{{ material.name }}</h4>
              </div>
            </div>
            
            <button 
              class="mobile-apply-btn"
              :disabled="!selectedComponent || !selectedMaterial"
              @click="applyMaterial"
            >
              应用材质
            </button>
          </div>

          <!-- Environment Tab -->
          <div v-if="activeTab === 'environment'" class="mobile-tab-panel">
            <div class="mobile-controls">
              <div class="mobile-control-row">
                <div class="mobile-control">
                  <label>光照</label>
                  <input type="range" min="0" max="2" step="0.1" v-model="lightingIntensity" class="mobile-slider" @input="updateLighting">
                </div>
                <div class="mobile-control">
                  <label>速度</label>
                  <input type="range" min="0.5" max="5" step="0.5" v-model="cameraSpeed" class="mobile-slider" @input="updateCameraSpeed">
                </div>
              </div>
              
              <select v-model="selectedEnvironment" @change="changeEnvironment" class="mobile-select">
                <option v-for="env in environments" :key="env.id" :value="env.id">{{ env.name }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Backdrop -->
      <div v-if="mobilePanelOpen" class="mobile-backdrop" @click="closeMobilePanel"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineOptions({
  name: 'BabylonDemo',
})

// Refs
const babylonCanvas = ref<HTMLCanvasElement | null>(null)

// State
const loading = ref(true)
const loadingProgress = ref(0)
const wireframeMode = ref(false)
const animationPlaying = ref(false)
const lightingIntensity = ref(1.0)
const cameraSpeed = ref(2.0)
const selectedEnvironment = ref('studio')

// Component and Material Management
const selectedComponent = ref<any>(null)
const selectedMaterial = ref<any>(null)

// Mobile Panel State
const mobilePanelOpen = ref(false)

// Tab Management
const activeTab = ref('components')
const tabs = ref([
  { id: 'components', name: '组件' },
  { id: 'materials', name: '材质' },
  { id: 'environment', name: '环境' }
])

// Mock Data
const modelComponents = ref([
  {
    id: 'body',
    name: '车身',
    description: '主体结构',
    visible: true,
    variants: [
      { id: 'sedan', name: '轿车', active: true },
      { id: 'suv', name: 'SUV', active: false },
      { id: 'hatchback', name: '掀背', active: false },
      { id: 'coupe', name: '跑车', active: false }
    ]
  },
  {
    id: 'wheels',
    name: '轮毂',
    description: '车轮组件',
    visible: true,
    variants: [
      { id: 'sport', name: '运动', active: true },
      { id: 'classic', name: '经典', active: false },
      { id: 'chrome', name: '镀铬', active: false },
      { id: 'carbon', name: '碳纤维', active: false }
    ]
  },
  {
    id: 'interior',
    name: '内饰',
    description: '内部装饰',
    visible: true,
    variants: [
      { id: 'leather', name: '皮质', active: true },
      { id: 'fabric', name: '布料', active: false },
      { id: 'carbon', name: '碳纤维', active: false },
      { id: 'wood', name: '木纹', active: false }
    ]
  },
  {
    id: 'lights',
    name: '车灯',
    description: '照明系统',
    visible: true,
    variants: [
      { id: 'halogen', name: '卤素', active: true },
      { id: 'led', name: 'LED', active: false },
      { id: 'xenon', name: '氙气', active: false },
      { id: 'laser', name: '激光', active: false }
    ]
  }
])

const materials = ref([
  {
    id: 'red_metallic',
    name: '金属红',
    type: 'PBR材质',
    preview: '#dc2626'
  },
  {
    id: 'blue_pearl',
    name: '珍珠蓝',
    type: 'PBR材质',
    preview: '#2563eb'
  },
  {
    id: 'white_matte',
    name: '哑光白',
    type: '哑光材质',
    preview: '#f3f4f6'
  },
  {
    id: 'black_gloss',
    name: '亮光黑',
    type: '高光材质',
    preview: '#111827'
  },
  {
    id: 'silver_chrome',
    name: '镀铬银',
    type: '金属材质',
    preview: '#9ca3af'
  },
  {
    id: 'carbon_fiber',
    name: '碳纤维',
    type: '复合材质',
    preview: '#374151'
  }
])

const environments = ref([
  { id: 'studio', name: '工作室' },
  { id: 'outdoor', name: '户外' },
  { id: 'garage', name: '车库' },
  { id: 'showroom', name: '展厅' }
])

// Methods
const handleCanvasInteraction = (event: Event) => {
  console.log('Canvas interaction:', event.type)
}

const resetCamera = () => {
  console.log('重置相机视角')
}

const toggleWireframe = () => {
  wireframeMode.value = !wireframeMode.value
  console.log('切换线框模式:', wireframeMode.value)
}

const toggleAnimation = () => {
  animationPlaying.value = !animationPlaying.value
  console.log('切换动画播放:', animationPlaying.value)
}

const selectComponent = (component: any) => {
  selectedComponent.value = component
  console.log('选择组件:', component.name)
}

const selectVariant = (componentId: string, variantId: string) => {
  const component = modelComponents.value.find(c => c.id === componentId)
  if (component) {
    component.variants.forEach(v => v.active = v.id === variantId)
    console.log('选择变体:', componentId, variantId)
  }
}

const selectMaterial = (material: any) => {
  selectedMaterial.value = material
  console.log('选择材质:', material.name)
}

const applyMaterial = () => {
  if (selectedComponent.value && selectedMaterial.value) {
    console.log('应用材质:', selectedMaterial.value.name, '到组件:', selectedComponent.value.name)
  }
}

const updateLighting = () => {
  console.log('更新光照强度:', lightingIntensity.value)
}

const changeEnvironment = () => {
  console.log('更换环境:', selectedEnvironment.value)
}

const updateCameraSpeed = () => {
  console.log('更新相机速度:', cameraSpeed.value)
}

// Mobile Panel Methods
const toggleMobilePanel = () => {
  mobilePanelOpen.value = !mobilePanelOpen.value
}

const closeMobilePanel = () => {
  mobilePanelOpen.value = false
}

// Simulated loading
const simulateLoading = () => {
  const interval = setInterval(() => {
    loadingProgress.value += Math.random() * 15
    if (loadingProgress.value >= 100) {
      loadingProgress.value = 100
      setTimeout(() => {
        loading.value = false
      }, 500)
      clearInterval(interval)
    }
  }, 200)
}

// Lifecycle
onMounted(() => {
  console.log('Babylon.js Demo页面已挂载')
  simulateLoading()
})

onUnmounted(() => {
  console.log('Babylon.js Demo页面已卸载')
})
</script>

<style lang="scss" scoped>
// Variables
$glass-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
$glass-border: rgba(255, 255, 255, 0.1);
$glass-hover-bg: rgba(255, 255, 255, 0.1);
$glass-hover-border: rgba(255, 255, 255, 0.2);
$active-gradient: linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3));
$active-border: rgba(34, 211, 238, 0.5);
$text-primary: rgba(255, 255, 255, 1);
$text-secondary: rgba(255, 255, 255, 0.8);
$text-muted: rgba(255, 255, 255, 0.7);
$text-dim: rgba(255, 255, 255, 0.5);

// Mixins
@mixin glass-effect($blur: 24px) {
  background: $glass-bg;
  backdrop-filter: blur($blur);
  -webkit-backdrop-filter: blur($blur);
  border: 1px solid $glass-border;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

@mixin button-base {
  padding: 8px;
  border-radius: 8px;
  border: 1px solid $glass-hover-border;
  background: rgba(255, 255, 255, 0.1);
  color: $text-secondary;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: $glass-hover-bg;
    color: $text-primary;
    transform: scale(1.05);
  }
  
  &.active {
    background: $active-gradient;
    border-color: $active-border;
    color: $text-primary;
  }
}

@mixin card-base {
  padding: 12px;
  border-radius: 12px;
  @include glass-effect(8px);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: $glass-hover-bg;
    border-color: $glass-hover-border;
  }
  
  &.selected {
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2));
    border-color: $active-border;
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
  }
}

// Main Container
.babylon-demo {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
}

// Background Layers
.bg-layer-1 {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
}

.bg-layer-2 {
  position: fixed;
  inset: 0;
  background: radial-gradient(ellipse at top, rgba(126, 34, 206, 0.2) 0%, rgba(67, 56, 202, 0.1) 50%, transparent 100%);
  opacity: 0.2;
}

.bg-layer-3 {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
}

// Header
.header-container {
  position: relative;
  z-index: 10;
}

.header {
  @include glass-effect(24px);
  border-bottom: 1px solid $glass-border;
  border-left: none;
  border-right: none;
  border-top: none;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: linear-gradient(135deg, #22d3ee, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.logo-text {
  h1 {
    font-size: 18px;
    font-weight: bold;
    color: $text-primary;
    margin: 0;
    
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  
  p {
    font-size: 12px;
    color: $text-muted;
    margin: 0;
    display: none;
    
    @media (min-width: 640px) {
      display: block;
    }
  }
}

.desktop-actions {
  display: none;
  align-items: center;
  gap: 8px;
  
  @media (min-width: 768px) {
    display: flex;
  }
}

.action-btn {
  @include button-base;
}

.mobile-menu-btn {
  @include button-base;
  display: flex;
  
  @media (min-width: 768px) {
    display: none;
  }
}

// Main Layout
.main-layout {
  position: relative;
  z-index: 10;
  display: flex;
  height: 100vh;
  padding-top: 64px;
}

// Canvas Area
.canvas-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-right: 0;
  
  @media (min-width: 768px) {
    padding-right: 16px;
  }
}

.canvas-panel {
  @include glass-effect();
  flex: 1;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.canvas {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
}

// Loading
.loading-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(88, 28, 135, 0.8), rgba(15, 23, 42, 0.8));
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.loading-content {
  text-align: center;
  color: white;
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top-color: #22d3ee;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}

.loading-text {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 12px;
}

.loading-bar {
  width: 192px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin: 0 auto;
}

.loading-progress {
  height: 100%;
  background: linear-gradient(90deg, #22d3ee, #8b5cf6);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.loading-percent {
  font-size: 14px;
  opacity: 0.75;
  margin: 8px 0 0;
}

// Desktop Sidebar
.desktop-sidebar {
  width: 320px;
  padding: 16px;
  padding-left: 0;
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
}

.sidebar-panel {
  @include glass-effect();
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
}

// Tabs
.tabs {
  display: flex;
  padding: 4px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin: 16px;
  margin-bottom: 0;
}

.tab-btn {
  flex: 1;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  background: transparent;
  color: $text-secondary;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &.active {
    background: rgba(255, 255, 255, 0.1);
    color: $text-primary;
  }
  
  &:hover:not(.active) {
    color: $text-secondary;
    opacity: 0.8;
  }
}

// Tab Content
.tab-content {
  flex: 1;
  padding: 16px;
  overflow: hidden;
}

.tab-panel {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: $text-secondary;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 12px;
}

// Components
.components-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.component-item {
  @include card-base;
}

.component-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.component-name {
  font-weight: 500;
  color: $text-primary;
  font-size: 14px;
  margin: 0;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  
  &.active {
    background: #22c55e;
    box-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
  }
  
  &:not(.active) {
    background: rgba(107, 114, 128, 0.5);
  }
}

.variants {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid $glass-border;
}

.variants-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
}

.variant-btn {
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid $glass-hover-border;
  background: rgba(255, 255, 255, 0.05);
  color: $text-muted;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  
  &:hover {
    background: $glass-hover-bg;
    color: $text-primary;
  }
  
  &.active {
    background: $active-gradient;
    border-color: $active-border;
    color: $text-primary;
  }
}

// Materials
.materials-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.material-item {
  @include card-base;
  
  &.selected {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
    border-color: rgba(168, 85, 247, 0.3);
    box-shadow: 0 8px 24px rgba(168, 85, 247, 0.2);
  }
}

.material-preview {
  width: 100%;
  height: 32px;
  border-radius: 8px;
  margin-bottom: 8px;
  border: 1px solid $glass-hover-border;
}

.material-name {
  font-weight: 500;
  color: $text-primary;
  font-size: 12px;
  margin: 0;
}

.apply-btn {
  width: 100%;
  padding: 12px 24px;
  border-radius: 12px;
  background: linear-gradient(135deg, #06b6d4, #8b5cf6);
  color: white;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #0891b2, #7c3aed);
    transform: scale(1.05);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
}

// Controls
.controls {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.control-label {
  font-size: 14px;
  color: $text-muted;
  margin: 0;
}

.control-value {
  font-size: 12px;
  color: $text-dim;
  margin-top: 4px;
}

.slider {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid $glass-border;
  appearance: none;
  cursor: pointer;
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: linear-gradient(135deg, #06b6d4, #8b5cf6);
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  }
  
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: linear-gradient(135deg, #06b6d4, #8b5cf6);
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  }
}

.select {
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid $glass-hover-border;
  color: white;
  cursor: pointer;
  appearance: none;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 8px center;
  background-repeat: no-repeat;
  background-size: 20px;
  
  &:focus {
    outline: none;
    border-color: $active-border;
  }
  
  option {
    background: #1e293b;
    color: white;
  }
}

// Mobile Panel
.mobile-panel {
  position: fixed;
  inset: 0;
  z-index: 40;
  pointer-events: none;
  
  @media (min-width: 768px) {
    display: none;
  }
  
  &.open {
    pointer-events: auto;
  }
}

.mobile-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60vh;
  @include glass-effect();
  border-radius: 16px 16px 0 0;
  transform: translateY(100%);
  transition: transform 0.3s ease-out;
  
  .mobile-panel.open & {
    transform: translateY(0);
  }
}

.mobile-header {
  padding: 16px;
  border-bottom: 1px solid $glass-border;
  text-align: center;
}

.mobile-handle {
  width: 48px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  margin: 0 auto 12px;
}

.mobile-title {
  font-size: 18px;
  font-weight: bold;
  color: $text-primary;
  margin: 0;
}

.mobile-tabs {
  display: flex;
  background: rgba(255, 255, 255, 0.05);
  margin: 16px;
  border-radius: 8px;
  padding: 4px;
}

.mobile-tab {
  flex: 1;
  padding: 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  background: transparent;
  color: $text-secondary;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &.active {
    background: rgba(255, 255, 255, 0.1);
    color: $text-primary;
  }
}

.mobile-content {
  padding: 16px;
  height: calc(60vh - 120px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.mobile-tab-panel {
  flex: 1;
  overflow: hidden;
}

// Mobile Components
.mobile-components {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mobile-component {
  @include card-base;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-component-name {
  font-weight: 500;
  color: $text-primary;
  font-size: 14px;
  margin: 0;
}

// Mobile Materials
.mobile-materials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 16px;
}

.mobile-material {
  @include card-base;
  padding: 8px;
  
  &.selected {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
    border-color: rgba(168, 85, 247, 0.3);
    box-shadow: 0 8px 24px rgba(168, 85, 247, 0.2);
  }
}

.mobile-material-preview {
  width: 100%;
  height: 32px;
  border-radius: 8px;
  margin-bottom: 4px;
}

.mobile-material-name {
  font-weight: 500;
  color: $text-primary;
  font-size: 12px;
  margin: 0;
}

.mobile-apply-btn {
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  background: linear-gradient(135deg, #06b6d4, #8b5cf6);
  color: white;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #0891b2, #7c3aed);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

// Mobile Controls
.mobile-controls {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mobile-control-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.mobile-control {
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    font-size: 12px;
    color: $text-muted;
  }
}

.mobile-slider {
  @extend .slider;
}

.mobile-select {
  @extend .select;
}

.mobile-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 30;
}

// Animations
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

// Remove scrollbars
* {
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

