import React, { Component } from 'react'
import ReportModalContainer from '../../../report/container/ReportContainer'
import Freeboarddetailcommentform from './ FreeboardDetailCommentForm'
import "./scss/FreeboarDetailComm.scss"

export default class Freeboarddetailcomment extends Component {
    state = { visible: false }

    onCommentClick=()=>{
        console.log(this.state.visible)
        this.setState({visible: !this.state.visible});
    }

    render() {
        console.log(this.state.visible)
        const comment =this.props.comment
        return (
            <div className="freeboard_detail_comment_container">
                 {comment.map((com)=>{
                    return <div className="freeboard_detail_comment"> 

                    <div className="freeboard_comment_sec">
                        <div className="freeboard_detail_comment_content">
                            <span className="freeboard_comment_info"> <h6>익명의 고수</h6> <p>{com.date}</p></span>
                            <p id="freeboard_comment_info_txt">{com.content}</p>
                        </div>
                                
                         <div className="freeboard_detail_comment_btn">
                            <h6 onClick={this.onCommentClick} >답글</h6>
                            <h6>삭제</h6>
                            <ReportModalContainer bt_text= {<h6>신고</h6>} />
                        </div>
                    </div>

                    <div className={this.state.visible === true ?"show":"hide"}> 
                        <Freeboarddetailcommentform />
                      </div>
                    </div>
                        })}
                        <Freeboarddetailcommentform />
                 </div>
        )
    }
}
