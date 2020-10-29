import React, { Component } from "react";
import "./scss/nav.scss";
import {observer,inject} from "mobx-react";
import { NavLink } from "react-router-dom";

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
  render() {

 
    const oauth = this.props.Store.oauth;
    return (
      <nav>
         <div className="responsive_nav">
   
            {" "}
            <h2 onClick={this.onShowNav}> <i class="fas fa-bars"></i></h2>
       
            <div className={this.state.show == true? "responsive_nav_content" : "noShow"}>
        {this.props.Store.oauth.isLogin?
      (
                  <div>
            {" "}
            <a href="/profile">
              <h4>마이페이지샘플</h4>
            </a>
          </div>
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
            {" "}
            <a href="/myPage">
              <h4>마이페이지</h4>
            </a>
          </div>

          <div>
            <a href="/admin/member">
              {" "}
              <h4>관리자</h4>
            </a>
          </div>

          <div>
            <a href="/contact/my">
              {" "}
              <h4>문의하기</h4>
            </a>
          </div>
        </div>
        </div> 
      
      <div className="default_nav">
        {this.props.Store.oauth.isLogin?
      (
        <>
                  <div>
            {" "}
            <a href="/profile">
              <h4>마이페이지샘플</h4>
            </a>
          </div>
            <div>
            {" "}
          <a onClick={()=>this.props.Store.oauth.onLogout()}>로그아웃</a>
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
            {" "}
            <a href="/myPage">
              <h4>마이페이지</h4>
            </a>
          </div>

          <div>
            <a href="/admin/member">
              {" "}
              <h4>관리자</h4>
            </a>
          </div>

          <div>
            <a href="/contact/my">
              {" "}
              <h4>문의하기</h4>
            </a>
          </div>
        </div>
        

      
      </nav>
    );
  }
}
export default  Nav;