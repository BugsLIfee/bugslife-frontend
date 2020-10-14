import React, { Component } from 'react'
import SignUp from '../../user/view/SignUp'
import MyPageEditView from './MyPage_EditView'

export default class MypageUser extends Component {

    render() {
        return (
            <div className = "Mypage_user_container">
              <h1>User</h1>  
                <MyPageEditView user={this.props.user} onSubmitForm={this.props.onSubmitForm} />
            </div>
        )
    }
}
