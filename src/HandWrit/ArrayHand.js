/**
 * 手写系列 -- 数组篇 底层方法
 *
 * @class ArrayHand
 */
class ArrayHand {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof ArrayHand
   */
  start() {
    console.log("手写系列 -- 数组篇底层方法 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof ArrayHand
   */
  end() {
    console.log("手写系列 -- 数组篇底层方法 end^_^_^_^_^_^_^_^_^_^")
  }
}

/**
 * @description 实现思路：
 * @description 1. 接收传进函数
 * @description 2. 对this进行for循环，this谁调用我，我就指向谁。this就是调用的数组
 * @description 3. 拿到数组每一项，传回去给callback
 * @description 4. 返回给callback三个参数（item：遍历项, index：遍历项的索引, arr：数组本身）
 *
 * @description 手写forEach
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ArrayHand
 * @example
 * const players = [{ name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '保罗', num: 3 }]
 * players.zm_forEach((item, index, arr) => {
 *   console.log(item, index)
 * })
 *
 * {name: '科比', num: 24} 0
 * {name: '詹姆斯', num: 23} 1
 * {name: '保罗', num: 3} 2
 */
Array.prototype.zm_forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

/**
 * @description forEach、map的区别？
 * @description forEach对每一项进行遍历输出；而map对每一项遍历存进数组中，再返回数组
 * @description 一个没返回，一个返回数组
 *
 * @description 实现思路：
 * @description 1. 接收传进函数
 * @description 2. 对this进行for循环，this谁调用我，我就指向谁。this就是调用的数组
 * @description 3. 拿到数组每一项，返回给callback三个参数（item：遍历项, index：遍历项的索引, arr：数组本身），保存在我们定义的数组中
 * @description 4. 等到对数组for循环结束后，返回数组
 *
 * @description 手写map
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ArrayHand
 * @example
 * const players = [{ name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '保罗', num: 3 }]
 * const mapArr = players.zm_map((item, index) =>{
 *   return item.num + 1
 * })
 *
 * console.log(mapArr);  // [25, 24, 4]
 */
Array.prototype.zm_map = function (callback) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this))
  }
  return res
}

/**
 * @description map、filter的区别？
 * @description map对每一项遍历存进数组中，再返回数组；而filter每一项遍历且过滤条件为true的值存进数组中
 * @description 一个没返回，一个返回数组
 *
 * @description 实现思路：
 * @description 1. 接收传进函数
 * @description 2. 对this进行for循环，this谁调用我，我就指向谁。this就是调用的数组
 * @description 3. 拿到数组每一项，传给callback函数进行过滤，过滤为true，即保存在我们定义的数组中
 * @description 4. 等到对数组for循环结束后，返回数组
 * @description 5. callback的三个参数（item：遍历项, index：遍历项的索引, arr：数组本身）
 *
 * @description 手写filter
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ArrayHand
 * @example
 * const players = [{ name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '保罗', num: 3 }]
 * const filterArr = players.zm_filter((item) => item.num >= 23)
 *
 * console.log(filterArr) //  [ { name: '科比', num: 24 }, { name: '詹姆斯', num: 23 }]
 */
Array.prototype.zm_filter = function (callback) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this) && res.push(this[i])
  }
  return res
}

/**
 * @description filter、every的区别？
 * @description filter过滤条件为true的数组；而every也是过滤条件，有一个是false，就返回false；全为true才返回true
 * @description 一个返回数组；一个返回布尔
 *
 * @description 实现思路：
 * @description 1. 接收传进函数
 * @description 2. 对this进行for循环，this谁调用我，我就指向谁。this就是调用的数组
 * @description 3. 拿到数组每一项，传给callback函数进行过滤，过滤为true，继续走；
 * @description 4. 一旦发现为false，直接返回false；直到全部过滤为true，才返回true
 * @description 5. callback的三个参数（item：遍历项, index：遍历项的索引, arr：数组本身）
 *
 * @description 手写every
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ArrayHand
 * @example
 * const players = [{ name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '保罗', num: 3 }]
 * const everyArr = players.zm_every((item) => item.num >= 23)
 * console.log(everyArr) // false
 *
 * const everyArr1 = players.zm_every((item) => item.num >= 0)
 * console.log(everyArr1) // true
 */
