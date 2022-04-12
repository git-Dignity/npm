/*
 * @Author: zemin zheng
 * @Date: 2022-04-12 10:01:42
 * @LastEditTime: 2022-04-12 10:03:13
 * @LastEditors: zemin zheng
 * @Description: 面试 -- 数值类 -- 测试文件
 * @FilePath: \npm\src\test\Interview\Number.js
 */
 
import { Number } from "../../Interview"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let number = new Number()
  number.start()
  // console.log(arrayTool.inArray(2,[1,2,3,4]))   // 1

  number.end()
}
