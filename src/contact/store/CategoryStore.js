import { observable, computed, action } from "mobx";
import CategoryApi  from "../api/CategoryApi"
import CategoryApiModel from "../api/Model/CategoryApiModel"
export default class CategoryStore {

  @observable
  category = "";
  @observable
  categoryList = [];

  @computed
  get getCategoryList() {
    return this.categoryList;
  }

  @action
  async setCategoryListByType(type) {
    let categoryObjList = await CategoryApi.categoryListByType(type);
    this.categoryList = categoryObjList.map(categoryObj=>
      new CategoryApiModel(categoryObj));
    
    console.log("CategoryStore::", this.categoryList);
  }
}
