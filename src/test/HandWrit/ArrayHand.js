/*
 * @Author: your name
 * @Date: 2021-09-15 16:40:43
 * @LastEditTime: 2021-11-22 18:13:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \npm\src\test\HandWrit\JSHand.js
 */
import { ArrayHand } from "../../HandWrit"

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

  arrayHand.end()
}
