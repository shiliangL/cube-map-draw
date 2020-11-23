[![Build Status](https://www.travis-ci.org/shiliangL/cube-map-draw.svg?branch=master)](https://www.travis-ci.org/shiliangL/cube-map-draw)
[![NPM](https://nodei.co/npm/cube-map-draw.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/cube-map-draw/)
### 写在前面

- vue-baidu-map是一个很好的vue百度地图应用开发组件。但是相关的地图绘制工具组件，并没有很好的解决方案，所以就想着能不能结合BMapLib.DrawingManager
开发一个vue的百度地图鼠标绘制组件。

- DrawingManager 绘制的时候是很流畅的,但就是在vue中不好用数据驱动的方式去管理这些绘制坐标点。那么能不能利用 DrawingManager 的绘制，再由 vue-baidu-map 绘制覆盖物去用mvvm的特性去管理这些坐标点呢？带着这的想法开始了第二版的开发，也就是cube-map-draw组件。

- 组件到文档,其实组件早就写的差不多了,只是一直缺个文档,缺少个完善的、持续更新维护的文档。一直也很想着搞个项目，可以写组件，可以维护文档又可以在md文件中演示代码的效果。

- 时间上或者个人考虑上可能有很多的不足,但希望以此作为一个方案去完善。去打补丁去迭代。希望各位大佬多提提意见多完善完善其中的不足。

- 感谢 vue、 vue-baidu-map、 百度地图
 
### 使用方案
 
- <a href="https://cn.vuejs.org/index.html" target="_blank">vue</a> + <a href="http://lbsyun.baidu.com/index.php?title=jspopular3.0" target="_blank">百度地图</a> + <a href="http://api.map.baidu.com/library/DrawingManager/1.4/docs/symbols/BMapLib.DrawingManager.html" target="_blank">DrawingManager</a>[<a href="https://lbsyun.baidu.com/jsdemo/demo/f0_7.htm" target="_blank">绘图示例</a>] + <a href="https://dafrok.github.io/vue-baidu-map/" target="_blank">vue-baidu-map</a>

### 源码 点赞start
开源分享不易,还请各位不吝赐教,多提意见想法。顺手点赞 +、start +


### 项目代码即组件代码 + 文档演示代码

组件安装
```shell
npm install cube-map-draw -S

import Vue from 'vue'
import CubeDrawMap from 'cube-map-draw'

Vue.use(CubeDrawMap)
```

组件使用

```html
<template>
    <div class="cube-map-draw-warp">
      <cube-map-draw
      :config="config"
      :markers="markers"
      :polylines="polylines"
      :polygons="polygons"
     />
    </div>
</template>

<script>
  export default {
    data() {
      return {
       config: {
        mapCenter: '深圳市',
        akey: 'ggeG9Ii3jcwnXUvVXNQ6vjRYUXV5Ckhz', // 百度地图秘钥 必填
       },
       markers:[],
       polylines:[],
       polygons:[],
      };
    },
  };
</script>
```


### DrawingManager结合vue-baidu-map 实现鼠标绘制思路

> 1 改造 DrawingManager 插件(src/utils/bMapLib),修改为模块导出的方式

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4cb46692c8a4823809bec80e588bb51~tplv-k3u1fbpfcp-watermark.image)

> 2 在地图初始化完成后，加载使用修改后的bMapLib插件(src/packages/CubeMapDraw/src/index)。

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6bf778578b48434cbf6e24f4f062d683~tplv-k3u1fbpfcp-watermark.image)


> 3 处理坐标数据，

一开始我们就说了。DrawingManager 绘制的覆盖物用数据驱动的方式不好管理。所以这里‘投了个巧’，在绘制完成之后我们只是需要获取到绘制覆盖物的坐标数据(注意，注意，注意)。而DrawingManager绘制的覆盖物立即删除掉。把收集回来的覆盖物坐标数据给到 vue-baidu-map 覆盖物组件去管理。 更细节的部分可以去查看源码(src/packages/CubeMapDraw/src/index)。这样就是 cube-map-draw 的实现思路。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd424b1a626948a1ae535f118b3e035a~tplv-k3u1fbpfcp-watermark.image)


#### 项目中配置md文档解析

vue.config.js 中添加配置如下，关键代码请查看scripts/md-loader中。

```shell

    // 解析Markdown文件转成vue组件
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use('markdown-loader')
      .loader(
        require('path').resolve(__dirname, './scripts/md-loader/index.js')
      )
      .end()
      
```


basic.md 文件中添加如下描述。md-loader会:::demo生成对应的html。
```html

### 基本使用

如果地图无法显示,可以尝试设置父级元素高度。akey必填，开发者请各自申请对应的百度地图秘钥。

:::demo
```html
<template>
    <div class="cube-map-draw-warp">
      <cube-map-draw
      :config="config"
      :markers="markers"
      :polylines="polylines"
      :polygons="polygons"
    />
    </div>
</template>

<script>
  export default {
    data() {
      return {
       config: {
        mapCenter: '深圳市',
        akey: 'ggeG9Ii3jcwnXUvVXNQ6vjRYUXV5Ckhz', // 百度地图秘钥 必填
        // initSetViewport: true, // 地图初始化完成 最佳视角
       },
       markers:[],
       polylines:[],
       polygons:[],
      };
    },
  };
</script>
```
:::

生成html 效果
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55d11a79c69243fa9e3b6cf941162d2d~tplv-k3u1fbpfcp-watermark.image)



### 写在最后

时间写的比较粗糙，写文档这个东西太难了。期待有一样需求的同志可以多多提意见和建议，需求什么的，后期待续....
点个赞呗，撸个start呗。