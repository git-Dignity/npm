/*
 * @Author:zemin zheng
 * @Date: 2021-08-24 12:55:01
 * @LastEditTime: 2021-09-10 14:38:58
 * @LastEditors: Please set LastEditors
 * @Description: 文件测试
 * @FilePath: \npm\src\test\File\File.js
 */

import { File } from "../../File"

export default (isLog) => {
  if (!isLog) {
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

  //   file.download("http://zhengzemin.cn/static/123.docx", "玛卡玛卡")

  // file.downloadFile('1.txt','lalalallalalla')  // 下载1.txt
  // file.downloadFile('1.json',JSON.stringify({name:'hahahha'})) // 下载1.json


  // GET
  // file.downExceil({
  //   url: `http://10.44.20.234/appsvc/v1/export/exportFloodCapacityByBasincd/excel?dateTime=2021091008&basincd=HA`,
  //   name: "还是要后端支持一下",
  // })

  // let query = {
  //   type: "2",
  //   startTime: "20201091008",
  //   endTime: "20201091108",
  //   pageNo: 1,
  //   pageSize: 50,
  //   basincd: "HB",
  // }
  //   let url = `http://10.44.20.234/wcs/rrasreservoir/reservoirExport/excel/exportWaterListByTimeSlot`

  // POST
  // file.downExceil({
  //   url,
  //   method: "POST",
  //   query: "type=2&startTime=20201091008&endTime=20201091108&pageNo=1&pageSize=50&basincd=HB",
  //   name: "蓄水统计列表",
  // })

  file.end()
}
