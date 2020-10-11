import axios from "axios";

class UserApi{
    URL = "/api/mypage/";
    URL_SIGNUP = "/api/signup/"


    userCreate(user){
        //let userJson = JSON.stringify(user);
        return axios.post(this.URL_SIGNUP, user)
        .then((response)=>(response && response.data )||null)
    }

    userList(){
        let temp = axios.
        get(this.URL)
        .then((response)=> {
            console.log("JSON in UserAPI = "+ JSON.stringify(response.data))
            return JSON.stringify(response.data)
        })

        return temp;
    }

    userUpdate(userApiModel){
        let userJson = JSON.stringify(userApiModel);
        return axios.put(this.URL, userJson).then((response)=> (response&& response.data)||null)
    }

    userDetail(uid){
        return(
            axios.get(this.URL + uid)
            .then((response)=>(response && response.data) || null)
        )
    }

}

export default UserApi;