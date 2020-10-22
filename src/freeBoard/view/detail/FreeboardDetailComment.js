import React, { Component } from 'react'
import ReportModalContainer from '../../../report/container/ReportContainer'
import Freeboarddetailcommentform from './ FreeboardDetailCommentForm'
import "./scss/FreeboarDetailComm.scss"

export default class Freeboarddetailcomment extends Component {
    state = { visible: false, com_id: 0 }

  
        
    onCommentClick=(ind)=>{
        console.log(this.state.visible)
        this.setState({visible: !this.state.visible, com_id: ind});
    }
    
    

    render() {
        console.log(this.state.visible, this.state)
        
        const comment =this.props.comment
        const com_id = this.state.com_id
        return (
            <div className="freeboard_detail_comment_container">
                 {comment.map((com, ind)=>{
                  
                    return <div key={ind} className="freeboard_detail_comment"> 

                    <div className="freeboard_comment_sec">
                        <div className="freeboard_detail_comment_content">
                            <span className="freeboard_comment_info"> <h6>익명의 고수</h6> <p>{com.date}</p></span>
                            <p id="freeboard_comment_info_txt">{com.content}</p>
                        </div>
                                
                         <div className="freeboard_detail_comment_btn">
                         
                            <h6 onClick={()=>{
                             
                                 this.setState({visible: !this.state.visible, com_id: ind});
                                 console.log(this.state)
                            }} >답글</h6>
                            <h6>삭제</h6>
                            <ReportModalContainer bt_text= {<h6>신고</h6>} />
                        </div>
                    </div>

                    <div> 
                        <Freeboarddetailcommentform visible={com_id==ind? "show" : "hide"}/>
                      </div>
                    </div>
                        })}
                        <Freeboarddetailcommentform />
                 </div>
        )
    }
}
