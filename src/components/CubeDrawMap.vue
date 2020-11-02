<!--
 * @Author: shiliangL
 * @Date: 2020-10-21 10:05:51
 * @LastEditTime: 2020-11-02 13:47:46
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-baidu-map/src/components/CubeDrawMap.vue
-->
<template>
  <div class="cube-draw-map">
    <baidu-map
      :map-click="false"
      :scroll-wheel-zoom="true"
      center="深圳市"
      class="bm-view"
      ak="ggeG9Ii3jcwnXUvVXNQ6vjRYUXV5Ckhz"
      @ready="ready"
    >
      <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT">
        <map-drawing-tools
          @draw="draw"
          v-bind="$attrs"
        />
      </bm-control>

      <bm-control v-if="map">

        <bm-control key="0b31ab34-33c1-4d49-bd04-eced3fd4f999">
          <template v-for="(polygon,index) in markers">
            <bm-control :key="'polygons_bm_marker_Item'+index">
              <bm-marker
                :key="index+'line_list_bm_marker_one'"
                :position="polygon.point"
              />
            </bm-control>
          </template>
        </bm-control>

        <bm-control key="f1a7c4d6-de54-42f6-b784-ee802466d55d">
          <template v-for="(polygonItem,ItemIndex) in polylines">
            <bm-control :key="'polygons_bm_polyline_Item'+ItemIndex">
              <bm-polyline
                :key="ItemIndex+'polygons_bm_polyline_one'"
                :path="polygonItem.point"
                :editing="polygonItem.editing"
                :stroke-color="polygonItem.strokeColor || initConfig.styleOptions.strokeColor"
                :fill-color="polygonItem.fillColor || initConfig.styleOptions.fillColor"
                :fill-opacity="polygonItem.fillOpacity || initConfig.styleOptions.fillOpacity"
                :stroke-opacity="polygonItem.strokeOpacity || initConfig.styleOptions.strokeOpacity"
                :stroke-style="polygonItem.strokeStyle || initConfig.styleOptions.strokeStyle"
                :stroke-weight="polygonItem.strokeWeight || initConfig.styleOptions.strokeWeight"
                @click="click($event, polygonItem)"
                @rightclick="rightclick($event, polygonItem,ItemIndex)"
                @lineupdate="polygonUpdate($event, polygonItem,ItemIndex)"
              />
              <bm-control v-if="polygonItem.centerPoint">
                <slot
                  name="overlay-center"
                  :row="polygonItem"
                />
              </bm-control>
            </bm-control>
          </template>
        </bm-control>

        <bm-control key="7ac63c28-2833-41e0-bfd8-6dc33abcc7c5">
          <template v-for="(polygonItem,ItemIndex) in polygons">
            <bm-control :key="'polygons_bm_polygon_Item'+ItemIndex">
              <bm-polygon
                :key="ItemIndex+'polygons_bm_polygon_one'"
                :path="polygonItem.point"
                :editing="polygonItem.editing"
                :stroke-color="polygonItem.strokeColor || initConfig.styleOptions.strokeColor"
                :fill-color="polygonItem.fillColor || initConfig.styleOptions.fillColor"
                :fill-opacity="polygonItem.fillOpacity || initConfig.styleOptions.fillOpacity"
                :stroke-opacity="polygonItem.strokeOpacity || initConfig.styleOptions.strokeOpacity"
                :stroke-style="polygonItem.strokeStyle || initConfig.styleOptions.strokeStyle"
                :stroke-weight="polygonItem.strokeWeight || initConfig.styleOptions.strokeWeight"
                @click="click($event, polygonItem)"
                @rightclick="rightclick($event, polygonItem,ItemIndex)"
                @lineupdate="polygonUpdate($event, polygonItem,ItemIndex)"
              />
              <bm-control v-if="polygonItem.centerPoint">
                <slot
                  name="overlay-center"
                  :row="polygonItem"
                />
              </bm-control>
            </bm-control>
          </template>
        </bm-control>

      </bm-control>

      <!-- 自定义鼠标右键菜单 -->
      <transition name="el-zoom-in-top">
        <ul
          v-if="visible"
          v-clickOutside="clickOutside"
          :style="{left:contextmenu.left+'px',top:contextmenu.top+'px'}"
          class="contextmenu"
        >
          <li @click.stop="handlerContextmenu(1)"> 开启编辑 </li>
          <li @click.stop="handlerContextmenu(2)"> 完成编辑 </li>
          <li @click.stop="handlerContextmenu(0)"> 删除 </li>
        </ul>
      </transition>
    </baidu-map>
  </div>
</template>

<script>

// import { BaiduMap, BmControl, BmLabel, BmPolyline, BmPolygon, BmCircle } from 'vue-baidu-map/components'
import { BaiduMap, BmControl, BmPolygon, BmMarker, BmPolyline } from 'vue-baidu-map/components'
import { initBMapLib } from '@/utils/bMapLib'
import MapDrawingTools from './MapDrawingTools'

