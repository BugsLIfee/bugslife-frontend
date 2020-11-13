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
}
