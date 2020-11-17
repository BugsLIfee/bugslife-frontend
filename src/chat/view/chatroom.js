import React, { Component } from 'react';
import ChatDetailContainer from '../container/ChatDetailContainer';
import ChatUserContainer from '../container/ChatUserContainer';
import ChatForm from './ChatForm';

class ChatRoom extends Component {
    render() {
        return (
            <div>
                <h1>채팅방 제목</h1>
                <a id="exit-btn" href="/">방 나가기</a>
                <ChatUserContainer/>
                <div>
                    <legend>채팅 내용</legend>
                        <div id="chat-list">
                            <ChatDetailContainer/>
                        </div>
                  
                </div>
                <ChatForm/>
            </div>
        );
    }
}

export default ChatRoom;