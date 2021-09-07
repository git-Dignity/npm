/*
 * @Author: zemin zheng
 * @Date: 2021-09-07 11:12:30
 * @LastEditTime: 2021-09-07 14:32:23
 * @LastEditors: Please set LastEditors
 * @Description: 日期库测试
 * @FilePath: \npm\src\test\Date\DateOperation.js
 */
import { DateOperation} from '../../Date'

export default   (isLog) =>{
    if(!isLog) {
        return 
    }
    
    let date = new DateOperation()
    date.start()

    // console.log(date.get_current_timestamp())   // 1630984496000

    // console.log(date.get_appoint_timestamp("2019/10/24 08:00:00"))  // 1571875200000

    // console.log(date.get_appoint_timestamp("2019-10-24 08:00:00"))  // 1571875200000

    // console.log(date.nowInDateBetwen("2019-01-01","2019-02-02","2019-01-02"))   // true

    // console.log(date.dataPattern("12-25-1995"))   // Mon Dec 25 1995 00:00:00 GMT+0800 (中国标准时间)

    // console.log(date.dayOfYear(new Date()));    // 250  当前new Date是20210907

    // console.log(date.getColonTimeFromDate(new Date()));    // 11:37:45

    // console.log(date.getDaysDiffBetweenDates(new Date('2019-01-01'), new Date('2019-10-14')));    // 286

    // console.log(date.isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)));    // false
    // console.log(date.isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20), 'a'));    // true

    console.log(date.tomorrow());    // 2021-09-08

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx

    // console.log(date.xxx());    // xxx


   


    date.end()
}