/*
 * @Author: zemin zheng
 * @Date: 2022-04-12 10:01:42
 * @LastEditTime: 2022-04-12 10:03:13
 * @LastEditors: zemin zheng
 * @Description: 面试 -- 网络类 -- 测试文件
 * @FilePath: \npm\src\test\Interview\fun.js
 */

import { Fun } from "../../Interview"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let fun = new Fun()
  fun.start()

  const add10 = (x) => x + 10
  const mul10 = (x) => x * 10
  const add100 = (x) => x + 100
  const lodashFlow1 = fun.lodashFlow1(add10, mul10, add100)(10) // (10 + 10) * 10 + 100 = 300
  //   console.log(lodashFlow1)   // 300

  const lodashFlow2 = fun.lodashFlow2([add10, mul10, add100])(10) // (10 + 10) * 10 + 100 = 300
  //   console.log(lodashFlow2)   // 300

  const lodashFlow3 = fun.lodashFlow3(add10, mul10, add100)(10) // (10 + 10) * 10 + 100 = 300
  //   console.log(lodashFlow3)   // 300

  fun.end()
}
