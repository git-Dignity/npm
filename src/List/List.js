import $ from 'jquery'
import { GET_LIST } from '../config/config.js'
import createItem from './CreateItem.js'

export default class List {

    constructor(app){
        this.app = app;
        this.$el = $('<div>')   //创建div容器
    }

    //获取数据
    loadData(){
        //观察者模式   then
        //返回promise
        return fetch(GET_LIST).then(result => {
            return result.json()
        })
    }

    //生成列表
    initItemList(data){
       
        // data.map(itemData => {
        //     //创建一个Item，然后init
        //     let item = createItem(this. itemData)
        //     item.init()
        //     return item
        // })

        //map返回数组，还要return，forEach只是遍历，所以还是简单用each就好
        data.forEach(itemData => {
            //创建一个Item，然后init
          
            let item = createItem(this, itemData)
            item.init()
        })
    }

    //渲染
    render(){
        this.app.$el.append(this.$el);

    }

    init(){

        this.loadData().then(data => {
            this.initItemList(data)
        }).then( () => {
            //先初始化全部的item，然后一次性渲染，避免重绘
            this.render();
        })
    }
  

}