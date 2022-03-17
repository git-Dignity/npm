import { Storage } from "../../Storage/Storage"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let storage = new Storage()
  storage.start()

  var asas = {
    fn: function asas() {},
    zhengze: new RegExp("ab+c", "i"),
    yinwen: {
      sd: "dsfasdd",
    },
  }

  //   storage.localStorageSet("id", asas) // 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略

  //   console.log(storage.localStorageGet("id"))

  //   storage.localStorageRemove("id")

  //   console.log(storage.localStorageGet("id"))

  //   //   验证存贮某一段时间失效
  //   storage.localStorageSetExpire("id", asas, 1000)

  //   console.log(storage.localStorageGet("id"))

  //   setTimeout(function () {
  //     console.log(storage.localStorageGet("id"))
  //   }, 2000)

  //   storage.cookieSet("id", "admin", 10000)

  //   console.log(storage.cookieGet("id"))

  //   storage.cookieRemove("id")

  //   console.log(storage.cookieGet("id"))

  //   console.log(storage.xxx())

  storage.end()
}