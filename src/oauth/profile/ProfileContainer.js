import React, { Component } from 'react';
import Profile from './Profile';
import {observer,inject} from "mobx-react";

@inject("Store")
@observer
class ProfileContainer extends Component {
    render() {
        console.log("도착");
        const oauth = this.props.Store.oauth;
        return (
            <div>
                <Profile currentUser={oauth.getCurrentUserInfo} authenticated={oauth.isLogin}/>
            </div>
        );
    }
}

export default ProfileContainer;