<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import hljs from 'highlight.js'

export default {
  name: 'App',
  mounted () {
    this.$nextTick(() => {
      const blocks = document.querySelectorAll('pre code:not(.hljs)')
      Array.prototype.forEach.call(blocks, hljs.highlightBlock)
    })
  }
}
</script>
