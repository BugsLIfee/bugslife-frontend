import { observable, computed, action } from "mobx"
import testListData from "../testListData"

class ListStore {
  @observable list = testListData

  @computed get getList() {
    return this.list ? this.list.slice() : []
  }
  @action
  setListOrderBy(e) {
    switch (e) {
      case "p":
        let pointList = this.list.sort((a, b) => b["point"] - a["point"])
        this.list = pointList
        break
      case "v":
        let viewList = this.list.sort((a, b) => b["views"] - a["views"])
        this.list = viewList
        break
      case "l":
        let likeList = this.list.sort((a, b) => b["addPoints"] - a["addPoints"])
        this.list = likeList
        break
      case "d":
        this.list = testListData
        break
      default : break;
    }
  }
}

export default ListStore
