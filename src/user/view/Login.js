import React, { Component } from "react";
import axios from "axios";
import "./scss/login.scss"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  userLogin = async () => {
    const api = "/api/login/";
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    return axios.post(api, data).then((res) => {
      console.log(res.data);
    });
  };
  render() {
    return (

      <div className="login_wrap">
        <div className="login_container">
          <h1 className='login_title'>로그인</h1>
         <form className="login_form" onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="email"> <h5>이메일 :</h5></label>

            <input 
                  type="email" 
                  name="email" 
                  value=""
                  onChange={this.onIdChange}
                  class="form-control" 
                  placeholder="이메일을 입력하세요." 
                  id="login_email" />
                  {/* <div className="text-danger">{this.state.errors.email}</div> */}

              </div>


              <div class="form-group">
                <label for="name"><h5>비밀번호 :</h5></label>

                <input 
                  type="password" 
                  name="password" 
                  value=""
                  onChange={this.onPasswordChange}
                  class="form-control" 
                  placeholder="비밀번호를 입력하세요" 
                  id="login_password" />
    
       {/* <div className="text-danger">{this.state.errors.name}</div> */}
                </div>

                <div className="login_btn_div">                
                <button className="login_google_btn login_btn"> <img className="google_logo" src="../login/google_logo.png" />  <h5>로 로그인하기</h5></button>
                <button className="login_basic_btn login_btn" onClick={() => {this.userLogin() }}> <h5>로그인</h5></button>
                </div>

               </form>
            </div>
          </div>
  

      //     <Form size="huge">
      //       <Segment stacked>
      //         <Form.Field>
      //           <Input
      //             fluid
      //             icon="user"
      //             iconPosition="left"
      //             placeholder="ID"
      //             onChange={this.onIdChange}
      //           />
      //         </Form.Field>
      //         <Form.Field>
      //           <Input
      //             fluid
      //             icon="lock"
      //             iconPosition="left"
      //             placeholder="Passoword"
      //             type="password"
      //             onChange={this.onPasswordChange}
      //           />
      //         </Form.Field>

      //         <Button
      //           color="black"
      //           fluid
      //           size="huge"
      //           onClick={() => {
      //             this.userLogin();
      //           }}
      //         >
      //           Login
      //         </Button>
      //       </Segment>
      //     </Form>
      //     <Message>
      //       회원가입하시겠습니까 ? <a href="/signUp">Sign Up</a>
      //     </Message>
      //     <Message color="yellow">
      //       <a href="/kakao"> 카카오톡ID로 로그인하기 </a>
      //     </Message>
      //     <Message color="green">
      //       <a href="/naver">네이버ID로 로그인하기 </a>
      //     </Message>
      //   </Grid.Column>
      // </Grid>
    );
  }
}

export default Login;
