/*
 * @Author: your name
 * @Date: 2021-09-03 10:55:55
 * @LastEditTime: 2021-09-03 10:57:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \npm\src\test\Internet\Internet.js
 */
import { Internet } from "../../Internet"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let internet = new Internet()
  internet.start()

  // firstPromise
  let count = 1
  let promiseFunction = () =>
    new Promise((rs) =>
      setTimeout(() => {
        rs(count++)
      }, 1000)
    )
  let firstFn = internet.firstPromise(promiseFunction)
  // firstFn().then(console.log) // 1
  // firstFn().then(console.log) // 1
  // firstFn().then(console.log) // 1

  setTimeout(() => {
    // firstFn().then(console.log) // 2
    // firstFn().then(console.log) // 2
    // firstFn().then(console.log) // 2
  }, 3000)

  // 可以看到虽然我们调用了firstFn6次，但是实际请求只发生了两次（因为count只由1变成了2）

  // limitRequest
  
  // internet
  //   .limitRequest(
  //     [
  //       "http://zhengzemin.cn:3333/agentEvent/getAll?current=1&size=9999&schedule=0",
  //       "http://zhengzemin.cn:3333/itKnowledge/getAll",
  //       "http://zhengzemin.cn:3333/transactions",
  //       "http://zhengzemin.cn:3333/agentEvent/getAll?current=1&size=9999&schedule=0",
  //     ],
  //     1
  //   )
  //   .then((res) => {
  //     console.log(res) // 返回全部请求的res
  //   })

  // 前面会不断输出，因为limitRequest函数内部在then打印了res，方便看清逻辑

  internet.end()
}
