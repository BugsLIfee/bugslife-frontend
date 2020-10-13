import React, { Component } from 'react'
import MypageUserEditView from "./MyPage_UserEditView"



export default class MypageUser extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.user)
        return (
            <div className = "Mypage_user_container">
              <h1>User</h1>  
              
                <div className="Mypage_editForm">
                    <MypageUserEditView user = {this.props.user} />
                </div>
            </div>
        )
    }
}
