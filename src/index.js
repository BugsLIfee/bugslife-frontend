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

ReactDOM.render(
  <BrowserRouter>
    <Provider Store={new CommonStore()}>
      <Route
        path={[
          "/",
          "/list",
          "/detail",
          "/admin/:menu",
          "/contact/:menu",
          "/user/:menu",
          "/login",
          "/signUp",
          "/mypage",
          "/posting",
          "/api/mypage",
          "/freeboard",
          "/point"
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
