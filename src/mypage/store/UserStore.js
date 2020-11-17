import { observable, computed, action } from "mobx";
import UserApi from "../api/UserApi"

class UserStore {
    userApi = new UserApi();


    @observable
    users = [];


    @observable
    user = {};

    
    @action
    async getUserData(){
      
    } 
}

export default UserStore;