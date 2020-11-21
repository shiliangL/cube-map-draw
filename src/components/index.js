/*
 * @Author: shiliangL
 * @Date: 2020-11-21 21:42:23
 * @LastEditTime: 2020-11-21 22:10:58
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-baidu-map/src/components/index.js
 */
import CubeMapDraw from './CubeMapDraw/index'

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
  version: '0.1.1',
  install,
  CubeMapDraw
}
