/*
 * @Author: shiliangL
 * @Date: 2020-11-22 08:53:57
 * @LastEditTime: 2020-11-22 09:00:24
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-map-draw/src/index.js
 */

import CubeMapDraw from './components/CubeMapDraw'

const components = [
  CubeMapDraw
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: process.env.npm_package_version,
  install,
  CubeMapDraw
}
