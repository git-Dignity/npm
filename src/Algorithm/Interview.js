/*
 * @Author: zemin zheng
 * @Date: 2022-03-30 14:33:30
 * @LastEditTime: 2022-04-12 11:50:31
 * @LastEditors: zemin zheng
 * @Description: 算法 -- 面试篇
 * @FilePath: \npm\src\Algorithm\Interview.js
 */


class Interview {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof Interview
   */
  start() {
    console.log("面试题算法 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof Interview
   */
  end() {
    console.log("面试题算法 end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 题目：请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]
   * @description 解法：其实利用map给a2加上一个标识，后面好切割；
   * @description 再利用扩展运算合并数组，再进行map遍历，删除刚刚加的3标识，即可
   *
   * @description https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/39
   *
   * @return {Array}
   * @memberof Interview
   * @example
   * arrMerge()
   * ["A1", "A2", "A", "B1", "B2", "B", "C1", "C2", "C", "D1", "D2", "D"]
   */
  arrMerge() {
    let a1 = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"]
    let a2 = ["A", "B", "C", "D"].map((item) => {
      return item + 3
    })

    let a3 = [...a1, ...a2].sort().map((item) => {
      if (item.includes("3")) {
        return item.split("")[0]
      }
      return item
    })
    return a3
  }

  /**
   * @description 题目：某公司 1 到 12 月份的销售额存在一个对象里面
   * @description 输出：[222, 123, null, null, 888, null, null, null, null, null, null, null]
   *
   * @description Array.from({ length: 12 })，可生成12个undefined的一维数组
   * @description https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/96
   *
   * @return {*}
   * @memberof Interview
   */
  obj12Month() {
    let obj = { 1: 222, 2: 123, 5: 888 }
    const result = Array.from({ length: 12 }).map(
      (_, index) => obj[index + 1] || null
    )
    return result
  }

  /**
   * @description 题目：随机生成一个长度为 10 的整数类型的数组
   * @description 例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]
   *
   * @description 解题：首先我们先利用Array.from创建10个undefined一维数组；
   * @description 定义一个随机数方法getRandomIntInclusive，给Array.from赋值
   * @description 排序去重之后，我们定义对象obj，遍历initArr拿到每一个项，除10，会得到0-9的数组作为key，这样一个hash的对象就可以了
   * @description 最后，对象转数组，返回即可
   *
   * @description https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/113
   *
   * @return {*}
   * @memberof Interview
   * interview.random10TwoDimensional()
   * [[2, 3, 4, 5], [10, 11], [20]]
   */
  random10TwoDimensional() {
    // 得到一个两数之间的随机整数，包括两个数在内
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
    }
    // 随机生成10个整数数组, 排序, 去重
    let initArr = Array.from({ length: 10 }, (v) => {
      return getRandomIntInclusive(0, 99)
    })

    initArr.sort((a, b) => {
      return a - b
    })
    initArr = [...new Set(initArr)]

    // 放入hash表
    let obj = {}
    initArr.map((i) => {
      const intNum = Math.floor(i / 10)
      if (!obj[intNum]) obj[intNum] = []
      obj[intNum].push(i)
    })

    // 输出结果
    const resArr = []
    for (let i in obj) {
      resArr.push(obj[i])
    }
    return resArr
  }


  /**
   * @description 题目：给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数
   * @description 思路：因为步数有可能大于数组长度，所以要先取余
   * @description 利用slice取-k后的值，再拼接k前面的值，即可
   * 
   * @description https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/126
   *
   * @param {Array} arr 目标数组
   * @param {Number} k 步数
   * @return {*} 
   * @memberof Interview
   * @example
   * rotate([1, 2, 3, 4, 5, 6], 7) 
   * [6, 1, 2, 3, 4, 5]
   */
  rotate(arr, k) {
    const len = arr.length
    const step = k % len
    return arr.slice(-step).concat(arr.slice(0, len - step))
  }
}

export default Interview
