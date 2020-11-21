import { request } from "../../oauth/api/APIUtils";

export default class ReportApi {
  
  url = "/api/point/";

  reportList() {
    return request({
      url: this.url,
      method: 'GET',
    })
  }

  reportCreate(reportApiModel) {
    return request({
      url: this.url + "add/",
      method: 'POST',
      body: JSON.stringify(reportApiModel)
    })
  }
}
