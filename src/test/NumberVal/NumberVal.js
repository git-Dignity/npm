/*
 * @Author: your name
 * @Date: 2021-08-26 18:34:34
 * @LastEditTime: 2021-08-26 18:46:12
 * @LastEditors: Please set LastEditors
 * @Description: 数值计算类的测试类
 * @FilePath: \npm\src\test\NumberVal\NumberVal.js
 */

import { NumberVal} from '../../NumberVal'

export default  (isLog) =>{
   
    if(!isLog) {
        return 
    }

    
   
    let numberVal = new NumberVal()
    numberVal.start()
  



    // console.log(numberVal.average(...[1, 2, 3]))    // 2
    // console.log(numberVal.average(1, 2, 3)) // 2

   


    numberVal.end()

}