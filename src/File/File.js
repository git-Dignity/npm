/**
 * 文件类
 *
 * @class File
 */
class File {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof File
   */
   start() {
    console.log("文件类File start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof File
   */
  end() {
    console.log("文件类File end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 获取文件后缀名
   *
   * @param {String} filename 文件名字
   * @return {String} 文件后缀
   * @memberof File
   * @example
   * getExt("123.png.sd.jpg")    // jpg
   */
  getExt(filename) {
    if (typeof filename == "string") {
      return filename.split(".").pop().toLowerCase()
    } else {
      throw new Error("filename must be a string type")
    }
  }

  /**
   * @description 对象转化为FormData对象
   *
   * @param {Object} object
   * @return {FormData} 
   * @memberof File
   * @example
   * let req={
   *    file:'xxx',
   *     userId:1,
   *     phone:'15198763636',
   * }
   * 
   * getFormData(req) // FormData {}
   */
  getFormData(object) {
    const formData = new FormData()
    Object.keys(object).forEach((key) => {
      const value = object[key]
      if (Array.isArray(value)) {
        value.forEach((subValue, i) =>
          formData.append(key + `[${i}]`, subValue)
        )
      } else {
        formData.append(key, object[key])
      }
    })
    return formData
  }
}

export default File
