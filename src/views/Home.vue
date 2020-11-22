<!--
 * @Author: shiliangL
 * @Date: 2020-10-21 10:05:51
 * @LastEditTime: 2020-11-22 09:19:11
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-map-draw/src/views/Home.vue
-->
<template>
  <div class="home">
    <div class="datav">
      <div>
        {{ markers }}
      </div>
      <div>
        {{ polylines }}
      </div>
      <div>
        {{ polygons }}
      </div>
    </div>
    <CubeMapDraw
      :mapType="['line']"
      :config="config"
      :markers="markers"
      :polylines="polylines"
      :polygons="polygons"
    />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      config: {
        akey: 'ggeG9Ii3jcwnXUvVXNQ6vjRYUXV5Ckhz', // 百度地图秘钥 必填
        styleOptions: {
          fillColor: 'red'
        }
      },
      markers: [{ point: { lat: 22.638481, lng: 113.822543 } }],
      polylines: [{ point: [{ lng: 113.827408, lat: 22.642175 }, { lng: 113.834019, lat: 22.644843 }, { lng: 113.841493, lat: 22.63497 }, { lng: 113.86564, lat: 22.583457 }, { lng: 113.886337, lat: 22.566904 }, { lng: 113.903871, lat: 22.549816 }, { lng: 113.908183, lat: 22.537799 }, { lng: 113.943541, lat: 22.539135 }, { lng: 113.951589, lat: 22.54581 }, { lng: 113.965675, lat: 22.54581 }, { lng: 113.980048, lat: 22.540737 }], calculate: 0, editing: false, centerPoint: { lng: 113.90070945454544, lat: 22.575586909090905 } }],
      polygons: [{ point: [{ lng: 113.974631, lat: 22.544608 }, { lng: 113.974415, lat: 22.544124 }, { lng: 113.974397, lat: 22.543223 }, { lng: 113.974649, lat: 22.542505 }, { lng: 113.975313, lat: 22.541821 }, { lng: 113.975924, lat: 22.540469 }, { lng: 113.976265, lat: 22.539601 }, { lng: 113.977182, lat: 22.539067 }, { lng: 113.978116, lat: 22.538633 }, { lng: 113.97817, lat: 22.537982 }, { lng: 113.979715, lat: 22.537949 }, { lng: 113.980541, lat: 22.537098 }, { lng: 113.982086, lat: 22.537081 }, { lng: 113.983344, lat: 22.537098 }, { lng: 113.983272, lat: 22.537598 }, { lng: 113.983075, lat: 22.538316 }, { lng: 113.983703, lat: 22.538884 }, { lng: 113.983775, lat: 22.539167 }, { lng: 113.983685, lat: 22.539651 }, { lng: 113.984224, lat: 22.540035 }, { lng: 113.984278, lat: 22.540569 }, { lng: 113.984404, lat: 22.541204 }, { lng: 113.984368, lat: 22.541387 }, { lng: 113.980236, lat: 22.542873 }, { lng: 113.977918, lat: 22.543724 }, { lng: 113.976068, lat: 22.544341 }, { lng: 113.974918, lat: 22.544658 }, { lng: 113.974774, lat: 22.544692 }], calculate: '502304.26', editing: false, centerPoint: { lng: 113.97940878571426, lat: 22.54065564285715 } }]

    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .datav {
    font-size: 12px;
    height: 5rem;
    overflow: auto;
    padding: 4px;
  }
  .cube-draw-map {
    flex: 1;
  }
}
</style>
