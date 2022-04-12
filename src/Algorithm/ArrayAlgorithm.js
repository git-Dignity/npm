/*
 * @Author: zemin zheng
 * @Date: 2022-03-29 11:19:25
 * @LastEditTime: 2022-04-12 11:50:14
 * @LastEditors: zemin zheng
 * @Description: 算法 -- 数组篇
 * @FilePath: \npm\src\Algorithm\ArrayAlgorithm.js
 */
class ArrayAlgorithm {
  constructor() {}

  /**
   * @description 打印开始点
   *
   * @memberof ArrayAlgorithm
   */
  start() {
    console.log("数组算法 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof ArrayAlgorithm
   */
  end() {
    console.log("数组算法 end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 原理
   * @description 相邻的数据进行两两比较，小数放在前面，大数放在后面，这样一趟下来，最小的数就被排在了第一位，第二趟也是如此，直到所有的数据排序完成
   * @description 比较相邻的元素。如果第一个比第二个大，就交换它们两个
   *
   * @description es6的sort；arr.sort((a, b) => a - b)
   *
   * @description 比较的排序算法，时间复杂度为O(n^2)
   * @description 数组排序 -- 冒泡排序（两两比较）
   *
   * @param {Array} arr 目标数组
   * @return {Array}
   * @memberof ArrayAlgorithm
   * @example
   * algorithm.bubbleSort([2, 3, 1, 5, 4])  // [1, 2, 3, 4, 5]
   */
  bubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
      // 从第一个元素开始，比较相邻的两个元素，前者大就交换位置
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let num = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = num
        }
      }
      // 每次遍历结束，都能找到一个最大值，放在数组最后
    }
    return arr
  }

  /**
   * @description 思路：
   * @description 只要i不大于0，即排序结束
   * @description 想一想，i=0代表什么，不就是循环下来，第一个数是最小的值吗，即排序完成
   *
   * @description 演变过程
   * @description [2, 3, 1, 5, 4]
   * @description 2,1,3,5,4   此时i = 1
   * @description 2,1,3,4,5   此时i = 3
   * @description 1,2,3,4,5   此时i = 0
   * @description 退出while
   * 
   * @description 冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/94
   * @description 改进冒泡排序（循环次数减少）（不用两两比较）
   *
   * @param {*} arr
   * @memberof ArrayAlgorithm
   * @example
   * algorithm.bubbleSort1([2, 3, 1, 5, 4])  // [1, 2, 3, 4, 5]
   */
  bubbleSort1(arr) {
    let i = arr.length - 1

    while (i > 0) {
      let pos = 0
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          pos = j
          // 下面的操作是es5写法，可以写成 [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]
          const temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
      i = pos
    }
    return arr
  }

  /**
   * @description 选择排序: 遍历自身以后的元素，最小的元素跟自己调换位置
   *
   * @param {Array} arr 目标数组
   * @return {Array}
   * @memberof ArrayAlgorithm
   * @example
   * algorithm.selectSort([2, 3, 1, 5, 4])  // [1, 2, 3, 4, 5]
   */
  selectSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
      for (let j = i; j < len; j++) {
        if (arr[j] < arr[i]) {
          ;[arr[i], arr[j]] = [arr[j], arr[i]]
        }
      }
    }
    return arr
  }

  /**
   * @description 分别取数组中每一项元素，进行比较排序，依次插入到对应位置
   * @description 可看 doc\过程图解析\1.插入排序.gif
   *
   * @description 插入排序: 即将元素插入到已排序好的数组中
   *
   * @param {*} arr
   * @return {*}
   * @memberof ArrayAlgorithm3
   * @example
   * algorithm.insertSort([2, 3, 1, 5, 4])  // [1, 2, 3, 4, 5]
   */
  insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      //外循环从1开始，默认arr[0]是有序段
      for (let j = i; j > 0; j--) {
        //j = i,将arr[j]依次插入有序段中
        if (arr[j] < arr[j - 1]) {
          ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        } else {
          break
        }
      }
    }
    return arr
  }

  /**
   * @description 思路：
   * @description 选择基准值(base)，原数组长度减一(基准值)，使用 splice
   * @description 循环原数组，小的放左边(left数组)，大的放右边(right数组)
   * @description concat(left, base, right)
   * @description 递归继续排序 left 与 right
   *
   * @description 快速排序（高级排序算法）
   *
   * @param {Array} arr 目标数组
   * @return {Array}
   * @memberof ArrayAlgorithm
   * @example
   * algorithm.quickSort([2, 3, 1, 5, 4])  // [1, 2, 3, 4, 5]
   */
  quickSort(arr) {
    if (arr.length <= 1) {
      return arr //递归出口
    }
    var left = [],
      right = [],
      current = arr.splice(0, 1)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < current) {
        left.push(arr[i]) //放在左边
      } else {
        right.push(arr[i]) //放在右边
      }
    }
    return this.quickSort(left).concat(current, this.quickSort(right))
  }
}

export default ArrayAlgorithm
