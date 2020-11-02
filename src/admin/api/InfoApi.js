import axios from "axios";
import { request }from "../../oauth/api/APIUtils";
import { API_BASE_URL, ACCESS_TOKEN } from '../../oauth/constants/index';
export default class InfoApi {
  url = "/api/notice/";

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
  infoList(cyrrentUserInfo) {
    return request({
      url:API_BASE_URL + "/api/notice/",
      method:'GET'
      
    });
     // .get(this.url)
     // .then((response) => (response && response.data) || null);
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
