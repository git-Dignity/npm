/*
 * @Author:zemin zheng
 * @Date: 2021-08-24 12:55:01
 * @LastEditTime: 2021-08-27 10:58:39
 * @LastEditors: Please set LastEditors
 * @Description: 文件测试
 * @FilePath: \npm\src\test\File\File.js
 */


import { File} from '../../File'

export default   (isLog) =>{
    if(!isLog) {
        return 
    }
    
    let file = new File()
    file.start()
    // console.log(file.getExt("dfbjbJKds .png"));   // png

    // let req={
    //     file:'xxx',
    //     userId:1,
    //     phone:'15198763636',
    // }

    // console.log(file.getFormData(req)); // FormData {}

   


    file.end()
}