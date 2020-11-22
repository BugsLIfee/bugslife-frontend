import { request } from "../../oauth/api/APIUtils";

export default class DetailApi {
  
  url = "/api/bugboard/detail/";

  answerCreate(answerApiModel) {
    console.log(answerApiModel);
    return request({
      url: this.url + "add-answer",
      method: 'POST',
      body: JSON.stringify(answerApiModel)
    })
  }

  commentCreate(commentApiModel) {
    return request({
      url: this.url + "add-comment",
      method: 'POST',
      body: JSON.stringify(commentApiModel)
    })
  }

  postDetail(id) {
    return request({
      url: this.url + id,
      method: 'GET',
    });
  }
}
