import { request } from "../../oauth/api/APIUtils";

export default class ReportApi {
  
  url = "/api/report/";

  reportList() {
    return request({
      url: this.url,
      method: 'GET',
    })
  }

  reportCreate(reportApiModel) {
    console.log("리포트객체", reportApiModel)
    return request({
      url: this.url + "add/",
      method: 'POST',
      body: JSON.stringify(reportApiModel)
    })
  }
}
