import React, { Component } from "react";
import ReportModalContainer from "../../../report/container/ReportContainer"
import "../scss/comment.scss"

export default class CommentView extends Component {

    render() {
        const { comment } = this.props;
        return(
            <div>
                <div className="comment">
                    <div className="comment_info">
                        <a href="/">{comment.writerName}</a> 
                        <span className="comment_date">{comment.registDate.substring(0,10)}</span>
                        <div className="report"> <ReportModalContainer bt_text = {<div>신고</div>} /> </div>
                    </div>
                    <div className="comment_body">
                        {comment.content}
                    </div>
                </div>
            </div>
        )
    }
}
