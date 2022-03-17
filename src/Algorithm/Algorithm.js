/*
 * @Author: zemin zheng
 * @Date: 2022-03-16 18:05:18
 * @LastEditTime: 2022-03-17 11:32:41
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
   * @description 题目
   * @description 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标
   * @description 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
   *
   * @description Tips
   * @description 2 <= nums.length <= 104
   * @description -109 <= nums[i] <= 109
   * @description -109 <= target <= 109
   * @description 只会存在一个有效答案
   * 
   * @description https://juejin.cn/post/7072149856139083812#heading-3
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
   * @description 思路
   * @description 可以用一次循环搞定的，只要将加法变成减法
   * @description 把遍历过的值用一个对象sumCache存起来，遍历过程中看看sumCache是否存在当前值的差值，有直接返回即结束。
   *
   * @description 相比上一个解法一
   * @description 空间换时间的方法，瞬间将时间减少近一半以上，稍微牺牲了一点空间
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

  /**
   * @description 考察候选人对栈数据结构的掌握
   *
   * @description 题目
   * @description 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。 有效字符串需满足：
   * @description 左括号必须用相同类型的右括号闭合。
   * @description 左括号必须以正确的顺序闭合。
   *
   * @description 思路
   * @description 字符串s的长度一定是偶数，不可能是奇数(一对对匹配)。
   * @description 右括号前面一定跟着左括号，才符合匹配条件，具备对称性。
   * @description 右括号前面如果不是左括号，一定不是有效的括号。
   * 
   * @description 面试官：你都工作3年了，这个算法题都不会：https://juejin.cn/post/7067315820937871373
   *
   * @description 本方法采用 -- 暴力消除法（解法一）
   * @description 既然是[]、{}、()成对的出现，我能不能把他们都挨个消除掉，如果最后结果是空字符串，那不就意味着符合题意了吗
   *
   * @param {*} s
   * @return {*}
   * @memberof Algorithm
   * @example
   * 输入：s = "()"
   * 输出：true
   *
   * 输入：s = "()[]{}"
   * 输出：true
   *
   * 输入：s = "(]"
   * 输出：false
   *
   * 输入：s = "([)]"
   * 输出：false
   *
   * 输入：s = "{[]}"
   * 输出：true
   */
  isValid(s) {
    while (true) {
      let len = s.length
      // 将字符串按照匹配对，挨个替换为''
      s = s.replace("{}", "").replace("[]", "").replace("()", "")
      // 有两种情况s.length会等于len
      // 1. s匹配完了，变成了空字符串
      // 2. s无法继续匹配，导致其长度和一开始的len一样，比如({],一开始len是3，匹配完还是3，说明不用继续匹配了，结果就是false
      if (s.length === len) {
        return len === 0
      }
    }
  }

  /**
   *
   * @description 相比上一个解法一
   * @description 暴力解法虽然符合我们日常的思维，但是果然还是栈结构解法好了不少。
   *
   * @description 解题信息中的第2条强调对称性，而栈（后入先出）入栈和出栈恰好是反着来，形成了鲜明的对称性。
   * @description 栈解题法（解法二）
   *
   * @param {*} s
   * @return {*}
   * @memberof Algorithm
   * @example
   * 输入：s = "{[()]}"
   * 输出：true
   * 分析：
   * 1. 读取ch = {，属于左括号，入栈，此时栈内有{
   * 2. 读取ch = [，属于左括号，入栈，此时栈内有{[
   * 3. 读取ch = (，属于左括号，入栈，此时栈内有{[(
   * 4. 读取ch = )，属于右括号，尝试读取栈顶元素(和)正好匹配，将(出栈，此时栈内还剩{[
   * 5. 读取ch = ]，属于右括号，尝试读取栈顶元素[和]正好匹配，将[出栈，此时栈内还剩{
   * 6. 读取ch = }，属于右括号，尝试读取栈顶元素{和}正好匹配，将{出栈，此时栈内还剩''
   * 7. 栈内只能''，s = "{[()]}"符合有效的括号定义，返回true
   */
  isValid1(s) {
    // 空字符串符合条件
    if (!s) {
      return true
    }

    const leftToRight = {
      "(": ")",
      "[": "]",
      "{": "}",
    }
    const stack = []

    for (let i = 0, len = s.length; i < len; i++) {
      const ch = s[i]
      // 左括号
      if (leftToRight[ch]) {
        stack.push(ch)
      } else {
        // 右括号开始匹配
        // 1. 如果栈内没有左括号，直接false
        // 2. 有数据但是栈顶元素不是当前的右括号
        if (!stack.length || leftToRight[stack.pop()] !== ch) {
          return false
        }
      }
    }

    // 最后检查栈内还有没有元素，有说明还有未匹配则不符合
    return !stack.length
  }
}

export default Algorithm
