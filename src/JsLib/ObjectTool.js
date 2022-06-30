/**
 * 对象工具类
 *
 * @class ObjectTool
 */
class ObjectTool {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof ObjectTool
   */
  start() {
    console.log("对象工具类ObjectTool start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof ObjectTool
   */
  end() {
    console.log("对象工具类ObjectTool end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 使用场景是：后端列表查询接口，某个字段前端不传，后端就不根据那个字段筛选
   * @description 但是前段一般都会把整个对象传过去，那这样空的字段也会传过去，显然不可
   *
   * @description 去除对象中value为空(null,undefined,'')的属性
   *
   * @param {*} object
   * @return {*}
   * @memberof ObjectTool
   * @example
   * console.log(objectTool.cleanObject({
        name: '',
        value:123
    }))
    { value: 123 }
   */
  cleanObject(object) {
    if (!object) {
      return {}
    }

    const result = { ...object }
    Object.keys(result).forEach((key) => {
      const value = result[key]
      if ([undefined, null, ""].includes(value)) {
        delete result[key]
      }
    })

    return result
  }

  /**
   * @description 实现思路：
   * @description 用一个数组存储每一个遍历过的对象，下次找到数组中存在，则说明环引用
   * 
   * @description for...of无法遍历对象，所以才用Object.keys将对象转为数组（keys属性）
   * @description https://juejin.cn/post/7023906112843808804#heading-4
   * @description 判断一个对象有环引用
   *
   * @param {Object} obj
   * @return {Boolean} 
   * @memberof ObjectTool
   * @example
     var obj = {
        a: {
            c: [1, 2],
        },
        b: 1,
     }
     obj.a.c.d = obj
     console.log(objectTool.cycleDetector(obj)) // true
   */
  cycleDetector(obj) {
    const arr = [obj]
    let flag = false

    function cycle(o) {
      const keys = Object.keys(o)
      for (const key of keys) {
        const temp = o[key]

        if (typeof temp === "object" && temp !== null) {
          if (arr.indexOf(temp) >= 0) {
            console.log(arr, temp)
            flag = true
            return
          }
          arr.push(temp)
          cycle(temp)
        }
      }
    }

    cycle(obj)

    return flag
  }

  /**
   * @description 实现思路：
   * @description 用一个WeakMap存储每一个遍历过的对象，遍历每一个都存起来，下次找到WeakMap中存在，则说明环引用
   * @description 他的判断是否存在是在for循环外判断，可以减少次数，而且使用WeakMap弱引用可避免内存泄漏
   * 
   * @description 如何检测并避免循环依赖(上面的cycleDetector方法的第二种方法)
   * @description https://q.shanyue.tech/fe/node/525.html
   *
   * @param {Object} obj 目标对象
   * @return {Boolean} 
   * @memberof ObjectTool
   * @example
     var obj = {
        a: {
            c: [1, 2],
        },
        b: 1,
     }
     obj.a.c.d = obj
     console.log(objectTool.cycleDetector1(obj)) // true
   */
  cycleDetector1(obj) {
    const isObject = (obj) =>
      Object.prototype.toString.call(obj) === "[object Object]"
    const isPrimitive = (obj) =>
      /Number|Boolean|String|Undefined|Null|Symbol/.test(
        Object.prototype.toString.call(obj)
      )
    const memory = new WeakMap()
    let isCycled = false
    const traverse = function (value) {
      if (!isPrimitive(value)) {
        if (memory.has(value)) {
          isCycled = true
          return
        }
        memory.set(value, true)
        const keys = Object.keys(value)
        for (const key of keys) {
          traverse(value[key])
        }
      }
    }
    traverse(obj)
    return isCycled
  }

  /**
   * @description 实现思路：
   * @description 1. 先判断该对象是否有环引用
   * @description 2. 内部定义一个函数computedLevel，方便做递归操作
   * @description 3. computedLevel接收两个参数（值，层级），在判断该值是否为对象
   * @description 4. 是对象的话，进行for...in循环，如果循环内还是对象就去递归computedLevel
   * @description 5. 否则则层级 + 1
   * 
   * @description 计算一个对象的层数
   * @description 题目描述：给你一个对象，统计一下它的层数
   *
   * @param {Object} obj
   * @return {Number} 
   * @memberof ObjectTool
   * @example
   * var obj = {
      a: {
        c: [1, 2],
      },
      b: 1,
    }
    obj.a.c.d = obj // 无限循环

    const obj1 = {
      a: { b: [1] },
      c: { d: { e: { f: 1 } } },
    }

    console.log(objectTool.loopGetLevel(obj)) // Uncaught Error: Maximum call stack size exceeded...
    console.log(objectTool.loopGetLevel(obj1)) // 4
   */
  loopGetLevel(obj) {
    if (this.cycleDetector(obj)) {
      throw new TypeError("Maximum call stack size exceeded...")
    }
    var res = 1 // 默认肯定是一级

    function computedLevel(obj, level) {
      var level = level ? level : 0
      if (typeof obj === "object") {
        for (var key in obj) {
          if (typeof obj[key] === "object") {
            computedLevel(obj[key], level + 1)
          } else {
            res = level + 1 > res ? level + 1 : res
          }
        }
      } else {
        res = level > res ? level : res
      }
    }
    computedLevel(obj)

    return res
  }

  /**
   * @description 实现思路：
   * @description 1. 先判断obj是否为对象
   * @description 2. 内部有个返回函数（内部处理，若为数组、对象，即for递归调用）
   * 
   * @description 对象的扁平化（以键的路径扁平化对象）
   *
   * @param {Object} obj
   * @return {Object} 
   * @memberof ObjectTool
   * @example
   * const obj2 = {
      a: {
        b: 1,
        c: 2,
        d: { e: 5 },
      },
      b: [1, 3, { a: 2, b: 3 }],
      c: 3,
    }

    const flatten = objectTool.flatten(obj2)
    console.log(flatten)
    // {
    //  'a.b': 1,
    //  'a.c': 2,
    //  'a.d.e': 5,
    //  'b[0]': 1,
    //  'b[1]': 3,
    //  'b[2].a': 2,
    //  'b[2].b': 3
    //   c: 3
    // }
   */
  flatten(obj) {
    const isObject = (val) => typeof val === "object" && val !== null

    if (!isObject(obj)) return
    const res = {}
    const dfs = (cur, prefix) => {
      if (isObject(cur)) {
        if (Array.isArray(cur)) {
          cur.forEach((item, index) => {
            dfs(item, `${prefix}[${index}]`)
          })
        } else {
          for (let key in cur) {
            dfs(cur[key], `${prefix}${prefix ? "." : ""}${key}`)
          }
        }
      } else {
        res[prefix] = cur
      }
    }
    dfs(obj, "")
    return res
  }

  /**
   * @description 实现思路：
   * @description 使用递归。
   * @description 利用Object.keys(obj)联合Array.prototype.reduce()，以每片叶子节点转换为扁平的路径节点
   * @description 如果键的值是一个对象，则函数使用调用适当的自身prefix以创建路径Object.assign()。
   * @description 否则，它将适当的前缀键值对添加到累加器对象。
   * @description prefix除非您希望每个键都有一个前缀，否则应始终省略第二个参数。
   * @description 以键的路径扁平化对象
   *
   * @description 对象的扁平化（以键的路径扁平化对象）（方法二）
   *
   * @param {Object} obj 目标对象
   * @param {string} [prefix=""] 扁平的路径节点（前缀）  主要是给递归用的
   * @return {Object}
   * @memberof ObjectTool
   * @example
   * flattenObject({ a: { b: { c: 1 } }, d: 1 })  // {a.b.c: 1, d: 1}
   *
   * flattenObject({
   *   a: { b: { c: 1, c1: 2 }, b1: 5, b2: { bbb: 55 } },
   *   d: 1,
   * })  // {a.b.c: 1, a.b.c1: 2, a.b1: 5, a.b2.bbb: 55, d: 1}
   */
  flattenObject(obj, prefix = "") {
    return Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? prefix + "." : ""

      if (typeof obj[k] === "object") {
        Object.assign(acc, this.flattenObject(obj[k], pre + k))
      } else {
        acc[pre + k] = obj[k]
      }

      return acc
    }, {})
  }

  /**
   * @description 思路：将这种'a.b.c'转为{"a":{"b":{"c":1}}}，再借助JSON.parse将字符串转成JSON对象
   * @description 那么如何转成{"a":{"b":{"c":1}}}
   * @description 1. 用split用点切割成数组，map帮每一个前面加{"x":，最后一个不加，就变成{"a":{"b":{"c":
   * @description 2. 再拼上他的值；{"a":{"b":{"c":1
   * @description 3. 那是不是缺少三个右花括号，用repeat方法复制三个花括号，即：{"a":{"b":{"c":1}}}
   * @description 4. 有字符串JSON了，用JSON.parse转成对象
   *
   * @description 用途：在做Tree组件或复杂表单时取值非常舒服。
   * @description 与上面的flattenObject方法相反，展开对象。
   * @description 以键的路径展开对象（与flattenObject相反）
   *
   * @param {Object} obj
   * @return {Object}
   * @memberof ObjectTool
   * @example
   * unflattenObject({ 'a.b.c': 1, d: 1 });  // { a: { b: { c: 1 } }, d: 1 }
   */
  unflattenObject(obj) {
    return Object.keys(obj).reduce((acc, k) => {
      if (k.indexOf(".") !== -1) {
        const keys = k.split(".")

        Object.assign(
          acc,
          JSON.parse(
            "{" +
              keys
                .map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`))
                .join("") +
              obj[k] +
              "}".repeat(keys.length)
          )
        )
      } else {
        acc[k] = obj[k]
      }
      return acc
    }, {})
  }
}

export default ObjectTool
