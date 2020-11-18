import axios from "axios"
import { AUTH_API_URL , ACCESS_TOKEN } from '../constants/index';

export function  request  (options)  {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' +localStorage.getItem(ACCESS_TOKEN))
    }
    

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(
        response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    )
    .catch(function (error) {
        console.log("오나요?? => ")
        console.log(error)
            //토큰인증에 실패한 경우 로그인화면으로 이동
            if (error.response) {
                if(errorTypeCheck(error.response.data.error)) window.location.href="/signup";  
                }
            });
    ;
};

// 인증 에러 체크
const errorTypeCheck=(error)=>{
    if(error ==="unauthorized") return true;
    if(error ==="invalid_token") return true;

    return false;
}

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: AUTH_API_URL + "/user/me",
        method: 'GET'
    });
}


export function login(loginRequest) {
    return request({
        url: AUTH_API_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: AUTH_API_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}