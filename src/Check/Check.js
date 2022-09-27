/**
 * 正则校验check工具函数
 *
 * @class Check
 */
class Check {
  constructor() { }

  /**
   * @description 打印开始点
   *
   * @memberof Check
   */
  start() {
    console.log("校验工具类Check start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof Check
   */
  end() {
    console.log("校验工具类Check end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 验证不能包含字母
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isNoWord("3436")   // true
   */
  isNoWord(value) {
    return /^[^A-Za-z]*$/g.test(value)
  }

  /**
   * @description 验证中文和数字
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isCHNAndEN("啊实打实213")   // true
   */
  isCHNAndEN(value) {
    return /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(
      value
    )
  }

  /**
   * @description 验证邮政编码(中国)
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isPostcode("515071")     // true
   */
  isPostcode(value) {
    return /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(
      value
    )
  }

  /**
   * @description 验证微信号，6至20位，以字母开头，字母，数字，减号，下划线
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isWeChatNum("dignity_")   // true
   */
  isWeChatNum(value) {
    return /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value)
  }

  /**
   * @description 验证16进制颜色
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isColor16("#FFB6C1")   // true
   */
  isColor16(value) {
    // #BC8F8F 和 #fff 这两种情况
    return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value)
  }

  /**
   * @description 验证火车车次
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isTrainNum("K9998")   // true
   */
  isTrainNum(value) {
    return /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(value)
  }

  /**
   * @description 验证手机机身码(IMEI) 手机本身的唯一标识
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isIMEI("1591554223239155")   // true
   */
  isIMEI(value) {
    return /^\d{15,17}$/g.test(value)
  }

  /**
   * @description 验证必须带端口号的网址(或ip)
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isHttpAndPort("http://192.168.2.153:8080")   // true
   */
  isHttpAndPort(value) {
    return /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(value)
  }

  /**
   * @description 验证网址(支持端口和"?+参数"和"#+参数)
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isRightWebsite("http://192.168.2.153:8080?id=5")   // true
   */
  isRightWebsite(value) {
    return /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(
      value
    )
  }

  /**
   * @description 验证统一社会信用代码
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isCreditCode("18位")   // false
   */
  isCreditCode(value) {
    return /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value)
  }

  /**
   * @description 验证视频链接地址（视频格式可按需增删）
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isVideoUrl("https://www.bilibili.com/video/av71664605.mp4")   // true
   */
  isVideoUrl(value) {
    return /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(
      value
    )
  }

  /**
   * @description 验证图片链接地址（图片格式可按需增删）
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isImageUrl("https://imeidb.oss-cn-hangzhou.aliyuncs.com/static/img/imei-4.jpg")   // true
   */
  isImageUrl(value) {
    return /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(
      value
    )
  }

  /**
   * @description 验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isAccountNumber("6222600260001072444")   // true
   */
  isAccountNumber(value) {
    return /^[1-9]\d{9,29}$/g.test(value)
  }

  /**
   * @description 验证中文姓名
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isChineseName("阿泽")   // true
   */
  isChineseName(value) {
    return /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value)
  }

