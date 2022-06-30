/**
 * 定时器延时器类
 *
 * @class TimerDelay
 */
class TimerDelay {
  /**
   * @description 打印开始点
   *
   * @memberof TimerDelay
   */
  start() {
    console.log("定时器延时器类TimerDelay start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof TimerDelay
   */
  end() {
    console.log("定时器延时器类TimerDelay end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description setInterval 用来实现循环定时调用 可能会存在一定的问题 能用 setTimeout 解决吗
   *
   * @description 实现思路：
   * @description 递归调用函数，使用setTimeout
   * @description 返回值是cancel，可调用清空定时器
   *
   * @description 用setTimeout实现setInterval
   *
   * @param {Function} fn 目标函数
   * @param {Number} delay 延迟时间
   * @return {Object} cancel
   * @memberof TimerDelay
   * @example
   * 每秒输出888，输出三次，第四秒的时候清空定时器
   * const { cancel } = timerDelay.mySetTimout(() => console.log(888), 1000)   // 888
     setTimeout(() => {
        cancel()    
     }, 4000)
   */
  mySetTimout(fn, delay) {
    let timer = null
    const interval = () => {
      fn()
      timer = setTimeout(interval, delay)
    }
    setTimeout(interval, delay)
    return {
      cancel: () => {
        clearTimeout(timer)
      },
    }
  }

  /**
   * @description 实现思路：
   * @description 使用setInterval之后，马上就clearInterval
   * 
   * @description 用setInterval实现setTimeout
   *
   * @param {Function} fn 目标函数
   * @param {Number} delay 延迟时间
   * @memberof TimerDelay
   * @example
   * timerDelay.mySetInterval(() => console.log(999), 1000)    // 999
   */
  mySetInterval(fn, delay) {
    const timer = setInterval(() => {
      fn()
      clearInterval(timer)
    }, delay)
  }
}

export default TimerDelay
