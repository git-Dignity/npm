/*
 * @Author: zemin zheng
 * @Date: 2022-04-12 10:01:42
 * @LastEditTime: 2022-04-12 10:03:13
 * @LastEditors: zemin zheng
 * @Description: 面试 -- 网络类 -- 测试文件
 * @FilePath: \npm\src\test\Interview\Internet.js
 */
 
import { Internet } from "../../Interview"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let internet = new Internet()
  internet.start()
  



  internet.end()
}
