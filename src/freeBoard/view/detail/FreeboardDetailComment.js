import React, { Component } from 'react'
import ReportModalContainer from '../../../report/container/ReportContainer'
import "./scss/FreeboarDetailComm.scss"

export default class Freeboarddetailcomment extends Component {
    render() {
        const comment =this.props.comment
        return (
            <div className="freeboard_detail_comment_container">
                 {comment.map((com)=>{
                    return <div className="freeboard_detail_comment"> 
                        <div className="freeboard_detail_comment_content">
                            <span className="freeboard_comment_info"> <h6>익명의 고수</h6> <p>{com.date}</p></span>
                            <p id="freeboard_comment_info_txt">{com.content}</p>
                        </div>
                        <div className="freeboard_detail_comment_btn">
                            <h6>답글</h6>
                            <h6>삭제</h6>
                            <ReportModalContainer bt_text= {<h6>신고</h6>} />
                    
                        </div>
                    </div>
                        })}

             <div className="freeboard_comment_sec">
                 <div className="freeboard_comment_userInfo">
                     <input className= "comment_userinfo_input comment_userInfo_id" value="" type="text" placeholder="닉네임"/>
                     <input className= "comment_userinfo_input comment_userInfo_pwd" value="" type="password" placeholder="비밀번호"/>
                     </div>   

                <div className="freeboard_detail_comment_input">
                    <input className="comment_input_form" type="text" placeholder="댓글을 작성해보세요."></input>
                    <button className="comment_btn" type="submit">댓글 작성</button>
                </div>
                
            </div>
         
            </div>
        )
    }
}
