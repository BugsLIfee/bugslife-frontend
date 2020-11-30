import { request }from "../../oauth/api/APIUtils";


export default class AttendanceApi{


    ATTEND_API_URL = "http://f6310e3e-default-backendin-e9e6-1825476586.ap-northeast-1.elb.amazonaws.com/api/attendance/"



    attendList(uid){
        return request({
            url: this.ATTEND_API_URL+ uid,
            method: 'GET'
        })
    }

    attendAllList(){
        return request({
            url: this.ATTEND_API_URL,
            method: "GET"
        })
    }

    // attendDone(uid){
    //     return request({
    //         url: this.ATTEND_API_URL,
    //         method:"PUT",
    //     })
    // }

    createAttend(attendanceModel){
        console.log("API")
        console.log(attendanceModel)
        return request({
            url: this.ATTEND_API_URL,
            method: 'POST',
            body: JSON.stringify(attendanceModel)
        });
    }
}