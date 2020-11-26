import { request }from "../../oauth/api/APIUtils";
//import {EDUCATION_API_URL} from "../../oauth/constants/index"

export default class EduInfoApi {
    EDU_INFO_API_URL = "/api/edu/";

    eduInfoList() {
        return request({
            url: this.EDU_INFO_API_URL,
            method: 'GET'
        });
    }

    eduInfoListAdd() {
        return request({
            url: this.EDU_INFO_API_URL + "parsing/",
            method: 'GET'
        });
    }

    eduDetailList(eid) {
        return request({
            url: this.EDU_INFO_API_URL + "info/" + eid,
            method: 'GET'
        })
    }

    academyDetail(aid) {
        return request({
            url: this.EDU_INFO_API_URL+ "academy/" + aid,
            method: 'GET'
        })
    }

    eduReviewCreate(review) {
        return request({
            url : this.EDU_INFO_API_URL,
            method: 'POST',
            body: JSON.stringify(review)
        })
    }

    deleteReview(rid) {
        return request({
            url : this.EDU_INFO_API_URL + "reviewDelete/" + rid,
            method: 'DELETE'
        })
    }

    updateReview(reviewObj,rid) {
        return request({
            url : this.EDU_INFO_API_URL + "reviewModify/" + rid,
            method: 'PUT',
            body: JSON.stringify(reviewObj)
        })
    }

    checkReview(wid,eid) {
        return request({
            url : this.EDU_INFO_API_URL + "checkReview/" + wid +"/" + eid,
            method: 'GET'
        })
    }

}