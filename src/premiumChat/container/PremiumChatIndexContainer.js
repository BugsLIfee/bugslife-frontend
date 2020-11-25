import React, { Component } from 'react';
import io from "socket.io-client";
import "../styles/premiumchat-common.scss";
import "../styles/premiumchat-chatroom.scss";
import "../styles/premiumchat-index.scss";
import makeToast from "../config/Toaster";
import qs from "qs";
import { withRouter } from 'react-router-dom';
import ChatroomPage from '../pages/ChatroomPage';
import ScreenShareBtn from '../screen-share/ScreenSharingBtn';

@withRouter
class PremiumChatIndexContainer extends Component {
    render() {
       const searchObj = qs.parse(this.props.location.search);
        console.log("PremiumChatIndexContainer:",searchObj);
        return (
            <div className="premium-chat">
                <div className="premium-chat-header">
                    <h4>
                    ✨PREMIUM CHATTING ROOM✨
                    </h4>
                </div>
                <div className="premium-chat-body">
                    <ChatroomPage/>
                </div>
                <div className="premium-chat-header">
                <ScreenShareBtn/>
                </div>
            </div>
        );
    }
}

export default PremiumChatIndexContainer;