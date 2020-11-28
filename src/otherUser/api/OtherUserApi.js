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

    getLikes(id){
        let result = request({
            url: ` /api/bugboard/user-like/${id}`,
            method: 'GET',
        })
        
        return result
    }
}
