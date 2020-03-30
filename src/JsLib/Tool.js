import  React  from  'react'
import ReactDom from 'react-dom'

// ES6 方法，用来解决实际开发的 JS 问题

 class Tool{
    constructor(){
          
    }

    getDom(el){
        ReactDom.render(
            <div>
                <h1 style={{color:'red'}}>张培跃</h1>
                <h2>欢迎学习 React</h2>
                <p>今天天气不错，挺风和日丽的！</p>
            </div>,
            document.querySelector(el)
        )
    }

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

    inArray(item, data) {
        for (let i = 0; i < data.length; i++) {
            if (item === data[i]) {
                return i;
            }
        }
        return -1;
    }
    
    



   

   


    init(){
       
    }


}

export {Tool}