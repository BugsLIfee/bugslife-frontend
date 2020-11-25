import { request } from "../../oauth/api/APIUtils";

export default class PostingApi {

  url = "/api/bugboard/";

  postCreate(postingApiModel) {  
    return request({
      url: this.url + "posting/",
      method: 'POST',
      body: JSON.stringify(postingApiModel)
    });
  }

  postModify(postModifyApiModel) {
    return request({
      url: this.url + "question/",
      method: 'PUT',
      body: JSON.stringify(postModifyApiModel)
    })
  }
}
