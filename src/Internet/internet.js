import axios from "axios"

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
   * @description apply会帮我们执行的
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

  /**
   * @description 思路：
   * @description 利用while，每次执行多少个请求，根据limit参数决定循环次数
   * @description while内部调用axios，通过每次都会走finally回调，等到执行到最后一个请求的时候才resolve返回结果集
   * @description 否则，继续执行start函数
   * @description 因为每次请求都是拿数组的第一个请求，之后就删除掉这个请求，不用再新建值来记录当前取到第几个数组了
   * 
   * @description 10个常见的前端手写功能，你全都会吗？（https://juejin.cn/post/7031322059414175774#heading-6）
   * 
   * @description 异步控制并发数
   *
   * @param {*} [urls=[]] 请求列表
   * @param {number} [limit=3]  一次执行多少个请求
   * @return {Array} 
   * @memberof Internet
   * @example
   * limitRequest(
   * [
        "http://zhengzemin.cn:3333/agentEvent/getAll?current=1&size=9999&schedule=0",
        "http://zhengzemin.cn:3333/itKnowledge/getAll",
        "http://zhengzemin.cn:3333/transactions",
        "http://zhengzemin.cn:3333/agentEvent/getAll?current=1&size=9999&schedule=0",
      ],
      1
    )
    .then((res) => {
      console.log(res)  // 返回全部请求的res
    })

   */
  limitRequest(urls = [], limit = 3) {
    return new Promise((resolve, reject) => {
      const len = urls.length
      let count = 0
      let result = []

      // 同时启动limit个任务
      while (limit > 0) {
        start()
        limit -= 1
      }

      function start() {
        const url = urls.shift() // 从数组中拿取第一个任务
        if (url) {
          axios
            .get(url)
            .then((res) => {
              console.log(res)
              result.push(res)
            })
            .catch((err) => {
              console.log(err)
              result.push(err)
            })
            .finally(() => {
              if (count == len - 1) {
                // 最后一个任务完成
                resolve(result)
              } else {
                // 完成之后，启动下一个任务
                count++
                start()
              }
            })
        }
      }
    })
  }

  /**
   * @description 思路：
   * @description 1. 使用XMLHttpRequest实例化对象xhr
   * @description 2. 调open方法
   * @description 3. 调onreadystatechange方法监听请求回来的数据，只有当readyState为4才是成功的状态，可调回调函数fn
   * @description 4. 最后一步发送send方法
   * @description 注意的一点是：gei、post请求不同的点是，post请求要设置头部setRequestHeader、send(data)的时候要发送data
   * 
   * @description 实现原生的AJAX请求
   *
   * @return {*} 
   * @memberof Internet
   * @example
   * internet.ajax().get("http://zhengzemin.cn:3333/transactions", (res) => {
   *   console.log(res)  // { "code": 20000, "data": {} }
   * })
   */
  ajax() {
    return {
      get(url, fn) {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", url, true) // 第三个参数异步与否
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            fn(xhr.responseText)
          }
        }
        xhr.send()
      },
      post(url, data, fn) {
        const xhr = new XMLHttpRequest()
        xhr.open("POST", url, true)
        xhr.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        )
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            fn(xhr.responseText)
          }
        }
        xhr.send(data)
      },
    }
  }
}


export default Internet
