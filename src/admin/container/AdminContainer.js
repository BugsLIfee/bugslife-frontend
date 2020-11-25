import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import AdminRoutes from "../../routes/AdminRoutes";
import AdminSideMenu from "../view/AdminSideMenu";
import swal from "sweetalert";
import { getCurrentUser } from "../../oauth/api/APIUtils"


@inject("Store")
@observer
class AdminContainer extends Component {
  componentDidMount =async ()=> {
   await getCurrentUser().then( async(res)=>{
      const admin = res.role;
    
      if(admin!=="ADMIN"){
        await swal("접근 거부 !","관리자만 접근 허용된 페이지입니다.", "warning");
        document.location.href = "/"   
      }
     })

    }

  render() {
    const match = this.props.match;

    return (

      <div class="admincontainer">
        
        <div className="admin-header">
          
            <h2 className="amdin-header-title">
            <span role="img" aria-label="aria">👀 관리자 페이지</span>
            </h2>
     
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
