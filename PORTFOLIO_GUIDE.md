# 🎨 WEB3D作品集页面使用指南

## 📋 概览
这是一个专为WEB3D开发者设计的现代化作品集页面，特别适合在Upwork等平台展示专业技能和项目经验。

## 🎯 主要特性

### ✨ 设计亮点
- **现代化设计**：渐变背景、玻璃态效果、圆角卡片
- **响应式布局**：完美适配桌面、平板、手机
- **炫酷动画**：GSAP驱动的流畅动画效果
- **专业配色**：科技感十足的配色方案

### 🔧 技术栈展示
- **Three.js** - 3D图形和游戏开发
- **Babylon.js** - 企业级3D引擎
- **OpenLayers** - 地理信息系统
- **Cesium** - 3D地球和地理可视化
- **QGIS** - 地理数据分析

### 📱 内容模块
1. **Hero区域** - 个人介绍和核心数据
2. **技能展示** - 技术栈和项目统计
3. **作品集** - 项目展示和筛选
4. **服务介绍** - 提供的服务类型
5. **客户评价** - 社会证明
6. **联系方式** - CTA和联系信息

## 🛠️ 自定义指南

### 1. 个人信息修改
编辑 `src/data/portfolioData.ts` 中的 `personalInfo` 对象：

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",                    // 姓名
  title: "Senior WEB3D Developer",      // 职位
  subtitle: "Specialized in 3D...",     // 副标题
  bio: "Experienced WEB3D developer...", // 个人简介
  avatar: "your-avatar-url",            // 头像URL
  location: "Remote / Global",          // 工作地点
  experience: "5+ Years",               // 工作经验
  email: "your.email@example.com",      // 邮箱
  upworkProfile: "https://upwork.com/...", // Upwork链接
  skills: [...],                        // 技能列表
}
```

### 2. 项目作品添加
在 `portfolioItems` 数组中添加新项目：

```typescript
{
  id: "unique-project-id",
  title: "Project Title",
  description: "Project description...",
  technologies: ["Three.js", "React", "Node.js"],
  category: "threejs", // threejs | babylonjs | openlayers | cesium | qgis
  type: "demo", // image | video | demo | interactive
  thumbnail: "https://placeholder-url.com/400x300",
  media: "https://video-or-large-image-url.com", // 可选
  demoUrl: "https://demo-link.com", // 可选
  githubUrl: "https://github.com/...", // 可选
  featured: true, // 是否为精选项目
  year: 2024
}
```

### 3. 图片和媒体资源

#### 占位图片服务
项目使用 `via.placeholder.com` 作为占位图片：
- 缩略图：`400x300` 尺寸
- 大图/视频：`800x600` 或 `800x450` 尺寸
- 头像：`300x300` 或 `80x80` 尺寸

#### 替换为真实资源
1. 将图片上传到图床服务（如：Cloudinary, AWS S3, GitHub）
2. 替换 `portfolioData.ts` 中的URL
3. 确保图片比例符合设计要求

### 4. 媒体类型处理

#### 图片项目 (`type: "image"`)
```typescript
{
  type: "image",
  thumbnail: "缩略图URL",
  media: "大图URL", // 点击后显示的大图
}
```

#### 视频项目 (`type: "video"`)
```typescript
{
  type: "video", 
  thumbnail: "视频封面URL",
  media: "视频文件URL", // 支持 MP4, WebM
}
```

#### 演示项目 (`type: "demo"`)
```typescript
{
  type: "demo",
  thumbnail: "预览图URL", 
  demoUrl: "在线演示URL", // 可在iframe中加载
}
```

#### 交互项目 (`type: "interactive"`)
```typescript
{
  type: "interactive",
  thumbnail: "预览图URL",
  demoUrl: "交互演示URL",
}
```

### 5. 客户评价定制
编辑 `testimonials` 数组：

```typescript
{
  name: "Client Name",
  company: "Company Name", 
  role: "Position",
  content: "Testimonial content...",
  rating: 5, // 1-5星评级
  avatar: "client-avatar-url"
}
```

### 6. 服务项目调整
修改 `services` 数组来反映你的服务范围：

```typescript
{
  title: "Service Title",
  description: "Service description",
  icon: "🎯", // Emoji图标
  features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
}
```

## 🎨 样式自定义

### 主题色彩
在 `Portfolio.vue` 的样式中修改CSS变量：

```scss
// Hero区域渐变
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

// 按钮主色
.btn-primary {
  background: linear-gradient(45deg, #ff6b6b, #ee5a52);
}

// 技能卡片颜色在 skillCategories 中定义
```

### 动画调整
修改 `initAnimations()` 函数中的GSAP参数：

```typescript
// 调整动画时长
duration: 0.8 // 秒数

// 调整延迟
delay: 0.2

// 调整错位动画
stagger: 0.1 // 每个元素间隔

// 调整缓动函数
ease: "back.out(1.7)"
```

## 📱 响应式断点

```scss
// 手机端
@media (max-width: 768px) {
  // 移动端样式
}

// 平板端  
@media (max-width: 1024px) {
  // 平板样式
}
```

## 🚀 部署建议

### 图片优化
1. 使用WebP格式减少文件大小
2. 实现懒加载提升性能
3. 使用CDN加速图片加载

### 性能优化
1. 压缩图片和视频文件
2. 使用适当的图片尺寸
3. 考虑添加loading状态

### SEO优化
1. 添加合适的meta标签
2. 使用语义化HTML结构
3. 优化图片alt属性

## 🔧 故障排除

### 常见问题

#### GSAP动画不工作
- 确保GSAP正确安装：`npm install gsap`
- 检查元素ref是否正确绑定
- 确认DOM元素已挂载后再执行动画

#### 图片不显示
- 检查URL是否可访问
- 确认图片服务支持跨域请求
- 验证图片URL格式正确

#### 响应式布局问题
- 检查CSS Grid和Flexbox属性
- 确认断点媒体查询正确
- 测试不同设备尺寸

## 📞 技术支持

如需进一步自定义或遇到技术问题，请参考：
1. Vue.js 官方文档
2. GSAP 动画文档  
3. Tailwind CSS 样式指南

---

**祝你在Upwork接单成功！** 🎉
