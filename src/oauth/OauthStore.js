import { observable , computed, action} from "mobx";
import { getCurrentUser } from './api/APIUtils';
import { ACCESS_TOKEN } from './constants/index';
import swal from 'sweetalert';

//import Alert from 'react-s-alert';
class OauthStore {


@observable
authenticated=false ;
@observable
currentUser={};
@observable
loading=false ;
@observable
isAdmin=false ;


@computed
get isLogin(){
    console.log("인증됐니?",this.authenticated)
    return this.authenticated? this.authenticated: false;
}
@computed
get isLoading(){
    return this.loading? this.loading: false;
}
@computed
get getCurrentUserInfo(){
    return this.currentUser? this.currentUser: {};
}
@computed
get getIsAdmin(){
    return this.isAdmin? this.isAdmin: false;
}

@action
loadCurrentlyLoggedInUser() {
    this.loading= true;
    
    getCurrentUser()
    .then(response => {
        console.log("로그인 유저 잘받아오나요?",response);
        this.currentUser= response;
        this.authenticated=true;
        this.loading=false;
        if(response.role==="ADMIN"){
            this.isAdmin=true;
        }
    }).catch(error => {
        this.loading=false;
    });    
    
   

  }
    
  @action
  onLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    
    this.authenticated= false;
    this.currentUser= null;
    this.isAdmin = false;
    

    swal({
        title: "로그아웃하시겠습니까?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willLogout) => {
        if (willLogout) {
            swal("로그아웃되셨습니다!!", {
            icon: "success",
            });
            window.open("/");
        } else {
            swal("일시적인 장애로 로그아웃 실패! ");
        }
        
    });



 }


}


export default OauthStore;