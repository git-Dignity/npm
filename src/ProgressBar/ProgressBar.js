import $ from 'jquery'
import  React  from  'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default class ProgressBar{
    constructor(){
        console.log(1)
    }

    init(){
        let loadingModal = React.createElement('div' ,
             { title : 'wo shi div' , id :'loadingModal', className:'modal fade'})

        let a = React.createElement('div' ,
            {
                className:"loadingModal-inner",
                style:{
                width: "200px", 
                height:"20px", 
                zIndex:" 20000",
                 position:" absolute", 
                textAlign:" center",
                left:"50%",
                top:"50%",
                marginLeft:"-100px"
        }})

       

        let b = React.createElement('div' ,
        { className:'progress progress-striped active',
        style:{marginBottom: "0"},key:"b"
        })

        let c = React.createElement('div' ,
        { className:'progress-bar',
        style:{width: "100%"}
        })

        let d = React.createElement('h5',{
            style:{color:'red'},key:"d"
        },'正在加载市场主体关系网络')

        let e = React.createElement('div',{
            className:"alert alert-primary",
            role:"alert",
            key:"imgs"
        },'dsfdsf445')

       
        
        ReactDom.render(loadingModal , document.getElementById('app'))
        ReactDom.render(a , document.getElementById('loadingModal'))

        var vDiv = React.createElement('div', null, [b, d]);
        
        ReactDom.render(vDiv , document.getElementsByClassName('loadingModal-inner')[0])
        ReactDom.render(c, document.getElementsByClassName('progress')[0])
        ReactDom.render(e, document.getElementsByClassName('progress-bar')[0])

        ReactDom.render(
            <div>
                <h1 style={{color:'red'}}>张培跃</h1>
                <h2>欢迎学习 React</h2>
                <p>今天天气不错，挺风和日丽的！</p>
            </div>,
            document.querySelector("#app")
        )

   
    



    }
}