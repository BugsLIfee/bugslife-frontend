import { request }from "../../oauth/api/APIUtils";

export default class InfoApi {
  
  NOTICE_API_URL = "http://localhost:8088/api/notice/";

  infoCreate(infoApiModel) {
         return request({
          url: this.NOTICE_API_URL,
          method: 'POST',
          body: JSON.stringify(infoApiModel)
      });
  }

  infoDetail(id) {
       return request({
          url: this.NOTICE_API_URL+id,
          method: 'GET',
      });
  }
  //todoList(todoApiModel):url get  return todo
  infoList(cyrrentUserInfo) {
    return request({
      url: this.NOTICE_API_URL,
      method:'GET'
    });
  }
  //todoModify(todoApiModel):url put  return void
  infoModify(infoApiModel) {
    //let todoJson = JSON.stringify(todoApiModel);
       return request({
          url: this.NOTICE_API_URL,
          method: 'PUT',
          body: JSON.stringify(infoApiModel)
      });
  }
  //todoDelete(todoApiModel):url delete return void
  infoDelete(id) {
       return request({
          url: this.NOTICE_API_URL,
          method: 'DELTE',
      });
  }
}
