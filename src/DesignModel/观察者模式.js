// 观察者模式（发布&订阅；一对多n） 这个模式很重要、常用

// 主题，保存状态，状态变化之后触发所有观察者对象
class Subject{
    constructor(){
        this.state = 0;
        this.observers = [] //所有观察者
    }
    getState(){
        return this.state;
    }
    setState(state){    //可以修改
        this.state = state;
        this.notifyAllObservers()   //更新观察者
    }
    notifyAllObservers(){   // //更新观察者
        this.observers.forEach(observers =>{
            observers.update()
        })
    }
    attach(observer){  //添加观察者
        this.observers.push(observer)
    }
}

class Observers{
    constructor(name,subject){
        this.name = name;
        this.subject = subject;
        this.subject.attach(this)   //添加观察者进主题
    }
    update(){
        console.log(`${this.name} update , ${this.subject.getState()}` )
    }
}



export {Subject, Observers}