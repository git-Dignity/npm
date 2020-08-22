// 请求、响应拦截器
class InterceptorsManage{
    constructor(){
        this.handlers = []
    }

    use(fullfield, rejetcted){
        this.handlers.push({
            fullfield,
            rejetcted
        })
    }


}

export default InterceptorsManage