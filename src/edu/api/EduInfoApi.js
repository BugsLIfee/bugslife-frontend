import { request }from "../../oauth/api/APIUtils";

export default class EduInfoApi {
    EDU_INFO_API_URL = "http://localhost:8088/api/edu/"

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

    eduReviewList(eid) {
        return request({
            url: this.EDU_INFO_API_URL + "info/" + eid,
            method: 'GET'
        })
    }

}