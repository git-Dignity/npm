/**
 * 网络类
 *
 * @class Internet
 */
class Internet {
  /**
   * @description 打印开始点
   *
   * @memberof Internet
   */
  start() {
    console.log("网络类Internet start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof Internet
   */
  end() {
    console.log("网络类Internet end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 经常有只需要请求一次，以防止用户重复点击行为导致的触发重复请求
   * @description 传递请求方法（执行后返回promise），返回一个新方法。连续触发时，只执行一次
   *
   * @description 实现思路：
   * @description 题目的愿意是阻止重复发送请求，firstFn执行的回调复用这一个请求的结果，那么实现就很简单啦！
   * @description 可以将请求的实例先存储起来，而成功和失败内部都可以感知到，进而将其重新置空，接受下一次请求
   *
   * @description 如何防止重复发送请求
   *
   * @param {Function} promiseFunction 请求接口的函数
   * @return {*}
   * @memberof Internet
   * @example
   * let count = 1
   * let promiseFunction = () =>
   *   new Promise((rs) =>
   *     setTimeout(() => {
   *       rs(count++)
   *     }, 1000)
   *   )
   * let firstFn = internet.firstPromise(promiseFunction)
   * firstFn().then(console.log) // 1
   * firstFn().then(console.log) // 1
   * firstFn().then(console.log) // 1
   * 
   * setTimeout(() => {
   *   firstFn().then(console.log) // 2
   *   firstFn().then(console.log) // 2
   *   firstFn().then(console.log) // 2
   * }, 3000)
   * 
   * 可以看到虽然我们调用了firstFn6次，但是实际请求只发生了两次（因为count只由1变成了2）
   */
  firstPromise(promiseFunction) {
    let p = null
    return function (...args) {
      // 请求的实例，已存在意味着正在请求中，直接返回实例，不触发新的请求
      return p
        ? p
        : // 否则发送请求，且在finally时将p置空，那么下一次请求可以重新发起
          (p = promiseFunction.apply(this, args).finally(() => (p = null)))
    }
  }
}

export default Internet
