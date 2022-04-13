/*
 * @Author: zemin zheng
 * @Date: 2022-04-13 15:06:58
 * @LastEditTime: 2022-04-13 15:29:23
 * @LastEditors: zemin zheng
 * @Description: 基于 Localstorage 设计一个 1M 的缓存系统，需要实现缓存淘汰机制
 * 设计思路如下：
 * 1. 存储的每个对象需要添加两个属性：分别是过期时间和存储时间。
 * 2. 利用一个属性保存系统中目前所占空间大小，每次存储都增加该属性。
 * 3. 当该属性值大于 1M 时，需要按照时间排序系统中的数据，删除一定量的数据保证能够存储下目前需要存储的数据。
 * 4. 每次取数据时，需要判断该缓存数据是否过期，如果过期就删除。
 * 
 * https://juejin.cn/post/6844903598707441672#heading-2
 * 
 * @FilePath: \npm\src\Storage\Localstorage1M.js
 */

class Localstorage1M {
  /**
   * @description 打印开始点
   *
   * @memberof Localstorage1M
   */
  start() {
    console.log("基于 Localstorage 设计一个 1M 的缓存系统 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof Localstorage1M
   */
  end() {
    console.log("基于 Localstorage 设计一个 1M 的缓存系统 end^_^_^_^_^_^_^_^_^_^")
  }

  constructor() {
    let store = localStorage.getItem('cache')
    if (!store) {
      store = {
        maxSize: 1024 * 1024,
        size: 0
      }
      this.store = store
    } else {
      this.store = JSON.parse(store)
    }
  }
  set(key, value, expire) {
    this.store[key] = {
      date: Date.now(),
      expire,
      value
    }
    let size = this.sizeOf(JSON.stringify(this.store[key]))
    if (this.store.maxSize < size + this.store.size) {
      console.log('超了-----------');
      var keys = Object.keys(this.store);
      // 时间排序
      keys = keys.sort((a, b) => {
        let item1 = this.store[a], item2 = this.store[b];
        return item2.date - item1.date;
      });
      while (size + this.store.size > this.store.maxSize) {
        let index = keys[keys.length - 1]
        this.store.size -= this.sizeOf(JSON.stringify(this.store[index]))
        delete this.store[index]
      }
    }
    this.store.size += size

    localStorage.setItem('cache', JSON.stringify(this.store))
  }
  get(key) {
    let d = this.store[key]
    if (!d) {
      console.log('找不到该属性');
      return
    }
    if (d.expire < Date.now() - d.date) {
      console.log('过期删除');
      delete this.store[key]
      localStorage.setItem('cache', JSON.stringify(this.store))
    } else {
      return d.value
    }
  }
  /**
   * @description 计算大小
   *
   * @param {*} str
   * @param {*} charset
   * @return {*} 
   * @memberof Localstorage1M
   */
  sizeOf(str, charset) {
    var total = 0,
      charCode,
      i,
      len;
    charset = charset ? charset.toLowerCase() : '';
    if (charset === 'utf-16' || charset === 'utf16') {
      for (i = 0, len = str.length; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode <= 0xffff) {
          total += 2;
        } else {
          total += 4;
        }
      }
    } else {
      for (i = 0, len = str.length; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode <= 0x007f) {
          total += 1;
        } else if (charCode <= 0x07ff) {
          total += 2;
        } else if (charCode <= 0xffff) {
          total += 3;
        } else {
          total += 4;
        }
      }
    }
    return total;
  }
}

export default Localstorage1M
