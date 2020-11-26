import React, { Component } from "react";
import ReportModalContainer from "../../../report/container/ReportContainer"
import "../scss/comment.scss"

export default class CommentView extends Component {

    render() {
        const { comment, currentUserId, onDeleteComment} = this.props;
        return(
            <div>
                <div className="comment">
                    <div className="comment_info">
                        <a href="/">{comment.writerName}</a> 
                        <span className="comment_date">{comment.registDate.substring(0,10)} | </span>
                        { currentUserId !== comment.writerId ?
                            <div className="report"> 
                            <ReportModalContainer 
                                bt_text = {<div><i className="fas fa-ban"></i> 신고 |</div>}  
                                boardType = "but_board_answer"
                                boardId = {comment.id}
                            />
                            </div> : <></>}
                        {currentUserId === comment.writerId ? <div className="update">  수정&nbsp; | </div> : <></>} 
                        {currentUserId === comment.writerId ? <div className="delete" onClick = {() => {onDeleteComment(comment.id)}} > 삭제</div> : <></>} 
                    </div>
                    <div className="comment_body">
                        {comment.content}
                    </div>
                </div>
            </div>
        )
    }
}
