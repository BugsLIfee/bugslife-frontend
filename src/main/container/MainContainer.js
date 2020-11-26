import React, { Component } from "react";
import MaintopView from "../view/main/MainTopView";
import MainmidView from "../view/main/MainMidView";
import Mainsearchview from "../view/main/MainSearchView";
import Mainsignupview from "../view/main/MainSignupView";
import { observer, inject } from "mobx-react";
import Swal from 'sweetalert2'

@inject("Store")
@observer
class MainContainer extends Component {

  render() {
    let user =this.props.Store.oauth.getCurrentUserInfo;

    if(user.attend === false){
      Swal.fire({
        title: ' ✨ 출석체크 이벤트 ✨ ',
        text: "\n 출석체크 하고 포인트 받아가세요!",
        confirmButtonText: `출석체크`,
        showCancelButton: true,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.props.history.push({
            pathname: `/attendance`
          });
        } 
      })

    }

    return (
      <div>
        <MaintopView />
        <Mainsearchview />
        <MainmidView />
        <Mainsignupview />
      </div>
    );
  }
}

export default MainContainer;
