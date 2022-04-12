/*
 * @Author: zemin zheng
 * @Date: 2022-04-12 10:57:09
 * @LastEditTime: 2022-04-12 11:04:33
 * @LastEditors: zemin zheng
 * @Description: 头部注释
 * @FilePath: \npm\src\test\Interview\SetTimeoutSetInterval.js
 */

import { SetTimeoutSetInterval } from "../../Interview"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let setTimeoutSetInterval = new SetTimeoutSetInterval()
  setTimeoutSetInterval.start()

  const myClear = setTimeoutSetInterval.mySetInterVal(
    () => {
      console.log("test")
    },
    1000,
    500
  )
  myClear() // 清除定时器

  setTimeoutSetInterval.end()
}
