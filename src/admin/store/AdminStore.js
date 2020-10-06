import { observable, computed, action } from "mobx";

export default class AdminStore {
    @observable
    menu="";

    @computed
    get getMenu(){
       return this.menu ? this.menu : "";
    }

    @action
    setMenu(menu){
        this.menu = menu;
        console.log("adminstore:",this.menu);
    }


    
}
