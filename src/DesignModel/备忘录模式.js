// 备忘录模式（随时记录一个对象的状态变化；随时可以恢复之前的某个状态（如撤销功能，编辑器保存和撤回））

//备忘录类
class Menento {
    constructor(content){
        this.content = content
    }
    getContent(){
        return this.content;
    }
}

//备忘录列表(操作的是备忘录类)
class CareTaker{
    constructor(){
        this.list = []
    }
    add(menento){   //将编辑器需要备忘的存进来
        this.list.push(menento);
    }
    get(index){
        return this.list[index];
    }
}

//编辑器
class Editor{
    constructor(){
        this.content = null;
    }
    //设置内容
    setContent(content){
        this.content = content;
    }
    getContent(){
        return this.content;
    }
    //保存
    saveContentToMenento(){
        return new Menento(this.content);
    }

    //恢复
    getContentFromMemento(menento){
        console.log(menento)
        this.content = menento.getContent()
    }
}




export { CareTaker, Editor }











