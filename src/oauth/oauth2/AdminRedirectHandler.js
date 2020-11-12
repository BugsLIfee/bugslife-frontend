import React, { Component } from 'react';
// import { ACCESS_TOKEN } from '../constants/index';
import { Redirect } from 'react-router-dom'

class AdminRedirectHandler extends Component {
    getUrlParameter(name) {
        name = name.replace(/[\]]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {        
        // const token = this.getUrlParameter('token');
        const role = this.getUrlParameter('role');
console.log("0000????------",this.getUrlParameter('role'));
        if(role) {
           // localStorage.setItem(ACCESS_TOKEN, token);
            return <Redirect to={{
                pathname: "/admin/member",
                state: { from: this.props.location }
            }}/>; 
        } else {
            alert(" 관리자계정이 아닙니다 ! ");
            return (
            <Redirect to="/"/>
                
            ); 
        }
    }
}

export default AdminRedirectHandler;