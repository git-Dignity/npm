/*
 * @Author: your name
 * @Date: 2021-09-15 16:40:43
 * @LastEditTime: 2021-11-23 23:15:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \npm\src\test\HandWrit\JSHand.js
 */
import { ArrayHand } from "../../HandWrit"
import { ArrayTool } from "../../JsLib"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let arrayHand = new ArrayHand()
  arrayHand.start()

  const players = [
    { name: "科比", num: 24 },
    { name: "詹姆斯", num: 23 },
    { name: "保罗", num: 3 },
    { name: "威少", num: 0 },
    { name: "杜兰特", num: 35 },
  ]

  // forEach
  players.zm_forEach((item, index, arr) => {
    // console.log(item, index)
    // {name: '科比', num: 24} 0
    // {name: '詹姆斯', num: 23} 1
    // {name: '保罗', num: 3} 2
    // {name: '威少', num: 0} 3
    // {name: '杜兰特', num: 35} 4
  })

  // map
  const mapArr = players.zm_map((item, index) => {
    return item.num + 1
  })
  //   console.log(mapArr);  // [25, 24, 4, 1, 36]

  const filterArr = players.zm_filter((item) => item.num >= 23)
  //   console.log(filterArr) //  [ { name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '杜兰特', num: 35 }]

  // every
  const everyArr = players.zm_every((item) => item.num >= 23)
  // console.log(everyArr) // false
  const everyArr1 = players.zm_every((item) => item.num >= 0)
  // console.log(everyArr1) // true

  // some
  const someArr = players.zm_some((item) => item.num >= 23)
  // console.log(someArr) // true
  const someArr1 = players.zm_some((item) => item.num >= 50)
  // console.log(someArr1) // false

  // reduce
  let arrayTool = new ArrayTool()
  const playersTmp = [
    { name: "科比", num: 20 },
    { name: "詹姆斯", num: 30 },
    { name: "保罗", num: 0 },
    { name: "保罗", num: 0 },
  ]

  // example1：数组项求和，第二个参数已传
  const sum = playersTmp.zm_reduce((pre, next) => {
    return pre + next.num
  }, 0)
  // console.log(sum) // 50

  // example2：数组项求和，第二个参数未传
  const sum2 = playersTmp.zm_reduce((pre, next) => {
    return pre + next.num
  })
  // console.log(sum2) // 50

  // example3：数组项求和，第二个参数已传，从10开始累加
  const sum3 = playersTmp.zm_reduce((pre, next) => {
    return pre + next.num
  }, 10)
  // console.log(sum3) // 60

  // example4：求数组项最大值，第二个参数已传
  const sum4 = [11, 2, 5, 70].zm_reduce((pre, next) => {
    return Math.max(pre, next)
  }, 0)
  // console.log(sum4) // 70

  // example5：一维数组去重，第二个参数已传
  const newArr = [1, 1, 5, 6, 8, 8, 10].zm_reduce(function (prev, cur) {
    !prev.includes(cur) && prev.push(cur)
    return prev
  }, [])
  // console.log(newArr) // [1, 5, 6, 8, 10]

  // example6：二维数组去重，第二个参数已传

  const newArr1 = playersTmp.zm_reduce(function (prev, cur) {
    !isContains(prev, cur) && prev.push(cur)
    return prev
  }, [])
  // console.log(newArr1) // [({ name: "科比", num: 20 }, { name: "詹姆斯", num: 30 }, { name: "保罗", num: 0 })]

  // 判断cur对象是否存在于prev数组中
  function isContains(prev, cur) {
    if (!prev) {
      return false
    }

    // 判断cur、item是否完全相等
    return prev.some((item) => arrayTool.equals(cur, item))
  }
  //reduce end

  // findIndex
  const findIndexArr = players.zm_findIndex((item) => item.name === "詹姆斯")
  // console.log(findIndexArr) // 1
  const findIndexArr1 = players.zm_findIndex((item) => item.name === "安东尼")
  // console.log(findIndexArr1) // -1

  // find
  const findArr = players.zm_find((item) => item.name === "科比")
  // console.log(findArr) // { name: '科比', num: 24 }
  const findArr1 = players.zm_find((item) => item.name === "安东尼")
  // console.log(findArr1) // undefined

  const fillArr = players.zm_fill("吖泽", 1, 3)
  // console.log(fillArr); // {name: '科比', num: 24},"吖泽","吖泽", {name: '威少', num: 0},{name: '杜兰特', num: 35}



  // console.log([1, 2, 3].zm_includes(2)) // true
  // console.log([1, 2, 3, NaN].zm_includes(NaN)) // true
  // console.log([1, 2, 3].zm_includes(1,0)) // true
  // console.log([1, 2, 3].zm_includes(1,2)) // false
  console.log([1, 2, 3].zm_includes(1,-2)) // false

  arrayHand.end()
}
