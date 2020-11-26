import { request } from "../../oauth/api/APIUtils";

export default class DetailApi {
  
  url = "/api/bugboard/";

  answerCreate(answerApiModel) {
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

  answerModify(answerApiModel) {
    console.log(answerApiModel)
    return request({
      url: this.url + "answer/",
      method: 'PUT',
      body: JSON.stringify(answerApiModel)
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

  onSelectAnswer(id) {
    return request({
      url: this.url + "select-answer/"+id,
      method: "GET"
    })
  }
}