Array.prototype.zm_every = function (callback) {
  let flag = true
  for (let i = 0; i < this.length; i++) {
    flag = callback(this[i], i, this)
    if (!flag) break
  }

  return flag
}

/**
 * @description every、some的区别？
 * @description every过滤条件，全为true才为true；而some也是过滤条件，一个为true就返回true
 * @description 都返回布尔
 *
 * @description 实现思路：
 * @description 1. 接收传进函数
 * @description 2. 对this进行for循环，this谁调用我，我就指向谁。this就是调用的数组
 * @description 3. 拿到数组每一项，传给callback函数进行过滤，过滤为false，继续走；
 * @description 4. 一旦发现一个为true，直接返回true；
 * @description 5. callback的三个参数（item：遍历项, index：遍历项的索引, arr：数组本身）
 *
 * @description 手写some
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ArrayHand
 * @example
 * const players = [{ name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '保罗', num: 3 }]
 * const someArr = players.zm_some((item) => item.num >= 23)
 * console.log(someArr) // true
 *
 * const someArr1 = players.zm_some((item) => item.num >= 50)
 * console.log(someArr1) // false
 */
Array.prototype.zm_some = function (callback) {
  let flag = false
  for (let i = 0; i < this.length; i++) {
    flag = callback(this[i], i, this)
    if (flag) break
  }

  return flag
}

/**
 * @description reduce应用场景？
 * @description 很广泛，计算累加、去重、最大项...
 *
 * @description 实现思路：
 * @description 1. 两个参数；接收传进函数callback（必填），初始值initValue（选传）
 * @description 2. 若initValue传进数组，则值为传进数组值，否则默认值为[]
 * @description 3. 若initValue传进字符串或数值，则值为传进值，否则默认值为0
 * @description 4. 对this进行for循环，this谁调用我，我就指向谁。this就是调用的数组
 * @description 5. 拿到数组每一项，返回给callback四个参数（pre, next, index, arr），保存在我们定义的pre值中
 * @description 6. 等到对数组for循环结束后，返回值
 * @description 7. callback四个参数（pre：前一项, next：下一项, index：当前索引, arr：数组本身）
 *
 * @description 手写reduce
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ArrayHand
 * @example
 * const playersTmp = [{ name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '保罗', num: 0 },{ name: '保罗', num: 0 }]
 *
 * example1：数组项求和，第二个参数已传
 * const sum = playersTmp.zm_reduce((pre, next) => {
 *   return pre + next.num
 * },0)
 * console.log(sum) // 50
 *
 * example2：数组项求和，第二个参数未传
 * const sum2 = playersTmp.zm_reduce((pre, next) => {
 *   return pre + next.num
 * })
 * console.log(sum2) // 50
 *
 * example3：数组项求和，第二个参数已传，从10开始累加
 * const sum3 = playersTmp.zm_reduce((pre, next) => {
 *   return pre + next.num
 * },10)
 * console.log(sum3) // 60
 *
 * example4：求数组项最大值，第二个参数已传
 * const sum4 = [11,2,5,70].zm_reduce((pre, next) => {
 *   return Math.max(pre,next)
 * },0)
 * console.log(sum4) // 70
 *
 * 还可以传数组哦！！！
 * example5：一维数组去重，第二个参数已传
 * const newArr = [1,1,5,6,8,8,10].zm_reduce(function (prev, cur) {
 *   !prev.includes(cur) && prev.push(cur)
 *   return prev
 * }, [])
 * console.log(newArr) // [1, 5, 6, 8, 10]
 *
 * example6：二维数组去重，第二个参数已传
 * const newArr1 = playersTmp.zm_reduce(function (prev, cur) {
 *   !prev.includes(cur) && prev.push(cur)
 *   return prev
 * }, [])
 * console.log(newArr1) // [({ name: "科比", num: 20 }, { name: "詹姆斯", num: 30 }, { name: "保罗", num: 0 })]
 *
 * 判断cur对象是否存在于prev数组中
 * function isContains(prev, cur) {
 *   if (!prev) { return false }
 *
 *   判断cur、item是否完全相等
 *   return prev.some((item) => arrayTool.equals(cur, item))
 * }
 */
