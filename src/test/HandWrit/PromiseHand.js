/*
 * @Author: zemin zheng
 * @Date: 2021-09-15 16:40:43
 * @LastEditTime: 2021-11-25 17:31:45
 * @LastEditors: Please set LastEditors
 * @Description: 手写系列 -- Promise篇 测试文件
 * @FilePath: \npm\src\test\HandWrit\PromiseHand.js
 */
import { PromiseHand } from "../../HandWrit"

export default (isLog, isLog1) => {
  if (!isLog) {
    return
  }

  let promiseHand = new PromiseHand()
  promiseHand.start()

  // 这是Promise手写

  // 测试
  function p1() {
    return new PromiseHand((resolve, reject) => {
      setTimeout(resolve, 1000, 1)
    })
  }
  function p2() {
    return new PromiseHand((resolve, reject) => {
      setTimeout(resolve, 1000, 2)
    })
  }
  p1()
    .then((res) => {
      console.log(res) // 1
      return p2()
    })
    .then((ret) => {
      console.log(ret) // 2
    })

  // end

  // 下面是promise的方法
  if (!isLog1) {
    return
  }

  console.log("友情提示：因为是异步，所以可能比较慢输出打印")

  let promise0 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(["时间很慢"])
    }, 1)
  })
  let promise1 = new Promise((resolve) => resolve(["what", "now", "marry"]))
  let promise2 = new Promise((resolve) => resolve("笑"))

  let promise3 = new Promise((resolve, reject) => reject("哭"))
  let promise4 = new Promise((resolve, reject) => reject("大哭"))

  // all
  // 成功
  promiseHand.all([promise1, promise2]).then((res) => {
    // console.log(res)    // [ ["what", "now", "marry"],  "笑"]
  })
  // 失败
  promiseHand
    .all([promise1, promise2, promise3, promise4])
    .then((res) => {
      console.log("success", res)
    })
    .catch((e) => {
      // console.log("fail", e)  // fail 哭
    })

  // race
  promiseHand
    .race([promise0, promise1, promise2, promise3, promise4])
    .then((res) => {
      //   console.log(res) // ["what", "now", "marry"]  我先执行的promise0，但却先输出promise1的值，原因是promise0加定时器了，先快就先返回谁
    })

  // allSettled
  promiseHand
    .allSettled([promise0, promise1, promise2, promise3, promise4])
    .then((res) => {
      //   console.log(res)
      /* 
        [
            { status: "fulfilled", value: ["时间很慢"] },
            { status: "fulfilled", value: ["what", "now", "marry"] },
            { status: "fulfilled", value: "笑" },
            { status: "rejected", value: "哭" },
            { status: "rejected", value: "大哭" },
        ]
      */
    })

  // any
  const pErr = new Promise((resolve, reject) => reject("总是失败"))
  const pSlow = new Promise((resolve, reject) =>
    setTimeout(resolve, 500, "最终完成")
  )
  const pFast = new Promise((resolve, reject) =>
    setTimeout(resolve, 100, "很快完成")
  )

  promiseHand.any([pErr, pSlow, pFast]).then((value) => {
    // console.log(value); // 很快完成
    // 对于any，他的顺序是：pFast pSlow pErr
  })

  promiseHand.any([pErr]).catch((err) => {
    // console.log(err) // Error: All promises were rejected at eval
  })

  // console.log(Promise.any); // undefined
  /*
      I want to use a library with Angular, which uses Promise.any. When calling a function there, I get the error TypeError: Promise.any is not a function. The library has a React example, which works for me in the same browser. Afaik, Promise.any is not finalized in the specification yet, so it's not available in ES2020.
    */

  /* translate
      当调用那里的函数时，我得到错误TypeError: Promise。Any不是函数。该库有一个React示例，在相同的浏览器中也适用于我。
      Afaik,承诺。any在规范中还没有最终确定，所以它在ES2020中不可用。
    */

  promiseHand.end()
}
