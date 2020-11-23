<!--
 * @Author: shiliangL
 * @Date: 2020-11-22 11:16:24
 * @LastEditTime: 2020-11-22 21:41:30
 * @LastEditors: Do not edit
 * @Description: 
 * @FilePath: /cube-map-draw/md-docs/readme.md
-->
### 写在前面

- vue-baidu-map是一个很好的vue百度地图应用开发组件。但是相关的地图绘制工具组件，并没有很好的解决方案，所以就想着能不能结合BMapLib.DrawingManager
开发一个vue的百度地图鼠标绘制组件。

- DrawingManager 绘制的时候是很流畅的,但就是在vue中不好用数据驱动的方式去管理这些绘制坐标点。那么能不能利用 DrawingManager 的绘制，再由 vue-baidu-map 绘制覆盖物去用mvvm的特性去管理这些坐标点呢？带着这的想法开始了第二版的开发，也就是cube-map-draw组件。

- 组件到文档,其实组件早就写的差不多了,只是一直缺个文档,缺少个完善的、持续更新维护的文档。一直也很想着搞个项目，可以写组件，可以维护文档又可以在md文件中演示代码的效果。

- 时间上或者个人考虑上可能有很多的不足,但希望以此作为一个方案去完善。去打补丁去迭代。希望各位大佬多提提意见多完善完善其中的不足。

- 感谢 vue、 vue-baidu-map、 百度地图
 
### 使用方案
 
- <a href="https://cn.vuejs.org/index.html" target="_blank">vue</a> + <a href="http://lbsyun.baidu.com/index.php?title=jspopular3.0" target="_blank">百度地图</a> + <a href="http://api.map.baidu.com/library/DrawingManager/1.4/docs/symbols/BMapLib.DrawingManager.html" target="_blank">DrawingManager</a>[<a href="https://lbsyun.baidu.com/jsdemo/demo/f0_7.htm" target="_blank">绘图示例</a>] + <a href="https://dafrok.github.io/vue-baidu-map/" target="_blank">vue-baidu-map</a>



## Install
```shell
npm install cube-map-draw -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import CubeDrawMap from 'cube-map-draw'

Vue.use(CubeDrawMap)
```

### 疯狂搬砖中...


