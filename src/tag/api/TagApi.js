import axios from "axios"

class TagApi {
  URL = "/api/tag/"

  tagCreate(tagApiModel) {
    return axios.post(this.URL, tagApiModel).then((response) => (response && response.data) || null)
  }
  tagList(tagId) {
    return axios.get(this.URL + `${tagId}`).then((response) => (response && response.data) || null)
  }
  //todoList(todoApiModel):url get  return todo
  tagListAll() {
    return axios.get(this.URL).then((response) => (response && response.data) || null)
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
