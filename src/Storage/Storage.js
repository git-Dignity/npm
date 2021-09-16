/**
 * 浏览器存储相关storage工具函数
 *
 * @class Storage
 */
class Storage {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof Storage
   */
  start() {
    console.log("浏览器存储相关storage工具函数类 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof Storage
   */
  end() {
    console.log("浏览器存储相关storage工具函数工具类 end^_^_^_^_^_^_^_^_^_^")
  }

  // localStorage

  /**
   * @description localStorage 长期存储在浏览器
   * @description: 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
   * @description: JSON 不允许包含函数，JSON.stringify() 会删除 JavaScript 对象的函数，包括 key 和 value。
   * @description: JSON 不允许包含正则，JSON.stringify() 会删除 正则 对象，value，key保留。
   * @description localStorage 存贮
   *
   * @param {String} key 属性
   * @param {String} value 值
   * @return  { undefined }
   * @memberof Storage
   * @example
   * localStorageSet("id","asas")  // 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
   */
  localStorageSet(key, value) {
    if (typeof value === "object") value = JSON.stringify(value)
    localStorage.setItem(key, value)
  }

  /**
   * @description localStorage 获取
   *
   * @param {String} key 属性
   * @return {String}
   * @memberof Storage
   * @example
   * localStorageGet("id")    // "asas"
   */
  localStorageGet(key) {
    return localStorage.getItem(key)
  }

  /**
   * @description localStorage 移除
   *
   * @param {String} key 属性
   * @return {undefined}
   * @memberof Storage
   * @example
   * localStorageRemove("id")
   */
  localStorageRemove(key) {
    localStorage.removeItem(key)
  }

  /**
   * @description 存贮某一段时间失效
   *
   * @param {String} key 属性
   * @param {String} value 存贮值
   * @param {Number} expire 过期时间,毫秒数
   * @return {undefined}
   * @memberof Storage
   * @example
   * localStorageSetExpire("id","asas",1000)
   * console.log(localStorageGet("id"))
   *
   * setTimeout(function(){
   *      console.log(localStorageGet("id"))
   * },2000)
   */
  localStorageSetExpire(key, value, expire) {
    if (typeof value === "object") value = JSON.stringify(value)
    localStorage.setItem(key, value)
    setTimeout(() => {
      localStorage.removeItem(key)
    }, expire)
  }

  // sessionStorage

  /**
   * @description sessionStorage 浏览器关闭消失
   * @description sessionStorage 存贮
   *
   * @param {String} key
   * @param {String} value
   * @return {undefined}
   * @memberof Storage
   * @example
   * sessionStorageSet("id","asas")  // 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
   */
  sessionStorageSet(key, value) {
    if (typeof value === "object") value = JSON.stringify(value)
    sessionStorage.setItem(key, value)
  }

  /**
   * @description sessionStorage 获取
   *
   * @param {String} key 属性
   * @return {String}
   * @memberof Storage
   * @example
   * sessionStorageGet("id")    // "asas"
   */
  sessionStorageGet(key) {
    return sessionStorage.getItem(key)
  }

  /**
   * @description sessionStorage 删除
   *
   * @param {String} key 属性
   * @return {undefined}
   * @memberof Storage
   * @example
   * sessionStorageRemove("id")
   */
  sessionStorageRemove(key) {
    sessionStorage.removeItem(key)
  }

  /**
   * @description sessionStorage 存贮某一段时间失效
   *
   * @param {String} key 属性
   * @param {String} value 存贮值
   * @param {Number} expire 过期时间,毫秒数
   * @return {undefined}
   * @memberof Storage
   * @example
   * sessionStorageSetExpire("id","asas",1000)
   * console.log(sessionStorageGet("id"))
   *
   * setTimeout(function(){
   *      console.log(sessionStorageGet("id"))
   * },2000)
   */
  sessionStorageSetExpire(key, value, expire) {
    if (typeof value === "object") value = JSON.stringify(value)
    sessionStorage.setItem(key, value)
    setTimeout(() => {
      sessionStorage.removeItem(key)
    }, expire)
  }

  // cookie 存储在服务器  只能存4k

  /**
   * @description cookie 存储在服务器  只能存4k
   * @description cookie 存贮
   *
   * @param {String} key 属性
   * @param {String} value 值
   * @param {Number} expire 过期时间,单位天
   * @return {undefined}
   * @memberof Storage
   * @example
   * cookieSet ("id","asas",10000)
   */
  cookieSet(key, value, expire) {
    const d = new Date()
    d.setDate(d.getDate() + expire)
    document.cookie = `${key}=${value};expires=${d.toUTCString()}`
  }

  /**
   * @description cookie 获取
   *
   * @param {String} key 属性
   * @return {String}
   * @memberof Storage
   * @example
   * cookieGet("id")    // "asas"
   */
  cookieGet(key) {
    const cookieStr = unescape(document.cookie)
    const arr = cookieStr.split("; ")
    let cookieValue = ""
    for (let i = 0; i < arr.length; i++) {
      const temp = arr[i].split("=")
      if (temp[0] === key) {
        cookieValue = temp[1]
        break
      }
    }
    return cookieValue
  }

  /**
   * @description cookie 删除   key还在，val为空
   *
   * @param {String} key 属性
   * @return {undefined}
   * @memberof Storage
   * @example
   * cookieRemove("id")
   */
  cookieRemove(key) {
    document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
  }
}

export { Storage }
