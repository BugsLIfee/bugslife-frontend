import { request } from "../../oauth/api/APIUtils";

export default class OtherUserApi {
    url = "http://localhost:8088/user/other/";

    postDetail(id) {
    return request({
        url: this.url + id,
        method: 'GET',
    });
    }
}
