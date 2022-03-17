/*
 * @Author: zemin zheng
 * @Date: 2021-09-15 16:40:43
 * @LastEditTime: 2022-03-16 19:13:58
 * @LastEditors: zemin zheng
 * @Description: 算法系列 -- 测试文件
 * @FilePath: \npm\src\test\Algorithm\Algorithm.js
 */
import { Algorithm } from "../../Algorithm"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let algorithm = new Algorithm()
  algorithm.start()

  const combinationNewStr = algorithm.combinationNewStr([
    "a",
    "s",
    "d",
    "1",
    "2",
    "3",
    "5",
    "6",
    "h2",
    "9",
    "12",
    "13",
    "14",
    "15",
    "f",
    "g",
  ])
  //   console.log(combinationNewStr) // a;s;d;1-3;5-6;h2;9;12-15;f;g

  //   twoSum
  const twoSum = algorithm.twoSum([3, 2, 4], 6)
  //   console.log(twoSum) // [1, 2]

  const twoSum1 = algorithm.twoSum([2, 7, 11, 15], 9)
  //   console.log(twoSum1) // [0, 1]

  const twoSum2 = algorithm.twoSum([3, 3], 6)
  //   console.log(twoSum2) // [0, 1]

  const twoSum3 = algorithm.twoSum1([2, 7, 11, 15], 9)
  console.log(twoSum3) // [0, 1]

  //   twoSum end

  algorithm.end()
}
