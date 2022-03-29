/**
 * 手写系列 -- Promise篇 底层方法
 * 你说你总忘记JS的方法，好，来一起手写，增加记忆
 * 
 * 可分成两个学习
 * 一部分：手写Promise（constructor、then）
 * 另一部分：手写all、race、addSettled、any
 *
 * @class PromiseHand
 */
class PromiseHand {
  constructor(executor) {
    this.status = 'pending' // 初始状态为等待
    this.value = null // 成功的值
    this.reason = null // 失败的原因
    this.onFulfilledCallbacks = [] // 成功的回调函数数组
    this.onRejectedCallbacks = [] // 失败的回调函数数组
    let resolve = value => {
      if (this.status === 'pending') {
        this.status = 'fulfilled'
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn()) // 调用成功的回调函数
      }
    }
    let reject = reason => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn()) // 调用失败的回调函数
      }
    };
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }

  }
  /**
   * @description 手写then，结合constructor
   *
   * @param {Function} onFulfilled 成功的回调函数
   * @param {Function} onRejected 失败的回调函数
   * @return {*} 
   * @memberof PromiseHand
   * @example
   * function p1() {
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
        return p2() // x instanceof PromiseHand 为 true
      })
      .then((ret) => {
        console.log(ret) // 2
      })
   */
  then(onFulfilled, onRejected) {
    // resolve, reject是constructor中的resolve、reject
    return new PromiseHand((resolve, reject) => {
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          const x = onFulfilled(this.value);
          // x instanceof PromiseHand 看他then中是不是存在Promise
          x instanceof PromiseHand ? x.then(resolve, reject) : resolve(x)
        })
      }
      if (this.status === 'rejected') {
        setTimeout(() => {
          const x = onRejected(this.reason)
          x instanceof PromiseHand ? x.then(resolve, reject) : resolve(x)
        })
      }
      if (this.status === 'pending') {
        this.onFulfilledCallbacks.push(() => { // 将成功的回调函数放入成功数组
          setTimeout(() => {
            const x = onFulfilled(this.value)
            x instanceof PromiseHand ? x.then(resolve, reject) : resolve(x)
          })
        })
        this.onRejectedCallbacks.push(() => { // 将失败的回调函数放入失败数组
          setTimeout(() => {
            const x = onRejected(this.reason)
            x instanceof PromiseHand ? x.then(resolve, reject) : resolve(x)
          })
        })
      }
    })
  }



  /**
   * @description 打印开始点
   *
   * @memberof PromiseHand
   */
  start() {
    console.log("手写系列 -- Promise篇底层方法 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof PromiseHand
   */
  end() {
    console.log("手写系列 -- Promise篇底层方法 end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description Promise.all？
   * @description Promise.all可以将多个Promise实例包装成一个新的Promise实例
   * @description 同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值
   *
   * @description 特别提醒
   * @description 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
   * @description 如果所有Promise都成功，则返回成功结果数组；如果有一个Promise失败，则返回这个失败结果
   *
   * @description 实现思路：
   * @description 1. 接收传进promise数组
   * @description 2. 将多个Promise实例包装成一个新的promise实例，return Promise实例
   * @description 3. 对promise数组参数进行循环遍历
   * @description 4. 先判断是不是Promise实例，若非Promise项，则此项当做成功；若是Promise项，则需要考虑成功then、失败catch情况
   * @description 5.一旦发现失败，立即返回reject，循环结束
   * @description 6. 若都成功，则then的结果传进我们定义方法addData，用来存储每次Promise项的结果
   * @description 7. 当遍历到最后一个的时候，循环结束，即resolve返回给外部
   *
   * @description 手写Promise.all
   *
   * @param {Promise} promises
   * @return {Array}
   * @memberof PromiseHand
   * @example
   * let promise1 = new Promise((resolve) => resolve(["what", "now", "marry"]))
   * let promise2 = new Promise((resolve) => resolve("笑"))
   *
   * let promise3 = new Promise((resolve, reject) => reject("哭"))
   * let promise4 = new Promise((resolve, reject) => reject("大哭"))
   *
   * // 成功
   * promiseHand.all([promise1, promise2]).then((res) => {
   *   console.log(res) // [ ["what", "now", "marry"],  "笑"]
   * })
   *
   * // 失败
   * promiseHand.all([promise1, promise2, promise3, promise4]).then((res) => {
   *   console.log("success", res)
   * })
   * .catch((e) => {
   *   console.log("fail", e)  // fail 哭
   * })
   */
  all(promises) {
    const result = []
    let count = 0
    return new Promise((resolve, reject) => {
      const addData = (index, value) => {
        result[index] = value
        count++

        if (count === promises.length) resolve(result)
      }

      promises.forEach((promise, index) => {
        if (promise instanceof Promise) {
          promise.then(
            (res) => {
              return addData(index, res)
            },
            (err) => reject(err)
          )
        } else {
          return addData(index, promise)
        }
      })
    })
  }

  /**
   * @description all、race？
   * @description all将全成功的返回一个数组，第一个失败的返回失败的值；而race是哪个结果获得快就返回哪个结果，不论成功、失败
   * @description Promse.race就是赛跑的意思，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
   *
   * @description 特别提醒
   * @description 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
   * @description 哪个Promise最快得到结果，就返回那个结果，无论成功失败
   *
   * @description 实现思路：
   * @description 1. 接收传进promise数组
   * @description 2. 将多个Promise实例包装成一个新的promise实例，return Promise实例
   * @description 3. 对promise数组参数进行循环遍历
   * @description 4. 先判断是不是Promise实例，若非Promise项，则此项当做成功；若是Promise项，则需要考虑成功then、失败catch情况
   * @description 5.一旦哪一个获得快，不论成功、失败，立即返回结果，循环结束
   *
   * @description 手写Promise.race
   *
   * @param {Promise} promises
   * @return {*}
   * @memberof PromiseHand
   * @example
   * let promise0 = new Promise((resolve) => {
   *   setTimeout(() => resolve(["时间很慢"]), 1)
   * })
   * let promise1 = new Promise((resolve) => resolve(["what", "now", "marry"]))
   * let promise2 = new Promise((resolve) => resolve("笑"))
   *
   * let promise3 = new Promise((resolve, reject) => reject("哭"))
   * let promise4 = new Promise((resolve, reject) => reject("大哭"))
   *
   * 我先执行的promise0，但却先输出promise1的值，原因是promise0加定时器了，先快就先返回谁
   * promiseHand.race([promise0, promise1, promise2, promise3, promise4]).then((res) => {
   *   console.log(res) // ["what", "now", "marry"]
   * })
   */
  race(promises) {
  }

  /**
   * @description all、allSettled？
   * @description all将全成功的返回一个数组，第一个失败的返回失败的值；
   * @description 而allSettled返回所有Promise的结果以及状态（fulfilled、rejected）的数组，不论成功、失败。
   * @description 相比之下，Promise.all() 更适合彼此相互依赖或者在其中任何一个reject时立即结束
   *
   * @description 特别提醒
   * @description 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
   * @description 把每一个Promise的结果以及状态，集合成数组，返回
   * @description 返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果
   * @description 当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个promise的结果时，通常使用它
   *
   * @description 实现思路：
   * @description 1. 接收传进promise数组
   * @description 2. 将多个Promise实例包装成一个新的promise实例，return Promise实例
   * @description 3. 对promise数组参数进行循环遍历
   * @description 4. 先判断是不是Promise实例，若非Promise项，则此项当做成功fulfilled；若是Promise项，则需要考虑成功then、失败catch情况
   * @description 5. 不管失败、成功，则then、err的结果传进我们定义方法addData，用来存储每次Promise项的结果、状态
   * @description 6. 当遍历到最后一个的时候，循环结束，即resolve返回给外部
   *
   * @description 手写Promise.addSettled
   *
   * @param {Promise} promises
   * @return {Array}
   * @memberof PromiseHand
   * @example
   * let promise0 = new Promise((resolve) => {
   *   setTimeout(() => resolve(["时间很慢"]), 1)
   * })
   * let promise1 = new Promise((resolve) => resolve(["what", "now", "marry"]))
   * let promise2 = new Promise((resolve) => resolve("笑"))
   *
   * let promise3 = new Promise((resolve, reject) => reject("哭"))
   * let promise4 = new Promise((resolve, reject) => reject("大哭"))
   *
   * promiseHand.allSettled([promise0, promise1, promise2, promise3, promise4]).then((res) => {
   *   console.log(res)
   *   // 输出
   *   [
   *     { status: "fulfilled", value: ["时间很慢"] },
   *     { status: "fulfilled", value: ["what", "now", "marry"] },
   *     { status: "fulfilled", value: "笑" },
   *     { status: "rejected", value: "哭" },
   *     { status: "rejected", value: "大哭" }
   *   ]
   *
   * })
   */
  allSettled(promises) {
    return new Promise((resolve, reject) => {
      const res = []
      let count = 0
      const addData = (status, value, i) => {
        res[i] = {
          status,
          value,
        }
        count++
        if (count === promises.length) {
          resolve(res)
        }
      }
      promises.forEach((promise, i) => {
        if (promise instanceof Promise) {
          promise.then(
            (res) => {
              addData("fulfilled", res, i)
            },
            (err) => {
              addData("rejected", err, i)
            }
          )
        } else {
          addData("fulfilled", promise, i)
        }
      })
    })
  }

  /**
   * @description all、any？
   * @description all将全成功的返回一个数组，第一个失败的返回失败的值；
   * @description 而any检查到有一个Promise成功的就返回这个成功的结果；若没一个成功，则返回一个失败的 promise 和AggregateError类型的实例。
   * @description 本质上，all、any功能相反的。
   * @description all是全成功就返回成功的数组；any是全失败就返回失败的数组。
   * @description all是第一个失败就返回失败的值；any是第一个成功就返回成功的数组。
   *
   * @description 特别提醒
   * @description 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
   * @description 如果有一个Promise成功，则返回这个成功结果
   * @description 如果所有Promise都失败，则报错
   * @description 注意！ Promise.any() 方法依然是实验性的，尚未被所有的浏览器完全支持。它当前处于 TC39 第四阶段草案（Stage 4）
   *
   * @description 实现思路：
   * @description 1. 接收传进promise数组
   * @description 2. 将多个Promise实例包装成一个新的promise实例，return Promise实例
   * @description 3. 对promise数组参数进行循环遍历
   * @description 4. 先判断是不是Promise实例，若非Promise项，则此项当做成功fulfilled；若是Promise项，则需要考虑成功then、失败catch情况
   * @description 5. 不管失败、成功，则then、err的结果传进我们定义方法addData，用来存储每次Promise项的结果、状态
   * @description 6. 当遍历到最后一个的时候，循环结束，即resolve返回给外部
   *
   * @description 手写Promise.any
   *
   * @param {Promise} promises
   * @return {*}
   * @memberof PromiseHand
   * @example
   * const pErr = new Promise((resolve, reject) => reject("总是失败"));
   * const pSlow = new Promise((resolve, reject) => setTimeout(resolve, 500, "最终完成"));
   * const pFast = new Promise((resolve, reject) => setTimeout(resolve, 100, "很快完成"));
   *
   * 有一个成功的，就返回那个成功的结果
   * promiseHand.any([pErr, pSlow, pFast]).then((value) => {
   *   console.log(value); // 很快完成  // 对于any，他的顺序是：pFast pSlow pErr
   * })
   *
   * 没一个成功，都失败，就返回失败的值
   * promiseHand.any([pErr]).catch((err) => {
   *   console.log(err); // Error: All promises were rejected at eval
   * })
   *
   *
   * 扩展
   * console.log(Promise.any); // undefined
   *
   * I want to use a library with Angular, which uses Promise.any. When calling a function there,
   * I get the error TypeError: Promise.any is not a function. The library has a React example,
   * which works for me in the same browser. Afaik, Promise.any is not finalized in the specification yet,
   * so it's not available in ES2020.
   * 翻译过来就是：
   * 当调用那里的函数时，我得到错误TypeError: Promise。Any不是函数。该库有一个React示例，在相同的浏览器中也适用于我。
   * Afaik,承诺。any在规范中还没有最终确定，所以它在ES2020中不可用。
   * https://stackoverflow.com/questions/67154515/promise-any-is-not-a-function
   */
  any(promises) {
    return new Promise((resolve, reject) => {
      let count = 0
      promises.forEach((promise) => {
        promise.then(
          (val) => {
            resolve(val)
          },
          (err) => {
            count++
            if (count === promises.length) {
              reject(new Error("All promises were rejected")) // new AggregateError()
            }
          }
        )
      })
    })
  }
}

export default PromiseHand
