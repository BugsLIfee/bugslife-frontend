import React, { Component } from "react";
import HeaderContainer from "./header/container/HeaderContainer";
import Footer from "./footer/Footer";
import MainContainer from "./main/container/MainContainer";
import ListContainer from "./list/container/ListContainer";
import DetailPage from "./detail/DetailPage";
import AdminContainer from "./admin/container/AdminContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactContainer from "./contact/container/ContactContainer";
import Mypagecontainer from "./mypage/container/MyPageContainer";
import "./header/view/scss/header.scss";
import "./footer/footer.scss";
import PostingContainer from "./posting/container/PostingContainer";
import Testcontainer from "./mypage/container/TestContainer";
//import Singupcontainer from "./user/container/SingupContainer";
import Freeboardlistcontainer from "./freeBoard/container/FreeBoardListContainer";
import Login from './oauth/login/Login';
import Signup from './oauth/signup/Signup';
import Profile from './oauth/profile/Profile';
import OAuth2RedirectHandler from './oauth/oauth2/OAuth2RedirectHandler';
import NotFound from './oauth/common/NotFound';
import LoadingIndicator from './oauth/common/LoadingIndicator';
import PrivateRoute from './oauth/common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import { getCurrentUser } from './oauth/api/APIUtils';
import { ACCESS_TOKEN } from './oauth/constants/index';
import LoginContainer from "./oauth/login/LoginContainer";
import ProfileContainer from "./oauth/profile/ProfileContainer";
import FreeBoardContainer from "./freeBoard/container/FreeBoardContainer";
import Freeboarddetailcontainer from "./freeBoard/container/FreeBoardDetailContainer";
import PointPage from "./point/PointPage";
import FreeboardEditorContainer from "./freeBoard/view/Editor/container/FreeboradEditorContainer";


// import {observer,inject} from "mobx-react";

// @inject("Store")
// @observer
class App extends Component {

   constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }
   }
  
  //   this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
  //   this.handleLogout = this.handleLogout.bind(this);
  // }

  

  // handleLogout() {
  //   localStorage.removeItem(ACCESS_TOKEN);
  //   this.setState({
  //     authenticated: false,
  //     currentUser: null
  //   });
  //   alert.success("로그아웃 되었습니다! ");
  // }

  // loadCurrentlyLoggedInUser() {
  //   this.loading= true;
    
  //   getCurrentUser()
  //   .then(response => {
  //       console.log("잘받아오나요?",response);
  //       this.currentUser= response;
  //       this.authenticated=true;
  //       this.loading=false;
  //   }).catch(error => {
  //       this.loading=false;
  //   });    
    
  //   console.log("로드커런틀리", this.getCurrentUserInfo);

  // }
  // componentDidMount() {
  //   this.loadCurrentlyLoggedInUser();
  // }
  
  
  render() {

    if(this.state.loading) {
      return <LoadingIndicator />
    }


  return (
    <>
      <div className="header_place">
        <HeaderContainer />
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={MainContainer} exact={true} />
          <Route path="/list" component={ListContainer} exact={true} />
          <Route path="/detail" component={DetailPage} exact={true} />
          <Route path="/admin/:menu" component={AdminContainer} />
          <Route path="/contact/:menu" component={ContactContainer} />
          <Route path="/mypage" component={Mypagecontainer} exact={true} />
          <Route path="/api/mypage" component={Testcontainer} exact={true} />
          <Route path="/posting" component={PostingContainer} exact={true} />
          <PrivateRoute path="/profile"  component={ProfileContainer} exact={true} />
            {/* <Route path="/login"
              render={(props) => <Login authenticated={this
              .state.authenticated} {...props} />}/> */}
            <Route path="/signup"
              render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}/>
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>  
          <Route path="/login" component={LoginContainer} exact={true}/> 
          {/* <Route component={NotFound}></Route> */}
          <Route path="/freeboard" component={FreeBoardContainer} exact={true} />
          <Route path="/freeboard_detail" component={Freeboarddetailcontainer} exact={true} />
          <Route path="/point" component={PointPage} />
          <Route path="/posting_fr" component={FreeboardEditorContainer} />


        </Switch>
      </Router>
      <div className="footer_place">
        {" "}
        <Footer />
      </div>
      <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
    </>
  )
  }
}

export default App
