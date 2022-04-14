// 工具类
import { Tool, ArrayTool, StrTool, NumberVal, ObjectTool } from "./JsLib"
import { Check } from "./Check"
import { Browser } from "./Browser/Browser"
import { DateOperation } from "./Date"
import { Storage } from "./Storage/Storage"
import { File } from "./File"
import { Animation } from "./Animation"
import { Dom } from "./Dom"
import { Internet } from "./Internet"

// 工具类测试

// 算法系列 
import initAlgorithm from "./test/Algorithm/Algorithm"
// 数组算法系列
import initArrayAlgorithm from "./test/Algorithm/ArrayAlgorithm"
// 面试题算法系列
import initInterview from "./test/Algorithm/Interview"
// 数组工具
import initArrayTool from "./test/JsLib/ArrayTool"
// 字符串工具
import initStrTool from "./test/JsLib/StrTool"
// 工具
import initTool from "./test/JsLib/Tool"
// 文件
import initFile from "./test/File/File"
// DOM
import initDom from "./test/Dom/Dom"
// 数值计算类
import initNumberVal from "./test/JsLib/NumberVal"
// 对象工具
import initObjectTool from "./test/JsLib/ObjectTool"
// 网络
import initInternet from "./test/Internet/Internet"
// 带并发的异步调度器 Scheduler类
import initScheduler from "./test/Internet/Scheduler"
// 定时器延时器 TimerDelay类
import initTimerDelay from "./test/Internet/TimerDelay"
// 检查
import initCheck from "./test/Check/Check"
// 日期库
import initDateOperation from "./test/Date/DateOperation"
// 浏览器操作相关browser工具
import initBrowser from "./test/Browser/Browser"
// 浏览器存储相关storage工具函数
import initStorage from "./test/Storage/Storage"
// LRU缓存函数
import initLRUCache from "./test/Storage/LRUCache"
// 基于 Localstorage 设计一个 1M 的缓存系统，需要实现缓存淘汰机制
import initLocalstorage1M from "./test/Storage/Localstorage1M"

// 手写系列测试

// 手写系列 -- JavaScript底层方法
import initJSHand from "./test/HandWrit/JSHand"
// 手写系列 -- 数组篇
import initArrayHand from "./test/HandWrit/ArrayHand"
// 手写系列 -- 对象篇
import initObjectHand from "./test/HandWrit/ObjectHand"
// 手写系列 -- 对象篇
import initStringHand from "./test/HandWrit/StringHand"
// 手写系列 -- Promise篇
import initPromiseHand from "./test/HandWrit/PromiseHand"


// 面试系列测试

// 面试 -- 数值类
import initInterviewNumber from './test/Interview/Number'
// 面试 -- 定时器延时器类
import initSetTimeoutSetInterval from './test/Interview/SetTimeoutSetInterval'
// 面试 -- 数组类
import initInterviewArray from './test/Interview/Array'
// 面试 -- 字符串类
import initInterviewString from './test/Interview/String'


// 算法
import { Algorithm } from "./Algorithm/index"

//设计模式
import { Creator, _ } from "./DesignModel/工厂模式"
import SingleObject from "./DesignModel/单例模式"
import Adapter from "./DesignModel/适配器模式"
import { Circle, Decorator } from "./DesignModel/装饰器模式"
import { ProxyImg, agent } from "./DesignModel/代理模式"
import bindEvent from "./DesignModel/外观模式"
import { Subject, Observers } from "./DesignModel/观察者模式"
import { Container, each } from "./DesignModel/迭代器模式"
import {
  State,
  Context,
  fsm,
  fsm_promise,
  MyPromise,
} from "./DesignModel/状态模式"
import updateText from "./DesignModel/js/状态管理update"
import Action from "./DesignModel/职责链模式"
import { Receiver, Command, Invoker } from "./DesignModel/命令模式"
import { CareTaker, Editor } from "./DesignModel/备忘录模式"

// 手写系列
import { objectFactory, HandleWritePromise } from "./HandWrit/index"
import { myAxios } from "./HandWrit/myAxios/myAxios"
import { JSHand } from "./HandWrit"


class App {
  constructor(id) {
    // this.$el = $('#'+id)
  }

  // 工厂模式
  initCreator() {
    let creator = new Creator()
    let product = creator.createProduct("zhangsan")
    product.getName()

    _("lisi").getName() //这种写法就和jq有点像了  $('div')
  }

