import React, { Component } from "react";
import ReportModalContainer from "../../../report/container/ReportContainer"
import "../scss/post.scss"

export default class AnswerHeaderView extends Component {

    render() {
        const { answer } = this.props;
        console.log("ANSWERView");
        return(
            <div className="post_meta">
                <div className="writer_info"> 
                    <i className="fas fa-font answer_mark"></i>
                    <img src="../logo/logo_st.png" className="writer_icon" alt="img" /> 
                    <div className="writer_info_text">
                        <div className="writer_id"> {answer.writerName} </div>
                        <div className="writer_level"> Level {answer.writerLevel} </div>
                    </div>
                </div>
                <div className="_info">
                        <div className="upload_date"> {answer.registDate.substring(0,10)} &nbsp; | &nbsp; </div>
                        <div className="report"> <ReportModalContainer bt_text = {<div><i className="fas fa-ban"></i> 신고</div>} /> </div>
                </div>
            </div>
        )
    }
}
