/*
 * @Author: zemin zheng
 * @Date: 2021-09-15 16:40:43
 * @LastEditTime: 2021-11-25 17:31:45
 * @LastEditors: Please set LastEditors
 * @Description: 手写系列 -- vue-router篇 测试文件
 * @FilePath: \npm\src\test\HandWrit\VueRouterHand.js
 */
import { VueRouterHand } from "../../HandWrit"

export default (isLog) => {
  if (!isLog) {
    return
  }

  const routes = [];

  let router = new VueRouterHand({
    mode:"history",
    routes
  })
  router.start()

  


  console.log(router);


  router.end()
}
