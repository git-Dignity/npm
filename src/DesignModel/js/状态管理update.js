import  { State, Context, fsm } from '../状态模式'

//更新按钮文案
function updateText(element){
    $('#'+element).text(fsm.state)
}

export default updateText