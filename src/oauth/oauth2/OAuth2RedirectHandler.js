import React, { Component } from 'react';
import { ACCESS_TOKEN } from '../constants/index';
import { Redirect } from 'react-router-dom'
import swal from 'sweetalert';

class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
        name = name.replace(/[\]]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {        
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');

        if(token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            swal("로그인 성공 !"," BUGSLIFE 에 오신 것을 환영합니다 ", "success");
            
            return <Redirect to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>; 
        }else {
            swal("로그인 실패 !","다시 시도해주세요! ", "warning");
            return <Redirect to={{
                pathname: "/login",
                state: { 
                    from: this.props.location,
                    error: error 
                }
            }}/>; 
        }
    }
}

export default OAuth2RedirectHandler;