import { request } from "../../oauth/api/APIUtils";

export default class DetailApi {
  
  url = "/api/bugboard/";

  answerCreate(answerApiModel) {
    console.log(answerApiModel);
    return request({
      url: this.url + "detail/add-answer",
      method: 'POST',
      body: JSON.stringify(answerApiModel)
    })
  }

  commentCreate(commentApiModel) {
    return request({
      url: this.url + "detail/add-comment",
      method: 'POST',
      body: JSON.stringify(commentApiModel)
    })
  }

  postDetail(id) {
    return request({
      url: this.url + "detail/"+id,
      method: 'GET',
    });
  }

  questionDelete(id) {
    return request({
      url: this.url + "question/delete/"+id,
      method: 'DELETE'
    })
  }

  answerDelete(id) {
    return request({
      url: this.url + "answer/delete/"+id,
      method: 'DELETE'
    })
  }

  commentDelete(id) {
    return request({
      url: this.url + "comment/delete/"+id,
      method: 'DELETE'
    })
  }

}
