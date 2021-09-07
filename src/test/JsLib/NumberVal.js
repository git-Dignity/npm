/*
 * @Author: your name
 * @Date: 2021-08-26 18:34:34
 * @LastEditTime: 2021-09-07 15:38:34
 * @LastEditors: Please set LastEditors
 * @Description: 数值计算类的测试类
 * @FilePath: \npm\src\test\NumberVal\NumberVal.js
 */

import { NumberVal } from "../../JsLib"

export default (isLog) => {
    if (!isLog) {
        return
    }

    let numberVal = new NumberVal()
    numberVal.start()

    // console.log(numberVal.average(...[1, 2, 3]))    // 2
    // console.log(numberVal.average(1, 2, 3)) // 2

    // console.log(numberVal.averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n)) // 5
    // console.log(numberVal.averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));  // 5

    // console.log(numberVal.RandomNum(0,10))  // 3

    // console.log(numberVal.randomNumberInRange(0,10))  // 5.041143990814554

    // console.log(numberVal.randomNumInteger(10)) // 8
    // console.log(numberVal.randomNumInteger(10,20))    // 16

    // console.log(numberVal.add(0.1,0.2))  // 0.3

    // console.log(numberVal.sub(0.2, 0.1)) // 0.1

    // console.log(numberVal.division(0.2, 0.1)) // 2

    // console.log(numberVal.mcl(0.2, 0.1)) // 0.02

    // console.log(numberVal.round(5.4585, 2)) // 5.46

    // console.log(numberVal.sum(1, 2, 3, 4)) // 10
    // console.log(numberVal.sum(...[1, 2, 3, 4])) // 10

    console.log(numberVal.toCurrency(123456.789, 'EUR')) // €123,456.79
    console.log(numberVal.toCurrency(123456.789, 'USD', 'en-us')) // $123,456.79
    console.log(numberVal.toCurrency(123456.789, 'USD', 'fa')) // ‎$۱۲۳٬۴۵۶٫۷۹
    console.log(numberVal.toCurrency(322342436423.2435, 'JPY')) // JP¥322,342,436,423

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //

    // console.log(numberVal.xxx()) //



    numberVal.end()
}
