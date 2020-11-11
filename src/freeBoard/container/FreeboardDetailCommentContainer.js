import React, { Component } from 'react'
import ReportModalContainer from '../../report/container/ReportContainer'
import Freeboarddetailcommentform from '../view/detail/ FreeboardDetailCommentForm'
import Freeboarddeleteform from '../view/detail/FreeboardDeleteForm'
import "../view/detail/scss/FreeboarDetailComm.scss"
import Freeboardsubcommcontainer from './FreeboardSubcommContainer'

export default class Freeboarddetailcommentcontainer extends Component {
    state = { visible: false, comment_id: -1, delete_com: false, showBar: false, select_comm:-1 }

    onCommentClick=(id)=>{
        this.setState({visible: !this.state.visible});
        this.setState({delete_com:false});
        this.setState({comment_id: id});
    }
    
    onCommentDelete=(id)=>{
        this.setState({delete_com: !this.state.delete_com});
        this.setState({visible: false});
        this.setState({comment_id: id});
    }

    onShowComm =(id)=>{
        this.setState({showBar:!this.state.showBar, select_comm:id})
    }


    render() {
        const select_comm= this.state.select_comm;
        let comments =this.props.comments;
        console.log(comments)

        return (
            <div className="freeboard_detail_comment_container">
       
                {comments == undefined ? (<div><h6></h6></div>)    
                        :               
                 (
                     comments.map((com)=>{
                    return <div className="freeboard_detail_comment" key={com.id}> 
                        <div className="freeboard_comment_sec">
                        <div className="freeboard_detail_comment_content">
                            <span className="freeboard_comment_info"> 
                                <h6>익명의 고수</h6> 
                                <p>{com.registerDate}</p>
                            </span>
                            <p id="freeboard_comment_info_txt">{com.content}</p>
                        </div>
                    
                        <div className="freeboard_detail_comment_responsive">
                            <h4 className= "freeboard_detail_comment_btn_responsive" onClick={()=>this.onShowComm(com.id)}><i class="fas fa-ellipsis-v"></i></h4>
                           

                            <div className={"freeboard_detail_comment_rep_btn_container " + ((select_comm === com.id) && (this.state.showBar)? "showBar": "hideBar")}>
                                <div className="freeboard_detail_comment_rep_btn">
                                    <h6 onClick={()=>this.onCommentClick(com.id)} >답글</h6>
                                    <h6 onClick={()=>this.onCommentDelete(com.id)}> 삭제</h6>
                                    <ReportModalContainer bt_text= {<h6>신고</h6>} />
                                </div>
                            </div>

                        </div>
                   
                         <div className="freeboard_detail_comment_btn">
                            <h6 onClick={()=>this.onCommentClick(com.id)} >답글</h6>
                            <h6 onClick={()=>this.onCommentDelete(com.id)}> 삭제</h6>
                            <ReportModalContainer bt_text= {<h6>신고</h6>} />
                        </div>
                 
       
                    </div>



                        <div className="visible_comment_form">
                            <Freeboarddetailcommentform visible={this.state.visible} cur_id={com.id} select_id={this.state.comment_id} />
                        </div>
                       
                        <div className="visible_delete_form">
                            <Freeboarddeleteform user_pwd ={com.pwd} delete_com={this.state.delete_com} cur_id={com.id} select_id={this.state.comment_id}/>
                        </div>

                        <div className="freeboard_subComment_container">
                            <Freeboardsubcommcontainer comment= {com}/>
                        </div>

                    </div>
                     }))          
            }

                        <div className="default_comment_form">
                        <Freeboarddetailcommentform visible={true} cur_id={0} select_id={0}/>
                        </div>

                    
                 </div>
        )
    }
}
