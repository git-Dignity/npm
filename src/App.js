// import $ from 'jquery'
// import 'bootstrap/dist/js/bootstrap.min.js'

// 工具类
import {Tool, ArrayTool} from './JsLib'
import {Check} from './Check/Check'
import {Browser} from './Browser/Browser'
import {DateOperation} from './Date/Date'
import {Storage} from './Storage/Storage'
import {File} from './File'
import {Animation} from './Animation'
import { Dom } from './Dom'
import {NumberVal} from './NumberVal'

// 工具类测试
import initArrayTool from './test/JsLib/ArrayTool'
import initTool from './test/JsLib/Tool'
import initFile from './test/File/File'
import initDom from './test/Dom/Dom'
import initNumberVal from './test/NumberVal/NumberVal'

// 算法
import {Algorithm} from './Algorithm/index'

 
//设计模式
import {Creator, _ } from './DesignModel/工厂模式'
import SingleObject from './DesignModel/单例模式'
import Adapter from './DesignModel/适配器模式'
import {Circle, Decorator} from './DesignModel/装饰器模式'
import { ProxyImg, agent} from './DesignModel/代理模式'
import bindEvent from './DesignModel/外观模式'
import {Subject, Observers} from './DesignModel/观察者模式'
import { Container, each} from './DesignModel/迭代器模式'
import { State, Context, fsm, fsm_promise, MyPromise} from './DesignModel/状态模式'
import updateText from './DesignModel/js/状态管理update'
import Action from './DesignModel/职责链模式'
import {Receiver, Command, Invoker} from './DesignModel/命令模式'
import { CareTaker, Editor } from './DesignModel/备忘录模式'


