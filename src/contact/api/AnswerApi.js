import axios from "axios";

export default class AnswerApi {
  url = "/api/qna-a/";

  answerCreate(AnswerApiModel) {
    return axios
      .post(this.url, AnswerApiModel)
      .then((response) => (response && response.data) || null);
  }

  answerDetail(id) {
    return axios
      .get(this.url + `${id}`)
      .then((response) => (response && response.data) || null);
  }
  //todoList(todoApiModel):url get  return todo
  answerList() {
    return axios
      .get(this.url)
      .then((response) => (response && response.data) || null);
  }
  //todoModify(todoApiModel):url put  return void
  answerModify(AnswerApiModel) {
    //let todoJson = JSON.stringify(todoApiModel);
    return axios
      .put(this.url, AnswerApiModel)
      .then((response) => (response && response.data) || null);
  }
  //todoDelete(todoApiModel):url delete return void
  answerDelete(id) {
    console.log("answer-api delete:", id);
    return axios
      .delete(this.url + `${id}`)
      .then((response) => (response && response.data) || null);
  }
}
