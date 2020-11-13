import React, { Component } from 'react'
import ReportModalContainer from '../../../report/container/ReportContainer'
import Freeboarddetailcommentcontainer from '../../container/FreeboardDetailCommentContainer';
import "./scss/FreeboardDetailpost.scss"

export default class Freeboarddetailview extends Component {
    state=({ likeCnt:0 })

    onLikePost=async ()=>{
        this.props.onLikePost(!this.props.like)
        // this.setState({like:!this.state.like})

        // if (this.props.like ==true){
        //     // console.log(this.state.likeCnt-1)
        //    await this.setState({likeCnt : this.state.likeCnt-1})
        // }else{
        //     // console.log(this.state.likeCnt+1)
        //     await this.setState({likeCnt : this.state.likeCnt+1})
        // }
        // console.log(this.state)
        this.forceUpdate();
    }

    onDeletePost=()=>{
        let pwd =  prompt("게시글 비밀번호")
        let confirmed_pwd = prompt("비밀번호 확인")
        let postId = this.props.detail.id;
        this.props.onDeletePost(pwd, confirmed_pwd, postId);
    }



    static getDerivedStateFromProps(nextProps, prevState) {
        let likes_props = nextProps.detail.likes
        if(likes_props!==prevState.likeCnt){
            return { likeCnt : likes_props}
        }
        // console.log(likes_props!==prevState.likeCnt)
        return null
    }


    render() { 

        const post =this.props.detail;
        const comments =this.props.comments;
        const done = this.props.like ? "like_done" : "like_yet";

        return (
            <div>
                <div className="freeboard_detail_container">  
                    <div className="freeboard_detail_nav">
                        <div className="freeboard_nav_left" >
                            <a href="/freeboard"><h4>목록</h4></a>
                            <a href="/"><h4>이전글</h4></a>
                            <a href="/"><h4>다음글</h4></a>
                        </div>

                        <div className="freeboard_nav_right">
                            <a href="/"><h4>수정</h4></a>
                            <a href="/" onClick={this.onDeletePost}><h4>삭제</h4></a>
                        </div>

                    </div>
                    <hr />
                    
                    <div className="freeboard_detail_content">
                        <div className="freeboard_detail_content_header">
                        <h2>{post.title}</h2>
                        <div className="content_meta"> 
                        <h4> {post.cate}</h4>        
                        <h5> 작성일 : {post.registerDate}</h5>
                        <h5> 조회수 : {post.viewCnt}</h5>
                        <h5> 댓글 수 : [{comments.length}]</h5>
            
                        </div> 
                        </div>  

                        <div className="freeboard_detail_content_body">
                        <p> {post.content}</p>
                
                        </div>
               
                        <div className="freeboard_detail_like-report">
                            <div onClick={this.onLikePost}  className={"freeboard_detail_like freeboard_detail_like_sec " + done }>  
                            
                                <div className="freeboard_detail_like_sec_icon"  >  
                                    <h5>추천<img className = "freeboard_detail_like_img" src="../../logo/logo_green_blank.png" alt="freeboardDetail_logo" /></h5>
                                    </div>
                                    <h6>{ post.likes + this.props.likeCnt}</h6>
                                </div>
                          

                          
                            <div className="freeboard_detail_report freeboard_detail_like_sec "> 
                                <div className="freeboard_detail_like_sec_icon" >
                                    <ReportModalContainer bt_text= {<h5>신고 <img className = "freeboard_detail_report_img" src="../../logo/logo_red_blank.png" alt="logo_red" /></h5>} />
                                     {/* <h5 onClick>신고<img className = "freeboard_detail_report_img" src="../../logo/logo_red_blank.png" /></h5>  */}
                                    </div>
                                <h6>{post.reportCnt}</h6>
                            </div>
                        </div>
                        </div>      
                      <div className="">
                            <Freeboarddetailcommentcontainer postId={post.id} comments ={comments} />
                       </div>    
                
                </div>
            </div>
        )
    }
}
