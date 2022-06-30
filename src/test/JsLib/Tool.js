/*
 * @Author: zemin zheng
 * @Date: 2021-08-24 13:16:31
 * @LastEditTime: 2022-04-12 17:36:43
 * @LastEditors: zemin zheng
 * @Description: 工具测试
 * @FilePath: \npm\src\test\JsLib\Tool.js
 */

import { Tool } from "../../JsLib"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let tool = new Tool()
  tool.start()

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

  // getURLParameters

  // console.log(tool.getURLParameters(tool.currentURL()))

  // console.log(tool.getURLParameters('http://url.com/page?n=哈哈&s=Smith')) // {n: 'Adam', s: 'Smith'}

  const getURLParameters1 = tool.getURLParameters1(
    "http://url.com/page?n=哈哈&s=Smith"
  )
  //  console.log(getURLParameters1) // {n: '哈哈', s: 'Smith'}

  const getURLParameters2 = tool.getURLParameters2("?n=哈哈&s=Smith")
  //  console.log(getURLParameters2) // {n: '哈哈', s: 'Smith'}

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

  // tool.getDom("#app")

  // console.log(tool.formatMoney(5465615654465))  // 5,465,615,654,465
  // console.log(tool.subText("fgfsd水电费水电费",5))   // fgfsd...
  // console.log(tool.formatFileSize(1254))  // 1.22KB
  // console.log(tool.inArray(2,[1,2,3,4]))   // 1
  // console.log(tool.OutOsName("10.0.18362 Windows 10专业版"))
  // console.log(tool.getOSType())

  // console.log(tool.listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9]))  // [[1], [2], [3], [4], [5], [6], [7], [8], [9]]
  // console.log(tool.listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  // console.log(tool.listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)) // []
  // console.log(tool.listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], -1)) // []

  // console.log(tool.getChildInParentIndex(document.getElementById("btn")))  // 1
  // console.log(tool.getOffset(document.getElementById("btn")))  // {top: 8, left: 8}
  // console.log(tool.dataType([]))  // array
  // console.log(tool.isMobile())    // false || true
  tool.setFade(document.getElementById("btn"))
  tool.stopCopyOrPaste(true, true)
  // console.log(tool.removeHTML(tool.removeHTML('<h1>哈哈哈哈<呵呵呵</h1>')))

  function printWidth() {
    console.info(window.document.body.clientWidth)
  }
  function printHeight() {
    console.info(window.document.body.clientHeight)
  }
  // window.addEventListener('resize', tool.debounce(printWidth, 900,true), false)
  // window.addEventListener('resize', tool.debounce(printHeight, 900,false), false)

  // window.addEventListener("mousemove",tool.throttle(printHeight,1000,2));

  // console.log(tool.type([""]))  //array

  // console.log(tool.arrScrambling([1,5,9]))
  // console.log(tool.similarity([1,2,3],[5,2]))  // 2
  // console.log(tool.countOccurrences([1,2,2,3],2)) // 2

  // 尾递归
  var sumTco = tool.tco(function (x, y) {
    if (y > 0) {
      return sumTco(x + 1, y - 1) //重点在这里, 每次递归返回真正函数其实还是accumulator函数
    } else {
      //   console.log(x)
      return x
    }
  })
  //   console.log(sumTco(1, 5));   //6    实际上现在sum函数就是accumulator函数   else那得到的

  // console.log(tool.hexColor())

  //         console.log(tool.escapeHTML(`
  //         <div id="app" class="a" style="height: 1500px;"></div>
  // <P class="a" id="aaa">1</P>
  //         `))
  //         &lt;div id=&quot;app&quot; class=&quot;a&quot; style=&quot;height: 1500px;&quot;&gt;&lt;/div&gt;
  //         &lt;P class=&quot;a&quot; id=&quot;aaa&quot;&gt;1&lt;/P&gt;

  // console.log(tool.outOfNum(100,99))  // 99+
  // console.log(tool.getOSType())
  // console.log(tool.uuid()); // kDLbXhxE
  // console.log(tool.uuid(4, "abcd"));    // bccc

  // console.log(tool.uuid(4, "abcd"));

  // console.log(tool.cutNumber(1.545454658648));   // 1.55
  // console.log(tool.cutNumber(1.545454658648, 4));   // 1.5455

  // console.log(tool.keepDecimal(1.335, 2));   // 1.34

  // const getPow =  () =>Math.pow(2, 10);
  // console.log(tool.timeTaken(getPow));  // timeTaken: 0.010009765625 ms   // 1024

  // const handler = (data) => console.log(data)
  // const hub = tool.createEventHub()
  // let increment = 0

  // // 订阅，监听不同事件
  // hub.on("message", handler)
  // hub.on("message", () => console.log("Message event fired"))
  // hub.on("increment", () => console.log(increment++))

  // // 发布：发出事件以调用所有订阅给它们的处理程序，并将数据作为参数传递给它们
  // hub.emit("message", "hello world") // 打印 'hello world' 和 'Message event fired'
  // hub.emit("message", { hello: "world" }) // 打印 对象 和 'Message event fired'
  // hub.emit("increment") // increment = 1

  // // 停止订阅
  // hub.off("message", handler) // 把handler函数给删除掉
  // hub.emit("message", { hello: "world" }) // Message event fired
  // 为什么只打印一个，那是因为上面已经停止订阅了handler，自然不会打印出{ hello: "world" }；
  // message有两个订阅者，所以Message event fired还在，打印。

  // const startApp = function(event) {
  //   console.log(this, event); // document.body, MouseEvent
  // };
  // document.body.addEventListener('click', tool.once(startApp)); // 只执行一次startApp

  // console.log(tool.forOwn({ foo: 'bar', a: 1 }, v => console.log(v)));  // bar 1

  // console.log(tool.is(Array, [1])); // true
  // console.log(tool.is(ArrayBuffer, new ArrayBuffer())); // true
  // console.log(tool.is(Map, new Map())); // true
  // console.log(tool.is(RegExp, /./g)); // true
  // console.log(tool.is(Set, new Set())); // true
  // console.log(tool.is(WeakMap, new WeakMap())); // true
  // console.log(tool.is(WeakSet, new WeakSet())); // true
  // console.log(tool.is(String, '')); // true
  // console.log(tool.is(String, new String(''))); // true
  // console.log(tool.is(Number, 1)); // true
  // console.log(tool.is(Number, new Number(1))); // true
  // console.log(tool.is(Boolean, true)); // true
  // console.log(tool.is(Boolean, new Boolean(true))); // true

  // console.log(tool.getType(new Set([1, 2, 3])));  // set
  // console.log(tool.getType([1, 2, 3])); // array
  // console.log(tool.getType(function (){})); // function

  // console.log(tool.escapeHTML('<a href="#">Me & you</a>')); // &lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;

  const add = (a, b, c) => a + b + c
  const a = tool.currying(add, 1)
  // console.log(a(2, 3)) // 6

  const add1 = tool.add(1)(2)(3)(4, 5)(1)()
  // console.log(add1) // 16
  const add2 = tool.add(1, 2)(3)()
  // console.log(add2) // 6

  const get1 = tool._get({ a: null }, "a.b.c", 3)
  // console.log(get1) //  3
  const get2 = tool._get({ a: [{ b: 1 }] }, "a[0].b", 3)
  // console.log(get2) //  1

  const getVal1 = tool.getVal({ a: null }, "a", "0", "b")
  // console.log(getVal1) //  null
  const getVal2 = tool.getVal({ a: [{ b: 1 }] }, "a", "0", "b")
  // console.log(getVal2) //  1

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  // console.log(tool.xxx());

  tool.end()
}
