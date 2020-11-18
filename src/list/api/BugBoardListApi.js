import { request }from "../../oauth/api/APIUtils";

export default class BugBoardListApi {
    
    BUGBOARD_LIST_API_URL = "http://localhost:8088/api/bugboard/"
    
    bugBoardList() {
        return request({
            url: this.BUGBOARD_LIST_API_URL,
            method: 'GET'
        });
    }

    bugBoardListById(uid){
        return request({
            url: this.BUGBOARD_LIST_API_URL+uid,
            method: "GET"
        })
    }

}