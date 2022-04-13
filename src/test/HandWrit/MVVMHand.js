/*
 * @Author: zemin zheng
 * @Date: 2021-09-15 16:40:43
 * @LastEditTime: 2022-04-13 10:15:21
 * @LastEditors: zemin zheng
 * @Description: 手写系列 -- Promise篇 测试文件
 * @FilePath: \npm\src\test\HandWrit\MVVMHand.js
 */
import { PromiseHand } from "../../HandWrit"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let promiseHand = new PromiseHand()
  promiseHand.start()


  promiseHand.end()
}
