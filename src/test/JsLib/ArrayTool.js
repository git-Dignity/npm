

import { ArrayTool} from '../../JsLib'

export default   () =>{
    let arrayTool = new ArrayTool()
    console.log('数组工具类 start');
    // console.log(arrayTool.inArray(2,[1,2,3,4]))   // 1

    // console.log(arrayTool.arrScrambling([1,5,9]));  // [5, 9, 1]

    // console.log(arrayTool.similarity([1,2,3],[5,2]))  // [2]

    // console.log(arrayTool.countOccurrences([1,2,2,3],2)) // 2

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

    console.log(arrayTool.uniqueArray([undefined, null, null, 1, 1]));

    console.log(arrayTool.uniqueArray([undefined, null, null, 1, 1, [111, 22], [111, 22]])); // 要实现一下


    console.log(arrayTool.cutNumber(1.545454658648));   // 1.55
    console.log(arrayTool.cutNumber(1.545454658648, 4));   // 1.5455






    console.log('数组工具类 end');

}