import React, { Component } from 'react'
import Attendancecalender from '../view/AttendanceCalender'
import "../view/scss/calendar.scss"
import { inject, observer } from "mobx-react"

@inject("Store")
@observer
 class Attendancecontainer extends Component {
    

    onClickBtn=()=>{

        let {error} = this.props.Store.attendance;
        console.log(error)


        let today = new Date();   



        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜
        
        let newDate = `${year}-${month}-${date}`
        this.props.Store.attendance.addAttn(newDate)


        if( error.length!==0){
            alert(error) 
        }else{
            alert("출석완료 🎊")

        };

    }
   
    render() {
        let {attendance} = this.props.Store.attendance
       


        let attn_event = attendance.map(val=> {return {title : "출석완료" , date : val}})
        //console.log(attn_event)

        return (
            <div className="attn_wrap">
               
                <div className="attn_img">
                    <img src="../../banner/attendance_banner.001.png" />
                    <div className="attn_img_txt">
                        <h5>
                            벅스라이프에 <strong>매일매일 </strong>출석체크하면
                        </h5>
                        <h5>
                            <i id="coin" class="fas fa-coins"></i>포인트가 차곡차곡!
                        </h5>
                    </div>

                </div>
           
                <div className="attn_info">
                    <div className="attn_info_container"> 
                        <h2> [ 출석체크 혜택 ] </h2>
                        <div className="attn_info_content">

                            <div class="attn_goal">
                                <h3> <span>1주일</span> 출석달성</h3>
                                <h1> <i class="fas fa-check"></i> </h1>
                                <h5> +10 포인트 추가지급</h5>
                            </div>
                            <div class="attn_goal">
                                <h3><span>1개월</span> 출석달성</h3>
                                <h1> <i class="fas fa-check"></i> </h1>
                                <h5> +100 포인트 추가지급</h5>
                            </div>
                            <div class="attn_goal">
                                <h3><span>3개월</span> 출석달성</h3>
                                <h1> <i class="fas fa-check"></i> </h1>
                                <h5> +500 포인트 추가지급</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="attn_btn">
                    <button onClick={this.onClickBtn}> <h2> 출석체크! </h2></button>
                </div>
                <hr />

                <div className="attn_cal"><Attendancecalender attendance = {attn_event}/></div>
            
            </div>
        )
    }
}

export default Attendancecontainer;