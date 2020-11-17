import { request }from "../../oauth/api/APIUtils";

export default class UserApi{

    USER_API_URL = "http://localhost:8088/user/"
    
    getUserList(){
        console.log( this.USER_API_URL +"members")
        return request({
            url : this.USER_API_URL +"members",
            method:"GET"
        })


    }
}