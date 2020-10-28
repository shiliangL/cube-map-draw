<!--
 * @Author: shiliangL
 * @Date: 2020-10-21 10:05:51
 * @LastEditTime: 2020-10-26 09:14:03
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-baidu-map/src/components/HelloWorld.vue
-->
<template>
  <div class="cube-draw-map">
    <baidu-map
      :map-click="false"
      :scroll-wheel-zoom="true"
      center="深圳市"
      class="bm-view"
      ak="ggeG9Ii3jcwnXUvVXNQ6vjRYUXV5Ckhz"
      @ready="mapReady"
    >
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      />
      <bm-traffic :predictDate="{weekday: 7, hour: 12}" />
      <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT">
        <div class="map-drawing-tools">
          <a @click.stop="draw(0)"> <i class="el-icon-thumb" /> 停止绘制</a>
          <a @click.stop="draw(2)">
            <i class="el-icon-s-flag" /> 标点
          </a>
          <a @click.stop="draw(3)">
            <i class="el-icon-crop" /> 画面
          </a>
          <a @click.stop="draw(4)">
            <i class="el-icon-minus rotate90" /> 画线
          </a>
          <a
            @click.stop="draw(7)"
            v-if="0"
          >
            <i class="el-icon-search" /> 画圆
          </a>
          <a
            :underline="false"
            type="primary"
            @click.stop="draw(8)"
          >
            <i class="el-icon-search" /> 画方
          </a>
        </div>
      </bm-control>
    </baidu-map>
  </div>
</template>

<script>

// import { BaiduMap, BmControl, BmLabel, BmPolyline, BmPolygon, BmCircle } from 'vue-baidu-map/components'
import { BaiduMap, BmControl, BmTraffic, BmMapType } from 'vue-baidu-map/components'
import { initBMapLib } from './drawingManager'

export default {
  name: 'CubeDrawMap',
  props: {
    msg: String
  },
  components: {
    BmMapType,
    BmTraffic,
    BaiduMap,
    BmControl
  },
  data () {
    return {
      map: null,
      drawingManager: null
    }
  },
  created () {

  },
  methods: {
    // 地图初始化完毕
    mapReady ({ map, BMap }) {
      initBMapLib()
      this.map = map
      this.BMap = BMap
      this.$nextTick().then(() => {
        const styleOptions = {
          strokeColor: 'red', // 边线颜色。
          fillColor: 'red', // 填充颜色。当参数为空时，圆形将没有填充效果。
          strokeWeight: 2, // 边线的宽度，以像素为单位。
          strokeOpacity: 0.78, // 边线透明度，取值范围0 - 1。
          fillOpacity: 0.35, // 填充的透明度，取值范围0 - 1。
          strokeStyle: 'solid' // 边线的样式，solid dashed。
        }
        // 实例化鼠标绘制工具
        // eslint-disable-next-line no-undef
        this.drawingManager = new BMapLib.DrawingManager(map, {
          isOpen: false, // 是否开启绘制模式
          enableDrawingTool: true, // 是否显示工具栏
          drawingToolOptions: {
            anchor: BMAP_ANCHOR_TOP_RIGHT, // 位置
            offset: new BMap.Size(5, 5) // 偏离值
          },
          circleOptions: styleOptions, // 圆的样式
          polylineOptions: styleOptions, // 线的样式
          polygonOptions: styleOptions, // 多边形的样式
          rectangleOptions: styleOptions // 矩形的样式
        })
        this.drawingManager && this.drawingManager.addEventListener('overlaycomplete', (e) => this.drawOverlayComplete(e))
      })
    },
    // 选择绘图方式
    draw (type, isDrawingOutSider = false) {
      switch (type) {
        case 0:
          this.drawType = null
          this.drawingManager && this.drawingManager.close()
          break
        case 1:
          this.getBetterViewByOverlays()
          break
        case 2:
          this.drawingManager.open()
          // eslint-disable-next-line no-undef
          this.drawingManager.setDrawingMode('marker')
          break
        case 3:
          this.drawingManager.open()
          // eslint-disable-next-line no-undef
          this.drawingManager.setDrawingMode('polygon')
          break
        case 4:
          this.drawingManager.open()
          // eslint-disable-next-line no-undef
          this.drawingManager.setDrawingMode('polyline')
          break
        case 5:
          break
        case 6:
          // 完成编辑同步数据
          break
        case 7:
          this.drawingManager.open()
          // eslint-disable-next-line no-undef
          this.drawingManager.setDrawingMode('circle')
          break
        case 8:
          this.drawingManager.open()
          // eslint-disable-next-line no-undef
          this.drawingManager.setDrawingMode('rectangle')
          break
        default:
          break
      }
    },
    // 绘制覆盖物完成
    drawOverlayComplete (e) {
      console.log(e, 'sb')
      // if (!e.drawingMode) return
      // // "marker"  "polygon" "polyline" "circle"
      // const overlay = e.overlay
      // e.overlay.__overLayoutKey__ = e.drawingMode
      // // 立即清除鼠标绘制的东西
      // this.map && this.map.removeOverlay(overlay)
      // this.map && console.log(this.map.getOverlays())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cube-draw-map {
  .bm-view {
    width: 100%;
    height: 90vh;
  }
  .map-drawing-tools {
    margin: 6px;
    padding: 10px;
    font-size: 12px;
    color: #3894ff;
    background: azure;
    cursor: pointer;
    box-shadow: 0 0 4px rgba(37, 47, 55, 0.12);
    a {
      padding: 0 6px;
      display: inline-block;
      text-decoration: none;
      &:active {
        opacity: 0.78;
      }
    }
  }
}
</style>
