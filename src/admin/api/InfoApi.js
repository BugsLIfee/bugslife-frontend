import axios from "axios";

export default class InfoApi {
  url = "api/info/";

  infoCreate(infoApiModel) {
    return axios
      .post(this.url, infoApiModel)
      .then((response) => (response && response.data) || null);
  }

  infoDetail(id) {
    return axios
      .get(this.url + `${id}`)
      .then((response) => (response && response.data) || null);
  }
  //todoList(todoApiModel):url get  return todo
  infoList() {
    return axios
      .get(this.url)
      .then((response) => (response && response.data) || null);
  }
  //todoModify(todoApiModel):url put  return void
  infoModify(infoApiModel) {
    //let todoJson = JSON.stringify(todoApiModel);
    return axios
      .put(this.url, infoApiModel)
      .then((response) => (response && response.data) || null);
  }
  //todoDelete(todoApiModel):url delete return void
  infoDelete(id) {
    console.log("info-api delete:", id);
    return axios
      .delete(this.url + `${id}`)
      .then((response) => (response && response.data) || null);
  }
}
