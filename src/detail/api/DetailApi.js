import { request } from "../../oauth/api/APIUtils";

export default class DetailApi {
  
  url = "/api/bugboard/";

  addAnswerLike(answerId, userId) {
    return request({
      url: this.url + "detail/" + answerId + "/add-answer-like/"+userId,
      method: 'GET'
    })
  }

  addQuestionLike(questionId, userId) {
    return request({
      url: this.url + "detail/" + questionId + "/add-question-like/"+userId,
      method: 'GET'
    })
  }

  deleteAnswerLike(answerId, userId) {
    return request({
      url: this.url + "detail/" + answerId + "/delete-answer-like/"+userId,
      method: 'GET'
    })
  }

  deleteQuestionLike(questionId, userId) {
    return request({
      url: this.url + "detail/" + questionId + "/delete-question-like/" +userId,
      method: 'GET'
    })
  }

  

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
