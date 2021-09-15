
/**
 * 对象工具类
 *
 * @class ObjectTool
 */
 class ObjectTool {
    constructor() {}
  
    /**
     * @description 打印开始点
     *
     * @memberof ObjectTool
     */
    start() {
      console.log("对象工具类ObjectTool start^_^_^_^_^_^_^_^_^_^")
    }
  
    /**
     * @description 打印结束点
     *
     * @memberof ObjectTool
     */
    end() {
      console.log("对象工具类ObjectTool end^_^_^_^_^_^_^_^_^_^")
    }

    /**
     * @description 使用场景是：后端列表查询接口，某个字段前端不传，后端就不根据那个字段筛选
     * @description 但是前段一般都会把整个对象传过去，那这样空的字段也会传过去，显然不可
     * 
     * @description 去除对象中value为空(null,undefined,'')的属性
     *
     * @param {*} object
     * @return {*} 
     * @memberof ObjectTool
     */
    cleanObject(object){
        if(!object){
            return {}
        }

        const result = {...object}
        Object.keys(result).forEach(key =>{
            const value = result[key]
            if([undefined, null, ''].includes(value)){
                delete result[key]
            }
        })

        return result
    }
}  


export default ObjectTool