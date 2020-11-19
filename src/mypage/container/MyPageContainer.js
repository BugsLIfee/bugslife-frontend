import React, { Component } from "react";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import MypageHome from "../view/MyPage_Home";
import MypagePost from "../view/MyPage_Post";
import "../scss/myPageContainer.scss";
import {inject, observer} from "mobx-react"
import MypageUser from "../view/MyPage_user";
import PointPage from "../../point/PointPage";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";


@inject("Store")
@observer

class Mypagecontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curr_component: "home",
    };
  }

  onClickEvent = (params) => {
    this.setState({ curr_component: `${params}` });
  };

      
  onSubmitForm =(userObj, validationCheck)=>{
    const {user} =this.props.Store;
    console.log("container on submit form : "+userObj)
    user.updateUser(userObj)

    if(validationCheck===true){
        this.onValidationCheck(validationCheck)
    }
}


  componentDidMount(){
    // const curr_user = this.props.Store.oauth.currentUser;
    this.props.Store.attendance.getAllList()
    const user = this.props.Store.oauth.currentUser
    if(user.id !==undefined){
        this.props.Store.list.getlistById(user.id)
      }
    }

  render() {
    const state = this.state.curr_component;
    const user = this.props.Store.oauth.currentUser;
    let {allList} = this.props.Store.attendance;
    let {listById} =this.props.Store.list;

    const goToPoint = () => {
      this.setState({curr_component: "point"});
    };

        if(!this.props.Store.oauth.isLogin) {
      // swal("접근 거부 !","로그인 후 사용가능합니다 !", "warning");
      // return <Redirect
      //     to={{
      //     pathname: "/login",
      //     state: { from: this.props.location }
      // }}/>;            
  }
    const isLogin = this.props.Store.oauth.isLogin;

    if(isLogin!==undefined){
      // console.log("isLogin : ", isLogin)
      // this.props.Store.list.getlistById(user.id);
    }

    console.log(listById)

  //       if(!this.props.Store.oauth.isLogin) {
  //     swal("접근 거부 !","로그인 후 사용가능합니다 !", "warning");
  //     return <Redirect
  //         to={{
  //         pathname: "/login",
  //         state: { from: this.props.location }
  //     }}/>;            
  // }

    return (
      
      <div name="MyPage_container" className="MyPage_container">
        <h1 class="MyPage_container_title">마이 페이지</h1>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            inverted
            vertical
            visible
            width="thin"
          >
            <Menu.Item
              as="a"
              onClick={() => this.onClickEvent("home")}
            >
              <br></br>
              <Icon name="home" />
              홈
            </Menu.Item>
            <Menu.Item
              as="a"
              onClick={() => this.onClickEvent("post")}
            >
              <Icon name="book" />
              게시글
            </Menu.Item>
            {/* <Menu.Item
              as="a"
              onClick={() => this.onClickEvent("user")}
            >
               <Icon name="male" />
              회원정보
            </Menu.Item> */}
            <Menu.Item
              as="a"
              onClick={() => this.onClickEvent("point")}
            >
              <i id="coin" class="fas fa-coins"></i>
              Point
            </Menu.Item>
          </Sidebar>
          <div className="MyPage_curr">
            {this.user}
            {state === "home" && <MypageHome isLogin={isLogin} user ={user} allList={allList} onClickPoint={goToPoint}/>}
            {state === "post" && <MypagePost />}
            {state === "user" && <MypageUser user={user} onSubmitForm={this.onSubmitForm}/>}
            {state === "point" && <PointPage user={user} />}
          </div>

          <Sidebar.Pusher>
            <Segment basic></Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Mypagecontainer;