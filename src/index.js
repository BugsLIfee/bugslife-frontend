import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "mobx-react";
import CommonStore from "./common/Store";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Chat from "./premiumChat/components/Chat/Chat";


ReactDOM.render(
  <BrowserRouter>
    <Provider Store={new CommonStore()}>
      <Route path="/private-chat" component={Chat} exact={true}/>
      <Route
        path={[
          "/",
          "/list",
          "/detail/:id",
          "/admin/:menu",
          "/contact/:menu",
          "/user/:menu",
          "/loginTo",
          // "/login",
          "/signup",
          "/mypage",
          "/posting",
          "/api/mypage",
          "/freeboard",
          "/freeboard/detail/:id",
          "/freeboard/edit/:id",
          "/oauth2/redirect",
          "/profile",
          "/posting_fr",
          "/point",
          "/attendance",
          "/education",
          "/edu/academy/:aid",
          "/edu/info/:eid",
          "/test",
          "/otherUser/:uid",
          "/chat-bot",
          "/all-chat/:menu",
          "/all-chat/:menu/:id",
          "/detail/modify",
          // "/premium-chat",
          "/join"

        ]}
        component={App}
        exact={true}
      />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
