/*
 * @Author: zemin zheng
 * @Date: 2022-03-16 18:05:18
 * @LastEditTime: 2022-04-12 16:29:07
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
   * @description 思路分析：
   * @description 1. 先定义i为0，m则为1
   * @description 2. 通过while循环来让数组组合成相邻数字连接在一起
   * @description 3. i小于传入的data长度，则一直循环下去
   * @description 4. 循环内判断下一个数字和当前数字相减如果是等于1，则为相邻数字，即m++
   * @description 5. 如果不是的话，则证明是不连续的，存进result
   * @description 6. 如果m-1大于i则证明是那个连续的，因为之前进入if的时候让m++了，此时m-1就会大于i，则相连数字拼接起来
   * @description 7. 若小于i，则证明是不连续的，直接将值存进result
   * @description 8. 将m值赋值i，m++
   * @description 9. 直到i大于传入的data的长度，循环结束，返回result
   *
   * @description 不规则json数组,组合成新string数据(轻微烧脑3种解法):https://www.jianshu.com/p/1573d778c558
   *
   * @description 相邻数字连接在一起
   *
   * @param {Array} data
   * @return {String}
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
        // console.log(data[i] + "-" + data[m - 1])
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

  /**
   * @description 扁平数据结构转Tree
   * @description 面试了十几个高级前端，竟然连（扁平数据结构转Tree）都写不出来：https://juejin.cn/post/6983904373508145189#heading-6
   * 
   * @description 不考虑性能实现，递归遍历查找（解法一）
   * @description 时间复杂度为O(2^n)
   *
   * @param {Array} data 目标数组
   * @param {Array} result 存放结果集
   * @param {Number} pid 第一级的父id
   * @return {*} 
   * @memberof Algorithm
   * @example
   * let arr = [
   *   { id: 1, name: "部门1", pid: 0 },
   *   { id: 2, name: "部门2", pid: 1 },
   *   { id: 3, name: "部门3", pid: 1 },
   *   { id: 4, name: "部门4", pid: 3 },
   *   { id: 5, name: "部门5", pid: 10 },
   * ]
   * 
   * let result = []
   * const arrayToTree = algorithm.arrayToTree(arr, result, 0)
   * console.log(arrayToTree)
   * 输出
   * [
        {
            "id": 1,
            "name": "部门1",
            "pid": 0,
            "children": [
                {
                    "id": 2,
                    "name": "部门2",
                    "pid": 1,
                    "children": []
                },
                {
                    "id": 3,
                    "name": "部门3",
                    "pid": 1,
                    "children": [
                        // 结果 ,,,
                    ]
                }
            ]
        }
    ]
   */
  arrayToTree(data, result, pid) {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key]
        if (element.pid === pid) {
          const item = { ...element, children: [] }
          result.push(item)
          this.arrayToTree(data, item.children, item.id)
        }
      }
    }
    return result
  }

  /**
   * @description 思路：
   * @description 实则是给itemMap添加children，又借助一开始result.push了第一个节点元素（对象引用的值一样，itemMap变，result添加的第一个也变）
   * @description 先把数据转成Map去存储，之后遍历的同时借助对象的引用，直接从Map找对应的数据做存储
   *
   * @description 相比上一个解法一（递归遍历）
   * @description 有两次循环，该实现的时间复杂度为O(2n)，需要一个Map把数据存储起来，空间复杂度O(n)
   *
   * @description 不用递归，Map也能搞定（解法二）
   *
   * @param {Array} items 目标数组
   * @return {*}
   * @memberof Algorithm
   */
  arrayToTree1(items) {
    const result = [] // 存放结果集
    const itemMap = {}

    // 先转成map存储
    for (const item of items) {
      itemMap[item.id] = { ...item, children: [] }
    }

    for (const item of items) {
      const id = item.id
      const pid = item.pid
      const treeItem = itemMap[id]
      if (pid === 0) {
        result.push(treeItem)
      } else {
        if (!itemMap[pid]) {
          itemMap[pid] = {
            children: [],
          }
        }
        itemMap[pid].children.push(treeItem)
      }
    }
    return result
  }

  /**
   * @description 思路
   * @description 主要思路也是先把数据转成Map去存储，之后遍历的同时借助对象的引用，直接从Map找对应的数据做存储。
   * @description 不同点在遍历的时候即做Map存储,有找对应关系。性能会更好
   *
   * @description 相比上一个解法二（Map for...of）
   * @description 一次循环就搞定了，该实现的时间复杂度为O(n)，需要一个Map把数据存储起来，空间复杂度O(n)
   *
   * @description 最优性能（解法三）
   *
   * @param {*} items
   * @return {*}
   * @memberof Algorithm
   */
  arrayToTree2(items) {
    const result = [] // 存放结果集
    const itemMap = {} //
    for (const item of items) {
      const id = item.id
      const pid = item.pid

      if (!itemMap[id]) {
        itemMap[id] = {
          children: [],
        }
      }

      itemMap[id] = {
        ...item,
        children: itemMap[id]["children"],
      }

      const treeItem = itemMap[id]

      if (pid === 0) {
        result.push(treeItem)
      } else {
        if (!itemMap[pid]) {
          itemMap[pid] = {
            children: [],
          }
        }
        itemMap[pid].children.push(treeItem)
      }
    }
    return result
  }

  /**
   * @description 实现思路：
   * @description 1. 正常递归版本是一个既简单又直接的逻辑，但是这个版本有个问题就是存在大量重复计算。
   * @description 2. 如：当 n 为 5 的时候要计算fib(4) + fib(3)当 n 为 4 的要计算fib(3) + fib(2) ，这时fib(3)就是重复计算了。
   * @description 3. 运行 fib(50) 等半天才会出结果。
   * 
   * @description 公式版：递归（慢）（方法一）
   * @description https://github.com/lgwebdream/FE-Interview/issues/9
   * 
   * @description 实现斐波那契数列
   *
   * @param {Number} n
   * @return {Number} 
   * @memberof Algorithm
   * @example
   * const fib1 = algorithm.fib1(6)
     console.log(fib1); // 8
   */
  fib1(n) {
    if (n < 0) throw new Error("输入的数字不能小于0")
    if (n < 2) {
      return n
    }
    return this.fib1(n - 1) + this.fib1(n - 2)
  }

  /**
   * @description 实现思路：
   * @description 1. 这个版本没有重复计算问题，速度也明显快了很多。这并不代表循环比递归好。
   * @description 2. 循环的问题在于状态变量太多，为了实现 fib 这里使用了 4 个状态变量(f0,f1,curFib,i) 
   * @description 3. 而状态变量 在写、修改、删除的过程中需要格外小心。状态变量多了阅读起来也不那么优美了
   * 
   * @description 迭代:for 循环（变量多、空间复杂度大）（方法二）

   * @description 实现斐波那契数列
   *
   * @param {Number} n
   * @return {Number} 
   * @memberof Algorithm
   * @example
   * const fib2 = algorithm.fib2(6)
     console.log(fib2); // 8
   */
  fib2(n) {
    if (n < 0) throw new Error("输入的数字不能小于0")
    let f0 = 0,
      f1 = 1,
      curFib = f0
    if (n < 2) {
      return n
    }
    for (let i = 1; i < n; i++) {
      curFib = f0 + f1
      f0 = f1
      f1 = curFib
    }
    return curFib
  }

  /**
   * @description 实现思路：
   * @description 1. 把前两位数字做成参数巧妙的避免了重复计算，性能也有明显的提升。
   * @description 2. n 做递减运算，前两位数字做递增（斐波那契数列的递增）,这段代码一个减，一个增。
   * 
   * @description 去除重复计算的递归版本（借助传参减少变量）（方法三）
   * 
   * @description 实现斐波那契数列
   *
   * @param {Number} n
   * @return {Number} 
   * @memberof Algorithm
   * @example
   * const fib3 = algorithm.fib3(6)
     console.log(fib3); // 8

     n = 6；a=0;b=1
     n=5;a=1;b=1
     n=4;a=1;b=2
     n=3;a=2,b=3
     n=2;a=3;b=5
     n=1;a=5,b=8
     n=0;a=8;b=13
   */
  fib3(n) {
    if (n < 0) throw new Error("输入的数字不能小于0")
    if (n < 2) return n
    function _fib(n, a, b) {
      if (n === 0) return a
      return _fib(n - 1, b, a + b)
    }
    return _fib(n, 0, 1)
  }

  /**
   * @description 去除重复计算的for循环版本（方法四）
   * 
   * @description 实现斐波那契数列
   *
   * @param {Number} n
   * @return {Number} 
   * @memberof Algorithm
   * @example
   * const fib4 = algorithm.fib4(6)
     console.log(fib4); // 8
   */
  fib4(n) {
    if (n < 0) throw new Error("输入的数字不能小于0")
    if (n < 2) {
      return n
    }
    let list = []
    list[0] = 0
    list[1] = 1
    for (let i = 1; i < n; i++) {
      list[i + 1] = list[i] + list[i - 1]
    }
    return list[n]
  }
}

export default Algorithm
