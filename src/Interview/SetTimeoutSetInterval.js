/*
 * @Author: zemin zheng
 * @Date: 2022-04-12 10:54:37
 * @LastEditTime: 2022-04-12 11:05:20
 * @LastEditors: zemin zheng
 * @Description: 面试 -- 定时器延时器类
 */
class SetTimeoutSetInterval {
    /**
     * @description 打印开始点
     *
     * @memberof SetTimeoutSetInterval
     */
    start() {
      console.log("面试 -- 定时器延时器类SetTimeoutSetInterval start^_^_^_^_^_^_^_^_^_^")
    }
  
    /**
     * @description 打印结束点
     *
     * @memberof SetTimeoutSetInterval
     */
    end() {
      console.log("面试 -- 定时器延时器类SetTimeoutSetInterval end^_^_^_^_^_^_^_^_^_^")
    }

    /**
     * @description 题目：
     * @description 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal
     * @description 比如：mySetInterVal(()=>{console.log('test')},1000,500);
     * @description 1000, 1500, 2000, 2500, .....以此类推，
     * 
     * @description 实现思路：
     * @description 1. 内部创建loop函数
     * @description 2. loop内定义定时器执行fn，递归执行loop
     * 
     * @description https://github.com/lgwebdream/FE-Interview/issues/7
     *
     * @param {Function} fn
     * @param {Number} a
     * @param {Number} b
     * @return {*} 
     * @memberof SetTimeoutSetInterval
     * @example
     * const myClear =setTimeoutSetInterval.mySetInterVal(()=>{console.log('test')},1000,500);
       myClear()  // 清除定时器
     */
    mySetInterVal(fn, a, b) {
      let timeCount = 0;
      let timer
      const loop = () => {
        timer = setTimeout(() => {
          fn()
          timeCount++
          loop()
        }, a + timeCount * b)
      }
      loop()
      return () => {
        clearTimeout(timer)
      }
    }
}

export default SetTimeoutSetInterval