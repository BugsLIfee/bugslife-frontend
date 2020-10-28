import React, { Component } from 'react'
import Freeboarddetailcomment from './FreeboardDetailComment';
import "./scss/FreeboardDetailpost.scss"

export default class Freeboarddetailview extends Component {

    render() {
        
        const freeboard_detail =this.props
        const post =freeboard_detail.detail.fb_post;
        const comment =freeboard_detail.detail.comment;

        return (
            <div>
                <div className="freeboard_detail_container">  
                    <div className="freeboard_detail_nav">
                        <a href="/freeboard"><h4>목록</h4></a>
                        <a href="#"><h4>이전글</h4></a>
                        <a href="#"><h4>다음글</h4></a>
                    </div>
                    <hr />

                    
                    <div className="freeboard_detail_content">
                        <div className="freeboard_detail_content_header">
                        <h2>{post.title}</h2>
                        <div className="content_meta"> 
                        <h4> {post.cate}</h4>        
                        <h5> 작성일 : {post.date}</h5>
                        <h5> 조회수 : {post.views}</h5>
                        <h5> 댓글 수 [{comment.length}]</h5></div>
            
                        </div>  

                        <div className="freeboard_detail_content_body">
                        <p>{post.content}</p>
                
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
