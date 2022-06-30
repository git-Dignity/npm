/**
 * 手写系列 -- JavaScript底层方法
 *
 * @class JSHand
 */
class JSHand {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof JSHand
   */
  start() {
    console.log("手写系列 -- JavaScript底层方法 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof JSHand
   */
  end() {
    console.log("手写系列 -- JavaScript底层方法 end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 思路：
   * @description 1. 用new Object() 的方式新建了一个对象 obj
   * @description 2. 取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
   * @description 3. 将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
   * @description 4. 使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
   * @description 5. 返回 obj
   * @description 6. 考虑构造函数又返回值的情况：
   * @description 7. 如果构造函数返回一个对象，那么我们也返回这个对象
   * @description 8. 如上否则，就返回默认值
   *
   * @description New做了什么？
   * @description 1. 创建一个新对象
   * @description 2. 将构造函数的显式原型Prototype赋值给新对象obj的隐式原型
   * @description 3. 改变this指向，执行构造函数的属性给新对象，apply、call
   * @description 4. 返回新对象
   * @description 总的来说：其实就是想要构造函数的原型和自身属性
   *
   *
   * @description New手写
   *
   * @return {Object}
   * @memberof JSHand
   * @example
   * function Person(name, age) {
   *   this.name = name
   *   this.age = age
   *   this.sex = "male"
   * }
   * Person.prototype.isHandsome = true
   * Person.prototype.sayName = function () { console.log(`Hello , my name is ${this.name}`) }
   *
   * let handsomeBoy = jSHand.objectFactory(Person, "Nealyang", 25)
   *
   * console.log(handsomeBoy.name) // Nealyang
   * console.log(handsomeBoy.isHandsome) // true
   * handsomeBoy.sayName() // Hello , my name is Nealyang
   */
  objectFactory() {
    var obj = new Object(), //从Object.prototype上克隆一个对象
      Constructor = [].shift.call(arguments) //取得外部传入的构造器

    var F = function () {}
    F.prototype = Constructor.prototype // 拿到原型链的属性
    obj = new F() //指向正确的原型

    var ret = Constructor.apply(obj, arguments) //借用外部传入的构造器给obj设置属性，改变构造函数的this指向obj

    return typeof ret === "object" ? ret : obj //确保构造器总是返回一个对象
  }

  /**
   * @description 实现思路：
   * @description 1. 拿到构造函数的原型
   * @description 2. 改变构造函数fn的this指向obj了，也拿到构造函数的属性方法了
   * @description New手写（简单版）
   *
   * @param {*} fn
   * @param {*} args
   * @return {*}
   * @memberof JSHand
   */
  objectFactory1(fn, ...args) {
    const obj = {}
    obj.__proto__ = fn.prototype
    fn.apply(obj, args)

    return obj
  }
}

/**
 * @description call 改变了 this 的指向，指向到 传进来的对象；执行传进来的函数
 * @description call 函数还能给定参数执行函数
 * @description 为什么要这么麻烦呢？还要args数组push进去arguments，然后通过context.fn拼接起来，再根据eval执行函数（不然你怎么执行）
 *
 * @description 思路：
 * @description 1. 将函数设为对象的属性
 * @description 2. 执行该函数
 * @description 3. 删除该函数
 *
 * @description call做了什么？
 * @description 1. 在传进来的context对象添加fn临时值（主要是想给后面执行方法用的），值为this
 * @description 2. 将arguments参数转为数组，值为字符串
 * @description 3. 执行context.fn，后删除，再返回
 *
 * @description 参数是多个字符串
 * @description 手写call（ES5写法）
 *
 * @param {*} context 多位参数（this指向对象，n个参数）
 * @return {Object}
 * @memberof JSHand
 * @example
 * var value = 2
 * var obj11 = { value: 1 }
 * function bar(name, age) {
 *   return {
 *     value: this ? this.value : value,
 *     name: name,
 *     age: age,
 *   }
 * }
 *
 * bar.call(null)  // 改变this，设为null，如果传为null，默认是windows
 *
 * console.log(bar()); //  {value: 2, name: undefined, age: undefined}
 *
 * console.log(bar.myCall(obj11, "kevin", 18)) // {value: 1, name: {…}, age: "kevin"}
 */
Function.prototype.myCall = function (context) {
  var context = context || window // this 参数可以传 null，当为 null 的时候，视为指向 window

  context.fn = this // 首先要获取调用call的函数，用this可以获取
  // console.log(this) // 外面的函数 function bar(name, age) { ... }

  // call 函数还能给定参数执行函数
  // 因为arguments是类数组对象，所以可以用for循环
  var args = []
  for (var i = 0, len = arguments.length; i < len; i++) {
    args.push(`arguments[${i}]`)
  }

  // console.log(args) // ['arguments[0]', 'arguments[1]', 'arguments[2]']
  // console.log(`context.fn(${args})`) // context.fn(arguments[0],arguments[1],arguments[2])

  // 我怎么将args这些参数传进去，args.join(',')？不行啦
  var result = eval(`context.fn(${args})`) // eval拼成一个函数会自己执行，args 会自动调用 Array.toString() 这个方法。

  delete context.fn
  return result // 函数是可以有返回值的！
}

/**
 * @description 第一个参数为undefined或null的时候，那么会转变为window
 * @description 改变了this执行，让新的对象可以执行该函数
 * @description ⭐写的比较方便，那是因为借助es6的...扩展运算符执行，es5只能借助eval来执行函数
 *
 * @description 思路：
 * @description 1. 首先context为可选参数，如果不传的话默认上下文是window
 * @description 2. 接下来给content创建一个fn属性，并将值设置为需要调用的函数
 * @description 3. 因为call可以传入多个参数作为调用函数的参数，所有需要将参数剥离出来
 * @description 4. 然后调用函数并将对象上的函数删除
 *
 * @description 手写call（ES6写法）
 *
 * @param {*} context 多位参数（this指向对象，n个参数）
 * @return {Object}
 * @memberof JSHand
 * @example
 * var value = 2
 * var obj11 = { value: 1 }
 * function bar(name, age) {
 *   return {
 *     value: this ? this.value : value,
 *     name: name,
 *     age: age,
 *   }
 * }
 *
 * bar.call(null)  // 改变this，设为null，如果传为null，默认是windows
 *
 * console.log(bar()); //  {value: 2, name: undefined, age: undefined}
 *
 * console.log(bar.myCall1(obj11, "kevin", 18)) // {value: 1, name: {…}, age: "kevin"}
 */
Function.prototype.myCall1 = function (context) {
  var context = context || window // this 参数可以传 null，当为 null 的时候，视为指向 window

  context.fn = this // 首先要获取调用call的函数，用this可以获取
  // console.log(this) // 外面的函数 function bar(name, age) { ... }

  const args = [...arguments].slice(1) // 删除第一个参数，是this的指向，其他后面就是传参进来的
  // console.log(args) // ['kevin', 18]

  const result = context.fn(...args)

  delete context.fn
  return result // 函数是可以有返回值的！
}

/**
 * @description 第一个参数context为undefined或null的时候，那么会转变为window
 * @description 改变this的指向，这时的this指向context
 * @description 第二个参数：传进调用方法的n个参数（多个）
 * @description ⭐写的比较方便，那是因为借助es6的...扩展运算符执行，es5只能借助eval来执行函数
 *
 * @description 核心：改变this的指向，改成context去调用传入的方法（调用的同时，也给对象添加了该方法，自然可以调用）；
 * @description 参数接收到就利用es6的...开展运算符传参
 *
 * @description 思路：
 * @description 1. 首先context为可选参数，如果不传的话默认上下文是window
 * @description 2. 接下来给content创建一个fn属性（用Symbol设置唯一性），并将值设置为需要调用的函数
 * @description 3. 因为call可以传入多个参数作为调用函数的参数，所以使用es6的...扩展运算符传入执行
 *
 * @description 手写call（ES6写法）
 *
 * @param {*} context 多位参数 -- this指向对象
 * @param {*} args n个参数
 * @return {Object}
 * @memberof JSHand
 * @example
 * const myObj = {
 *   name: "阿泽",
 *   testFn(age) {
 *     console.log(`${this.name}${age}岁了`)
 *   }
 * }
 *
 * const myObj2 = { name: "Dignity_", }
 * myObj.testFn.myCall2(myObj2, 22) // Dignity_22岁了
 */
Function.prototype.myCall2 = function (context, ...args) {
  context = context || window

  // Symbol是唯一的，防止重名key
  const fn = Symbol()
  // console.log(this)
  // console.log(fn)
  context[fn] = this
  // console.log(context)
  // 执行，返回执行值
  return context[fn](...args)
}

/**
 * @description apply和call实现类似，不同的就是参数的处理
 *
 * @description 参数是数组
 * @description 手写apply（ES5写法）
 *
 * @param {*} context this指向
 * @param {Array} arr 参数数组
 * @return {Object}
 * @memberof JSHand
 * @example
 * var value = 2
 * var obj11 = { value: 1 }
 * function bar(name, age) {
 *   return {
 *     value: this ? this.value : value,
 *     name: name,
 *     age: age,
 *   }
 * }
 *
 * bar.call(null)  // 改变this，设为null，如果传为null，默认是windows
 *
 * console.log(bar.myApply(obj11, ['kevin', 18]));  // {value: 1, name: {…}, age: "kevin"}
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
 * @description apply和call实现类似，不同的就是参数的处理
 *
 * @description 手写apply（ES6写法）
 *
 * @param {*} context this指向
 * @param {Array} arr 参数数组
 * @return {Object}
 * @memberof JSHand
 * @example
 * var value = 2
 * var obj11 = { value: 1 }
 * function bar(name, age) {
 *   return {
 *     value: this ? this.value : value,
 *     name: name,
 *     age: age,
 *   }
 * }
 *
 * bar.call(null)  // 改变this，设为null，如果传为null，默认是windows
 *
 * console.log(bar.myApply1(obj11, ['kevin', 18]));  // {value: 1, name: {…}, age: "kevin"}
 */
Function.prototype.myApply1 = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Error")
  }
  context = context || window
  context.fn = this

  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1]) // 因为第二个才是数组参数
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

/**
 * @description apply和call实现类似，不同的就是参数的处理
 * @description apply传入的是数组，call传入多个参数，逗号分隔
 *
 * @description 第一个参数context为undefined或null的时候，那么会转变为window
 * @description 改变this的指向，这时的this指向context
 * @description 第二个参数：传进调用方法的n个参数（多个）
 * @description ⭐写的比较方便，那是因为借助es6的...扩展运算符执行，es5只能借助eval来执行函数
 *
 * @description 核心：改变this的指向，改成context去调用传入的方法（调用的同时，也给对象添加了该方法，自然可以调用）；
 * @description 参数接收到就利用es6的...扩展运算符传参
 *
 * @description ⭐和上面的myCall2写法一模一样，接收参数不一样而已；
 * @description 因为用的是扩展运算符，所以参数你传数组或者n个参数，对于我处理都是一样，一个个取出来；
 * @description 只不过call需要用扩展运算符接收，而apply传入是数组，直接arr变量正常接收即可
 *
 * @description 思路：
 * @description 1. 首先context为可选参数，如果不传的话默认上下文是window
 * @description 2. 接下来给content创建一个fn属性（用Symbol设置唯一性），并将值设置为需要调用的函数
 * @description 3. 因为call可以传入多个参数作为调用函数的参数，所以使用es6的...扩展运算符传入执行
 *
 * @description 手写apply（ES6写法）
 *
 * @param {*} context this指向
 * @param {Array} arr 参数数组
 * @return {Object}
 * @memberof JSHand
 * @example
 * const myObj = {
 *   name: "阿泽",
 *   testFn(age) {
 *     console.log(`${this.name}${age}岁了`)
 *   }
 * }
 *
 * const myObj2 = { name: "Dignity_", }
 * myObj.testFn.myApply2(myObj2, [22]) // Dignity_22岁了
 */
Function.prototype.myApply2 = function (context, arr) {
  context = context || window

  // Symbol是唯一的，防止重名key
  const fn = Symbol()
  context[fn] = this

  // 执行，返回执行值
  return context[fn](...arr)
}

/**
 * @description 我们一步一步来演进bind的最终版
 * @description 首先我们可以通过给目标函数指定作用域来简单实现bind()方法
 *
 * @description bind与apply/call一样都能改变函数this指向，但bind并不会立即执行函数，而是返回一个绑定了this的新函数，你需要再次调用此函数才能达到最终执行
 * @description 使用了bind之后，this无法再被修改，使用call、apply也不行
 *
 * @description 手写bind（第一版）
 *
 * @param {*} context this指向
 * @return {*}
 * @memberof JSHand
 * @example
 * var obj45 = { name : 'Tom' };
 * function fun(){
 *   console.log(this.name);
 * }
 *
 * fun.mybind1(obj45, 1, 2)();  // Tom
 */
Function.prototype.mybind1 = function (context) {
  const self = this //保存this，即调用bind方法的目标函数
  return function () {
    return self.apply(context, arguments)
  }
}

/**
 * @description 我们一步一步来演进bind的最终版
 * @description 考虑到函数柯里化的情况，我们可以构建一个更加健壮的bind()
 * @description 这次的bind()方法可以绑定对象，也支持在绑定的时候传参
 *
 * @description Array.prototype.slice.call可以将arguments转成数组
 *
 * @description 手写bind（第二版）
 *
 * @param {*} context this指向
 * @return {*}
 * @memberof JSHand
 * @example
 * var obj45 = { name : 'Tom' };
 * function fun(){
 *   console.log(this.name);
 * }
 *
 * fun.mybind2(obj45, 1, 2)();  // Tom
 */
Function.prototype.mybind2 = function (context) {
  var args = Array.prototype.slice.call(arguments, 1),
    self = this
  // console.log(args) // [1, 2]
  return function () {
    var innerArgs = Array.prototype.slice.call(arguments)
    console.log(innerArgs) // []
    var finalArgs = args.concat(innerArgs)
    console.log(finalArgs) // [1, 2]
    return self.apply(context, finalArgs)
  }
}

/**
 * @description 我们一步一步来演进bind的最终版
 * @description Javascript的函数还可以作为构造函数，那么绑定后的函数用这种方式调用时，情况就比较微妙了，需要涉及到原型链的传递：
 * @description 通过设置一个中转构造函数F，使绑定后的函数与调用bind()的函数处于同一原型链上
 * @description 用new操作符调用绑定后的函数，返回的对象也能正常使用instanceof，因此这是最严谨的bind()实现。
 *
 * @description 手写bind（第三版）
 *
 * @param {*} context this指向
 * @return {*}
 * @memberof JSHand
 * @example
 * var obj45 = { name : 'Tom' };
 * function fun(){
 *   console.log(this.name);
 * }
 *
 * fun.mybind3(obj45, 1, 2)();  // Tom
 */
Function.prototype.mybind3 = function (context) {
  // mybind3({x:1},2, 1)，这个args就是2, 1
  var args = Array.prototype.slice.call(arguments, 1),
    F = function () {},
    self = this,
    bound = function () {
      // 因为bind不会执行函数，所以这里的innerArgs接收到函数mybind3({x:1},2, 1)(3)执行的参数3
      var innerArgs = Array.prototype.slice.call(arguments)
      console.log(args, innerArgs)
      var finalArgs = args.concat(innerArgs)
      return self.apply(this instanceof F ? this : context, finalArgs)
    }

  F.prototype = self.prototype
  bound.prototype = new F()
  return bound
}

/**
 * @description 我们一步一步来演进bind的最终版
 * @description bind() 函数会创建一个新函数（称为绑定函数）
 * @description 是在ie8下，bind使用不了，写下兼容版
 *
 * @description call、bind从入参看，是一样的，有何区别？
 * @description bind不会执行函数，call会
 *
 * @description 手写bind（最终版）
 *
 * @param {*} context this指向
 * @return {*}
 * @memberof JSHand
 * @example
 * var obj45 = { name : 'Tom' };
 * function fun(){
 *   console.log(this.name);
 * }
 *
 * fun.myBind(obj45, 1, 2)();  // Tom
 */
Function.prototype.myBind = function (oThis) {
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

/**
 * @description myBind、mybind4的区别？
 * @description 1. myBind在接收bind内的参数args，用的是Array.prototype.slice.call(arguments, 1)，剔除第一个参数，即第一个对象；
 * @description 而mybind4在接收bind内的参数，用的是es6的解构，更加简洁
 * @description 2. 同理，在接收执行函数传入的参数innerArgs，myBind用的还是Array.prototype.slice.call(arguments)，获取方法的全部参数
 * @description 而mybind4也是用的解构
 * @description 3. 合并数组时候，mybind用的是concat合并两个数组；mybind4还是用的解构合并数组
 * @description 4. 在执行函数的步骤，mybind用的是apply来传入this和执行；
 * @description 而mybind4直接执行函数，因为mybind4直接将函数定义在this中，所以可直接执行
 * @description 5.关于构造函数。mybind是创建一个空函数，将this.prototype
 *
 *
 * @description 为什么上面的myBind已经是最终版了，为什么还有这个mybind4方法？
 * @description 因为，之前都是基于es5语法写的，mybind4是基于es6语法写的，更加简洁
 *
 * @description 小知识
 * @description instanceof来判断一个构造函数的prototype属性所指向的对象是否存在另外一个要检测对象的原型链上
 *
 * @description 特别提醒
 * @description bind是返回一个函数，而不是执行结果。
 * @description bind返回的函数，拿来当做构造函数，该怎么处理？
 * @description bind()方法主要就是将函数绑定到某个对象，this;
 * @description bind()会创建一个函数，函数体内的this对象的值会被绑定到传入bind()中的第一个参数的值;
 * @description 例如：f.bind(obj)，实际上可以理解为obj.f()，这时f函数体内的this自然指向的是obj；
 *
 * @description 实现思路
 * @description 1. 接收传进的this指向context、方法参数后面跟随着参数args，可支持柯里化
 * @description 2. 先定义一个变量_this来接收this，保存起来，赋给context
 * @description 3. 定义一个函数fBound，有一个参数innerArgs，比如f.mybind4({x:1},2)(3);该innerArgs值为3
 * @description 4. 因为我们知道，bind是不会执行函数的，所以后面就有个()来执行函数，传入的参数就是innerArgs
 * @description 5. 函数fBound首先判断当前this instanceof _this
 * @description 6. 若不相等？
 * @description 7. 我们来开始执行this，也就是目标函数，将全部参数解构传进去函数内
 * @description 8. 执行完之后，记得delete掉函数
 * @description 9. 为什么要用一个res来接收context[fn]/this[fn]，因为我们需要返回执行函数，所以要return它，但又要return之后删除delete函数
 * @description 10. return过后的代码将无效化。所以，这才有了res先保留函数执行，在进行删除操作，最后返回res
 * @description 11. 若相等呢？
 * @description 12. 将外部事先定义的_this指向赋值给this[fn]，执行7-10步骤
 * @description 13. 因为可能会被作为构造函数，所以我们要给fBound添加原型，值为 目标函数的原型对象拷贝到新函数中
 * @description 14. 返回fBound
 *
 * @description 手写bind
 *
 * @param {*} context this指向
 * @param {*} args 方法后面的参数（支持柯里化）f.mybind4({x:1},2)(3);，值为2
 * @return {*}
 * @memberof JSHand
 * @example
 * function f(y,z){
 *   return this.x+y+z;
 * }
 *
 * var m = f.mybind4({x:1},2);
 * console.log(m(3)); // 6
 */
Function.prototype.mybind4 = function (context, ...args) {
  var _this = this || window // this在这里指向的是目标函数
  const fn = Symbol() // Symbol是唯一的，防止重名key
  context[fn] = this

  const fBound = function (...innerArgs) {
    if (this instanceof _this) {
      this[fn] = _this
      const res = this[fn](...[...args, ...innerArgs])
      delete this[fn]
      return res
    } else {
      const res = context[fn](...[...args, ...innerArgs])
      delete context[fn]
      return res
    }
  }

  //将目标函数的原型对象拷贝到新函数中，因为目标函数有可能被当作构造函数使用
  fBound.prototype = Object.create(this.prototype)
  //返回fBond的引用，由外部按需调用
  return fBound
}

export default JSHand
