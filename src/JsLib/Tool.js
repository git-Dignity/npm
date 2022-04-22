// ES6 方法，用来解决实际开发的 JS 问题

/**
 * 工具类
 *
 * @class Tool
 */
class Tool {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof Tool
   */
  start() {
    console.log("工具类Tool start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof Tool
   */
  end() {
    console.log("工具类Tool end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 如何检查元素是否具有指定的类？
   * @param {HTMLElement} el
   * @param {String} className
   * @return { Boolean }
   * @memberof Tool
   * @example
   * hasClass(document.getElementById('aaa'), 'a')
   */
  hasClass(el, className) {
    return el.classList.contains(className)
  }

  /**
   * @description 如何切换一个元素的类? 有类就删除，无类就添加
   * @param {HTMLElement} el
   * @param {String} className
   * @return { * }
   * @memberof Tool
   * @example
   * toggleClass(document.querySelector('p#b'), 'a')
   */
  toggleClass(el, className) {
    el.classList.toggle(className)
  }

  /**
   * @description 如何检查父元素是否包含子元素？
   * @param {HTMLElement} parent
   * @param {HTMLElement} child
   * @return { Boolean }
   * @memberof Tool
   * @example
   * elementContains(document.querySelector('head'), document.querySelector('title')) // true
   * elementContains(document.querySelector('head'), document.querySelector('body')) // false
   */
  elementContains(parent, child) {
    return parent !== child && parent.contains(child)
  }

  /**
   * @description 如何检查指定的元素在视口中是否可见？
   * @param {HTMLElement} el
   * @param {HTMLElement} partiallyVisible = false partiallyVisible是否开启全屏； 为true 需要全屏(上下左右)可以见
   * @return { Boolean }
   * @memberof Tool
   * @example
   * // 需要左右可见
   * elementIsVisibleInViewport(document.querySelector('head'), document.querySelector('title')) // true
   *
   * // 需要全屏(上下左右)可以见
   * elementIsVisibleInViewport(document.querySelector('head'), document.querySelector('body')) // false
   */
  elementIsVisibleInViewport(el, partiallyVisible = false) {
    const { top, left, bottom, right } = el.getBoundingClientRect()
    const { innerHeight, innerWidth } = window
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
  }

  /**
   * @description 如何获取元素中的所有图像？
   * @param {HTMLElement} el
   * @param {Boolean} includeDuplicates = false false：去重；true：不去重
   * @return { Array } ['image1.jpg', 'image2.png', 'image1.png', '...']
   * @memberof Tool
   * @example
   * // 不去重
   * getImages(document,true) // ['image1.jpg', 'image2.png', 'image1.png', '...']
   *
   * // 去重
   * getImages(document,false) // ['image1.jpg', 'image2.png', '...']
   */
  getImages(el, includeDuplicates = false) {
    const images = [...el.getElementsByTagName("img")].map((img) =>
      img.getAttribute("src")
    )
    return includeDuplicates ? images : [...new Set(images)]
  }

  /**
   * @description 如何确定设备是移动设备还是台式机/笔记本电脑？
   * @return { String } 'Mobile' / 'Desktop'
   * @memberof Tool
   * @example
   * detectDeviceType() // "Mobile" or "Desktop"
   */
  detectDeviceType() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? "Mobile"
      : "Desktop"
  }

  /**
   * @description 如何创建一个包含当前URL参数的对象？
   * @param { String } url
   * @return { Object } {n: 'Adam', s: 'Smith'}
   * @memberof Tool
   * @example
   * getURLParameters(tool.currentURL()) // {}
   *
   * getURLParameters('http://url.com/page?n=哈哈&s=Smith') // {n: '哈哈', s: 'Smith'}
   */
  getURLParameters(url) {
    // reduce() 对于空数组是不会执行回调函数的。

    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
      (a, v) => (
        (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
      ),
      {}
    )
  }

  /**
   * @description 思路：
   * @description 1. 根据?切割split，拿到后面参数的字符串
   * @description 2. 再根据&切割split，得到数组
   * @description 3. 对数组进行forEach循环，拿到每一项，在继续=切割split，拿到key、val
   *
   * @description decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码
   * @description 获取url参数（split方法）
   *
   * @param {String} url
   * @return {Object}
   * @memberof Tool
   * @example
   * getURLParameters(tool.currentURL()) // {}
   *
   * getURLParameters('http://url.com/page?n=哈哈&s=Smith') // {n: '哈哈', s: 'Smith'}
   */
  getURLParameters1(url) {
    const res = {}
    if (url.includes("?")) {
      const str = url.split("?")[1]
      const arr = str.split("&")
      arr.forEach((item) => {
        const key = item.split("=")[0]
        const val = item.split("=")[1]

        res[key] = decodeURIComponent(val) // 解码
      })
    }
    return res
  }

  /**
   * @description 获取url参数（URLSearchParams）
   *
   * @param {String} [url=window.location.search] ?和后面的参数
   * @return {Object}
   * @memberof Tool
   */
  getURLParameters2(url = window.location.search) {
    // 创建一个URLSearchParams实例
    const urlSearchParams = new URLSearchParams(url)
    // 把键值对列表转换为一个对象
    return Object.fromEntries(urlSearchParams.entries())
  }

  /**
   * @description 如何从元素中移除事件监听器?
   * @param {HTMLElement} el
   * @param { String } evt 事件类型 如：'click'
   * @param { Function } fn 绑定函数
   * @param { Boolean } opts = false 指定移除事件句柄的阶段。true：在捕获阶段移除事件句柄；false- 默认：在冒泡阶段移除事件句柄
   * @return  { * }
   * @memberof Tool
   * @example
   * const fn = () => console.log('!');
   * document.body.addEventListener('click', fn);
   *
   * off(document.body, 'click', fn)
   */
  off(el, evt, fn, opts = false) {
    el.removeEventListener(evt, fn, opts)
  }

  /**
   * @description 如何获得给定毫秒数的可读格式？
   * @param {Number} ms 毫秒数
   * @return { String }  1000ms = 1s
   * @memberof Tool
   * @example
   * formatDuration(1001) // 1 second, 1 millisecond
   *
   * formatDuration(34325055574) // 397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds
   */
  formatDuration(ms) {
    if (ms < 0) ms = -ms
    const time = {
      day: Math.floor(ms / 86400000),
      hour: Math.floor(ms / 3600000) % 24,
      minute: Math.floor(ms / 60000) % 60,
      second: Math.floor(ms / 1000) % 60,
      millisecond: Math.floor(ms) % 1000,
    }
    return Object.entries(time)
      .filter((val) => val[1] !== 0)
      .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
      .join(", ")
  }

  /**
   * @description 如何向传递的URL发出GET请求？
   * @param { String } url
   * @param {Function} callback 成功回调函数
   * @param {Function} err 失败回调函数
   * @return {*}
   * @memberof Tool
   * @example
   * httpGet('https://jsonplaceholder.typicode.com/posts/1', console.log) // {"userId": 1, "id": 1, "title": "sample title", "body": "my text"}
   */
  httpGet(url, callback, err = console.error) {
    const request = new XMLHttpRequest()
    request.open("GET", url, true)
    request.onload = () => callback(request.responseText)
    request.onerror = () => err(request)
    request.send()
  }

  /**
   * @description 如何对传递的URL发出POST请求？
   * @param { String } url
   * @param { Object } data
   * @param {Function} callback 成功回调函数
   * @param {Function} err 失败回调函数
   * @return {*}
   * @memberof Tool
   * @example
   * httpPost('https://jsonplaceholder.typicode.com/posts', data, console.log) // {"userId": 1, "id": 1, "title": "sample title", "body": "my text"}
   */
  httpPost(url, data, callback, err = console.error) {
    const request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json; charset=utf-8")
    request.onload = () => callback(request.responseText)
    request.onerror = () => err(request)
    request.send(data)
  }

  // 常用的工具函数，包含数字，字符串，数组和对象等等操作。

  /**
   * @description 金钱格式化，三位加逗号
   * @param {Number} num
   * @return {String} 5,465,615,654,465
   * @memberof Tool
   * @example
   * formatMoney('5465615654465')  // 5,465,615,654,465
   */
  formatMoney(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  /**
   * @description 截取字符串并加省略号
   * @param {String} str
   * @param {Number} length
   * @return {String} abcd....
   * @memberof Tool
   * @example
   * subText('fgfsd水电费水电费",5)  // fgfsd...
   */
  subText(str, length) {
    if (str.length === 0) {
      return ""
    }
    if (str.length > length) {
      return str.substr(0, length) + "..."
    } else {
      return str
    }
  }

  /**
   * @description B转换到KB,MB,GB并保留两位小数
   * @param {Number} fileSize
   * @return {String} 1254 -> 1.22KB
   * @memberof Tool
   * @example
   * formatFileSize(1254)  // 1.22KB
   */
  formatFileSize(fileSize) {
    let temp
    if (fileSize < 1024) {
      return fileSize + "B"
    } else if (fileSize < 1024 * 1024) {
      temp = fileSize / 1024
      temp = temp.toFixed(2)
      return temp + "KB"
    } else if (fileSize < 1024 * 1024 * 1024) {
      temp = fileSize / (1024 * 1024)
      temp = temp.toFixed(2)
      return temp + "MB"
    } else {
      temp = fileSize / (1024 * 1024 * 1024)
      temp = temp.toFixed(2)
      return temp + "GB"
    }
  }

  /**
   * @description Windows根据详细版本号判断当前系统名称
   * @param {String} osVersion 详细版本号
   * @return {String} 当前系统名称
   * @memberof Tool
   * @example
   * OutOsName("10.0.18362 Windows 10专业版")  // Win 10
   */
  OutOsName(osVersion) {
    if (!osVersion) {
      return
    }
    let str = osVersion.substr(0, 3)
    if (str === "5.0") {
      return "Win 2000"
    } else if (str === "5.1") {
      return "Win XP"
    } else if (str === "5.2") {
      return "Win XP64"
    } else if (str === "6.0") {
      return "Win Vista"
    } else if (str === "6.1") {
      return "Win 7"
    } else if (str === "6.2") {
      return "Win 8"
    } else if (str === "6.3") {
      return "Win 8.1"
    } else if (str === "10.") {
      return "Win 10"
    } else {
      return "Win"
    }
  }

  /**
   * @description 判断手机是Andoird还是IOS
   * @return {String}
   * @memberof Tool
   * @example
   * getOSType()
   */
  getOSType() {
    let u = navigator.userAgent,
      app = navigator.appVersion
    let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (isIOS) {
      return "ios"
    }
    if (isAndroid) {
      return "android"
    }
    return "其它"
  }

  /**
   * @description 判断是否是移动端
   * @return {Boolean}
   * @memberof Tool
   * @example
   * isMobile()  // false || true
   */
  isMobile() {
    return "ontouchstart" in window
  }

  /**
   * @description 在一定时间间隔内，多次调用一个方法，只会执行一次
   * @description 这个方法的实现是从Lodash库中copy的
   *
   * @description 通俗易懂说：
   * @description 1. 非立即执行版：在第一次触发事件时，不立即执行函数，而是给出一个期限值比如200ms
   * @description 如果在200ms内没有再次触发滚动事件，那么就执行函数
   * @description 如果在200ms内再次触发滚动事件，那么当前的计时取消，重新开始计时
   *
   * @description 2. 立即执行版：在第一次触发事件时，立即执行函数，在接下来的期限值不执行其他的函数，比如200ms
   * @description 首先执行函数，在接下来的200ms内有函数进来，不执行
   * @description 200ms后，有函数进来，才重复上一步的操作
   *
   * @description 函数防抖
   *
   * @param {Function} func 函数
   * @param {Number} wait 延迟执行毫秒数
   * @param {Boolean} immediate = false true：表立即执行；false：表非立即执行
   * @return {*}
   * @memberof Tool
   * @example
   * function printWidth(){
   *      console.info(window.document.body.clientWidth);
   * }
   *
   * window.addEventListener('resize', debounce(printWidth, 900,true), false)
   */
  debounce(func, wait, immediate = false) {
    // 一：
    // 非立即执行版的意思是触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
    // 非立即执行版解说：第一开始进来，timeout为null，不用清空，走else等待一秒执行函数，在这期间，又执行这个函数，timeout不为空，清除一下定时器，又继续来等待一秒

    // 二：
    // 立即执行版的意思是触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。
    // 立即执行版解说：timeout为null，callNow为true，执行函数,无触发定时器；
    // 一秒内，又调用这个函数，清空定时器（因为timeout为true），callNow为false，不执行函数；timeout为true，开启定时器，等待一秒无人访问就将timeout设null

    let timeout
    return function () {
      let context = this
      let args = arguments //参数

      if (timeout) clearTimeout(timeout)
      // console.log(1)
      if (immediate) {
        let callNow = !timeout
        // timeout有就将其设为空
        timeout = setTimeout(() => {
          timeout = null
          // console.log(2)
        }, wait)
        // console.log(3)
        if (callNow) func.apply(context, args)
      } else {
        timeout = setTimeout(() => {
          func.apply(context, args)
        }, wait)
      }
    }
  }

  /**
   * @description 函数节流（限制一个函数在一定时间内只能执行一次。）
   * @param {Function} func 函数
   * @param {Number} wait 延迟执行毫秒数
   * @param {Number} type = 1  1：表时间戳版；2：表定时器版
   * @return {*}
   * @memberof Tool
   * @example
   * function printHeight(){
   *      console.info(window.document.body.clientHeight);
   * }
   *
   * window.addEventListener("mousemove",throttle(printHeight,1000,2));
   */
  throttle(func, wait, type = 1) {
    let previous, timeout
    if (type === 1) {
      previous = 0
    } else if (type === 2) {
      timeout = null
    }
    return function () {
      let context = this
      let args = arguments
      if (type === 1) {
        let now = Date.now()

        if (now - previous > wait) {
          func.apply(context, args)
          previous = now
        }
      } else if (type === 2) {
        if (!timeout) {
          timeout = setTimeout(() => {
            timeout = null
            func.apply(context, args)
          }, wait)
        }
      }
    }
  }

  /**
   * @description 判断数据类型
   * @param {*} target
   * @return {String}
   * @memberof Tool
   * @example
   * type([""])  //array
   */
  type(target) {
    let ret = typeof target
    let template = {
      "[object Array]": "array",
      "[object Object]": "object",
      "[object Number]": "number - object",
      "[object Boolean]": "boolean - object",
      "[object String]": "string-object",
    }

    if (target === null) {
      return "null"
    } else if (ret == "object") {
      let str = Object.prototype.toString.call(target)
      return template[str]
    } else {
      return ret
    }
  }

  /**
   * @description 递归优化（尾递归）
   *
   * @param {Function} f 函数
   * @return {*}
   * @memberof Tool
   * @example
   * var sumTco = tco(function(x, y) {
   *      if (y > 0) {
   *          return sumTco(x + 1, y - 1)//重点在这里, 每次递归返回真正函数其实还是accumulator函数
   *      }
   *      else {
   *          //   console.log(x)
   *          return x
   *      }
   * });
   *
   * console.log(sumTco(1, 5));   //6    实际上现在sum函数就是accumulator函数   else那得到的
   */
  tco(f) {
    // 例子：
    // fact(6, 1) // 1 是 fact(0) 的值，我们需要手动写一下
    // fact(5, 6)
    // fact(4, 30)
    // fact(3, 120)
    // fact(2, 360)
    // fact(1, 720)
    // 720 // <= 最终的结果
    // 其实只是最后一个我们想要而已，中间那些计算的（430-434行），我们不想要保存栈里面浪费资源，尾递归就是将中间那些操作优化掉

    // 尾递归是指，在函数返回的时候，调用自身本身，并且，return语句不能包含表达式。这样，编译器或者解释器就可以把尾递归做优化，使递归本身无论调用多少次，都只占用一个栈帧，不会出现栈溢出的情况。
    // 怎么做可以减少调用栈呢？就是采用“循环”换掉“递归”。
    // 每一轮递归sum返回的都是undefined，所以就避免了递归执行；而accumulated数组存放每一轮sum执行的参数，总是有值的，这就保证了accumulator函数内部的while循环总是会执行
    // 这样就很巧妙地将“递归”改成了“循环”，而后一轮的参数会取代前一轮的参数，保证了调用栈只有一层。
    // 其实就是递归就开了很多个栈去跑每一层，尾递归就是内层跑完，才return给下一层，永远只有一个栈在跑

    let value
    let active = false
    let accumulated = []

    return function accumulator() {
      accumulated.push(arguments) //每次将参数传入. 例如, 1 100000

      if (!active) {
        active = true
        // 出循环条件, 当最后一次返回一个数字而不是一个函数时, accmulated已经被shift(), 所以出循环
        while (accumulated.length) {
          value = f.apply(this, accumulated.shift()) //调用累加函数, 传入每次更改后的参数, 并执行
          // console.log(value)  // 会发现前面都是空的，最后一个才有值，因为前面的没必要存在栈里面，浪费资源
          // 反正这里的value都是空的，就不保存了，等到跳出while的时候，在return最后一个value就行
        }
        active = false
        return value
      }
    }
  }



  /**
   * @description 随机16进制颜色 hexColor（方法一）
   *
   * @return {String}  16进制颜色
   * @memberof Tool
   * @example
   * hexColor()  // #000000
   */
  hexColor() {
    let str = "#"
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    for (let i = 0; i < 6; i++) {
      let index = Number.parseInt((Math.random() * 16).toString())
      str += arr[index]
    }
    return str
  }

  /**
   * @description 随机16进制颜色 randomHexColorCode（方法二）
   *
   * @return {String}  16进制颜色
   * @memberof Tool
   * @example
   * randomHexColorCode()  // #000000
   */
  randomHexColorCode() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16)
    return "#" + n.slice(0, 6)
  }

  /**
   * @description 转义html(防XSS攻击)
   *
   * @param {String} str 待转换的字符串
   * @return {String} 转义html字符串
   * @memberof Tool
   * @example
   * escapeHTML(`
   *      <div id="app" class="a" style="height: 1500px;"></div>
   *      <P class="a" id="aaa">1</P>
   * `))
   *
   * // &lt;div id=&quot;app&quot; class=&quot;a&quot; style=&quot;height: 1500px;&quot;&gt;&lt;/div&gt;
   * // &lt;P class=&quot;a&quot; id=&quot;aaa&quot;&gt;1&lt;/P&gt;
   */
  escapeHTML(str) {
    return str.replace(
      /[&<>'"]/g,
      (tag) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        }[tag] || tag)
    )
  }

  /**
   * @description 数字超过规定大小加上加号“+”，如数字超过99显示99+
   *
   * @param {number} val 输入的数字
   * @param {number} maxNum 数字规定界限
   * @return {String}
   * @memberof Tool
   * @example
   * outOfNum(100,99)     // 99+
   */
  outOfNum(val, maxNum) {
    val = val ? val - 0 : 0
    if (val > maxNum) {
      return `${maxNum}+`
    } else {
      return val
    }
  }

  /**
   * @description 获取当前子元素是其父元素下子元素的排位
   *
   * @param {HTMLElement} el
   * @return {Number}
   * @memberof Tool
   * @example
   * getChildInParentIndex(document.getElementById("btn"))  // 1
   */
  getChildInParentIndex(el) {
    // 小知识：先走do,index++，在去while(5) 循环五次
    // previousElementSibling 属性返回指定元素的前一个兄弟元素（相同节点树层中的前一个元素节点）

    if (!el) {
      return -1
    }

    let index = 0
    do {
      index++
    } while ((el = el.previousElementSibling))
    return index
  }

  /**
   * @description 获取元素类型
   *
   * @param {*} obj
   * @return {String}  元素类型 (number, string, object, array, null, undefined)
   * @memberof Tool
   * @example
   * dataType([])  // array
   */
  dataType(obj) {
    return Object.prototype.toString
      .call(obj)
      .replace(/^\[object (.+)\]$/, "$1")
      .toLowerCase()
  }

  /**
   * @description fade动画
   *
   * @param {HTMLElement} el
   * @param {string} [type='in'] 动画类型
   * @memberof Tool
   * @example
   * setFade(document.getElementById("btn"))
   */
  setFade(el, type = "in") {
    // 思路：其实就是让opacity从0慢慢加到1,利用requestAnimationFrame使opacity在变化的过程添加动画
    // window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
    // 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
    // 所以requestAnimationFrame会一直回调，直到opacity大于1，则停止动画
    el.style.opacity = type === "in" ? 0 : 1
    let last = +new Date()
    const tick = () => {
      const opacityValue =
        type === "in" ? (new Date() - last) / 400 : -(new Date() - last) / 400
      el.style.opacity = +el.style.opacity + opacityValue
      last = +new Date()
      if (type === "in" ? +el.style.opacity < 1 : +el.style.opacity > 0) {
        requestAnimationFrame(tick)
      }
    }
    tick()
  }

  /**
   * @description 禁止网页复制粘贴（默认都禁止）
   *
   * @param {boolean} [isStopCopy=true] 是否禁止网页复制
   * @param {boolean} [isStopPaste=true] 是否禁止网页被黏贴
   * @return {*}
   * @memberof Tool
   * @example
   * stopCopyOrPaste(true,true)
   */
  stopCopyOrPaste(isStopCopy = true, isStopPaste = true) {
    const html = document.querySelector("html")
    if (isStopCopy && isStopPaste) {
      html.oncopy = () => false
      html.onpaste = () => false
      return
    }
    if (isStopCopy) {
      html.oncopy = () => false
      return
    }
    if (isStopPaste) {
      html.onpaste = () => false
      return
    }
  }

  /**
   * @description 去除字符串中的html代码
   *
   * @param {string} [str='']
   * @return {String}
   * @memberof Tool
   * @example
   * stopCopyOrPaste('<h1>哈哈哈哈<呵呵呵</h1>')  // 呵呵呵
   */
  removeHTML(str = "") {
    return str.replace(/<[\/\!]*[^<>]*>/gi, "")
  }

  /**
   * @description 生成随机字符串
   *
   * @param {number} [length=8] 指定位数
   * @param {string} [chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'] 指定字符
   * @return {*}
   * @memberof Tool
   * @example
   * uuid()  // E10fvazi   (如果都不传，默认生成8位)
   *
   * uuid(4, "abcd")  // bccc
   */
  uuid(
    length = 8,
    chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  ) {
    let result = ""
    for (var i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)]
    }

