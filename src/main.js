/*
 * @Author: shiliangL
 * @Date: 2020-10-21 10:05:51
 * @LastEditTime: 2020-11-21 22:11:13
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-baidu-map/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CubeMapDraw from '@/components/index.js'

Vue.use(CubeMapDraw)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
