
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

    /**
     * @description 简单的深拷贝
     *
     * @param {Object/Array} obj 目标数组
     * @return {Object/Array}  目标数组Copy
     * @memberof ArrayTool
     * @example
     * const person={
     *    name:'xiaoming',
     *    child:{
     *       name:'Jack',
     *       eat: function(){
     *           console.log('阿巴');
     *       }
     *    }
     * }
     *
     * let personCopy = deepCopy(person)
     * personCopy.child.eat = []
     * console.log(person.child.eat);      // fn()
     * console.log(personCopy.child.eat); // []  
     * // 确实两个对象值引用不相同了
     */
    deepCopy(obj){
        if(typeof obj != 'object' || obj == null){
            return obj
        }

        return JSON.parse(JSON.stringify(obj))
    }

    /**
     * @description 数组去重
     * @description 原理：利用Set中不能出现重复元素的特征
     * @param {Array} arr 目标数组
     * @return {Array} 
     * @memberof ArrayTool
     * @example
     * uniqueArray([undefined, null, null, 1, 1])  // [undefined, null, 1]
     */
    uniqueArray(arr){
        if(!Array.isArray(arr)){
            throw new Error('The first paramter must be an array')
        }
        if(arr.length == 1){
            return arr
        }

        return [...new Set(arr)]
    }

    /**
     * @description 布尔全等判断
     * @description 判断arr数组中，满足fn，如果全部都满足即为true；如果有一个不满足条件即为false
     *
     * @param {Array} arr
     * @param {Function} [fn=Boolean]
     * @return {Boolean} 
     * @memberof ArrayTool
     * @example
     * booleanAll([4, 2, 3], x => x > 1);   // true
     * booleanAll([4, 2, 3], x => x > 2);   // false
     */
    booleanAll(arr, fn = Boolean) {
       return arr.every(fn)
    }

    /**
     * @description 检查数组各项相等
     *
     * @param {Array} arr
     * @return {Boolean} 
     * @memberof ArrayTool
     * @example
     * allEqual([1, 1, 1]);   // true
     * allEqual([1, 2, 3, 4, 5, 6]);   // false
     */
    allEqual(arr){
        return arr.every(val => val === arr[0])
    }

    /**
     * @description 判断两个数字约等于
     *
     * @param {Number} v1
     * @param {Number} v2
     * @param {number} [epsilon=0.001] 范围
     * @return {Boolean} 
     * @memberof ArrayTool
     * @example
     * approximatelyEqual(Math.PI / 2.0, 1.5708, 0.001);   // true
     * approximatelyEqual(Math.PI / 2.0, 2.5708, 0.002);   // false
     */
    approximatelyEqual(v1, v2, epsilon = 0.001){
        return Math.abs(v1 - v2) < epsilon
    } 












    // https://juejin.cn/post/6844903966526930951  第7点



    
    
    

}

export default ArrayTool



// 8个工程必备的JavaScript代码片段（建议添加到项目中）：https://juejin.cn/post/6999391770672889893