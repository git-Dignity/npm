/*
 * @Author: zemin zheng
 * @Date: 2022-04-13 10:13:31
 * @LastEditTime: 2022-04-13 10:18:01
 * @LastEditors: zemin zheng
 * @Description: 手写系列 -- MVVM篇
 * @FilePath: \npm\src\HandWrit\MVVMHand.js
 */

class MVVMHand {
  constructor(opt) {
    this.opt = opt
    this.observe(opt.data)
    let root = document.querySelector(opt.el)
    this.compile(root)
  }

  // 为响应式对象 data 里的每一个 key 绑定一个观察者对象
  observe(data) {
    Object.keys(data).forEach((key) => {
      let obv = new Observer()
      data["_" + key] = data[key]
      // 通过 getter setter 暴露 for 循环中作用域下的 obv，闭包产生
      Object.defineProperty(data, key, {
        get() {
          Observer.target && obv.addSubNode(Observer.target)
          return data["_" + key]
        },
        set(newVal) {
          obv.update(newVal)
          data["_" + key] = newVal
        },
      })
    })
  }
  // 初始化页面，遍历 DOM，收集每一个key变化时，随之调整的位置，以观察者方法存放起来
  compile(node) {
    ;[].forEach.call(node.childNodes, (child) => {
      if (!child.firstElementChild && /\{\{(.*)\}\}/.test(child.innerHTML)) {
        let key = RegExp.$1.trim()
        child.innerHTML = child.innerHTML.replace(
          new RegExp("\\{\\{\\s*" + key + "\\s*\\}\\}", "gm"),
          this.opt.data[key]
        )
        Observer.target = child
        this.opt.data[key]
        Observer.target = null
      } else if (child.firstElementChild) this.compile(child)
    })
  }

  /**
   * @description 打印开始点
   *
   * @memberof MVVMHand
   */
  start() {
    console.log("手写系列 -- MVVM篇 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof MVVMHand
   */
  end() {
    console.log("手写系列 -- MVVM篇 end^_^_^_^_^_^_^_^_^_^")
  }
}

// 常规观察者类
class Observer {
  constructor() {
    this.subNode = []
  }
  addSubNode(node) {
    this.subNode.push(node)
  }
  update(newVal) {
    this.subNode.forEach((node) => {
      node.innerHTML = newVal
    })
  }
}

export default MVVMHand
