import { request }from "../../oauth/api/APIUtils";
import {BUGBOARD_API_URL} from "../../oauth/constants/index"

export default class BugBoardListApi {
    
    //BUGBOARD_API_URL = "http://localhost:8088/api/bugboard/"
    
    bugBoardList() {
        return request({
            url: BUGBOARD_API_URL +'/api/bugboard/',
            method: 'GET'
        });
    }

    bugBoardListById(uid){
        
        return request({
            url: BUGBOARD_API_URL + '/api/bugboard/' + "list/" + uid,
            method: "GET"
        })
    }

}