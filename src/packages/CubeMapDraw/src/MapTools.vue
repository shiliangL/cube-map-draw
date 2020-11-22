<!--
 * @Author: shiliangL
 * @Date: 2020-10-30 14:46:19
 * @LastEditTime: 2020-11-08 22:02:25
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-baidu-map/src/components/MapDrawingTools.vue
-->
<template>
  <div class="map-drawing-tools">
    <a @click.stop="draw(0)">
      <full-screen
        theme="outline"
        size="14"
        :fill="iconColor"
      />
      视角
    </a>
    <template v-if="!preview">
      <a
        @click.stop="draw(1)"
        class="stop"
      >
        <click-tap
          theme="outline"
          size="14"
          fill="#E6A23C"
        />
        停止绘制
      </a>
      <a
        @click.stop="draw(item.type)"
        v-for="(item,index) in drawType"
        :key="index"
        :style="{color: item.iconColor || '' }"
      >
        <component
          :is="item.iconName"
          v-if="item.iconName"
          :theme="item.iconTheme || 'outline'"
          :size="item.iconSize || 14"
          :fill="item.iconColor || iconColor"
        />
        <span v-text="item.text"></span>
      </a>
    </template>
  </div>
</template>

<script>

import { LocalTwo, Clear, MapDraw, FullScreen, MaterialTwo, FullScreenPlay, Waves, ClickTap, DEFAULT_ICON_CONFIGS } from '@icon-park/vue'
const ICONCONFIG = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon' }

export default {
  name: 'MapDrawingTools',
  provide () {
    return {
      ICON_CONFIGS: ICONCONFIG
    }
  },
  props: {
    preview: {
      type: Boolean,
      default: () => false
    },
    drawType: {
      type: Array,
      default: () => [
        // { text: '标点', iconName: 'LocalTwo', iconColor: '#3894ff', type: 2 },
        // { text: '画面', iconName: 'MapDraw', iconColor: '#3894ff', type: 2 },
        // { text: '画线', iconName: 'Waves', iconColor: '#3894ff', type: 2 }
      ]
    },
    iconColor: {
      type: String,
      default: () => '#3894ff'
    }
  },
  components: {
    Clear,
    Waves,
    MapDraw,
    LocalTwo,
    ClickTap,
    FullScreen,
    MaterialTwo,
    FullScreenPlay
  },
  mounted () {
    // console.log(this.$attrs)
  },
  methods: {
    draw (type) {
      this.$emit('draw', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.map-drawing-tools {
  margin: 6px;
  padding: 10px;
  font-size: 12px;
  color: #3894ff;
  align-items: center;
  display: flex;
  background: #ffffff;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(37, 47, 55, 0.12);
  a {
    padding: 0 6px;
    display: inline-block;
    text-decoration: none;
    align-items: center;
    display: flex;
    &:active {
      opacity: 0.78;
    }
    span {
      display: inline-block;
      padding-right: 4px;
    }
  }
  .stop {
    color: #e6a23c;
  }
}
</style>
