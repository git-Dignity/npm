/*
 * @Author: zemin zheng
 * @Date: 2021-09-15 16:40:43
 * @LastEditTime: 2021-11-25 17:31:45
 * @LastEditors: Please set LastEditors
 * @Description: 手写系列 -- 对象篇 测试文件
 * @FilePath: \npm\src\test\HandWrit\JSHand.js
 */
import { StringHand } from "../../HandWrit"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let stringHand = new StringHand()
  stringHand.start()

  let str = "Dignity_ZZM0129HXL"

  // slice
  const slice1 = str.zm_slice(2)
  //   console.log(slice1) // gnity_ZZM0129HXL
  const slice2 = str.zm_slice(-2)
  //   console.log(slice2) // XL    18-2 = 16
  const slice3 = str.zm_slice(-9, 10)
  //   console.log(slice3) // Z
  const slice4 = str.zm_slice(5, 1)
  //   console.log(slice4) // ''

  // substr
  const substr1 = str.zm_substr(3)
  //   console.log(substr1) // nity_ZZM0129HXL
  const substr2 = str.zm_substr(3, 3)
  //   console.log(substr2) // nit
  const substr3 = str.zm_substr(5, 300)
  //   console.log(substr3) // ty_ZZM0129HXL

  // sunstring
  const sunstring1 = str.zm_sunstring(2)
  //   console.log(sunstring1) // gnity_ZZM0129HXL
  const sunstring2 = str.zm_sunstring(-2)
  //   console.log(sunstring2) // XL
  const sunstring3 = str.zm_sunstring(-9, 10)
  //   console.log(sunstring3) // Z
  const sunstring4 = str.zm_sunstring(5, 1)
  //   console.log(sunstring4) // igni

  stringHand.end()
}
