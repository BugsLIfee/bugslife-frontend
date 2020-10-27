import React, { Component } from 'react'
import Attendancecalender from '../view/AttendanceCalender'
import "../view/scss/calendar.scss"

export default class Attendancecontainer extends Component {
   
    render() {
        return (
            <div className="attn_wrap">
                <div className="attn_img">
                    <img src="../../banner/attendance_banner.001.png" />
                    <h5>
                    벅스라이프에 <strong>매일매일 </strong>출석체크하면
                    <br />포인트가 차곡차곡!
                    </h5>
                </div>
                <div className="attn_btn">
                    <button> <h2> 출석체크! </h2></button>
                </div>

                <div className="attn_cal"><Attendancecalender /></div>
            
            </div>
        )
    }
}
