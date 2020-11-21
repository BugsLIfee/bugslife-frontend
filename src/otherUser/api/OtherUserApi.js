import { request } from "../../oauth/api/APIUtils";

export default class OtherUserApi {
    url = "/user/other/";

    getOtherUser(id) {
    return request({
        url: this.url + id,
        method: 'GET',
    });
    }
}
