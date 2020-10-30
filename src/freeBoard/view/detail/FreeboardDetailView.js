import React, { Component } from 'react'
import ReportModalContainer from '../../../report/container/ReportContainer'
import Freeboarddetailcomment from './FreeboardDetailComment';
import "./scss/FreeboardDetailpost.scss"

export default class Freeboarddetailview extends Component {

    onLikePost=()=>{
        this.props.onLikePost( !this.props.like)
    }

    render() {
        
        const freeboard_detail =this.props
        const post =freeboard_detail.detail.fb_post;
        const comment =freeboard_detail.detail.comment;
        const like =post.like;
        const report_cnt =post.report_cnt;
        const done = this.props.like ? "like_done" : "like_yet";

        return (
            <div>
                <div className="freeboard_detail_container">  
                    <div className="freeboard_detail_nav">
                        <a href="/freeboard"><h4>목록</h4></a>
                        <a href="/"><h4>이전글</h4></a>
                        <a href="/"><h4>다음글</h4></a>
                    </div>
                    <hr />
                    
                    <div className="freeboard_detail_content">
                        <div className="freeboard_detail_content_header">
                        <h2>{post.title}</h2>
                        <div className="content_meta"> 
                        <h4> {post.cate}</h4>        
                        <h5> 작성일 : {post.date}</h5>
                        <h5> 조회수 : {post.views}</h5>
                        <h5> 댓글 수 : [{comment.length}]</h5></div>
            
                        </div>  

                        <div className="freeboard_detail_content_body">
                        <p>{post.content}</p>
                
                        </div>
               
                        <div className="freeboard_detail_like-report">
                            <div  onClick={this.onLikePost}  className={"freeboard_detail_like freeboard_detail_like_sec " + done }>  
                            
                                <div className="freeboard_detail_like_sec_icon"  >  
                                    <h5>추천<img className = "freeboard_detail_like_img" src="../../logo/logo_green_blank.png" /></h5>
                                    </div>
                                    <h6>{like}</h6>
                                </div>
                          

                          
                            <div className="freeboard_detail_report freeboard_detail_like_sec "> 
                                <div className="freeboard_detail_like_sec_icon" >
                                    <ReportModalContainer bt_text= {<h5>신고 <img className = "freeboard_detail_report_img" src="../../logo/logo_red_blank.png" /></h5>} />
                                     {/* <h5 onClick>신고<img className = "freeboard_detail_report_img" src="../../logo/logo_red_blank.png" /></h5>  */}
                                    </div>
                                <h6>{report_cnt}</h6>
                            </div>
                        </div>
                        </div>      
                      <div className="">
                            <Freeboarddetailcomment comment ={comment} />
                        </div>    
                
                </div>
            </div>
        )
    }
}
