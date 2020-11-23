<!--
 * @Author: shiliangL
 * @Date: 2020-11-23 08:49:44
 * @LastEditTime: 2020-11-23 08:50:33
 * @LastEditors: Do not edit
 * @Description: 
 * @FilePath: /cube-map-draw/md-docs/drawType.md
-->
### 配置可绘制类型

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