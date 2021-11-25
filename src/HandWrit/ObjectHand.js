/**
 * 手写系列 -- 对象篇 底层方法
 *
 * @class ObjectHand
 */
class ObjectHand {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof ObjectHand
   */
  start() {
    console.log("手写系列 -- 对象篇底层方法 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof ObjectHand
   */
  end() {
    console.log("手写系列 -- 对象篇底层方法 end^_^_^_^_^_^_^_^_^_^")
  }
}

/**
 * @description 实现思路：
 * @description 1. 接收传进函数
 * @description 2. 对this进行for循环，this谁调用我，我就指向谁。this就是调用的数组
 * @description 3. 拿到数组每一项，传回去给callback
 * @description 4. 返回给callback三个参数（item：遍历项, index：遍历项的索引, arr：数组本身）
 *
 * @description 手写forEach
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ObjectHand
 * @example
 * const players = [{ name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '保罗', num: 3 }]
 * players.zm_forEach((item, index, arr) => {
 *   console.log(item, index)
 * })
 *
 * {name: '科比', num: 24} 0
 * {name: '詹姆斯', num: 23} 1
 * {name: '保罗', num: 3} 2
 */
Array.prototype.zm_forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

// 用处：将对象转成键值对数组


/**
 * @description 实现思路：
 * @description 1. 接收传进对象obj
 * @description 2. 循环对象，利用forin对obj循环
 * @description 3. 拿到数组每一项，传回去给callback
 * @description 4. 返回给callback三个参数（item：遍历项, index：遍历项的索引, arr：数组本身）
 *
 * @description 手写forEach
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ObjectHand
 * @example
 * xx
 */
Object.prototype.zm_entries = function (obj) {
  const res = []
  for (let key in obj) {
    obj.hasOwnProperty(key) && res.push([key, obj[key]])
  }
  return res
}

export default ObjectHand
