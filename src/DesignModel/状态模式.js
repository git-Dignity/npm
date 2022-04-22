// 状态模式（一个对象有状态变化；每次状态变化都会触发一个逻辑；不能总是用if.else来控制）

// 状态（红灯、绿灯）
class State{
    constructor(color){
        this.color = color;
    }
    handle(context){
        // console.log(`${this.color}`)
        context.setState(this)
    }
}

//主体
class Context{
    constructor(){
        this.state = null;
    }
    //状态获取
    getState(){
        return this.state
    }
    setState(state){
        this.state = state;
    }
}

//把主体和状态分离开
// 主体可以get set状态，状态变化的逻辑让状态去写









//有限状态机
import StateMachine  from 'javascript-state-machine'
// import $ from 'jquery'
import updateText from './js/状态管理update'

//像取消关注’取消点赞这些都可以用这个


//初始化状态机模型
let fsm = new StateMachine({
    init:'收藏',
    transitions:[   //不要写欠个s
        {
            name:'doStore', //name的方法和methods的onDoStore名字一样，on加name，不过是驼峰命名
            from:'收藏',
            to:'取消收藏'
        },
        {
            name:'deleteStore',
            from:'取消收藏',
            to:'收藏'
        }
    ],
    methods:{
        //监听执行收藏
        onDoStore:function (){  //方法名字和transition的name一样，on加name，不过是驼峰命名
            // alert('收藏成功');  //可以post请求，数据库更新
            updateText('btn')
        },
        onDeleteStore:function (){
            // alert('取消收藏成功'); //可以post请求，数据库更新
            updateText('btn')
        }
    }
})









//利用StateMachine封装promise
let fsm_promise = new StateMachine({
    init:"pending",
    transitions:[
        {
            name:'resolve',
            form:"pending",
            to : "fullfilled"
        },
        {
            name:'reject',
            form:"pending",
            to : "rejected"
        }
    ],
    methods:{
        onResolve:(state,data) =>{
            data.SuccessList.forEach(fn => fn())
        },
        onReject: (state,data) => {
            data.failList.forEach(fn => fn())
        }
    }
})


class MyPromise{
    constructor(fn){
        this.SuccessList = [];
        this.failList = [];
        fn(
            () =>{
                fsm_promise.resolve(this)
            },
            () => {
                fsm_promise.reject(this)
            }
        )
    }

    then(sucessFn,failFn){
        this.SuccessList.push(sucessFn)
        this.failList.push(failFn)
    }
}






export { State, Context, fsm, fsm_promise, MyPromise }