
<template>
  <div
    class="side-nav"
    :class="{ 'is-fade': isFade }"
    :style="navStyle"
    @mouseenter="isFade = false"
  >
    <ul>
      <li
        v-for="(item, key1) in data"
        :key="key1"
        class="nav-item"
      >
        <template v-if="item.groups">
          <div
            v-for="(group, key2) in item.groups"
            :key="key2"
            class="nav-group"
          >
            <div
              class="nav-group__title"
              @click="expandMenu"
              v-if="group.groupName"
            >
              <span class="group__title__name">
                {{ group.groupName }}
                <span
                  v-if="group.new"
                  class="group__title_new"
                >new</span>
              </span>
            </div>
            <ul class="pure-menu-list">
              <li
                v-for="(navItem, key3) in group.list"
                v-show="!navItem.disabled"
                :key="key3"
                class="nav-item"
              >
                <router-link
                  active-class="active"
                  :to="base + navItem.path"
                  exact
                  v-text="navItem.title"
                ></router-link>
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>

import bus from '@/bus'

export default {
  name: 'SiderBar',
  props: {
    data: Array,
    base: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      highlights: [],
      navState: [],
      isSmallScreen: false,
      isFade: false
    }
  },
  computed: {
    navStyle () {
      const style = {}
      if (this.isSmallScreen) {
        style.paddingBottom = '60px'
      }
      return style
    },
    lang () {
      return this.$route.meta.lang
    }
  },
  watch: {
    '$route.path' () {
      this.handlePathChange()
    },
    isFade (val) {
      bus.$emit('navFade', val)
    }
  },
  created () {
    bus.$on('fadeNav', () => {
      this.isFade = true
    })
  },
  mounted () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.isSmallScreen = document.documentElement.clientWidth < 768
      this.handlePathChange()
    },
    handlePathChange () {
      if (!this.isSmallScreen) {
        this.expandAllMenu()
        return
      }
      this.$nextTick(() => {
        this.hideAllMenu()
        const activeAnchor = this.$el.querySelector('a.active')
        let ul = activeAnchor.parentNode
        while (ul.tagName !== 'UL') {
          ul = ul.parentNode
        }
        ul.style.height = 'auto'
      })
    },
    hideAllMenu () {
      [].forEach.call(this.$el.querySelectorAll('.pure-menu-list'), ul => {
        ul.style.height = '0'
      })
    },
    expandAllMenu () {
      [].forEach.call(this.$el.querySelectorAll('.pure-menu-list'), ul => {
        ul.style.height = 'auto'
      })
    },
    expandMenu (event) {
      if (!this.isSmallScreen) return
      const target = event.currentTarget
      if (!target.nextElementSibling || target.nextElementSibling.tagName !== 'UL') return
      this.hideAllMenu()
      event.currentTarget.nextElementSibling.style.height = 'auto'
    }
  }
}
</script>

<style lang="scss">
.side-nav {
  width: 260px;
  box-sizing: border-box;
  transition: opacity 0.3s;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 80px;
  border-right: solid 1px #ebebeb;
  &::-webkit-scrollbar {
    display: none;
  }
  &.is-fade {
    transition: opacity 3s;
  }
  li {
    list-style: none;
  }
  ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  > ul > .nav-item > a {
    margin-top: 15px;
  }
  > ul > .nav-item:nth-child(-n + 4) > a {
    margin-top: 0;
  }
  .nav-item {
    a {
      font-size: 16px;
      color: #333;
      line-height: 30px;
      height: 30px;
      margin: 0;
      padding: 0;
      text-decoration: none;
      display: block;
      position: relative;
      transition: 0.15s ease-out;
      font-weight: bold;
      &.active {
        color: #409eff;
        background-color: #e6f7ff;
      }
    }

    .nav-item {
      a {
        padding-left: 20px;
        display: block;
        height: 40px;
        color: #444;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: normal;
        &:hover {
          color: #409eff;
        }
        &.active {
          color: #409eff;
          &:after {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        &:after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          border-right: 3px solid #1890ff;
          transform: scaleY(0.0001);
          opacity: 0;
          transition: opacity 0.25s cubic-bezier(0.215, 0.61, 0.355, 1),
            -webkit-transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
          transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1),
            opacity 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
          transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1),
            opacity 0.25s cubic-bezier(0.215, 0.61, 0.355, 1),
            -webkit-transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
          content: "";
        }
      }
    }

    &.sponsors {
      & > .sub-nav {
        margin-top: -10px;
      }

      & > a {
        color: #777;
        font-weight: 300;
        font-size: 14px;
      }

      .nav-item {
        display: inline-block;
        a {
          height: auto;
          display: inline-block;
          vertical-align: middle;
          margin: 8px 12px 12px 0;
          img {
            width: 42px;
          }
        }
        &:first-child a img {
          width: 36px;
        }
      }
    }
  }

  .nav-group__title {
    cursor: pointer;
    position: relative;
    font-size: 16px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
    font-weight: 400;
    padding-left: 10px;
    .group__title__name {
      display: inline-block;
      position: relative;
    }
    .group__title_new {
      position: absolute;
      right: -36px;
      top: -6px;
      background-color: #ed4444;
      border-radius: 10px;
      color: #fff;
      display: inline-block;
      font-size: 12px;
      height: 18px;
      line-height: 18px;
      padding: 0 6px;
      text-align: center;
      white-space: nowrap;
      border: 1px solid #fff;
    }
  }

  #code-sponsor-widget {
    margin: 0 0 0 -20px;
  }
}
.nav-dropdown-list {
  width: 120px;
  margin-top: -8px;
  li {
    font-size: 14px;
  }
}
</style>
