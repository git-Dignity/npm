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

  // console.log(objectHand.instanceOf1(person, Person)) // true
  // console.log(objectHand.instanceOf1({}, Person)) // false
  // console.log(objectHand.instanceOf1(null, Person)) // false

  // is
  const a = { name: "阿泽" }
  const b = a
  const c = { name: "阿泽" }

  // console.log(Object.zm_is(a, b)) // true
  // console.log(Object.zm_is(a, c)) // false  地址值引用不一样
  // console.log(Object.zm_is(+0, -0)) // false  如果用===他们是相等的，is内部处理了
  // console.log(Object.zm_is(NaN, NaN)) // true  如果用===他们是不相等的，is内部处理了

  // assign
  const testa = { name: "阿泽" }
  const testb = { name: "Dignity_", age: 22 }
  const testc = { age: 18, gender: "男" }

  const testd = Object.zm_assign(testa, testb, testc)
  // console.log(testd) // { name: 'Dignity_', age: 18, gender: '男' }
  // console.log(testa === testd) // true

  // merge array
  var object = {
    a: [{ b: 2 }, { d: 4 }],
  }
  objectHand.merge(object, { a: [{ c: 3 }, { e: 5 }] })
  // console.log(JSON.stringify(object)) // {"a":[{"b":2},{"d":4},{"c":3},{"e":5}]}

  // merge object
  var object = {
    a: { b: { c: 1 } },
  }
  objectHand.merge(object, { a: { b: { d: 2 } } })
  // console.log(JSON.stringify(object));  // {"a":{"b":{"c":1,"d":2}}}

  // overwrite primitive value
  // 如果后面的属性和目标对象的属性一样（且非undefined），后者会覆盖前者
  var object = {
    a: { b: 1 },
  }
  objectHand.merge(object, { a: { b: 2 } })
  // console.log(JSON.stringify(object));  // {"a":{"b":2}}

  // // skip undefined
  // 如果后面的属性和目标对象的属性一样（且后者是undefined），值还是前者
  object = {
    a: { b: 1 },
  }
  objectHand.merge(object, { a: { b: undefined } })
  // console.log(JSON.stringify(object));  // {"a":{"b":1}}

  // multiple sources
  // 若值为数组或者对象，则进行合并属性值
  var object = {
    a: { b: { c: 1, d: [1] } },
  }
  objectHand.merge(object, { a: { b: { e: 2 } } }, { a: { b: { d: [2] } } })
  // console.log(JSON.stringify(object));  // {"a":{"b":{"c":1,"d":[1,2],"e":2}}}

  const jsonStringify1 = objectHand.jsonStringify({ x: 5 })
  // console.log(jsonStringify1) // "{"x":5}"

  const jsonStringify2 = objectHand.jsonStringify([1, "false", false])
  // console.log(jsonStringify2) // "[1,"false",false]"

  const jsonStringify3 = objectHand.jsonStringify({ b: undefined, c:[1], d:{a:1} })
  // console.log(jsonStringify3) // "{"b":"undefined","c":[1],"d":{"a":1}}"

  objectHand.end()
}
