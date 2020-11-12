import { request } from "../../oauth/api/APIUtils";

export default class DetailApi {
  url = "http://localhost:8088/api/bugboard/detail/";

  answerCreate(answerApiModel) {
    return request({
      url: this.url + "add-answer",
      method: 'POST',
      body: JSON.stringify(answerApiModel)
    })
  }

  postDetail(id) {
    return request({
      url: this.url + id,
      method: 'GET',
    });
  }
}
