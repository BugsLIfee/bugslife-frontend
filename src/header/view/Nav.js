import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";

import "./scss/nav.scss";
import {observer,inject} from "mobx-react";
import swal from 'sweetalert';

@inject("Store")
@observer
class Nav extends Component {
  constructor(props){
    super(props);
    this.state=({show:false})
  }


  onShowNav=()=>{
    this.setState({show: !this.state.show})
  }

  componentDidMount() {
    this.props.Store.oauth.loadCurrentlyLoggedInUser();
  }

  onLogout = async() =>{

   let result =  await swal({
        title: "로그아웃하시겠습니까?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    if(result){
      document.location.href = "/"
      await this.props.Store.oauth.onLogout();
      await swal("로그아웃되셨습니다!!", {
              icon: "success",
           });
    }else{
      swal("일시적인 장애로 로그아웃 실패! ");
    }
  
}

  render() {
    const oauth = this.props.Store.oauth;
    // console.log("어드민? ?" , oauth.getIsAdmin)
   // console.log("header-nave-props",this.props);
    return (
      <nav>
         <div className="responsive_nav">
   
            {" "}
            <h2 onClick={this.onShowNav}> <i className="fas fa-bars"></i></h2>
       
            <div className={this.state.show === true? "responsive_nav_content" : "noShow"}>
        {oauth.isLogin?
        (
          <>
       
            <div>
            {" "}
          <h4 onClick={()=>this.onLogout()}>로그아웃</h4>
          </div>
          <div>
            <a href="/myPage">
              {" "}
              <h4>마이페이지</h4>
            </a>
          </div>
          </>
        )  
        :(
        <div>
            <a href="/login">
              {" "}
              <h4>로그인</h4>
            </a>
          </div>
         )}
          <div>
            <a href="/edu">
              {" "}
              <h4>교육과정리뷰</h4>
            </a>
          </div>
          <div>
            <a href="/list">
              {" "}
              <h4>버그질문</h4>
            </a>
          </div>

          <div>
            <a href="/freeboard">
              {" "}
              <h4>자유게시판</h4>
            </a>
          </div>

          {oauth.isAdmin?(
          <div>
            <a href="/admin/member">
              {" "}
              <h4>관리자</h4>
            </a>
          </div>
        ):(<section></section>)}

          <div>
            <a href="/contact/info">
              {" "}
              <h4>공지 & 문의</h4>
            </a>
          </div>
        </div>
        </div> 
      
      <div className="default_nav">
        {oauth.isLogin?
      (
        <>

            <div>
            {" "}
          <h4 onClick={()=>this.onLogout()}>로그아웃</h4>
          </div>
          <div>
            <a href="/myPage">
              {" "}
              <h4>마이페이지</h4>
            </a>
          </div>
          </>
      )  
      :(
          <div>
            <a href="/login">
              {" "}
              <h4>로그인</h4>
            </a>
          </div>
      )}
          <div>
            <a href="/edu">
              {" "}
              <h4>교육과정리뷰</h4>
            </a>
          </div>
          <div>
            <a href="/list">
              {" "}
              <h4>버그질문</h4>
            </a>
          </div>

          <div>
            <a href="/freeboard">
              {" "}
              <h4>자유게시판</h4>
            </a>
          </div>
          <div>
            <a href="/all-chat">
              {" "}
              <h4>모두의 채팅</h4>
            </a>
          </div>

      {oauth.getIsAdmin?(
          <div>
            <a href="/admin/member">
              {" "}
              <h4>관리자</h4>
            </a>
          </div>

        ):(
          <></>
          )}
          <div>
            <a href="/contact/info">
              {" "}
              <h4>공지 & 문의</h4>
            </a>
          </div>
        </div>
        

      
      </nav>
    );
  }
}
export default  Nav;