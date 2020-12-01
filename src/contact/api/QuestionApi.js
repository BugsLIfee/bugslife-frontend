import axios from "axios";

export default class QuestionApi {
  url = "/api/qna-q/";
  
  questionCreate(questionApiModel) {
    return axios
      .post(this.url, questionApiModel)
      .then((response) => (response && response.data) || null);
  }

   questionDetail(id) {
    return axios
      .get(this.url + `${id}`)
      .then((response) => (response && response.data) || null);
  }
  //todoList(todoApiModel):url get  return todo
   questionList() {
    return axios
      .get(this.url)
      .then((response) => {
        return (response && response.data) || null
      });
  }
  //todoModify(todoApiModel):url put  return void
    questionModify(questionApiModel) {
    //let todoJson = JSON.stringify(todoApiModel);
    return axios
      .put(this.url, questionApiModel)
      .then((response) => (response && response.data) || null);
  }
  //todoDelete(todoApiModel):url delete return void
    questionDelete(id) {
    return axios
      .delete(this.url + `${id}`)
      .then((response) => (response && response.data) || null);
  }
}
