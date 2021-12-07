/*
 * @Author: zemin zheng
 * @Date: 2021-09-15 16:40:43
 * @LastEditTime: 2021-11-25 17:31:45
 * @LastEditors: Please set LastEditors
 * @Description: 手写系列 -- 对象篇 测试文件
 * @FilePath: \npm\src\test\HandWrit\JSHand.js
 */
import { ObjectHand } from "../../HandWrit"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let objectHand = new ObjectHand()
  objectHand.start()

  const obj = {
    name: "阿泽",
    age: 24,
    gender: "男",
  }
  const arr = [
    ["name", "阿泽"],
    ["age", 24],
    ["gender", "男"],
  ]

  // entries
  let entriesObj = Object.zm_entries(obj)
  // console.log(entriesObj) // [ [ 'name', '阿泽' ], [ 'age', 24 ], [ 'gender', '男' ] ]

  // fromEntries
  let fromEntriesArr = Object.zm_fromEntries(arr)
  // console.log(fromEntriesArr)  // { name: "阿泽", age: 24, gender: "男" }

  // keys
  let keysObj = Object.zm_keys(obj)
  // console.log(keysObj) // [ 'name', 'age', 'gender' ]

  // values
  let valuesObj = Object.zm_values(obj)
  // console.log(valuesObj) // ["阿泽", 24, "男"]

  // instanceOf
  function Person(name) {
    this.name = name
  }
  const person = new Person("阿泽")
  // console.log(objectHand.instanceOf(Person, person)) // true
  // console.log(objectHand.instanceOf(Person, {})) // false
  // console.log(objectHand.instanceOf(Person, null)) // false

  // is
  const a = { name: "阿泽" }
  const b = a
  const c = { name: "阿泽" }

  // console.log(Object.zm_is(a, b)) // true
  // console.log(Object.zm_is(a, c)) // false  地址值引用不一样
  // console.log(Object.zm_is(+0, -0)) // false  如果用===他们是相等的，is内部处理了
  // console.log(Object.zm_is(NaN, NaN)) // true  如果用===他们是不相等的，is内部处理了

  objectHand.end()
}
