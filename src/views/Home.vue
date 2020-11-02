<!--
 * @Author: shiliangL
 * @Date: 2020-10-21 10:05:51
 * @LastEditTime: 2020-11-02 11:05:15
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-baidu-map/src/views/Home.vue
-->
<template>
  <div class="home">
    {{ polygons }}
    {{ markers }}
    <CubeDrawMap
      :mapType="['line']"
      :markers="markers"
      :polylines="polylines"
      :polygons="polygons"
    >
      <!-- <template
        :slot-scope="{ polygonItem }"
        slot="overlay-center"
      >
        <bm-mrker v-if="polygonItem" :position="polygonItem.centerPoint" />
      </template> -->
    </CubeDrawMap>
  </div>
</template>

<script>
// @ is an alias to /src
import CubeDrawMap from '@/components/CubeDrawMap.vue'

export default {
  name: 'Home',
  components: {
    CubeDrawMap
  },
  data () {
    return {
      markers: [],
      polylines: [],
      polygons: [{ point: [{ lng: 114.329301, lat: 22.591707 }, { lng: 114.316652, lat: 22.513204 }, { lng: 114.424737, lat: 22.571418 }], calculate: '44232319.54', editing: false, centerPoint: { lng: 114.35689666666667, lat: 22.558776333333338 } }]
    }
  }
}
</script>
