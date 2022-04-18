/*
 * @Author: zemin zheng
 * @Date: 2021-09-15 16:40:43
 * @LastEditTime: 2021-11-25 17:31:45
 * @LastEditors: Please set LastEditors
 * @Description: 手写系列 -- 对象篇 测试文件
 * @FilePath: \npm\src\test\HandWrit\vueHand.js
 */
import { VueHand } from "../../HandWrit"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let vueHand = new VueHand()
  vueHand.start()

  const template =
    '{{ user["name"] }}，今天你又学习了吗 - 用户ID: {{ user.id }}'

  const data = {
    user: {
      id: 10086,
      name: "阿泽",
    },
  }

  const render1 = vueHand.render1(template, data)
  //   console.log(render1)  // "阿泽，今天你又学习了吗 - 用户ID: 10086"

  const render2 = vueHand.render2(template, data)
  //   console.log(render2)  // "阿泽，今天你又学习了吗 - 用户ID: 10086"

  vueHand.end()
}
