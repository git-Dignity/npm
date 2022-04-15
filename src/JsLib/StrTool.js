/**
 * 字符串工具类
 *
 * @class StrTool
 */
class StrTool {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof StrTool
   */
  start() {
    console.log("字符串工具类StrTool start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof StrTool
   */
  end() {
    console.log("字符串工具类StrTool end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 英文字母：
   * @description 字节数 : 1;编码：GB2312、GBK、GB18030、ISO-8859-1、UTF-8
   * @description 字节数 : 2;编码：UTF-16BE、UTF-16LE
   * @description 字节数 : 4;编码：UTF-16
   * @description 中文汉字：
   * @description 字节数 : 1;编码：SO-8859-1
   * @description 字节数 : 2;编码：GB2312、GBK、GB18030、UTF-16BE、UTF-16LE
   * @description 字节数 : 3;编码：UTF-8
   * @description 字节数 : 4;编码：UTF-16
   * @description https://developer.mozilla.org/zh-CN/docs/Web/API/Blob
   * @description 思路：利用Blob对象，默认编码是UTF-8（中文：3；英文：1）
   *
   * @description 返回字符串的字节长度（方法一）
   *
   * @param {String} str 目标字符串
   * @return {Number}  字节长度
   * @memberof StrTool
   * @example
   * byteSize('45 d s')   // 6
   * byteSize('文喝武喝 4s')   // 15
   */
  byteSize(str) {
    return new Blob([str]).size
  }

  /**
   * @description 思路：把中文字替换成两个字母。然后计算长度。
   * @description 这里正则要加/g，全部都要检查的意思。'2333哈哈' ：没有的话输出的是（2333aa哈）
   *
   * @description 返回字符串的字节长度（方法二）
   *
   * @param {String} str 目标字符串
   * @param {number} [len=2]   一个中文要转换成几个字节（因为有的2，有的3）
   * @return {Number}
   * @memberof StrTool
   * @example
   * byteSize2('文喝武喝 4s'))   // 11
   * byteSize2('文喝武喝 4s', 3))   // 15
   * byteSize2('2333哈哈'))   // 8
   */
  byteSize2(str, len = 2) {
    const res = str.replace(/[\u4e00-\u9fa5]/g, "a".repeat(len)) // 匹配中文字符
    return res.length
  }

  /**
   * @description 思路：直接判断中文，长度+2
   * @description 这里正则可以不要加g
   * @description str.charAt(i)： 获取i位置的字符（循环拿到每一个字符）
   *
   * @description 返回字符串的字节长度（方法三）
   *
   * @param {*} str
   * @param {number} [len=2]
   * @return {*}
   * @memberof StrTool
   * @example
   * byteSize3('2333哈哈')   // 8
   */
  byteSize3(str, len = 2) {
    let length = 0
    const reg = /[\u4e00-\u9fa5]/
    for (let i = 0; i < str.length; i++) {
      if (reg.test(str.charAt(i))) {
        length += len
      } else {
        length++
      }
    }
    return length
  }

  /**
   * @description 思路：利用Blob对象，默认编码是UTF-8（中文：3；英文：1）
   *
   * @description 获取不同类型变量的字节长度
   *
   * @param {*} val 值/引用
   * @return {Number}
   * @memberof StrTool
   * @example
   * typeSize('2333哈哈')   // 10
   * typeSize([1, 2, 3, 4, 5])   // 5
   * typeSize({ one: 1, two: 2, three: 3 })   // 3
   */
  typeSize(val) {
    return Array.isArray(val)
      ? val.length
      : val && typeof val === "object"
      ? val.size || val.length || Object.keys(val).length
      : typeof val === "string"
      ? new Blob([val]).size
      : 0
  }

  /**
   * @description [first, ...rest]：解耦字符串，可以把每个字符给输出出来，这样就可以拿到第一个字符
   *
   * @description 首字母大写
   *
   * @param {String} [first, ...rest] 目标字符串
   * @param {Number} [type=1]   1：小写；不传：大写
   * @return {String}
   * @memberof StrTool
   * @example
   * capitalize('azeze')   // Azeze
   * capitalize('azeZE')   // AzeZE
   * capitalize('Azeze', 1)   // azeze
   */
  capitalize([first, ...rest], type) {
    // console.log(first, ...rest)  // a z e z e
    const t = type === 1 ? first.toLowerCase() : first.toUpperCase()
    return t + rest.join("")
  }

  /**
   * @description \b 是正则表达式规定的一个特殊代码（好吧，某些人叫它元字符，metacharacter），代表着单词的开头或结尾，也就是单词的分界处
   * @description 例子：就用 "It's a nice day today." 举例说明：
   * @description 正则：\bnice\b
   * @description 分析：第一个 \b 前面一个字符是空格，后面一个字符是 'n'，不全是 \w，所以可以匹配出 'n' 是一个单词的开头。
   * @description 第二个 \b 前面一个字符是 'e'，后面一个字符是空格，不全是 \w，可以匹配出 'e' 是一个单词的结尾。所以，合在一起，就能匹配出以 'n' 开头以 'e' 结尾的单词，这里就能匹配出 "nice" 这个单词。
   *
   * @description 每个单词首字母大写
   *
   * @param {String} str 目标字符串
   * @return {String}
   * @memberof StrTool
   * @example
   * capitalizeEveryWord("hsd sd")   // Hsd Sd
   */
  capitalizeEveryWord(str) {
    return str.replace(/\b[a-z]/g, (char) => char.toUpperCase()) // char拿到的是 h和s
  }

  /**
   * @description \r：匹配一个回车符
   * @description ?：匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。要匹配 ? 字符，请使用 \?
   * @description 使用String.prototype.split()和正则表达式匹配换行符并创建一个数组
   *
   * @description 将多行字符串拆分为行数组
   *
   * @param {String} str 目标数组
   * @return {Array}
   * @memberof StrTool
   * @example
   * splitLines('This\nis a\nmultiline\nstring.\n')   // ["This", "is a", "multiline", "string.", ""]
   */
  splitLines(str) {
    return str.split(/\r?\n/)
  }

  /**
   * @description 使用正则表达式从字符串中删除HTML / XML 标记。
   * @description html标签都是<xxx> 正则匹配就<[^>]：开头是<字符
   *
   * @description 删除字符串中的HTMl标签
   *
   * @param {String} str
   * @return {String}
   * @memberof StrTool
   * @example
   * stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>')   // 'lorem ipsum'
   */
  stripHTMLTags(str) {
    return str.replace(/<[^>]*>/g, "")
  }

  /**
   * @description 实现思路：
   * @description 1. dict对象有全部属性的key、value。方便给maxChar赋值
   * @description 2. 对目标字符串str进行for...of遍历
   * @description 3. dict对象负责记录每次循环的属性和次数
   * @description 4. 如果dict有属性次数大于maxChar的，maxChar存起来
   * @description 5. 迭代器遍历结束，返回maxChar
   * 
   * @description https://q.shanyue.tech/fe/code/652.html
   * 
   * @description for...of可遍历数组字符串，对象不可以，因为对象没有迭代器Symbol（最近在看各种for）
   * @description 一边进行计数统计一遍进行大小比较，只需要 1 次 O(n) 的算法复杂度
   * 
   * @description 统计字符串中出现次数最多的字符及次数
   *
   * @param {String} str 目标字符串
   * @return {Array} [属性名, 次数]
   * @memberof StrTool
   * @example
   * getFrequentChar2("abcdassd") // ["a", 2]
   */
  getFrequentChar2(str) {
    const dict = {}
    let maxChar = ["", 0]
    for (const char of str) {
      dict[char] = (dict[char] || 0) + 1
      if (dict[char] > maxChar[1]) {
        maxChar = [char, dict[char]]
      }
    }
    return maxChar
  }

  
  /**
   * @description 去除空格
   *
   * @param {string} str 待处理字符串
   * @param {number} [type=1] 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
   * @return {String}
   * @memberof StrTool
   * @example
   * trim(" dg   g145415  44 ",1) // dgg14541544
   */
   trim(str, type = 1) {
    if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return
    switch (type) {
      case 1:
        return str.replace(/\s/g, "")
      // return str.trim()
      case 2:
        return str.replace(/(^\s)|(\s*$)/g, "")
      case 3:
        return str.replace(/(^\s)/g, "")
      // return str.trimStart()
      case 4:
        return str.replace(/(\s$)/g, "")
      // return str.trimEnd()
      default:
        return str
    }
  }
}

export default StrTool

// https://juejin.cn/post/6844903966526930951#heading-40：字符串第六点splitLines
