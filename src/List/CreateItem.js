import Item from './Item.js'

//不是说为了使用工厂模式才专门写个js来用
//是为了其他还有优惠商品的处理逻辑

//为什么要创建这个js
// 有人说：把这部分的逻辑在list那引用new item的时候写不就行吗
//折扣信息是需要交给item自己去做，而不是说交给list去做，list只是显示而已

//有人又问：代理模式定义不是说无权修改方法，使用才使用代理模式
//不一定说一定要为了定义去写，我觉得这样使用代理模式也可以符合设计模型就好

function createDiscount(itemData){
    //用代理模式做折扣显示，好处就是不用去改数据，直接在代理写逻辑
    return new Proxy(itemData,{
        get: function (target,key,receiver){
            if(key == 'name'){
                return `${target[key]} 【折扣】`
            }
            if(key == 'price'){
                return target[key] *0.8
            }
            return target[key]
        }
    })
}


//工厂模式，遇到需要new的类，就写下工厂模式
export default function(list, itemData){
    //1代表折扣，0原价，0也不会进去if
    if(itemData.discount){
        itemData = createDiscount(itemData);
    }
    return new Item(list,itemData)
}