export default {
  name: 'CubeDrawMap',
  inheritAttrs: false,
  props: {
    polygons: {
      type: Array,
      default: () => []
    },
    polylines: {
      type: Array,
      default: () => []
    },
    markers: {
      type: Array,
      default: () => []
    }
  },
  components: {
    BaiduMap,
    BmControl,
    BmMarker,
    BmPolyline,
    BmPolygon,
    MapDrawingTools
  },
  directives: {
    clickOutside: {
      bind (el, binding, vnode) {
        function clickHandler (e) {
          if (el.contains(e.target)) return false
          if (binding.expression) binding.value(e)
        }
        el.__vueClickOutside__ = clickHandler
        document.addEventListener('click', clickHandler)
      },
      unbind (el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__)
        delete el.__vueClickOutside__
      }
    }
  },
  data () {
    return {
      map: null,
      drawingManager: null,
      visible: false,
      contextmenu: {
        left: 0,
        right: 0
      },
      canOverUpdate: false,
      initConfig: {
        styleOptions: {
          strokeColor: 'blue', // 边线颜色。
          fillColor: '#3689F3', // 填充颜色。当参数为空时，圆形将没有填充效果。
          strokeWeight: 2, // 边线的宽度，以像素为单位。
          strokeOpacity: 1, // 边线透明度，取值范围0 - 1。
          fillOpacity: 0.4, // 填充的透明度，取值范围0 - 1。
          strokeStyle: 'dashed' // 边线的样式，solid dashed。
        },
        markers: [],
        polylines: [],
        polygons: [],
        circles: [],
        rectangle: []
      }
    }
  },
  mounted () {

  },
  methods: {
    // 地图初始化完毕
    ready ({ map, BMap }) {
      this.BMapLib = initBMapLib()
      console.log(this.BMapLib, 'this.BMapLib')
      this.map = map
      this.BMap = BMap
      this.$nextTick().then(() => {
        const { styleOptions } = this.initConfig
        // eslint-disable-next-line no-undef
        this.drawingManager = new BMapLib.DrawingManager(map, {
          isOpen: false, // 是否开启绘制模式
          enableDrawingTool: false, // 是否显示工具栏
          enableCalculate: true, // 输出面积 单位 米
          drawingToolOptions: {
            anchor: BMAP_ANCHOR_TOP_RIGHT, // 位置
            offset: new BMap.Size(5, 5) // 偏离值
          },
          circleOptions: styleOptions, // 圆的样式
          polylineOptions: styleOptions, // 线的样式
          polygonOptions: styleOptions, // 多边形的样式
          rectangleOptions: styleOptions // 矩形的样式
        })
        this.drawingManager && this.drawingManager.addEventListener('overlaycomplete', (n, e) => this.drawOverlayComplete(e))

        this.$emit('ready', { map, BMap, BMapLib: this.BMapLib })
      })
    },
    getOverLayCenterPoint (path) {
      let x = 0.0
      let y = 0.0
      for (let i = 0; i < path.length; i++) {
        x = x + parseFloat(path[i].lng)
        y = y + parseFloat(path[i].lat)
      }
      x = x / path.length
      y = y / path.length
      return { lng: x, lat: y }
    },
    // 选择绘图方式
    draw (type) {
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
          this.drawingManager.setDrawingMode('marker')
          break
        case 3:
          this.drawingManager.open()
          this.drawingManager.setDrawingMode('polygon')
          break
        case 4:
          this.drawingManager.open()
          this.drawingManager.setDrawingMode('polyline')
          break
        case 5:
          break
        case 6:
          // 完成编辑同步数据
          break
        case 7:
          this.drawingManager.open()
          this.drawingManager.setDrawingMode('circle')
          break
        case 8:
          this.drawingManager.open()
          this.drawingManager.setDrawingMode('rectangle')
          break
        default:
          break
      }
    },
    // 绘制覆盖物完成
    drawOverlayComplete (e) {
      console.log(e, 'event')
      if (!e.drawingMode) return
      // 立即清除鼠标绘制的东西
      this.map && this.map.removeOverlay(e.overlay)
      const overlay = e.overlay
      const { polygons, polylines, markers, circles, rectangle } = this.initConfig
      const drawPolygonTypeList = ['polygon', 'polyline', 'circle', 'rectangle']
      if (drawPolygonTypeList.includes(e.drawingMode)) {
        const overLayCenterPoint = this.getOverLayCenterPoint(e.overlay.getPath())
        const polygonOverLay = { point: overlay.getPath(), calculate: e.calculate, editing: true, centerPoint: overLayCenterPoint }
        switch (e.drawingMode) {
          case 'polygon':
            this.polygons ? this.polygons.push(polygonOverLay) : polygons.push(polygonOverLay)
            break
          case 'polyline':
            this.polylines ? this.polylines.push(polygonOverLay) : polylines.push(polygonOverLay)
            break
          case 'circle':
            this.circles ? this.circles.push(polygonOverLay) : circles.push(polygonOverLay)
            break
          case 'rectangle':
            this.rectangle ? this.rectangle.push(polygonOverLay) : rectangle.push(polygonOverLay)
            break
          default:
            break
        }
      } else {
        const { lat, lng } = overlay.point
        this.markers ? this.markers.push({ point: { lat, lng } }) : markers.push({ point: { lat, lng } })
      }
    },
    click (e, item) {
      console.log(e, item)
    },
    rightclick (e, item) {
      console.log(e, item)
    },
    polygonUpdate (e, item) {
      if (!item.editing) return
      item.point = e.target.getPath()
      item.calculate = this.BMapLib.GeoUtils ? this.BMapLib.GeoUtils.getPolygonArea(e.target) : 0
      item.centerPoint = this.getOverLayCenterPoint(e.target.getPath())
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
  .contextmenu {
    margin: 0;
    padding: 0;
    background: #fff;
    list-style-type: none;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    z-index: 99999999;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    position: fixed;
    width: 80px;
    text-align: left;
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
        color: #1d6fff;
      }
    }
  }
}
</style>
