/*
 * @Author: your name
 * @Date: 2021-08-26 18:30:42
 * @LastEditTime: 2021-09-07 15:38:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \npm\src\NumberVal\NumberVal.js
 */
/**
 * 数值计算类
 *
 * @class NumberVal
 */
class NumberVal {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof NumberVal
   */
  start() {
    console.log("NumberVal start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof NumberVal
   */
  end() {
    console.log("NumberVal end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 平均数
   *
   * @param {} nums 多个参数 （1, 2, 3）
   * @return {Number} 平均数
   * @memberof NumberVal
   * @example
   * average(...[1, 2, 3])  // 2
   * average(1, 2, 3)  // 2
   */
  average(...nums) {
    return nums.reduce((acc, val) => acc + val, 0) / nums.length
  }

  /**
   * @description 思路：
   * @description 1. fn如果是函数，通过map，即可拿到对象中的属性，再通过reduce将map循环的值累加
   * @description 2. fn如果是字符串，通过map的参数val，拿到每一个对象，对象[fn]可拿到对应的值(fn此时是字符串)，再通过reduce将map循环的值累加
   *
   * @description 数组对象属性平均数
   *
   * @param {Array} arr 目标数组
   * @param {*} fn 可以是函数、也可以是数组中对象的属性名
   * @return {Number}  平均数
   * @memberof NumberVal
   * @example
   * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n)  // 5
   * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')  // 5
   */
  averageBy(arr, fn) {
    return (
      arr
        .map(typeof fn === "function" ? fn : (val) => val[fn])
        .reduce((acc, val) => acc + val, 0) / arr.length
    )
  }

  /**
   * @description 生成指定范围随机数
   * @param {number } min
   * @param {number} max
   * @return {Number}
   * @memberof NumberVal
   * @example
   * RandomNum(0,10)  // 5
   */
  RandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  /**
   * @description 生成指定范围的随机小数
   *
   * @param {number} min 最小值
   * @param {number} max 最大值
   * @return {number}
   * @memberof NumberVal
   * @example
   * randomNumberInRange(0,10)  // 5.041143990814554
   */
  randomNumberInRange(min, max) {
    return Math.random() * (max - min) + min
  }

  /**
   * @description 生成随机整数（支持一个参数或者两个参数）
   *
   * @param {Number} min 最小值
   * @param {Number} max 最大值
   * @return {Number}
   * @memberof NumberVal
   * @example
   * randomNumInteger(10) // 5
   * randomNumInteger(10,20)  // 15
   */
  randomNumInteger(min, max) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * min + 1, 10)
      case 2:
        return parseInt(Math.random() * (max - min + 1) + min, 10)
      default:
        return 0
    }
  }

  /**
   * @description 加法函数（精度丢失问题）
   * @param {Number} arg1
   * @param {Number} arg2
   * @return {Number}
   * @memberof NumberVal
   * @example
   * add(0.1,0.2)  // 0.3
   */
  add(arg1, arg2) {
    // 还有解决方式：把小数放到位整数（乘倍数），再缩小回原来倍数（除倍数）
    // 0.1 + 0.2  ->  (0.1*10 + 0.2*10) / 10 == 0.3   // true

    let r1, r2, m
    try {
      r1 = arg1.toString().split(".")[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = arg2.toString().split(".")[1].length
    } catch (e) {
      r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
  }

  /**
   * @description 减法函数（精度丢失问题）
   * @param {Number} arg1
   * @param {Number} arg2
   * @return {Number}
   * @memberof NumberVal
   * @example
   * sub(0.2,0.1)  // 0.1
   */
  sub(arg1, arg2) {
    let r1, r2, m, n
    try {
      r1 = arg1.toString().split(".")[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = arg2.toString().split(".")[1].length
    } catch (e) {
      r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    n = r1 >= r2 ? r1 : r2
    return Number(((arg1 * m - arg2 * m) / m).toFixed(n))
  }

  /**
   * @description 除法函数（精度丢失问题）
   *
   * @param {Number} num1
   * @param {Number} num2
   * @return {Number}
   * @memberof NumberVal
   * @example
   * division(0.2,0.1)  // 2
   */
  division(num1, num2) {
    let t1, t2, r1, r2
    try {
      t1 = num1.toString().split(".")[1].length
    } catch (e) {
      t1 = 0
    }
    try {
      t2 = num2.toString().split(".")[1].length
    } catch (e) {
      t2 = 0
    }
    r1 = Number(num1.toString().replace(".", ""))
    r2 = Number(num2.toString().replace(".", ""))
    return (r1 / r2) * Math.pow(10, t2 - t1)
  }

  /**
   * @description 乘法函数（精度丢失问题）
   *
   * @param {Number} num1
   * @param {Number} num2
   * @return {Number}
   * @memberof NumberVal
   * @example
   * mcl(0.2,0.1)  // 0.02
   */
  mcl(num1, num2) {
    let m = 0,
      s1 = num1.toString(),
      s2 = num2.toString()
    try {
      m += s1.split(".")[1].length
    } catch (e) {}
    try {
      m += s2.split(".")[1].length
    } catch (e) {}
    return (
      (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
      Math.pow(10, m)
    )
  }

  /**
   * @description Math.round() 函数返回一个数字四舍五入后最接近的整数
   *
   * @description 四舍五入到指定位数
   *
   * @param {Number} n 数值
   * @param {number} [decimals=0] 指定位数
   * @return {Number}
   * @memberof NumberVal
   * @example
   * round(5.4585, 2) // 5.46
   */
  round(n, decimals = 0) {
    return Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
  }

  /**
   * @description 计算数组或多个数字的总和
   *
   * @param {Array} arr 目标数组
   * @return {Number}   总和
   * @memberof NumberVal
   * @example
   * sum(1, 2, 3, 4) // 10
   * sum(...[1, 2, 3, 4]) // 10
   */
  sum(...arr) {
    return [...arr].reduce((acc, val) => acc + val, 0)
  }

  /**
   * @description Intl.NumberFormat是对语言敏感的格式化数字类的构造器类（https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat）
   * 
   * @description  货币单位转换
   *
   * @param {Number} n 数值
   * @param {String} curr 货币格式
   * @param {*} [LanguageFormat=undefined] 语言 en-us | fa
   * @return {String} 
   * @memberof NumberVal
   * @example
   * toCurrency(123456.789, 'EUR') // €123,456.79
   * toCurrency(123456.789, 'USD', 'en-us') // $123,456.79
   * toCurrency(123456.789, 'USD', 'fa') // ‎$۱۲۳٬۴۵۶٫۷۹
   * toCurrency(322342436423.2435, 'JPY') // JP¥322,342,436,423
   */
  toCurrency(n, curr, LanguageFormat = undefined) {
    return Intl.NumberFormat(LanguageFormat, {
      style: "currency",
      currency: curr,
    }).format(n)
  }
}

export default NumberVal
