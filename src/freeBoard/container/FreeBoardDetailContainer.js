import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import Freeboarddetailview from '../view/detail/FreeboardDetailView'
import "../view/detail/scss/FreeboardDetailiCon.scss"






@inject("Store")
@observer

class Freeboarddetailcontainer extends Component {
    state=({like:false})

     onLikePost= async(like)=>{
        this.setState({like:like})
        await this.props.Store.freeboard.onLikePost(!like)
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

        return (
            <div className="freeboard_detail_wrap">
                    <div className="free_borad_title"><h1>자유게시판</h1></div>
  
                <div className="freeboard_detail_postcontainer">
                    <Freeboarddetailview onDeletePost={this.onDeletePost} detail = {freeboard_detail} comments={comments} like={this.state.like} onLikePost={this.onLikePost} />
                </div>

            </div>
        )
    }
}
export default Freeboarddetailcontainer;