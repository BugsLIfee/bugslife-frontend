import axios from "axios";
import { get } from "mobx";

class UserApi{
    URL = "/api/mypage/";

    userList(){
        return axios.get(this.URL).then((response)=> (response && response.data) || null)
    }

    userUpdate(userApiModel){
        let userJson = JSON.stringify(userApiModel);
        return axios.put(this.URL, userJson).then((response)=> (response&& response.data)||null)
    }

    userDetail(uid){
        return(
            axios.get(this.URL + `${uid}/`)
            .then((response)=>(response && response.data) || null)
        )
    }

}

export default UserApi;