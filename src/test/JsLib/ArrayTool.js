/*
 * @Author: your name
 * @Date: 2021-08-19 12:47:51
 * @LastEditTime: 2021-09-01 12:52:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \npm\src\test\JsLib\ArrayTool.js
 */

import { ArrayTool } from "../../JsLib"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let arrayTool = new ArrayTool()
  arrayTool.start()
  // console.log(arrayTool.inArray(2,[1,2,3,4]))   // 1

  // console.log(arrayTool.arrScrambling([1,5,9]));  // [5, 9, 1]

  // console.log(arrayTool.similarity([1,2,3],[5,2]))  // [2]
  // console.log(arrayTool.intersection([1,2,3],[5,2]))  // [2]

  // console.log(arrayTool.intersectionBy([2.1,2.5, 1.2], [2.3, 3.4], Math.floor))  // [2.1, 2.5]


  // console.log(arrayTool.countOccurrences([1,2,2,3],2)) // 2
  // console.log(arrayTool.countOccurrences([1, 1, 2, 1, '1', '1', 2, 3], "1")); // 2

  // console.log(arrayTool.listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9]))  // [[1], [2], [3], [4], [5], [6], [7], [8], [9]]
  // console.log(arrayTool.listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  // console.log(arrayTool.listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)) // []
  // console.log(arrayTool.listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], -1)) // []

  // const person={
  //     name:'xiaoming',
  //     child:{
  //         name:'Jack',
  //         eat: function(){
  //             console.log('阿巴');
  //         }
  //     }
  // }

  // let personCopy = arrayTool.deepCopy(person)
  // personCopy.child.eat = []
  // console.log(person.child.eat);      // fn()
  // console.log(personCopy.child.eat); // []  确实两个对象值引用不相同了

  // console.log(arrayTool.uniqueArray([undefined, null, null, 1, 1])) // [undefined, null, 1]

  // console.log(arrayTool.uniqueMultiDimensionalArray([undefined, null, null, 1, 1, [111, 22], [111, 22]])); // 要实现一下

//   console.log(
//     arrayTool.uniqueMultiDimensionalArray([
//       ["你的", "我", "它"],
//       ["我", "你的", "它"],
//       ["一", "二", "三"],
//       ["三", "二", "一"],
//       ["你d", "a", "它"],
//       ["a", "你d", "它"],
//       ["one", "two", "three"],
//       ["three", "two", "one"],
//     ])
//   ) 
  //  [ ["你的", "它", "我"], ["二", "三", "一"], ["你d", "它", "a"], ["one", "three", "two"] ]

//   console.log(
//     arrayTool.uniqueMultiDimensionalArray1([
//       ["你的", "我", "它"],
//       ["我", "你的", "它"],
//       ["一", "二", "三"],
//       ["三", "二", "一"],
//       ["你d", "a", "它"],
//       ["a", "你d", "它"],
//       ["one", "two", "three"],
//       ["three", "two", "one"],
//     ])
//   ) 
  //  [ ["你的", "它", "我"], ["二", "三", "一"], ["你d", "它", "a"], ["one", "three", "two"] ]

 

  // console.log(arrayTool.booleanAll([4, 2, 3], x => x > 1));   // true
  // console.log(arrayTool.booleanAll([4, 2, 3], x => x > 2));   // false

  // console.log(arrayTool.allEqual([1, 1]));  // true
  // console.log(arrayTool.allEqual([1, 2, 3, 4, 5, 6]));  // false

  // console.log(arrayTool.approximatelyEqual(Math.PI / 2.0, 1.5708, 0.001));    // false
  // console.log(arrayTool.approximatelyEqual(Math.PI / 2.0, 2.5708, 0.002));    // true

  // console.log(arrayTool.bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]))    // [ ['beep', 'boop', 'bar'], ['foo'] ]

  // console.log(arrayTool.castArray(1));    // [1]
  // console.log(arrayTool.castArray([1]));  // [1]
  // console.log(arrayTool.castArray("消息No One Time跟我说"));  // ["消息No One Time跟我说"]

  // console.log(arrayTool.compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]));  // [1, 2, 3, "a", "s", 34]

  // console.log(arrayTool.deepFlatten([1, [2], [[3], 4], 5]));  // [1, 2, 3, 4, 5]

  // console.log(arrayTool.difference([1, 2, 3], [1, 2, 4]));  // [3]
  // console.log(arrayTool.difference([1, 2, 3], [1, 5, 4]));  // [2, 3]

  // console.log(arrayTool.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));  // [1.2]
  // console.log(arrayTool.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x));  // [ { x: 2 } ]

  // console.log(arrayTool.dropWhile([1, 2,3, 4], n => n >= 3)); // [3, 4]
  // console.log(arrayTool.dropWhile([1, 3,2,1, 4], n => n >= 3)); // [3, 2, 1, 4]

  // console.log(arrayTool.flatten([1, [2], 3, 4])); // [1, 2, 3, 4]
  // console.log(arrayTool.flatten([1, [2, [3, [4, 5], 6], 7], 8], 2)); //  [1, 2, 3, [4, 5], 6, 7, 8]
  // console.log(arrayTool.flatten([1, [2, [3, [4, 5], 6], 7], 8], 3)); //  [1, 2, 3, 4, 5, 6, 7, 8]

  // console.log(arrayTool.indexOfAll([1, 2, 3, 1, 2, 3], 1)); // [0,3]
  // console.log(arrayTool.indexOfAll([1, 2, 3], 4)); // []

  // 不传，默认是升序
  console.log(arrayTool.minN([1, 2, 3])); // [1]
  console.log(arrayTool.minN([1, 2, 3], 2));  // [1, 2]
  console.log(arrayTool.minN([1, 2, 4, 3], 3, 'asc'));  // [1, 2, 3]
  console.log(arrayTool.minN([1, 2, 4, 3], 3, 'desc'));  // [4, 3, 2]

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());

  // console.log(arrayTool.xxx());
  

  arrayTool.end()
}
