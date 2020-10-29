
/*
 * 使用方法
 * import { set , get } from './path/name/global_data'

   set('test', 1)

   get('test')

 * @type {{}}
 */
let globalData = {}

export function set (key, val) {
  globalData[key] = val
}

export function get (key) {
  return globalData[key] || false
}
