import { request } from "../../oauth/api/APIUtils";
import { BUGBOARD_API_URL } from '../../oauth/constants/index';

export default class PostingApi {

  // url = "http://localhost:8088/api/bugboard/posting/";

  postCreate(postingApiModel) {  
    console.log(postingApiModel)
    return request({
      // url: this.url,
      url: BUGBOARD_API_URL +'/api/bugboard/posting/',
      method: 'POST',
      body: JSON.stringify(postingApiModel)
    });
  }
}
