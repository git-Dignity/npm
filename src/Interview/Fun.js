/*
 * @Author: zemin zheng
 * @Date: 2022-04-12 09:58:24
 * @LastEditTime: 2022-04-12 10:02:29
 * @LastEditors: zemin zheng
 * @Description: 面试 -- 函数类
 * @FilePath: \npm\src\Interview\Fun.js
 */

class Fun {
  /**
   * @description 打印开始点
   *
   * @memberof Fun
   */
  start() {
    console.log("面试 -- 函数类Fun start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof Fun
   */
  end() {
    console.log("面试 -- 函数类Fun end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 实现思路：
   * @description 1. 接收funArr参数获取的传入的n个函数
   * @description 2. 内部返回函数并接收args，因为调用需手动执行并传入参数
   * @description 3. 对n个函数进行for循环遍历
   * @description 4. 执行每一个函数并将args传入参数，赋值给result变量
   * @description 5. 接下来每次循环，都将上一次的值作为参数传入给函数执行
   * @description 6. 循环结束，即返回result作为最终结果
   *
   * @description for遍历执行（方法一）
   * 
   * @description https://q.shanyue.tech/fe/code/675.html
   * @description 实现一个 composeLeft/flow(从左向右) 函数，进行函数合成(类似于 lodash.flow)
   *
   * @param {Function} funArr 函数
   * @return {Number} 
   * @memberof Fun
   * @example
   * const add10 = (x) => x + 10
     const mul10 = (x) => x * 10
     const add100 = (x) => x + 100
     const lodashFlow1 = fun.lodashFlow1(add10, mul10, add100)(10)   // (10 + 10) * 10 + 100 = 300
     console.log(lodashFlow1)   // 300
   */
  lodashFlow1(...funArr) {
    return function (...args) {
      let result = args
      for (let i = 0; i < funArr.length; i++) {
        if (typeof funArr[i] === "function") {
          result = [funArr[i](...result)]
        }
      }
      return result.length === 1 ? result[0] : result
    }
  }

  /**
   * @description 实现思路
   * @description 1. 创建一个函数。 返回的结果是调用提供函数的结果
   * @description 2. this 会绑定到创建函数。 每一个连续调用
   * @description 3. 传入的参数都是前一个函数返回的结果
   * 
   * @description 可以用reduce代替for遍历（ES5的arguments接收参数）（方法二）
   *
   * @param {Function|Function[]} funcs 要调用的函数
   * @return {Number} 
   * @memberof Fun
   * @example
   * const add10 = (x) => x + 10
     const mul10 = (x) => x * 10
     const add100 = (x) => x + 100
     const lodashFlow2 = fun.lodashFlow2([add10, mul10, add100])(10)   // (10 + 10) * 10 + 100 = 300
     console.log(lodashFlow2)   // 300
   */
  lodashFlow2(funcs) {
    if (!Array.isArray(funcs)) {
      funcs = [funcs]
    }
    const context = this
    return function () {
      let args = [].slice.call(arguments, 0) // 获取到调用函数的参数
      return funcs.reduce((acc, func) => {
        acc = Array.isArray(acc) ? acc : [acc] // 因为apply接收的是数组
        return func.apply(context, acc)
      }, args)
    }
  }

  /**
   * @description 可以用reduce代替for遍历（ES6的扩展运算符接收参数）（方法三）
   *
   * @param {Function} fns 函数
   * @return {Number} 
   * @memberof Fun
   * @example
   * const add10 = (x) => x + 10
     const mul10 = (x) => x * 10
     const add100 = (x) => x + 100
     const lodashFlow3 = fun.lodashFlow3(add10, mul10, add100)(10)   // (10 + 10) * 10 + 100 = 300
     console.log(lodashFlow3)   // 300
   */
  lodashFlow3(...fns) {
    return fns.reduce(
      (f, g) =>
        (...args) =>
          g(f(...args))
    )
  }
}

export default Fun
