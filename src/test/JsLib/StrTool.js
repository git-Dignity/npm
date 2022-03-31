/*
 * @Author: zemin zheng
 * @Date: 2021-09-06 11:29:06
 * @LastEditTime: 2022-03-31 14:22:44
 * @LastEditors: zemin zheng
 * @Description: 字符串工具 -- 测试文件
 * @FilePath: \npm\src\test\JsLib\StrTool.js
 */
import { StrTool } from "../../JsLib"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let strTool = new StrTool()
  strTool.start()

  // console.log(strTool.byteSize('45 d s'))   // 6
  // console.log(strTool.byteSize('文喝武喝 4s'))   // 15

  // console.log(strTool.byteSize2('文喝武喝 4s'))   // 11
  // console.log(strTool.byteSize2('文喝武喝 4s', 3))   // 15
  // console.log(strTool.byteSize2('2333哈哈'))   // 8

  // console.log(strTool.byteSize3('2333哈哈'))   // 8

  // console.log(strTool.typeSize('2333哈哈'))   // 10
  // console.log(strTool.typeSize([1, 2, 3, 4, 5]))   // 5
  // console.log(strTool.typeSize({ one: 1, two: 2, three: 3 }))   // 3

  // console.log(strTool.capitalize('azeze'))   // Azeze
  // console.log(strTool.capitalize('azeZE'))   // AzeZE
  // console.log(strTool.capitalize('Azeze', 1))   // azeze

  // console.log(strTool.capitalizeEveryWord("hsd sd"))   // Hsd Sd

  // console.log(strTool.splitLines('This\nis a\nmultiline\nstring.\n'))   // ["This", "is a", "multiline", "string.", ""]

  // console.log(strTool.stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'))   // 'lorem ipsum'

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1
  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1
  
  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1

  // console.log(strTool.xxx())   // 1
  
  
  strTool.end()
}
