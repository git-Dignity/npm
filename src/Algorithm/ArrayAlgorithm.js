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
   * @description 数组排序 -- 冒泡排序
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
}

export default ArrayAlgorithm
