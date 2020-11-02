<!--
 * @Author: shiliangL
 * @Date: 2020-10-30 14:46:19
 * @LastEditTime: 2020-11-02 11:31:08
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
        :fill="iconFillColor"
      />
      视角
    </a>
    <template v-if="!preview">
      <a @click.stop="draw(0)">
        <click-tap
          theme="outline"
          size="14"
          :fill="iconFillColor"
        />
        停止绘制
      </a>
      <a @click.stop="draw(2)">
        <local-two
          theme="outline"
          size="14"
          :fill="iconFillColor"
        />
        标点
      </a>
      <a @click.stop="draw(3)">
        <map-draw
          theme="outline"
          size="14"
          :fill="iconFillColor"
        />
        画面
      </a>
      <a @click.stop="draw(4)">
        <waves
          theme="outline"
          size="14"
          :fill="iconFillColor"
        /> 画线
      </a>
      <a
        @click.stop="draw(7)"
        v-if="0"
      >
        <material-two
          theme="outline"
          size="14"
          :fill="iconFillColor"
        />
        <i class="el-icon-search" /> 画圆
      </a>
      <a
        :underline="false"
        type="primary"
        @click.stop="draw(8)"
        v-if="0"
      >
        <full-screen-play
          theme="outline"
          size="14"
          :fill="iconFillColor"
        />
        <i class="el-icon-search" /> 画方
      </a>
    </template>
  </div>
</template>

<script>

import { LocalTwo, MapDraw, FullScreen, MaterialTwo, FullScreenPlay, Waves, ClickTap, DEFAULT_ICON_CONFIGS } from '@icon-park/vue'
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
    iconFillColor: {
      type: String,
      default: () => '#3894ff'
    }
  },
  components: {
    Waves,
    MapDraw,
    LocalTwo,
    ClickTap,
    FullScreen,
    MaterialTwo,
    FullScreenPlay
  },
  mounted () {
    console.log(this.$attrs)
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
}
</style>
