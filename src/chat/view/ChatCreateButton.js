import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChatCreateButton extends Component {
    render() {
        return (
                <Button text="채팅방생성" as ={Link} to="/create-chatroom"/>
        );
    }
}

export default ChatCreateButton;