  /**
   * @description 验证英文姓名
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isEnglishName("zeze")   // true
   */
  isEnglishName(value) {
    return /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value)
  }

  /**
   * @description 验证车牌号(新能源)
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isLicensePlateNumberNER("京AF01234")   // true
   */
  isLicensePlateNumberNER(value) {
    return /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(
      value
    )
  }

  /**
   * @description 验证车牌号(非新能源)
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isLicensePlateNumberNNER("川A123AB")   // true
   */
  isLicensePlateNumberNNER(value) {
    return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(
      value
    )
  }

  /**
   * @description 验证车牌号
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isLicensePlateNumber("川A123AB")   // true
   */
  isLicensePlateNumber(value) {
    return /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(
      value
    )
  }

  /**
   * @description 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isMPStrict("15915549155")   // true
   */
  isMPStrict(value) {
    return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(
      value
    )
  }

  /**
   * @description 验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isMPRelaxed("15915549155")   // true
   */
  isMPRelaxed(value) {
    return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value)
  }

  /**
   * @description 验证email(邮箱)
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isEmail("1638153584@qq.com")   // true
   */
  isEmail(value) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(
      value
    )
  }

  /**
   * @description 验证座机电话(国内),如: 0341-86091234
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isLandlineTelephone("0754-87398773")   // true
   */
  isLandlineTelephone(value) {
    return /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value)
  }

  /**
   * @description 验证身份证号, 支持1/2代(15位/18位数字)
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isIDCard ("445281199114567539")   // true
   */
  isIDCard(value) {
    return /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(
      value
    )
  }

  /**
   * @description 验证护照（包含香港、澳门）
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isPassport("验证护照（包含香港、澳门）")   // true
   */
  isPassport(value) {
    return /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(
      value
    )
  }

  /**
   * @description 验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isWebAccount("a123456")   // true
   */
  isWebAccount(value) {
    return /^[a-zA-Z]\w{4,15}$/g.test(value)
  }

  /**
   * @description 验证中文/汉字
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isChineseCharacter("哈哈")   // true
   */
  isChineseCharacter(value) {
    return /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(
      value
    )
  }

  /**
   * @description 验证小数
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isDecimal("45.55")   // true
   */
  isDecimal(value) {
    return /^\d+\.\d+$/g.test(value)
  }

  /**
   * @description 验证数字
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isNumber("44455")   // true
   */
  isNumber(value) {
    return /^\d{1,}$/g.test(value)
  }

  /**
   * @description 验证qq号格式  4-10
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isQQNum("16544848")   // true
   */
  isQQNum(value) {
    return /^[1-9][0-9]{4,10}$/g.test(value)
  }

  /**
   * @description 验证数字和字母组成
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isNumAndStr("115dsa234")   // true
   */
  isNumAndStr(value) {
    return /^[A-Za-z0-9]+$/g.test(value)
  }

  /**
   * @description 验证英文字母
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isEnglish("sadasEFRS")   // true
   */
  isEnglish(value) {
    return /^[a-zA-Z]+$/g.test(value)
  }

  /**
   * @description 验证大写英文字母
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isCapital("DG")   // true
   */
  isCapital(value) {
    return /^[A-Z]+$/g.test(value)
  }

  /**
   * @description 验证小写英文字母
   *
   * @param {String} value 值
   * @return {Boolean}
   * @memberof Check
   * @example
   * isLowercase("sdf")   // true
   */
  isLowercase(value) {
    return /^[a-z]+$/g.test(value)
  }


  /**
   * @description 密码中同时含大写字母、小写字母、数字和特殊字符且长度在8-16之间
   * @description (?=.{8,16})表示要大等于8位 或 小于16位
   * @description (?=.*?[a-z])表示要有小写字母
   * @description (?=.*?[A-Z])表示要有大写字母
   * @description (?=.*?\d)表示要有数字
   * @description (?=.*?[*?!&￥$%^#,./@";:><\[\]}{\-=+_\\|》《。，、？’‘“”~ ])`表示要有特殊字符
   * @param {String} value 
   * @return {Boolean}
   * @memberof Check
   * @example
   * passCaseNumSpecialChar("123@")   // false
   * passCaseNumSpecialChar("1sd44f1A@23@")   // true
   */
  passCaseNumSpecialChar(value) {
    return /^(?=.{8,16})(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[*?!&￥$%^#,./@";:><\[\]}{\-=+_\\|》《。，、？’‘“”~ `]).*$/.test(value)
  }

  /**
   * @description 思路：
   * @description 1. 从右到左给卡号字符串编号，最右边第一位是1，最右边第二位是2，最右边第三位是3….
   * @description 2. 从右向左遍历，对每一位字符t执行第三个步骤，并将每一位的计算结果相加得到一个数s
   * @description 3. 对每一位的计算规则：如果这一位是奇数位，则返回t本身，如果是偶数位，则先将t乘以2得到一个数n，如果n是一位数（小于10），直接返回n，否则将n的个位数和十位数相加返回
   * @description 4. 如果s能够整除10，则此号码有效，否则号码无效
   * @description 5. 因为最终的结果会对10取余来判断是否能够整除10，所以又叫做模10算法
   * 
   * @description Luhn算法的实现，用于验证各种标识号，例如信用卡号，IMEI号，国家提供商标识号等
   * @description 基于Luhn算法的银行卡卡号的格式校验（https://www.jianshu.com/p/193d8b84a6a1）
   * @description ((val * 2) % 9) || 9) ： 将t乘以2得到一个数n，如果n是一位数（小于10），直接返回n，否则将n的个位数和十位数相加返回（%9就可以将个位数 + 十位数之和）
   * 
   * @description 银行卡号码校验（luhn算法）
   *
   * @param {Number} num 银行卡号码
   * @return {Boolean} 
   * @memberof Check
   * @example 
   * luhnCheck("4485275742308327") // true
   * luhnCheck("6011329933655299") // false
   */
  luhnCheck(num) {
    let arr = (num + '')
      .split('')
      .reverse()
      .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => {
      return (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9)
    }, 0);
    sum += lastDigit;
    return sum % 10 === 0;
  };

}

export default Check
