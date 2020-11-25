import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import Freeboarddetailview from '../view/detail/FreeboardDetailView'
import "../view/detail/scss/FreeboardDetailiCon.scss"
import Swal from 'sweetalert2'

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

    onModifyPost= async (pwd, confirmed_pwd, postId)=>{
 
        let correct_pwd;
        if(pwd ===confirmed_pwd){
            correct_pwd = pwd
            
            console.log("비밀번호 Match")
            await this.props.Store.freeboard.onCheckPwd(postId, correct_pwd)
            let result = await this.props.Store.freeboard.pwd_check
          
            if(result){
                await this.props.history.push({
                    pathname: `/freeboard/edit/${postId}`
                   });
            
            }else{
                Swal.fire({
                    icon: 'error',
                    title: '비밀번호가 올바르지 않습니다.',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }

          }else{
            Swal.fire({
                icon: 'error',
                title: '비밀번호가 올바르지 않습니다.',
                showConfirmButton: false,
                timer: 1500
              })
          }
    }

    onDeletePost=async (pwd, confirmed_pwd, postId)=>{
        let correct_pwd;
        if(pwd ===confirmed_pwd){
            correct_pwd = pwd

         console.log("비밀번호 MAtch")
         await this.props.Store.freeboard.onCheckPwd(postId, correct_pwd)
         let result = await this.props.Store.freeboard.pwd_check
               
             if(result){
                await this.props.Store.freeboard.onDeletePost(postId)
          
                await  Swal.fire({
                    icon: 'success',
                    title: '삭제가 완료되었습니다.',
                    showConfirmButton: false,
                    timer: 1500
                })

          
                await this.props.history.push({
                    pathname: `/freeboard`
                   });
                await window.location.reload();

            }else{
               Swal.fire({
                icon: 'error',
                title: '비밀번호가 올바르지 않습니다.',
                showConfirmButton: false,
                imer: 1500
           })
         }

          }


    
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

        return (
            <div className="freeboard_detail_wrap">
                    <div className="free_borad_title"><h1>자유게시판</h1></div>
  
                <div className="freeboard_detail_postcontainer">
                    <Freeboarddetailview  post_likes={post_likes} onModifyPost={this.onModifyPost} onDeletePost={this.onDeletePost} detail = {freeboard_detail} comments={comments} like={this.state.like} likeCnt={this.state.likeCnt} onLikePost={this.onLikePost} />
                </div>

            </div>
        )
    }
}
export default Freeboarddetailcontainer;