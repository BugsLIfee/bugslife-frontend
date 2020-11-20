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

    bugboradCommentList(uid){
        console.log("API Comment받아오기")
        console.log(this.BUGBOARD_LIST_API_URL+"user-comment/"+uid)
        return request({
            url: this.BUGBOARD_LIST_API_URL+"user-comment/"+uid,
            method:"GET"
        })
    }

}