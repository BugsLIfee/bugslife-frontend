import React, { Component } from 'react';
import io from "socket.io-client";
import "../styles/premiumchat-common.scss";
import "../styles/premiumchat-chatroom.scss";
import "../styles/premiumchat-index.scss";
import makeToast from "../config/Toaster";
import ChatroomPage from '../pages/ChatroomPageHook';
import { inject, observer } from 'mobx-react';
// import qs from "qs";
// import { withRouter } from 'react-router-dom';

// @withRouter
function PremiumChatIndexContainer() {
  const [socket, setSocket] = React.useState(null);

  const setupSocket = () => {
    // const token = localStorage.getItem("bugslife");//ACCESS_TOKEN
    if (!socket) {
      const newSocket = io("http://localhost:8085", {
 path:"/socket.io"
      });

      newSocket.on("disconnect", () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
        makeToast("error", "Socket Disconnected!");
      });

      newSocket.on("connect", () => {
        makeToast("success", "Socket Connected!");
      });

      setSocket(newSocket);
    }
  };

  React.useEffect(() => {
    setupSocket();
    //eslint-disable-next-line
  }, []);


   
        return (
            <div className="premium-chat">
                <div className="premium-chat-header">
                    <h4>
                    ✨PREMIUM CHATTING ROOM✨
                    </h4>
                </div>
                <div className="premium-chat-body">
                    <ChatroomPage socket={socket} />
                </div>
            </div>
        );
        
}

export default PremiumChatIndexContainer;