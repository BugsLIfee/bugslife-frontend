import React, { Component } from 'react'

import "./scss/FreeboarDetailComm.scss"

export default class Freeboarddetailcommentform extends Component {

    state=({
        postId: "",
        content: "",
        registerDate: "",
        isHide : false,
        reportCnt : 0,
        writer:"",
        pwd: ""        
    })
    

    onSetDate=()=>{
        let today =  new Date();
        let Y =today.getFullYear()
        let M = today.getMonth();
        let D = today.getDate();

        return this.setState({...this.state, registerDate : `${Y}-${M}-${D}` })
    }


    onWriteComment=()=>{

        let comment = this.state

        if(comment.pwd==="" || comment.pwd===undefined || comment.pwd ===null){
           return alert("비밀번호를 입력해주세요.")
        }
        if(comment.content==="" || comment.content===undefined || comment.content ===null){
            return alert("내용을 입력해주세요.")
        }
        if(comment.writer==="" || comment.writer===undefined || comment.writer ===null){
            return alert("닉네임을 입력해주세요.")
        }

        console.log("====완성본=====")
        console.log(comment)

        this.props.onCreateComment(comment)
        console.log("====view 전달 완료=====")

        window.location.reload();
  
    }
 


    render() {
        const {visible, cur_id, select_id} = this.props;

        let today =  new Date();
        let Y =today.getFullYear()
        let M = today.getMonth();
        let D = today.getDate();

        let date_ = `${Y}-${M}-${D}`

        // const postId = this.props.postId

        return (
            <div>
                { visible && (cur_id === select_id) ?  
                    <form className="freeboard_comment_form">
                        <div className="freeboard_comment_userInfo">
                            <input className= "comment_userinfo_input comment_userInfo_id" type="text" placeholder="닉네임" onChange={(e)=>this.setState({...this.setState, writer:e.target.value, registerDate:date_})}/>
                            <input className= "comment_userinfo_input comment_userInfo_pwd"  type="password" placeholder="비밀번호" onChange={(e)=>this.setState({...this.setState, pwd:e.target.value, postId: this.props.postId})}/>
                        </div>   

                        <div className="freeboard_detail_comment_input">
                        <input className="comment_input_form" type="text" placeholder="댓글을 작성해보세요." onChange={(e)=>this.setState({...this.setState, content:e.target.value})}></input>
                    
                    {/* <Button as ={Link} to={`/freeboard/detail/${postId}`} onClick={this.onWriteComment} >댓글 작성</Button> */}
                    <button  type="submit" className="comment_btn" onClick={this.onWriteComment}>댓글 작성</button>
                    </div> </form>: <div />
                }
            </div>
        )
    }
}
