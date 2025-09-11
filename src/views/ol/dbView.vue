<template>
  <div class="doubleView-main">
    <div class="ct" id="map" style="float: left"></div>
    <div class="ct" id="cesium" style="float: right;position: relative"></div>
    <div style="position: absolute;bottom: 0;right: 0">version:0.0.3</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import 'ol/ol.css'

import Map from 'ol/Map'

import View from 'ol/View'

import TileLayer from 'ol/layer/Tile'

import OSM from 'ol/source/OSM'

import OLCesium from 'olcs'

import { fromLonLat } from 'ol/proj'

import * as Cesium from 'cesium'

import 'cesium/Build/Cesium/Widgets/widgets.css'

window.Cesium = Cesium

window.CESIUM_BASE_URL = '/demo/Cesium/'

onMounted(() => {
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
</style>