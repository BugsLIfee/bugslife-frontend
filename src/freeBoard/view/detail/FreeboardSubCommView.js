import React, { Component } from 'react'
import ReportModalContainer from '../../../report/container/ReportContainer';
import "./scss/FreeboardSubComm.scss" 

export default class Freeboardsubcommview extends Component {
    state = { visible: false, comment_id: -1, delete_com: false, showBar: false, select_comm:-1 }

    render() {
        let {subcomment} = this.props;
        const select_comm = this.state.select_comm;

        return (
            <div class="freeboard_subcomm_con">
                <h5 className="freeboard_subcomm_sec_icon">⎿</h5>
                <div className="freeboard_subcomm_sec">

                <div className="freeboard_subcomm_sec_content">
                    <span className="freeboard_subcomm_info">
                        
                        <h6>{subcomment.writer}</h6>
                        <p>{subcomment.registerDate}</p>
                    </span> 
                     <p className="freeboard_subcomm_txt">{subcomment.content}</p>
                </div>
            </div>
            <div className="freeboard_detail_comment_responsive">
                    <h4 className= "freeboard_detail_comment_btn_responsive" onClick={()=>this.onShowComm(subcomment.id)}>
                        <i class="fas fa-ellipsis-v"></i>
                    </h4>
                           

                    <div className={"freeboard_detail_comment_rep_btn_container " + ((select_comm === subcomment.id) && (this.state.showBar)? "showBar": "hideBar")}>
                        <div className="freeboard_detail_comment_rep_btn">
                            <h6 onClick={()=>this.onCommentDelete(subcomment.id)}> 삭제</h6>
                            <ReportModalContainer bt_text= {<h6>신고</h6>} />
                        </div>
                    </div>
               
                   
                <div className="freeboard_detail_comment_btn">
                    <h6 onClick={()=>this.onCommentDelete(subcomment.id)}> 삭제</h6>
                    <ReportModalContainer bt_text= {<h6>신고</h6>} />
                </div>

            </div>
        </div>
        )
    }
}
