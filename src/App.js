import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./header/view/scss/header.scss";
import "./footer/footer.scss";
import OAuth2RedirectHandler from './oauth/oauth2/OAuth2RedirectHandler';
import LoadingIndicator from './oauth/common/LoadingIndicator';
import PrivateRoute from './oauth/common/PrivateRoute';
//import Alert from 'react-s-alert';
// import 'react-s-alert/dist/s-alert-default.css';
// import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import { 
  HeaderContainer, 
  Footer, 
  AdminContainer,
  AdminRoutes,
  ContactContainer, 
  LoginContainer, 

  ProfileContainer, 
  Mypagecontainer, 
  PointPage, 
  FreeBoardContainer, 
  Freeboarddetailcontainer, 
  FreeboardEditorContainer, 
  MainContainer, 
  ListContainer, 
  DetailPage, 
  PostingContainer,
  Attendancecontainer, 
  EduListContainer,
  EduDetailContainer,
  OtherUserContainer,
 } from "./Routes";

import { getCurrentUser } from './oauth/api/APIUtils';
import { ACCESS_TOKEN } from './oauth/constants/index';

import Signup from "./oauth/signup/Signup";




class App extends Component {

   constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }
   }

  
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
          <Route path="/admin" component={AdminContainer}  />
          <Route path="/contact/:menu" component={ContactContainer} />
          <Route path="/mypage" component={Mypagecontainer} exact={true} />
          <Route path="/posting" component={PostingContainer} exact={true} />
          <Route path="/attendance" component={Attendancecontainer} exact={true} />
          <Route path="/profile"  component={ProfileContainer} exact={true} />
            <Route path="/signup" component={Signup} exact={true}/>
          
            {/* <Route path="/signup"
              render={(props) => <Signup authenticated={this.state.authenticated}
               {...props} />}/> */}
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>  
          <Route path="/login" component={LoginContainer} exact={true}/> 
          {/* <Route component={NotFound}></Route> */}
          <Route path="/freeboard" component={FreeBoardContainer} exact={true} />
          <Route path="/freeboard_detail" component={Freeboarddetailcontainer} exact={true} />
          <Route path="/point" component={PointPage} />
          <Route path="/posting_fr" component={FreeboardEditorContainer} />
          <Route path="/edu" component={EduListContainer} exact={true} />
          <Route path="/edu/detail" component={EduDetailContainer} exact={true} />
          <Route path="/otherUser" component={OtherUserContainer}/>
        </Switch>
      </Router>
      <div className="footer_place">
        {" "}
        <Footer />
      </div>
      {/* <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='center' effect='slide' offset={65} /> */}
    </>
  )
  }
}

export default App
