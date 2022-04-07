/*
 * @Author: zemin zheng
 * @Date: 2021-09-15 14:32:48
 * @LastEditTime: 2022-03-31 14:24:24
 * @LastEditors: zemin zheng
 * @Description: 对象工具 -- 测试文件
 * @FilePath: \npm\src\test\JsLib\ObjectTool.js
 */
import { ObjectTool } from "../../JsLib"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let objectTool = new ObjectTool()
  objectTool.start()

  // console.log(objectTool.cleanObject({
  //     name: '',
  //     value:123
  // }))
  // { value: 123 }

  var obj = {
    a: {
      c: [1, 2],
    },
    b: 1,
  }
  obj.a.c.d = obj
  // console.log(objectTool.cycleDetector(obj)) // true

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())
  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  //   console.log(objectTool.xxx())

  objectTool.end()
}
