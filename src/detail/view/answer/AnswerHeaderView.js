import React, { Component } from "react";
import "../scss/post.scss"

export default class AnswerHeaderView extends Component {

    render() {
        const { answer } = this.props;
        console.log("ANSWERView");
        return(
            <div class="post_meta">
                <div class="writer_info"> 
                    <i class="fas fa-font answer_mark"></i>
                    <img src="../logo/logo_st.png" class="writer_icon" /> 
                    <div class="writer_info_text">
                        <div class="writer_id"> {answer.writer_id} </div>
                        <div class="writer_level"> {answer.writer_lv} </div>
                    </div>
                </div>
                <div className="post_info">
                        <div class="upload_date"> {answer.date} &nbsp; | &nbsp; </div>
                        <div class="report"> <a href="#"> <i class="fas fa-ban"></i> 신고 </a> </div>
                </div>
            </div>
        )
    }
}
