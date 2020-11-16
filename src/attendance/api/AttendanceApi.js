import { request }from "../../oauth/api/APIUtils";


export default class AttendanceApi{

    ATTEND_API_URL = "http://localhost:8088/api/attendance/"


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