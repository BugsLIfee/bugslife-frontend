import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Memberlistview from "../../view/member/MemberListView";
import "./scss/MemberContainer.scss"
import MemberSearch from "../../view/member/MemberSearch";

@inject("Store")
@observer
class MemberMngContainer extends Component {

  state=({searchUser:[]})
  componentDidMount=()=>{
    this.props.Store.oauth.getUserList();
  }

  onSearchMemeber=(userList)=>{
    this.setState({searchUser : userList})
  }
  
  render() {
    let {userList} =this.props.Store.oauth;

    if(this.state.searchUser.length>0){
      userList = this.state.searchUser;
    }

    return (
      <div>
        <div className="admin-member-container">
            <div className="admin-member-container-title">
            <span role="img" aria-label="aria">
              <h2>😎 회원관리</h2>
              </span>
            </div>
            
            <div className="admin-member-search">
                <MemberSearch userList={userList}/>
            </div>

            <div className="admin-member-list-container">
              <div className="admin-member-list-header">
                <div className="amin-member-header-sec">
                  <p>선택</p>
                </div>
                <div className="amin-member-header-sec">
                  <p>아이디</p>
                </div>
                <div className="amin-member-header-sec">
                  <p>닉네임</p>
                </div>
                <div className="amin-member-header-sec">
                  <p>이메일</p>
                </div>
                <div className="amin-member-header-sec">
                  <p>가입일</p>
                </div>
                <div className="amin-member-header-sec">
                  <p>탈퇴여부</p>
                </div>
                <div className="amin-member-header-sec">
                  <p>보유 포인트</p>
                </div>
              </div>

                {userList.map((user, ind) =>{
                  return <Memberlistview key={ind} user={user} />
                })}
            </div>

        </div>
      </div>
    );
  }
}

export default MemberMngContainer;
