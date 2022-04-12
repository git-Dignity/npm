/*
 * @Author: zemin zheng
 * @Date: 2022-04-12 09:58:24
 * @LastEditTime: 2022-04-12 11:43:00
 * @LastEditors: zemin zheng
 * @Description: 面试 -- 数组类
 * @FilePath: \npm\src\Interview\Array.js
 */

class Array {
  /**
   * @description 打印开始点
   *
   * @memberof Array
   */
  start() {
    console.log("面试 -- 数组类Array start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof Array
   */
  end() {
    console.log("面试 -- 数组类Array end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * 解题思路：
   * 双指针 从头到尾比较 两个数组的第一个值，根据值的大小依次插入到新的数组中
   * 空间复杂度：O(m + n)
   * 时间复杂度：O(m + n)
   * @param {Array} arr1
   * @param {Array} arr2
   */
  merge(arr1, arr2) {
    var result = []
    while (arr1.length > 0 && arr2.length > 0) {
        // 如果arr2的值大。那就把arr1的值存起，这样子就可以从小到大排序
      if (arr1[0] < arr2[0]) {
        /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
        result.push(arr1.shift())
      } else {
        result.push(arr2.shift())
      }
    }
    return result.concat(arr1).concat(arr2)

  }

  /**
   * @description 题目：
   * @description 合并二维有序数组成一维有序数组，归并排序的思路
   * 
   * @description 实现思路：
   * @description 1. 通过while循环，若目标数组大于1，则一直循环
   * @description 2. while循环内，拿到数组的第一个和第二个，传给merge去按照从小到大的顺序排列（快排）
   * @description 3. 拿到从小到大的数组mergeArr，push进目标数组arr
   * @description 4. 继续while（第三步的操作也会放在while内和别的数组进行快排）
   * @description 5. 直到目标数组arr只剩下一个，即完成任务，返回
   * 
   * @description https://github.com/lgwebdream/FE-Interview/issues/8
   *
   * @param {Array} arr 目标数组
   * @return {Array} 
   * @memberof Array
   * @example
   * const mergeSort1 = array.mergeSort([[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6]]);
     console.log(mergeSort1);   // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9]

     const mergeSort2 = array.mergeSort([[1,4,6],[7,8,10],[2,6,9],[3,7,13],[1,5,12]]);
     console.log(mergeSort2);   //  [1, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10, 12, 13]
   */
  mergeSort(arr) {
    let lengthArr = arr.length
    if (lengthArr === 0) {
      return []
    }
    while (arr.length > 1) {
      let arrayItem1 = arr.shift()
      let arrayItem2 = arr.shift()
      let mergeArr = this.merge(arrayItem1, arrayItem2)
      arr.push(mergeArr)
    }
    return arr[0]
  }
}

export default Array
