<!--
 * @Author: shiliangL
 * @Date: 2020-10-14 16:44:33
 * @LastEditTime: 2020-11-22 14:57:04
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-map-draw/src/layout/index.vue
-->
<template>
  <div class="layout">
    <headerBar />
    <div class="main-wrapper">
      <siderBar :data="navsData"></siderBar>
      <div class="main-content">
        <keep-alive>
          <router-view class="content" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>

import navsData from '../../nav.config.json'
import siderBar from './siderBar'
import headerBar from './headerBar'

export default {
  components: {
    siderBar,
    headerBar
  },
  data () {
    return {
      navsData: navsData['component-list']
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  overflow: hidden;

  .main-content {
    flex: 1;
    padding: 20px;
    margin-bottom: 60px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .main-wrapper {
    display: flex;
    height: 100%;
    overflow: auto;
  }
}
</style>
