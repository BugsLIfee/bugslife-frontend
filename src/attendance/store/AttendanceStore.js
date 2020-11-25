import { observable, action } from "mobx"
import AttendanceApi from "../api/AttendanceApi";
import AttendanceModel from "../api/Model/AttendanceModel";

class AttendanceStore{

    attend_api = new AttendanceApi();

    @observable 
    attendanceList = [];

    @observable
    error = ""
    
    @observable
    allList = [];

    @observable
    isAttend = false;


    @action
    async getAllList(){
        this.allList = await this.attend_api.attendAllList();
    }

    @action
    async getAttendList(uid){
        let result = await this.attend_api.attendList(uid)

        this.attendanceList = result
    }

    @action
    async addAttn(uid, newDate){

        if(this.attendanceList.includes(newDate)){
            this.error = "이미 출석체크가 완료되었습니다."
        }else{
            this.isAttend = !this.isAttend;
            let model = new AttendanceModel(uid, newDate);
            await this.attend_api.createAttend(model);

        }
    };

}

export default AttendanceStore;