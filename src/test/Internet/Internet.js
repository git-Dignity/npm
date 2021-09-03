/*
 * @Author: your name
 * @Date: 2021-09-03 10:55:55
 * @LastEditTime: 2021-09-03 10:57:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \npm\src\test\Internet\Internet.js
 */
import { Internet } from "../../Internet"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let internet = new Internet()
  internet.start()

  
  internet.end()
}
