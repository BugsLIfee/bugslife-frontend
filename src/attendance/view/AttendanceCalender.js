import React, { Component } from 'react'
import FullCalendar from  '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid' 


export default class Attendancecalender extends Component {
  
    render() {
        return (
            <div className="attendance_calendar_container">
                <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]}/>
            </div>
        )
    }
}
