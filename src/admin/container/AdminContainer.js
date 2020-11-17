import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import AdminRoutes from "../../routes/AdminRoutes";
import AdminSideMenu from "../view/AdminSideMenu";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";

@inject("Store")
@observer
class AdminContainer extends Component {
//   componentDidMount() {
//   if(!this.props.Store.oauth.isAdmin) {
//     swal("접근 거부 !","관리자만 접근 허용된 페이지입니다.", "warning");
//     return <Redirect
//         to={{
//         pathname: "/login",
//         state: { from: this.props.location }
//     }}/>;   
//   }
// }
  render() {
    const match = this.props.match;
  //     if(!this.props.Store.oauth.isAdmin) {
  //   swal("접근 거부 !","관리자만 접근 허용된 페이지입니다.", "warning");
  //   return <Redirect
  //       to={{
  //       pathname: "/login",
  //       state: { from: this.props.location }
  //   }}/>;   
  // }
    return (
     
      <div class="admincontainer">
        <div className="admin-header">
          <span role="img" aria-label="aria">
            <h2 className="amdin-header-title">👀 관리자 페이지</h2>
          </span>
        </div>
       
        <div className="admin-main">
          <div className="admin-main-side">
            <AdminSideMenu/>
          </div>
          <div className="admin-main-page">
            <AdminRoutes match={match}/>
          </div>
        </div>

      </div>
 
    );
  }
}

export default AdminContainer;
