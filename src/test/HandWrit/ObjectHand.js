/*
 * @Author: zemin zheng
 * @Date: 2021-09-15 16:40:43
 * @LastEditTime: 2021-11-25 17:31:45
 * @LastEditors: Please set LastEditors
 * @Description: 手写系列 -- 对象篇 测试文件
 * @FilePath: \npm\src\test\HandWrit\JSHand.js
 */
import { ObjectHand } from "../../HandWrit"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let objectHand = new ObjectHand()
  objectHand.start()

  const obj = {
    name: "阿泽",
    age: 24,
    gender: "男",
  }

  // entries
  let entriesObj = Object.zm_entries(obj)
  console.log(entriesObj) // [ [ 'name', '阿泽' ], [ 'age', 24 ], [ 'gender', '男' ] ]

  objectHand.end()
}
