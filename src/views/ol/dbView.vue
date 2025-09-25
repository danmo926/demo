<template>
  <div class="doubleView-main">
    <div class="ct" id="map"></div>
    <div class="ct" id="cesium"></div>
    <div style="position: absolute; bottom: 0; right: 0">version:0.0.3</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import Map from 'ol/Map'

import View from 'ol/View'

import TileLayer from 'ol/layer/Tile'
import Heatmap from 'ol/layer/Heatmap'

import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ'
import VectorSource from 'ol/source/Vector'

import OLCesium from 'olcs'

import { fromLonLat } from 'ol/proj'
import KML from 'ol/format/KML'

import * as Cesium from 'cesium'

import 'cesium/Build/Cesium/Widgets/widgets.css'
import {
  Zoom,
  FullScreen,
  ScaleLine,
  MousePosition,
  Attribution,
  OverviewMap,
  ZoomSlider,
  Rotate,
  ZoomToExtent,
  Control,
} from 'ol/control'
import LayerSwitcher from 'ol-layerswitcher'
import 'ol-layerswitcher/dist/ol-layerswitcher.css'
import { WindLayer } from 'ol-wind'

window.Cesium = Cesium

window.CESIUM_BASE_URL = '/Cesium/'

onMounted(() => {
  // 在DOM渲染完成后初始化地图

  // 创建多个图层
  const osmLayer = new TileLayer({
    title: 'OpenStreetMap',
    type: 'base',
    visible: true,
    source: new OSM(),
  })

  const satelliteLayer = new TileLayer({
    title: 'Satellite',
    type: 'base',
    visible: false,
    source: new XYZ({
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attributions:
        'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    }),
  })

  const terrainLayer = new TileLayer({
    title: 'Terrain',
    type: 'base',
    visible: false,
    source: new XYZ({
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}',
      attributions: 'Tiles © Esri — Source: USGS, Esri, TANA, DeLorme, and NPS',
    }),
  })

  // 创建鼠标位置控件 - 使用默认样式
  const mousePositionControl = new MousePosition({
    coordinateFormat: function (coordinate) {
      return `经度: ${coordinate[0].toFixed(6)}, 纬度: ${coordinate[1].toFixed(6)}`
    },
    projection: 'EPSG:4326',
    undefinedHTML: '&nbsp;',
  })

  // 创建比例尺控件 - 使用默认样式
  const scaleLineControl = new ScaleLine({
    units: 'metric',
  })

  // 创建全屏控件 - 使用默认样式
  const fullScreenControl = new FullScreen({
    className: 'fullScreenCustom',
  })

  // 创建缩放滑块控件 - 使用默认样式
  const zoomSliderControl = new ZoomSlider()

  // 创建旋转控件 - 使用默认样式
  const rotateControl = new Rotate()

  // 创建缩放到范围控件 - 使用默认样式
  const zoomToExtentControl = new ZoomToExtent({
    extent: fromLonLat([73.66, 18.197]).concat(fromLonLat([134.77, 53.56])), // 中国范围
  })

  // 创建概览图控件 - 使用默认样式
  const overviewMapControl = new OverviewMap({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    collapseLabel: '«',
    label: '»',
    collapsed: false, // 默认收起
  })

  // 创建风场图层
  const windLayer = new WindLayer(null, {
    windOptions: {
      velocityScale: 1 / 200, // 速度缩放
      paths: 10000, // 路径数量
      colorScale: ['#226b68', '#509296', '#6ca8af', '#a4c9cc', '#3d8e86', '#5da39d', '#88bfb8'], // 颜色映射
      lineWidth: 2, // 线条宽度
      globalAlpha: 0.5, // 透明度
    },
    title: 'Wind',
    type: 'overlay',
    visible: false, // 默认不显示
  })

  // 加载风场数据
  import('../../assets/wind.json').then((res) => {
    windLayer.setData(res.default)
  })

  // 创建地震热力图层 - 参考提供的代码
  const earthquakeHeatmapLayer = new Heatmap({
    source: new VectorSource({
      url: new URL('../../assets/earthquakes.kml',import.meta.url).href,
      format: new KML({
        extractStyles: false,
      }),
    }),
    blur: 15, // 初始模糊半径
    radius: 5, // 初始热点半径
    weight: function (feature) {
      // 从KML的name字段提取地震震级
      const name = feature.get('name');
      if (name && name.length > 2) {
        const magnitude = parseFloat(name.substr(2));
        return Math.max(0, magnitude - 5); // 震级减去5作为权重，最小为0
      }
      return 0.1; // 默认权重
    },
    gradient: [
      '#000040', // 深蓝黑 - 低震级
      '#000080', // 深蓝
      '#0000CC', // 蓝色
      '#0044DD', // 中蓝
      '#0088FF', // 浅蓝
      '#44CCFF', // 青蓝
      '#88FF88', // 绿色
      '#CCDD44', // 黄绿
      '#FFCC00', // 金黄
      '#FF8800', // 橙色 - 中等震级
      '#FF4400', // 深橙
      '#CC0000', // 深红 - 高震级
    ],
    opacity: 0.8, // 透明度
    title: 'EarthQuake',
    type: 'overlay',
    visible: false, // 默认不显示
  })

  const map = new Map({
    target: 'map', // HTML 中的容器 ID

    layers: [osmLayer, satelliteLayer, terrainLayer, windLayer, earthquakeHeatmapLayer],

    view: new View({
      center: fromLonLat([116.4074, 39.9042]), // 设置地图中心坐标
      zoom: 5, // 设置初始缩放级别
      maxZoom: 18,
      minZoom: 2,
    }),

    controls: [
      new Zoom(), // 使用默认样式
      fullScreenControl,
      scaleLineControl,
      mousePositionControl,
      zoomSliderControl,
      rotateControl,
      zoomToExtentControl,
      overviewMapControl,
      new Attribution({
        collapsible: true,
      }),
    ],
  })

  // 添加专业的图层切换器
  const layerSwitcher = new LayerSwitcher({
    tipLabel: '图层', // 按钮提示文字
    groupSelectStyle: 'children', // 'children' | 'group' | 'none'
    activationMode: 'click', // 'click' | 'hover'
    startActive: false, // 是否默认展开
    reverse: true, // 是否反转图层顺序
    collapseTipLabel: '关闭图层面板', // 收起按钮提示文字
  })
  map.addControl(layerSwitcher)

  const ol3d = new OLCesium({ map: map, target: 'cesium' })

  ol3d.setEnabled(true)

  const scene = ol3d.getCesiumScene()

  scene.shadowMap.enabled = true

  scene.globe.enableLighting = true

  // setTimeout(() => {

  // ol3d.setEnabled(false);

  // }, 10000);
})
</script>

<style lang="css" scoped>
.doubleView-main {
  display: flex;
  flex-wrap: wrap;
  .ct {
    position: relative;
    width: 50%;
    height: 100vh;
  }
  ::v-deep(.fullScreenCustom) {
    left: 8px;
    top: 280px;
  }

  /* LayerSwitcher panel中的layer样式修复 */
  ::v-deep(.layer-switcher .panel .layer) {
    display: flex !important;
    align-items: center !important;
  }
}
@media screen and (max-width: 700px) {
  .doubleView-main {
    .ct {
      width: 100%;
      height: 50vh;
    }
  }
}
</style>
