import React, { Component } from "react";
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

onLogout=()=>{
  this.props.Store.oauth.onLogout();
  
    swal({
        title: "로그아웃하시겠습니까?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willLogout) => {
        if (willLogout) {
          window.location.href="/";
          return swal("로그아웃되셨습니다!!", {
            icon: "success",
          });
        } else {
          swal("일시적인 장애로 로그아웃 실패! ");
        }
        
    });
  
}

  render() {
    const oauth = this.props.Store.oauth;
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
            <a href="/contact/my">
              {" "}
              <h4>문의하기</h4>
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