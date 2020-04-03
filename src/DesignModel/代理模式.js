// 代理模式（使用者无权访问目标对象；中间加代理，通过代理做授权和控制）

class ReadImg{
    constructor(fileName){
        this.fileName = fileName;
        this.loadFromDisk();    //初始化即从硬盘加载，模拟
    }

    display(){
        console.log('display...' + this.fileName)
    }
    loadFromDisk(){
        console.log('loading....' + this.fileName)
    }
}

//代理中，要有和ReadImg一样的方法display()
class ProxyImg{
    constructor(fileName){
        this.readlImg = new ReadImg(fileName)
    }
    display(){
        this.readlImg.display();      //这样就可以直接访问ReadImg的方法
    }
}


//肯定不能直接new ReadImg对象，new代理对象
// 不管是用代理还是直接访问，地址都是一样，也就是说有共同的方法，这里就是display()







//下面有个实例，es6的proxy
// proxy在目标对象的外层搭建了一层拦截，外界对目标对象的某些操作，必须通过这层拦截

// 找明星，就得先找明星经纪人（es6的proxy）

//明星
let star = {
    name:'华晨宇',
    age:30,
    phone:"15915594"
} 


// proxy在目标对象的外层搭建了一层拦截，外界对目标对象的某些操作，必须通过这层拦截
//经纪人
let agent = new Proxy(star,{
    get:function(target,key){
        //这个phone的名字必须和明星的一样，不管用不用代理，key值都是一样，像上面那个display一样
        //名字属性方法一定要一样
        if(key === 'phone'){
            // 返回经纪人自己的电话,明星电话获取不到
            return "agent:1556854544"
        }
        if(key === 'pirce'){
            //明星不报价，经纪人报价
            return 120000
        }
        return target[key]  //拿到明星的信息
    },
    set:function(target,key,val){   //set多了设置的val
        if(key === 'customPrice'){
            if(val < 100000){
                // 最低10w
                throw new Error('价格太低')
            }
            else{
                target[key] = val
                return true
            }
        }
    }
})





export  { ProxyImg, agent}



// 顺带一提：（代理模式、适配器模式、装饰器模式看似都是需要一个中间件，但完全不同）
// 1. 代理模式VS适配器模式 适配器模式：提供一个不同的接口 代理模式：提供一个一样的接口
// 2. 代理模式VS装饰器模式 装饰器模式：扩展模式，原有的功能不变且可直接使用 代理模式：显示原有功能，但是经过限制或者腌割之后的 
