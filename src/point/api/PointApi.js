import { request } from "../../oauth/api/APIUtils";

export default class PointApi {

    url = "/api/point";

    pointList() {
      return request({
        url: this.url + "/list/",
        method: 'GET',
      })
    }

    pointCreate(pointApiModel) {
      return request({
        url: this.url + "/add/",
        method: 'POST',
        body: JSON.stringify(pointApiModel)
      })
    }
}
