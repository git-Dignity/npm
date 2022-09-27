/*
 * @Author: zemin zheng
 * @Date: 2021-09-06 15:03:32
 * @LastEditTime: 2022-09-27 16:20:00
 * @LastEditors: zemin zheng
 * @Description: 检查类测试
 * @FilePath: \npm\src\test\Check\Check.js
 */

import { Check } from "../../Check"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let check = new Check()
  check.start()

  //   console.log(check.isNoWord("3436"))   // true 

  //   console.log(check.isCHNAndEN("啊实打实213"))

  //   console.log(check.isPostcode("515071"))

  //   console.log(check.isWeChatNum("dignity_"))

  //   console.log(check.isColor16("#FFB6C1"))

  //   console.log(check.isTrainNum("K9998"))

  //   console.log(check.isIMEI("1591554223239155"))

  //   console.log(check.isHttpAndPort("http://192.168.2.153:8080"))

  //   console.log(check.isRightWebsite("http://192.168.2.153:8080?id=5"))

  //   console.log(check.isCreditCode("18位"))

  //   console.log(check.isVideoUrl("https://www.bilibili.com/video/av71664605.mp4"))

  //   console.log(check.isImageUrl("https://www.baidu.com/link?url=nUGobV0R0h0G5VP2EcUICTjtamcmbXCHsgbGjDxA6uuchnbFWJSqBO6aiLCunyGOmiipLO8M8_Unq5CGSIBiE4vwTRgNoN3yWgX0HqjVeD57LQlWoxXU1TmjEntXG7pBSvecH4rEDTNIwekPA-0rlw2EAYankanAZlQlQ7Lpm51YRGlPLN1cm96Mc8GKjwxEZMi4593sds1X9YWxpDlul5WdAzzsMao-1T2MU-_yJnUhZ6xPhqZgZjFHJKzWt3BjpZD3uN1XyM9QhbhybDkSPaMxbSzztJ6ch2rc0K9DeGyR6hpU7LWc8MJ0zYsPN5hBiqSTvErObyrQvRjlx3AzfUPjKJlpTA-iCsaOoKDwURzre6izaaab2808Xow_rhM4kXFouBQmeIQ86frWq94f4AiEh5H8zH5ELZXVXBFGxzuE8yrTF4kjI0adsodvS3rjOIn6xW-gOUXfVJcsR7j5aV8wQB-MDxPtY7082l-MIt_P9fi5ny60ebxle6jQnBNlgnizB02KkTk62FUWKJEX-MqxqHYR-YkAr_5iQcXuErqcF8GRMieVUEFEvAPXAJbuDKQa2U5DHYaG5yRJQeHOC9zR_Iv7IoeQ91-Gn77jBca&timg=https%3A%2F%2Fss0.bdstatic.com%2F94oJfD_bAAcT8t7mm9GUKT-xh_%2Ftimg%3Fimage%26quality%3D100%26size%3Db4000_4000%26sec%3D1585273872%26di%3Dad247e8a53115e1aceb73342211debe9%26src%3Dhttp%3A%2F%2Fa3.att.hudong.com%2F68%2F61%2F300000839764127060614318218_950.jpg&click_t=1585273873115&s_info=935_889&wd=&eqid=99fd164e0002ce75000000065e7d5c10.png"))

  //   console.log(check.isAccountNumber("6222600260001072444"))

  //   console.log(check.isChineseName("战三"))

  //   console.log(check.isEnglishName("zhansan"))

  //   console.log(check.isLicensePlateNumberNER("京AF01234"))

  //   console.log(check.isLicensePlateNumberNNER("川A123AB"))

  //   console.log(check.isLicensePlateNumber("川A123AB"))

  //   console.log(check.isMPStrict("15915549155"))

  //   console.log(check.isMPRelaxed("15915549155"))

  //   console.log(check.isEmail("1638153584@qq.com"))
  //   console.log(check.isLandlineTelephone("0754-87398773"))

  //   console.log(check.isIDCard ("445281199114567539"))

  //   console.log(check.isPassport("验证护照（包含香港、澳门）"))

  //   console.log(check.isWebAccount("a123456"))

  //   console.log(check.isChineseCharacter("哈哈"))

  //   console.log(check.isDecimal("45.55"))

  //   console.log(check.isNumber("44455"))

  //   console.log(check.isQQNum("16544848"))

  //   console.log(check.isNumAndStr("115dsa234"))

  //   console.log(check.isEnglish("sadasEFRS"))

  //   console.log(check.isCapital("DG"))

  //   console.log(check.isLowercase("sdf"))

  // console.log(check.passCaseNumSpecialChar("123@")) // false
  // console.log(check.passCaseNumSpecialChar("sd44f1A@")) // true

  // console.log(check.luhnCheck("79927398713")) // false
  // console.log(check.luhnCheck("4485275742308327")) // true
  // console.log(check.luhnCheck("6011329933655299")) // false

  //   console.log(check.xxx())

  check.end()
}
