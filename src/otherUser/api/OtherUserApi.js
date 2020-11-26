import { request } from "../../oauth/api/APIUtils";

export default class OtherUserApi {
    url = "/user/other";

    getOtherUser(id) {

        let result = request({
            url: `/user/other/${id}`,
            method: 'GET',
        })
        
        return result

    }
}
