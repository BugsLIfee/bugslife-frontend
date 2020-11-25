import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import ReportModalContainer from "../../../report/container/ReportContainer"
import "../scss/post.scss"

export default class AnswerHeaderView extends Component {

    render() {

        const { answer, currentUser, onDeleteAnswer, onModifyAnswer , onOpenChat} = this.props;

        return(
            <div className="post_meta">
                <div className="writer_info"> 
                    <i className="fas fa-font answer_mark"></i>
                    {
                        currentUser.imageUrl ? 
                        <img src={currentUser.imageUrl} className="writer_icon" alt="writer_icon" /> 
                        : <img src="../logo/logo_st.png" className="writer_icon" alt="img" /> 
                    }
                    <div className="writer_info_text">
                        <div className="writer_id"> {answer.writerName} </div>
                        <div className="writer_level"> Level {answer.writerLevel} </div>
                    </div>
                    <div className="writer_chat">
                        <Button onClick={() =>onOpenChat(answer.writerId, currentUserId)}>채팅요청하기</Button>
                    </div>
                </div>
                <div className="_info">
                        <div className="upload_date"> {answer.registDate.substring(0,10)} | &nbsp;</div>
                        { currentUser.id !== answer.writerId ?
                            <div className="report"> <ReportModalContainer bt_text = {<div><i className="fas fa-ban"></i> 신고 </div>} /> </div> : <></>}
                        {currentUser.id === answer.writerId ? <div className="update" onClick={onModifyAnswer}> 수정 </div> : <></>} 
                        {currentUser.id === answer.writerId ? <div className="delete" onClick ={()=> {onDeleteAnswer(answer.id)}}> &nbsp; | &nbsp;삭제</div> : <></>} 
                </div>
            </div>
        )
    }
}
