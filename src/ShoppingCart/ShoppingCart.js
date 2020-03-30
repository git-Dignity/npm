import $ from 'jquery'
import getCart from './GetCart.js'

export default class ShoppingCart {

    constructor(app){
        this.app = app;
        this.$el = $('<div>').css({
            'padding-bottom':'10px',
            'border-bottom':'1px solid #f3f3f3'
        })
        this.cart = getCart()  
    }

    initBtn(){
        let $btn = $('<button>购物车</button>')
        $btn.click(e => {
            this.showCart()
        })
        this.$el.append($btn);  //还没有渲染之前，append不会影响什么
    }

    showCart(){
        alert(this.cart.getList())
    }

    render(){
        this.app.$el.append(this.$el);
    }

   

    init(){
        this.initBtn()
        this.render()
    }
  

}