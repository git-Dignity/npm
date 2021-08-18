// 浏览器操作相关browser工具函数

class Browser{
    constructor(){

    }

    
    /**
     * @description 如何隐藏所有指定的元素
     *
     * @return {*} 
     * @memberof Browser
     * @example
     * currentURL()   // http://localhost:9000/
     */
    currentURL (){
        return window.location.href;
    }

    // 获取窗口可视范围的高度

    /**
     * @description 如何隐藏所有指定的元素
     *
     * @return {*} 
     * @memberof Browser
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

    // 获取窗口可视范围宽度
    /**
     * @description 如何隐藏所有指定的元素
     *
     * @return {*} 
     * @memberof Browser
     */
    getPageViewWidth(){
        let d = document,
        a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
        return a.clientWidth;
    }

    // 获取窗口宽度

    /**
     * @description 如何隐藏所有指定的元素
     *
     * @return {*} 
     * @memberof Browser
     */
    getPageWidth(){
        let g = document,
        a = g.body,
        f = g.documentElement,
        d = g.compatMode == "BackCompat" ? a : g.documentElement;
        return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);

    }

    // 获取窗口尺寸
    /**
     * @description 如何隐藏所有指定的元素
     *
     * @return {*} 
     * @memberof Browser
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

    // 获取滚动条距顶部高度
    /**
     * @description 如何隐藏所有指定的元素
     *
     * @return {*} 
     * @memberof Browser
     */
    getPageScrollTop(){
        let a = document;
        return a.documentElement.scrollTop || a.body.scrollTop;
    }

    // 获取滚动条距左边的高度

    /**
     * @description 如何隐藏所有指定的元素
     *
     * @return {*} 
     * @memberof Browser
     */
    getPageScrollLeft(){
        let a = document;
        return a.documentElement.scrollLeft || a.body.scrollLeft;
    }

    // 返回当前滚动条位置

    /**
     * @description 如何隐藏所有指定的元素
     *
     * @param {*} [el=window]
     * @return {*} 
     * @memberof Browser
     */
    getScrollPosition (el = window){
        return {
            x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
            y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
        }
    }

    /**
     * 获取当前元素相对于document的偏移量
     * @param {el} el 
     */

    /**
     * @description 如何隐藏所有指定的元素
     *
     * @param {*} el
     * @return {*} 
     * @memberof Browser
     */
    getOffset(el){
        const { top, left } = el.getBoundingClientRect();
        const {scrollTop, scrollLeft} = document.body;

        return {
            top: top + scrollTop,
            left: left + scrollLeft
        }
    }

    // 滚动到页面的最下/最上
    //传true向上平滑，不传就是向下（默认）

    /**
     * @description 如何隐藏所有指定的元素
     *
     * @param {*} isEnd
     * @memberof Browser
     */
    smoothScroll (isEnd){
        isEnd = isEnd==true?"start" : "end";
        document.documentElement.scrollIntoView({
            behavior: "smooth", //平滑
            block: isEnd,       //end向下滑动  start向上滑动
            inline: "nearest"   
        });
    }

    // http跳转https（当前url如果是http会帮你转https）

    /**
     * @description 如何隐藏所有指定的元素
     *
     * @memberof Browser
     */
    httpsRedirect (){
        if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);

    }

    // 打开一个窗口
    // /**
    //  * @param { string } url
    //  * @param { string } windowName
    //  * @param { number } width
    //  * @param { number } height
    //  */

    /**
     * @description 如何隐藏所有指定的元素
     *
     * @param {*} url
     * @param {*} windowName
     * @param {*} width
     * @param {*} height
     * @memberof Browser
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

}

export {Browser}

