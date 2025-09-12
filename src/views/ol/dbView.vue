<template>
  <div class="doubleView-main">
    <div class="ct" id="map" ></div>
    <div class="ct" id="cesium" ></div>
    <div style="position: absolute; bottom: 0; right: 0">version:0.0.3</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// OpenLayers CSS is imported globally in app.css

import Map from 'ol/Map'

import View from 'ol/View'

import TileLayer from 'ol/layer/Tile'

import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ'

import OLCesium from 'olcs'

import { fromLonLat } from 'ol/proj'

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
  ZoomToExtent
} from 'ol/control'
import LayerSwitcher from 'ol-layerswitcher'
import 'ol-layerswitcher/dist/ol-layerswitcher.css'

window.Cesium = Cesium

window.CESIUM_BASE_URL = '/demo/Cesium/'

onMounted(() => {
  // 在DOM渲染完成后初始化地图

  // 创建多个图层
  const osmLayer = new TileLayer({
    title: 'OpenStreetMap',
    type: 'base',
    visible: true,
    source: new OSM()
  })

  const satelliteLayer = new TileLayer({
    title: 'Satellite',
    type: 'base',
    visible: false,
    source: new XYZ({
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attributions: 'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    })
  })

  const terrainLayer = new TileLayer({
    title: 'Terrain',
    type: 'base',
    visible: false,
    source: new XYZ({
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}',
      attributions: 'Tiles © Esri — Source: USGS, Esri, TANA, DeLorme, and NPS'
    })
  })

  // 创建鼠标位置控件 - 使用默认样式
  const mousePositionControl = new MousePosition({
    coordinateFormat: function(coordinate) {
      return `经度: ${coordinate[0].toFixed(6)}, 纬度: ${coordinate[1].toFixed(6)}`
    },
    projection: 'EPSG:4326',
    undefinedHTML: '&nbsp;'
  })

  // 创建比例尺控件 - 使用默认样式
  const scaleLineControl = new ScaleLine({
    units: 'metric'
  })

  // 创建全屏控件 - 使用默认样式
  const fullScreenControl = new FullScreen({
    className:'fullScreenCustom',
  })

  // 创建缩放滑块控件 - 使用默认样式
  const zoomSliderControl = new ZoomSlider()

  // 创建旋转控件 - 使用默认样式
  const rotateControl = new Rotate()

  // 创建缩放到范围控件 - 使用默认样式
  const zoomToExtentControl = new ZoomToExtent({
    extent: fromLonLat([73.66, 18.197]).concat(fromLonLat([134.77, 53.56])) // 中国范围
  })

  // 创建概览图控件 - 使用默认样式
  const overviewMapControl = new OverviewMap({
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    collapseLabel: '«',
    label: '»',
    collapsed: false  // 默认收起
  })

  const map = new Map({
    target: 'map', // HTML 中的容器 ID

    layers: [osmLayer, satelliteLayer, terrainLayer],

    view: new View({
      center: fromLonLat([116.4074, 39.9042]), // 设置地图中心坐标
      zoom: 5, // 设置初始缩放级别
      maxZoom: 18,
      minZoom: 2
    }),
    
    controls: [
      new Zoom(),  // 使用默认样式
      fullScreenControl,
      scaleLineControl,
      mousePositionControl,
      zoomSliderControl,
      rotateControl,
      zoomToExtentControl,
      overviewMapControl,
      new Attribution({
        collapsible: true
      })
    ]
  })

  // 添加专业的图层切换器
  const layerSwitcher = new LayerSwitcher({
    tipLabel: '图层', // 按钮提示文字
    groupSelectStyle: 'children', // 'children' | 'group' | 'none'
    activationMode: 'click', // 'click' | 'hover'
    startActive: false, // 是否默认展开
    reverse: true, // 是否反转图层顺序
    collapseTipLabel: '关闭图层面板' // 收起按钮提示文字
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
  .ct{
    position: relative;
    width: 50%;
    height: 100vh;
  }
  ::v-deep(.fullScreenCustom){
    left: 8px;
    top: 280px;
  }
}
@media screen and (max-width: 700px) {
  .doubleView-main {
    .ct{
      width: 100%;
      height: 50vh;
    }
  }
}
</style>


