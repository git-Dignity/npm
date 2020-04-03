function bindEvent(elem, type, selector, fn){
    if(fn == null){
         fn = selector;
         fn = null;
    }
}


//调用
// bindEven(elem, 'click', '#div',fn)
// bindEven(elem, 'click', fn)

// 前端这种是外观模式，如果没用，就需要写了个方法，一个接受三个参数，一个接受四个； 
// 传参不一定要传方法规定的参数，三个，四个都可以 通过高层接口bindEven来接受，实现外观模式
//  缺点：不符合接口单一原则，不可滥用 


export default bindEvent;

