/*
 * @Author: shiliangL
 * @Date: 2020-10-21 10:05:51
 * @LastEditTime: 2020-11-22 08:55:49
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-map-draw/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CubeDrawMap from './index.js'

Vue.use(CubeDrawMap)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
