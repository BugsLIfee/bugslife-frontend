import React from "react";
import HeaderContainer from "./header/container/HeaderContainer";
import Footer from "./footer/Footer";
import MainContainer from "./main/container/MainContainer";
import ListContainer from "./list/container/ListContainer";
import DetailPage from "./detail/DetailPage";
import AdminContainer from "./admin/container/AdminContainer";
// import TagContainer from "./tag/container/TagContainer";
import LoginPage from "./user/view/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactContainer from "./contact/container/ContactContainer";
import Mypagecontainer from "./mypage/container/MyPageContainer";
import "./header/view/scss/header.scss";
import "./footer/footer.scss";
import PostingContainer from "./posting/container/PostingContainer";
import Testcontainer from "./mypage/container/TestContainer";
import Singupcontainer from "./user/container/SingupContainer";
import FreeBoardContainer from "./freeBoard/container/FreeBoardContainer";

function App() {
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
          <Route path="/signUp" component={Singupcontainer} exact={true} />
          <Route path="/login" component={LoginPage} exact={true} />
          <Route path="/contact/:menu" component={ContactContainer} />
          <Route path="/mypage" component={Mypagecontainer} exact={true} />
          <Route path="/api/mypage" component={Testcontainer} exact={true} />
          <Route path="/posting" component={PostingContainer} exact={true} />
          <Route path="/freeboard" component={FreeBoardContainer} exact={true} />
        </Switch>
      </Router>
      <div className="footer_place">
        {" "}
        <Footer />
      </div>
    </>
  )
}

export default App