// 手写系列
import { objectFactory, HandleWritePromise } from './HandWrit/index'
import { myAxios } from './HandWrit/myAxios/myAxios'


 class App{
    constructor(id){
        // this.$el = $('#'+id)
    }

 
    initCheck(){
        let check = new Check()
        // console.log(check.isNoWord("3436"))   // true
        // console.log(check.isCHNAndEN("啊实打实213"))
        // console.log(check.isPostcode("515071"))
        // console.log(check.isWeChatNum("dignity_"))
        // console.log(check.isColor16("#FFB6C1"))
        // console.log(check.isTrainNum("K9998"))
        // console.log(check.isIMEI("1591554223239155"))
        // console.log(check.isHttpAndPort("http://192.168.2.153:8080"))
        // console.log(check.isRightWebsite("http://192.168.2.153:8080?id=5"))
        // console.log(check.isCreditCode("18位"))
        // console.log(check.isVideoUrl("https://www.bilibili.com/video/av71664605.mp4"))
        // console.log(check.isImageUrl("https://www.baidu.com/link?url=nUGobV0R0h0G5VP2EcUICTjtamcmbXCHsgbGjDxA6uuchnbFWJSqBO6aiLCunyGOmiipLO8M8_Unq5CGSIBiE4vwTRgNoN3yWgX0HqjVeD57LQlWoxXU1TmjEntXG7pBSvecH4rEDTNIwekPA-0rlw2EAYankanAZlQlQ7Lpm51YRGlPLN1cm96Mc8GKjwxEZMi4593sds1X9YWxpDlul5WdAzzsMao-1T2MU-_yJnUhZ6xPhqZgZjFHJKzWt3BjpZD3uN1XyM9QhbhybDkSPaMxbSzztJ6ch2rc0K9DeGyR6hpU7LWc8MJ0zYsPN5hBiqSTvErObyrQvRjlx3AzfUPjKJlpTA-iCsaOoKDwURzre6izaaab2808Xow_rhM4kXFouBQmeIQ86frWq94f4AiEh5H8zH5ELZXVXBFGxzuE8yrTF4kjI0adsodvS3rjOIn6xW-gOUXfVJcsR7j5aV8wQB-MDxPtY7082l-MIt_P9fi5ny60ebxle6jQnBNlgnizB02KkTk62FUWKJEX-MqxqHYR-YkAr_5iQcXuErqcF8GRMieVUEFEvAPXAJbuDKQa2U5DHYaG5yRJQeHOC9zR_Iv7IoeQ91-Gn77jBca&timg=https%3A%2F%2Fss0.bdstatic.com%2F94oJfD_bAAcT8t7mm9GUKT-xh_%2Ftimg%3Fimage%26quality%3D100%26size%3Db4000_4000%26sec%3D1585273872%26di%3Dad247e8a53115e1aceb73342211debe9%26src%3Dhttp%3A%2F%2Fa3.att.hudong.com%2F68%2F61%2F300000839764127060614318218_950.jpg&click_t=1585273873115&s_info=935_889&wd=&eqid=99fd164e0002ce75000000065e7d5c10.png"))
        // console.log(check.isAccountNumber("6222600260001072444"))
        // console.log(check.isChineseName("战三"))
        // console.log(check.isEnglishName("zhansan"))
        // console.log(check.isLicensePlateNumberNER("京AF01234"))
        // console.log(check.isLicensePlateNumberNNER("川A123AB"))  
        // console.log(check.isLicensePlateNumber("川A123AB"))
        // console.log(check.isMPStrict("15915549155"))
        // console.log(check.isMPRelaxed("15915549155"))
        // console.log(check.isEmail("1638153584@qq.com"))
        // console.log(check.isLandlineTelephone("0754-87398773"))
        // console.log(check.isIDCard ("445281199114567539"))
        // console.log(check.isPassport("验证护照（包含香港、澳门）"))
        // console.log(check.isWebAccount("a123456"))
        // console.log(check.isChineseCharacter("哈哈"))
        // console.log(check.isDecimal("45.55"))
        // console.log(check.isNumber("44455"))
        // console.log(check.isQQNum("16544848"))
        // console.log(check.isNumAndStr("115dsa234"))
        // console.log(check.isEnglish("sadasEFRS"))
        // console.log(check.isCapital("DG"))
        // console.log(check.isLowercase("sdf"))

    }

    initBrowser(){
        let browser = new Browser()
        // console.log(browser.currentURL())
        // console.log(browser.getClientHeight()) // 852
        // console.log(browser.getPageViewWidth())  // 274
        // console.log(browser.getPageWidth())   // 274
        // console.log(browser.getViewportOffset())  // {w: 291, h: 852}
        // console.log(browser.getPageScrollTop())
        // console.log(browser.getPageScrollLeft())
        // console.log(browser.getScrollPosition())  // {x: 0, y: 775}
        // browser.smoothScroll()
        // browser.httpsRedirect()
        // console.log(browser.openWindow("https://juejin.im/post/5e6cf42bf265da57397e3694","haha",700,1000))
    }

    initDate(){
        let date = new DateOperation()
        // console.log(date.get_current_timestamp())
        // console.log(date.get_appoint_timestamp("2019/10/24 08:00:00"))
        // console.log(date.get_appoint_timestamp("2019-10-24 08:00:00"))
        // console.log(date.nowInDateBetwen("2019-01-01","2019-02-02","2019-01-02"))
        console.log(date.dataPattern("12-25-1995"))   // // Mon Dec 25 1995 00:00:00 GMT+0800 (中国标准时间)


    }

    intiStorage(){
        let storage = new Storage();
        var asas = {
            fn:function asas(){},
            zhengze:new RegExp("ab+c", "i"),
            yinwen:{
                sd:"dsfasdd"
            }
        }

        // storage.localStorageSet("id",asas)  // 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
        // console.log(storage.localStorageGet("id"))
        // storage.localStorageRemove("id")
        // console.log(storage.localStorageGet("id"))

        //验证存贮某一段时间失效
        // storage.localStorageSetExpire("id",asas,1000)
        // console.log(storage.localStorageGet("id"))
        // setTimeout(function(){
        //     console.log(storage.localStorageGet("id"))
        // },2000)

        // storage.cookieSet ("id","admin",10000)
        // console.log(storage.cookieGet("id"))
        // storage.cookieRemove("id")
        // console.log(storage.cookieGet("id"))

    }

    // 工厂模式
    initCreator(){
        let creator = new Creator()
        let product =  creator.createProduct("zhangsan")
        product.getName()


        _("lisi").getName() //这种写法就和jq有点像了  $('div')
    }

    // 单例模式
    initSingleObject(){
        let aaa = SingleObject;
        let bbb = SingleObject;

        console.log(aaa)
        console.log(aaa == bbb) //true   因为两者都是一个实例，引用地址一样
    }

    // 适配器模式
    initAdapter(){
        let adapter = new Adapter()
        console.log(adapter.request())
    }

    //装饰器模式
    initDecorator(){
        let circle = new Circle()
        let decorator = new Decorator(circle)
        decorator.draw();
    }

    //代理模式
    initProxyImg(){
        let proxyImg = new ProxyImg("img.png");
        proxyImg.display();

        console.log('下面是演示es6的proxy拦截器----------------')

        //明星
        console.log(agent.name) //明星的
        console.log(agent.age)//明星的
        console.log(agent.phone)    //经纪人，明星不可能给你电话
        console.log(agent.pirce)  //经纪人给的

        agent.customPrice = 150000
        console.log(agent.customPrice)

        agent.customPrice = 9000
        console.log(agent.customPrice) // //报错，因为上面需要大于10w
    }

    //观察者模式
    initObservers(){
        let subject = new Subject();
        let observers = new Observers('o1',subject);
        let observers2 = new Observers('o2',subject);
        let observers3 = new Observers('o3',subject);
        subject.setState(1)
        //每次setState，都会触发所有观察者
    }

    //迭代器模式
    initContainer(){
        let arr = [1,2,3,4]
       
        let constainer = new Container(arr)
        let iterator = constainer.getIterator()
        while(iterator.hasNex()){
            console.log(iterator.next())
        }

        let m = new Map()
        m.set('a',100)
        m.set('b',200)
        each(m)
    }

     

    //状态模式
    initState(){
        
        let context = new Context();

        let green = new State("geren")
        let red = new State("red")
        let yellow = new State("yellow")

        //绿灯亮了
        green.handle(context)
        console.log(context.getState()) //打印状态

        //红灯亮了
        red.handle(context)
        console.log(context.getState()) //打印状态


       //初始化文案
       updateText('btn')
      
        $('#btn').click(function(){
            if(fsm.is('收藏')){
                fsm.doStore()
            }else{
                fsm.deleteStore()
            }
        })



        //promise
        function loadImg(src){
            //这里传一个函数，需要马上执行，所以这个函数写在constructor上
            const promise = new MyPromise(function(resolve,reject){
                let img  = document.createElement('img')
                img.onload = function(){
                    resolve(img)
                }
                img.onerror = function(){
                    reject()
                }
                img.src = src;
            })
        
            return promise
        }
        
        
        let src = "https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=4003888963,1806138384&fm=85&s=9102FE5E6413E3CE9E3E1911030010DE"
        let result = loadImg(src)   //返回一个promise对象
        
        //then的函数在resolve下才执行，第二个是在reject下执行的
        result.then(function(){
            console.log('ok1')
        },function(){
            console.log('fail1')
        })
        
        result.then(function(){
            console.log('ok2')
        },function(){
            console.log('fail2')
        })

        
    }

    //职责链模式
    initAction(){
        let a  = new Action("组长")
        let b  = new Action("敏哥")
        let c  = new Action("博士")
        a.setNextAction(b)
        b.setNextAction(c)
        a.handle()
        // a里面有b，b有c
        // 通过nextAction将这些串起来
        // handle这样子写，是为了实现a1 a2 a3这样链操作
    }

    // 命令模式
    initInvoker(){
        let receiver = new Receiver()
        let command = new Command(receiver)
        let invoker = new Invoker(command)
        invoker.invoke()
        // 开始
        // 执行命令
        // 执行
    }

    //备忘录模式
    initEditor(){
        let editor = new Editor()
        let careTaker = new CareTaker();

        editor.setContent("111")
        editor.setContent("222")
        careTaker.add(editor.saveContentToMenento())    //将当前内容备份
        editor.setContent('333')
        careTaker.add(editor.saveContentToMenento())  
        editor.setContent('444')

        console.log(editor.getContent())
        editor.getContentFromMemento(careTaker.get(1))
        console.log(editor.getContent())
        editor.getContentFromMemento(careTaker.get(0))
        console.log(editor.getContent())
    }

   

    // 外观模式
    initBindEvent(){
        // bindEven(elem, 'click', '#div',fn)
        // bindEven(elem, 'click', fn)
    }

    initDesignModel(){
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


    initAlgorithm(){
        let algorithm = new Algorithm()
        // console.log(algorithm.combinationNewStr(['a', 's', 'd', '1', '2', '3', '5', '6', 'h2', '9', '12', '13', '14', '15', 'f', 'g']));
        // a;s;d;1-3;5-6;h2;9;12-15;f;g

        
    }


    initHandleWrite() {
        console.log("手写系列 start-_--_--_--_--_--_--_-")

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
        var value = 2;

        var obj11 = {
            value: 1
        }

        function bar(name, age) {
           
            console.log(name);
            return {
                value: this.value,
                name: name,
                age: age
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

    

    init(){
        // this.initShoppingCart();
        // this.initList();
        // this.initProgressBar()
        // this.initPopover()
        initTool(false);
        initArrayTool(true)
        this.initCheck();
        this.initBrowser()
        this.initDate()
        this.intiStorage()
        this.initDesignModel()

        this.initAlgorithm()
        this.initHandleWrite()
        initFile(false)
        initDom(false)
        initNumberVal(false)

    }
}


export  {
    App,
    Tool, 
    ArrayTool,
    Check, 
    Browser, 
    DateOperation, 
    Storage,
    File,
    Animation,
    Dom,
    NumberVal
}
