import { observable, computed, action } from "mobx"

class AttendanceStore{


    @observable 
    attendance =  ['2020-10-20' ,'2020-10-21'];

    @observable
    error =""

    @action
    addAttn=(newDate)=>{

        if(this.attendance.includes(newDate)){
            this.error = "이미 출석체크가 완료되었습니다."
            
        }else{
            this.attendance = [...this.attendance, newDate]
            //console.log(this.attendance)
        }
    }

}

export default AttendanceStore;