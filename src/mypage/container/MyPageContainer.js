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
import { getCurrentUser } from "../../oauth/api/APIUtils"


@inject("Store")
@observer
class Mypagecontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curr_component: "home",
      qlistById :[]
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

    this.props.Store.attendance.getAllList()
    // this.props.Store.list.allList();

     getCurrentUser().then((res)=>{
      const accountId = res.id;
      this.props.Store.list.getlistById(accountId);
      this.props.Store.list.getCommentList(accountId)
     })

    }


  render() {
    // this.test()
    const state = this.state.curr_component;
    const user = this.props.Store.oauth.currentUser;
    let {allList} = this.props.Store.attendance;
    let {commentList} = this.props.Store.list;

    console.log("CommentList ========")
    console.log(commentList);
    // let testList = 

    // this.props.Store.list.getlistById(user.id)

    let questionListByuser =this.props.Store.list.getQlistById
    // let questionListByuser = questionList.filter(val=> val.writerId === user.id);


    // console.log("list========>")
    // console.log(this.state.qlistById)
    
    const goToPoint = () => {
      this.setState({curr_component: "point"});
    };


    const isLogin = this.props.Store.oauth.isLogin;


  //       if(!this.props.Store.oauth.isLogin) {
  //     swal("접근 거부 !","로그인 후 사용가능합니다 !", "warning");
  //     return <Redirect
  //         to={{
  //         pathname: "/login",
  //         state: { from: this.props.location }
  //     }}/>;            
  // }

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
              <i id="coin" className="fas fa-coins"></i>
              Point
            </Menu.Item>
          </Sidebar>
          <div className="MyPage_curr">
            {this.user}
            {state === "home" && <MypageHome questionListByuser={questionListByuser} isLogin={isLogin} user ={user} allList={allList} onClickPoint={goToPoint}/>}
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