/*
 * @Author: zemin zheng
 * @Date: 2021-09-15 16:40:43
 * @LastEditTime: 2022-03-17 11:31:03
 * @LastEditors: zemin zheng
 * @Description: 面试题算法系列 -- 测试文件
 * @FilePath: \npm\src\test\Algorithm\Interview.js
 */
import { Interview } from "../../Algorithm"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let interview = new Interview()
  interview.start()

  const arrMerge = interview.arrMerge()
  //   console.log(arrMerge);    // ["A1", "A2", "A", "B1", "B2", "B", "C1", "C2", "C", "D1", "D2", "D"]

  const obj12Month = interview.obj12Month()
  //   console.log(obj12Month)   // [222, 123, null, null, 888, null, null, null, null, null, null, null]

  const random10TwoDimensional = interview.random10TwoDimensional()
  //   console.log(random10TwoDimensional)   // [[2, 3, 4, 5], [10, 11], [20]]

  /**
   * @description 请实现一个 add 函数，满足以下功能
   * @description 先把全部参数arguments都拿到合成数组，再使用reduce相加
   *
   * @description https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/134
   *
   * @return {*}
   */
  function add() {
    let args = [].slice.call(arguments)
    console.log(args, "1111")
    let fn = function () {
      let fn_args = [].slice.call(arguments)
      console.log(fn_args, "22222")
      return add.apply(null, args.concat(fn_args))
    }

    fn.toString = function () {
      return args.reduce((a, b) => a + b)
    }
    return fn
  }

  //   console.log(add(1)(2)(3, 4))  // 10

  const rotate = interview.rotate([1, 2, 3, 4, 5, 6], 7)
  //   console.log(rotate) // [6, 1, 2, 3, 4, 5]

  interview.end()
}
