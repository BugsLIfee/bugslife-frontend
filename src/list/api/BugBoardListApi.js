import { request }from "../../oauth/api/APIUtils";

export default class BugBoardListApi {
    
    BUGBOARD_API_URL = "/api/bugboard/"

    bugBoardList() {
        return request({
            url: this.BUGBOARD_API_URL,
            method: 'GET'
        });
    }

    bugBoardListById(uid){
        
        return request({
            url: this.BUGBOARD_API_URL + "list/" + uid,
            method: "GET"
        })
    }

    bugboradCommentList(uid){
        return request({
            url: this.BUGBOARD_LIST_API_URL+"user-comment/"+uid,
            method:"GET"
        })
    }

    bugBoardTagList() {
        return request({
            url: this.BUGBOARD_API_URL + "tags/",
            method: "GET"
        })
    }
}