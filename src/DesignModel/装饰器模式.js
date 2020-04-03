// 装饰器模式（为对象添加新功能，不改变其原有的结构功能）
// 注：和适配器模式不一样，适配器是旧的接口不能用，装饰器模式是旧的接口还可以用，在之上添加功能
// es7 装饰器 core-decorators 库

class Circle{
    constructor(color){
        this.color = color; 
    }

    draw(){
        console.log('画个圆圈')
    }

}

class Decorator{
    constructor(circle){
        this.circle = circle
    }

    draw(){
        this.circle.draw()
        this.setRadius(this.circle)
    }

    setRadius(circle){
        console.log('设置半圆')
    }
}



export {Circle, Decorator} 
