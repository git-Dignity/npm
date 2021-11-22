/*
 * @Author: your name
 * @Date: 2021-09-15 16:40:43
 * @LastEditTime: 2021-11-22 17:15:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \npm\src\test\HandWrit\JSHand.js
 */
import { JSHand } from "../../HandWrit"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let jSHand = new JSHand()
  jSHand.start()

  // new的例子
  function Person(name, age) {
    this.name = name
    this.age = age
    this.sex = "male"
  }
  Person.prototype.isHandsome = true
  Person.prototype.sayName = function () {
    console.log(`Hello , my name is ${this.name}`)
  }

  let handsomeBoy = jSHand.objectFactory(Person, "Nealyang", 25)
  //   console.log(handsomeBoy.name) // Nealyang
  //   console.log(handsomeBoy.isHandsome) // true
  //   handsomeBoy.sayName() // Hello , my name is Nealyang

  // call例子
  var value = 2

  var obj11 = {
    value: 1,
  }

  function bar(name, age) {
    return {
      value: this ? this.value : value,
      name: name,
      age: age,
    }
  }

  bar.call(null)

  // console.log(bar()); //  {value: 2, name: undefined, age: undefined}

  // console.log(bar.myCall(obj11, "kevin", 18)) // {value: 1, name: {…}, age: "kevin"}

  // console.log(bar.myCall1(obj11, "kevin", 18)) // {value: 1, name: {…}, age: "kevin"}

  // apply例子
  // console.log(bar.myApply(obj11, ['kevin', 18]));  // {value: 1, name: {…}, age: "kevin"}

  // bind例子
  // var obj45 = { name: "Tom" }
  // function fun() {
  //   console.log(this.name)
  // }
  // fun.mybind2(obj45, 1, 2)() // Tom

  jSHand.end()
}
