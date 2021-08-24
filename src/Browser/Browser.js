/**
 * 浏览器操作相关browser工具函数
 *
 * @class Browser
 */
class Browser{
    constructor(){

    }


    /**
     * @description 获取当前url
     *
     * @return {String} 
     * @memberof Browser
     * @example
     * currentURL()   // http://localhost:9000/
     */
    currentURL (){
        return window.location.href;
    }

    /**
     * @description 获取窗口可视范围的高度
     *
     * @return {Number}  窗口可视范围的高度
     * @memberof Browser
     * @example
     * getClientHeight()   // 852
     */
    getClientHeight(){
        let clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        else {
            clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        return clientHeight;
    }

    /**
     * @description 获取窗口可视范围宽度
     *
     * @return {Number}  窗口可视范围宽度
     * @memberof Browser
     * @example
     * getPageViewWidth()   // 274
     */
    getPageViewWidth(){
        let d = document,
        a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
        return a.clientWidth;
    }

    /**
     * @description 获取窗口宽度
     *
     * @return {Number}  窗口宽度
     * @memberof Browser
     * @example
     * getPageWidth()   // 274
     */
    getPageWidth(){
        let g = document,
        a = g.body,
        f = g.documentElement,
        d = g.compatMode == "BackCompat" ? a : g.documentElement;
        return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);

    }

    /**
     * @description 获取窗口尺寸
     *
     * @return {Object}  窗口尺寸
     * @memberof Browser
     * @example
     * getViewportOffset()   // {w: 291, h: 852}
     */
    getViewportOffset(){
        if (window.innerWidth) {
            return {
                w: window.innerWidth,
                h: window.innerHeight
            }
        } else {
            // ie8及其以下
            if (document.compatMode === "BackCompat") {
                // 怪异模式
                return {
                    w: document.body.clientWidth,
                    h: document.body.clientHeight
                }
            } else {
                // 标准模式
                return {
                    w: document.documentElement.clientWidth,
                    h: document.documentElement.clientHeight
                }
            }
        }
    }

    /**
     * @description 获取滚动条距顶部高度
     *
     * @return {Number}  滚动条距顶部高度
     * @memberof Browser
     * @example
     * getPageScrollTop()   // 0
     */
    getPageScrollTop(){
        let a = document;
        return a.documentElement.scrollTop || a.body.scrollTop;
    }

    
    /**
     * @description 获取滚动条距左边的高度
     *
     * @return {Number}  滚动条距左边的高度
     * @memberof Browser
     * @example
     * getPageScrollLeft()   // 0
     */
    getPageScrollLeft(){
        let a = document;
        return a.documentElement.scrollLeft || a.body.scrollLeft;
    }

    /**
     * @description 返回当前滚动条位置
     *
     * @param {*} [el=window]
     * @return {Object}  当前滚动条位置
     * @memberof Browser
     * @example
     * // scrollLeft和scrollTop是IE8可兼容
     * 
     * getScrollPosition()   // {x: 0, y: 775}
     */
    getScrollPosition (el = window){
        return {
            x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
            y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
        }
    }
    

    /**
     * @description 获取当前元素相对于document的偏移量
     *
     * @param {HTMLElement} el
     * @return {Object}  当前元素相对于document的偏移量
     * @memberof Browser
     * @example
     * getOffset(document.getElementById("btn"))   // {top: 8, left: 8}
     */
    getOffset(el){
        const { top, left } = el.getBoundingClientRect();
        const {scrollTop, scrollLeft} = document.body;

        return {
            top: top + scrollTop,
            left: left + scrollLeft
        }
    }

    /**
     * @description 滚动到页面的最下/最上
     *
     * @param {Boolean} isEnd 方向  传true向上平滑，不传就是向下（默认）
     * @memberof Browser
     * @example
     * smoothScroll()   
     */
    smoothScroll (isEnd = false){
        isEnd = isEnd==true?"start" : "end";
        document.documentElement.scrollIntoView({
            behavior: "smooth", //平滑
            block: isEnd,       //end向下滑动  start向上滑动
            inline: "nearest"   
        });
    }

    /**
     * @description http跳转https（当前url如果是http会帮你转https）
     *
     * @memberof Browser
     * @example
     * httpsRedirect()   
     */
    httpsRedirect (){
        if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);

    }

    /**
     * @description 打开一个窗口
     *
     * @param {String} url 跳转链接
     * @param {String} windowName 窗口名
     * @param {Number} width 宽度
     * @param {Number} height   高度
     * @memberof Browser
     * @example
     * openWindow("https://juejin.im/post/5e6cf42bf265da57397e3694","haha",700,1000)   
     */
    openWindow(url, windowName, width, height) {
        var x = parseInt(screen.width / 2.0) - width / 2.0;
        var y = parseInt(screen.height / 2.0) - height / 2.0;
        var isMSIE = navigator.appName == "Microsoft Internet Explorer";
        if (isMSIE) {
            var p = "resizable=1,location=no,scrollbars=no,width=";
            p = p + width;
            p = p + ",height=";
            p = p + height;
            p = p + ",left=";
            p = p + x;
            p = p + ",top=";
            p = p + y;
            window.open(url, windowName, p);
        } else {
            var win = window.open(
                url,
                "ZyiisPopup",
                "top=" +
                y +
                ",left=" +
                x +
                ",scrollbars=" +
                scrollbars +
                ",dialog=yes,modal=yes,width=" +
                width +
                ",height=" +
                height +
                ",resizable=no"
            );
            eval("try { win.resizeTo(width, height); } catch(e) { }");
            win.focus();
        }
    }


    /**
     * @description 如何将字符串复制到剪贴板？
     * @description 原理：1. 创建一个textare元素并调用select()方法选中
     * @description 原理：2. document.execCommand('copy')方法，拷贝当前选中内容到剪贴板。
     * @param {String} str
     * @return {*}
     * @memberof Browser
     * @example
     * copyToClipboard('哈哈，我被你的tool.copyToClipboard复制出来了') 
     */    
     copyToClipboard(str) {
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

}

export {Browser}