    return result
  }

  /**
   * @description 保留到小数点以后n位
   *
   * @param {Number} number 目标数字
   * @param {number} [no=2] 保留到小数点以后no位
   * @return {Number}
   * @memberof Tool
   * @example
   * cutNumber(1.545454658648);   // 1.55
   * cutNumber(1.545454658648, 4);   // 1.5455
   */
  cutNumber(number, no = 2) {
    if (typeof number != "number") {
      number = Number(number)
    }
    return Number(number.toFixed(no))
  }

  /**
   * @description 计算函数执行时间
   *
   * @param {Function} callback 执行函数
   * @return {*}
   * @memberof Tool
   * @example
   * const getPow =  () => Math.pow(2, 10);
   * timeTaken(getPow);   // timeTaken: 0.010009765625 ms   // 1024
   */
  timeTaken(callback) {
    console.time("timeTaken")
    const r = callback()
    console.timeEnd("timeTaken")
    return r
  }

  /**
   * @description 创建一个发布订阅（发布-订阅）事件集线，有emit，on和off方法。
   * @description 1. 使用Object.create(null)创建一个空的hub对象
   * @description 2. emit，根据event参数解析处理程序数组，然后.forEach()通过传入数据作为参数来运行每个处理程序。
   * @description 3. on，为事件创建一个数组（若不存在则为空数组），然后.push()将处理程序添加到该数组。
   * @description 4. off，用.findIndex()在事件数组中查找处理程序的索引，并使用.splice()删除。
   * @description 发布/订阅模式
   *
   * @return {*}
   * @memberof Tool
   * @example
   * const handler = (data) => console.log(data)
   * const hub = tool.createEventHub()
   * let increment = 0
   *
   * 订阅，监听不同事件
   * hub.on("message", handler)
   * hub.on("message", () => console.log("Message event fired"))
   * hub.on("increment", () => console.log(increment++))
   *
   * 发布：发出事件以调用所有订阅给它们的处理程序，并将数据作为参数传递给它们
   * hub.emit("message", "hello world") // 打印 'hello world' 和 'Message event fired'
   * hub.emit("message", { hello: "world" }) // 打印 对象 和 'Message event fired'
   * hub.emit("increment") // increment = 1
   *
   * // 停止订阅
   * hub.off("message", handler) // 把handler函数给删除掉
   * hub.emit("message", { hello: "world" }) // Message event fired
   * 为什么只打印一个，那是因为上面已经停止订阅了handler，自然不会打印出{ hello: "world" }；
   * message有两个订阅者，所以Message event fired还在，打印。
   */
  createEventHub() {
    return {
      hub: Object.create(null),
      emit(event, data) {
        ;(this.hub[event] || []).forEach((handler) => handler(data))
      },
      on(event, handler) {
        if (!this.hub[event]) this.hub[event] = []
        this.hub[event].push(handler)
      },
      off(event, handler) {
        const i = (this.hub[event] || []).findIndex((h) => h === handler)
        if (i > -1) this.hub[event].splice(i, 1)
        if (this.hub[event].length === 0) delete this.hub[event]
      },
    }
  }

  /**
   * @description 只调用一次的函数
   *
   * @param {Function} fn 目标函数
   * @return {*}
   * @memberof Tool
   * @example
   * const startApp = function(event) {
   *   console.log(this, event); // document.body, MouseEvent
   * };
   *
   * document.body.addEventListener('click', tool.once(startApp)); // 只执行一次startApp
   */
  once(fn) {
    let called = false
    return function () {
      if (!called) {
        called = true
        fn.apply(this, arguments)
      }
    }
  }

  /**
   * @description 迭代属性并执行回调
   *
   * @param {Object} obj 目标对象
   * @param {Function} fn 执行函数
   * @return {*}
   * @memberof Tool
   * @example
   * forOwn({ foo: 'bar', a: 1 }, v => console.log(v));  // bar 1
   */
  forOwn(obj, fn) {
    return Object.keys(obj).forEach((key) => fn(obj[key], key, obj))
  }

  /**
   * @description 检查值是否为特定类型
   *
   * @param {*} type 特定类型
   * @param {*} val 值
   * @return {Boolean}
   * @memberof Tool
   * @example
   * is(Array, [1])); // true
   * is(ArrayBuffer, new ArrayBuffer())); // true
   * is(Map, new Map())); // true
   * is(RegExp, /./g)); // true
   * is(Set, new Set())); // true
   * is(WeakMap, new WeakMap())); // true
   * is(WeakSet, new WeakSet())); // true
   * is(String, '')); // true
   * is(String, new String(''))); // true
   * is(Number, 1)); // true
   * is(Number, new Number(1))); // true
   * is(Boolean, true)); // true
   * is(Boolean, new Boolean(true))); // true
   */
  is(type, val) {
    return ![, null].includes(val) && val.constructor === type
  }

  /**
   * @description constructor不能判断undefined、null，其他都可以判断
   * @description 返回值或变量的类型名
   *
   * @param {*} v 值或变量
   * @return {String}  类型名
   * @memberof Tool
   * @example
   * getType(new Set([1, 2, 3])); // set
   * getType([1, 2, 3]); // array
   * getType(function (){}); // function
   */
  getType(v) {
    return v === undefined
      ? "undefined"
      : v === null
      ? "null"
      : v.constructor.name.toLowerCase()
  }

  /**
   * @description 防XSS攻击
   *
   * @description 转义HTML
   *
   * @param {String} str HTML字符串
   * @return {String} 转义HTML字符串
   * @memberof Tool
   * @example
   * escapeHTML('<a href="#">Me & you</a>'); // &lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;
   */
  escapeHTML(str) {
    return str.replace(
      /[&<>'"]/g,
      (tag) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        }[tag] || tag)
    )
  }

  /**
   * @description 柯里化：参数不一次性传，分段传
   * 
   * @description 实现思路：
   * @description 1. 获取目标函数的参数长度，后续方便做判断（相等则返回）
   * @description 2. 获取第一个参数args1（传个目标函数的）
   * @description 3. 返回一个函数res，获取第二个参数arg2
   * @description 4. 合并参数，给fn传参（当然目标函数的参数和柯里化的参数数量要一致）
   * 
   * @description 实现一个科里化函数（柯里化）
   *
   * @param {Function} fn
   * @param {*} args1 多个参数
   * @return {*} 
   * @memberof Tool
   * @example
   * const add = (a, b, c) => a + b + c
     const a = tool.currying(add, 1)
     console.log(a(2, 3)) // 6
   */
  currying(fn, ...args1) {
    // 获取fn参数有几个
    const length = fn.length
    let allArgs = [...args1] // 1
    const res = (...arg2) => {
      // arg2 2,3
      allArgs = [...allArgs, ...arg2]
      // 长度相等就返回执行结果
      if (allArgs.length === length) {
        return fn(...allArgs)
      } else {
        // 不相等继续返回函数
        return res
      }
    }
    return res
  }

  /**
   * @description 题目描述：实现一个 add 方法 使计算结果能够满足如下预期：
   * @description add(1)(2)(3)()=6  柯里化
   * 
   * @description 实现思路
   * @description 1. 首先获取第一个参数args1
   * @description 2. 内部返回一个函数fn
   * @description 3. fn函数，获取之前的参数和现在的参数合并
   * @description 4. 为什么说之前的参数，因为fn内部使用递归去将柯里化的参数合并，直到现在的参数 无参才结束递归（所以后面()，就不能在加参数了哦）
   * @description 5. 最后将数组，使用reduce相加（利用toString）
   * 
   * @description 实现add函数
   *
   * @param {*} args1
   * @return {*} 
   * @memberof Tool
   * @example
   * const add1 = tool.add(1)(2)(3)(4, 5)(1)()
     console.log(add1) // 16
     const add2 = tool.add(1, 2)(3)()
     console.log(add2) // 6

     说一下实现思路的【第四点】
     tool.add(1)(2)(3)(4, 5)(1)()(1)
     这样子会报错，已经()，就不能在执行柯里化传参了
   */
  add(...args1) {
    let allArgs = [...args1]

    function fn(...args2) {
      if (!args2.length) return fn.toString()
      allArgs = [...allArgs, ...args2]
      return fn
    }

    fn.toString = function () {
      return allArgs.reduce((pre, next) => pre + next)
    }

    return fn
  }

  /**
   * @description 题目描述：
   * @description 1. 在 js 中经常会出现嵌套调用这种情况，如 a.b.c.d.e，但是这么写很容易抛出异常。
   * @description 2. 你需要这么写 a && a.b && a.b.c && a.b.c.d && a.b.c.d.e，但是显得有些啰嗦与冗长了。
   * @description 3. 特别是在 graphql 中，这种嵌套调用更是难以避免。
   * @description 4. 这时就需要一个 get 函数，使用 get(a, 'b.c.d.e') 简单清晰，并且容错性提高了很多。
   * 
   * @description 实现思路：
   * @description 1. 先对第二个参数path进行转化，以“.”切割成数组
   * @description 2. 对数组进行遍历，将每次获取到的属性值存进result变量
   * @description 3. 下次遍历的时候，result就可以拿到上次的值，进行取属性
   * @description 4. 需注意的是：null取数组会报错，所以使用Object包装一下
   * @description 5. 若属性值为空，则返回第三个参数defaultValue
   * @description 6. for of可对数组对象都可遍历
   * 
   * @description https://github.com/lgwebdream/FE-Interview/issues/20
   * @description 实现 lodash 的_.get
   *
   * @param {Array/Object} source 目标数组/对象
   * @param {String} path 获取对象的字符串路径
   * @param {*} [defaultValue=undefined] 若值为空，则可传入默认值作为返回值
   * @return {*} 
   * @memberof Tool
   * @example
   * const get1 = tool._get({ a: null }, "a.b.c", 3)
     console.log(get1) // output: 3
     const get2 = tool._get({ a: [{ b: 1 }] }, "a[0].b", 3)
     console.log(get2) // output: 1
   */
  _get(source, path, defaultValue = undefined) {
    // a[3].b -> a.3.b -> [a,3,b]
    // path 中也可能是数组的路径，全部转化成 . 运算符并组成数组
    const paths = path.replace(/\[(\d+)\]/g, ".$1").split(".")
    let result = source
    for (const p of paths) {
      // 注意 null 与 undefined 取属性会报错，所以使用 Object 包装一下。
      result = Object(result)[p]
      if (result == undefined) {
        return defaultValue
      }
    }
    return result
  }

  /**
   * @description 和上面方法_get类似，只不过此方法使用形参的方式传参
   *
   * @param {*} obj 目标数组对象
   * @param {*} args 形参
   * @return {*} 
   * @memberof Tool
   * @example
   * const getVal1 = tool.getVal({ a: null }, "a", "0", "b")
     console.log(getVal1) //  null
     const getVal2 = tool.getVal({ a: [{ b: 1 }] }, "a", "0", "b")
     console.log(getVal2) //  1
   */
  getVal(obj, ...args) {
    let out = null
    if (obj || obj === 0) {
      out = obj
      if (args && args.length > 0) {
        for (let index = 0; index < args.length; index++) {
          const key = args[index]
          out = out[key]
          if (out === undefined || out === null || out === "") {
            return null
          }
        }
      } else {
        if (out === undefined || out === null || out === "") {
          return null
        }
      }
    }
    return out
  }
}

export default Tool

// 3. 第三部分：字符串：https://juejin.cn/post/6844903966526930951#heading-32
