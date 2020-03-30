// 前端的各种日期操作

class DateOperation{
    constructor(){

    }

    // 获取当前时间戳
    get_current_timestamp(){
        return Date.parse(new  Date())
    }

    // 获取指定时间戳
    // 支持格式："2019/10/24 08:00:00"、"2019-10-24 08:00:00"
    get_appoint_timestamp(str){
        return (new Date(str)).getTime();
    }





}



export {DateOperation}