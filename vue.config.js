/*
 * @Author: shiliangL
 * @Date: 2020-11-21 22:00:44
 * @LastEditTime: 2020-11-21 22:22:55
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-baidu-map/vue.config.js
 */
const path = require('path')

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'src/main.js', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html' // 输出文件
    }
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    // @ 默认指向 src 目录
    // 新增一个 ~ 指向 packages
    config.resolve.alias.set('~', path.resolve('packages'))

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config.optimization.splitChunks({
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 100000,
            automaticNameDelimiter: '-',
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name (module) {
                  const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                  return `chunk.${packageName.replace('@', '')}`
                },
                priority: 10
              }
            }
          })
        }
      )
  }
}
