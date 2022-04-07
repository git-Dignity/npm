/**
 * LRU缓存函数
 * 
 * 运用你所掌握的数据结构，设计和实现一个LRU(最近最少使用)缓存机制。它应该支持以下操作：
 * 获取数据get和写入数据put
 * 获取数据get(key)如果密钥(ky)存在于缓存中，则获取密钥的值（总是正数），否则返回-1。
 * 写入数据put(key,value)如果密钥已经存在，则变更其数据值；如果密钥不存在，则插入该组「密钥/数据值」。
 * 当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 * 进阶：
 * 你是否可以在O(1)时间复杂度内完成这两种操作？
 * 示例
    LRUCache cache=new LRUCache(2) //缓存容量
    cache.put(1,1);
    cache.put(2,2);
    cache.get(1);   //1返回1
    cache.put(3,3); //该操作会使得密钥2作废
    cache.get(2);   //返回-1未找到)
    cache.put (4,4);    //该操作会使得密钥1作废
    cache.get(1);   //返回-1（未找到）
    cache.get(3);   //返回3
    cache.get(4);   //返回4
 *
 * @class LRUCache
 */
class LRUCache {
  /**
   * @description 打印开始点
   *
   * @memberof LRUCache
   */
  start() {
    console.log("LRU缓存函数类 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof LRUCache
   */
  end() {
    console.log("LRU缓存函数类 end^_^_^_^_^_^_^_^_^_^")
  }

  constructor(size) {
    this.size = size
    this.cache = new Map()
  }

  /**
   * @description 获取数据
   *
   * @param {*} key
   * @return {*} 
   * @memberof LRUCache
   * @example
   * lRUCache.get(2)
   */
  get(key) {
    const hasKey = this.cache.has(key)
    if (hasKey) {
      const val = this.cache.get(key)
      // 每次get一下，这个key就会往前排一下，因为要遵循【最近少使用的移除】
      this.cache.delete(key)
      this.cache.set(key, val)
      return val
    } else {
      return -1
    }
  }

  /**
   * @description 为什么要先删除再set，因为Map要保证唯一性
   * @description 获取第一个map的key：this.cache.keys().next()
   *
   * @description 写入数据
   * 
   * @param {*} key
   * @param {*} val
   * @memberof LRUCache
   * @example
   * lRUCache.put(2, 2)
   */
  put(key, val) {
    const hasKey = this.cache.has(key)
    if (hasKey) {
      this.cache.delete(key)
    }
    this.cache.set(key, val)
    if (this.cache.size > this.size) {
      this.cache.delete(this.cache.keys().next().value)
    }
  }
}

export default LRUCache
