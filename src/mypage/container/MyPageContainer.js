import React, { Component } from "react";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import MypageHome from "../view/MyPage_Home";
import MypagePost from "../view/MyPage_Post";
import "../scss/myPage.scss";
import {inject, observer} from "mobx-react"
import MypageUser from "../view/MyPage_user";
import PointPage from "../../point/PointPage";


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
    console.log(params);
    this.setState({ curr_component: `${params}` });
  };

      
  onSubmitForm =(userObj, validationCheck)=>{
    const {user} =this.props.Store;
    console.log("container on submit form : "+userObj)
    user.updateUser(userObj)

    if(validationCheck==true){
        this.onValidationCheck(validationCheck)
    }
}


  componentDidMount(){
    const {user} = this.props.Store;
    user.selectUser(1);
  }

  render() {
    const state = this.state.curr_component;
    const {user} = this.props.Store;

    const selected_user = user.getUser
    // console.log("selected_user : "+ selected_user, JSON.stringify(selected_user))
    
    console.log(selected_user)
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
              //   href="/mypage"
              onClick={() => this.onClickEvent("home")}
            >
              <br></br>
              <Icon name="home" />
              홈
            </Menu.Item>
            <Menu.Item
              as="a"
              //   href="/mypage/posts"
              onClick={() => this.onClickEvent("post")}
            >
              <Icon name="book" />
              게시글
            </Menu.Item>
            <Menu.Item
              as="a"
              //   href="/"
              onClick={() => this.onClickEvent("user")}
            >
               <Icon name="male" />
              회원정보
            </Menu.Item>
            <Menu.Item
              as="a"
              //   href="/"
              onClick={() => this.onClickEvent("point")}
            >
              <i id="coin" class="fas fa-coins"></i>
              Point
            </Menu.Item>
          </Sidebar>
          <div className="MyPage_curr">
            {this.user}
            {state === "home" && <MypageHome user ={selected_user} />}
            {state === "post" && <MypagePost />}
            {state === "user" && <MypageUser user={selected_user} onSubmitForm={this.onSubmitForm}/>}
            {state === "point" && <PointPage user={selected_user} />}
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