import React, { Component } from 'react'

export default class Freeboarddetailcommentform extends Component {

    
    render() {
        const {visible, cur_id, select_id} = this.props;

        return (
            <div>
                { visible && (cur_id === select_id) ?  
                    <div className="freeboard_comment_form">
                        <div className="freeboard_comment_userInfo">
                            <input className= "comment_userinfo_input comment_userInfo_id" type="text" placeholder="닉네임"/>
                            <input className= "comment_userinfo_input comment_userInfo_pwd"  type="password" placeholder="비밀번호"/>
                        </div>   

                        <div className="freeboard_detail_comment_input">
                        <input className="comment_input_form" type="text" placeholder="댓글을 작성해보세요."></input>
                    <button className="comment_btn" type="submit">댓글 작성</button>
                    </div> </div>: <div />
                }
            </div>
        )
    }
}
