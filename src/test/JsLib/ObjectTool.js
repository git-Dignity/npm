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

  const obj1 = {
    a: { b: [1] },
    c: { d: { e: { f: 1 } } },
  }

  // loopGetLevel
  // let loopGetLevel1 = objectTool.loopGetLevel(obj)
  // console.log(loopGetLevel1); // Uncaught Error: Maximum call stack size exceeded...
  let loopGetLevel2 = objectTool.loopGetLevel(obj1)
  // console.log(loopGetLevel2);  // 4

  const obj2 = {
    a: {
      b: 1,
      c: 2,
      d: { e: 5 },
    },
    b: [1, 3, { a: 2, b: 3 }],
    c: 3,
  }

  const flatten = objectTool.flatten(obj2)
  // console.log(flatten)
  // {
  //  'a.b': 1,
  //  'a.c': 2,
  //  'a.d.e': 5,
  //  'b[0]': 1,
  //  'b[1]': 3,
  //  'b[2].a': 2,
  //  'b[2].b': 3
  //   c: 3
  // }

  const flattenObject = objectTool.flattenObject({ a: { b: { c: 1 } }, d: 1 })
  // console.log(flattenObject); // {a.b.c: 1, d: 1}

  const flattenObject1 = objectTool.flattenObject({
    a: { b: { c: 1, c1: 2 }, b1: 5, b2: { bbb: 55 } },
    d: 1,
  })
  // console.log(flattenObject1) // {a.b.c: 1, a.b.c1: 2, a.b1: 5, a.b2.bbb: 55, d: 1}

  const unflattenObject = objectTool.unflattenObject({ 'a.b.c': 1, d: 1 });  
  // console.log(unflattenObject); // { a: { b: { c: 1 } }, d: 1 }

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
