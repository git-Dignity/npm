// import $ from 'jquery'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import ShoppingCart from './ShoppingCart/ShoppingCart'
// import List from './List/List'
// import ProgressBar from './ProgressBar/ProgressBar'
// import Popover from './Popover/Popover'
import {Tool} from './JsLib/Tool'
import {Check} from './Check/Check'
import {Browser} from './Browser/Browser'
import {DateOperation} from './Date/Date'
import {Storage} from './Storage/Storage'


 class App{
    constructor(id){
        // this.$el = $('#'+id)
    }

    // initShoppingCart(){
    //     let shoppingCart = new ShoppingCart(this)
    //     shoppingCart.init()

    // }

    // initList(){
    //     let list = new List(this)
    //     list.init()
    // }

    // initProgressBar(){
    //     let progressBar = new ProgressBar();
    //     progressBar.init()
    // }

    // initPopover(){
    //     let popover = new Popover();
    //     popover.init();
    // }

    initTool(){
        let tool = new Tool()
        // tool.hide(document.querySelectorAll('p'));
        // console.log(tool.hasClass(document.getElementById('aaa'), 'a')) // true
        // tool.toggleClass(document.querySelector('p#b'), 'a')
        // console.log(tool.getScrollPosition());   // // {x: 0, y: 200}
        // console.log(tool.elementContains(document.querySelector('head'), document.querySelector('title'))) // true
        // console.log(tool.elementContains(document.querySelector('head'), document.querySelector('body'))) // false
        // console.log(tool.elementIsVisibleInViewport(document.getElementById('aaa')));   // 需要左右可见 true
        // console.log(tool.elementIsVisibleInViewport(document.getElementById('aaa'),true));  // 需要全屏(上下左右)可以见
        // console.log(tool.getImages(document,true)) // 不去重  ['image1.jpg', 'image2.png', 'image1.png', '...']
        // console.log(tool.getImages(document,false))  //去重    ['image1.jpg', 'image2.png', '...']
        // console.log(tool.detectDeviceType()) // "Mobile" or "Desktop"
        // console.log(tool.currentURL())   // http://localhost:9000/
        // console.log(tool.getURLParameters(tool.currentURL()))
        // console.log(tool.getURLParameters('http://url.com/page?n=哈哈&s=Smith')) // {n: 'Adam', s: 'Smith'}
        // const fn = () => console.log('!');
        // document.body.addEventListener('click', fn);
        // tool.off(document.body, 'click', fn);   // 如何从元素中移除事件监听器?
        // console.log(tool.formatDuration(1001))  // 1 second, 1 millisecond
        // console.log(tool.formatDuration(34325055574))  // 397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds
        // console.log(tool.getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')))   // 9
        // tool.httpGet(
        //     'https://jsonplaceholder.typicode.com/posts/1',
        //     console.log
        // ); 
          // {"userId": 1, "id": 1, "title": "sample title", "body": "my text"}

          //post请求
        //   const newPost = {
        //     userId: 1,
        //     id: 1337,
        //     title: 'Foo',
        //     body: 'bar bar bar'
        //   };
        //   const data = JSON.stringify(newPost);
        //   tool.httpPost(
        //     'https://jsonplaceholder.typicode.com/posts',
        //     data,
        //     console.log
        //   ); 
        //   打印出来
        //   {
        //     "userId": 1,
        //     "id": 101,
        //     "title": "Foo",
        //     "body": "bar bar bar"
        //   }

        // tool.copyToClipboard('哈哈，我被你的tool.copyToClipboard复制出来了')
     
     
     
        // tool.getDom("#app")

        // console.log(tool.formatMoney(5465615654465))  // 5,465,615,654,465
        // console.log(tool.subText("fgfsd水电费水电费",5))   // fgfsd...
        // console.log(tool.formatFileSize(1254))  // 1.22KB
        console.log(tool.inArray("1",[1,2,3,4]))
        // console.log(tool.formatMoney())
        // console.log(tool.formatMoney())
        // console.log(tool.formatMoney())
        // console.log(tool.formatMoney())
        // console.log(tool.formatMoney())
        // console.log(tool.formatMoney())
        // console.log(tool.formatMoney())


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



        // console.log(date.get_current_timestamp())
        // console.log(date.get_current_timestamp())
        // console.log(date.get_current_timestamp())
        // console.log(date.get_current_timestamp())
        // console.log(date.get_current_timestamp())
        // console.log(date.get_current_timestamp())
        // console.log(date.get_current_timestamp())
        // console.log(date.get_current_timestamp())
        // console.log(date.get_current_timestamp())
        // console.log(date.get_current_timestamp())



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

    init(){
        // this.initShoppingCart();
        // this.initList();
        // this.initProgressBar()
        // this.initPopover()
        this.initTool();
        this.initCheck();
        this.initBrowser()
        this.initDate()
        this.intiStorage()
        

    }
}


export  {App,Tool}