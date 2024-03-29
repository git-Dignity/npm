
// 前端的各种日期操作

class DateOperation{
    constructor(){

    }

    /**
      * @description: 获取当前时间戳
      * @return { Number } 
    */
    get_current_timestamp(){
        return Date.parse(new  Date())
    }

    // 获取指定时间戳
    // 支持格式："2019/10/24 08:00:00"、"2019-10-24 08:00:00"
    get_appoint_timestamp(str){
        return (new Date(str)).getTime();
    }

    // 判断一个时间是否在两个时间范围内，返回true或false
    nowInDateBetwen(d1, d2, date) {
        //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
        var dateBegin = new Date(d1.replace(/-/g, "/"));//将-转化为/，使用new Date
        var dateEnd = new Date(d2.replace(/-/g, "/"));//将-转化为/，使用new Date
        var dateNow = new Date(date.replace(/-/g, "/"));//将-转化为/，使用new Date
        //var dateBegin = new Date(d1);//将-转化为/，使用new Date
        //var dateEnd = new Date(d2);//将-转化为/，使用new Date
        //var dateNow = new Date();//获取当前时间
    
        var beginDiff = dateNow.getTime() - dateBegin.getTime();//时间差的毫秒数
        var beginDayDiff = Math.floor(beginDiff / (24 * 3600 * 1000));//计算出相差天数
    
        var endDiff = dateEnd.getTime() - dateNow.getTime();//时间差的毫秒数
        var endDayDiff = Math.floor(endDiff / (24 * 3600 * 1000));//计算出相差天数
        if (endDayDiff < 0) {//已过期
            return false
        }
        if (beginDayDiff < 0) {//没到开始时间
            return false;
        }
        if (endDayDiff == 0) {
            return true
        }
        if (beginDayDiff == 0) {
            return true;
        }
        return true;
    }


    // 如何获得两个日期之间的差异（以天为单位）？
    // 两个new Date()相减得到毫秒
    getDaysDiffBetweenDates(dateInitial, dateFinal){
        // console.log(dateFinal-dateInitial)
        return (dateFinal - dateInitial) / (1000 * 3600 * 24);
    }


    /**
     * 将指定格式的字符串解析为日期字符串
     * @param {string} str  "12-25-1995"
     * @param {string} format 
     * return Mon Dec 25 1995 00:00:00 GMT+0800 (中国标准时间)
     * exec()接受一个参数，即要应用模式的字符串，然后返回包含第一个匹配项信息的数组;或者在没有匹配项的情况下返回null.
     */
    dataPattern(str, format = '-') {
        if (!str) {
            return new Date()
        }
        const dateReg = new RegExp(`^(\\d{2})${format}(\\d{2})${format}(\\d{4})$`)
        // console.log(dateReg.exec(str))
        const [, month, day, year] = dateReg.exec(str)
        // console.log(`${month}, ${day} ${year}`)
        return new Date(`${month}, ${day} ${year}`)
    }



}



export {DateOperation}