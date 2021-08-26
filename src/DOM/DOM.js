/**
 * DOM类
 *
 * @class Dom
 */
class Dom {
  constructor() {

  }

  /**
   * @description 打印开始点
   *
   * @memberof Dom
   */
  start(){
    console.log('DOM start^_^_^_^_^_^_^_^_^_^');
  }

  /**
   * @description 打印结束点
   *
   * @memberof Dom
   */
  end(){
    console.log('DOM end^_^_^_^_^_^_^_^_^_^');
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
}

export default Dom