Array.prototype.zm_reduce = function (callback, initValue) {
  //检测传入的callback是否为函数
  if (typeof callback != "function") {
    return "callback must be function"
  }

  let pre // 初始值

  if (Object.prototype.toString.call(initValue) === "[object Array]") {
    // 是否是数组
    pre = arguments.length == 1 ? [] : initValue
  } else {
    // 字符串、数字
    pre = arguments.length == 1 ? 0 : Number(initValue)
  }

  for (let i = 0; i < this.length; i++) {
    pre = callback(pre, this[i], i, this)
  }

  return pre
}

/**
 * @description filter、findIndex的区别？
 * @description filter过滤条件为true的数组；而findIndex是查找项的索引
 * @description 一个返回数组；一个返回数值
 *
 * @description 实现思路：
 * @description 1. 接收传进函数
 * @description 2. 对this进行for循环，this谁调用我，我就指向谁。this就是调用的数组
 * @description 3. 拿到数组每一项，传给callback函数进行过滤，过滤为false，继续走；
 * @description 4. 一旦发现一个为true，直接返回值的索引；
 * @description 5. callback的三个参数（item：遍历项, index：遍历项的索引, arr：数组本身）
 *
 * @description 手写findIndex
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ArrayHand
 * @example
 * const players = [{ name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '保罗', num: 3 }]
 * const findIndexArr = players.zm_findIndex((item) => item.name === "詹姆斯")
 * console.log(findIndexArr) // 1
 *
 * const findIndexArr1 = players.zm_findIndex((item) => item.name === "安东尼")
 * console.log(findIndexArr1) // -1
 */
Array.prototype.zm_findIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i
    }
  }
  return -1
}

/**
 * @description findIndex、find的区别？
 * @description findIndex查找的是项的索引；而find查找的是项
 * @description 一个返回数值；一个返回数组
 *
 * @description 实现思路：
 * @description 1. 接收传进函数
 * @description 2. 对this进行for循环，this谁调用我，我就指向谁。this就是调用的数组
 * @description 3. 拿到数组每一项，传给callback函数进行查找，过滤为false，继续走；
 * @description 4. 一旦发现一个为true，直接返回值；
 * @description 5. callback的三个参数（item：遍历项, index：遍历项的索引, arr：数组本身）
 *
 * @description 手写find
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ArrayHand
 * @example
 * const players = [{ name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '保罗', num: 3 }]
 * const findArr = players.zm_find((item) => item.name === "科比")
 * console.log(findArr) // { name: '科比', num: 24 }
 *
 * const findArr1 = players.zm_find((item) => item.name === "安东尼")
 * console.log(findArr1) // undefined
 */
Array.prototype.zm_find = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i]
    }
  }
  return undefined
}

/**
 * @description fill？
 * @description 填充数组
 * @description fill('阿泽', 1, 3)，就是数组的第二项、第三项替换成'阿泽'
 *
 * @description 实现思路：
 * @description 1. 接收要替换的值value；start开始填充索引，默认0；end：结束填充索引，默认length
 * @description 2. 根据start、end对this进行for循环替换，this谁调用我，我就指向谁。this就是调用的数组
 * @description 3. 替换结束后，返回数组；
 * @description 4. callback的三个参数（value：填充的值, start：开始填充索引，默认0, end：结束填充索引，默认length）
 *
 * @description 手写find
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ArrayHand
 * @example
 * const players = [{ name: '科比', num: 24 }, { name: '詹姆斯', num: 23 },{ name: '保罗', num: 3 }]
 * const fillArr = players.zm_fill('吖泽', 1, 3)
 * console.log(fillArr); // {name: '科比', num: 24},"吖泽","吖泽", {name: '威少', num: 0},{name: '杜兰特', num: 35}
 */
Array.prototype.zm_fill = function (value, start = 0, end) {
  end = end || this.length
  for (let i = start; i < end; i++) {
    this[i] = value
  }
  return this
}

