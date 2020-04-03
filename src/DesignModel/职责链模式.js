
// 一步操作可能分位多个职责角色来完成；把这些角色都分开，
// 然后用一个链串起来，
// 将发起者和各个处理者进行隔离


//请假要组长，然后经理，总监
class Action{
    constructor(name){
        this.name = name;
        this.nextAction = null;
    }
    setNextAction(action){
        this.nextAction = action;
    }
    handle(){
        console.log(`${this.name} 审批`)
        if(this.nextAction!=null){
            this.nextAction.handle()
        }
    }

}



export default Action