  // 单例模式
  initSingleObject() {
    let aaa = SingleObject
    let bbb = SingleObject

    console.log(aaa)
    console.log(aaa == bbb) //true   因为两者都是一个实例，引用地址一样
  }

  // 适配器模式
  initAdapter() {
    let adapter = new Adapter()
    console.log(adapter.request())
  }

  //装饰器模式
  initDecorator() {
    let circle = new Circle()
    let decorator = new Decorator(circle)
    decorator.draw()
  }

  //代理模式
  initProxyImg() {
    let proxyImg = new ProxyImg("img.png")
    proxyImg.display()

    console.log("下面是演示es6的proxy拦截器----------------")

    //明星
    console.log(agent.name) //明星的
    console.log(agent.age) //明星的
    console.log(agent.phone) //经纪人，明星不可能给你电话
    console.log(agent.pirce) //经纪人给的

    agent.customPrice = 150000
    console.log(agent.customPrice)

    agent.customPrice = 9000
    console.log(agent.customPrice) // //报错，因为上面需要大于10w
  }

  //观察者模式
  initObservers() {
    let subject = new Subject()
    let observers = new Observers("o1", subject)
    let observers2 = new Observers("o2", subject)
    let observers3 = new Observers("o3", subject)
    subject.setState(1)
    //每次setState，都会触发所有观察者
  }

  //迭代器模式
  initContainer() {
    let arr = [1, 2, 3, 4]

    let constainer = new Container(arr)
    let iterator = constainer.getIterator()
    while (iterator.hasNex()) {
      console.log(iterator.next())
    }

    let m = new Map()
    m.set("a", 100)
    m.set("b", 200)
    each(m)
  }

  //状态模式
  initState() {
    let context = new Context()

    let green = new State("geren")
    let red = new State("red")
    let yellow = new State("yellow")

    //绿灯亮了
    green.handle(context)
    // console.log(context.getState()) //打印状态

    //红灯亮了
    red.handle(context)
    // console.log(context.getState()) //打印状态

    //初始化文案
    updateText("btn")

    $("#btn").click(function () {
      if (fsm.is("收藏")) {
        fsm.doStore()
      } else {
        fsm.deleteStore()
      }
    })

    //promise
    function loadImg(src) {
      //这里传一个函数，需要马上执行，所以这个函数写在constructor上
      const promise = new MyPromise(function (resolve, reject) {
        let img = document.createElement("img")
        img.onload = function () {
          resolve(img)
        }
        img.onerror = function () {
          reject()
        }
        img.src = src
      })

      return promise
    }

    let src =
      "https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=4003888963,1806138384&fm=85&s=9102FE5E6413E3CE9E3E1911030010DE"
    let result = loadImg(src) //返回一个promise对象

    //then的函数在resolve下才执行，第二个是在reject下执行的
    result.then(
      function () {
        // console.log("ok1")
      },
      function () {
        // console.log("fail1")
      }
    )

    result.then(
      function () {
        // console.log("ok2")
      },
      function () {
        // console.log("fail2")
      }
    )
  }

  //职责链模式
  initAction() {
    let a = new Action("组长")
    let b = new Action("敏哥")
    let c = new Action("博士")
    a.setNextAction(b)
    b.setNextAction(c)
    a.handle()
    // a里面有b，b有c
    // 通过nextAction将这些串起来
    // handle这样子写，是为了实现a1 a2 a3这样链操作
  }

  // 命令模式
  initInvoker() {
    let receiver = new Receiver()
    let command = new Command(receiver)
    let invoker = new Invoker(command)
    invoker.invoke()
    // 开始
    // 执行命令
    // 执行
  }

  //备忘录模式
  initEditor() {
    let editor = new Editor()
    let careTaker = new CareTaker()

    editor.setContent("111")
    editor.setContent("222")
    careTaker.add(editor.saveContentToMenento()) //将当前内容备份
    editor.setContent("333")
    careTaker.add(editor.saveContentToMenento())
    editor.setContent("444")

    console.log(editor.getContent())
    editor.getContentFromMemento(careTaker.get(1))
    console.log(editor.getContent())
    editor.getContentFromMemento(careTaker.get(0))
    console.log(editor.getContent())
  }

  // 外观模式
  initBindEvent() {
    // bindEven(elem, 'click', '#div',fn)
    // bindEven(elem, 'click', fn)
  }

