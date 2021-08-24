// ES6 方法，用来解决实际开发的 JS 问题

/**
 * 工具类
 *
 * @class Tool
 */
class Tool {
    constructor() {}

  
   /**
    * @description 如何隐藏所有指定的元素
    * @param {HTMLElement} el
    * @return { * }
    * @memberof Tool
    * @example
    * hide(document.querySelectorAll('p'))
    */
   hide(el) {
        Array.from(el).forEach(e => (e.style.display = 'none'));
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
        return parent !== child && parent.contains(child);
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
        const { top, left, bottom, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        return partiallyVisible
            ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
            ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
            : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
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
        const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
        return includeDuplicates ? images : [...new Set(images)];
    }

    /**
      * @description 如何确定设备是移动设备还是台式机/笔记本电脑？
      * @return { String } 'Mobile' / 'Desktop'
      * @memberof Tool
      * @example
      * detectDeviceType() // "Mobile" or "Desktop"
    */
    detectDeviceType() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
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
            (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
            {}
        );
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
        el.removeEventListener(evt, fn, opts);
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
        if (ms < 0) ms = -ms;
        const time = {
            day: Math.floor(ms / 86400000),
            hour: Math.floor(ms / 3600000) % 24,
            minute: Math.floor(ms / 60000) % 60,
            second: Math.floor(ms / 1000) % 60,
            millisecond: Math.floor(ms) % 1000
        };
        return Object.entries(time)
            .filter(val => val[1] !== 0)
            .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
            .join(', ');
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
        const request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = () => callback(request.responseText);
        request.onerror = () => err(request);
        request.send();
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
        const request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.onload = () => callback(request.responseText);
        request.onerror = () => err(request);
        request.send(data);
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
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
            return '';
        }
        if (str.length > length) {
            return str.substr(0, length) + "...";
        } else {
            return str;
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
        let temp;
        if (fileSize < 1024) {
            return fileSize + 'B';
        } else if (fileSize < (1024 * 1024)) {
            temp = fileSize / 1024;
            temp = temp.toFixed(2);
            return temp + 'KB';
        } else if (fileSize < (1024 * 1024 * 1024)) {
            temp = fileSize / (1024 * 1024);
            temp = temp.toFixed(2);
            return temp + 'MB';
        } else {
            temp = fileSize / (1024 * 1024 * 1024);
            temp = temp.toFixed(2);
            return temp + 'GB';
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
        let str = osVersion.substr(0, 3);
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
        let u = navigator.userAgent, app = navigator.appVersion;
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isIOS) {
            return "ios";
        }
        if (isAndroid) {
            return "android";
        }
        return "其它";
    }


    
    /**
     * @description 判断是否是移动端
     * @return {Boolean}
     * @memberof Tool
     * @example
     * isMobile()  // false || true
     */    
    isMobile() {
        return 'ontouchstart' in window
    }

  
    /**
     * @description 函数防抖
     * @param {Function} func
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
        // 非立即执行版的意思是触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
        // 非立即执行版解说：第一开始进来，timeout为null，不用清空，走else等待一秒执行函数，在这期间，又执行这个函数，timeout不为空，清除一下定时器，又继续来等待一秒
        // 立即执行版的意思是触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。
        // 立即执行版解说：timeout为null，callNow为true，执行函数,无触发定时器；
        // 一秒内，又调用这个函数，清空定时器（因为timeout为true），callNow为false，不执行函数；timeout为true，开启定时器，等待一秒无人访问就将timeout设null

        let timeout;
        return function () {
            let context = this;
            let args = arguments;   //参数

            if (timeout) clearTimeout(timeout);
            // console.log(1)
            if (immediate) {
                let callNow = !timeout;
                // timeout有就将其设为空
                timeout = setTimeout(() => {
                    timeout = null;
                    // console.log(2)
                }, wait);
                //  console.log(3)
                if (callNow) func.apply(context, args)
            }
            else {
                timeout = setTimeout(() => {
                    func.apply(context, args)
                }, wait);
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
        let previous, timeout;
        if (type === 1) {
            previous = 0;
        } else if (type === 2) {
            timeout = null;
        }
        return function () {
            let context = this;
            let args = arguments;
            if (type === 1) {
                let now = Date.now();

                if (now - previous > wait) {
                    func.apply(context, args);
                    previous = now;
                }
            } else if (type === 2) {
                if (!timeout) {
                    timeout = setTimeout(() => {
                        timeout = null;
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
        let ret = typeof (target);
        let template = {
            "[object Array]": "array",
            "[object Object]": "object",
            "[object Number]": "number - object",
            "[object Boolean]": "boolean - object",
            "[object String]": 'string-object'
        };

        if (target === null) {
            return 'null';
        } else if (ret == "object") {
            let str = Object.prototype.toString.call(target);
            return template[str];
        } else {
            return ret;
        }
    }

    /**
     * @description 生成指定范围随机数
     * @param {number } min 
     * @param {number} max
     * @return {Number}
     * @memberof Tool
     * @example
     * RandomNum(0,10)  // 5
     */    
    RandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * @description 加法函数（精度丢失问题）
     * @param {Number} arg1
     * @param {Number} arg2
     * @return {Number}
     * @memberof Tool
     * @example
     * add(0.1,0.2)  // 0.3
     */    
    add(arg1, arg2) {
        // 还有解决方式：把小数放到位整数（乘倍数），再缩小回原来倍数（除倍数）
        // 0.1 + 0.2  ->  (0.1*10 + 0.2*10) / 10 == 0.3   // true

        let r1, r2, m;
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m
    }


