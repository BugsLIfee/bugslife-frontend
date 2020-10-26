import React, { Component } from 'react';
import Login from './Login';

import {observer,inject} from "mobx-react";

@inject("Store")
@observer
class LoginContainer extends Component {
    render() {
        return (
            <div>
                <Login authenticated={this.props.Store.oauth.authenticated} {...this.props}/>
            </div>
        );
    }
}

export default LoginContainer;