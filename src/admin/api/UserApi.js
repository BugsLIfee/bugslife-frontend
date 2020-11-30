import { request }from "../../oauth/api/APIUtils";

export default class UserApi{

    USER_API_URL = "http://f6310e3e-default-backendin-e9e6-1825476586.ap-northeast-1.elb.amazonaws.com/user/"
    
    getUserList(){
        console.log( this.USER_API_URL +"members")
        return request({
            url : this.USER_API_URL +"members",
            method:"GET"
        })


    }
}