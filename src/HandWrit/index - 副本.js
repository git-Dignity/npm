/**
 * New手写
 * 用new Object() 的方式新建了一个对象 obj
    取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
    将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
    使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
    返回 obj
    考虑构造函数又返回值的情况：
    如果构造函数返回一个对象，那么我们也返回这个对象
    如上否则，就返回默认值
 */
export function objectFactory() {
  var obj = new Object(), //从Object.prototype上克隆一个对象
    Constructor = [].shift.call(arguments) //取得外部传入的构造器

  var F = function () {}
  F.prototype = Constructor.prototype
  obj = new F() //指向正确的原型

  var ret = Constructor.apply(obj, arguments) //借用外部传入的构造器给obj设置属性

  return typeof ret === "object" ? ret : obj //确保构造器总是返回一个对象
}

/**
 * 手写call
 * call 改变了 this 的指向，指向到 传进来的对象；执行传进来的函数
 * 实现思路：1. 将函数设为对象的属性；2. 执行该函数；3. 删除该函数
 * call 函数还能给定参数执行函数
 */
Function.prototype.myCall = function (context) {
  var context = context || window // this 参数可以传 null，当为 null 的时候，视为指向 window
  context.fn = this // 首先要获取调用call的函数，用this可以获取

  // call 函数还能给定参数执行函数
  // 因为arguments是类数组对象，所以可以用for循环
  var args = []
  for (var i = 0, len = arguments.length; i < len; i++) {
    args.push(`arguments[${i}]`)
  }

  // 我怎么将args这些参数传进去，args.join(',')？不行啦
  var result = eval(`context.fn(${args})`) // eval拼成一个函数会自己执行，args 会自动调用 Array.toString() 这个方法。

  delete context.fn
  return result // 函数是可以有返回值的！
}

/**
 * 手写apply（方法一）
 * arr：数组 [a,b,...]
 */
Function.prototype.myApply = function (context, arr) {
  context = Object(context) || window
  context.fn = this

  var result
  if (!arr) {
    result = context.fn
  } else {
    var arrTmp = []
    for (var i = 0, len = arr.length; i < len; i++) {
      arrTmp.push(`arr[${i}]`)
    }

    result = eval(`context.fn(${arrTmp})`)
  }

  delete context.fn
  return result
}

/**
 * 手写bind
 * bind() 函数会创建一个新函数（称为绑定函数）
 * 是在ie8下，bind使用不了，写下兼容版
 */
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError(
        "Function.prototype.bind - what is trying to be bound is not callable"
      )
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this, // this在这里指向的是目标函数
      fNOP = function () {},
      fBound = function () {
        return fToBind.apply(
          this instanceof fNOP
            ? this //此时的this就是new出的obj
            : oThis || this, //如果传递的oThis无效，就将fBound的调用者作为this

          //将通过bind传递的参数和调用时传递的参数进行合并，并作为最终的参数传递
          aArgs.concat(Array.prototype.slice.call(arguments))
        )
      }
    fNOP.prototype = this.prototype
    //将目标函数的原型对象拷贝到新函数中，因为目标函数有可能被当作构造函数使用
    fBound.prototype = new fNOP()
    //返回fBond的引用，由外部按需调用
    return fBound
  }
}

/**
 * Promise手写（https://www.jianshu.com/p/89f6409a7936）
 * 创建三变量记录表示状态
 * 用that保存this，避免后期闭包导致this的指向不对
 * value 变量用于保存 resolve 或者 reject 中传入的值
 * resolvedCallbacks 和 rejectedCallbacks 用于保存 then 中的回调，
 * 因为当执行完 Promise 时状态可能还是等待中，这时候应该把 then 中的回调保存起来用于状态改变时使用
 */

//先创建三个常量用于表示状态
const PENDING = "pending",
  RESOLVED = "resolved",
  REJECTED = "rejected"
export function HandleWritePromise(fn) {
  const that = this
  that.state = PENDING //一开始Promise转态应该是pedding
  that.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []

  function resolved(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      //执行回调方法
      that.resolvedCallbacks.map((cb) => cb(that.value))
    }
  }
  function rejected(value) {
    if (that.state === REJECTED) {
      that.state = REJECTED
      that.value = value
      //执行回调方法
      that.rejectedCallbacks.map((cb) => cb(that.value))
    }
  }

  //执行回调方法
  try {
    fn(resolved, rejected)
  } catch (e) {
    rejected(e)
  }
}

//实现then函数
HandleWritePromise.prototype.then = function (onFullfied, onRejected) {
  const that = this
  onFullfied = typeof onFullfied === "function" ? onFullfied : (v) => v
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (r) => {
          throw r
        }

  //等待状态，则添加回调函数到栈中
  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFullfied)
    that.rejectedCallbacks.push(onRejected)
  }
  if (that.state === RESOLVED) {
    onFullfied(that.value)
  }
  if (that.state === REJECTED) {
    onRejected(that.value)
  }
}
