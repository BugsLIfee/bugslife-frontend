import React, { Component } from 'react';
import io from "socket.io-client";
import "../styles/premiumchat-common.scss";
import "../styles/premiumchat-chatroom.scss";
import "../styles/premiumchat-index.scss";
import ChatroomPage from '../pages/ChatroomPageHook';
import { inject, observer } from 'mobx-react';
// import qs from "qs";
// import { withRouter } from 'react-router-dom';

// @withRouter
@inject("Store")
@observer
class PremiumChatIndexContainer extends Component{

   constructor(props) {
  
        super(props);
        this.state = {
            socket: null,
            
        }
    }

    componentDidMount (){
        this.setupSocket();
      
    }

    setupSocket () {
        const socket = this.state.socket;
        //const token = localStorage.getItem("bugslife");//ACCESS_TOKEN
        console.log("socket전?",socket);
        if (socket===null) {
            // if (token && !socket) {
                const newSocket = io("http://localhost:8085", {path:"/socket.io"});
                
                this.setState({socket:newSocket});
            }
            console.log("socket?",socket);
    };


    render(){


    const socket = this.state.socket;
   
        return (
            <div className="premium-chat">
                <div className="premium-chat-header">
                    <h4>
                    PREMIUM CHATTING ROOM
                    </h4>
                </div>
                <div className="premium-chat-body">
                    <ChatroomPage socket={socket} />
                </div>

            </div>
        );
    }
}

export default PremiumChatIndexContainer;