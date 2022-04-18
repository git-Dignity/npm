/**
 * Vue相关底层方法
 *
 * @class VueHand
 */
class VueHand {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof VueHand
   */
  start() {
    console.log("手写系列 -- Vue相关底层方法 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof VueHand
   */
  end() {
    console.log("手写系列 -- Vue相关底层方法 end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 实现思路
   * @description 1. 通过replace去遍历替换字符串
   * @description 2. 匹配到{{}}，就进入get函数去找出传入的data该属性值
   * @description 3. 利用for...of去遍历{{}}内部的属性值，进行data寻找属性值
   * @description 4. 找完即返回给replace替换，继续利用replace遍历下一个，重复1-3
   * 
   * @description 注意深层嵌套数据（实现思路第3点）
   * 
   * @description https://q.shanyue.tech/fe/code/678.html
   * 
   * @description 使用replace进行替换{{}}，属性值赋值用for.of遍历（方法一）
   * @description 实现一个 render/template 函数，可以用以渲染模板
   *
   * @param {String} template
   * @param {Object} data
   * @return {String} 
   * @memberof VueHand
   * @example
   * const template =
        '{{ user["name"] }}，今天你又学习了吗 - 用户ID: {{ user.id }}'

     const data = {
        user: {
        id: 10086,
        name: "阿泽",
        },
     }

     const render1 = vueHand.render(template, data)
     console.log(render1)  // "阿泽，今天你又学习了吗 - 用户ID: 10086"
   */
  render1(template, data) {
    return template.replace(/{{\s+([^\s]+)\s+}}/g, (capture, key) => {
      return get(data, key)
    })

    function get(source, path, defaultValue = undefined) {
      // a[3].b -> a.3.b -> [a, 3, b]
      const paths = path
        .replace(/\[(\w+)\]/g, ".$1")
        .replace(/\["(\w+)"\]/g, ".$1")
        .replace(/\['(\w+)'\]/g, ".$1")
        .split(".")
      let result = source
      for (const p of paths) {
        result = result[p]
      }
      return result === undefined ? defaultValue : result
    }
  }

  /**
   * @description 实现思路
   * @description 1. 利用replace遍历替换{{}}
   * @description 2. 取{{x}}内部的x变量，通过Function创建一个函数，返回该属性值
   * @description 3. 使用call改变指向的this
   * @description 4. 即可获取到属性值，进行replace进行替换，继续利用replace遍历下一个，重复1-3
   * 
   * @description 使用replace替换{{}}，属性值赋值用创建Function执行获取该属性值（方法二）
   *
   * @param {String} template 
   * @param {Object} data
   * @return {String} 
   * @memberof VueHand
   * @example
   * const template =
        '{{ user["name"] }}，今天你又学习了吗 - 用户ID: {{ user.id }}'

     const data = {
        user: {
        id: 10086,
        name: "阿泽",
        },
     }

     const render2 = vueHand.render2(template, data)
     console.log(render2)  // "阿泽，今天你又学习了吗 - 用户ID: 10086"
   */
  render2(template, data) {
    return template.replace(/({{).*?(}})/g, function (...args) {
      return Function(`return this.${args[0].slice(2, -2).trim()}`).call(data); // args[0].slice(2, -2).trim()获取user.id
    });
  }

 
}

export default VueHand
