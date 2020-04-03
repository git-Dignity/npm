// 系统中被唯一使用；一个类只有一个实例
// 防止被重新new 实例
// 应用场景：登录框、购物车，这些系统中只有一个

//这个class是不会暴露在外面的
class SingleObject{
    login(){
        console.log('模拟登陆的时候，只能有一个实例')
    }
}

//都是通过这个来间接new SingleObject类
SingleObject.getInstance = (function(){
    // 通过闭包
    let instance;
    return function(){
        if(!instance){
            instance =  new SingleObject()
        }
        return instance;
    }
})()



export default SingleObject.getInstance()