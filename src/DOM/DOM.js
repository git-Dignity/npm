/**
 * DOM类
 *
 * @class Dom
 */
class Dom {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof Dom
   */
  start() {
    console.log("DOM start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof Dom
   */
  end() {
    console.log("DOM end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @decsription 数组转元素列表
   *
   * @param {Array} arr 目标数组 [元素内容]
   * @param {String} label 标签类型（p、list、div...）
   * @param {String} listID 添加到id为listID元素下
   * @memberof Dom
   * @example
   * arrayToHtmlList(['item 1', 'item 2'], 'li', 'app')  // 在id为app元素下添加两个li列表
   * arrayToHtmlList(['item 1', 'item 2'], 'p', 'app')  // 在id为app元素下添加两个p列表
   */
  arrayToHtmlList(arr, label, listID) {
    ;((el) => (
      (el = document.querySelector("#" + listID)),
      (el.innerHTML += arr
        .map((item) => `<${label}>${item}</${label}>`)
        .join(""))
    ))()
  }

  /**
   * @description 如何隐藏所有指定的元素
   * @param {HTMLElement} el
   * @return { * }
   * @memberof Dom
   * @example
   * hide(document.querySelectorAll('p'))
   */
  hide(el) {
    Array.from(el).forEach((e) => (e.style.display = "none"))
    // [...el].forEach(e => (e.style.display = 'none'));
  }

  /**
   * @description 返回指定元素的生效样式
   *
   * @param {HTMLElement} el
   * @param {String} ruleName css属性。如：font-size
   * @return {String}
   * @memberof Dom
   * @example
   * getStyle(document.querySelector('p'), 'font-size');    // 16px
   */
  getStyle(el, ruleName) {
    return getComputedStyle(el)[ruleName]
  }

  /**
   * @description 在指定元素之 前 / 后 插入新元素
   *
   * @param {HTMLElement} el 指定元素
   * @param {String} htmlString html标签
   * @param {string} [bORa='b'] 选择前后插入 b：之前beforebegin；a：之后afterend
   * @return {*} 
   * @memberof Dom
   * @example
   * insertAfter(document.getElementById('msg'), '<p>我是insertAfter方法插入before的</p>', 'b');   // 在msg为id的元素，之前添加p标签
   * insertAfter(document.getElementById('msg'), '<p>我是insertAfter方法插入after的</p>', 'a');   // 在msg为id的元素，之后添加p标签
   */
  insertAfter(el, htmlString, bORa = 'b') {
    const type = bORa ==='b' ? 'beforebegin' : 'afterend'
    return el.insertAdjacentHTML(type, htmlString)
  }
}

export default Dom
