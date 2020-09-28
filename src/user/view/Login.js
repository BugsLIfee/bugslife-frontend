import React, { Component } from "react";
import {
  Grid,
  Segment,
  Form,
  Header,
  Image,
  Button,
  Message,
  Input,
} from "semantic-ui-react";

import axios from "axios";
import { Link } from "react-router-dom";
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
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 500 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              itemalign: "center",
            }}
          >
            <Image
              src="./logo/logohoho.png"
              style={{ marginBottom: "50px" }}
              as={Link}
              to="/"
            />
          </div>

          <Form size="huge">
            <Segment stacked>
              <Form.Field>
                <Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="ID"
                  onChange={this.onIdChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Passoword"
                  type="password"
                  onChange={this.onPasswordChange}
                />
              </Form.Field>

              <Button
                color="black"
                fluid
                size="huge"
                onClick={() => {
                  this.userLogin();
                }}
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            회원가입하시겠습니까 ? <a href="/signUp">Sign Up</a>
          </Message>
          <Message color="yellow">
            <a href="/kakao"> 카카오톡ID로 로그인하기 </a>
          </Message>
          <Message color="green">
            <a href="/naver">네이버ID로 로그인하기 </a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
