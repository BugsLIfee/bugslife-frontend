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
        // .map(val=> {return {...val}});

        this.attendanceList = result

        console.log("스토어 리스트 ? ==== ", this.attendanceList)
    }

    @action
    async addAttn(uid, newDate){

        if(this.attendanceList.includes(newDate)){
            this.error = "이미 출석체크가 완료되었습니다."
        }else{
            this.isAttend = !this.isAttend;
            let model = new AttendanceModel(uid, newDate);
            console.log(model)
            await this.attend_api.createAttend(model);
            // this.attendance = [...this.attendance, newDate]
            // //console.log(this.attendance)
        }
    };

}

export default AttendanceStore;