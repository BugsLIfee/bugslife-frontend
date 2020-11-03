import axios from "axios"
import { request }from "../../oauth/api/APIUtils";
import { API_BASE_URL, ACCESS_TOKEN } from '../../oauth/constants/index';


class TagApi {
  url = "/api/tag/"

  tagCreate(tagApiModel) {
    return axios.post(this.URL, tagApiModel).then((response) => (response && response.data) || null)
  }
  tagList(tagId) {
    return axios.get(this.URL + `${tagId}`).then((response) => (response && response.data) || null)
  }
  //todoList(todoApiModel):url get  return todo
  tagListAll() {
    return request({
      url:API_BASE_URL + "/api/tag/",
      method:'GET'
    });
    // return axios.get(this.URL).then((response) => (response && response.data) || null)
  }
  //todoModify(todoApiModel):url put  return void
  tagModify(tagApiModel) {
    //let todoJson = JSON.stringify(todoApiModel);
    return axios.put(this.URL, tagApiModel).then((response) => (response && response.data) || null)
  }
  //todoDelete(todoApiModel):url delete return void
  tagDelete(tagId) {
    return axios
      .delete(this.URL + `${tagId}`)
      .then((response) => (response && response.data) || null)
  }
}
export default TagApi
