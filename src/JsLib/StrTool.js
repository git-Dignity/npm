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
  capitalizeEveryWord (str){
    return str.replace(/\b[a-z]/g, char => char.toUpperCase()); // char拿到的是 h和s
  }

}

export default StrTool
