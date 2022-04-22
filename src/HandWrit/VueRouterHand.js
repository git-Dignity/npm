let Vue = null

/**
 * 手写vue-router的核心原理
 * 
 * https://juejin.cn/post/6854573222231605256
 *
 * @class VueRouter
 */
class VueRouter {
  /**
   * @description 打印开始点
   *
   * @memberof VueRouter
   */
  start() {
    console.log("手写系列 -- vue-router底层方法 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof VueRouter
   */
  end() {
    console.log("手写系列 -- vue-router底层方法 end^_^_^_^_^_^_^_^_^_^")
  }
  constructor(options) {
    this.mode = options && options.mode || "hash"
    this.routes = options && options.routes || [] //你传递的这个路由是一个数组表
    this.routesMap = this.createMap(this.routes)
    this.history = new HistoryRoute()
    this.init()
  }

  init() {
    if (this.mode === "hash") {
      // 先判断用户打开时有没有hash值，没有的话跳转到#/
      location.hash ? "" : (location.hash = "/")
      window.addEventListener("load", () => {
        this.history.current = location.hash.slice(1)
      })
      window.addEventListener("hashchange", () => {
        this.history.current = location.hash.slice(1)
      })
    } else {
      // history 
      location.pathname ? "" : (location.pathname = "/")
      window.addEventListener("load", () => {
        this.history.current = location.pathname
      })
      window.addEventListener("popstate", () => {
        this.history.current = location.pathname
      })
    }
  }

  createMap(routes) {
    return routes.reduce((pre, current) => {
      pre[current.path] = current.component
      return pre
    }, {})
  }
}
VueRouter.install = function (v) {
//   参数Vue，我们在第四小节分析Vue.use的时候，再执行install的时候，将Vue作为参数传进去。
// mixin的作用是将mixin的内容混合到Vue的初始参数options中。相信使用vue的同学应该使用过mixin了。
// 为什么是beforeCreate而不是created呢？因为如果是在created操作的话，$options已经初始化好了。
// 如果判断当前组件是根组件的话，就将我们传入的router和_root挂在到根组件实例上。
// 如果判断当前组件是子组件的话，就将我们_root根组件挂载到子组件。注意是引用的复制，因此每个组件都拥有了同一个_root根组件挂载在它身上。

  Vue = v
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.router) {
        // 如果是根组件
        this._root = this //把当前实例挂载到_root上
        this._router = this.$options.router
        Vue.util.defineReactive(this, "xxx", this._router.history)
      } else {
        //如果是子组件
        this._root = this.$parent && this.$parent._root
      }
      Object.defineProperty(this, "$router", {
        get() {
          return this._root._router
        },
      })
      Object.defineProperty(this, "$route", {
        get() {
          return this._root._router.history.current
        },
      })
    },
  })
  Vue.component("router-link", {
    props: {
      to: String,
    },
    render(h) {
      let mode = this._self._root._router.mode
      let to = mode === "hash" ? "#" + this.to : this.to
      return h("a", { attrs: { href: to } }, this.$slots.default)
    },
  })
  Vue.component("router-view", {
    render(h) {
      let current = this._self._root._router.history.current
      let routeMap = this._self._root._router.routesMap
      return h(routeMap[current])
    },
  })
}

class HistoryRoute {
  constructor() {
    this.current = null
  }
}

export default VueRouter
