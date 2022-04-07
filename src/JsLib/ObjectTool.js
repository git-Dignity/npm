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
}

export default ObjectTool
