/**
 * 手写系列 -- 字符串篇 底层方法
 * 你说你总忘记JS的方法，好，来一起手写，增加记忆
 *
 * @class StringHand
 */
class StringHand {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof StringHand
   */
  start() {
    console.log("手写系列 -- 字符串篇底层方法 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof StringHand
   */
  end() {
    console.log("手写系列 -- 字符串篇底层方法 end^_^_^_^_^_^_^_^_^_^")
  }

}

/**
 * @description slice？
 * @description 截取字符串a到b
 *
 * @description 特别提醒
 * @description start > end：返回空字符串
 * @description start < 0：start = 字符串长度 + start
 *
 * @description 实现思路：
 * @description 1. 接收传进变量start, end
 * @description 2. 判断start是否小于0。若小于0，则值为字符串长度 + 负数start（其实也就是从字符串尾部开始算起，方向取反）
 * @description 3. 判断end是否有传。不传默认拿字符串长度
 * @description 4. 若start > end，则返回空字符串
 * @description 5. start作为循环的开始、end作为循环的结束，每次循环的值用str变量保存累加拼接起来
 * @description 6. 循环结束，返回str变量
 *
 * @description 手写slice
 *
 * @param {Number} start 开始截取的字符索引(包含此字符)
 * @param {Number} end 结束截取的字符索引(不包含此字符)
 * @return {String}
 * @memberof StringHand
 * @example
 * let str = 'Dignity_ZZM0129HXL'
 *
 * const slice1 = str.zm_slice(2)
 * console.log(slice1) // gnity_ZZM0129HXL
 * const slice2 = str.zm_slice(-2)
 * console.log(slice2) // XL    18-2 = 16
 * const slice3 = str.zm_slice(-9, 10)
 * console.log(slice3) // Z
 * const slice4 = str.zm_slice(5, 1)
 * console.log(slice4) // ''
 */
String.prototype.zm_slice = function (start = 0, end) {
  start = start < 0 ? this.length + start : start
  end = !end && end !== 0 ? this.length : end // 什么情况是 !end && end !== 0，那就是end不传的时候

  if (start >= end) return ""
  let str = ""
  for (let i = start; i < end; i++) {
    str += this[i]
  }

  return str
}

/**
 * @description slice、substr的区别？
 * @description slice将a到b范围内的值截取出来，而substr是从a开始截，在a的位置开始截取b个长度的范围内把值截取出来
 * @description 两者都是截取字符串
 *
 * @description 特别提醒
 * @description start < 0：start = 数组长度 + start
 * @description length超出所能截取范围，需要做处理
 * @description length < 0：返回空字符串
 *
 * @description 实现思路：
 * @description 1. 接收传进变量start, length
 * @description 2. 判断start是否小于0。若小于0，则值为字符串长度 + 负数start（其实也就是从字符串尾部开始算起，方向取反）
 * @description 3. 判断length是否有传。不传默认拿字符串长度
 * @description 4. 若length超出所能截取范围，即超出字符串长度 - 起始位置start，就拿字符串长度
 * @description 5. 若length有传、不超出所能截取范围，就拿起始位置start + length
 * @description 4. length < 0，则返回空字符串
 * @description 5. start作为循环的开始、length作为循环的结束，每次循环的值用str变量保存累加拼接起来
 * @description 6. 循环结束，返回str变量
 *
 * @description 手写substr
 *
 * @param {Number} start 开始截取的字符索引(包含此字符)
 * @param {Number} length 截取的长度
 * @return {String}
 * @memberof StringHand
 * @example
 * let str = 'Dignity_ZZM0129HXL'
 *
 * const substr1 = str.zm_substr(3)
 * console.log(substr1) // nity_ZZM0129HXL
 * const substr2 = str.zm_substr(3, 3)
 * console.log(substr2) // nit
 * const substr3 = str.zm_substr(5, 300)
 * console.log(substr3) // ty_ZZM0129HXL
 */
String.prototype.zm_substr = function (start = 0, length) {
  if (length < 0) return ""

  start = start < 0 ? this.length + start : start

  // 什么情况是 !length && length !== 0，那就是length不传的时候
  length =
    (!length && length !== 0) || length > this.length - start
      ? this.length
      : start + length

  let str = ""
  for (let i = start; i < length; i++) {
    str += this[i]
  }
  return str
}

/**
 * @description slice、sunstring？
 * @description slice将截取字符串a到b，而sunstring也是截取字符串a到b
 * @description 不同的是：slice若b大于a返回空字符串；而sunstring若b大于a则互换位置，即[a, b] = [b, a]
 *
 * @description 特别提醒
 * @description start > end：返回空字符串
 * @description start < 0：start = 字符串长度 + start
 * @description 如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数（start > end：互换值）
 *
 * @description 实现思路：
 * @description 1. 接收传进变量start, end
 * @description 2. 判断start是否小于0。若小于0，则值为字符串长度 + 负数start（其实也就是从字符串尾部开始算起，方向取反）
 * @description 3. 判断end是否有传。不传默认拿字符串长度
 * @description 4. 若start > end，则互换位置，即[a, b] = [b, a]
 * @description 5. start作为循环的开始、end作为循环的结束，每次循环的值用str变量保存累加拼接起来
 * @description 6. 循环结束，返回str变量
 *
 * @description 手写substring
 *
 * @param {Number} start 开始截取的字符索引(包含此字符)
 * @param {Number} end 结束截取的字符索引(不包含此字符)
 * @return {String}
 * @memberof StringHand
 * @example
 * let str = 'Dignity_ZZM0129HXL'
 *
 * const sunstring1 = str.zm_sunstring(2)
 * console.log(sunstring1) // gnity_ZZM0129HXL
 *
 * const sunstring2 = str.zm_sunstring(-2)
 * console.log(sunstring2) // XL
 *
 * const sunstring3 = str.zm_sunstring(-9, 10)
 * console.log(sunstring3) // Z
 *
 * const sunstring4 = str.zm_sunstring(5, 1)
 * console.log(sunstring4) // igni
 */
String.prototype.zm_sunstring = function (start = 0, end) {
  start = start < 0 ? this.length + start : start
  end = !end && end !== 0 ? this.length : end

  if (start >= end) [start, end] = [end, start]
  let str = ""
  for (let i = start; i < end; i++) {
    str += this[i]
  }

  return str
}

export default StringHand
