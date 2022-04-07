/*
 * @Author: your name
 * @Date: 2021-09-03 10:55:55
 * @LastEditTime: 2022-03-31 14:52:06
 * @LastEditors: zemin zheng
 * @Description: 网络 -- 测试文件
 * @FilePath: \npm\src\test\TimerDelay\TimerDelay.js
 */
import { TimerDelay } from "../../Internet"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let timerDelay = new TimerDelay()
  timerDelay.start()

  // mySetTimout
  // 每秒输出888，输出三次，第四秒的时候清空定时器
  //   const { cancel } = timerDelay.mySetTimout(() => console.log(888), 1000)   // 888
  //   setTimeout(() => {
  //     cancel()
  //   }, 4000)

  //   mySetInterval
  //   timerDelay.mySetInterval(() => console.log(999), 1000)    // 999

  timerDelay.end()
}
