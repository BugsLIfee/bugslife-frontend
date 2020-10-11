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
    async createUser(userObj){
      let result = this.userApi.userCreate(userObj);
      this.users = await this.userApi.userList();
      if(result == null){
        return "Error occured while creating user"
      }
    }


    @action
    async selectUser(uid){
        this.user = await this.userApi.userDetail(uid);
        console.log("this.user on Store: " +JSON.stringify(this.user))
        if (this.user == null) {
            this.errorMessage = `Error : There is no user id =  ${uid}`;
        }
    }

    @action
    async selectAll() {
      console.log("select all");
 
      this.users = await this.userApi.userList();
        console.log(` this users = ${this.users}`);
      if (this.users == null) {
        console.log("empty list");
        return "empty list";

      }
    }
}

export default UserStore;