    /**
     * @description 减法函数（精度丢失问题）
     * @param {Number} arg1
     * @param {Number} arg2
     * @return {Number}
     * @memberof Tool
     * @example
     * sub(0.2,0.1)  // 0.1
     */    
    sub(arg1, arg2) {
        let r1, r2, m, n;
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
    }

    /**
     * @description 除法函数（精度丢失问题）
     *
     * @param {Number} num1
     * @param {Number} num2
     * @return {Number} 
     * @memberof Tool
     * @example
     * division(0.2,0.1)  // 2
     */
    division(num1, num2) {
        let t1, t2, r1, r2;
        try {
            t1 = num1.toString().split('.')[1].length;
        } catch (e) {
            t1 = 0;
        }
        try {
            t2 = num2.toString().split(".")[1].length;
        } catch (e) {
            t2 = 0;
        }
        r1 = Number(num1.toString().replace(".", ""));
        r2 = Number(num2.toString().replace(".", ""));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    }

    /**
     * @description 乘法函数（精度丢失问题）
     *
     * @param {Number} num1
     * @param {Number} num2
     * @return {Number} 
     * @memberof Tool
     * @example
     * mcl(0.2,0.1)  // 0.02
     */
    mcl(num1, num2) {
        let m = 0, s1 = num1.toString(), s2 = num2.toString();
        try { m += s1.split(".")[1].length } catch (e) { }
        try { m += s2.split(".")[1].length } catch (e) { }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
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
     * //   console.log(sumTco(1, 5));   //6    实际上现在sum函数就是accumulator函数   else那得到的
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


        let value;
        let active = false;
        let accumulated = [];

        return function accumulator() {

            accumulated.push(arguments);   //每次将参数传入. 例如, 1 100000

            if (!active) {
                active = true;
                // 出循环条件, 当最后一次返回一个数字而不是一个函数时, accmulated已经被shift(), 所以出循环
                while (accumulated.length) {
                    value = f.apply(this, accumulated.shift()); //调用累加函数, 传入每次更改后的参数, 并执行
                    // console.log(value)  // 会发现前面都是空的，最后一个才有值，因为前面的没必要存在栈里面，浪费资源
                    // 反正这里的value都是空的，就不保存了，等到跳出while的时候，在return最后一个value就行
                }
                active = false;
                return value;
            }
        };
    }

