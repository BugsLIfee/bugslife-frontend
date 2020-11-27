import React, { Component } from 'react';
import './Signup.css';
import { Link, Redirect } from 'react-router-dom'
import { GOOGLE_AUTH_URL, GITHUB_AUTH_URL } from '../constants/index';
import { signup } from '../api/APIUtils';
//import fbLogo from '../img/fb-logo.png';
import googleLogo from '../img/google-logo.png';
import githubLogo from '../img/github-logo.png';
//import Alert from 'react-s-alert';
import { Icon } from 'semantic-ui-react';
import { inject, observer } from "mobx-react";


import swal from 'sweetalert';
@inject("Store")
@observer
class Signup extends Component {
    render() {

        if(this.props.Store.oauth.isLogin) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title"><Icon name="signup"/>　BUGSLIFE 회원 가입하기 </h1>
                    <SocialSignup />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <SignupForm {...this.props} />
                    <br/>
                    <span className="login-link">이미 계정이 있으신가요? <Link to="/login">로그인하러가기!</Link></span>
                </div>
            </div>
        );
    }
}


class SocialSignup extends Component {
    render() {
        return (
            <div className="social-signup">
                <div className="social-singup-btn">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" />Google로 가입하기</a>
                </div>
                <div className="social-singup-btn">
                <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
                    <img src={githubLogo} alt="Github" /> Github로 가입하기</a>
                </div>
              
               
            </div>
        );
    }
}

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    handleSubmit(event) {
        event.preventDefault();   

        const signUpRequest = Object.assign({}, this.state);
        signup(signUpRequest)
        .then(response => {
            //Alert.success("성공적으로 가입이 되셨습니다!! 로그인 해주세요^^");
            this.props.history.push("/login");
            return swal("✨가입성공✨","로그인 해주세요😊","success");
        }).catch(error => {
            //Alert.error((error && error.message) || '가입 중 에러가 발생하였습니다. 다시 시도해주세요!!');            
            this.props.history.push("/login");
            alert((error && error.message) || '가입 중 에러가 발생하였습니다. 다시 시도해주세요..!');            
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="text" name="name" 
                        className="form-control" placeholder="이름"
                        value={this.state.name} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="email" name="email" 
                        className="form-control" placeholder="이메일"
                        value={this.state.email} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password" 
                        className="form-control" placeholder="비밀번호"
                        value={this.state.password} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary" > 가입하기 </button>
                </div>
            </form>                    

        );
    }
}

export default Signup