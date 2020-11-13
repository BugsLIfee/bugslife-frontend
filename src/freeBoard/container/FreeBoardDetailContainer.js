import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import Freeboarddetailview from '../view/detail/FreeboardDetailView'
import "../view/detail/scss/FreeboardDetailiCon.scss"


@inject("Store")
@observer

class Freeboarddetailcontainer extends Component {
    state=({like:false, likeCnt:0})

     onLikePost= async(like)=>{
        this.setState({like:like})
        
        if(this.state.like){
            this.setState({likeCnt:this.state.likeCnt-1})
        }else{
            this.setState({likeCnt:this.state.likeCnt+1})
        }

        await this.props.Store.freeboard.onLikePost(!like)
        console.log(this.state)
    }

    onDeletePost=(pwd, confirmed_pwd, postId)=>{
        let correct_pwd;
        if(pwd ===confirmed_pwd){
            correct_pwd = pwd
            alert("correct")
          }else{
              alert("비밀번호가 틀렸습니다.")
          }

          console.log("Freeboard Detail Container : " + correct_pwd, postId)
        this.props.Store.freeboard.onDeletePost(correct_pwd, postId)
    }

    componentDidMount=()=>{
        let match = this.props.match;
        this.props.Store.freeboard.freeboardPostSelect(`${match.params.post_id}`);
        this.props.Store.freeboard.freeboardCommentSelect(`${match.params.post_id}`);
    }


    render() {
        const {freeboard_detail} = this.props.Store.freeboard;
        const {comments} = this.props.Store.freeboard;
        const {post_likes} = this.props.Store.freeboard;
        const {freeboard_list} = this.props.Store.freeboard;


        //다음글 // 이전글 구현을 위한 index모음
        let freeboard_list_index = freeboard_list.map(val=> {return val.id});
        let curr_index = freeboard_detail.id;

        let curr_location = freeboard_list_index.indexOf(curr_index)

       

        let next_post_ind = curr_location === 0 ? "last post" : curr_location - 1;
        let last_post_ind = curr_location === freeboard_list_index.length-1 ? "first post" : curr_location + 1;

    
        // console.log("curr_location : "+curr_location);
        // console.log("next : "+next_post_ind);
        // console.log("last : " + last_post_ind)
        

        // console.log("index : " + freeboard_list.indexOf(freeboard_detail))
        // console.log(freeboard_detail)
        // console.log(freeboard_list)
        
        return (
            <div className="freeboard_detail_wrap">
                    <div className="free_borad_title"><h1>자유게시판</h1></div>
  
                <div className="freeboard_detail_postcontainer">
                    <Freeboarddetailview next_post_ind={next_post_ind} last_post_ind={last_post_ind} post_likes={post_likes} onDeletePost={this.onDeletePost} detail = {freeboard_detail} comments={comments} like={this.state.like} likeCnt={this.state.likeCnt} onLikePost={this.onLikePost} />
                </div>

            </div>
        )
    }
}
export default Freeboarddetailcontainer;