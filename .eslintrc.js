module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  globals: {
    //为百度地图设置规则
    BMap: true,
    BMapGL: true,
    BMAP_NORMAL_MAP: true,
    BMAP_HYBRID_MAP: true,
    BMAP_ANCHOR_TOP_LEFT: true,
    BMAP_ANCHOR_TOP_RIGHT: true,

    BMAP_DRAWING_MARKER: true,
    BMAP_DRAWING_POLYLINE: true,
    BMAP_DRAWING_CIRCLE: true,
    BMAP_DRAWING_RECTANGLE: true,
    BMAP_DRAWING_POLYGON: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
