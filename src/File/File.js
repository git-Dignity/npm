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

  /**
   * @description 其实设置download设置名字是无效的，因为同域下才有效，跨域download设置无效的
   *
   * @description 下载一个excel文档
   *
   * @param {String} link 链接
   * @param {String} name 文件名
   * @memberof File
   * @example
   * download('http://zhengzemin.cn/static/123.docx', '玛卡玛卡') // 下载文件
   */
  download(link, name) {
    if (!name) {
      name = link.slice(link.lastIndexOf("/") + 1)
    }
    let eleLink = document.createElement("a")
    eleLink.download = name
    eleLink.style.display = "none"
    eleLink.href = link
    document.body.appendChild(eleLink)
    eleLink.click()
    document.body.removeChild(eleLink)
  }

  /**
   * @description 以blob流的形式下载，后端返回二进制的
   * @description 名字让后端加在响应头上content-disposition，前端获取
   * 
   * @description 下载文件exceil
   *
   * @param {Object} option 对象参数
   * option: {
   *   url: url链接,
   *   query: 参数,
   *   name: 文件名字,
   *   method: 请求类型
   * }
   * @memberof File
   * @example
   * GET
   * 
   * file.downExceil({
   *   url: `http://10.44.20.234/appsvc/v1/export/exportFloodCapacityByBasincd/excel?dateTime=2021091008&basincd=HA`,
   *   name: "还是要后端支持一下",
   * })
   * 
   * POST
   * 
   * let query = {
   *   type: "2",
   *   basincd: "HB",
   * }
   * 
   * let url = `http://10.44.20.234/wcs/rrasreservoir/reservoirExport/excel/exportWaterListByTimeSlot`
   * 
   * file.downExceil({
   *   url,
   *   method: "post",
   *   query,
   *   name: "蓄水统计列表",
   * })
   */
  downExceil(option) {
    const {
      url,
      query,
      name,
      method = "get"
    } = option
    if (method == "get") {
      var xhr = new XMLHttpRequest() //定义http请求对象
      xhr.open("get", url, true)
      // xhr.setRequestHeader('x-access-token', headersTmp['x-access-token'])

      xhr.send()
      xhr.responseType = "blob" // 返回类型blob
      xhr.onload = function () {
        // 定义请求完成的处理函数，请求前也可以增加加载框/禁用下载按钮逻辑
        if (this.status === 200) {
          var blob = this.response
          let contentDisposition = xhr.getResponseHeader("content-disposition")
          let temp = contentDisposition
            ? decodeURI(escape(contentDisposition.split(";")[1].split("filename=")[1]))
            : name + '.xlsx'

          var reader = new FileReader()
          reader.readAsDataURL(blob) // 转换为base64，可以直接放入a标签href
          reader.onload = function (e) {
            console.log(e) //查看有没有接收到数据流
            // 转换完成，创建一个a标签用于下载
            const elink = document.createElement("a")
            // iso8859-1 转为utf-8
            elink.download = temp
            elink.style.display = "none"

            elink.href = e.target.result
            document.body.appendChild(elink)
            elink.click()
            URL.revokeObjectURL(elink.href) // 释放URL 对象
            document.body.removeChild(elink)
          }
        }
      }
    } else {
      // 没有引axios，看看后面怎么代替
      // axios
      //   .post(url, query, {
      //     responseType: "blob",
      //     params: query,
      //   })
      //   .then((res) => {
      //     const blob = new Blob([res.data]) //处理文档流
      //     const fileName = res.headers["content-disposition"]
      //     const elink = document.createElement("a")
      //     elink.download = decodeURI(
      //       escape(fileName.split(";")[1].split("filename=")[1])
      //     )
      //     elink.style.display = "none"
      //     elink.href = URL.createObjectURL(blob)
      //     document.body.appendChild(elink)
      //     elink.click()
      //     URL.revokeObjectURL(elink.href) // 释放URL 对象
      //     document.body.removeChild(elink)
      //   })
    }
  }
}

export default File
