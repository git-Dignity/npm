
/**
 * 数组工具类
 *
 * @class ArrayTool
 */
class ArrayTool{
    constructor() {}


    /**
     * @description 查询数组中是否存在某个元素并返回元素第一次出现的下标
     * @param {*} item 要查询的元素
     * @param {Array} data
     * @return {Number} 元素第一次出现的下标
     * @memberof Tool
     * @example
     * inArray(2,[1,2,3,4])  // 1
     */    
    inArray(item, data) {
        for (let i = 0; i < data.length; i++) {
            if (item === data[i]) {
                return i;
            }
        }
        return -1;
    }

    /**
     * @description 数组乱序
     * @param {Array} arr
     * @return {Array}
     * @memberof Tool
     * @example
     * arrScrambling([1,5,9])  // [5,1,9]
     */    
     arrScrambling(arr) {
        let array = arr;
        let index = array.length;
        while (index) {
            index -= 1;
            let randomIndex = Math.floor(Math.random() * index);
            let middleware = array[index];
            array[index] = array[randomIndex];
            array[randomIndex] = middleware
            // console.log(array[index])
            // console.log(array[randomIndex])
            // console.log("----------")
        }
        return array
    }

    /**
     * @description 数组交集
     * @param {Array} arr1
     * @param {Array} arr2
     * @return {Array}
     * @memberof Tool
     * @example
     * similarity([1,2,3],[5,2])  // [2]
     */    
     similarity(arr1, arr2) {
        return arr1.filter(v => arr2.includes(v));;
    }

    /**
     * @description 数组中某元素出现的次数  ([1,2,2,3],2)
     * @param {Array} arr
     * @param {Number/String} value
     * @return {Number}
     * @memberof Tool
     * @example
     * countOccurrences([1,2,2,3],2)  // 2
     */    
     countOccurrences(arr, value) {
        // 最后面那个0是我们将index索引从0开始，也就是a默认为0
        // reduce第一个参数的计算后的返回值，这里来说，a为0，因为后面加上参数0
        // reduce第二个参数是数组的第n个

        return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
    }

    /**
     * @description 分割指定长度的元素数组
     *
     * @param {Array} list 传进来的数组
     * @param {number} [size=1] 要分成几个为一组的数据
     * @param {Array} [cacheList=[]] 返回出去的结果
     * @return {*} 
     * @memberof Tool
     * @example
     * listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9])  // [[1], [2], [3], [4], [5], [6], [7], [8], [9]]
     * listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)  // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
     * listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)  // []
     * listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], -1)  // []
     */
     listChunk(list, size = 1, cacheList = []) {
        var tmp = [...list]
        if (size <= 0) {
            return cacheList;
        }

        while (tmp.length) {
            cacheList.push(tmp.splice(0, size))  // 因为split会改变原数组
        }
        return cacheList
    }

}

export default ArrayTool