  initDesignModel() {
    // this.initCreator();
    // this.initSingleObject()
    // this.initAdapter()
    // this.initDecorator()
    // this.initProxyImg()
    // this.initBindEvent()
    // this.initObservers()
    // this.initContainer()
    this.initState()
    // this.initAction()
    // this.initInvoker()
    // this.initEditor()
  }

  initHandleWrite() {
    // console.log("手写系列 start-_--_--_--_--_--_--_-")

    // new的例子
    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;
    //     this.sex = 'male';
    // }
    // Person.prototype.isHandsome = true;
    // Person.prototype.sayName = function () {
    //     console.log(`Hello , my name is ${this.name}`);
    // }

    // let handsomeBoy = objectFactory(Person, 'Nealyang', 25);
    // console.log(handsomeBoy.name) // Nealyang
    // console.log(handsomeBoy.isHandsome) // true
    // handsomeBoy.sayName(); // Hello , my name is Nealyang

    // call，apply例子
    var value = 2

    var obj11 = {
      value: 1,
    }

    function bar(name, age) {
      console.log(name)
      return {
        value: this.value,
        name: name,
        age: age,
      }
    }

    // bar.call(null); // 2

    // console.log(bar.myCall(obj11, 'kevin', 18));  // {value: 1, name: {…}, age: "kevin"}
    // console.log(bar.myApply(obj11, ['kevin', 18]));  // {value: 1, name: {…}, age: "kevin"}

    // var obj45 = { name : 'Tom' };
    // function fun(){
    //     console.log(this.name);
    // }
    // fun.myBind(obj45)();

    //promise的例子
    // let p = new HandleWritePromise((resolve, reject)=>{
    //     console.log('hello');
    //     resolve(5);
    // });
    // p.then((res)=>{
    //     console.log(res);
    // })
    // p.then(()=>{
    //     console.log('jj');
    // })

    // console.log("手写系列 end-_--_--_--_--_-")

    /**
     * 手写ajax测试
     * axios(config)这种形式调用axios
     * axios.get()这种形式调用axios
     * 添加拦截器
     */
    // axios(config)这种形式调用axios
    // myAxios({
    //     method: 'get',
    //     url: 'https://zhengzemin.cn/dist/static/fonts/element-icons.535877f.woff'
    // }).then(res =>{
    //     console.log('getAxios 成功响应',res)
    // }).catch(err =>{
    //     console.log(err)
    // })

    //  添加请求拦截器
    // myAxios.interceptors.request.use(function (config) {
    //     // 在发送请求之前做些什么
    //     config.method = "get";
    //     console.log("被我请求拦截器拦截了，哈哈:",config);
    //     return config;
    // }, function (error) {
    //     // 对请求错误做些什么
    //     return Promise.reject(error);
    // });

    // // 添加响应拦截器
    // myAxios.interceptors.response.use(function (response) {
    //     // 对响应数据做点什么
    //     console.log("被我响应拦截拦截了，哈哈 ");
    //     response = {message:"响应数据被我替换了，啊哈哈哈"}
    //     return response;
    // }, function (error) {
    //     // 对响应错误做点什么
    //     console.log("错了吗");
    //     return Promise.reject(error);
    // });

    // // axios.get()这种形式调用axios
    // myAxios.get('https://zhengzemin.cn/dist/static/fonts/element-icons.535877f.woff').then(res =>{
    //     console.log(res)
    // })
  }

  init() {
    // this.initShoppingCart();
    // this.initList();
    // this.initProgressBar()
    // this.initPopover()
    initJSHand(false) // 还没有写完
    initArrayHand(false)
    initObjectHand(true)
    initStringHand(false)
    initPromiseHand(false, true)

    initStorage(false)
    initLRUCache(false)
    initLocalstorage1M(false)
    initObjectTool(false)
    initFile(false)
    initDom(false)
    initTool(false)
    initArrayTool(false)
    initStrTool(false)
    initCheck(false)
    initBrowser(false)
    initDateOperation(false)
    this.initDesignModel()

    initAlgorithm(false)
    initArrayAlgorithm(false)
    initInterview(false)
    this.initHandleWrite()

    initNumberVal(false)
    initInternet(false)
    initScheduler(false)
    initTimerDelay(false)
    initInterviewNumber(false)
    initSetTimeoutSetInterval(false)
    initInterviewArray(false)
    initInterviewString(false)
  }
}

export {
  App,
  Tool,
  ArrayTool,
  StrTool,
  Check,
  Browser,
  DateOperation,
  Storage,
  File,
  Animation,
  Dom,
  NumberVal,
  ObjectTool,
  Internet,
}