    /**
     * @description 生成随机整数（支持一个参数或者两个参数）
     *
     * @param {Number} min 最小值
     * @param {Number} max 最大值
     * @return {Number} 
     * @memberof Tool
     * @example
     * randomNumInteger(10) // 5
     * randomNumInteger(10,20)  // 15
     */
    randomNumInteger(min, max) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * min + 1, 10);
            case 2:
                return parseInt(Math.random() * (max - min + 1) + min, 10);
            default:
                return 0
        }
    }

    /**
     * @description 去除空格
     *
     * @param {string} str 待处理字符串
     * @param {number} [type=1] 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
     * @return {String} 
     * @memberof Tool
     * @example
     * trim(" dg   g145415  44 ",1) // dgg14541544
     */
    trim(str, type = 1) {
        if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
        switch (type) {
            case 1:
                return str.replace(/\s/g, "");
            // return str.trim()
            case 2:
                return str.replace(/(^\s)|(\s*$)/g, "");
            case 3:
                return str.replace(/(^\s)/g, "");
            // return str.trimStart()
            case 4:
                return str.replace(/(\s$)/g, "");
            // return str.trimEnd()
            default:
                return str;
        }
    }

    /**
     * @description 大小写转换
     *
     * @param {String} str 待转换的字符串
     * @param {Number} type 1-全大写 2-全小写 3-首字母大写 其他-不转换
     * @return {*} 
     * @memberof Tool
     * @example
     * turnCase("asFG",1)  // ASFG
     */
    turnCase(str, type) {
        switch (type) {
            case 1:
                return str.toUpperCase();
            case 2:
                return str.toLowerCase();
            case 3:
                return str[0].toUpperCase() + str.substr(1).toLowerCase();
            default:
                return str;
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
        let str = '#';
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        for (let i = 0; i < 6; i++) {
            let index = Number.parseInt((Math.random() * 16).toString());
            str += arr[index]
        }
        return str;
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
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
    };
 
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
            tag =>
                ({
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    "'": '&#39;',
                    '"': '&quot;'
                }[tag] || tag)
        );
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
        val = val ? val - 0 : 0;
        if (val > maxNum) {
            return `${maxNum}+`
        } else {
            return val;
        }
    };

    

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

        let index = 0;
        do {
            index++;
        } while (el = el.previousElementSibling);
        return index;
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
        return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
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
    setFade(el, type = 'in') {
        // 思路：其实就是让opacity从0慢慢加到1,利用requestAnimationFrame使opacity在变化的过程添加动画
        // window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
        // 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
        // 所以requestAnimationFrame会一直回调，直到opacity大于1，则停止动画
        el.style.opacity = (type === 'in' ? 0 : 1)
        let last = +new Date()
        const tick = () => {
            const opacityValue = (type === 'in'
                ? (new Date() - last) / 400
                : -(new Date() - last) / 400)
            el.style.opacity = +el.style.opacity + opacityValue
            last = +new Date()
            if (type === 'in'
                ? (+el.style.opacity < 1)
                : (+el.style.opacity > 0)) {
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
        const html = document.querySelector('html');
        if (isStopCopy && isStopPaste) {
            html.oncopy = () => false;
            html.onpaste = () => false;
            return;
        }
        if (isStopCopy) {
            html.oncopy = () => false;
            return;
        }
        if (isStopPaste) {
            html.onpaste = () => false;
            return;
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
    removeHTML (str = ''){
        return str.replace(/<[\/\!]*[^<>]*>/ig, '')
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
    uuid(length = 8, chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
        let result = ''
        for (var i = length; i > 0; --i){
            result += chars[Math.floor(Math.random() * chars.length)]
        }
            
        return result
    }
    



    init() {}
}

export default Tool