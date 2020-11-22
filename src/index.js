/*
 * @Author: shiliangL
 * @Date: 2020-11-22 08:53:57
 * @LastEditTime: 2020-11-22 11:04:18
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-map-draw/src/index.js
 */

import CubeMapDraw from './packages/CubeMapDraw'

const components = [
  CubeMapDraw
]

const install = function (Vue, opts = {}) {
  const { ak } = opts
  Vue.prototype._BMapAk = () => ({ ak })
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
