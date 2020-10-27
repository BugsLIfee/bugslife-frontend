import { observable , computed, action} from "mobx";
import { getCurrentUser } from './api/APIUtils';
import { ACCESS_TOKEN } from './constants/index';
//import Alert from 'react-s-alert';
class OauthStore {


@observable
authenticated=false ;
@observable
currentUser={};
@observable
loading=false ;


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

@action
loadCurrentlyLoggedInUser() {
    this.loading= true;
    
    getCurrentUser()
    .then(response => {
        console.log("잘받아오나요?",response);
        this.currentUser= response;
        this.authenticated=true;
        this.loading=false;
    }).catch(error => {
        this.loading=false;
    });    
    
   

  }
    
  @action
  onLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    
    this.authenticated= false;
    this.currentUser= null;
    
   // Alert.success("로그아웃 되었습니다! ");
   alert("로그아웃 되었습니다! ");
    }


}


export default OauthStore;