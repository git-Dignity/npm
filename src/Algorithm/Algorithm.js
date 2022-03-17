/*
 * @Author: zemin zheng
 * @Date: 2022-03-16 18:05:18
 * @LastEditTime: 2022-03-17 10:06:37
 * @LastEditors: zemin zheng
 * @Description: 算法
 * @FilePath: \npm\src\Algorithm\Algorithm.js
 */
class Algorithm {
  constructor() {
    console.log("算法-_-_-_-————————")
  }

  /**
   * @description 打印开始点
   *
   * @memberof Algorithm
   */
  start() {
    console.log("算法 start^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 打印结束点
   *
   * @memberof Algorithm
   */
  end() {
    console.log("算法 end^_^_^_^_^_^_^_^_^_^")
  }

  /**
   * @description 不规则json数组,组合成新string数据(轻微烧脑3种解法):https://www.jianshu.com/p/1573d778c558
   *
   * @description 相邻数字连接在一起
   *
   * @param {*} data
   * @return {*}
   * @memberof Algorithm
   * @example
   * ["a", "s", "d", "1", "2", "3", "5", "6", "h6", "9", "12", "13", "14", "15", "f", "g"]
   * return "a；s；d；1-3；5-6；h6； 9；12-15；f；g" （这种数组,怎么组合成）
   */
  combinationNewStr(data) {
    let i = 0,
      m = i + 1,
      result = []

    while (i < data.length) {
      const d = data[i]

      // 下一个数字和当前数字相减如果是等于1，则为相邻数字
      if (data[m] - data[m - 1] == 1) {
        // console.log(m)
        m++
      } else {
        // console.log(data[i] + '-' + data[m - 1]);
        result.push(m - 1 > i ? data[i] + "-" + data[m - 1] : data[i])
        i = m
        m += 1
      }
      // console.log("=============")
    }
    return result.join(";")
  }

  /**
   * @description 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标
   * @description 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
   *
   * @description Tips
   * @description 2 <= nums.length <= 104
   * @description -109 <= nums[i] <= 109
   * @description -109 <= target <= 109
   * @description 只会存在一个有效答案
   *
   * @description 双层循环（时间复杂度为O(n^2)）
   * @description 两数之和（解法一）
   *
   * @param {Array} nums 目标数组
   * @param {Number} target 目标值
   * @return {*}
   * @example
   * algorithm.twoSum([2,7,11,15], 9)   // [0, 1]
   * 输入：nums = [2,7,11,15], target = 9
   * 输出：[0,1]
   * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]
   *
   * algorithm.twoSum([3, 2, 4], 6) // [1, 2]
   * 输入：nums = [3,2,4], target = 6
   * 输出：[1,2]
   *
   * algorithm.twoSum([3,3], 6) //  [0, 1]
   * 输入：nums = [3,3], target = 6
   * 输出：[0,1]
   */
  twoSum(nums, target) {
    const len = nums.length
    for (let i = 0; i < len; i++) {
      // 同一个元素在答案里不能重复出现所以j = i + 1
      for (let j = i + 1; j < len; j++) {
        // 找到答案，return
        if (nums[i] + nums[j] === target) {
          return [i, j]
        }
      }
    }
  }

  /**
   * @description 可以用一次循环搞定的，只要将加法变成减法
   * @description 把遍历过的值用一个对象sumCache存起来，遍历过程中看看sumCache是否存在当前值的差值，有直接返回即结束。
   *
   * @description 空间换时间的方法，瞬间将时间减少近一半以上，稍微牺牲了一点空间
   * @description https://juejin.cn/post/7072149856139083812#heading-3
   *
   * @description 关于（解法一）一旦实际面试中写出了双层，甚至是n层循环，一定要停住脚步，思考用空间换时间。
   * @description 两数之和（解法二）
   *
   * @param {Array} nums 目标数组
   * @param {Number} target 目标值
   * @return {*}
   * @memberof Algorithm
   * @example
   * algorithm.twoSum1([2, 7, 11, 15], 9) // [0, 1]
   * 分析：
   * 1. 读取2, sumCache是空的，将2作为key，索引0作为值存入sumCache
   * 2. 读取7,发现目标值9 - 7 = 2，2存在于sumCache中，那么将0和1索引直接返回
   */
  twoSum1(nums, target) {
    const len = nums.length
    const sumCache = {}

    for (let i = 0; i < len; i++) {
      const value = nums[i]
      // 计算差值
      const diff = target - value
      // 如果差值已经存在过，直接返回对应的索引
      if (typeof sumCache[diff] !== "undefined") {
        return [sumCache[diff], i]
      } else {
        // 否则存起来
        sumCache[value] = i
      }
    }
  }
}

export default Algorithm
