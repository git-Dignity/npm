// 浏览器存储相关storage工具函数

class Storage{
    constructor(){

    }


    // localStorage 长期存储在浏览器


    /**
      * @description: 存贮
      * @description: 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
      * @description: JSON 不允许包含函数，JSON.stringify() 会删除 JavaScript 对象的函数，包括 key 和 value。
      * @description: JSON 不允许包含正则，JSON.stringify() 会删除 正则 对象，value，key保留。
      * @param {HTMLElement} el
      * @param { String } key  属性
      * @param { String } value 值
      * @return 
    */
    localStorageSet (key, value){
        if (typeof (value) === 'object') value = JSON.stringify(value);
        localStorage.setItem(key, value)
    }

    // localStorage 获取
    localStorageGet (key){
        return localStorage.getItem(key)
    }

    // localStorage 移除
    localStorageRemove (key){
        localStorage.removeItem(key)
    }

    // localStorage 存贮某一段时间失效
    // * @param {String} key  属性
    // * @param {*} value 存贮值
    // * @param { number } expire 过期时间,毫秒数
    localStorageSetExpire (key, value, expire){
        if (typeof (value) === 'object') value = JSON.stringify(value);
        localStorage.setItem(key, value);
        setTimeout(() => {
            localStorage.removeItem(key)
        }, expire)
    }



    // sessionStorage 浏览器关闭消失


    // sessionStorage 存贮
    sessionStorageSet (key, value){
        if (typeof (value) === 'object') value = JSON.stringify(value);
        sessionStorage.setItem(key, value)
    }

    // sessionStorage 获取
    sessionStorageGet (key){
        return sessionStorage.getItem(key)
    }

    // sessionStorage 删除
    sessionStorageRemove (key){
        sessionStorage.removeItem(key)
    }

    // sessionStorage 存贮某一段时间失效
    // * @param {String} key  属性
    // * @param {*} value 存贮值
    // * @param { number } expire 过期时间,毫秒数
    sessionStorageSetExpire (key, value, expire){
        if (typeof (value) === 'object') value = JSON.stringify(value);
        sessionStorage.setItem(key, value);
        setTimeout(() => {
            sessionStorage.removeItem(key)
        }, expire)
    }




    // cookie 存储在服务器  只能存4k


    // cookie 存贮
    // * @param {String} key  属性
    // * @param {*} value  值
    // * @param { String } expire  过期时间,单位天
    cookieSet (key, value, expire){
        const d = new Date();
        d.setDate(d.getDate() + expire);
        document.cookie = `${key}=${value};expires=${d.toUTCString()}`
    }

    // cookie 获取
    cookieGet (key){
        const cookieStr = unescape(document.cookie);
        const arr = cookieStr.split('; ');
        let cookieValue = '';
        for (let i = 0; i < arr.length; i++) {
            const temp = arr[i].split('=');
            if (temp[0] === key) {
                cookieValue = temp[1];
                break
            }
        }
        return cookieValue
    }

    // cookie 删除   key还在，val为空
    cookieRemove (key){
        document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
    }



}


export {Storage}