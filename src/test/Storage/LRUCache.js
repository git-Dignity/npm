/*
 * @Author: zemin zheng
 * @Date: 2021-09-15 15:58:11
 * @LastEditTime: 2022-03-31 14:30:52
 * @LastEditors: zemin zheng
 * @Description: 浏览器存储相关LRUCache工具函数 -- 测试文件
 * @FilePath: \npm\src\test\LRUCache\LRUCache.js
 */
import { LRUCache } from "../../Storage"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let lRUCache = new LRUCache(2)
  lRUCache.start()

  lRUCache.put(1, 1)
  lRUCache.put(2, 2)
  console.log(lRUCache.get(1)) //返回1
  lRUCache.put(3, 3) //该操作会使得密钥2作废
  console.log(lRUCache.get(2)) //返回-1未找到)
  lRUCache.put(4, 4) //该操作会使得密钥1作废
  console.log(lRUCache.get(1)) //返回-1（未找到）
  console.log(lRUCache.get(3)) //返回3
  console.log(lRUCache.get(4)) //返回4

  lRUCache.end()
}
