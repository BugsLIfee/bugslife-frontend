import React from "react";
import HeaderContainer from "./header/container/HeaderContainer";
import Footer from "./footer/Footer";
import MainContainer from "./main/container/MainContainer";
import ListContainer from "./list/container/ListContainer";
import DetailContainer from "./detail/container/DetailContainer";
import AdminContainer from "./admin/container/AdminContainer";
import TagContainer from "./tag/container/TagContainer";
import SignUpPage from "./user/view/SignUp";
import LoginPage from "./user/view/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactContainer from "./contact/container/ContactContainer";
import MypagePost from "./mypage/view/MyPage_Post";
import Mypagecontainer from "./mypage/container/MyPageContainer";
import "./header/view/scss/header.scss";
import PostingContainer from "./posting/container/PostingContainer";

function App() {
  return (
    <>
      <div className="header_place">
        <HeaderContainer />
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={MainContainer} exact={true} />
          <Route path="/tag" component={TagContainer} exact={true} />
          <Route path="/list" component={ListContainer} exact={true} />
          <Route path="/detail" component={DetailContainer} exact={true} />
          <Route path="/admin/:menu" component={AdminContainer} />
          <Route path="/signUp" component={SignUpPage} exact={true} />
          <Route path="/login" component={LoginPage} exact={true} />
          <Route path="/contact/:menu" component={ContactContainer} />
          <Route path="/mypage" component={Mypagecontainer} exact={true} />
          <Route path="/mypage/posts" component={MypagePost} exact={true} />
          <Route path="/posting" component={PostingContainer} exact={true} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
