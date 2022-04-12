/*
 * @Author: zemin zheng
 * @Date: 2022-04-12 11:12:48
 * @LastEditTime: 2022-04-12 11:36:58
 * @LastEditors: zemin zheng
 * @Description: 面试 -- 数组类 -- 测试文件
 * @FilePath: \npm\src\test\Interview\Array.js
 */

import { Array } from "../../Interview"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let array = new Array()
  array.start()

  const mergeSort1 = array.mergeSort([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 2, 3],
    [4, 5, 6],
  ])
  // console.log(mergeSort1) // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9]

  const mergeSort2 = array.mergeSort([
    [1, 4, 6],
    [7, 8, 10],
    [2, 6, 9],
    [3, 7, 13],
    [1, 5, 12],
  ])
  // console.log(mergeSort2) //  [1, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10, 12, 13]

  array.end()
}
