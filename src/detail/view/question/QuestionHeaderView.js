import React, { Component } from "react";
import ReportModalContainer from "../../../report/container/ReportContainer"
import "../scss/post.scss"
import { Link } from "react-router-dom"

export default class QuestionHeaderView extends Component {

    render() {
        
        const { question, currentUser, onDeleteQuestion, userList} = this.props;
        const writer = userList.find(user => {
            return question.writerId === user.id
        })

        return(
            <div className="post_meta">
                <div className="question_title">
                    <i className="fab fa-quora question_mark"></i> 
                    {' ' + question.title} 
                </div>
                
                <div className="detail_post_subtitle">
                    <div>
                        <div className="writer_info">
                            {
                            writer ? <>
                                {
                                    writer.imageUrl ? 
                                    <img src={writer.imageUrl} className="writer_icon" alt="writer_icon" /> 
                                    : <img src="../logo/logo_st.png" className="writer_icon" alt="img" /> 
                                }
                                <div className="writer_info_text">
                                    <a href ={`/otherUser/${writer.id}`}>
                                        <div className="writer_id">{writer.name}</div>
                                    </a>
                                    <div className="writer_level">Level {writer.level} </div>
                                </div></> : ""
                            }
                        </div>
                        <div className="_info">
                            <div className="upload_date"> {question.registDate.substring(0,10)} &nbsp; | &nbsp; </div>
                            <div className="views"> 조회수 {question.view}  &nbsp; | &nbsp; </div>
                            { currentUser.id !== question.writerId ?
                                <div className="report"> 
                                    <ReportModalContainer 
                                        bt_text = {<div><i className="fas fa-ban"></i> 신고</div>} 
                                        boardType = "bug_board_question"
                                        boardId = {question.id}
                                        /> 
                                </div> : <></>}
                            {currentUser.id === question.writerId ? 
                                <Link to={`/detail/modify`} className="title">
                                    <div className="update">  수정 &nbsp;| &nbsp;</div>
                                </Link>
                                :
                                <></>
                            } 
                            {currentUser.id === question.writerId ? <a href="/list/"><div className="delete" onClick = {() => {onDeleteQuestion(question.id)}}> 삭제&nbsp;</div> </a>: <></>} 
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
