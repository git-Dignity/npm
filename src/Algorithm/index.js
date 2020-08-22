class Algorithm{
    constructor(){
        console.log("算法-_-_-_-————————")
    }

    /**
     * ["a", "s", "d", "1", "2", "3", "5", "6", "h6", "9", "12", "13", "14", "15", "f", "g"]
     * 这种数组,怎么组合成: "a；s；d；1-3；5-6；h6； 9；12-15；f；g"
     * @param {array} data 
     */
    combinationNewStr(data){
        let i  = 0,
            m = i + 1,
            result = [];
        
        while(i < data.length){
            const d = data[i];

            // 下一个数字和当前数字相减如果是等于1，则为相邻数字
            if(data[m] - data[m - 1] == 1){
                console.log(m)
                m ++;
            }else{
                console.log(data[i] + '-' + data[m - 1]);
                result.push(m - 1 > i ? data[i] + '-' + data[m - 1] : data[i]);
                i = m;
                m += 1;

            }
            console.log("=============")
        }
        console.log(result.join(";"));
    }


}


export { Algorithm }








// 不规则json数组,组合成新string数据(轻微烧脑3种解法):https://www.jianshu.com/p/1573d778c558 -> combinationNewStr()