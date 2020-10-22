import React, { Component } from 'react'
import "./scss/FreeboarDetailComm.scss"

export default class Freeboarddetailcomment extends Component {
    render() {
        const comment =this.props.comment
        return (
            <div className="">
                 {comment.map((com)=>{
                    return <div className="freeboard_detail_comment"> 
                        <div className="freeboard_detail_comment_content">
                            <span className="freeboard_comment_info"> <h6>익명의 고수</h6> <p>{com.date}</p></span>
                            <p id="freeboard_comment_info_txt">{com.content}</p>
                        </div>
                        <div className="freeboard_detail_comment_btn">
                            <a href="#"><h6>답글</h6></a>
                            <a href="#"> <h6>신고</h6></a>
                        </div>
                    </div>
                        })}
                
            </div>
        )
    }
}
