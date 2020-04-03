// import  React  from  'react'
// import ReactDom from 'react-dom'

// ES6 方法，用来解决实际开发的 JS 问题

 class Tool{
    constructor(){
          
    }

    // getDom(el){
    //     ReactDom.render(
    //         <div>
    //             <h1 style={{color:'red'}}>张培跃</h1>
    //             <h2>欢迎学习 React</h2>
    //             <p>今天天气不错，挺风和日丽的！</p>
    //         </div>,
    //         document.querySelector(el)
    //     )
    // }

    // 如何隐藏所有指定的元素
    hide(el){
        Array.from(el).forEach(e => (e.style.display = 'none'));
    }

    // 如何检查元素是否具有指定的类？
    hasClass(el, className){
        return el.classList.contains(className)
    }

    // 如何切换一个元素的类? 有类就删除，无类就添加
    toggleClass(el, className){
        el.classList.toggle(className)
    }

    // 如何获取当前页面的滚动位置？
    getScrollPosition(el = window){
        return {
            x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
            y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
          }

        //   scrollLeft和scrollTop是IE8可兼容
    }

    // 如何检查父元素是否包含子元素？
    elementContains(parent, child){
        return parent !== child && parent.contains(child);
    }

    // 如何检查指定的元素在视口中是否可见？
    elementIsVisibleInViewport(el, partiallyVisible = false){
        // partiallyVisible是否开启全屏； 为true 需要全屏(上下左右)可以见

        const { top, left, bottom, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        return partiallyVisible
          ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
              ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
          : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    }

    // 如何获取元素中的所有图像？
    getImages(el, includeDuplicates = false){
        // includeDuplicates为false就是去重，true不去重

        const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
        return includeDuplicates ? images : [...new Set(images)];
    }

    // 如何确定设备是移动设备还是台式机/笔记本电脑？
    detectDeviceType(){
       return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
    }

    // 获取当前url
    currentURL(){
        return window.location.href
    }

    // 如何创建一个包含当前URL参数的对象？
    getURLParameters(url){
        // reduce() 对于空数组是不会执行回调函数的。
        return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
            (a, v) =>  ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
            {}
          );
    }

    // 如何从元素中移除事件监听器?
    off(el, evt, fn, opts = false){
        el.removeEventListener(evt, fn, opts);
    }

    // 如何获得给定毫秒数的可读格式？   1000ms = 1s
    formatDuration(ms){
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

    // 如何获得两个日期之间的差异（以天为单位）？
    // 两个new Date()相减得到毫秒
    getDaysDiffBetweenDates(dateInitial, dateFinal){
        console.log(dateFinal-dateInitial)
        return (dateFinal - dateInitial) / (1000 * 3600 * 24);
    }

    // 如何向传递的URL发出GET请求？
    httpGet(url, callback, err = console.error){
        const request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = () => callback(request.responseText);
        request.onerror = () => err(request);
        request.send();
    }

    // 如何对传递的URL发出POST请求？
    httpPost (url, data, callback, err = console.error){
        const request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.onload = () => callback(request.responseText);
        request.onerror = () => err(request);
        request.send(data);
    }

    // 如何将字符串复制到剪贴板？
    copyToClipboard(str){
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        const selected =
            document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }

    }


    // 常用的工具函数，包含数字，字符串，数组和对象等等操作。


    // 金钱格式化，三位加逗号
    formatMoney (num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // 截取字符串并加省略号
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

    // B转换到KB,MB,GB并保留两位小数
    // @param { number } fileSize
    formatFileSize(fileSize){
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

    // 查询数组中是否存在某个元素并返回元素第一次出现的下标
    inArray(item, data) {
        for (let i = 0; i < data.length; i++) {
            if (item === data[i]) {
                return i;
            }
        }
        return -1;
    }

    // Windows根据详细版本号判断当前系统名称
    OutOsName(osVersion){
        if(!osVersion){
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

    // 判断手机是Andoird还是IOS
    getOSType(){
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

    // 函数防抖
    //  * @param { function } func
    //  * @param { number } wait 延迟执行毫秒数
    //  * @param { boolean } immediate  true 表立即执行，false 表非立即执行
    //  非立即执行版的意思是触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
    //  非立即执行版解说：第一开始进来，timeout为null，不用清空，走else等待一秒执行函数，在这期间，又执行这个函数，timeout不为空，清除一下定时器，又继续来等待一秒
    //  立即执行版的意思是触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。
    //  立即执行版解说：timeout为null，callNow为true，执行函数,无触发定时器；
    //  一秒内，又调用这个函数，清空定时器（因为timeout为true），callNow为false，不执行函数；timeout为true，开启定时器，等待一秒无人访问就将timeout设null
    debounce(func,wait,immediate) {
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

    // 函数节流:限制一个函数在一定时间内只能执行一次。
    // * @param { function } func 函数
    // * @param { number } wait 延迟执行毫秒数
    // * @param { number } type 1 表时间戳版，2 表定时器版
    throttle(func, wait ,type){
        let previous, timeout;
        if(type===1){
            previous = 0;
        }else if(type===2){
            timeout = null;
        }
        return function() {
            let context = this;
            let args = arguments;
            if(type===1){
                let now = Date.now();

                if (now - previous > wait) {
                    func.apply(context, args);
                    previous = now;
                }
            }else if(type===2){
                if (!timeout) {
                    timeout = setTimeout(() => {
                        timeout = null;
                        func.apply(context, args)
                    }, wait)
                }
            }
        }   
    }

    // 判断数据类型
    type(target) {
        let ret = typeof(target);
        let template = {
            "[object Array]": "array",
            "[object Object]":"object",
            "[object Number]":"number - object",
            "[object Boolean]":"boolean - object",
            "[object String]":'string-object'
        };
    
        if(target === null) {
            return 'null';
        }else if(ret == "object"){
            let str = Object.prototype.toString.call(target);
            return template[str];
        }else{
            return ret;
        }
    }

    // 生成指定范围随机数
    // @param { number } min 
    // @param { number } max 
    RandomNum (min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // 数组乱序
    arrScrambling(arr) {
        let array = arr;
        let index = array.length;
        while (index) {
            index -= 1;
            let randomIndex = Math.floor(Math.random() * index);
            let middleware = array[index];
            array[index] = array[randomIndex];
            array[randomIndex] = middleware
            // console.log(array[index])
            // console.log(array[randomIndex])
            // console.log("----------")
        }
        return array
    }

    // 数组交集
    // @param { array} arr1
    // @param { array } arr2
    similarity (arr1, arr2){
        return arr1.filter(v => arr2.includes(v));;
    }

    // 数组中某元素出现的次数  ([1,2,2,3],2)
    countOccurrences(arr, value) {  
        return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
        //最后面那个0是我们将index索引从0开始，也就是a默认为0
        // reduce第一个参数的计算后的返回值，这里来说，a为0，因为后面加上参数0
        // reduce第二个参数是数组的第n个
    }

    // 加法函数（精度丢失问题）
    // 还有解决方式：把小数放到位整数（乘倍数），再缩小回原来倍数（除倍数）
    // 0.1 + 0.2
    // (0.1*10 + 0.2*10) / 10 == 0.3 // true
    add(arg1, arg2) {
        let r1, r2, m;
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m
    }


    // 减法函数（精度丢失问题）
    sub(arg1, arg2) {
        let r1, r2, m, n;
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
    }
    
    // 除法函数（精度丢失问题）
    division(num1,num2){
        let t1,t2,r1,r2;
        try{
            t1 = num1.toString().split('.')[1].length;
        }catch(e){
            t1 = 0;
        }
        try{
            t2=num2.toString().split(".")[1].length;
        }catch(e){
            t2=0;
        }
        r1=Number(num1.toString().replace(".",""));
        r2=Number(num2.toString().replace(".",""));
        return (r1/r2)*Math.pow(10,t2-t1);
    }

    // 乘法函数（精度丢失问题）
    mcl(num1,num2){
        let m=0,s1=num1.toString(),s2=num2.toString();
        try{m+=s1.split(".")[1].length}catch(e){}
        try{m+=s2.split(".")[1].length}catch(e){}
        return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
    }

    // 递归优化（尾递归）

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
    tco(f) {
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

    // 生成随机整数
    // 支持一个参数或者两个参数
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
    
    // 去除空格
    // * @param { string } str 待处理字符串
    // * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
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

    // 大小写转换
    // * @param { string } str 待转换的字符串
    // * @param { number } type 1-全大写 2-全小写 3-首字母大写 其他-不转换
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

    // 随机16进制颜色 hexColor
    // 方法一
    hexColor() {
        let str = '#';
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        for (let i = 0; i < 6; i++) {
            let index = Number.parseInt((Math.random() * 16).toString());
            str += arr[index]
        }
        return str;
    }

    // 随机16进制颜色 randomHexColorCode
    // 方法二
    randomHexColorCode  () {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
    };

    // 转义html(防XSS攻击)
    escapeHTML (str){
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

    // 数字超过规定大小加上加号“+”，如数字超过99显示99+
    // @param { number } val 输入的数字
    // @param { number } maxNum 数字规定界限
    outOfNum (val, maxNum){
        val = val ? val-0 :0;
        if (val > maxNum ) {
            return `${maxNum}+`
        }else{
            return val;
        }
    };
    
    
    


    
    
    



   

   


    init(){
       
    }


}

export {Tool}