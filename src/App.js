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
import Mypage from "./user/view/MyPage";

function App() {
  return (
    <>
      <HeaderContainer />
      <Router>
        <Switch>
          <Route exact path="/" component={MainContainer} exact={true} />
          <Route path="/tag" component={TagContainer} exact={true} />
          <Route path="/list" component={ListContainer} exact={true} />
          <Route path="/detail" component={DetailContainer} exact={true} />
          <Route path="/admin/:menu" component={AdminContainer} exact={true} />
          <Route path="/signUp" component={SignUpPage} exact={true} />
          <Route path="/login" component={LoginPage} exact={true} />
          <Route path="/myPage" component={Mypage} exact={true} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
