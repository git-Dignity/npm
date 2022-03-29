/*
 * @Author: zemin zheng
 * @Date: 2021-09-15 16:40:43
 * @LastEditTime: 2022-03-17 11:31:03
 * @LastEditors: zemin zheng
 * @Description: 数组算法系列 -- 测试文件
 * @FilePath: \npm\src\test\Algorithm\ArrayAlgorithm.js
 */
import { ArrayAlgorithm } from "../../Algorithm"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let algorithm = new ArrayAlgorithm()
  algorithm.start()

  const bubbleSort = algorithm.bubbleSort([2, 3, 1, 5, 4])
  //   console.log(bubbleSort) // [1, 2, 3, 4, 5]

  algorithm.end()
}
