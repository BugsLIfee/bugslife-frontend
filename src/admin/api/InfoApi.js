import { request }from "../../oauth/api/APIUtils";
// import {ADMIN_API_URL} 
export default class InfoApi {
  
  NOTICE_API_URL = "/api/admin/notice";

  infoCreate(infoApiModel) {
         return request({
          url: this.NOTICE_API_URL,
          method: 'POST',
          body: JSON.stringify(infoApiModel)
      });
  }

  infoDetail(id) {
       return request({
          url: this.NOTICE_API_URL + "/"+id,
          method: 'GET',
      });
  }
  //todoList(todoApiModel):url get  return todo
  infoList() {
    console.log(this.NOTICE_API_URL,"infolist api 메서드 오나요");
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
          method: 'DELETE',
      });
  }
}
