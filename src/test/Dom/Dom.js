/*
 * @Author: zemin zheng
 * @Date: 2021-08-26 18:01:22
 * @LastEditTime: 2021-08-26 18:17:41
 * @LastEditors: Please set LastEditors
 * @Description: DOM类的测试类
 * @FilePath: \npm\src\test\Dom\Dom.js
 */


import { Dom} from '../../Dom'

export default   (isLog) =>{
    if(!isLog) {
        return 
    }
   
    let dom = new Dom()
    dom.start()
  

    // console.log(dom.arrayToHtmlList(['item 1', 'item 2'], 'li', 'app')); 
    // console.log(dom.arrayToHtmlList(['item 1', 'item 2'], 'p', 'app')); 



    // console.log(dom.xxxxxx(); 

   


    dom.end()

}