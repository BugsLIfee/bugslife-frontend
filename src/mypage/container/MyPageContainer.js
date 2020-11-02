import React, { Component } from "react";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import MypageHome from "../view/MyPage_Home";
import MypagePost from "../view/MyPage_Post";
import "../scss/myPageContainer.scss";
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
    const curr_user = this.props.Store.oauth.currentUser;
    console.log(curr_user)
  }

  render() {
    const state = this.state.curr_component;
    const user = this.props.Store.oauth.currentUser;

    const goToPoint = () => {
      this.setState({curr_component: "point"});
    };
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
            <Menu.Item
              as="a"
              onClick={() => this.onClickEvent("user")}
            >
               <Icon name="male" />
              회원정보
            </Menu.Item>
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
            {state === "home" && <MypageHome user ={user} onClickPoint={goToPoint}/>}
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