import { observable, computed, action } from "mobx"
import BugBoardListApi from "../api/BugBoardListApi"


class ListStore {

  bugBoardListApi = new BugBoardListApi();

  @observable listById = [];

  @observable list = [];

  @observable commentList =[];


  @computed 
  get getList() {
    return this.list ? this.list.slice() : []
  }

  @computed
  get getQlistById(){
    return this.listById ? this.listById.slice() : []
  }

  @action
  async allList() {
    let result = await this.bugBoardListApi.bugBoardList()
    this.list = result ? result.sort((a, b) =>  Date.parse(b["registDate"]) -  Date.parse(a["registDate"]))
      : [];
  }

  @action
  async getlistById(uid){

    let result = await this.bugBoardListApi.bugBoardListById(uid);
    console.log("getlistById")
    console.log(result)
    if(result !==null){
       this.listById = result;
    }
    
    console.log("store listbyId : ", this.listById)

  }


  @action
  async getCommentList(uid){
    let result = await this.bugBoardListApi.bugboradCommentList(uid);
    if(result!==null){
      this.commentList = result;
    }

  }

  @action
  setListOrderBy(e) {
    switch (e) {
      case "p":
        let pointList = this.list.sort((a, b) => b["point"] - a["point"])
        this.list = pointList
        break
      case "v":
        let viewList = this.list.sort((a, b) => b["view"] - a["view"])
        this.list = viewList
        break
      case "l":
        let likeList = this.list.sort((a, b) => b["likes"] - a["likes"])
        this.list = likeList
        break
      case "d":
        let dateList = this.list.sort((a, b) =>  Date.parse(b["registDate"]) -  Date.parse(a["registDate"]))
        this.list = dateList
        break
      default : break;
    }
  }

}

export default ListStore
