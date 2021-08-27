/*
 * @Author: your name
 * @Date: 2021-08-26 18:30:42
 * @LastEditTime: 2021-08-27 15:32:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \npm\src\NumberVal\NumberVal.js
 */
/**
 * 数值计算类
 *
 * @class NumberVal
 */
class NumberVal {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof NumberVal
   */
  start() {
    console.warn("NumberVal start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof NumberVal
   */
  end() {
    console.log("NumberVal end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 平均数
   *
   * @param {} nums 多个参数 （1, 2, 3）
   * @return {Number} 平均数
   * @memberof NumberVal
   * @example
   * average(...[1, 2, 3])  // 2
   * average(1, 2, 3)  // 2
   */
  average(...nums) {
    return nums.reduce((acc, val) => acc + val, 0) / nums.length
  }

  /**
   * @description 思路：
   * @description 1. fn如果是函数，通过map，即可拿到对象中的属性，再通过reduce将map循环的值累加
   * @description 2. fn如果是字符串，通过map的参数val，拿到每一个对象，对象[fn]可拿到对应的值(fn此时是字符串)，再通过reduce将map循环的值累加
   *
   * @description 数组对象属性平均数
   *
   * @param {Array} arr 目标数组
   * @param {*} fn 可以是函数、也可以是数组中对象的属性名
   * @return {Number}  平均数
   * @memberof NumberVal
   * @example
   * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n)  // 5
   * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')  // 5
   */
  averageBy(arr, fn) {
    return (
      arr
        .map(typeof fn === "function" ? fn : (val) => val[fn])
        .reduce((acc, val) => acc + val, 0) / arr.length
    )
  }

}

export default NumberVal
