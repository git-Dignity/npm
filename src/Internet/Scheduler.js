/**
 * 带并发的异步调度器 Scheduler类
 *
 * 题目：JS 实现一个带并发限制的异度调度器 Scheduler，保证同时运行的任务最多有两个。
 * https://juejin.cn/post/7061588533214969892#heading-82
 *
 * @class Scheduler
 */
class Scheduler {
  /**
   * @description 打印开始点
   *
   * @memberof Scheduler
   */
  start() {
    console.log(
      "带并发的异步调度器 Scheduler类Scheduler start^_^_^_^_^_^_^_^_^_^"
    )
  }

  /**
   * @description 打印结束点
   *
   * @memberof Scheduler
   */
  end() {
    console.log(
      "带并发的异步调度器 Scheduler类Scheduler end^_^_^_^_^_^_^_^_^_^"
    )
  }

  constructor() {
    this.waitTasks = [] // 待执行的任务队列
    this.excutingTasks = [] // 正在执行的任务队列
    this.maxExcutingNum = 2 // 允许同时运行的任务数量
  }

  /**
   * @description 添加任务
   *
   * @param {*} promiseMaker
   * @memberof Scheduler
   * @example 
   * let scheduler = new Scheduler()

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
   */
  add(promiseMaker) {
    if (this.excutingTasks.length < this.maxExcutingNum) {
      this.run(promiseMaker)
    } else {
      this.waitTasks.push(promiseMaker)
    }
  }

  /**
   * @descrption 启动
   *
   * @param {*} promiseMaker
   * @memberof Scheduler
   */
  run(promiseMaker) {
    const len = this.excutingTasks.push(promiseMaker)   // 相当于获取数组的长度
    const index = len - 1
    promiseMaker().then(() => {
      this.excutingTasks.splice(index, 1)
      if (this.waitTasks.length > 0) {
        this.run(this.waitTasks.shift())
      }
    })
  }
}

export default Scheduler
