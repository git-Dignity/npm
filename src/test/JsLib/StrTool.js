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

  // console.log(strTool.capitalize('azeze'))   // Azeze
  // console.log(strTool.capitalize('azeZE'))   // AzeZE
  // console.log(strTool.capitalize('Azeze', 1))   // azeze

  // console.log(strTool.capitalizeEveryWord("hsd sd"))   // Hsd Sd

  // console.log(strTool.splitLines('This\nis a\nmultiline\nstring.\n'))   // ["This", "is a", "multiline", "string.", ""]

  console.log(strTool.stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'))   // 'lorem ipsum'

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
