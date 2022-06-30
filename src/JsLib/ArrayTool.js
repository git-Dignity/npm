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
   * @memberof ArrayTool
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
   * @description 实现思路：
   * @description 通过while循环，内部使用Math.random随机数让数组的项乱赋值
   *
   * @description 数组乱序
   * @param {Array} arr
   * @return {Array}
   * @memberof ArrayTool
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
   * @description 数组交集（方法一）
   * @param {Array} arr1
   * @param {Array} arr2
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * similarity([1,2,3],[5,2])  // [2]
   */
  similarity(arr1, arr2) {
    return arr1.filter((v) => arr2.includes(v))
  }

  /**
   * @description has() 方法返回一个布尔值来指示对应的值value是否存在Set对象中。
   *
   * @description 数组交集（方法二）
   * @param {Array} arr1
   * @param {Array} arr2
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * intersection([1,2,3],[5,2])  // [2]
   */
  intersection(arr1, arr2) {
    const s = new Set(arr2)
    return arr1.filter((a1) => s.has(a1))
  }

  /**
   * @description 对两个数组的每个元素执行了函数之后，返回两个数组中存在的元素列表。
   * @description 返回arr1和arr2满足fn函数后的交集（arr1）
   * @description 两数组都符合条件的交集
   *
   * @param {Array} arr1
   * @param {Array} arr2
   * @param {Function} fn
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * intersectionBy([2.1,2.5, 1.2], [2.3, 3.4], Math.floor)  // [2.1, 2.5]
   */
  intersectionBy(arr1, arr2, fn) {
    const s = new Set(arr2.map(fn))
    return arr1.filter((a1) => s.has(fn(a1)))
  }

  /**
   * @description 获取差集 数组arr1相对于arr2所没有的
   *
   * @param {Array} arr1
   * @param {Array} arr2
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * diffArr([2.1,2.5, 1.2], [2.3, 2.5])  // [2.1, 1.2]
   */
  diffArr(arr1, arr2) {
    return arr1.filter(function (val) {
      return arr2.indexOf(val) === -1 // -1代表找不到
    })
  }

  /**
   * @description 大家一起合并，然后去重
   * @description 获取并集
   *
   * @param {Array} arr1
   * @param {Array} arr2
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * unionArr([2.1,2.5, 1.2], [2.3, 2.5])  // [2.1, 2.5, 1.2, 2.3]
   */
  unionArr(arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2]))
  }

  /**
   * @description 获取补集 两个数组各自没有的集合
   *
   * @param {Array} arr1
   * @param {Array} arr2
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * complementArr([2.1,2.5, 1.2], [2.3, 2.5])  // [2.1, 1.2, 2.3]
   */
  complementArr(arr1, arr2) {
    const _arr1Set = new Set(arr1)
    const _arr2Set = new Set(arr2)
    return [
      ...arr1.filter((item) => !_arr2Set.has(item)),
      ...arr2.filter((item) => !_arr1Set.has(item)),
    ]
  }

  /**
   * @description 数组中某元素出现的次数  ([1,2,2,3],2)
   * @param {Array} arr
   * @param {Number/String} value
   * @return {Number}
   * @memberof ArrayTool
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
   * @memberof ArrayTool
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
   * @description 提问：
   * @description 1. 为什么使用WeakMap？
   * @description 因为WeakMap是弱引用，可以防止递归进入死循环
   * @description 2. 为什么使用obj.constructor()创建空对象？
   * @description 构造函数新建一个空的对象，而不是使用{}或者[],这样可以保持原形链的继承
   * @description 3. 有必要加上obj.hasOwnProperty(key)判断
   * @description 判断属性是否来自原型链上，因为for..in..也会遍历其原型链上的可枚举属性
   *
   * @description 深拷贝（递归拷贝）
   *
   * @param {Array} obj 目标数组
   * @param {WeakMap} [cache=new WeakMap()]
   * @return {*}
   * @memberof ArrayTool
   */
  deepCopy1(obj, cache = new WeakMap()) {
    // console.log(obj);
    if (obj === null || typeof obj !== "object") return obj
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)

    if (cache.has(obj)) return cache.get(obj) // 如果出现循环引用，则返回缓存的对象，防止递归进入死循环（Node的循环引用也返回缓存对象）
    let cloneObj = new obj.constructor() // 使用对象所属的构造函数创建一个新对象
    cache.set(obj, cloneObj) // 缓存对象，用于循环引用的情况
    // console.log(cloneObj, '---');

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloneObj[key] = this.deepCopy1(obj[key], cache) // 递归拷贝
      }
    }

    return cloneObj
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
   * @description filter过滤每条数据，为true才返回；
   * @description 再借助indexOf查的是第一条，那如果有重复的值，索引肯定和第一条对应不上，自然不会返回后面重复的值
   *
   * @description indexOf去重
   *
   * @param {*} arr
   * @return {*}
   * @memberof ArrayTool
   * @example
   * uniqueArray1([undefined, null, null, 1, 1])  // [undefined, null, 1]
   */
  uniqueArray1(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
  }

  /**
   * @description Map记录，借助reduce有保存值的特性，每个item判断是否存过，来去重
   *
   * @description 数组去重
   *
   * @param {Array} arr 目标数组
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * uniqueArray2([undefined, null, null, 1, 1])  // [undefined, null, 1]
   */
  uniqueArray2(arr) {
    const newArr = []
    arr.reduce((pre, next) => {
      if (!pre.has(next)) {
        pre.set(next, 1)
        newArr.push(next)
      }
      return pre
    }, new Map())
    return newArr
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
   * @description Math.abs：返回绝对值
   *
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

  /**
   * @description depth写999，也不会循环很多次，因为只要判断不是数组，他就不会继续递归下去
   * @description 指定深度扁平化数组
   *
   * @param {Array} arr 目标数组
   * @param {number} [depth=1] 指定深度
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
   * flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); //  [1, 2, 3, [4, 5], 6, 7, 8]
   * flatten([1, [2, [3, [4, 5], 6], 7], 8], 3); //  [1, 2, 3, 4, 5, 6, 7, 8]
   */
  flatten(arr, depth = 1) {
    if (depth > 0) {
      return arr.reduce((a, v) => {
        return a.concat(
          depth > 1 && Array.isArray(v) ? this.flatten(v, depth - 1) : v
        )
      }, [])
    }

    // depth为0的时候走这
    return arr.slice()
  }

  /**
   * @description has() 方法返回一个布尔值来指示对应的值value是否存在Set对象中。
   * @description 寻找差异（查找两个数组之间的差异，并返回第一个数组独有的）
   *
   * @description 可以使用filter + indexof过滤（在上面的diffArr）（方法一）
   * @description 差集（数组arr1相对于arr2所没有的）（方法二）
   *
   * @param {Array} arr1
   * @param {Array} arr2
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * difference([1, 2, 3], [1, 5, 4])  // [2, 3]
   */
  difference(arr1, arr2) {
    const s = new Set(arr2)
    return arr1.filter((a1) => !s.has(a1))
  }

  /**
   * @description has() 方法返回一个布尔值来指示对应的值value是否存在Set对象中。
   * @description 先执行再寻找差异（将给定函数应用于两个列表的每个元素之后，此方法返回两个数组之间的差异）
   *
   * @param {Array} arr1
   * @param {Array} arr2
   * @param {Function} fn 给定函数
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)  // [1.2]
   * differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x)  // [ { x: 2 } ]
   */
  differenceBy(arr1, arr2, fn) {
    const s = new Set(arr2.map(fn))
    return arr1.filter((a1) => !s.has(fn(a1)))
  }

  /**
   * @description 从数组顶部开始删除元素，直到传递的函数返回为true
   * @description 删除不符合条件的值
   *
   * @param {Array} arr
   * @param {Function} func
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * dropWhile([1, 2,3, 4], n => n >= 3)  // [3, 4]
   *
   * 只要第一个返回true就不判断后面的了
   * dropWhile([1, 3,2,1, 4], n => n >= 3) // [3, 2, 1, 4]
   */
  dropWhile(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr = arr.slice(1)
    }

    return arr
  }

  /**
   * @description 返回数组中某值的所有索引（如果此值中未包含该值，则返回一个空数组）
   *
   * @param {Array} arr 目标数组
   * @param {String} val  某值
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * indexOfAll([1, 2, 3, 1, 2, 3], 1)  // [0,3]
   * indexOfAll([1, 2, 3], 4)  // []
   */
  indexOfAll(arr, val) {
    return arr.reduce((acc, el, i) => {
      return el === val ? [...acc, i] : acc
    }, [])
  }

  /**
   * @description 返回指定长度的升序/降序数组
   *
   * @param {Array} arr 目标数组
   * @param {number} [n=1]
   * @param {string} [sort="asc"] asc：升序；desc：降序
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * minN([1, 2, 3])   // [1]
   * minN([1, 2, 3], 2) // [1, 2]
   * minN([1, 2, 4, 3], 3, 'asc') // [1, 2, 3]
   * minN([1, 2, 4, 3], 3, 'desc')  // [4, 3, 2]
   */
  minN(arr, n = 1, sort = "asc") {
    return [...arr]
      .sort((a, b) => (sort === "desc" ? b - a : a - b))
      .slice(0, n)
  }

  /**
   * @description 根据条件反向筛选
   *
   * @param {Function} func
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * [1, 2, 3, 4, 5, 6].filter(arrayTool.negate((n => n % 2 === 0)));  // [ 1, 3, 5 ]
   */
  negate(func) {
    return (...args) => !func(...args)
  }

  /**
   * @description 后面加min，整体值就肯定比min最小值要大，自然不小于最小值
   * @description Math.random() * (max - min + 1))  最大值减去最小值 + 1去乘Math.random()随机数0-1的数，
   * @description 那么就是两个差值的随机数；再去加最小值，算起来肯定不会超出最大值
   *
   * @description 比如：max:20;min:10，那么Math.floor(Math.random() * (max - min + 1))，返回的值肯定是20-10 = 10；10以内的值
   *
   * @description 生成两数之间指定长度的随机数组
   *
   * @param {number} min 最小值
   * @param {number} max 最大值
   * @param {number} [n=1]  返回数组的长度
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * arrayTool.randomIntArrayInRange(10,20,10); // [11, 12, 10, 15, 18, 12, 15, 16, 13, 15]
   * arrayTool.randomIntArrayInRange(10,10,10); // [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
   */
  randomIntArrayInRange(min, max, n = 1) {
    return Array.from(
      { length: n },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    )
  }

  /**
   * @description Math.random() * arr.length  肯定在数组长度的范围内
   * @description 在指定数组中获取随机数
   *
   * @param {Array} arr 目标数组
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * sample([1,5,8,9,10]);  // 10
   * sample([1,5,8,9,10]);  // 5
   * sample([1,5,8,9,10]);  // 1
   */
  sample(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  /**
   * @description 此代码段可用于从数组中获取指定长度的随机数，直至穷尽数组。 使用Fisher-Yates算法对数组中的元素进行随机选择。
   * @description 费雪耶兹（Fisher–Yates） 也被称作高纳德（ Knuth）随机置乱算法(https://blog.csdn.net/lhkaikai/article/details/25627161)
   * @description 原理：比如：arr = [1,2,3,4,5,6,7,8]
   * @description 第一轮：从1到8中随机选择一个数，得到6，则交换当前数组中第8和第6个数，则：[1,2,3,4,5,8,7]  // ,6
   * @description 第二论：从1到7中随机选择一个数，得到2，则交换当前数组中第7和第2个数，则：[1,7,3,4,5,8]  // ,2,6
   * @description 下一个随机数从1到6中摇出，刚好是6，这意味着只需把当前线性表中的第6个数留在原位置，接着进行下一步；以此类推，直到整个排列完成。
   * @description 第三论：从1到6中随机选择一个数，得到6，则交换当前数组中第6和第6个数，则：[1,7,3,4,5]  // ,8,2,6
   * @description 第四论：从1到5中随机选择一个数，得到1，则交换当前数组中第5和第1个数，则：[5,7,3,4]  // ,1,8,2,6
   * @description 第五论：从1到4中随机选择一个数，得到3，则交换当前数组中第4和第3个数，则：[5,7,4]  // ,3,1,8,2,6
   * @description 第六论：从1到3中随机选择一个数，得到3，则交换当前数组中第3和第3个数，则：[5,7]  // ,4,3,1,8,2,6
   * @description 第七论：从1到2中随机选择一个数，得到1，则交换当前数组中第2和第1个数，则：[7]  // ,5,4,3,1,8,2,6
   * @description 截至目前，所有需要的置乱已经完成，所以最终的结果是：7 5 4 3 1 8 2 6
   * @description 在指定数组中获取指定长度的随机数（“洗牌” 数组）
   *
   * @param {Array} [...arr]
   * @param {number} [n=1]
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * sampleSize([1, 2, 3,4], 2);  // [4, 3]
   * sampleSize([1, 2, 3,4], 2);  // [1, 3]
   * sampleSize([1, 2, 3,4], 2);  // [1, 4]
   */
  sampleSize([...arr], n = 1) {
    let m = arr.length
    while (m) {
      const i = Math.floor(Math.random() * m--) // 随机选择一个数，逐渐递减

      ;[arr[m], arr[i]] = [arr[i], arr[m]] // 交换
    }
    return arr.slice(0, n)
  }

  /**
   * @description 根据parent_id生成树结构（阿里一面真题）
   *
   * @param {Array} items 目标数组
   * @param {*} [id=null] 根据特定字段作为id
   * @param {string} [link="parent_id"] 父id
   * @return {Array}
   * @memberof ArrayTool
   * @example
   * const comments = [
   * { id: 1, parent_id: null },
   * { id: 2, parent_id: 1 },
   * { id: 3, parent_id: 1 },
   * { id: 4, parent_id: 2 },
   * { id: 5, parent_id: 4 }
   * ];
   *
   * nest(comments) // [{ id: 1, parent_id: null, children: [
   *    {
   *      id: 2,
   *      parent_id: 1,
   *      children: [
   *         {
   *           id:2,
   *           parent_id: 1,
   *           children: [{id: 4, parent_id: 2, children: [
   *                {id: 5, parent_id: 4, children: [{id: 5, parent_id: 4, children: [] }]}
   *             ]
   *           }]
   *         }
   *      ]
   *    },
   *    { id: 2, parent_id: 1, children: [] }
   * ]}]
   */
  nest(items, id = null, link = "parent_id") {
    return items
      .filter((item) => item[link] === id)
      .map((itemM) => ({ ...itemM, children: this.nest(items, itemM.id) }))
  }

  /**
   * @description 思路：去判断他们可能会相等的情况（数字、日期、非对象）、再去判断不相等的情况（原型、对象长度不一致直接返回false）
   * @description 如果以上都满足，那就是对象数组类型了，通过every函数让对象里面的属性去做递归（只要有一个为false，那结果就为false）
   *
   * @description 情况：全等、日期、不是对象、原型、对象的长度一样、递归
   * @description 在两个变量之间进行深度比较以确定它们是否全等。
   * @description 此代码段精简的核心在于Array.prototype.every()的使用。
   *
   * @description 全等判断
   *
   * @param {*} a 目标变量a
   * @param {*} b 目标变量b
   * @return {Boolean}
   * @memberof ArrayTool
   * @example
   * equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' });  // true
   */
  equals(a, b) {
    if (a === b) {
      return true
    }
    if (a instanceof Date && b instanceof Date) {
      return a.getTime() === b.getTime()
    }

    if (!a || !b || (typeof a !== "object" && typeof b !== "object")) {
      return a === b
    }

    if (a.prototype !== b.prototype) {
      return false
    }
    let keys = Object.keys(a)
    if (keys.length !== Object.keys(b).length) {
      return false
    }

    return keys.every((k) => this.equals(a[k], b[k]))
  }

  /**
   * @description 实现思路
   * @description 负索引：其实也就是你传过来的 索引 - 数组的长度，就可以获取到对应的数组值
   * 
   * @description https://github.com/lgwebdream/FE-Interview/issues/36
   * 
   * @description 使用ES6 的Proxy实现数组负索引。 
   * @description（负索引：例如，可以简单地使用arr[-1]替代arr[arr.length-1]访问最后一个元素，[-2]访问倒数第二个元素，以此类推）
   *
   * @param {Array} arr
   * @return {*} 
   * @memberof ArrayTool
   * @example
   * var proxyArray = arrayTool.proxyArray([1, 2, 3, 4, 5, 6, 7, 8, 9])
     console.log(proxyArray[1]) // 2
     console.log(proxyArray[-10]) // 9
     console.log(proxyArray[-20]) // 8
   */
  proxyArray(arr) {
    const length = arr.length
    return new Proxy(arr, {
      get(target, key) {
        key = +key
        while (key < 0) {
          key += length
        }
        return target[key]
      },
    })
  }

  /**
   * @description 实现思路：
   * @description 1. 利用reduce对数组进行遍历
   * @description 2. 将传入的keyBy给定条件的函数作为函数，参数则是每次reduce遍历的x, y，进行比较，
   * @description 3. 会将大的那个值存到reduce内，即reduce的第二个参数中
   * @description 4. 接着继续reduce循环，直到结束
   * @description 5. 返回reduce的第二个参数，即存的最大值
   * 
   * @description https://q.shanyue.tech/fe/code/646.html
   * @description 如果最大的项有多个，只能返回最后一个
   * @description 实现一个函数 maxBy，根据给定条件找到最大的数组项
   *
   * @param {Array} list 目标数组
   * @param {Function} keyBy 给定条件的函数
   * @return {*} 
   * @memberof ArrayTool
   * @example
   * const data = [{ value: 6 }, { value: 2 }, { value: 7 },{ value: 4 }, { value: 7 },{ value: 1 }]

     const maxBy1 = arrayTool.maxBy1(data, (x) => x.value)
     console.log(maxBy1) //=> {value: 7}
   */
  maxBy1(list, keyBy) {
    return list.reduce((x, y) => {
      return keyBy(x) > keyBy(y) ? x : y
    })
  }

  /**
   * @description 实现思路：这个也有意思
   * @description 1. 使用slice删掉第一项，将这第一项作为reduce初始值传入
   * @description 2. 使用reduce遍历数组list
   * @description 3. 比较。每次遍历的项和初始值比大小，若x大于初始值则替换掉初始值的值为x
   * @description 4. 若相等，则往初始值push进去
   * @description 5. 直到遍历结束，返回acc
   * 
   * @description 如果最大的项有多个，则多个都返回
   * @description 实现一个函数 maxBy，根据给定条件找到最大的数组项（升级版）（方法一）
   *
   * @param {Array} list 目标数组
   * @param {Function} keyBy 给定条件的函数
   * @return {*} 
   * @memberof ArrayTool
   * @example
   * const data = [{ value: 6 }, { value: 2 }, { value: 7 },{ value: 4 }, { value: 7 },{ value: 1 }]

     const maxBy2 = arrayTool.maxBy2(data, (x) => x.value)
     console.log(maxBy2) //=> [{ value: 7 }, { value: 7 }]
   */
  maxBy2(list, keyBy) {
    return list.slice(1).reduce(
      (acc, x) => {
        // console.log(acc, x);
        if (keyBy(x) > keyBy(acc[0])) {
          return [x]
        }
        if (keyBy(x) === keyBy(acc[0])) {
          return [...acc, x]
        }
        return acc
      },
      [list[0]]
    )
  }

  /**
   * @description 实现思路：
   * @description 其实实现思路就是上方的maxBy2一样的，只不过上面用reduce会写法简洁，这里用for实现
   * 
   * @description 实现一个函数 maxBy，根据给定条件找到最大的数组项（升级版）（方法二）
   *
   * @param {Array} list 目标数组
   * @param {Function} keyBy 给定条件的函数
   * @return {*} 
   * @memberof ArrayTool
   * @example
   * const data = [{ value: 6 }, { value: 2 }, { value: 7 },{ value: 4 }, { value: 7 },{ value: 1 }]

     const maxBy3 = arrayTool.maxBy3(data, (x) => x.value)
     console.log(maxBy3) //=> [{ value: 7 }, { value: 7 }]
   */
  maxBy3(array, keyBy) {
    if (!array || !array.length) {
      return null
    }
    const length = array.length
    let max = array[0]
    let result = [max]
    for (let i = 1; i < length; i++) {
      const value = array[i]
      if (keyBy(max) === keyBy(value)) {
        result.push(value)
      } else if (keyBy(max) < keyBy(value)) {
        max = value
        result = [max]
      }
    }
    if (result.length === 1) {
      return result[0]
    }
    return result
  }

  /**
   * @description 实现思路
   * @description 1. 利用reduce对数组进行遍历
   * @description 2. 将每次遍历的x项传入by函数获取目标属性
   * @description 3. 看看acc对象（存储每次遍历的x）有没有该属性
   * @description 4. 有则push，无则创建该属性作为key，val为该遍历的x项
   * 
   * @description https://q.shanyue.tech/fe/code/698.html
   * @description 实现一个函数 groupBy(类似 lodash.groupBy数组分组)
   *
   * @param {Array} collection 目标数组
   * @param {Function} by 按by函数分组
   * @return {Object} 
   * @memberof ArrayTool
   * @example
   * const groupBy = arrayTool.groupBy(
      [
        { id: 1, name: "山月", sex: "male" },
        { id: 2, name: "张三", sex: "female" },
        { id: 3, name: "李四", sex: "female" },
      ],
      (x) => x.sex
     )

     console.log(JSON.stringify(groupBy))
     // {
     //   "male":[{"id":1,"name":"山月","sex":"male"}],
     //   "female":[{"id":2,"name":"张三","sex":"female"},{"id":3,"name":"李四","sex":"female"}]
     // }
   */
  groupBy(collection, by) {
    return collection.reduce((acc, x) => {
      if (acc[by(x)]) {
        acc[by(x)].push(x)
      } else {
        acc[by(x)] = [x]
      }
      return acc
    }, {})
  }

  /**
   * @description 实现思路
   * @description 1. 其实就内部实现两个方法where、orderBy
   * @description 2. 第一个方法where可对属性进行过滤，那自然想到filter去过滤数据
   * @description 3. 使用Object.entries去解析拿到where传入的对象进行解析获取属性
   * @description 4. 从而再进行链式使用every进行遍历，where中可传正则，先判断是否是正则表达式
   * @description 5. 是的话就使用test判断值是否相等，不是正则直接使用===判断是否相等
   * @description 6. 过滤完后返回this
   * @description 7. 第二个方法orderBy对属性进行排序，使用sort
   * 
   * @description Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组(对象 -> 数组)
   * 
   * @description https://q.shanyue.tech/fe/code/712.html
   * @description 如何实现一个 ORM 类似的 find 链式调用
   *
   * @param {Array} data 目标数组
   * @return {Array} 
   * @memberof ArrayTool
   * @example
   * var dataArr = [
      {userId: 8, title: 'title1'},
      {userId: 11, title: 'other'},
      {userId: 15, title: null},
      {userId: 19, title: 'title2'}
     ];
    
     // 查找data中，符合where中条件的数据，并根据orderBy中的条件进行排序
     const result = arrayTool.findORM(dataArr).where({
       "title": /\d$/   // 这里意思是过滤出数组中，满足title字段中符合 /\d$/的项（数字）
     }).orderBy('userId', 'desc');  // 这里的意思是对数组中的项按照userId进行倒序排列
    
     console.log(result.data); // [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];
   */
  findORM(data) {
    return {
      data,
      where(match) {
        this.data = this.data.filter((item) => {
          return Object.entries(match).every(([key, value]) => {
            if (
              value instanceof RegExp &&
              Object.prototype.toString.call(value).slice(8, -1) === "RegExp"
            ) {
              return value.test(item[key])
            }
            return item[key] === value
          })
        })
        return this
      },

      orderBy(key, type) {
        this.data.sort((x, y) =>
          type !== "desc" ? x[key] - y[key] : y[key] - x[key]
        )
        return this
      },
    }
  }
}

export default ArrayTool
