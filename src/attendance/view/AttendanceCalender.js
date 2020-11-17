import React, { Component } from 'react'
import FullCalendar from  '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid' 


export default class Attendancecalender extends Component {


    render() {

        let attendance = this.props.attendance;
        let attn_event;

        if(attendance!==undefined){
          attn_event = attendance.map(val=> {return {title : "출석완료" , date : val.attendDate}})
        }
        return (
            <div className="attendance_calendar_container">
                <FullCalendar 
                defaultView="dayGridMonth" 
                plugins={[dayGridPlugin]}
                events={attn_event}/>
            </div>
        )
    }
}
