/*
 * @Author: zemin zheng
 * @Date: 2021-09-15 15:58:11
 * @LastEditTime: 2022-04-13 15:31:47
 * @LastEditors: zemin zheng
 * @Description: 基于 Localstorage 设计一个 1M 的缓存系统 -- 测试文件
 * @FilePath: \npm\src\test\Storage\Localstorage1M.js
 */
import { Localstorage1M } from "../../Storage"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let localstorage1M = new Localstorage1M(2)
  localstorage1M.start()

  localstorage1M.set('a', 1, 3000)
  console.log(localstorage1M.get('a')); // 1
  setTimeout(()=>{
    console.log(localstorage1M.get('a'), '执行');   // undefined "执行"
  },4000)


  localstorage1M.end()
}
