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
      console.log("store this.user"+{...this.user} )
      console.log(this.user)
     // return this.user ? JSON.stringify(this.user) : {}
        return this.user ? {...this.user} : {}
    }

    @computed 
    get getUsers(){
        return this.users ? this.users.slice() : [];
    }

    @action
    async updatetUser(select_user){
      this.users = this.users.map((user)=>
      user.uid === select_user.uid  ? JSON.stringify(select_user) : user);
      this.user = {};

      let result = this.userApi.userUpdate(select_user);
      if(result ==null){
        return "no user"
      }
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
        // console.log("this.user on Store: " +JSON.stringify(this.user))
        if (this.user == null) {
            this.errorMessage = `Error : There is no user id =  ${uid}`;
        }
    }

    @action
    async selectAll() {
      console.log("select all");
 
      this.users = await this.userApi.userList();
        // console.log(` this users = ${this.users}`);
      if (this.users == null) {
        console.log("empty list");
        return "empty list";

      }
    }
}

export default UserStore;