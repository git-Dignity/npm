/*
 * @Author: zemin zheng
 * @Date: 2021-09-15 16:40:43
 * @LastEditTime: 2022-04-12 16:24:28
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
    // console.log(combinationNewStr) // a;s;d;1-3;5-6;h2;9;12-15;f;g

  //   twoSum
  const twoSum = algorithm.twoSum([3, 2, 4], 6)
  //   console.log(twoSum) // [1, 2]

  const twoSum1 = algorithm.twoSum([2, 7, 11, 15], 9)
  //   console.log(twoSum1) // [0, 1]

  const twoSum2 = algorithm.twoSum([3, 3], 6)
  //   console.log(twoSum2) // [0, 1]

  const twoSum3 = algorithm.twoSum1([2, 7, 11, 15], 9)
  // console.log(twoSum3) // [0, 1]

  const twoSum4 = algorithm.twoSum1([2, 77, 7, 11, 15], 9)
  // console.log(twoSum4) // [0, 2]

  //   twoSum end

  // isValid
  const isValid = algorithm.isValid("{[()]}")
  // console.log(isValid);  // true

  const isValid1 = algorithm.isValid("{[()]}}")
  // console.log(isValid1); // false

  const isValid2 = algorithm.isValid1("{[()]}")
  // console.log(isValid2) // true

  const isValid3 = algorithm.isValid1("{[(])}")
  // console.log(isValid3) // false

  


  // isValid end

  // arrayToTree start
  let arr = [
    { id: 1, name: "部门1", pid: 0 },
    { id: 2, name: "部门2", pid: 1 },
    { id: 3, name: "部门3", pid: 1 },
    { id: 4, name: "部门4", pid: 3 },
    { id: 5, name: "部门5", pid: 10 },
  ]
  let result = []
  const arrayToTree = algorithm.arrayToTree(arr, result, 0)
  // console.log(arrayToTree)


  const arrayToTree1 = algorithm.arrayToTree1(arr)
  // console.log(arrayToTree1)

  const arrayToTree2 = algorithm.arrayToTree2(arr)
  // console.log(arrayToTree2)
  // 输出
  // [
  //   {
  //       "id": 1,
  //       "name": "部门1",
  //       "pid": 0,
  //       "children": [
  //           {
  //               "id": 2,
  //               "name": "部门2",
  //               "pid": 1,
  //               "children": []
  //           },
  //           {
  //               "id": 3,
  //               "name": "部门3",
  //               "pid": 1,
  //               "children": [
  //                   // 结果 ,,,
  //               ]
  //           }
  //       ]
  //   }
  // ]

  

  const fib1 = algorithm.fib1(6)
  // console.log(fib1); // 8

  const fib2 = algorithm.fib2(6)
  // console.log(fib2); // 8

  const fib3 = algorithm.fib3(6)
  // console.log(fib3); // 8

  const fib4 = algorithm.fib4(6)
  // console.log(fib4); // 8


  

  // arrayToTree end 

  algorithm.end()
}
