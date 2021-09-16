/*
 * @Author: your name
 * @Date: 2021-09-07 15:44:28
 * @LastEditTime: 2021-09-15 15:16:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \npm\src\test\Browser\Browser.js
 */

import { Browser } from "../../Browser/Browser"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let browser = new Browser()
  browser.start()

  // console.log(browser.currentURL())

  // console.log(browser.getClientHeight()) // 852

  // console.log(browser.getPageViewWidth())  // 274

  // console.log(browser.getPageWidth())   // 274

  // console.log(browser.getViewportOffset())  // {w: 291, h: 852}

  // console.log(browser.getPageScrollTop())

  // console.log(browser.getPageScrollLeft())

  // console.log(browser.getScrollPosition())  // {x: 0, y: 775}

//   browser.smoothScroll() // 滚动到底部，默认是document.documentElement
//   browser.smoothScroll('#aaa')   // 滚动到id为aaa

//   browser.smoothScrollSpecify("#msg")

  // browser.httpsRedirect()

  // browser.openWindow("https://juejin.im/post/5e6cf42bf265da57397e3694","haha",700,1000)

  // browser.copyToClipboard('xxs')

  // console.log(browser.bottomVisible());   // false

  // console.log(browser.isBrowser());   // true

  // console.log(browser.isBrowserTabFocused()); // true

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  // console.log(browser.xxx());

  browser.end()
}
