// 工厂模式（有new实例就考虑工厂模式，其实工厂模式就是为了省去new操作）


//产品
class Product{
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log(this.name)
    }
}

//工厂
class Creator{
    createProduct(name){
        return new Product(name)
    }
}


Window._ = function(name){
    return new Product(name);
}

let _ = Window._;


export  { Creator, _ };


//其实就是省去new这个操作
//如：$('div')就是工厂模式，如果不是的话就是   new $('div')


