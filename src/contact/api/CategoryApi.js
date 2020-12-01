import axios from "axios";

class CategoryApi {
  url = "/api/category/";
  
  categoryCreate(categoryApiModel) {
    return axios
      .post(this.url, categoryApiModel)
      .then((response) => (response && response.data) || null);
  }

   categoryDetail(id) {
    return axios
      .get(this.url + `?id=${id}`)
      .then((response) => (response && response.data) || null);
  }
  //todoList(todoApiModel):url get  return todo
   categoryListByType(type) {
    return axios
      .get(this.url+`${type}`)
      .then((response) => (response && response.data) || null);
  }
  //todoModify(todoApiModel):url put  return void
    categoryModify(categoryApiModel) {
    //let todoJson = JSON.stringify(todoApiModel);
    return axios
      .put(this.url, categoryApiModel)
      .then((response) => (response && response.data) || null);
  }
  //todoDelete(todoApiModel):url delete return void
    categoryDelete(id) {
    return axios
      .delete(this.url + `${id}`)
      .then((response) => (response && response.data) || null);
  }
}

export default new CategoryApi();