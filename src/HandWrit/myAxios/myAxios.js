import { utils } from './utils'
import InterceptorsManage from './InterceptorsManage'

/**
 * 手写axios
 * 分析：从axios(config)的使用上可以看出导出的axios是一个方法。
 * 从axios.method(url, data , config)的使用可以看出导出的axios上或者原型上挂有get，post等方法。
 */
class Axios {
    constructor(){
        this.interceptors = {
            request: new InterceptorsManage,    // 请求拦截器
            response: new InterceptorsManage    // 响应拦截器
        }
    }

    request(config){
        this.sendAjax(config)
        // 拦截器和请求组装队列
        let chain = [this.sendAjax.bind(this), undefined]  // 成对出现的，失败回调暂时不处理

        // 请求拦截器的handlers的成对回调放到chain数组头部
        this.interceptors.request.handlers.forEach(interceptor =>{
            chain.unshift(interceptor.fullfield, interceptor.rejected)
        })

        // 响应拦截器的handlers的承兑回调反倒chain数组的尾部
        this.interceptors.response.handlers.forEach(interceptor =>{
            chain.push(interceptor.fullfield, interceptor.rejected)
        })

        // 执行队列，每次执行一对，并给promise赋最新的值
        let promise  = Promise.resolve(config)
        while(chain.length > 0){
            promise = promise.then(chain.shift(), chain.shift())
        }
        return promise;
    }
    sendAjax(config){
        return new Promise((resolve) => {
            const { url = '', method = 'get', data = {}} = config;
            // 发送ajax请求
            const xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            xhr.onload = function(){
                // console.log(xhr.responseText);
                resolve(xhr.responseText)
            }
            xhr.send(data);

        })
    }
}

// 定义get, post...方法，挂在Axios原型上
const methodsArr = [ 'get', 'delete', 'head', 'options', 'put', 'patch', 'post' ];
methodsArr.forEach(met => {
    Axios.prototype[met] = function(){
        console.log('执行' + met + '方法')
        // 处理单个方法, get不把参数放body的
        if(['get', 'delete', 'head', 'options'].includes(met)){   // 2个参数(url[, config])
            return this.request({
                method: met, 
                url: arguments[0],
                ...arguments[1]  || {},
            })
        }else{  // 3个参数(url[,data[,config]])
            // post...
            return this.request({
                method: met,
                url: arguments[0],
                data: arguments[1] || {},
                ...arguments[2] || {}
            })
        }
    }
})


// 最终导出axios的方法，即实例的request方法
function CreateAxiosFn(){
    let axios = new Axios();
    let req = axios.request.bind(axios);
    
     // 混入方法， 处理axios的request方法，使之拥有get,post...方法
    utils.extend(req, Axios.prototype, axios) // 把Axios.prototype上的方法搬运到request上
    // 因为interceptors是axios上的，我们导出的是request，
    // 把Axios上的方法和属性搬到request过去，也就是遍历Axios实例上的方法，得以将interceptors对象挂载到request上
    utils.extend(req, axios)
    return req;
}


// 得到最后的全局变量axios
export let myAxios = CreateAxiosFn();



