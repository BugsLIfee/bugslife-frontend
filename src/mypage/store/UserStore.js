import { observable, computed, action } from "mobx";
import UserApi from "../api/UserApi"

class UserStore {
    userApi = new UserApi();


    @observable
    users = [];


    @observable
    user = {};

    @computed 
    get getUser(){
        return this.user ? {...this.user} : {}
    }

    @computed 
    get getUsers(){
        return this.users ? this.users.splice() : [];
    }

    @action
    async selectUser(uid){
        this.user = await this.userApi.userDetail(uid);
        if (this.todo == null) {
            this.errorMessage = `Error : There is no user id =  ${uid}`;
        }
    }

    @action
    async selectAll() {
      console.log("select all");
 
      this.users = await this.userApi.userList();
  
      if (this.users == null) {
        return "empty list";
      }
    }
}

export default new UserStore();