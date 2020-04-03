// 命令模式（执行命令时，发布者和执行者分开；中间加入命令对象，作为中转站） 
// 发送者直接去调用接受者有点麻烦，所以就通过命令对象

// 接受者
class Receiver{
    exec(){
        console.log('执行')
    }
}

//命令者
class Command{
    constructor(receiver){
        this.receiver = receiver
    }
    cmd(){
        console.log('执行命令');
        this.receiver.exec()
    }
}

//触发者
class Invoker{
    constructor(command){
        this.command = command;
    }
    invoke(){
        console.log('开始')
        this.command.cmd()
    }
}


// 触发者 - > 命令者 -> 接受者


// 场景： 网页富文本编辑器操作，浏览器封装了一个命令对象


export {Receiver, Command, Invoker}