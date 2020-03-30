import  React  from  'react'
import ReactDOM from 'react-dom'
import popBg from './../../../public/img/pop-up-box-bg.png'

export default class Popover{
    constructor(){

    }
    createPopover(){

        let popUpBox = {
            width:"750px",
            height: "366px",
            position:"fixed",
            top:"50%",
            left:"50%",
            transform:"translateX(-50%) translateY(-20%)"
        }

        let popUpBoxInside = {
            width:"100%",
            height: "90%",
            backgroundRepeat:"no-repeat",
            backgroundImage: 'url(' + popBg + ')',
            padding:"1px 2% 2%",
            color: "white",
            boxShadow: 
                    "inset 0 0 10px #f3f3f3",      /* inner white */
                    "inset 6px 0 8px #4d6387":   /* inner left magenta short */
                    "inset -6px 0 8px #424b6e",  /* inner right cyan short */
                    "inset 6px 0 30px #4d6387":  /* inner left magenta broad */
                    "inset -6px 0 30px #424b6e", /* inner right cyan broad */
                    "0 0 5px #f3f3f3":           /* outer white */
                    "-10px 0 8px #4d6387"
                  
        }

        let boxHeader = {
            width:"100%",
            height:"30px"
        }

        let h6PrjName = {
            marginTop:"1px",
            marginBottom:"15px"
        }

        let popUpBoxClose = {
            width:"30px",
            height: "30px",
            lineHeight: "30px",
            position: "absolute",
            bottom:"-1%",
            textAlign: "center",
            fontSize: "36px",
            color:"#7bc5e9",
            left:" 50%",
            borderRadius: "50%",
            cursor: "pointer",
            border:"2px solid #7bc5e9",
            transform: "rotate(45deg)",/* Firefox 旋转属性，参数表示角度(deg表示角度)，负数逆时针，正数顺时针 */
                     
            boxShadow:
                    "inset 0 0 15px #4d6387",      /* inner white */
                    "inset 6px 0 8px #4d6387":   /* inner left magenta short */
                    "inset -6px 0 8px #424b6e",  /* inner right cyan short */
                    "inset 6px 0 30px #4d6387":  /* inner left magenta broad */
                    "inset -6px 0 30px #424b6e", /* inner right cyan broad */
                    "0 0 5px #4d6387":            /* outer white */
                    "-10px 0 8px #4d6387"      
                
        }

        ReactDOM.render(
            <div>
                <div className="pop-up-box" style={popUpBox}>
                    <div className="pop-up-box-inside" style={popUpBoxInside}>
                        <div className="box-header" style = {boxHeader}>
                            <h6 id="h6-prjName" style = {h6PrjName}>项目</h6>
                        </div>
                       

                        <div>
                            <h3>》项目信息</h3>
                            <div className="essential-info">
                                            <span>招标人：<span></span>
                                            </span>
                                <span>
                                                招标代理人: <span></span>
                                            </span>
                                <span>
                                                所在区域：<span></span>
                                            </span>
                            </div>

                        </div>
                    </div>
                    <div className="pop-uo-box-close" >
                        <div style={popUpBoxClose} >+</div>
                    </div>
                </div>
            </div>,
            document.querySelector("#app")
        )
    }


    init(){
        this.createPopover()
    }
}