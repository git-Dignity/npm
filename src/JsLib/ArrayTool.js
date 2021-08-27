/**
 * 数组工具类
 *
 * @class ArrayTool
 */
class ArrayTool {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof ArrayTool
   */
  start() {
    console.log("数组工具类ArrayTool start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof ArrayTool
   */
  end() {
    console.log("数组工具类ArrayTool end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 查询数组中是否存在某个元素并返回元素第一次出现的下标
   * @param {*} item 要查询的元素
   * @param {Array} data
   * @return {Number} 元素第一次出现的下标
   * @memberof Tool
   * @example
   * inArray(2,[1,2,3,4])  // 1
   */
  inArray(item, data) {
    for (let i = 0; i < data.length; i++) {
      if (item === data[i]) {
        return i
      }
    }
    return -1
  }

  /**
   * @description 数组乱序
   * @param {Array} arr
   * @return {Array}
   * @memberof Tool
   * @example
   * arrScrambling([1,5,9])  // [5,1,9]
   */
  arrScrambling(arr) {
    let array = arr
    let index = array.length
    while (index) {
      index -= 1
      let randomIndex = Math.floor(Math.random() * index)
      let middleware = array[index]
      array[index] = array[randomIndex]
      array[randomIndex] = middleware
      // console.log(array[index])
      // console.log(array[randomIndex])
      // console.log("----------")
    }
    return array
  }

  /**
   * @description 数组交集
   * @param {Array} arr1
   * @param {Array} arr2
   * @return {Array}
   * @memberof Tool
   * @example
   * similarity([1,2,3],[5,2])  // [2]
   */
  similarity(arr1, arr2) {
    return arr1.filter((v) => arr2.includes(v))
  }

  /**
   * @description 数组中某元素出现的次数  ([1,2,2,3],2)
   * @param {Array} arr
   * @param {Number/String} value
   * @return {Number}
   * @memberof Tool
   * @example
   * countOccurrences([1,2,2,3],2)  // 2
   * countOccurrences([1, 1, 2, 1, '1', '1', 2, 3], "1"); // 2
   */
  countOccurrences(arr, value) {
    // 最后面那个0是我们将index索引从0开始，也就是a默认为0
    // reduce第一个参数的计算后的返回值，这里来说，a为0，因为后面加上参数0
    // reduce第二个参数是数组的第n个

    return arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0)
  }

  /**
   * @description 分割指定长度的元素数组
   *
   * @param {Array} list 传进来的数组
   * @param {number} [size=1] 要分成几个为一组的数据
   * @param {Array} [cacheList=[]] 返回出去的结果
   * @return {*}
   * @memberof Tool
   * @example
   * listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9])  // [[1], [2], [3], [4], [5], [6], [7], [8], [9]]
   * listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)  // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
   * listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)  // []
   * listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], -1)  // []
   */
  listChunk(list, size = 1, cacheList = []) {
    var tmp = [...list]
    if (size <= 0) {
      return cacheList
    }

    while (tmp.length) {
      cacheList.push(tmp.splice(0, size)) // 因为split会改变原数组
    }
    return cacheList
  }

  /**
   * @description 简单的深拷贝
   *
   * @param {Object/Array} obj 目标数组
   * @return {Object/Array}  目标数组Copy
   * @memberof ArrayTool
   * @example
   * const person={
   *    name:'xiaoming',
   *    child:{
   *       name:'Jack',
   *       eat: function(){
   *           console.log('阿巴');
   *       }
   *    }
   * }
   *
   * let personCopy = deepCopy(person)
   * personCopy.child.eat = []
   * console.log(person.child.eat);      // fn()
   * console.log(personCopy.child.eat); // []
   * // 确实两个对象值引用不相同了
   */
  deepCopy(obj) {
    if (typeof obj != "object" || obj == null) {
      return obj
    }

    return JSON.parse(JSON.stringify(obj))
  }

  /**
   * @description 数组去重
   * @description 原理：利用Set中不能出现重复元素的特征
   * @param {Array} arr 目标数组
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * uniqueArray([undefined, null, null, 1, 1])  // [undefined, null, 1]
   */
  uniqueArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("The first paramter must be an array")
    }
    if (arr.length == 1) {
      return arr
    }

    return [...new Set(arr)]
  }

  /**
   * @description 利用属性名比较
   * @description localeCompare对字符串进行排序
   * @description 思考：对每一个数组进行特定排序（localeCompare），因为数组元素可能位置不同但元素内容相同，所以必须按照某一顺序对其进行排序，这里按首字母对字符串进行排序
   * @description 排完序用Object.values属性名唯一性进行去重
   * @description 对多维数组(矩阵)去重（方法一）
   *
   * @param {Array} arr
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * uniqueMultiDimensionalArray([
   *   ["你的", "我", "它"],
   *   ["我", "你的", "它"],
   *   ["一", "二", "三"],
   *   ["三", "二", "一"],
   *   ["你d", "a", "它"],
   *   ["a", "你d", "它"],
   *   ["one", "two", "three"],
   *   ["three", "two", "one"]
   * ])   // [ ["你的", "它", "我"], ["二", "三", "一"], ["你d", "它", "a"], ["one", "three", "two"] ]
   */
  uniqueMultiDimensionalArray(arr) {
    let res = {}

    // 进行排序
    arr.map((item) => {
      item.sort((a, b) => a.localeCompare(b))
      res[item] = item
    })
    return Object.values(res)
  }

  /**
   * @description 利用ES6语法中的Set，Set中的每个值都是唯一的
   * @description 先将数组按字符串排序，顺便将其多维数组转成字符串（方便使用Set方法进行去重），Set去重后，使用逗号切割成数组
   * @description 对多维数组(矩阵)去重（方法二）
   *
   * @param {Array} arr
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * uniqueMultiDimensionalArray1([
   *   ["你的", "我", "它"],
   *   ["我", "你的", "它"],
   *   ["一", "二", "三"],
   *   ["三", "二", "一"],
   *   ["你d", "a", "它"],
   *   ["a", "你d", "它"],
   *   ["one", "two", "three"],
   *   ["three", "two", "one"]
   * ])   // [ ["你的", "它", "我"], ["二", "三", "一"], ["你d", "它", "a"], ["one", "three", "two"] ]
   */
  uniqueMultiDimensionalArray1(arr) {
    let res = []

    // 进行排序
    arr.map((item) => {
      res.push(item.sort((a, b) => a.localeCompare(b)).toString())
    })
    // console.log(res); // ["你的,它,我", "你的,它,我", "二,三,一", "二,三,一", "你d,它,a", "你d,它,a", "one,three,two", "one,three,two"]
    
    // return Array.from(new Set(res)).map(item => item.split(','))
    return [...new Set(res)].map((item) => item.split(",")) // 上下等价
  }

  /**
   * @description 布尔全等判断
   * @description 判断arr数组中，满足fn，如果全部都满足即为true；如果有一个不满足条件即为false
   *
   * @param {Array} arr
   * @param {Function} [fn=Boolean]
   * @return {Boolean}
   * @memberof ArrayTool
   * @example
   * booleanAll([4, 2, 3], x => x > 1);   // true
   * booleanAll([4, 2, 3], x => x > 2);   // false
   */
  booleanAll(arr, fn = Boolean) {
    return arr.every(fn)
  }

  /**
   * @description 检查数组各项相等
   *
   * @param {Array} arr
   * @return {Boolean}
   * @memberof ArrayTool
   * @example
   * allEqual([1, 1, 1]);   // true
   * allEqual([1, 2, 3, 4, 5, 6]);   // false
   */
  allEqual(arr) {
    return arr.every((val) => val === arr[0])
  }

  /**
   * @description 判断两个数字约等于
   *
   * @param {Number} v1
   * @param {Number} v2
   * @param {number} [epsilon=0.001] 范围
   * @return {Boolean}
   * @memberof ArrayTool
   * @example
   * approximatelyEqual(Math.PI / 2.0, 1.5708, 0.001);   // true
   * approximatelyEqual(Math.PI / 2.0, 2.5708, 0.002);   // false
   */
  approximatelyEqual(v1, v2, epsilon = 0.001) {
    return Math.abs(v1 - v2) < epsilon
  }

  /**
   * @description 可以根据每个元素返回的值，使用reduce() 和push() 将元素添加到第二次参数fn中
   * @description 利用reduce，第一个参数acc就是每次循环处理后将值存在reduce的第二个参数[[], []]里面，第一次循环从[[], []]拿出来（第一次是空的）；
   * @description 于是开始赋值filter[i]如果是true，就存放在第二个参数里面的第一个数组；如果是false则存在在第二个参数里面的第二个数组，累加过程的
   * @description 拆分断言后的数组
   *
   * @param {*} arr
   * @param {*} filter
   * @return {*}
   * @memberof ArrayTool
   * @example
   * bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true])  // [ ['beep', 'boop', 'bar'], ['foo'] ]
   */
  bifurcate(arr, filter) {
    return arr.reduce(
      (acc, val, i) => {
        // console.log(acc, val, i)
        return acc[filter[i] ? 0 : 1].push(val), acc
      },
      [[], []]
    )
  }

  /**
   * @description 其它类型转数组
   *
   * @param {*} val Array/Number/Boolean/String
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * castArray(1);    // [1]
   * castArray([1]);  // [1]
   * castArray("消息No One Time跟我说");  // ["消息No One Time跟我说"]
   */
  castArray(val) {
    return Array.isArray(val) ? val : [val]
  }

  /**
   * @description 去除数组中的无效/无用值
   *
   * @param {Array} arr 目标数组
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])  // [1, 2, 3, "a", "s", 34]
   */
  compact(arr) {
    return arr.filter(Boolean)
  }

  /**
   * @description 还可以使用arr.flat(Infinity)
   * @description 递归扁平化数组
   *
   * @param {Array} arr 目标数组
   * @return {Array}  一维数组
   * @memberof ArrayTool
   * @example
   * deepFlatten([1, [2], [[3], 4], 5])  // [1, 2, 3, 4, 5]
   */
  deepFlatten(arr) {
    return [].concat(
      ...arr.map((v) => (Array.isArray(v) ? this.deepFlatten(v) : v))
    )
  }
}

export default ArrayTool

// 8个工程必备的JavaScript代码片段（建议添加到项目中）：https://juejin.cn/post/6999391770672889893

// https://juejin.cn/post/6844903966526930951  第13点
