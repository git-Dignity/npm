/*
 * @Author: zemin zheng
 * @Date: 2021-08-24 13:16:31
 * @LastEditTime: 2021-08-27 10:59:30
 * @LastEditors: Please set LastEditors
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
  // console.log(tool.RandomNum(0,10))
  // console.log(tool.arrScrambling([1,5,9]))
  // console.log(tool.similarity([1,2,3],[5,2]))  // 2
  // console.log(tool.countOccurrences([1,2,2,3],2)) // 2
  // console.log(tool.add(0.1,0.2))  // 0.3
  // console.log(tool.sub(0.2,0.1))  // 0.1
  // console.log(tool.division(0.2,0.1))  // 2
  // console.log(tool.mcl(0.2,0.1))   // 0.02
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

  // console.log(tool.randomNumInteger(10))
  // console.log(tool.randomNumInteger(10,20))
  // console.log(tool.trim(" dg   g145415  44 ",1)) // dgg14541544
  // console.log(tool.turnCase("asFG",1))  // ASFG
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

  tool.end()
}
