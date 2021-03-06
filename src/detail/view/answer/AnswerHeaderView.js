import React, { Component } from "react";
import ReportModalContainer from "../../../report/container/ReportContainer"
import "../scss/post.scss"

export default class AnswerHeaderView extends Component {

    render() {

        const { answer, currentUser, onDeleteAnswer, onModifyAnswer, writer } = this.props;

        return(
            <div className="post_meta">
                {writer? 
                <div className="writer_info"> 
                    <i className="fas fa-font answer_mark"></i>
                    {
                        writer.imageUrl ? 
                        <img src={writer.imageUrl} className="writer_icon" alt="writer_icon" /> 
                        : <img src="../logo/logo_st.png" className="writer_icon" alt="img" /> 
                    }
                    <div className="writer_info_text">
                        <a href={`/otherUser/${writer.id}`}>
                            <div className="writer_id"> {writer.name} </div>
                        </a>
                        <div className="writer_level"> Level {writer.level} </div>
                    </div>
                </div>
                    :
                    <></>  
                }
                <div className="_info">
                        <div className="upload_date"> {answer.registDate.substring(0,10)} | &nbsp;</div>
                        { currentUser.id !== answer.writerId ?
                            <div className="report"> 
                                <ReportModalContainer 
                                    bt_text = {<div><i className="fas fa-ban"></i> 신고 </div>} 
                                    boardType = "bug_board_answer"
                                    boardId = {answer.id}
                                /> 
                            </div> : <></>}
                        {currentUser.id === answer.writerId ? <div className="update" onClick={onModifyAnswer}> 수정 </div> : <></>} 
                        {currentUser.id === answer.writerId ? <div className="delete" onClick ={()=> {onDeleteAnswer(answer.id)}}> &nbsp; | &nbsp;삭제</div> : <></>} 
                </div>
            </div>
        )
    }
}
