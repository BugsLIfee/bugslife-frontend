import React, { Component } from 'react';
import AllChatRoutes from '../../routes/AllChatRoutes';
import "../styles/common.css";
import "../styles/chatroom.css";
import "../styles/allchat-index.scss";
import io from "socket.io-client";
import makeToast from "../config/Toaster";

class AllChatIndexContainer extends Component {
    render() {
        
        return (
            <div className="allchat">
                <div className="allchat-header">
                <h2>💬모두의 채팅방🗨</h2>
                </div>
                <div className="allchat-body">
                 <AllChatRoutes match={this.props.match}/>
                </div>
            </div>
        );
    }
}

export default AllChatIndexContainer;