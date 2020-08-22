export const utils = {
    /**
     * 实现将b的方法混入a
     * @param {*} a 
     * @param {*} b 
     * @param {*} context 
     */
    extend(a, b, context){
        for(let key in b){
            if(b.hasOwnProperty(key)){
                if(typeof b[key] === 'function'){
                    a[key] = b[key].bind(context)
                }else{
                    a[key] = b[key]
                }
            }
        }
    }
}