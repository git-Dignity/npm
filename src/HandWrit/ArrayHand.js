/**
 * 手写系列 -- 数组篇 底层方法
 *
 * @class ArrayHand
 */
class ArrayHand {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof ArrayHand
   */
  start() {
    console.log("手写系列 -- 数组篇底层方法 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof ArrayHand
   */
  end() {
    console.log("手写系列 -- 数组篇底层方法 end^_^_^_^_^_^_^_^_^_^")
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
 * @memberof ArrayHand
 * @example
 * const players = [{ name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '保罗', num: 3 }]
 * players.zm_forEach((item, index, arr) => {
 *   console.log(item, index) 
 * })
 * 
 * // {name: '科比', num: 24} 0
 * // {name: '詹姆斯', num: 23} 1
 * // {name: '保罗', num: 3} 2
 */
Array.prototype.zm_forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}


/**
 * @description forEach、map的区别？
 * @description forEach对每一项进行遍历输出；而map对每一项遍历存进数组中，再返回数组
 * @description 一个没返回，一个返回数组
 * 
 * @description 实现思路：
 * @description 1. 接收传进函数
 * @description 2. 对this进行for循环，this谁调用我，我就指向谁。this就是调用的数组
 * @description 3. 拿到数组每一项，返回给callback三个参数（item：遍历项, index：遍历项的索引, arr：数组本身），保存在我们定义的数组中
 * @description 4. 等到对数组for循环结束后，返回数组
 *
 * @description 手写map
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ArrayHand
 * @example
 * const players = [{ name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '保罗', num: 3 }]
 * const mapArr = players.zm_map((item, index) =>{
 *   return item.num + 1
 * })
 * 
 * console.log(mapArr);  // [25, 24, 4]
 */
Array.prototype.zm_map = function (callback) {
    const res = []
    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i], i, this))
    }
    return res
}


/**
 * @description map、filter的区别？
 * @description forEach对每一项进行遍历输出；而map对每一项遍历存进数组中，再返回数组
 * @description 一个没返回，一个返回数组
 * 
 * @description 实现思路：
 * @description 1. 接收传进函数
 * @description 2. 对this进行for循环，this谁调用我，我就指向谁。this就是调用的数组
 * @description 3. 拿到数组每一项，传给callback函数进行过滤，过滤为true，即保存在我们定义的数组中
 * @description 4. 等到对数组for循环结束后，返回数组
 * @description 5. callback的三个参数（item：遍历项, index：遍历项的索引, arr：数组本身）
 *
 * @description 手写filter
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ArrayHand
 * @example
 * const players = [{ name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '保罗', num: 3 }]
 * const filterArr = players.zm_filter((item) => item.num >= 23)
 * 
 * console.log(filterArr) //  [ { name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '杜兰特', num: 35 }]
 */
Array.prototype.zm_filter = function (callback) {
    const res = []
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) && res.push(this[i])
    }
    return res
}





export default ArrayHand