/**
 * @description filter、includes的区别？
 * @description filter过滤条件为true的数组；而includes是查找项是否包含在数组内
 * @description 一个返回数组；一个返回布尔
 *
 * @description includes用处：查找元素，查到返回true，反之返回false，可查找NaN
 *
 * @description 实现思路：
 * @description 1. 接收要查找的项value；start从哪个索引开始搜索，若为负值，则按升序从array.length+fromIndex的索引开始搜索。默认为0（选传）
 * @description 2. 根据start对this进行for循环，this谁调用我，我就指向谁。this就是调用的数组
 * @description 3. 搜索值和数组某项相等
 * @description 4. 因需判断NaN，所以要满足数组的每一项 且 传入的value，都要是NaN
 *
 * @description 手写includes
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ArrayHand
 * @example
 * console.log([1, 2, 3].zm_includes(2)) // true
 * console.log([1, 2, 3, NaN].zm_includes(NaN)) // true
 * console.log([1, 2, 3].zm_includes(1,0)) // true
 * console.log([1, 2, 3].zm_includes(1,2)) // false
 * console.log([1, 2, 3].zm_includes(1,-2)) // false
 * 最后一个输出找不到，因为为负值，则按升序从array.length+fromIndex的索引开始搜索。默认为0；
 * 其实我觉得应该返回true才对，但includes是这种逻辑也没办法
 */
Array.prototype.zm_includes = function (value, start = 0) {
  if (start < 0) start = this.length + start
  const isNaN = Number.isNaN(value)

  for (let i = start; i < this.length; i++) {
    if (
      this[i] === value ||
      (Number.isNaN(this[i]) && isNaN && Number.isNaN(this[i]) === isNaN)
    ) {
      return true
    }
  }
  return false
}


/**
 * @description fill、join的区别？
 * @description fill根据第二、第三参数填充数组数组；而join将数组用分隔符拼成字符串，分隔符默认为,
 * @description 一个返回数组；一个返回字符串
 *
 * @description 实现思路：
 * @description 1. 接收分隔符s，默认是逗号，用来将数组拼成字符串
 * @description 2. 对this进行for循环，this谁调用我，我就指向谁。this就是调用的数组
 * @description 3. 定义变量str来接收for循环出来的值的拼接
 * @description 4. for循环结束后，返回str
 *
 * @description 手写join
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ArrayHand
 * @example
 * console.log([1, 2, 3].sx_join()) // 1,2,3
 * console.log([1, 2, 3].sx_join("*")) // 1*2*3
 */
Array.prototype.zm_join = function (s = ",") {
  let str = ""
  for (let i = 0; i < this.length; i++) {
    str = i === 0 ? `${str}${this[i]}` : `${str}${s}${this[i]}`
  }
  return str
}


/**
 * @description join、flat的区别？
 * @description join将数组用分隔符拼成字符串，分隔符默认为逗号；而flat是将数组数组扁平化成一维数组
 * @description 一个数组 -> 字符串；一个多维数组 -> 一维数组
 *
 * @description 实现思路：
 * @description 1. 对this进行wile循环，this谁调用我，我就指向谁。this就是调用的数组
 * @description 2. 利用some来判断每一项是不是为数组，如果是数组继续循环下去
 * @description 3. 经过some出来的每一项item，都是数组，再利用concat合并展开运算符出来的arr每一个值赋给arr
 * @description 4. arr每次while之后，都会保留上一份数据，如果这份数据还有数组，继续while，重复步骤3
 * @description 5. 直到arr不是二维数组，while循环结束后，返回arr
 *
 * @description 手写flat
 *
 * @param {Function} callback 回调函数
 * @return {*}
 * @memberof ArrayHand
 * @example
 * console.log([1, [2, 3, [4, 5]], [8, 9]].zm_flat())  // [1, 2, 3, 4, 5, 8, 9]
 */
Array.prototype.zm_flat = function () {
  let arr = this
  while (arr.some(item => Array.isArray(item))) {
      arr = [].concat(...arr)
  }
  return arr
}



export default ArrayHand
