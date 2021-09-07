/*
 * @Author: your name
 * @Date: 2021-09-07 15:44:28
 * @LastEditTime: 2021-09-07 16:29:22
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

    // browser.smoothScroll()

    // browser.httpsRedirect()

    // browser.openWindow("https://juejin.im/post/5e6cf42bf265da57397e3694","haha",700,1000)

    console.log(browser.bottomVisible());   // false

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

    // console.log(browser.xxx());

    // console.log(browser.xxx());

    // console.log(browser.xxx());

    // console.log(browser.xxx());

    browser.end()
}
