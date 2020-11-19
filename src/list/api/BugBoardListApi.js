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
        console.log(this.BUGBOARD_LIST_API_URL+"list/"+uid , "API")
        
        return request({
            url: this.BUGBOARD_LIST_API_URL+"list/"+uid,
            method: "GET"
        })
    }

}