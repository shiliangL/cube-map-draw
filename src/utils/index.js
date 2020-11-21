/*
 * @Author: shiliangL
 * @Date: 2020-11-21 12:10:44
 * @LastEditTime: 2020-11-21 12:28:40
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-baidu-map/src/utils/index.js
 */
// 后往前合并
export function deepMerge (target, merged) {
  for (const key in merged) {
    // eslint-disable-next-line no-prototype-builtins
    if (merged.hasOwnProperty(key)) {
      target[key] = target[key] && target[key].toString() === '[object Object]' ? deepMerge(target[key], merged[key]) : target[key] = merged[key]
    }
    return target
  }
}

export function deepClone (source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
