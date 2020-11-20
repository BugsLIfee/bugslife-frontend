import { request } from "../../oauth/api/APIUtils";

export default class PointApi {

    url = "http://localhost:8088/api/point/";

    pointList() {
      return request({
        url: this.url + "list",
        method: 'GET',
      })
    }

    pointCreate(pointApiModel) {
      console.log(pointApiModel, "포인트에피아모델")
      return request({
        url: this.url + "add/",
        method: 'POST',
        body: JSON.stringify(pointApiModel)
      })
    }
}
