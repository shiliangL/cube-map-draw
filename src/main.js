/*
 * @Author: shiliangL
 * @Date: 2020-10-21 10:05:51
 * @LastEditTime: 2020-11-22 11:31:00
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-map-draw/src/main.js
 */
import 'highlight.js/styles/atom-one-dark.css'
import '@/style/index.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import demoBlock from './components/demo-block'
import CubeDrawMap from './index.js'

Vue.component('demo-block', demoBlock)
Vue.use(CubeDrawMap)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
