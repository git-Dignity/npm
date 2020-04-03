// 适配器模式（旧接口格式和使用者不兼容；中间加个适配器转换接口） 旧接口不能用了，把旧的功能放在新的身上
//其实就是把那个不能用的方法，在new一个实例，丢进去使用


class Adaptee{
    specificRequest(){
        return '德国插头'
    }
}

class Target{
    constructor(){
        this.adaptee = new Adaptee()
    }
    request(){
        let info = this.adaptee.specificRequest()
        return `${info.split("").reverse().join("")}`   //拿到以前的接口，因为不能用了，所以我根据以前的方法，转换使用
        // return `${info} ->转换器 -> 中国标准插头`
    }
}
  


export default Target