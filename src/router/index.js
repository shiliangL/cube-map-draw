/*
 * @Author: shiliangL
 * @Date: 2020-10-21 10:05:51
 * @LastEditTime: 2020-11-22 13:25:42
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-map-draw/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import hljs from 'highlight.js'
import navConfig from '../../nav.config'

Vue.use(VueRouter)

const loadTypeMapDocs = (path) => {
  return r => require.ensure([], () => r(require(`~md/${path}.md`)))
}

const loadTypeMapViews = (path) => {
  return r => require.ensure([], () => r(require(`@/views/${path}.vue`)))
}

const componentRoutes = []
navConfig['component-list'].forEach(item => {
  for (const itemLisst of item.groups) {
    itemLisst.list.map(list => {
      const pathName = list.path.substr(1)
      componentRoutes.push({
        path: pathName,
        component: !list.views ? loadTypeMapDocs(pathName) : loadTypeMapViews(pathName)
      })
    })
  }
})

const routes = [
  {
    path: '/',
    redirect: '/readme',
    component: () => import('@/layout'),
    children: [
      ...componentRoutes
    ]
  }
]

const router = new VueRouter({
  routes
})

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  setTimeout(() => {
    Vue.nextTick(() => {
      const blocks = document.querySelectorAll('pre code:not(.hljs)')
      Array.prototype.forEach.call(blocks, hljs.highlightBlock)
    })
  }, 0)
})

export default router
