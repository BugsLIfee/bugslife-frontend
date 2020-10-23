import React, { Component } from "react";
import ReportModalContainer from "../../../report/container/ReportContainer"
import "../scss/post.scss"

export default class QuestionHeaderView extends Component {

    render() {
        
        const { question} = this.props;
        return(
            <div className="post_meta">
                <div className="question_title">
                    <i className="fab fa-quora question_mark"></i> 
                    {' ' + question.title} 
                </div>
                
                <div className="detail_post_subtitle">
                    <div>
                        <div className="writer_info">
                            <img src="../logo/logo_st.png" className="writer_icon" /> 
                            <div className="writer_info_text">
                                <div className="writer_id">{question.writer_id}</div>
                                <div className="writer_level">{question.writer_lv} </div>
                            </div>
                        </div>
                        <div className="_info">
                                <div className="upload_date"> {question.date} &nbsp; | &nbsp; </div>
                                <div className="views"> 조회수 {question.views}  &nbsp; | &nbsp; </div>
                                <div className="report"> <ReportModalContainer bt_text = {<div><i class="fas fa-ban"></i> 신고</div>} /> </div>
                        </div>
                    </div>
                    <div className="detail_points">
                        <div className="point">
                            {question.point}P
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
