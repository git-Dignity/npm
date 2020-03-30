class Cart{
    constructor(){
        this.list = []
    }
    add(data){
      
        this.list.push(data)
    }
    del(id){
        //匹配到id一样，就删除
        this.list = this.list.filter( item => {
            if(item.id == id){
                return false;
            }
            return true;
        })
    }

    getList(){
        //返回string
        return this.list.map( item => {
            return item.name
        }).join('\n');
    }

}


//返回单例，因为Car是在里面只有唯一一个，不会在外面new很多实例
//我在这里有个cart类，但是我不在外面被用，只在里面用，那就不要export出去
let getCart = (function(){
    let cart 
    return function(){
        if(!cart){
            cart = new Cart()
        }
        return cart;
    }
})()


export default getCart