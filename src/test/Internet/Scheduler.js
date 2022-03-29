/*
 * @Author: your name
 * @Date: 2021-09-03 10:55:55
 * @LastEditTime: 2021-09-03 10:57:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \npm\src\test\Internet\Internet.js
 */
import { Scheduler } from "../../Internet"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let scheduler = new Scheduler()
  scheduler.start()

  const timeout = (time) =>
    new Promise((resolve) => {
      setTimeout(resolve, time)
    })

  const addTask = (time, order) => {
    scheduler.add(() => timeout(time).then(() => console.log(order)))
  }

  addTask(1000, "1")
  addTask(500, "2")
  addTask(300, "3")
  addTask(400, "4")

  // output：2 3 1 4
  // 一开始，1，2两个任务进入队列。
  // 500ms 时，2完成，输出2，任务3入队。
  // 800ms 时，3完成，输出3，任务4入队。
  // 1000ms 时，1完成，输出1。

  scheduler.end()
}
