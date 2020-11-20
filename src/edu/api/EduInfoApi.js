import { request }from "../../oauth/api/APIUtils";
import {EDUCATION_API_URL} from "../../oauth/constants/index"

export default class EduInfoApi {
    //EDU_INFO_API_URL = "http://localhost:8088/api/edu/"

    eduInfoList() {
        return request({
            url: EDUCATION_API_URL + "/api/edu/",
            method: 'GET'
        });
    }

    eduInfoListAdd() {
        return request({
            url: EDUCATION_API_URL + "/api/edu/" + "parsing/",
            method: 'GET'
        });
    }

    eduDetailList(eid) {
        return request({
            url: EDUCATION_API_URL + "/api/edu/" + "info/" + eid,
            method: 'GET'
        })
    }

    academyDetail(aid) {
        return request({
            url: EDUCATION_API_URL + "/api/edu/" + "academy/" + aid,
            method: 'GET'
        })
    }

    eduReviewCreate(review) {
        return request({
            url : EDUCATION_API_URL + "/api/edu/",
            method: 'POST',
            body: JSON.stringify(review)
        })
    }

}