import { request } from "../../oauth/api/APIUtils";

export default class PostingApi {

  url = "http://localhost:8088/api/bugboard/posting/";

  postCreate(postingApiModel) {  
    return request({
      url: this.url,
      method: 'POST',
      body: JSON.stringify(postingApiModel)
    });
  }

  postDetail(id) {
    return requestAnimationFrame({
      url: this.url + id,
      method: 'GET',
    });
  }



  // detailDetail(id) {
  //   console.log(id);
  //   let temp = axios
  //     .get(this.url + `${id}`)
  //     .then((response) => (response && response.data) || null);
  //     console.log(temp);
  //     return temp;
  // }
  // //todoList(todoApiModel):url get  return todo
  // detailList() {
  //   return axios
  //     .get(this.url)
  //     .then((response) => (response && response.data) || null);
  // }
  // //todoModify(todoApiModel):url put  return void
  // detailModify(detailApiModel) {
  //   //let todoJson = JSON.stringify(todoApiModel);
  //   return axios
  //     .put(this.url, detailApiModel)
  //     .then((response) => (response && response.data) || null);
  // }
  // //todoDelete(todoApiModel):url delete return void
  // detailDelete(id) {
  //   console.log("detail-api delete:", id);
  //   return axios
  //     .delete(this.url + `${id}`)
  //     .then((response) => (response && response.data) || null);
  // }

  // quetionCreate(questionApimodel) {
  //   return axios
  //     .post(this.question_url, questionApimodel)
  //     .then((response) => (response && response.data) || null);
  // }

  // questionDetail(id) {
  //   let temp = axios
  //     .get(this.question_url + `${id}`)
  //     .then((response) => (response && response.data) || null);
  //     return temp;
  // }
  // //todoList(todoApiModel):url get  return todo
  // questionList() {
  //   return axios
  //     .get(this.question_url)
  //     .then((response) => (response && response.data) || null);
  // }
  // //todoModify(todoApiModel):url put  return void
  // questionModify(questionApimodel) {
  //   //let todoJson = JSON.stringify(todoApiModel);
  //   return axios
  //     .put(this.question_url, questionApimodel)
  //     .then((response) => (response && response.data) || null);
  // }
  // //todoDelete(todoApiModel):url delete return void
  // questionDelete(id) {
  //   console.log("question-api delete:", id);
  //   return axios
  //     .delete(this.question_url + `${id}`)
  //     .then((response) => (response && response.data) || null);
  // }
}
