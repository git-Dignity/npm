/**
 * 手写系列 -- 对象篇 底层方法
 *
 * @class ObjectHand
 */
class ObjectHand {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof ObjectHand
   */
  start() {
    console.log("手写系列 -- 对象篇底层方法 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof ObjectHand
   */
  end() {
    console.log("手写系列 -- 对象篇底层方法 end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description A instanceOf B，判断A是否经过B的原型链
   *
   * @description 思路：
   * @description 1. 接收传进father、child变量
   * @description 2. 取出第一个参数father，获取其prototype显式原型属性，作为目标样本（参考对象）
   * @description 3. 继续取第二个参数child，获取其__proto__隐式原型属性
   * @description 4. 使用 while，判断父的prototype和子的__proto__是否相等
   * @description 5. 若相等，则直接返回true
   * @description 6. 若不相等，则再取子的__proto__隐式原型属性，继续循环
   * @description 7. 直到父的prototype和子的__proto__相等才跳出循环，否则一直while循环下去
   * @description 8. 返回布尔值
   *
   * @description instanceOf手写
   *
   * @return {Boolean}
   * @memberof ObjectHand
   * @example
   * function Person(name) {
   *   this.name = name
   * }
   * const person = new Person("阿泽")
   *
   * console.log(objectHand.instanceOf(Person, person)) // true
   * console.log(objectHand.instanceOf(Person, {})) // false
   * console.log(objectHand.instanceOf(Person, null)) // false
   */
  instanceOf(father, child) {
    if (!father || !child) {
      return false
    }
    const fp = father.prototype
    var cp = child.__proto__

    while (cp) {
      if (cp === fp) {
        return true
      }
      cp = cp.__proto__
    }

    return false
  }

  /**
   * @description 获取隐式原型Object.getPrototypeOf(target)  相当于 proto = target.__proto__
   *
   * @description instanceOf手写（和上面一样，入参相反）
   *
   * @param {*} target 目标对象
   * @param {*} origin 父
   * @return {Boolean}
   * @memberof ObjectHand
   * @example
   * function Person(name) {
   *   this.name = name
   * }
   * const person = new Person("阿泽")
   *
   * console.log(objectHand.instanceOf1(person, Person)) // true
   * console.log(objectHand.instanceOf1({}, Person)) // false
   * console.log(objectHand.instanceOf1(null, Person)) // false
   */
  instanceOf1(target, origin) {
    if (typeof target !== "object" || target === null) return false
    if (typeof origin !== "function")
      throw new TypeError("origin must be function")
    let proto = Object.getPrototypeOf(target) // 相当于 proto = target.__proto__;
    while (proto) {
      if (proto === origin.prototype) return true
      proto = Object.getPrototypeOf(proto)
    }
    return false
  }

  /**
   * @description 实现思路
   * @description 1. 因为for of只能遍历数组，所以我们利用扩展运算符将参数转为数组
   * @description 2. 拿到for of遍历的每一个source，再次进行for in循环
   * @description 3. 拿到for of遍历的每一个key，若该key没有在目标对象object中，则跳过，进行下一个
   * @description 4. 判断是不是对象数组，不是的话直接加在目标对象的属性上
   * @description 5. 如果是的话，判断一下该属性是否是对象数组 && 是否和目标对象的属性名字的类型一致
   * @description 6. 如果不是，那就说明该属性是目标数组没有的，直接加在目标对象的属性上
   * @description 7. 如果是的话，再判断他是不是对象
   * @description 8. 如果不是，则跟目标对象的属性合并起来
   * @description 9. 如果是的话，进行递归调用merge，再次循环步骤1~8
   * 
   * @description 注意事项：
   * @description 1. 如果后面的属性和目标对象的属性一样
   * @description  1.1. 后者的值不是null、undefined
   * @description   1.1.1. 若值为数组或者对象，则进行合并属性值
   * @description   1.1.2. 若值非引用类型则， 后者会覆盖前者
   * @description  1.2. 后者的值若是null、undefined，就跳过，还是前者的值
   * 
   * @description https://q.shanyue.tech/fe/code/498.html
   * 
   * @description 实现lodash.merge（合并对象）
   *
   * @param {Object} object
   * @param {*} sources
   * @memberof ObjectHand
   * @example
   * // merge array
   * var object = {
      a: [{ b: 2 }, { d: 4 }],
     }
     objectHand.merge(object, { a: [{ c: 3 }, { e: 5 }] })
     console.log(JSON.stringify(object)) // {"a":[{"b":2},{"d":4},{"c":3},{"e":5}]}
     
    // merge object
    var object = {
      a: { b: { c: 1 } },
    }
    objectHand.merge(object, { a: { b: { d: 2 } } })
    // console.log(JSON.stringify(object));  // {"a":{"b":{"c":1,"d":2}}}

    // overwrite primitive value
    // 如果后面的属性和目标对象的属性一样（且非undefined），后者会覆盖前者
    var object = {
      a: { b: 1 },
    };
    objectHand.merge(object, { a: { b: 2 } });
    // console.log(JSON.stringify(object));  // {"a":{"b":2}}

    // // skip undefined  
    // 如果后面的属性和目标对象的属性一样（且后者是undefined），值还是前者
    object = {
      a: { b: 1 },
    };
    objectHand.merge(object, { a: { b: undefined } });
    // console.log(JSON.stringify(object));  // {"a":{"b":1}}

    // multiple sources
    // 若值为数组或者对象，则进行合并属性值
    var object = {
      a: { b: { c: 1, d: [1] } },
    };
    objectHand.merge(object, { a: { b: { e: 2 } } }, { a: { b: { d: [2] } } });
    // console.log(JSON.stringify(object));  // {"a":{"b":{"c":1,"d":[1,2],"e":2}}}
   */
  merge(object, ...sources) {
    // 获取引用类型的类型
    const getRawType = (val) => {
      return Object.prototype.toString.call(val).slice(8, -1)
    }
    const isPlainObject = (val) => {
      return getRawType(val) === "Object"
    }

    const isPlainObjectOrArray = (val) => {
      return isPlainObject(val) || Array.isArray(val)
    }
    
    // for...of遍历可数组
    for (const source of sources) {
      // for...in遍历对象数组
      for (const key in source) {
        if (source[key] === undefined && key in object) {
          continue
        }
        if (isPlainObjectOrArray(source[key])) {
          if (
            isPlainObjectOrArray(object[key]) &&
            getRawType(object[key]) === getRawType(source[key])
          ) {
            // 是对象才进行递归
            if (isPlainObject(object[key])) {
              this.merge(object[key], source[key])
            } else {
              object[key] = object[key].concat(source[key])
            }
          } else {
            object[key] = source[key]
          }
        } else {
          object[key] = source[key]
        }
      }
    }
  }
}

/**
 * @description entries？
 * @description 将对象转成键值对数组
 *
 * @description 实现思路：
 * @description 1. 接收传进对象obj
 * @description 2. 循环对象，利用forin对obj循环
 * @description 3. 拿到对象每一项，若是原型中的属性，则push（key键，value值）进数组res中
 * @description 4. 返回res数组
 *
 * @description 手写entries
 *
 * @param {Object} obj 目标对象
 * @return {Array}
 * @memberof ObjectHand
 * @example
 * const obj = { name: "阿泽", age: 24, gender: "男" }
 * let entriesObj = Object.zm_entries(obj)
 * console.log(entriesObj) // [ [ 'name', '阿泽' ], [ 'age', 24 ], [ 'gender', '男' ] ]
 */
Object.prototype.zm_entries = function (obj) {
  const res = []
  for (let key in obj) {
    obj.hasOwnProperty(key) && res.push([key, obj[key]])
  }
  return res
}

/**
 * @description entries、formEntries的区别？
 * @description entries将对象转成键值对数组；而formEntries跟entries相反，是将键值对数组转成对象
 * @description 一个返回对象 -> 数组；一个数组 -> 对象
 *
 * @description 实现思路：
 * @description 1. 接收传进数组arr
 * @description 2. 循环数组，利用for对arr循环
 * @description 3. 拿到数组每一项，给obj设置（key键，value值）
 * @description 4. 返回obj对象
 *
 * @description 手写fromEntries
 *
 * @param {Array} arr 目标数组
 * @return {Object}
 * @memberof ObjectHand
 * @example
 * const arr = [ [ 'name', '阿泽' ], [ 'age', 24 ], [ 'gender', '男' ] ]
 * let fromEntriesArr = Object.zm_fromEntries(arr)
 * console.log(fromEntriesArr) // { name: "阿泽", age: 24, gender: "男" }
 */
Object.prototype.zm_fromEntries = function (arr) {
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    const [key, value] = arr[i]
    obj[key] = value
  }
  return obj
}

/**
 * @description formEntries、keys的区别？
 * @description formEntries将键值对数组转成对象；而keys是将对象的key转成一个数组合集
 * @description 一个返回数组 -> 对象；一个对象 -> 数组
 *
 * @description 实现思路：
 * @description 1. 接收传进对象obj
 * @description 2. 循环对象，利用forin对obj循环
 * @description 3. 拿到对象每一项，若是原型中的属性，则push（key键）进数组keys中
 * @description 4. 返回keys数组
 *
 * @description 手写keys
 *
 * @param {Object} obj 目标对象
 * @return {Array}
 * @memberof ObjectHand
 * @example
 * const arr = [ [ 'name', '阿泽' ], [ 'age', 24 ], [ 'gender', '男' ] ]
 * let keysObj = Object.zm_keys(obj)
 * console.log(keysObj) // [ 'name', 'age', 'gender' ]
 */
Object.prototype.zm_keys = function (obj) {
  const keys = []
  for (let key in obj) {
    obj.hasOwnProperty(key) && keys.push(key)
  }
  return keys
}

/**
 * @description keys、values的区别？
 * @description keys将对象的key转成一个数组合集；而values是将对象的所有值value转成数组合集
 * @description 都返回对象 -> 数组，只不过一个返回全部key，一个返回全部value
 *
 * @description 实现思路：
 * @description 1. 接收传进对象obj
 * @description 2. 循环对象，利用forin对obj循环
 * @description 3. 拿到对象每一项，若是原型中的属性，则push（value值）进数组values中
 * @description 4. 返回values数组
 *
 * @description 手写values
 *
 * @param {Object} obj 目标对象
 * @return {Array}
 * @memberof ObjectHand
 * @example
 * const obj = { name: "阿泽", age: 24, gender: "男" }
 * let valuesObj = Object.zm_values(obj)
 * console.log(valuesObj) // ["阿泽", 24, "男"]
 */
Object.prototype.zm_values = function (obj) {
  const values = []
  for (let key in obj) {
    obj.hasOwnProperty(key) && values.push(obj[key])
  }
  return values
}

/**
 * @description is？
 * @description 判断a是否等于b
 *
 * @description 特别提醒
 * @description === 运算符 (也包括 == 运算符) 将数字 -0 和 +0 视为相等 ，而将Number.NaN 与NaN视为不相等
 * @description 但在is函数中，-0 和 +0 视为不相等 ， 而将Number.NaN 与NaN视为相等
 * @description 都相反了
 *
 * @description 实现思路：
 * @description 1. 接收传进变量x, y
 * @description 2. 判断x、y是否完全相等
 * @description 3. 若全等，还要判断-0 和 +0的问题
 * @description 4. 若不全等，还要判断NaN的问题
 *
 * @description 手写is
 *
 * @param {Object} obj 目标对象
 * @return {Array}
 * @memberof ObjectHand
 * @example
 * const a = { name: "阿泽" }
 * const b = a
 * const c = { name: "阿泽" }
 *
 * console.log(Object.zm_is(a, b)) // true
 * console.log(Object.zm_is(a, c)) // false  地址值引用不一样
 * console.log(Object.zm_is(+0, -0)) // false  如果用===他们是相等的，is内部处理了
 * console.log(Object.zm_is(NaN, NaN)) // true  如果用===他们是不相等的，is内部处理了
 */
Object.prototype.zm_is = function (x, y) {
  if (x === y) {
    // 防止 -0 和 +0：运行到1/x === 1/y的时候x和y都为0，但是1/+0 = +Infinity， 1/-0 = -Infinity, 是不一样的
    return x !== 0 || 1 / x === 1 / y
  }

  // 防止NaN：NaN===NaN是false,这是不对的，我们在这里做一个拦截，x !== x，那么一定是 NaN, y 同理，两个都是NaN的时候返回true
  return x !== x && y !== y
}

/**
 * @description join、assign的区别？
 * @description join将数组用分隔符拼成字符串，分隔符默认为逗号；而assign接收多个对象，并将多个对象合成一个对象
 * @description 一个数组 -> 字符串；一个返回对象
 *
 * @description 特别提醒
 * @description assign接收多个对象，并将多个对象合成一个对象
 * @description 这些对象如果有重名属性，以后来的对象属性值为准
 * @description assign返回一个对象，这个对象 === 第一个对象
 *
 * @description 实现思路：
 * @description 1. 接收传进目标对象target、需要合并的n个对象args
 * @description 2. 对args数组进行for of循环（遍历的是value）
 * @description 3. 拿到数组每一项，即每一个对象，继续对对象再一次for in循环（便历出来的是属性）；
 * @description 4. 拿到对象每一个属性和值，赋给目标对象target
 * @description 5. 循环结束，返回目标对象target
 *
 * @description 手写assign
 *
 * @param {Object} target 目标对象
 * @param {Object} args n个对象
 * @return {Object}
 * @memberof ObjectHand
 * @example
 * const testa = { name: "阿泽" }
 * const testb = { name: "Dignity_", age: 22 }
 * const testc = { age: 18, gender: "男" }
 *
 * const testd = Object.zm_assign(testa, testb, testc)
 * console.log(testd) // { name: 'Dignity_', age: 18, gender: '男' }
 * console.log(testa === testd) // true
 */
Object.prototype.zm_assign = function (target, ...args) {
  if (target === null || target === undefined) {
    throw new TypeError("Cannot convert undefined or null to object")
  }
  target = Object(target)

  for (let nextObj of args) {
    // console.log(nextObj);
    for (let key in nextObj) {
      nextObj.hasOwnProperty(key) && (target[key] = nextObj[key])
    }
  }
  return target
}

export default ObjectHand
