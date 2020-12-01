import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Memberlistview from "../../view/member/MemberListView";
import "./scss/MemberContainer.scss"
import MemberSearch from "../../view/member/MemberSearch";
import { Pagination } from 'semantic-ui-react'

@inject("Store")
@observer
class MemberMngContainer extends Component {

  state=({ searchUser: "", page: 1 })

  componentDidMount=()=>{
    this.props.Store.oauth.getUserList();
  }

  onSearchMemeber=(userEmail)=>{
    this.setState({searchUser : userEmail })
  }

  onReset=()=>{
    return this.setState({ searchUser: "" })
  }

   reRenderingPage = (index) => {
    this.setState({...this.state, page:1})
  }


    setNextPage = (e) => {

    this.setState({...this.state ,page:e.target.getAttribute("value")})
  }  
  
  
  render() {
    let {userList} =this.props.Store.oauth;

   let selectUser = userList.filter(val=> {return val.email ===this.state.searchUser})[0]
   let totalPage = Math.floor(userList.length / 10)
   let userList_paging = userList.slice((this.state.page-1) *10, this.state.page*10)
   if(userList.length & 10) {
       totalPage++
   }
    return (
      <div>
        <div className="admin-member-container">
            <div className="admin-member-container-title">
            
              <h2><span role="img" aria-label="aria">😎 회원관리 </span></h2>
             
            </div>
            
            <div className="admin-member-search">
                <MemberSearch userList={userList} onReset={this.onReset} onSearchMemeber={this.onSearchMemeber}/>
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

                {
                  this.state.searchUser.length === 0
                ? (userList_paging.map((user, ind) =>{
                  return <Memberlistview key={ind} user={user}  />
                }))
               :          
              ( <Memberlistview user= {selectUser}/>)
              }
              <div className="admin-member_paging">
                <Pagination
                  boundaryRange={0}
                  defaultActivePage={1}
                  ellipsisItem={null}
                  firstItem={null}
                  lastItem={null}
                  siblingRange={2}
                  onPageChange={this.setNextPage}
                  totalPages={totalPage}
                />
                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default MemberMngContainer;
