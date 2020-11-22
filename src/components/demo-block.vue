<template>
  <div
    class="demo-block"
    :class="['demo-zh-CN', { 'hover': hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div
      ref="meta"
      class="meta"
    >
      <div
        v-if="$slots.default"
        class="description"
      >
        <slot></slot>
      </div>

      <transition name="slide-fade">
        <div
          v-show="isExpanded"
          class="highlight"
        >
          <slot name="highlight"></slot>
        </div>
      </transition>
    </div>
    <div
      ref="control"
      class="demo-block-control"
      :class="{ 'is-fixed': fixedControl }"
      @click="isExpanded = !isExpanded"
    >
      <transition name="arrow-slide">
        <i :class="[iconClass, { 'hovering': hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script type="text/babel">

export default {
  data () {
    return {
      hovering: false,
      isExpanded: false,
      fixedControl: false,
      scrollParent: null
    }
  },

  computed: {

    iconClass () {
      return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
    },

    controlText () {
      return this.isExpanded ? '收起代码' : '展开代码'
    }

  },

  mounted () {
    this.$nextTick(() => {
      // const highlight = this.$el.getElementsByClassName('highlight')[0]
      // if (this.$el.getElementsByClassName('description').length === 0) {
      //   highlight.style.width = '100%'
      //   highlight.borderRight = 'none'
      // }
      const highlightjs = this.$slots.highlight
      if (highlightjs && highlightjs[0]) {
        // eslint-disable-next-line no-unused-vars
        let code = ''
        let cur = highlightjs[0]
        if (cur.tag === 'pre' && (cur.children && cur.children[0])) {
          cur = cur.children[0]
          if (cur.tag === 'code') {
            code = cur.children[0].text
          }
        }
      }
    })
  },

  beforeDestroy () {

  },

  methods: {

  }
}
</script>

<style lang="scss">
.demo-block {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  &.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }
  .demo-button {
    float: right;
  }
  .source {
    padding: 24px;
  }
  .meta {
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    transition: height 0.2s;
  }
  .description {
    padding: 20px;
    box-sizing: border-box;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;
    p {
      margin: 0;
      line-height: 26px;
    }
    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }

  .highlight {
    margin: 10px;
    pre {
      margin: 0;
    }

    code.hljs {
      margin: 0;
      border: none;
      max-height: none;
      border-radius: 0;

      &::before {
        content: none;
      }
    }
  }

  .demo-block-control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 868px;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
      &.hovering {
        transform: translateX(-40px);
      }
    }

    > span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }

    .control-button {
      line-height: 26px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      padding-left: 5px;
      padding-right: 25px;
    }
  }
}
</style>
