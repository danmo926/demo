<template>
  <div class="doubleView-main">
    <div class="ct" id="map" style="float: left"></div>
    <div class="ct" id="cesium" style="float: right;position: relative"></div>
    <div style="position: absolute;bottom: 0;right: 0">version:0.0.3</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// OpenLayers CSS is imported globally in app.css

import Map from 'ol/Map'

import View from 'ol/View'

import TileLayer from 'ol/layer/Tile'

import OSM from 'ol/source/OSM'

import OLCesium from 'olcs'

import { fromLonLat } from 'ol/proj'

import * as Cesium from 'cesium'

import 'cesium/Build/Cesium/Widgets/widgets.css'
import { Zoom } from 'ol/control'

window.Cesium = Cesium

window.CESIUM_BASE_URL = '/demo/Cesium/'

onMounted( () => {
  // 在DOM渲染完成后初始化地图

  const map = new Map({
    target: 'map', // HTML 中的容器 ID

    layers: [
      new TileLayer({
        source: new OSM(), // 使用 OpenStreetMap 数据
      }),
    ],

    view: new View({
      center: fromLonLat([116.4074, 39.9042]), // 设置地图中心坐标

      zoom: 5, // 设置初始缩放级别
    }),
    controls: [
      new Zoom({
        className: 'custom-zoom', // 可自定义样式
      }),
    ],
  })

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
  .ct {
    width: 50%;
    height: 700px;
  }
}

/* 确保OpenLayers控件样式不被scoped影响 */
</style>

<style lang="css">
/* 全局样式，确保OpenLayers控件正确显示 */
.custom-zoom {
  top: 10px !important;
  right: 10px !important;
  z-index: 1000 !important;
}

/* 确保OpenLayers控件容器有正确的定位 */
.ol-control {
  position: absolute !important;
}

.ol-zoom {
  top: 0.5em !important;
  left: 0.5em !important;
}

/* 确保控件按钮样式正确 */
.ol-zoom button {
  display: block !important;
  margin: 1px !important;
  padding: 0 !important;
  color: #000 !important;
  font-size: 1.14em !important;
  font-weight: bold !important;
  text-decoration: none !important;
  text-align: center !important;
  height: 1.375em !important;
  width: 1.375em !important;
  line-height: 1.375em !important;
  background: rgba(255, 255, 255, 0.8) !important;
  border: 1px solid #ccc !important;
  border-radius: 2px !important;
}

.ol-zoom button:hover {
  text-decoration: none !important;
  background: rgba(255, 255, 255, 1) !important;
}
</style>