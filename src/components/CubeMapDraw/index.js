import component from './src'

component.install = function (Vue) {
  Vue.component(component.name, component)
}

export default component
