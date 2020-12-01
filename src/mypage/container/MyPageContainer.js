import React, { Component } from "react";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import MypageHome from "../view/MyPage_Home";
import MypagePost from "../view/MyPage_Post";
import "../scss/myPageContainer.scss";
import {inject, observer} from "mobx-react"
import MypageUser from "../view/MyPage_user";
import PointPage from "../../point/PointPage";
// import { Redirect } from "react-router-dom";
// import Swal from 'sweetalert2'
import { getCurrentUser } from "../../oauth/api/APIUtils"


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
    user.updateUser(userObj)

    if(validationCheck===true){
        this.onValidationCheck(validationCheck)
    }
}




  componentDidMount = async()=>{
     getCurrentUser().then(async(res)=>{
      const accountId = res.id;
     await this.props.Store.otherUser.getOtherUser(accountId);
     await this.props.Store.list.getCommentList(accountId);
     await this.props.Store.otherUser._recently_top5();

     })

    }


  render() {
    const state = this.state.curr_component;
    const {user} = this.props.Store.otherUser;
    const {likes} = this.props.Store.otherUser
    const {answers} =this.props.Store.otherUser;
    const top5 = this.props.Store.otherUser.recentTop5;
    let {attendDate} = this.props.Store.otherUser
    let {commentList} = this.props.Store.list;
 
    let questionListByuser =this.props.Store.otherUser.questions

    const goToPoint = () => {
      this.setState({curr_component: "point"});
    };


    const isLogin = this.props.Store.oauth.user;

    
    // if(user.id===undefined){
    //   Swal.fire({
    //     icon:"error",
    //     title: ' 잘못된 접근 ',
    //     text: "로그인 후 이용해주세요!",
    //     confirmButtonText: `로그인하러가기`,
    //   }).then((result) => {
    //     /* Read more about isConfirmed, isDenied below */
    //     if (result.isConfirmed) {
    //       this.props.history.push({
    //         pathname: `/login`
    //       });
    //     } 
    // })}



    return (
      
      <div className="MyPage_container">
        <h1 className="MyPage_container_title">마이 페이지</h1>
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
              onClick={() => this.onClickEvent("point")}
            >
              <i id="coin" className="fas fa-coins"></i>
              Point
            </Menu.Item>
          </Sidebar>
          <div className="MyPage_curr">
            {this.user}
            {state === "home" && <MypageHome top5={top5} answers={answers} questionListByuser={questionListByuser} likes={likes} isLogin={isLogin} user ={user} attendDate={attendDate} onClickPoint={goToPoint}/>}
            {state === "post" && <MypagePost commentList={commentList} questionListByuser={questionListByuser}  />}
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