/**
 * 数值计算类
 *
 * @class NumberVal
 */
 class NumberVal {
    constructor() {}

    
  /**
   * @description 打印开始点
   *
   * @memberof NumberVal
   */
  start(){
    console.log('NumberVal start^_^_^_^_^_^_^_^_^_^');
  }

  /**
   * @description 打印结束点
   *
   * @memberof NumberVal
   */
  end(){
    console.log('NumberVal end^_^_^_^_^_^_^_^_^_^');
  }



    /**
     * @description 平均数
     *
     * @param {} nums
     * @return {*} 
     * @memberof NumberVal
     * @example
     * average(...[1, 2, 3])  // 2
     * average(1, 2, 3)  // 2
     */
    average(...nums){
        return nums.reduce((acc, val) => acc + val, 0) / nums.length;
    }


  
}

export default NumberVal