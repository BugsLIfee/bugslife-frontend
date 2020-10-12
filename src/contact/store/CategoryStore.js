import { observable, computed, action } from "mobx";
import  categoryApi  from "../api/CategoryApi"
import CategoryApiModel from "../api/Model/CategoryApiModel"
export default class CategoryStore {
  @observable
  category = "";
  @observable
  categoryList = "";

  @computed
  get getCategoryList() {
    return this.category ? this.category : "";
  }

  @action
  setCategoryListByType(type) {
    let categoryObj = categoryApi.categoryListByType(type);
    this.categoryList =new CategoryApiModel(categoryObj);
    
    console.log("CategoryStore:", this.categoryList);
  }
}
