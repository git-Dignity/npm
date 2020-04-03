// 迭代器模式（顺序访问一个集合（一般是数组，对象不是有序）；使用者无需知道集合的内部结构（封装）） 

class Iterator{
    constructor(container){
        this.list = container.list;
        this.index = 0;
    }
    next(){
        if(this.hasNex()){  //如果有下一个就循环返回list
            return this.list[this.index++]
        }
        return null;    //如果没有下一项就返回null
    }
    //是否有下一项
    hasNex(){
        if(this.index == this.list.length){
            return false;
        }
        return true;
    }
}

class Container{
    constructor(list){
        this.list = list;
    }
    //生成迭代器
    getIterator(){
        return new Iterator(this);
    }
}




//现在不仅仅是可以传数组，因为我们进行封装
// 兼容所有的有序集合

// 现在讲解es6的Iterator迭代器
function each(data){
    //生成迭代器
    let iterator = data[Symbol.iterator]()

    //done:true  就是没数据了，最后一项了
    let item = {done:false} //先手动添加个done，来作为while的循环条件
    while(!item.done){
        item = iterator.next()
        if(!item.done){
            //这里为false就是，还有值，就可以打印出
            console.log(item.value)
        }
    }
}




// 要想使用for of，首先data打印出来，必须有Symbol.iterator方法
// 带有变流器特征对象，data[Symbol.iterator]有值
function each1(data){
    for(let item of data){
        console.log(item)
    }
}




export { Container, each};