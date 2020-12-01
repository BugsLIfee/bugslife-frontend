import React, { Component } from "react";
import "./scss/myPage_UserEditView.scss"

class MyPageEditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {"email" : this.props.user.email, "name": this.props.user.name},
      errors: {},
      validation : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.onSubmitForm = this.onSubmitForm.bind(this);
  }

     

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input
    });

  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.validate()){

        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";

        //여기에서 container로 보내줘
        this.setState({input:input});
        this.setState({validation: true})

        this.props.onSubmitForm(this.state.input, this.state.validation)

        alert('정보 변경이 완료되었습니다.');
    }

    alert("입력하신 정보가 올바르지 않습니다.")
  }


  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "닉네임은 필수 입력 항목입니다.";
      }

      if (!input["email"]) {
        isValid = false;
        errors["email"] = "이메일은 필수 입력 항목입니다.";
      }

      if (typeof input["email"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "올바른 이메일 형식을 입력해주세요.";
        }
      }

      if (!input["password"]) {
        isValid = false;
        errors["password"] = "비밀번호는 필수 입력 항목입니다.";
      }

      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "비밀번호 확인은 필수 입력 항목입니다.";
      }

      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
        if (input["password"] !== input["confirm_password"]) {

          isValid = false;
          errors["password"] = "패스워드가 일치하지 않습니다.";
        }

      } 
      this.setState({
        errors: errors
      });
      return isValid;

  }

     
  render() {
    return <div className="signup_wrap">
      <div className ="signUp_container">

    <h1 className="signup_title">정보 변경</h1>
    <form className="signup_form" onSubmit={this.handleSubmit}>


{/* 
      <div class="form-group">
        <label for="email"> <h5>이메일 :</h5></label>

        <input 
          type="text" 
          name="email" 
          value={this.state.input.email}
          onChange={this.handleChange}
          class="form-control" 
          placeholder="Enter email" 
          id="email" />

          <div className="text-danger">{this.state.errors.email}</div>

      </div> */}


      <div class="form-group">
        <label for="name"><h5>닉네임 :</h5></label>

        <input 
          type="text" 
          name="name" 
          value={this.state.input.name}
          onChange={this.handleChange}
          class="form-control" 
          placeholder="Enter name" 
          id="name" />

          <div className="text-danger">{this.state.errors.name}</div>
      </div>



      <div class="form-group">
        <label for="password"><h5>비밀번호 :</h5></label>

        <input 
          type="password" 
          name="password" 
          value={this.state.input.password}
          onChange={this.handleChange}
          class="form-control" 
          placeholder="Enter password" 
          id="password" />
          <div className="text-danger">{this.state.errors.password}</div>

      </div>



      <div class="form-group">
        <label for="password"><h5>비밀번호 확인 : </h5></label>

        <input 
          type="password" 
          name="confirm_password" 
          value={this.state.input.confirm_password}
          onChange={this.handleChange}
          class="form-control" 
          placeholder="Enter confirm password" 
          id="confirm_password" />

          <div className="text-danger">{this.state.errors.confirm_password}</div>
      </div>
      <input id="signup_btn" type="submit" value="정보 변경!" class="btn btn-success" />
    </form>
  </div>

</div>
    }
}

export default MyPageEditView;
